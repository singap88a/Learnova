import { IoIosArrowBack } from "react-icons/io";

import { Link } from "react-router-dom";
import Input from "../components/Input/Input.jsx";
import Button from "../components/Button/Button.jsx";
function ResetPassword() {
  return (
    <section className="max-w-4/5 m-auto h-screen flex justify-center items-center my-[70px]">
      <div className="flex justify-between items-center py-10 gap-20">
        <div className="max-w-1/2 lg:flex justify-center items-center hidden overflow-hidden">
          <iframe
            className="w-[500px] h-[500px]"
            src="https://lottie.host/embed/b2cf35ed-cc37-4f4f-97e1-c224784a291d/4FJFGeTqu8.lottie"
          ></iframe>
        </div>
        <div className="lg:w-5/12 flex flex-col  p-8">
          {/* title */}
          <h1 className="sm:text-[30px] text-[24px] font-bold mb-4  ">
            Reset Your Password?
          </h1>
          {/* description */}
          <h2 className="sm:text-2xl text-[18px] font-bold text-[#8864b5]">
            Enter new password
          </h2>
          <p className="sm:text-[18px] text-[12px]  text-[#505b61] mb-3">
            Turn every book into an interactive experience
          </p>
          {/* form */}
          <form action="">
            <Input
              type="password"
              placeholder="*****************"
              title="New Password"
            />
            <Input
              type="password"
              placeholder="*****************"
              title="Confirm New Password"
            />
          </form>

          <Button Content="Reset Password" className="my-4" />

          {/* login */}
          <p className="text-center">
            <Link
              to="/login"
              className="hover:underline underline-offset-2 text-[#505b61]"
            >
              <IoIosArrowBack className="inline-block mr-2" />
              Back to Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ResetPassword;
