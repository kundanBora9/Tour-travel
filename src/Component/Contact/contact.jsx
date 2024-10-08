import React from "react";
import { Label } from "flowbite-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from "@fortawesome/free-solid-svg-icons"; 
import {faEnvelope } from "@fortawesome/free-solid-svg-icons";
function contact() {
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
  return (
    <div className="h-4/5 flex justify-center items-center">
      <div>
        <h1 className="text-center text-6xl playfair  font-bold  text-gray-900 mb-10">Contact Us</h1>
        <div class="flex flex-col md:flex-row lg:flex-row">
          <div class="w-full md:w-1/2 lg:w-1/2 order-2 md:order-1">
            <h1 class="text-3xl font-bold text-center text-gray-900">Contact Information</h1>
            <p class="text-lg text-center text-gray-600">It would be our pleasure to help you</p>
            <p><FontAwesomeIcon icon={faPhone} />+91 8171932323 </p>
        <p><FontAwesomeIcon icon={faEnvelope} /> contact@saffronroutes.in </p>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/2 order-1 md:order-2">
            <h1 class="text-3xl font-bold text-center text-gray-900">Fill Below Information</h1>
            <p class="text-lg text-center text-gray-600">Our advisory team is available 24/7 to help you.</p>
            <form action="" onSubmit={onSubmit}>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <div class="mb-4">
                  <label for="Name" class="block text-sm font-bold mb-2">Name</label>
                  <input type="text" id="Name" placeholder="Enter Your Name" class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                </div>
                <div class="mb-4">
                  <label for="Email" class="block text-sm font-bold mb-2">Email</label>
                  <input type="email" id="Email" placeholder="Enter Your Email" class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                </div>
                <div class="mb-4">
                  <label for="Mobile Number" class="block text-sm font-bold mb-2">Mobile Number</label>
                  <input type="number" id="Mobile Number" placeholder="Mobile Number" class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                </div>
                <div class="mb-4">
                  <label for="Message" class="block text-sm font-bold mb-2">Message</label>
                  <input type="text" id="Message" placeholder="Enter Your Message" class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" />
                </div>
              </div>
              <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default contact;