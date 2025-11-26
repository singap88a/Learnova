import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/Input/Input.jsx";
import Button from "../components/Button/Button.jsx";
import { useState } from "react";
import { sendResetEmail } from "../../../Services/authService.jsx";

function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSend = async (e) => {
    e?.preventDefault();
    const email = (
      document.getElementById("Email Address")?.value || ""
    ).trim();
    if (!email) {
      alert("Please enter your email");
      return;
    }
    try {
      setLoading(true);
      await sendResetEmail(email);
      alert("Password reset email sent. Check your inbox.");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert(err.message || "Failed to send reset email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-4/5 m-auto h-screen flex justify-center items-center my-[70px]">
      <div className="flex justify-between items-center py-10 gap-40">
        <div className="max-w-1/2 lg:flex justify-center items-center hidden overflow-hidden">
          <iframe
            className="w-[600px] h-[600px]"
            src="https://lottie.host/embed/098827f4-9533-4bce-8e1e-7f2669e90c78/l3XEpwVnFK.lottie"
          ></iframe>
        </div>
        <div className="lg:w-5/12 flex flex-col  p-8">
          {/* title */}
          <h1 className="sm:text-[30px] text-[22px] font-bold mb-4  ">
            Forgot Your Password?
          </h1>
          {/* description */}
          <h2 className="sm:text-2xl text-[18px] font-bold text-[#9234eb]">
            Enter your Email
          </h2>
          <p className="sm:text-[18px] text-[16px]  text-[#505b61] mb-3">
            Enter your email to get the code.
          </p>
          {/* form */}
          <form onSubmit={handleSend}>
            <Input
              type="normal"
              placeholder="example@gmail.com"
              title="Email Address"
            />
            <div className="mt-4">
              <Button
                Content={loading ? "Sending..." : "Send Mail"}
                className="my-4"
                onClick={handleSend}
              />
            </div>
          </form>

          <p className="text-center">
            Didn’t get any mail?{" "}
            <span className="bg-gradient-to-r from-[#2d6aed] to-[#9234eb] bg-clip-text text-transparent font-bold underline underline-offset-2 decoration-[#E522B5]">
              Send again
            </span>
          </p>

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

export default ForgotPassword;
