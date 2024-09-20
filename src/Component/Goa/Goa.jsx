import React from "react";
import { FloatingLabel, Textarea, Label } from "flowbite-react";
import GoaBanner from "../../assets/GoaBanner.jpg";
import GoaImg from "../../assets/GoaImg1.jpg";
import GoaImg1 from "../../assets/GoaImg2.jpg";
import GoaImg2 from "../../assets/GoaImg3.jpg";
import GoaImg3 from "../../assets/GoaImg4.jpg";
function Goa() {
  return (
    <div>
      <div>
        <div className="relative">
          <img src={GoaBanner} alt="Rajasthan" className="" />
        </div>
        <div className="flex flex-wrap items-center justify-center mt-5">
          <img
            src={GoaImg}
            alt=""
            className="h-full max-h-80 w-1/3 rounded-lg mb-4 hover:scale-105 hover:opacity-80 hover:bg-gray-200 transition duration-300 ease-in-out"
          />
          <img
            src={GoaImg1}
            alt=""
            className="h-full max-h-80 w-1/3 rounded-lg mb-4 hover:scale-105 hover:opacity-80 hover:bg-gray-200 transition duration-300 ease-in-out"
          />
          <img
            src={GoaImg2}
            alt=""
            className="h-full max-h-80 w-1/3 rounded-lg mb-4 hover:scale-105 hover:opacity-80 hover:bg-gray-200 transition duration-300 ease-in-out"
          />
          <img
            src={GoaImg3}
            alt=""
            className="h-full max-h-80 w-1/3 rounded-lg mb-4 hover:scale-105 hover:opacity-80 hover:bg-gray-200 transition duration-300 ease-in-out"
          />
        </div>

        <div className="flex  justify-evenly items-center ">
          <div className="flex w-1/2 flex-col">
            <h2 className="lato-bold text-4xl">Itinerary</h2>
            <div>
              <h2 className="font-bold text-3xl playfair">Day 1: Arrival Goa</h2>
              <p className="lato-regular">
                Morning: Flight from Delhi to Goa. Flight recommended for a
                morning arrival. Airport Pickup - Goa Airport (Dabolim) to
                hotel. Free time in the afternoon/ afternoon: Lunch at one of
                the local Goan restaurants Afternoon to unwind along the sea on
                Miramar Beach or Dona Paula Evening: Cruise the Mandovi River
                from Panjim. Onboard enjoy live music folk Goan performances and
                dinner. Overnight: Spend in your hotel at North or South Goa.
              </p>

              <h2 className="font-bold text-3xl playfair" >Day 2: North Goa Excursions</h2>

              <p className="lato-regular">
                Morning: Have your breakfast in the hotel. Drive to the
                17th-century Fort Aguada, the Portuguese fort overlooking the
                Arabian Sea. Visit water sports or laze around at Candolim
                Beach, just nearby. Afternoon: Explore Calangute and Baga Beach.
                These beaches are known for their shacks, local delicacies, and
                an energetic vibe. Have lunch at a shack on the beach (seafood
                is a must). Evening: Visit Anjuna Beach and stroll down the
                local flea market to buy handicrafts, souvenirs, and clothes.
                Sunset on Vagator Beach with a fantastic view of the Chapora
                Fort Night Stay: back to hotel
              </p>

              <h2 className="font-bold text-3xl playfair">Day 3: Serenity in South Goa</h2>
              <p className="lato-regular">
                Morning:- After breakfast, proceed to Colva Beach, said to be
                one of the most talked about beaches in South Goa. There are two
                UNESCO World Heritage Sites called Basilica of Bom Jesus and Se
                Cathedral Old Goa that do not to be missed. Afternoon: Relax and
                enjoy the sun and sea on Palolem Beach or Agonda Beach. Lunch is
                taken in a beachside café over a relaxed lunch Evening: Visit
                Margao Market for some shopping of spices, cashews, and
                souvenirs. Dinner could be in the hotel or a candlelit dinner at
                a seaside restaurant. Overnight: Stay in your hotel in South
                Goa.
              </p>

              <h2 className="font-bold text-3xl playfair">Day 4: Excursion</h2>

              <p className="lato-regular">
                Morning: Have an early breakfast in the hotel and check out from
                the hotel. Depending upon your flight time, you could visit
                either Shri Mangeshi Temple or a spice plantation in the local
                region. Afternoon: Drive down to Goa Airport for return flights
                to Delhi.
              </p>
            </div>
          </div>
          <div className="border-2 order-2 border-zinc-950 rounded-lg  mt-5">
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
  );
}

export default Goa;
