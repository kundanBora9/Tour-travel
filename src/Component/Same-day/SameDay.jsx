import React from "react";
import '../../App.css'
import SamdayImg from "../../assets/samedaycover.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FloatingLabel, Textarea, Label } from "flowbite-react";
import TajImg from "../../assets/client-2.jpg";
import Tajmahal from "../../assets/TajMahal.jpg";
import AgraFort from "../../assets/Agrafort.jpg";
import TajImg1 from "../../assets/TajImg2.jpg";
import { useState } from "react";
function SameDay() {
  const texts = ["Delhi", "Taj Mahal", "Agra Fort", "Mehtab Bagh"];
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
        <div className="relative">
          <img
            src={SamdayImg}
            alt="Agra"
            className="h-72 w-full brightness-50"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg">
            <h1 className="text-6xl text-white playfair">Agra Tour</h1>
            <p className="text-center lato-regular text-3xl">
              Same Day from Delhi
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap items-center justify-center mt-5">
            <img
              src={TajImg}
              alt=""
              className="h-full max-h-80 w-1/3 rounded-lg mb-4 hover:scale-105 hover:opacity-80 hover:bg-gray-200 transition duration-300 ease-in-out"
            />
            <img
              src={Tajmahal}
              alt=""
              className="h-full max-h-80 w-1/3 rounded-lg mb-4 hover:scale-105 hover:opacity-80 hover:bg-gray-200 transition duration-300 ease-in-out"
            />
            <img
              src={AgraFort}
              alt=""
              className="h-full max-h-80 w-1/3 rounded-lg mb-4 hover:scale-105 hover:opacity-80 hover:bg-gray-200 transition duration-300 ease-in-out"
            />
            <img
              src={TajImg1}
              alt=""
              className="h-full max-h-80 w-1/3 rounded-lg mb-4 hover:scale-105 hover:opacity-80 hover:bg-gray-200 transition duration-300 ease-in-out"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-evenly items-center gap-3 relative" >
            <div
              className="absolute w-full h-1 bg-gray-900 dashed-line"
              style={{ top: "50%", transform: "translateY(-50%)" }}
            ></div>
            <div className="relative w-20 h-20 rounded-full bg-black border-black">
              <div className="absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Delhi
              </div>
            </div>
            <div className="relative w-20 h-20  rounded-full bg-black border-black">
              <div className="absolute text-center text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Taj Mahal
              </div>
            </div>
            <div className="relative w-20 h-20  rounded-full bg-black border-black">
              <div className="absolute text-center text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Agra Fort
              </div>
            </div>
            <div className="relative w-20 h-20 rounded-full bg-black border-black">
              <div className="absolute text-center text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Mehtab Bagh
              </div>
            </div>
            <div className="relative w-20 h-20 rounded-full bg-black border-black">
              <div className="absolute text-center text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Delhi
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-evenly items-center ">
            <div className="flex flex-col">
              <h1 className="lato-bold text-4xl">Itinerary</h1>
              <span className="text-lg">
                {" "}
                Early Morning Depart from Delhi. The drive to Agra takes around
                3-4 hours.
              </span>
              <span className="text-lg">
                {" "}
                Arrive in Agra and meet your tour guide.
              </span>
              <span className="text-lg">
                {" "}
                Visit the Taj Mahal. Enjoy the guided tour of this iconic
                monument.
              </span>
              <span className="text-lg">
                {" "}
                Head to the Agra Fort for a tour of this historic site.
              </span>
              <span className="text-lg">
                {" "}
                Enjoy lunch at a local restaurant with recommendations from your
                guide.
              </span>
              <span className="text-lg">
                {" "}
                Visit Mehtab Bagh for a beautiful view of the Taj Mahal from
                across the river.
              </span>
              <span className="text-lg">
                {" "}
                Free time for shopping or exploring a local market.
              </span>
              <span className="text-lg"> Begin your drive back to Delhi.</span>
            </div>
            <div className="border-2 order-2 border-zinc-950 rounded-lg w-72 mt-5">
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

                <button className="border-green-600 border-2 mt-5 px-3 rounded-md text-green-500" type="submit">
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SameDay;
