import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from "@fortawesome/free-solid-svg-icons"; 
import {faEnvelope } from "@fortawesome/free-solid-svg-icons"; 
function Footer() {
  return (
    <div className='flex flex-wrap justify-evenly items center mt-10 bg-[#001f3f] text-[#F0F0F0]'>
      <div>
        Logo
      </div>
      <div>
        <h1 className='text-3xl bold'>Contact us</h1>
        <p><FontAwesomeIcon icon={faPhone} /> </p>
        <p><FontAwesomeIcon icon={faEnvelope} /> </p>
      </div>
      <div>
      <h1 className='text-3xl bold' >Quick Link</h1>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Same Day Tours</li>
        <li>Golden Triangle Tour</li>
        <li>Contact Us</li>
        <li>Gallery</li>
        <li>Review</li>
      </ul>
      </div>
      <div>
        <h1 className='text-3xl bold'>Popular Tour</h1>
        <p>Same Day Delhi To Agra Tour By Car</p>
        <p>Same Day Delhi To Agra Tour By Train</p>
        <p>Same Day Delhi To Jaipur Tour By Car</p>
        <p>Same Day Delhi To Jaipur Tour By Train</p>
      </div>
    </div>
  )
}

export default Footer