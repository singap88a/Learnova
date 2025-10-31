import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NavbarLogedIn from "./components/NavbarLogedIn";
import Footer from "./components/Footer";

import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import CourseDetails from "./pages/Courses/CourseDetails";
import Lessons from "./pages/Courses/Lessons";
import Instructors from "./pages/Instructors/Instructors";
import InstructorDetails from "./pages/Instructors/InstructorDetails";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/index.jsx";
import SignUp from "./pages/SignUP/index.jsx";
import { useAuth } from "./hooks/useAuth";
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
            <Route path="/course/:id/lessons" element={<Lessons />} />
            <Route path="/instructors" element={<Instructors />} />
            <Route path="/instructor/:id" element={<InstructorDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-Up" element={<SignUp />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
