import React from "react";
import GoldenTriangle from "../../assets/Golden-triangle.jpeg";
import IndiaGate from "../../assets/IndiaGate.jpg";
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
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl playfair  font-bold tracking-tight text-gray-900 dark:text-white">
            Day 1: Arrival in Delhi
          </h1>
          <p className="font-normal text-gray-900 lato-bold">
            Morning/Afternoon: Arrive in Delhi and check in at your hotel.
            Sightseeing: Visit Qutub Minar, Humayun’s Tomb and India Gate. Drive
            past the Presidential Palace and Parliament House. Evening: Explore
            Connaught Place or visit the lively market at Chandni Chowk.<br></br>
            Overnight: Stay in Delhi.
          </p>
        </div>
        <div><img src={IndiaGate} alt="" className="h-1/4 w-1/4" /></div>
      </div>
      <div>
        <div></div>
        <h1>Day 2: Delhi to Agra (about 3-4 hours by road) </h1>
        <p>
          Morning: Visit Jama Masjid, Rajghat and Lal Fort (drive past).
          Afternoon departure for Agra. Check into your hotel upon arrival.
          Evening: Visit Mehtab Bagh to watch the sunset of the Taj Mahal from
          across the Yamuna River Overnight: Stay in Agra.
        </p>
      </div>
      <div>
        <h1>Day 3: Agra to Jaipur (via Fatehpur Sikri) .</h1>
        <p>
          Morning: Visit the Taj Mahal at sunrise. Morning: Return to hotel for
          breakfast, then to Agra Fort. Afternoon departure for Jaipur, visiting
          Fatehpur Sikri (UNESCO World Heritage Site) on the way. Evening: Reach
          Jaipur, check in to your hotel. Overnight: Stay in Jaipur.{" "}
        </p>
      </div>
      <div>
        <h1>Day 4: Jaipur</h1>
        <p>
          Morning: Visit Amer Fort, Jal Mahal and Hawa Mahal. Afternoon: Explore
          the City Hall and Jantar mantar. Evening: Stroll the local markets or
          hike the Pink City Walls. Overnight: Stay in Jaipur.
        </p>
      </div>
      <div>
        <h1>Day 5 Jaipur to Delhi (departure) .</h1>
        <p>
          Morning: Depending on the time, you can visit other places in Jaipur
          like Nahargarh Fort or Albert Hall Museum. Afternoon: Drive (or fly)
          back to Delhi for another adventure.
        </p>
      </div>
    </div>
  );
}

export default GoldenTri;
