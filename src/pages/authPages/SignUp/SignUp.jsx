import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";
import Input from "../components/Input/Input.jsx";
import Button from "../components/Button/Button.jsx";

function SignUp() {
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
          <form action="">
            <Input
              type="normal"
              placeholder="Mohamed Mahmoud"
              title="Username"
            />
            <Input
              type="normal"
              placeholder="*****************"
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
          </form>
          {/* checkbox */}
          <div className="flex items-center">
            <input type="checkbox" />
            <p className="ml-2.5 text-[14px] sm:text-[16px]">
              I agree to the
              <span className="text-blue-500 text-[14px] sm:text-[16px]">
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
            <button className="p-0.5  bg-gradient-to-r rounded-sm from-[#22B5E5] to-[#E522B5]">
              <div className="flex items-center gap-2 px-4 py-2 rounded-sm bg-white hover:bg-gray-100 h-full">
                <FcGoogle />
                <span className="text-[15px] text-[#505b61]">
                  Sign in with Google
                </span>
              </div>
            </button>
            <button className="p-0.5  bg-gradient-to-r rounded-sm from-[#22B5E5] to-[#E522B5]">
              <div className="flex items-center gap-2 px-4 py-2 rounded-sm bg-white hover:bg-gray-100 h-full">
                <FaFacebook className="text-blue-700" />
                <span className="text-[15px] text-[#505b61]">
                  Sign in with Facebook
                </span>
              </div>
            </button>
          </div>

          <Button Content="Sign Up" className="my-4" />

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
