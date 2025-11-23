export default function ProfilePage() {
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
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-full w-36 h-36 mx-auto mb-4 object-cover"
                />
                <p className="text-gray-600 mb-1">Full Stack Developer</p>
                <p className="text-gray-600 mb-4">
                  Bay Area, San Francisco, CA
                </p>
                <div className="flex justify-center gap-2 mb-2">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                    Follow
                  </button>
                  <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-50 transition">
                    Message
                  </button>
                </div>
              </div>
            </div>

            {/* Social Links Card */}
            <div className="bg-white rounded-lg shadow mb-4 lg:mb-0">
              <div className="p-0">
                <ul className="divide-y divide-gray-200">
                  <li className="flex justify-between items-center p-4">
                    <i className="fas fa-globe text-yellow-500 text-xl"></i>
                    <span className="text-gray-700">
                      https://mdbootstrap.com
                    </span>
                  </li>
                  <li className="flex justify-between items-center p-4">
                    <i className="fab fa-github text-gray-800 text-xl"></i>
                    <span className="text-gray-700">mdbootstrap</span>
                  </li>
                  <li className="flex justify-between items-center p-4">
                    <i className="fab fa-twitter text-blue-400 text-xl"></i>
                    <span className="text-gray-700">@mdbootstrap</span>
                  </li>
                  <li className="flex justify-between items-center p-4">
                    <i className="fab fa-instagram text-pink-600 text-xl"></i>
                    <span className="text-gray-700">mdbootstrap</span>
                  </li>
                  <li className="flex justify-between items-center p-4">
                    <i className="fab fa-facebook text-blue-700 text-xl"></i>
                    <span className="text-gray-700">mdbootstrap</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-8">
            {/* Info Card */}
            <div className="bg-white rounded-lg shadow mb-4">
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 items-center mb-4">
                  <div className="text-gray-700 font-medium">Full Name</div>
                  <div className="col-span-2 text-gray-600">Johnatan Smith</div>
                </div>
                <hr className="my-4 border-gray-200" />

                <div className="grid grid-cols-3 gap-4 items-center mb-4">
                  <div className="text-gray-700 font-medium">Email</div>
                  <div className="col-span-2 text-gray-600">
                    example@example.com
                  </div>
                </div>
                <hr className="my-4 border-gray-200" />

                <div className="grid grid-cols-3 gap-4 items-center mb-4">
                  <div className="text-gray-700 font-medium">Phone</div>
                  <div className="col-span-2 text-gray-600">(097) 234-5678</div>
                </div>
                <hr className="my-4 border-gray-200" />

                <div className="grid grid-cols-3 gap-4 items-center mb-4">
                  <div className="text-gray-700 font-medium">Mobile</div>
                  <div className="col-span-2 text-gray-600">(098) 765-4321</div>
                </div>
                <hr className="my-4 border-gray-200" />

                <div className="grid grid-cols-3 gap-4 items-center">
                  <div className="text-gray-700 font-medium">Address</div>
                  <div className="col-span-2 text-gray-600">
                    Bay Area, San Francisco, CA
                  </div>
                </div>
              </div>
            </div>

            {/* Project Status Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Project Card */}
              <div className="bg-white rounded-lg shadow">
                <div className="p-6">
                  <p className="mb-4">
                    <span className="text-blue-600 italic mr-1">
                      assignment
                    </span>
                    Project Status
                  </p>

                  <div className="mb-4">
                    <p className="mb-2 text-xs text-gray-700">Web Design</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="mb-2 text-xs text-gray-700">Website Markup</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "72%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="mb-2 text-xs text-gray-700">One Page</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "89%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="mb-2 text-xs text-gray-700">
                      Mobile Template
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "55%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2 text-xs text-gray-700">Backend API</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "66%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Project Card */}
              <div className="bg-white rounded-lg shadow">
                <div className="p-6">
                  <p className="mb-4">
                    <span className="text-blue-600 italic mr-1">
                      assignment
                    </span>
                    Project Status
                  </p>

                  <div className="mb-4">
                    <p className="mb-2 text-xs text-gray-700">Web Design</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="mb-2 text-xs text-gray-700">Website Markup</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "72%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="mb-2 text-xs text-gray-700">One Page</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "89%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="mb-2 text-xs text-gray-700">
                      Mobile Template
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "55%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2 text-xs text-gray-700">Backend API</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "66%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
