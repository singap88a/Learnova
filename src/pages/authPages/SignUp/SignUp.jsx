import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input/Input.jsx";
import Button from "../components/Button/Button.jsx";
import { useState } from "react";
import {
  signUpWithEmail,
  signInWithGoogle,
  signInWithFacebook,
} from "../../../Services/authService.jsx";

function SignUp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = (
      document.getElementById("Username")?.value || ""
    ).trim();
    const email = (
      document.getElementById("Email Address")?.value || ""
    ).trim();
    const password = (document.getElementById("Password")?.value || "").trim();
    const confirm = (
      document.getElementById("Confirm Password")?.value || ""
    ).trim();

    if (!email || !password) {
      alert("Please provide email and password");
      return;
    }
    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      await signUpWithEmail(displayName, email, password);
      navigate("/");
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to sign up");
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
        <div className="max-w-1/2 lg:flex justify-center items-center hidden overflow-hidden">
          <iframe
            className="w-[650px] h-[650px]"
            src="https://lottie.host/embed/f1c37590-a81b-4fa4-8eae-fdcef28ad3b1/bh1X0QxqM0.lottie"
          ></iframe>
        </div>
        <div className="lg:w-2/5 flex flex-col  p-8">
          {/* title */}
          <h1 className="sm:text-4xl text-3xl font-bold  text-center mb-4">
            Start Your Journey
          </h1>
          {/* description */}
          <p className="sm:text-[20px] text-[16px] text-center  m-auto text-[#505b61] mb-7">
            Turn every book into an interactive experience
          </p>
          {/* form */}
          <form onSubmit={handleSubmit}>
            <Input
              type="normal"
              placeholder="Mohamed Mahmoud"
              title="Username"
            />
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
            <Input
              type="password"
              placeholder="*****************"
              title="Confirm Password"
            />
            <div className="mt-4">
              <Button
                Content={loading ? "Please wait..." : "Sign Up"}
                className="my-4 w-full"
                onClick={handleSubmit}
              />
            </div>
          </form>
          {/* checkbox */}
          <div className="flex items-center mt-3">
            <input type="checkbox" />
            <p className="ml-2.5 text-[14px] sm:text-[16px]">
              I agree to the
              <span className="text-blue-500 text-[14px] sm:text-[16px]">
                {" "}
                Terms{" "}
              </span>
              and
              <span className="text-blue-500 text-[14px] sm:text-[16px]">
                {" "}
                Privacy Policy
              </span>
            </p>
          </div>
          {/* google & facebook */}
          <div className="flex justify-center gap-4 my-4">
            <button
              type="button"
              onClick={handleGoogle}
              className="p-0.5  bg-gradient-to-r rounded-sm from-[#22B5E5] to-[#E522B5]"
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
              className="p-0.5  bg-gradient-to-r rounded-sm from-[#22B5E5] to-[#E522B5]"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-sm bg-white hover:bg-gray-100 h-full">
                <FaFacebook className="text-blue-700" />
                <span className="text-[15px] text-[#505b61]">
                  Sign in with Facebook
                </span>
              </div>
            </button>
          </div>

          {/* login */}
          <p className="text-center">
            Already have account?{" "}
            <span className="bg-gradient-to-r from-[#22B5E5] to-[#E522B5] bg-clip-text text-transparent font-bold underline underline-offset-2 decoration-[#E522B5]">
              <Link to="/login">Sign In</Link>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
