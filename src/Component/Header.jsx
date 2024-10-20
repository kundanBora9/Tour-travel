import { Button, Navbar } from "flowbite-react";
import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
import saffron_logo2 from '../assets/saffron-logo2.png'

function Header() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const formData = new FormData(event.target);
  
    formData.append("access_key", "4a80dc0b-a8f6-4759-92d5-f08742bcdaf6");
  
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());
  
    if (res.success) {
      alert(res.message);
      event.target.reset();
    }
  };
  const [showModal, setShowModal] = useState(false);

  const handleBookNowClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const [active, setActive] = useState("home");
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // Function to handle link clicks
  const handleLinkClick = (link) => {
    setActive(link);
    setIsNavbarOpen(false); // Close the navbar after clicking a link
  };
  return (
    <Navbar fluid rounded className="bg-[#303F9F] sticky top-0 z-10">
    <Navbar.Brand href="/">
      {/* Responsive Logo */}
      <img src={saffron_logo2} className="mr-3 h-20 w-auto max-w-full" alt="Logo" />
    </Navbar.Brand>
    
    {/* Navbar Toggle for mobile view */}
    <Navbar.Toggle onClick={() => setIsNavbarOpen(!isNavbarOpen)} />
    
    {/* Navbar Collapse */}
    <Navbar.Collapse className={`${isNavbarOpen ? "block" : "hidden"}`}>
      
      {/* Home Link */}
      <Navbar className="text-lg bg-[#303F9F]">
        <Link
          to="/"
          className={active === "home" ? "active-link" : ""}
          onClick={() => handleLinkClick("home")}
          style={{
            color: active === "home" ? "#FF5A1F" : "#ffffff",  // Active state and default color
            textDecoration: "none"  // Ensure no white background
          }}
        >
          Home
        </Link>
      </Navbar>
      
      {/* About Link */}
      <Navbar className="text-lg bg-[#303F9F]">
        <Link
          to="/about"
          className={active === "about" ? "active-link" : ""}
          onClick={() => handleLinkClick("about")}
          style={{
            color: active === "about" ? "#FF5A1F" : "#ffffff",  // Active state and default color
            textDecoration: "none",
          }}
        >
          About
        </Link>
      </Navbar>
      
      {/* Tour Link */}
      <Navbar className="text-lg bg-[#303F9F]" >
        <Link
          to="/tour"
          className={active === "tour" ? "active-link" : ""}
          onClick={() => handleLinkClick("tour")}
          style={{
            color: active === "tour" ? "#FF5A1F" : "#ffffff",  // Active state and default color
            textDecoration: "none",
            backgroundColor: "transparent"
          }}
        >
          Tours
        </Link>
      </Navbar>
      
      {/* Contact Link */}
      <Navbar className="text-lg bg-[#303F9F]">
        <Link
          to="/contact"
          className={active === "contact" ? "active-link" : ""}
          onClick={() => handleLinkClick("contact")}
          style={{
            color: active === "contact" ? "#FF5A1F" : "#ffffff",  // Active state and default color
            textDecoration: "none",
            backgroundColor: "transparent"
          }}
        >
          Contact
        </Link>
      </Navbar>
      
      {/* Book Now Button */}
      <button className="px-5 py-2 bg-[#FF5A1F] hover:bg-[#303F9F] text-white rounded-[50px]" onClick={handleBookNowClick}>
        Book Now
      </button>
    </Navbar.Collapse>
  
    {showModal && (
      <div
        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
        style={{ zIndex: 1000 }}
      >
        <div className="bg-opacity-90 bg-gray-900 p-10 rounded-lg shadow-lg">
          <h1 className="text-6xl font-bold text-center mt-10 text-gray-100">
            Start Your Journey
          </h1>
          <form className="mt-10" onSubmit={onSubmit}>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="number">
                Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="number"
                name="number"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="comment">
                Enter Tour Name
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="comment"
                rows={4}
                required
              />
            </div>
  
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit Now
            </button>
          </form>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
            onClick={handleCloseModal}
          >
            Close
          </button>
        </div>
      </div>
    )}
  </Navbar>
  


  )
}

export default Header;