import { Button, Navbar } from "flowbite-react";
import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

function Header() {
  const [showModal, setShowModal] = useState(false);

  const handleBookNowClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <Navbar fluid rounded className="bg-[#001F3F] playfair">
      <Navbar.Brand href="/">
      <img src={logo} alt="Saffron Routes"  className="w-28"/>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-2 rounded" onClick={handleBookNowClick}>
          Book Now
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to="/" className="text-white">
          Home
        </Link>
        <Link to="/tour" className="text-white">
          Tours
        </Link>
        <Link to="/about" className="text-white">
          About us
        </Link>
        <Link to="/contact" className="text-white">
          Contact
        </Link>
      </Navbar.Collapse>
      {showModal && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
          style={{ zIndex: 1000 }}
        >
          <div className="bg-white p-10 rounded-lg shadow-lg">
            <h1 className="text-6xl font-bold text-center mt-10 text-gray-900">
              Start Your Journey
            </h1>
            <form className="mt-10">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
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
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
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
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
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
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comment">
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
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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