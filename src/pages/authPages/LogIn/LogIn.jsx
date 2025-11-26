import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input/Input.jsx";
import Button from "../components/Button/Button.jsx";
import { useState } from "react";
import {
  signInWithEmail,
  signInWithGoogle,
  signInWithFacebook,
} from "../../../Services/authService.jsx";

function LogIn() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = (
      document.getElementById("Email Address")?.value || ""
    ).trim();
    const password = (document.getElementById("Password")?.value || "").trim();
    if (!email || !password) {
      alert("Please provide email and password");
      return;
    }
    try {
      setLoading(true);
      await signInWithEmail(email, password);
      navigate("/");
    } catch (err) {
      console.error(err);
      alert(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    try {
      setLoading(true);
      await signInWithGoogle();
      navigate("/");
    } catch (err) {
      console.error(err);
      alert(err.message || "Google sign-in failed");
    } finally {
      setLoading(false);
    }
  };

  const handleFacebook = async () => {
    try {
      setLoading(true);
      await signInWithFacebook();
      navigate("/");
    } catch (err) {
      console.error(err);
      alert(err.message || "Facebook sign-in failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-4/5 m-auto h-screen flex justify-center items-center my-[70px]">
      <div className="flex justify-between items-center py-10 gap-20">
        <div className="lg:w-2/5 flex flex-col  p-8">
          {/* title */}
          <h1 className="sm:text-[35px] text-[30px] font-bold  text-center mb-4">
            Welcome Back!
          </h1>
          {/* description */}
          <p className="text-[20px] text-center  m-auto text-[#505b61] mb-10">
            Continue your personalized learning plan
          </p>
          {/* form */}
          <form onSubmit={handleSubmit}>
            <Input
              type="normal"
              placeholder="example@gmail.com"
              title="Email Address"
            />
            <Input
              type="password"
              placeholder="*****************"
              title="Password"
            />
            <div className="mt-4">
              <Button
                Content={loading ? "Please wait..." : "Log In"}
                className="my-4 w-full"
                onClick={handleSubmit}
              />
            </div>
          </form>
          {/* checkbox */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" />
              <p className="ml-2.5 text-[#9234eb] text-[15px] sm:text-[16px]">
                Remember me
              </p>
            </div>
            <div>
              <Link
                to="/forgot-Password"
                className=" text-[#9234eb] hover:underline underline-offset-2 text-[15px] sm:text-[16px]"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* or */}
          <div className="relative  my-10">
            <hr className="bg-gradient-to-r from-[#2d6aed] to-[#9234eb] bg-clip-text  font-bold underline underline-offset-2 decoration-[#E522B5] block w-full" />
            <p className="text-center text-[#505b61] p-4 bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              Or Sign in with
            </p>
          </div>
          {/* google & facebook */}
          <div className="flex justify-center gap-4 my-4">
            <button
              type="button"
              onClick={handleGoogle}
              className="p-0.5  bg-gradient-to-r rounded-sm from-[#2d6aed] to-[#9234eb]"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-sm bg-white hover:bg-gray-100 h-full">
                <FcGoogle />
                <span className="text-[15px] text-[#505b61]">
                  Sign in with Google
                </span>
              </div>
            </button>
            <button
              type="button"
              onClick={handleFacebook}
              className="p-0.5  bg-gradient-to-r rounded-sm from-[#2d6aed] to-[#9234eb]"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-sm bg-white hover:bg-gray-100 h-full">
                <FaFacebook className="text-blue-700" />
                <span className="text-[15px] text-[#505b61]">
                  Sign in with Facebook
                </span>
              </div>
            </button>
          </div>

          {/* Sign up */}
          <p className="text-center">
            Don’t have account??{" "}
            <span className="bg-gradient-to-r from-[#2d6aed] to-[#9234eb] bg-clip-text text-transparent font-bold underline underline-offset-2 decoration-[#E522B5]">
              <Link to="/signup">Sign Up</Link>
            </span>
          </p>
        </div>
        <div className="max-w-1/2 lg:flex justify-center items-center hidden h-screen overflow-hidden">
          <div>
            <iframe
              className="w-[800px] h-[800px]"
              src="https://lottie.host/embed/e3abe31d-8ce9-4be7-baa2-4c4d6ba7f68a/IG82OuyKmh.lottie"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogIn;
