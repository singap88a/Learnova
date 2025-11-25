import { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth.js";
import {
  updateUserProfile,
  updateUserEmail,
  logout,
  uploadProfilePhoto,
  saveUserData,
  getUserData,
} from "../../../Services/authService.jsx";

const initialState = {
  displayName: "",
  email: "",
  photoURL: "",
  phone: "",
  bio: "",
  status: null, // { type: 'success'|'error'|'warning', message: string }
  saving: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "LOAD_USER":
      return {
        ...state,
        displayName: action.payload.displayName || "",
        email: action.payload.email || "",
        photoURL: action.payload.photoURL || "",
      };
    case "SET_EXTRA":
      return {
        ...state,
        phone: action.payload.phone || "",
        bio: action.payload.bio || "",
      };
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_STATUS":
      return { ...state, status: action.payload };
    case "SET_SAVING":
      return { ...state, saving: action.payload };
    case "RESET_TO_USER":
      return {
        ...state,
        displayName: action.payload.displayName || "",
        email: action.payload.email || "",
        photoURL: action.payload.photoURL || "",
        phone: action.payload.phone || "",
        bio: action.payload.bio || "",
      };
    default:
      return state;
  }
}

export default function ProfilePage() {
  const user = useAuth();
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!user) return;

    // load basic auth fields
    dispatch({
      type: "LOAD_USER",
      payload: {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      },
    });

    // load extra fields from Firestore
    (async () => {
      try {
        const extra = await getUserData(user.uid);
        if (extra) dispatch({ type: "SET_EXTRA", payload: extra });
      } catch (err) {
        console.error("Failed to load user data:", err);
      }
    })();
  }, [user]);

  const handleSave = async (e) => {
    e?.preventDefault();
    if (!user) {
      dispatch({
        type: "SET_STATUS",
        payload: { type: "error", message: "No authenticated user." },
      });
      return;
    }

    dispatch({ type: "SET_SAVING", payload: true });
    dispatch({ type: "SET_STATUS", payload: null });

    const { displayName, email, photoURL, phone, bio } = state;

    try {
      // Update Auth profile (displayName & photoURL)
      await updateUserProfile({ displayName, photoURL });

      // Save extra profile fields to Firestore
      try {
        await saveUserData(user.uid, { phone, bio });
      } catch (err) {
        console.error("Failed to save extra user data:", err);
      }

      // Update email if changed
      if (email !== user.email) {
        try {
          await updateUserEmail(email);
        } catch (err) {
          // Most common reason: requires recent login
          dispatch({
            type: "SET_STATUS",
            payload: {
              type: "warning",
              message:
                err.message ||
                "Email update failed. You may need to re-login to update your email.",
            },
          });
          dispatch({ type: "SET_SAVING", payload: false });
          return;
        }
      }

      dispatch({
        type: "SET_STATUS",
        payload: { type: "success", message: "Profile updated successfully." },
      });
      setTimeout(() => dispatch({ type: "SET_STATUS", payload: null }), 3000);
    } catch (err) {
      console.error(err);
      dispatch({
        type: "SET_STATUS",
        payload: { type: "error", message: err.message || "Update failed." },
      });
    } finally {
      dispatch({ type: "SET_SAVING", payload: false });
    }
  };

  const handlePhotoChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!user) {
      dispatch({
        type: "SET_STATUS",
        payload: { type: "error", message: "Sign in to upload photo." },
      });
      return;
    }

    dispatch({ type: "SET_SAVING", payload: true });
    try {
      const url = await uploadProfilePhoto(file);
      await updateUserProfile({ photoURL: url });
      dispatch({ type: "SET_FIELD", field: "photoURL", value: url });
      dispatch({
        type: "SET_STATUS",
        payload: { type: "success", message: "Photo uploaded." },
      });
      setTimeout(() => dispatch({ type: "SET_STATUS", payload: null }), 2500);
    } catch (err) {
      console.error(err);
      dispatch({
        type: "SET_STATUS",
        payload: {
          type: "error",
          message: err.message || "Photo upload failed.",
        },
      });
    } finally {
      dispatch({ type: "SET_SAVING", payload: false });
    }
  };

  const handleReset = async () => {
    if (!user) return;
    try {
      const extra = await getUserData(user.uid);
      dispatch({
        type: "RESET_TO_USER",
        payload: {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          phone: extra?.phone,
          bio: extra?.bio,
        },
      });
    } catch (err) {
      console.error("Failed to reload user data for reset:", err);
      dispatch({
        type: "RESET_TO_USER",
        payload: {
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          phone: "",
          bio: "",
        },
      });
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <section className="bg-gray-200 min-h-screen mt-[70px]">
      <div className="container mx-auto py-12 px-4">
        {/* Breadcrumb */}
        <div className="mb-4">
          <nav className="bg-white rounded-lg p-3 mb-4">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  Home
                </a>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  User
                </a>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-600">User Profile</li>
            </ol>
          </nav>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Left Column */}
          <div className="lg:col-span-4">
            {/* Profile Card */}
            <div className="bg-white rounded-lg shadow mb-4">
              <div className="p-6 text-center">
                <img
                  src={
                    state.photoURL ||
                    user?.photoURL ||
                    "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  }
                  alt="avatar"
                  className="rounded-full w-36 h-36 mx-auto mb-4 object-cover"
                />

                <div className="mt-2 mb-4">
                  <label className="block text-sm text-gray-600 mb-1">
                    Change Photo
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                  />
                </div>

                <p className="text-gray-600 mb-1">
                  {state.displayName || "No name provided"}
                </p>
                <p className="text-gray-600 mb-4">
                  {state.email || user?.email || "No email provided"}
                </p>

                <div className="flex justify-center gap-2 mb-2">
                  <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-8">
            {/* Info Card - editable */}
            <div className="bg-white rounded-lg shadow mb-4">
              <div className="p-6">
                {!user ? (
                  <div className="text-center py-8">
                    <p className="text-gray-700 mb-2">
                      No account information available.
                    </p>
                    <p className="text-sm text-gray-500">
                      Please sign in to view or edit your profile.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSave}>
                    <div className="grid grid-cols-3 gap-4 items-center mb-4">
                      <div className="text-gray-700 font-medium">Full Name</div>
                      <div className="col-span-2">
                        <input
                          value={state.displayName}
                          onChange={(e) =>
                            dispatch({
                              type: "SET_FIELD",
                              field: "displayName",
                              value: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 border rounded"
                        />
                      </div>
                    </div>

                    <hr className="my-4 border-gray-200" />

                    <div className="grid grid-cols-3 gap-4 items-center mb-4">
                      <div className="text-gray-700 font-medium">Email</div>
                      <div className="col-span-2">
                        <input
                          value={state.email}
                          onChange={(e) =>
                            dispatch({
                              type: "SET_FIELD",
                              field: "email",
                              value: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 border rounded"
                        />
                      </div>
                    </div>

                    <hr className="my-4 border-gray-200" />

                    <div className="grid grid-cols-3 gap-4 items-center mb-4">
                      <div className="text-gray-700 font-medium">Photo URL</div>
                      <div className="col-span-2">
                        <input
                          value={state.photoURL}
                          onChange={(e) =>
                            dispatch({
                              type: "SET_FIELD",
                              field: "photoURL",
                              value: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 border rounded"
                        />
                      </div>
                    </div>

                    <hr className="my-4 border-gray-200" />

                    <div className="grid grid-cols-3 gap-4 items-center mb-4">
                      <div className="text-gray-700 font-medium">Phone</div>
                      <div className="col-span-2">
                        <input
                          value={state.phone}
                          onChange={(e) =>
                            dispatch({
                              type: "SET_FIELD",
                              field: "phone",
                              value: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 border rounded"
                          placeholder="e.g. +1 555-123-4567"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 items-start mb-4">
                      <div className="text-gray-700 font-medium">Bio</div>
                      <div className="col-span-2">
                        <textarea
                          value={state.bio}
                          onChange={(e) =>
                            dispatch({
                              type: "SET_FIELD",
                              field: "bio",
                              value: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 border rounded"
                          rows={4}
                          placeholder="Short bio about yourself"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-end gap-2 mt-4">
                      <button
                        type="button"
                        onClick={handleReset}
                        className="px-4 py-2 border rounded"
                      >
                        Reset
                      </button>
                      <button
                        type="submit"
                        disabled={state.saving}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                      >
                        {state.saving ? "Saving..." : "Save Changes"}
                      </button>
                    </div>
                  </form>
                )}

                {state.status && (
                  <div
                    className={`mt-4 p-3 rounded ${
                      state.status.type === "error"
                        ? "bg-red-100 text-red-800"
                        : state.status.type === "warning"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {state.status.message}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
