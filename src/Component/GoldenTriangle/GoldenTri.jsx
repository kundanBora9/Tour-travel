import React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { FloatingLabel, Textarea, Label } from "flowbite-react";
import GoldenTriangle from "../../assets/Golden-triangle.jpeg";
import HumayunTOmb from "../../assets/humayuntomb.jpg";
import Tajmahal from "../../assets/TajMahal.jpg";
import Fatehpur from "../../assets/Fatehpur.jpeg";
import HawaMahal from "../../assets/hawaMahal.jpg";
import NagarFort from "../../assets/Mehrangarh.jpg";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed top-0 left-0 w-full h-full  bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-md">
        {children}
        <button
          className="bg-red-500 text-white p-2 rounded-md"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
};
function GoldenTri() {
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
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <div className="relative">
        <img
          src={GoldenTriangle}
          alt=""
          className="h-72 w-full  brightness-50"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg">
          <h1 className="text-6xl text-white playfair">Golden Triangle</h1>
          <p className="text-center lato-regular text-3xl">Four Nights and Five Days
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-10 mx-5">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl playfair  font-bold tracking-tight text-gray-900 dark:text-white">
            Day 1: Arrival in Delhi
          </h1>
          <p className="font-normal text-gray-900 lato-bold">
            Morning/Afternoon: Arrive in Delhi and check in at your hotel.
            <br />
            Sightseeing: Visit Qutub Minar, Humayun’s Tomb and India Gate. Drive
            past the Presidential Palace and Parliament House.
            <br /> Evening: Explore Connaught Place or visit the lively market
            at Chandni Chowk.<br></br>
            Overnight: Stay in Delhi.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-start md:justify-end">
          <img
            src={HumayunTOmb}
            alt=""
            className="h-full w-full md:h-full md:w-1/2 shadow-lg rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-10 mx-5">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl playfair  font-bold tracking-tight text-gray-900 dark:text-white">
            Day 2: Delhi to Agra (about 3-4 hours by road){" "}
          </h1>
          <p className="font-normal text-gray-900 lato-bold">
            Morning: Visit Jama Masjid, Rajghat and Lal Fort (drive past).
            <br />
            Afternoon departure for Agra. Check into your hotel upon arrival.
            <br />
            Evening: Visit Mehtab Bagh to watch the sunset of the Taj Mahal from
            across the Yamuna River
            <br /> Overnight: Stay in Agra.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-start md:justify-end ">
          <img
            src={Tajmahal}
            alt=""
            className="h-full w-full md:h-full md:w-1/2 shadow-lg rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-10 mx-5">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl playfair  font-bold tracking-tight text-gray-900 dark:text-white">
            Day 3: Agra to Jaipur (via Fatehpur Sikri) .
          </h1>
          <p className="font-normal text-gray-900 lato-bold">
            Morning: Visit the Taj Mahal at sunrise. Morning: Return to hotel
            for breakfast, then to Agra Fort.
            <br /> Afternoon departure for Jaipur, visiting Fatehpur Sikri
            (UNESCO World Heritage Site) on the way.
            <br /> Evening: Reach Jaipur, check in to your hotel. <br />{" "}
            Overnight: Stay in Jaipur.{" "}
          </p>
        </div>

        <div className="w-full md:w-1/2 flex justify-start md:justify-end">
          <img
            src={Fatehpur}
            alt=""
            className="h-full w-full md:h-full md:w-1/2 shadow-lg rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-10 mx-5">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl playfair  font-bold tracking-tight text-gray-900 dark:text-white">
            Day 4: Jaipur
          </h1>
          <p className="font-normal text-gray-900 lato-bold">
            Morning: Visit Amber Fort, Jal Mahal and Hawa Mahal.
            <br /> Afternoon: Explore the City Hall and Jantar mantar.
            <br /> Evening: Stroll the local markets or hike the Pink City
            Walls.
            <br /> Overnight: Stay in Jaipur.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-start md:justify-end ">
          <img
            src={HawaMahal}
            alt=""
            className="h-full w-full md:h-full md:w-1/2 shadow-lg rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-10 mx-5">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl playfair  font-bold tracking-tight text-gray-900 dark:text-white">
            Day 5 Jaipur to Delhi (departure) .
          </h1>
          <p className="font-normal text-gray-900 lato-bold">
            Morning: Depending on the time, you can visit other places in Jaipur
            like Nahargarh Fort or Albert Hall Museum.
            <br /> Afternoon: Drive (or fly) back to Delhi for another
            adventure.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-start md:justify-end ">
          <img
            src={NagarFort}
            alt=""
            className="h-full w-full md:h-full md:w-1/2 shadow-lg rounded-lg"
          />
        </div>
      </div>
      <div className=" text-center">
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold p-2 rounded-md "
          onClick={handleOpenModal}
        >
          Book Now
        </button>
        <Modal isOpen={isOpen} onClose={handleCloseModal}>
          <div className="flex justify-center items-center size-full">
            <div className="card-1">
              <h1 className="playfair text-6xl font-bold text-center mt-10">
                Book Now
              </h1>
              <form className="mt-10" onSubmit={onSubmit}>
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
        </Modal>
      </div>
    </div>
  );
}

export default GoldenTri;
