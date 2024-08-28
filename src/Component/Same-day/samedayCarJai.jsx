import React from "react";
import { FloatingLabel, Textarea, Label } from "flowbite-react";
import CityPalace from '../../assets/citypalace.jpg';
import Hawamahal from '../../assets/hawaMahal.jpg';
import JalMahal from '../../assets/jalmahal.jpg';
import AmberFort from'../../assets/AmberFort.jpg';
import Jaipur from '../../assets/Jaipur.jpeg'
function samedayCarJai() {
  return (
    <div>
       <div className="relative">
        <img
          src={Jaipur}
          alt="Rajasthan"
          className="h-72 w-full  brightness-50"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg">
          <h1 className="text-5xl text-white playfair">Discover Jaipur in a Day</h1>
          <p className="text-center lato-regular text-3xl">
          Same-Day Tour from Delhi
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center mt-5">
            <img
              src={CityPalace}
              alt=""
              className="h-full max-h-80 w-1/3 rounded-lg mb-4 hover:scale-105 hover:opacity-80 hover:bg-gray-200 transition duration-300 ease-in-out"
            />
            <img
              src={Hawamahal}
              alt=""
              className="h-full max-h-80 w-1/3 rounded-lg mb-4 hover:scale-105 hover:opacity-80 hover:bg-gray-200 transition duration-300 ease-in-out"
            />
            <img
              src={JalMahal}
              alt=""
              className="h-full max-h-80 w-1/3 rounded-lg mb-4 hover:scale-105 hover:opacity-80 hover:bg-gray-200 transition duration-300 ease-in-out"
            />
            <img
              src={AmberFort}
              alt=""
              className="h-full max-h-80 w-1/3 rounded-lg mb-4 hover:scale-105 hover:opacity-80 hover:bg-gray-200 transition duration-300 ease-in-out"
            />
          </div>
      <div className="flex flex-wrap justify-evenly items-center ">
      <div className="flex flex-col">
        <h1 className="lato-bold text-4xl">Itinerary</h1>
        <span className="text-lg">
          {" "}
          Early Morning Depart from Delhi. The drive to Jaipur takes around 3-4
          hours.
        </span>
        <span className="text-lg">
          {" "}
          Arrive in Jaipur and meet your tour guide.
        </span>
        <span className="text-lg">
          {" "}
          Visit the Amber Fort. Enjoy the guided tour of this iconic monument.
        </span>
        <span className="text-lg">
          {" "}
          Head to the Jal Mahal for a tour of this historic site.
        </span>
        <span className="text-lg">
          {" "}
          Enjoy lunch at a local restaurant with recommendations from your
          guide.
        </span>
        <span className="text-lg"> Explore City Palace and Jantar Mantar</span>
        <span className="text-lg">
          {" "}
          Free time for shopping or exploring a local market.
        </span>
        <span className="text-lg"> Begin your drive back to Delhi.</span>
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
  );
}

export default samedayCarJai;
