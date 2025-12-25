import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NavbarLogedIn from "./components/NavbarLogedIn";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import CourseDetails from "./pages/Courses/CourseDetails/CourseDetails.jsx";
import PurchaseCourse from "./pages/Courses/PurchaseCourse";
import PurchaseSuccess from "./pages/Courses/PurchaseSuccess";
import Lessons from "./pages/Courses/Lessons/Lessons";
import MyCourses from "./pages/MyCourses";
import Instructors from "./pages/Instructors/Instructors";
import InstructorDetails from "./pages/Instructors/InstructorDetails";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
// import Login from "./pages/Login/index.jsx";
// import SignUp from "./pages/SignUP/index.jsx";
import { useAuth } from "./hooks/useAuth";

import ProfilePage from "./pages/authPages/userProfile/UserProfile.jsx";
import SignUp from "./pages/authPages/SignUp/SignUp.jsx";
import ReserPassword from "./pages/authPages/ResetPassword/ResetPassword.jsx";
import ForgotPassword from "./pages/authPages/ForgotPassword/ForgotPassword.jsx";
import Login from "./pages/authPages/LogIn/LogIn.jsx";
// import { logout } from "./authService";

function App() {
  const user = useAuth();

  return (
    <Router>
      <div className="flex flex-col min-h-screen App">
        <>
          {user ? <NavbarLogedIn /> : <Navbar />}
          {/* rest of your routes */}
        </>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:id" element={<CourseDetails />} />
            <Route path="/course/:id/purchase" element={<PurchaseCourse />} />
            <Route
              path="/course/:id/purchase/success"
              element={<PurchaseSuccess />}
            />
            <Route path="/course/:id/lessons" element={<Lessons />} />
            <Route path="/my-courses" element={<MyCourses />} />
            <Route path="/instructors" element={<Instructors />} />
            <Route path="/instructors/:id" element={<InstructorDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/login" element={<Login />} />
            <Route path="/sign-Up" element={<SignUp />} /> */}
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/forgot-Password" element={<ForgotPassword />} />
            <Route path="/reset-Password" element={<ReserPassword />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
