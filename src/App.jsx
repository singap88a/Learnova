<<<<<<< Updated upstream
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
=======
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import NavbarLogedIn from './components/NavbarLogedIn';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import CourseDetails from './pages/Courses/CourseDetails';
import Lessons from './pages/Courses/Lessons';
import Instructors from './pages/Instructors/Instructors';
import InstructorDetails from './pages/Instructors/InstructorDetails';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/index.jsx';
import SignUp from './pages/SignUP/index.jsx';
import { useAuth } from './hooks/useAuth';
import {useAOS} from "./hooks/aos.js"
// import { logout } from "./authService";

function App() {
  const user = useAuth();
  // Animaion 
   useAOS()
>>>>>>> Stashed changes

  return (
    <>
      {/* NavBar */}
      <nav style={{
        backgroundColor: '#242424',
        padding: '1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white'
      }}>
        <h2 🚀 My React App style={{
          display : 'inline',
        }}> </h2>
        <div>

        <ul style={{
          listStyle: 'none',
          display: 'flex',
          gap: '1.5rem',
          margin: 0,
          padding: 0
        }}>
          <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
          <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
          <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
        </ul>
        </div>
      </nav>

      <div style={{ padding: '2rem' }}>        
        <button onClick={() => setCount(count + 1)}>
          You clicked {count} times
        </button>
      </div>
    </>
  )
}

export default App
