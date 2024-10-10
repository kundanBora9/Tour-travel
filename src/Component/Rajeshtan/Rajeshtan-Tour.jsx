import React from "react";
import RajasthanCover from "../../assets/Rajasthancover.jpeg";
import HawaMhal from '../../assets/hawaMahal.jpg'
import AmberFort from '../../assets/AmberFort.jpg'
import ClockTower from '../../assets/clock-tower.jpeg'
import Mehrangarh from '../../assets/Mehrangarh.jpg'
import LakePichola from '../../assets/Lake Pichola.jpg'
import { Link } from "react-router-dom";
import CrystalGallery from '../../assets/crystel.jpeg'
import { useState } from "react";
import { createPortal } from "react-dom";
import { FloatingLabel, Textarea, Label } from "flowbite-react";

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


function Rajeshtan() {
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
          src={RajasthanCover}
          alt="Rajasthan"
          className="h-72 w-full  brightness-50"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg">
          <h1 className="text-6xl text-white playfair">Rajasthan Tour</h1>
          <p className="text-center lato-regular text-3xl">
            Six Nights and Seven Days
          </p>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-10 mx-5">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl playfair  font-bold tracking-tight text-gray-900 dark:text-white">
            Day 1: Arrival in Jaipur
          </h1>
          <p className="font-normal text-gray-900 lato-bold">
            Morning: Fly from Delhi to Jaipur and our representative meet you airport and transferred to your hotel.<br/>
            Afternoon: This tour has to include the visit to the City Palace and
            Jantar Mantar.<br/> Evening: Spend some time walking around the local
            markets and you can also get to taste some Rajasthani style of food
            for dinner.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-start md:justify-end">
          <img
            src={HawaMhal}
            alt=""
            className="h-full w-full md:h-full md:w-1/2 shadow-lg rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-10 mx-5">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl playfair  font-bold tracking-tight text-gray-900 dark:text-white">
            Day 2: Jaipur Sightseeing
          </h1>
          <p className="font-normal text-gray-900 lato-bold">
            Morning: Tour of Amber Fort that involves a ride on the back of
            elephants or jeeps to the palace. <br/>Afternoon: Get to tour around the
            tourists’ attractions such as Hawa Mahal or the Palace of Winds and
            the Jal Mahal or Water Palace.<br/> Evening: Experience an authentic
            Rajasthani dinner and an outstanding show at the evening.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-start md:justify-end ">
          <img
            src={AmberFort}
            alt=""
            className="h-full w-full md:h-full md:w-1/2 shadow-lg rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-10 mx-5">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl playfair  font-bold tracking-tight text-gray-900 dark:text-white">
            Day 3 Grand Day Tour Jaipur to Jodhpur
          </h1>
          <p className="font-normal text-gray-900 lato-bold">
            Morning: Drive through the Royal envy of India to Rajasthan: Jaipur
            to Jodhpur approximately 250 K. M which takes 5-6 hours.<br/> Afternoon:
            Retire to your hotel of the day to freshen up.<br/> Evening: Clock tower:
            Continue on to the next attraction, which is the Clock Tower After
            the Clock Tower, tourists are advised to proceed to the local
            market.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex justify-start md:justify-end">
          <img
            src={ClockTower}
            alt=""
            className="h-full w-full md:h-full md:w-1/2 shadow-lg rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-10 mx-5">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl playfair  font-bold tracking-tight text-gray-900 dark:text-white">
            Day 4: Jodhpur Sightseeing
          </h1>
          <p className="font-normal text-gray-900 lato-bold">
            Morning: Explore Mehrangarh Fort and Jaswant Thada.<br/> Afternoon: Visit
            Umaid Bhawan Palace and the surrounding gardens.<br/> Evening: Stroll
            through the Blue City and enjoy local cuisine for dinner.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-start md:justify-end ">
          <img
            src={Mehrangarh}
            alt=""
            className="h-full w-full md:h-full md:w-1/2 shadow-lg rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-10 mx-5">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl playfair  font-bold tracking-tight text-gray-900 dark:text-white">
            Day 5: Jodhpur to Udaipur
          </h1>
          <p className="font-normal text-gray-900 lato-bold">
            Morning: Drive from Jodhpur to Udaipur (approximately 6-7 hours by
            road). Alternatively, you can take a flight if available.<br/> Afternoon:
            Check into your hotel and relax. Evening: Take a boat ride on Lake
            Pichola and visit Jag Mandir.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-start md:justify-end ">
          <img
            src={LakePichola}
            alt=""
            className="h-full w-full md:h-full md:w-1/2 shadow-lg rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-10 mx-5">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl playfair  font-bold tracking-tight text-gray-900 dark:text-white">
            Day 6: Udaipur Sightseeing
          </h1>
          <p className="font-normal text-gray-900 lato-bold">
            Morning: Visit the City Palace and the Crystal Gallery. <br/> Afternoon:
            Explore Jagdish Temple and the Saheliyon ki Bari (Garden of the
            Maidens). <br/> Evening: Enjoy a cultural show and dinner at a local
            restaurant or hotel.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-start md:justify-end ">
          <img
            src={CrystalGallery}
            alt=""
            className="h-full w-full md:h-full md:w-1/2 shadow-lg rounded-lg"
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-10 mx-5">
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl playfair  font-bold tracking-tight text-gray-900 dark:text-white">
            Day 7: Departure from Udaipur
          </h1>
          <p className="font-normal text-gray-900 lato-bold">
            Morning: Depending on your flight time, you might have some free
            time for last-minute shopping or sightseeing.<br/> Afternoon: Transfer to
            the airport for your departure.
          </p>
        </div>
        <div className="flex flex-wrap justify-center mt-10 mx-5">

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
    </div>
  );
}

export default Rajeshtan;
