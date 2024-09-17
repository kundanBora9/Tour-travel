import React from 'react'
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from "@fortawesome/free-solid-svg-icons"; 
import {faEnvelope } from "@fortawesome/free-solid-svg-icons"; 
function Footer() {
  return (
    <div className='flex flex-wrap justify-evenly items center mt-10 bg-[#001F3F]  text-[#F0F0F0]'>
      <div>
      <img src={logo} alt="Saffron Routes"  className="w-40"/>
      </div>
      <div>
        <h1 className='text-3xl bold'>Contact us</h1>
        <p><FontAwesomeIcon icon={faPhone} /> </p>
        <p><FontAwesomeIcon icon={faEnvelope} /> </p>
      </div>
      <div>
      <h1 className='text-3xl bold' >Quick Link</h1>
      <ul>
        <li>
          <a href='/'>
          Home
          </a>
          </li>
        <li>
        <a href='/about'>About Us </a> </li>
        <li>  
        <a href='/sameday'>Same Day Tours </a> </li>
        <li>
          <a href='/golden'>
          Golden Triangle Tour
            </a> 
          </li>
        <li>
          <a href='/contact'>
            Contact Us
          </a>
        </li>
        <li>
          <a href='/'>
          Gallery
          </a>
          </li>
        <li>
          <a href='/'>
          Review
          </a>
        </li>
      </ul>
      </div>
      <div>
        <h1 className='text-3xl bold'>Popular Tour</h1>
        <p> <a href='/sameday'>Same Day Delhi To Agra Tour By Car</a> </p>
        <p> <a href='/samedaytrain'>Same Day Delhi To Agra Tour By Train</a></p>
        <p> <a href='/samedaycarjai'>Same Day Delhi To Jaipur Tour By Car</a> </p>
        <p>  <a href='/samedaytrainjai'>Same Day Delhi To Jaipur Tour By Train</a></p>
      </div>
    </div>
  )
}

export default Footer