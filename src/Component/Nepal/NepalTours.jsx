import React from 'react'
import NepalBanner from '../../assets/nepal-banner.jpg'
import NepalImg1 from '../../assets/nepal-img1.jpg'
import NepalImg2 from '../../assets/nepal-img2.jpg'
import NepalImg3 from '../../assets/nepal-img3.jpg'
import NepalImg4 from '../../assets/nepal-img4.jpg'
import { FloatingLabel, Textarea, Label } from "flowbite-react";
function NepalTours() {
  return (
    <>
     <div>
        <div>
            <img src={NepalBanner} alt="" />
        </div>
        <div className='flex flex-wrap justify-center'>
  <img src={NepalImg1} alt="" className='w-1/3 p-2' />
  <img src={NepalImg2} alt="" className='w-1/3 p-2' />
  <img src={NepalImg3} alt="" className='w-1/3 p-2' />
  <img src={NepalImg4} alt="" className='w-1/3 p-2' />
</div>

      <div className="flex flex-wrap justify-evenly items-center ">
      <div className="flex flex-col">
       <p></p>
      </div>
      <div className="border-2 order-2 border-zinc-950 rounded-lg w-72 mt-5">
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
    
    </>
  )
}

export default NepalTours