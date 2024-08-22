import React from "react";
import SamdayImg from "../../assets/samedaycover.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

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
          <div className="flex justify-items-stretch items-start ">
            <div className="flex flex-col">
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
            <div className="border-2">
              <h1>Book Now</h1>
              <form action="">
                <label>Name</label>
                <input type="text" placeholder="Name" className="w-1/2 p-3" />
                <label>Email</label>
                <input type="email" placeholder="Email" className="w-1/2 p-3" />
                <label>Phone</label>
                <input type="tel" placeholder="Phone" className="w-1/2 p-3" />
                <label>Number of People</label>
                <select className="w-1/2 p-3">
                  <option value="">Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                <button>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SameDay;
