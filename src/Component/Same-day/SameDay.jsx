import React from "react";
import SamdayImg from "../../assets/samedaycover.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FloatingLabel, Textarea, Label } from "flowbite-react";
import TajImg from "../../assets/client-2.jpg";
import Tajmahal from "../../assets/TajMahal.jpg";
import AgraFort from "../../assets/Agrafort.jpg";
import TajImg1 from "../../assets/TajImg2.jpg";
function SameDay() {
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
          <div className="flex flex-wrap justify-evenly items-center ">
            <div className="flex flex-col">
              <h1 className="lato-bold text-4xl">Itinerary</h1>
              <span className="text-lg">
                {" "}
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-gray-500 mr-2"
                />
                7:00 AM: Depart from Delhi. The drive to Agra takes around 3-4
                hours.
              </span>
              <span className="text-lg">
                {" "}
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-gray-500 mr-2"
                />
                10:00 AM: Arrive in Agra and meet your tour guide.
              </span>
              <span className="text-lg">
                {" "}
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-gray-500 mr-2"
                />
                10:30 AM: Visit the Taj Mahal. Enjoy the guided tour of this
                iconic monument.
              </span>
              <span className="text-lg">
                {" "}
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-gray-500 mr-2"
                />
                12:30 PM: Head to the Agra Fort for a tour of this historic
                site.
              </span>
              <span className="text-lg">
                {" "}
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-gray-500 mr-2"
                />
                1:30 PM: Enjoy lunch at a local restaurant with recommendations
                from your guide.
              </span>
              <span className="text-lg">
                {" "}
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-gray-500 mr-2"
                />
                2:30 PM: Visit Mehtab Bagh for a beautiful view of the Taj Mahal
                from across the river.
              </span>
              <span className="text-lg">
                {" "}
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-gray-500 mr-2"
                />
                3:30 PM: Explore the Tomb of Itimad-ud-Daulah (Baby Taj) and
                admire its marble artistry.
              </span>
              <span className="text-lg">
                {" "}
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-gray-500 mr-2"
                />
                4:30 PM: Free time for shopping or exploring a local market.
              </span>
              <span className="text-lg">
                {" "}
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-gray-500 mr-2"
                />
                5:30 PM: Begin your drive back to Delhi.
              </span>
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
      </div>
    </div>
  );
}
export default SameDay;
