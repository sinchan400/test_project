import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './Components/Signup';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          {loggedIn ? (
            <Route path="/home" element={<Home />} />
          ) : (
            <Route path="/" element={<Login onLogin={handleLogin} />} />
          )}
          <Route path="/" exact component={Home}/>
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;