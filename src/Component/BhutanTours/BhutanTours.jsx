import React from 'react'
import { FloatingLabel, Textarea, Label } from "flowbite-react";
import BhutanBanner from '../../assets/Bhutan-Banner.jpg'
import BhutanImg1 from '../../assets/BhutanImg1.jpg'
import BhutanImg2 from '../../assets/BhutanImg2.jpg'
import BhutanImg3 from '../../assets/BhutanImg3.jpg'
import BhutanImg4 from '../../assets/BhutanImg4.jpg'
function BhutanTours() {
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

    <div className="flex justify-around items-start mt-5 ">
      <div className=" flex flex-col">
        <h2 className="lato-bold text-4xl">
        Bhutan: Explore the Last Shangri-La</h2>
        <p className="w-1/2">
        "Experience a land of ancient traditions nestled amidst awe-inspiring Himalayan landscapes: the enchanting beauty of Bhutan. From peaceful monasteries to vibrant festivals, Bhutan offers a unique blend of cultural richness and natural wonders that tend to captivate travelers seeking tranquil and adventurous breaks."
        </p>
      </div>
      <div className=" border-2 order-2 border-zinc-950 rounded-lg w-1/2 mt-5">
        <h1 className="text-center lato-bold text-4xl">Book Now</h1>
        <form className="p-5">
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

          <button className="border-green-600 border-2 mt-5 px-3 rounded-md text-green-500">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default BhutanTours