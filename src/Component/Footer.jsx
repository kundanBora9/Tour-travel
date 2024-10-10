import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <div className="flex flex-wrap justify-evenly items center mt-10 bg-[#001F3F]  text-[#F0F0F0]">
      <div>
        <img src={logo} alt="Saffron Routes" className="w-40" />
      </div>
      <div>
        <h1 className="text-3xl bold">Contact us</h1>
        <p>
          <FontAwesomeIcon icon={faPhone} />
          +91 8171932323{" "}
        </p>
        <p>
          <FontAwesomeIcon icon={faEnvelope} /> contact@saffronroutes.in{" "}
        </p>
      </div>
      <div>
        <h1 className="text-3xl bold">Quick Link</h1>
        <ul>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/about"}>
            <li>About Us</li>
          </Link>
          <Link to={"/contact"}>
            <li>Contact Us</li>
          </Link>
          <Link to={"/sameday"}>
            <li>Same Day Tours</li>
          </Link>
          <Link to={"/golden"}>
            <li>Golden Triangle Tour</li>
          </Link>
          <Link to={"/"}>
            <li>
              Gallery
            </li>
          </Link>
          <Link to={"/"}>
          <li>
            Review
          </li>
          </Link>
        </ul>
      </div>
      <div>
        <h1 className="text-3xl bold">Popular Tour</h1>
        <Link to={"/sameday"}>
        <p> 
        Same Day Delhi To Agra Tour By Car
        </p>
        </Link>
        <Link to={"/samedaytrain"}>
        <p>
        Same Day Delhi To Agra Tour By Train
        </p>
        </Link>
        <Link to={"/samedaycarjai"}>
        <p>
        Same Day Delhi To Jaipur Tour By Car
        </p>
        </Link>
        
        <Link to={"/samedaycarjai"}>
        <p>
        Same Day Delhi To Jaipur Tour By Train
        </p>
        </Link>
        
      </div>
    </div>
  );
}

export default Footer;
