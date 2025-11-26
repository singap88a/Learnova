import { useNavigate, Link } from "react-router-dom";
function RightColumn({
  user,
  state,
  handleSave,
  dispatch,
  handleLocked,
}) {
  const navigate = useNavigate();
  return (
    <div className="xl:col-span-8">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-8">
          {!user ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No Account Found
              </h3>
              <p className="text-gray-600 mb-4">
                Please sign in to view or edit your profile.
              </p>
              <button
                onClick={() => navigate("/login")}
                className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Sign In
              </button>
            </div>
          ) : (
            <form onSubmit={handleSave}>
              <div className="space-y-6">
                {/* Display Name */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                  <div className="md:col-span-1">
                    <label className="block text-sm font-semibold text-gray-900 mb-1">
                      Full Name
                    </label>
                    <p className="text-xs text-gray-500">
                      Your name as it appears
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <input
                      value={state.displayName}
                      onChange={(e) =>
                        dispatch({
                          type: "SET_FIELD",
                          field: "displayName",
                          value: e.target.value,
                        })
                      }
                      disabled={state.locked}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:bg-gray-50 disabled:text-gray-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div className="border-t border-gray-100"></div>

                {/* Email */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                  <div className="md:col-span-1">
                    <label className="block text-sm font-semibold text-gray-900 mb-1">
                      Email Address
                    </label>
                    <p className="text-xs text-gray-500">Your primary email</p>
                  </div>
                  <div className="md:col-span-2">
                    <input
                      value={state.email}
                      onChange={(e) =>
                        dispatch({
                          type: "SET_FIELD",
                          field: "email",
                          value: e.target.value,
                        })
                      }
                      disabled={true}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed"
                      placeholder="your.email@example.com"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      Contact support to change your email
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-100"></div>

                {/* Photo URL */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                  <div className="md:col-span-1">
                    <label className="block text-sm font-semibold text-gray-900 mb-1">
                      Photo URL
                    </label>
                    <p className="text-xs text-gray-500">
                      Direct link to your photo
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <input
                      value={state.photoURL}
                      onChange={(e) =>
                        dispatch({
                          type: "SET_FIELD",
                          field: "photoURL",
                          value: e.target.value,
                        })
                      }
                      disabled={state.locked}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:bg-gray-50 disabled:text-gray-500"
                      placeholder="https://example.com/photo.jpg"
                    />
                  </div>
                </div>

                <div className="border-t border-gray-100"></div>

                {/* Phone */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                  <div className="md:col-span-1">
                    <label className="block text-sm font-semibold text-gray-900 mb-1">
                      Phone Number
                    </label>
                    <p className="text-xs text-gray-500">Your contact number</p>
                  </div>
                  <div className="md:col-span-2">
                    <input
                      value={state.phone}
                      onChange={(e) =>
                        dispatch({
                          type: "SET_FIELD",
                          field: "phone",
                          value: e.target.value,
                        })
                      }
                      disabled={state.locked}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:bg-gray-50 disabled:text-gray-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="border-t border-gray-100"></div>

                {/* Bio */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
                  <div className="md:col-span-1">
                    <label className="block text-sm font-semibold text-gray-900 mb-1">
                      Biography
                    </label>
                    <p className="text-xs text-gray-500">
                      Tell us about yourself
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <textarea
                      value={state.bio}
                      onChange={(e) =>
                        dispatch({
                          type: "SET_FIELD",
                          field: "bio",
                          value: e.target.value,
                        })
                      }
                      disabled={state.locked}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:bg-gray-50 disabled:text-gray-500 resize-none"
                      rows={4}
                      placeholder="Share something about yourself..."
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      {state.bio.length}/500 characters
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-8 pt-6 border-t border-gray-100">
                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    onClick={handleLocked}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg border transition-all ${
                      state.locked
                        ? "bg-blue-600 hover:bg-blue-700 text-white border-blue-600"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-300"
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {state.locked ? (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      ) : (
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                        />
                      )}
                    </svg>
                    <span>
                      {state.locked ? "Enable Editing" : "Disable Editing"}
                    </span>
                  </button>

                  
                </div>

                <button
                  type="submit"
                  disabled={state.saving || state.locked}
                  className="flex items-center space-x-2 px-8 py-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white rounded-lg transition-colors font-medium"
                >
                  {state.saving ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Saving Changes...</span>
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Save Changes</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {/* Status Message */}
          {state.status && (
            <div
              className={`mt-6 p-4 rounded-lg border ${
                state.status.type === "error"
                  ? "bg-red-50 border-red-200 text-red-800"
                  : state.status.type === "warning"
                  ? "bg-yellow-50 border-yellow-200 text-yellow-800"
                  : "bg-green-50 border-green-200 text-green-800"
              }`}
            >
              <div className="flex items-center space-x-2">
                <svg
                  className={`w-5 h-5 ${
                    state.status.type === "error"
                      ? "text-red-500"
                      : state.status.type === "warning"
                      ? "text-yellow-500"
                      : "text-green-500"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  {state.status.type === "error" && (
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  )}
                  {state.status.type === "warning" && (
                    <path
                      fillRule="evenodd"
                      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  )}
                  {state.status.type === "success" && (
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  )}
                </svg>
                <span className="font-medium">{state.status.message}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RightColumn;
