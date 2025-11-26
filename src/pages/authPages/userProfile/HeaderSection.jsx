import { Link } from "react-router-dom";
function HeaderSection({ state }) {
  return (
    <div className="mb-8">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Profile Settings
            </h1>
            <nav className="flex items-center space-x-2 text-sm">
              <Link
                to="/"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Home
              </Link>
              <span className="text-gray-300">/</span>
              <span className="text-gray-600">User Profile</span>
            </nav>
          </div>
          <div className="mt-4 sm:mt-0">
            <div className="flex items-center space-x-3">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  state.locked
                    ? "bg-yellow-100 text-yellow-800 border border-yellow-200"
                    : "bg-green-100 text-green-800 border border-green-200"
                }`}
              >
                {state.locked ? "Edit Mode: Off" : "Edit Mode: On"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
