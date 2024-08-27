import React from "react";
import { FloatingLabel, Textarea, Label } from "flowbite-react";
function samedayTrainJai() {
  return (
    <div>
      <div></div>
      <div className="flex flex-wrap justify-evenly items-center ">
      <div className="flex flex-col">
        <h1 className="lato-bold text-4xl">Itinerary</h1>
        <span className="text-lg">
          {" "}
          Leave Delhi in the early morning. Take the train to Jaipur.
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
        <span className="text-lg"> Begin your train trip back to Delhi.</span>
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

export default samedayTrainJai;
