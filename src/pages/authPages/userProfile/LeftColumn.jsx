function LeftColumn({ state, user ,handlePhotoChange,handleLogout}) {
  return (
    <div className="xl:col-span-4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Profile Header with Gradient */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-700 p-6 text-center">
                <div className="relative inline-block">
                  <img
                    src={
                      state.photoURL ||
                      user?.photoURL ||
                      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80"
                    }
                    alt="Profile"
                    className="rounded-full w-32 h-32 mx-auto object-cover border-4 border-white/20 shadow-lg"
                  />
                  <div className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow-lg">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <h2 className="text-xl font-semibold text-white mt-4 mb-1">
                  {state.displayName || "No name provided"}
                </h2>
                <p className="text-blue-100 text-sm">
                  {state.email || user?.email || "No email provided"}
                </p>
              </div>

              {/* Profile Actions */}
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Update Profile Photo
                    </label>
                    <div className="flex items-center space-x-3">
                      <label className="flex-1 cursor-pointer">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handlePhotoChange}
                          className="hidden"
                        />
                        <div className="w-full px-4 py-2 bg-gray-50 hover:bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg text-center transition-colors">
                          <span className="text-sm text-gray-600">
                            Choose file
                          </span>
                        </div>
                      </label>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      JPG, PNG or GIF. Max 5MB.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-red-50 hover:bg-red-100 text-red-700 rounded-lg border border-red-200 transition-colors group"
                    >
                      <svg
                        className="w-4 h-4 group-hover:scale-110 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                      </svg>
                      <span className="font-medium">Sign Out</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}

export default LeftColumn
