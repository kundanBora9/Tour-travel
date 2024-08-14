import React from "react";
import GoldenTriangle from "../../assets/Golden-triangle.jpeg";
import HumayunTOmb from "../../assets/humayuntomb.jpg";
function GoldenTri() {
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
          <p className="text-center lato-regular text-3xl">4-night, 5-day </p>
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
          <h1 className="text-2xl playfair  font-bold tracking-tight text-gray-900 dark:text-white">Day 2: Delhi to Agra (about 3-4 hours by road) </h1>
          <p className="font-normal text-gray-900 lato-bold">
            Morning: Visit Jama Masjid, Rajghat and Lal Fort (drive past).<br/>
            Afternoon departure for Agra. Check into your hotel upon arrival.<br/>
            Evening: Visit Mehtab Bagh to watch the sunset of the Taj Mahal from
            across the Yamuna River<br/> Overnight: Stay in Agra.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-start md:justify-end ">
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
            Day 3: Agra to Jaipur (via Fatehpur Sikri) .
          </h1>
          <p className="font-normal text-gray-900 lato-bold">
            Morning: Visit the Taj Mahal at sunrise. Morning: Return to hotel
            for breakfast, then to Agra Fort.<br/>  Afternoon departure for Jaipur,
            visiting Fatehpur Sikri (UNESCO World Heritage Site) on the way.
            <br/> Evening: Reach Jaipur, check in to your hotel. <br/> Overnight: Stay in
            Jaipur.{" "}
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
        <h1 className="text-2xl playfair  font-bold tracking-tight text-gray-900 dark:text-white" >Day 4: Jaipur</h1>
        <p className="font-normal text-gray-900 lato-bold">
          Morning: Visit Amer Fort, Jal Mahal and Hawa Mahal.<br/> Afternoon: Explore
          the City Hall and Jantar mantar.<br/> Evening: Stroll the local markets or
          hike the Pink City Walls.<br/> Overnight: Stay in Jaipur.
        </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-start md:justify-end ">
          <img
            src={HumayunTOmb}
            alt=""
            className="h-full w-full md:h-full md:w-1/2 shadow-lg rounded-lg"
          />
        </div>
       
      </div>
      <div className="flex flex-wrap justify-center mt-10 mx-5">
        <div  className="w-full md:w-1/2">
        <h1 className="text-2xl playfair  font-bold tracking-tight text-gray-900 dark:text-white">Day 5 Jaipur to Delhi (departure) .</h1>
        <p className="font-normal text-gray-900 lato-bold">
          Morning: Depending on the time, you can visit other places in Jaipur
          like Nahargarh Fort or Albert Hall Museum.<br/> Afternoon: Drive (or fly)
          back to Delhi for another adventure.
        </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-start md:justify-end ">
          <img
            src={HumayunTOmb}
            alt=""
            className="h-full w-full md:h-full md:w-1/2 shadow-lg rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default GoldenTri;
