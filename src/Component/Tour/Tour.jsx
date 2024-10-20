import React, { useState } from 'react';  
import { Link } from "react-router-dom";
import { createPortal } from 'react-dom';
import slider_1 from "../Hero/images/slider_1.jpg";
import "./../../../src/App.css"
import sameday from '../Hero/images/sameday.jpeg'
import slider_2 from "../Hero/images/slider_2.jpg";
import GoldenTriangle from '../Hero/images/GoldenTriangle.png'
import sameday_1 from '../Hero/images/sameday_1.jpg'
import sameday_2 from '../Hero/images/sameday_2.jpeg'
import sameday_3 from '../Hero/images/sameday_3.jpeg'
import sameday_4 from '../Hero/images/sameday_4.jpeg'
import Jaipur from "../Hero/images/Jaipur.jpg"
import Jodhpur from '../Hero/images/jodhpur.jpg'
import udaipur from '../Hero/images/udaipur.jpg'
import Bhutan from '../Hero/images/Bhutan.jpg';
import Nepal from '../Hero/images/Nepal.jpg';
import Goa from '../Hero/images/Goa.jpg'
import { Card } from "flowbite-react";
import { FloatingLabel, Textarea, Label } from "flowbite-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"; 

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed top-0 left-0 w-full h-full  bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-md">
        {children}
        <button className="bg-red-500 text-white p-2 rounded-md" onClick={onClose}>
          Close
        </button>
      </div>
    </div>,
    document.body
  );
};

function Tour() {

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

      {/* tours */}
      <div>
        <h2 data-aos="fade-up"
     data-aos-duration="2000" className="text-3xl md:text-4xl lg:text-4xl font-bold text-center mt-10 playfair">
          Discover the Majesty of Agra, Delhi and Rajasthan
        </h2>
        <div data-aos="fade-up"
     data-aos-duration="2000" className="flex justify-evenly flex-wrap items-center gap-5 md:gap-3 lg:gap-3 mt-10">
         
          <div data-aos="fade-up"
     data-aos-duration="2000" className="card-1">
            <Link to="/rajeshtan" className="">
              <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={slider_2}
              >
                <h5 className="text-2xl playfair font-bold tracking-tight text-gray-900 dark:text-white">
                  Rajasthan Tour
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 lato-bold">
                  Experience the splendor of Rajasthan's magnificent palaces and
                  forts while learning about its fascinating past.
                </p>
              </Card>
            </Link>
          </div>

          <div data-aos="fade-up"
     data-aos-duration="2000" className="card-1">
            <Link to="/golden">
              <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={GoldenTriangle}
              >
                <h5 className="text-2xl playfair  font-bold tracking-tight text-gray-900 dark:text-white">
                  Golden Triangle
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 lato-bold">
                  Explore the majestic forts and palaces of Agra and Rajasthan
                  and Delhi, Experience the rich history
                </p>
              </Card>
            </Link>
          </div>

 
          <div data-aos="fade-up"
     data-aos-duration="2000" className="card-1">
            <Link to="/sameday">
              <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={sameday}
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white playfair">
                  Same Day Tour
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 lato-bold">
                  Experience a Same Day Tour of Rajasthan, Delhi, and Agra,
                  exploring majestic forts, palaces, and rich history.
                </p>
              </Card>
            </Link>
          </div>
        </div>
      </div>

      {/* same day tour */}

      <div className=" ">
        <h2 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000" className=" font-bold text-center mt-10 playfair text-3xl md:text-4xl lg:text-4xl">
          Same Day Tour
        </h2>
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000" className=" gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ml-10 mx-auto items-center mt-5   ">
          <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000" className="card-1">
            <Card
              className=" w-72 h-96"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={sameday_2}
            >
              <Link to="/sameday">
              <h5 className="text-md md:text-lg lg:text-lg font-bold tracking-tight text-gray-900 playfair">
                Same Day Delhi to Agra
              </h5>
              <h5 className="text-md md:text-lg lg:text-lg font-bold tracking-tight text-gray-900 playfair">
                By Car
              </h5>
              <p className="font-normal text-sm
               text-gray-700 dark:text-gray-400">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "#FFD43B" }}
                />{" "}
                Taj Mahal/AgraFort......
              </p>
              </Link>
              <div className="flex justify-between items-center">
              <Link to="/sameday">
                <p>Read More</p>
                </Link>
                <div>
                  <button
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold p-2 rounded-md text-sm"
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

                          <button className="border-green-600 border-2 mt-5 px-3 rounded-md text-green-500" >
                            Submit
                          </button>
                        </form>
                      </div>
                    </div>
                  </Modal>
                </div>
              </div>
            </Card>
          </div>

          <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000" className="card-2">
            <Card
              className=" w-72 h-96 "
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={sameday_1}
            >
                 <Link to="/samedaytrain">
              <h5 className="text-md md:text-lg lg:text-lg font-bold tracking-tight text-gray-900 dark:text-white playfair">
                Same Day Delhi to Agra
              </h5>
              <h5 className="text-md md:text-lg lg:text-lg font-bold tracking-tight text-gray-900 dark:text-white playfair">
                By Train
              </h5>
              <p className="font-normal text-gray-700">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "#FFD43B" }}
                />{" "}
                Taj Mahal/AgraFort......
              </p>
              </Link>
              <div className="flex justify-between items-center">
              <Link to="/samedaytrain">
                <p>Read More</p>
                </Link>
                <div>
                  <button
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold p-2 rounded-md"
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
            </Card>
          </div>

          <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000" className="card-3">
            <Card
              className="w-72 h-96"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={sameday_3}
            >
              <Link to="/samedaycarjai">
              <h5 className="text-md md:text-lg lg:text-lg font-bold tracking-tight text-gray-900 dark:text-white playfair">
                Same Day Delhi to Jaipur
              </h5>
              <h5 className="text-md md:text-lg lg:text-lg font-bold tracking-tight text-gray-900 dark:text-white playfair">
                By Car
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "#FFD43B" }}
                />{" "}
                Amber Fort, City Palace.....
              </p>
              </Link>
              <div className="flex justify-between items-center">
              <Link to="/samedaycarjai">
                <p>Read More</p>
                </Link>
                <div>
                  <button
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold p-2 rounded-md"
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
            </Card>
          </div>

          <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000" className="card-4">
            <Card
              className="w-72 h-96"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={sameday_4}
            >
                <Link to="/samedaytrainjai">
              <h5 className="text-md md:text-lg lg:text-lg font-bold tracking-tight text-gray-900 dark:text-white playfair">
                Same Day Delhi to Jaipur
              </h5>
              <h5 className="text-md md:text-lg lg:text-lg font-bold tracking-tight text-gray-900 dark:text-white playfair">
                By Train
              </h5>
              <p className="font-normal text-gray-700">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "#FFD43B" }}
                />{" "}
                Amber Fort, City Palace...
              </p>
              </Link>
              <div className="flex justify-between items-center">
              <Link to="/samedaytrainjai">
                <p>Read More</p>
                </Link>
                <div>
                  <button
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold p-2 rounded-md"
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

                          <button className="border-green-600 border-2 mt-5 px-3 rounded-md text-green-500"onSubmit={onSubmit}>
                            Submit Now
                          </button>
                        </form>
                      </div>
                    </div>
                  </Modal>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className="flex justify-center  items-center gap-10 flex-wrap md:flex-nowrap lg:flex-nowrap">
  {/* Rajesthan Tour */}
<div data-aos="fade-up"
     data-aos-duration="2000">
      <h2 className=" font-bold text-center mt-10 playfair text-4xl">
          Rajasthan Tour
        </h2>
        <div className="flex justify-evenly flex-wrap items-center">
        
          <div className="">
            <Card
              className="max-w-sm mt-5 card-1"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={Jodhpur}
            >
              <Link to="/rajeshtan">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white playfair">
                Rajasthan Tour
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "#FFD43B" }}
                />{" "}
                For Six Nights and Seven Days
              </p>
              </Link>
              <div className="flex justify-evenly items-center">
                <Link to="/rajeshtan">
                  <p>Read More</p>
                </Link>
                <div>
                  <button
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold p-2 rounded-md"
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
            </Card>
          </div>
        </div>
      </div>

      
      {/* Golden Tour */}

      <div  data-aos="fade-up"
     data-aos-duration="2000">
      <h2 className="playfair text-4xl  text-center font-bold  mt-10 ">
          Golden Triangle Tour
        </h2>
        <div className="flex justify-evenly flex-wrap items-center">
        
          <div className="card-1">
            <Card
              className="max-w-sm mt-5"
              imgAlt="Golden Tour Image"
              imgSrc={slider_1}
            >
              <Link to="/golden">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white playfair">
                Delhi Agra and Jaipur
              </h5>

              <p className="font-normal text-gray-700 lato-bold ">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "#FFD43B" }}
                />{" "}
                For Four Nights and Five Days
              </p>
              </Link>
              <div className="flex justify-evenly items-center">
                <Link to="/golden">
                  <p>Read More</p>
                </Link>

                <div>
                  <button
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold p-2 rounded-md"
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
            </Card>
          </div>
        </div>
      </div>

      <div  data-aos="fade-up"
     data-aos-duration="2000">
        <h2 className="playfair text-4xl  font-bold text-center mt-10 ">
        Goa Tour
        </h2>
        <div className="flex justify-evenly flex-wrap items-center">
          <div className="card-1">
            <Card
              className="max-w-sm mt-5"
              imgAlt="Golden Tour Image"
              imgSrc={Goa}
            >
              <Link to="/goa">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white playfair">
             Delhi to Goa
              </h5>

              <p className="font-normal text-gray-700 lato-bold ">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "#FFD43B" }}
                />{" "}               
                Four Nights and Three Days
              </p>
              </Link>
              <div className="flex justify-evenly items-center">
                <Link to="/goa">
                  <p>Read More</p>
                </Link>

                <div>
                  <button
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold p-2 rounded-md"
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

                          <button className="border-green-600 border-2 mt-5 px-3 rounded-md text-green-500" >
                            Submit Now
                          </button>
                        </form>
                      </div>
                    </div>
                  </Modal>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
</div>
 

 {/* international */}
 
 <div>
          <h2 data-aos="fade-up"
     data-aos-duration="2000" className="text-6xl font-bold text-center mt-10 playfair">
       Nepal & Bhutan: A Journey to the Himalayas
        </h2>
        <div className="flex justify-evenly flex-wrap items-center mt-5">
        <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="card-1">
            <Link to="/nepal">
              <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={Nepal}
              >
                <h5 className="text-2xl playfair  font-bold tracking-tight text-gray-900 dark:text-white">
                  Nepal Tours
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 lato-bold">
                "Nepal: A land of breathtaking landscapes, rich culture, and the majestic Himalayas, offering adventure and serenity in equal measure."
                </p>
              </Card>
            </Link>
          </div>
          <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="card-1">
            <Link to="/bhutan">
              <Card
                className="max-w-sm"
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={Bhutan}
              >
                <h5 className="text-2xl playfair  font-bold tracking-tight text-gray-900 dark:text-white">
                  Bhutan Tours
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400 lato-bold">
                "Bhutan: The Land of the Thunder Dragon, where ancient traditions meet stunning natural beauty in the heart of the Himalayas."
                </p>
              </Card>
            </Link>
          </div>
        </div>
          </div>
       
    </div>
  )
}

export default Tour