import React from 'react'
import { useState } from "react";
import { FloatingLabel, Textarea, Label } from "flowbite-react";
import BhutanBanner from '../../assets/Bhutan-Banner.jpg'
import BhutanImg1 from '../../assets/BhutanImg1.jpg'
import BhutanImg2 from '../../assets/BhutanImg2.jpg'
import BhutanImg3 from '../../assets/BhutanImg3.jpg'
import BhutanImg4 from '../../assets/BhutanImg4.jpg'
function BhutanTours() {
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
    <div>
    <div>
      <img src={BhutanBanner} alt="" />
    </div>
    <div className="flex flex-wrap justify-center">
      <img src={BhutanImg1} alt="" className="w-1/3 p-2" />
      <img src={BhutanImg2} alt="" className="w-1/3 p-2" />
      <img src={BhutanImg3} alt="" className="w-1/3 p-2" />
      <img src={BhutanImg4} alt="" className="w-1/3 p-2" />
    </div>

    <div className="flex flex-wrap justify-center md:justify-evenly items-start mt-5 ">
      <div className=" flex flex-col w-full md:w-1/2 xl:w-1/2">
        <h2 className="lato-bold text-4xl">
        Bhutan: Explore the Last Shangri-La</h2>
        <p className="w-full md:w-1/2 xl:w-1/2">
        "Experience a land of ancient traditions nestled amidst awe-inspiring Himalayan landscapes: the enchanting beauty of Bhutan. From peaceful monasteries to vibrant festivals, Bhutan offers a unique blend of cultural richness and natural wonders that tend to captivate travelers seeking tranquil and adventurous breaks."
        </p>
      </div>
      <div className=" border-2 order-2 border-zinc-950 rounded-lg w-full md:w-1/2 xl:w-1/2 mt-5 md:mt-0">
        <h1 className="text-center lato-bold text-4xl">Book Now</h1>
        <form className="p-5" onSubmit={onSubmit}>
          <FloatingLabel
            variant="outlined"
            color="success"
            label=" Name"
            type="text"
            name="name"
            sizing="sm"
            className=""
            required
          />
          <FloatingLabel
            variant="outlined"
            color="success"
            label="Email"
            type="email"
            name="email"
            sizing="sm"
            required
            className=""
          />
          <FloatingLabel
            variant="outlined"
            color="success"
            label="Phone Number"
            type="number"
            name="number"
            sizing="sm"
            required
            className=""
          />
          <div className="max-w-md">
            <div className="mb-2 block"></div>
            <Textarea
              variant="outlined"
              color="success"
              id="comment"
              placeholder="Enter Tour Name"
              required
              rows={4}
            />
          </div>

          <button type='submit' className="border-green-600 border-2 mt-5 px-3 rounded-md text-green-500">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default BhutanTours