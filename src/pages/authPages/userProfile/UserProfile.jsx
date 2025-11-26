import { useEffect, useReducer } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth.js";
import "./style.css";
import {
  updateUserProfile,
  updateUserEmail,
  logout,
  uploadProfilePhoto,
  saveUserData,
  getUserData,
} from "../../../Services/authService.jsx";
import RightColumn from "./RightColumn.jsx";
import LeftColumn from "./LeftColumn.jsx";
import HeaderSection from "./HeaderSection.jsx";
const initialState = {
  displayName: "",
  email: "",
  photoURL: "",
  phone: "",
  bio: "",
  status: null, // { type: 'success'|'error'|'warning', message: string }
  saving: false,
  locked: true,
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
    case "SET_LOCKED":
      return { ...state, locked: action.payload };
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
      await saveUserData(user.uid, { phone, bio });

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
          phone: extra && typeof extra.phone === "string" ? extra.phone : "",
          bio: extra && typeof extra.bio === "string" ? extra.bio : "",
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

  const handleLocked = () => {
    dispatch({ type: "SET_LOCKED", payload: !state.locked });
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header with Breadcrumb */}

        <HeaderSection state={state} />
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          {/* Left Column - Profile Card */}
          <LeftColumn
            state={state}
            user={user}
            handlePhotoChange={handlePhotoChange}
            handleLogout={handleLogout}
          />

          {/* Right Column - Edit Form */}
          <RightColumn
            user={user}
            state={state}
            dispatch={dispatch}
            handleSave={handleSave}
            handleReset={handleReset}
            handleLocked={handleLocked}
          />
        </div>
      </div>
    </section>
  );
}
