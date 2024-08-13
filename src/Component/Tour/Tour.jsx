import React, { useState } from 'react';  
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
import { Card } from "flowbite-react";
import { FloatingLabel, Textarea, Label } from "flowbite-react";
import { Link } from "react-router-dom";
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
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <div>
        <h1 className="text-6xl font-bold text-center mt-10 playfair">
          Discover the Majesty of Agra, Delhi and Rajasthan
        </h1>
        <div className="flex justify-evenly flex-wrap items-center mt-10">
          <div>
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
              Explore the majestic forts and palaces of Agra and Rajasthan and
              Delhi, Experience the rich history
            </p>
          </Card>
          </Link>
          </div>

         <div>
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

          <div>
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

      <div>
        <h1 className=" font-bold text-center mt-10 playfair text-6xl">
          Same Day Tour
        </h1>
        <div className="flex justify-evenly flex-wrap items-center mt-10">
          <div className="card-1">
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={sameday_2}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white playfair">
                Same Day Delhi to Agra
              </h5>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white playfair">
                By Car
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
              <FontAwesomeIcon icon={faLocationDot} style={{color: "#FFD43B",}} /> Taj Mahal/AgraFort......
              </p>
              <div className="flex justify-evenly items-center">
                <p>Read More</p>
                <div>
                  <button
                    className="bg-[#E18A2C] text-white p-2 rounded-md"
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
                        <form className="mt-10">
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

          <div className="card-2">
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={sameday_1}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white playfair">
                Same Day Delhi to Agra
              </h5>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white playfair">
                By Train
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
              <FontAwesomeIcon icon={faLocationDot} style={{color: "#FFD43B",}} /> Taj Mahal/AgraFort......
              </p>
              <div className="flex justify-evenly items-center">
                <p>Read More</p>
                <div>
                  <button
                    className="bg-[#E18A2C] text-white p-2 rounded-md"
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
                        <form className="mt-10">
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

          <div className="card-3">
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={sameday_3}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white playfair">
                Same Day Delhi to Jaipur
              </h5>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white playfair">
                By Car
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
              <FontAwesomeIcon icon={faLocationDot} style={{color: "#FFD43B",}} /> Amber Fort, City Palace, and Hawa Mahal
              </p>
              <div className="flex justify-evenly items-center">
                <p>Read More</p>
                <div>
                  <button
                    className="bg-[#E18A2C] text-white p-2 rounded-md"
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
                        <form className="mt-10">
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

          <div className="card-4">
            <Card
              className="max-w-sm mt-5"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={sameday_4}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white playfair">
                Same Day Delhi to Jaipur
              </h5>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white playfair">
                By Train
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
              <FontAwesomeIcon icon={faLocationDot} style={{color: "#FFD43B",}} /> Amber Fort, City Palace, and Hawa Mahal
              </p>
              <div className="flex justify-evenly items-center">
                <p>Read More</p>
                <div>
                  <button
                    className="bg-[#E18A2C] text-white p-2 rounded-md"
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
                        <form className="mt-10">
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

      {/* Rajesthan Tour */}

      <div>
        <h1 className=" font-bold text-center mt-10 playfair text-6xl">
          Rajesthan Tour
        </h1>
        <div className="flex justify-evenly flex-wrap items-center">
          <div className="rajestha">
            <Card
              className="max-w-sm mt-5"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={Jaipur}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white playfair">
                Jaipur
              </h5>
              
              <p className="font-normal text-gray-700 dark:text-gray-400">
              <FontAwesomeIcon icon={faLocationDot} style={{color: "#FFD43B",}} /> For Two Nights
              </p>
              <div className="flex justify-evenly items-center">
                <p>Read More</p>
                <div>
                  <button
                    className="bg-[#E18A2C] text-white p-2 rounded-md"
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
                        <form className="mt-10">
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

          <div>
            <Card
              className="max-w-sm mt-5"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={Jodhpur}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white playfair">
                Jodhpur
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
              <FontAwesomeIcon icon={faLocationDot} style={{color: "#FFD43B",}} />  For Two Nights
              </p>
              <div className="flex justify-evenly items-center">
                <p>Read More</p>
                <div>
                  <button
                    className="bg-[#E18A2C] text-white p-2 rounded-md"
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
                        <form className="mt-10">
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

          <div>
            <Card
              className="max-w-sm mt-5"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={udaipur}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white playfair">
                Udaipur
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
              <FontAwesomeIcon icon={faLocationDot} style={{color: "#FFD43B",}} /> For Six Nights and Seven Days
              </p>
              <div className="flex justify-evenly items-center">
                <p>Read More</p>
                <div>
                  <button
                    className="bg-[#E18A2C] text-white p-2 rounded-md"
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
                        <form className="mt-10">
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

      <div>
        <h1 className="playfair text-6xl font-bold text-center mt-10">
          Golden Triangle Tour
        </h1>
        <div className="flex justify-evenly flex-wrap items-center">
          <div>
              <Card
                className="max-w-sm mt-5"
                imgAlt="Golden Tour Image"
                imgSrc={slider_1}
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white playfair">
                  Delhi Agra and Jaipur 
                </h5>
                
                <p className="font-normal text-gray-700 lato-bold ">
                <FontAwesomeIcon icon={faLocationDot} style={{color: "#FFD43B",}} /> For Four Nights and Five Days
                </p>
                <div className="flex justify-evenly items-center">
                <Link to="/golden">
                  <p>Read More</p>
                   </Link>
                  
                  <div>
                    <button
                      className="bg-[#E18A2C] text-white p-2 rounded-md"
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
                          <form className="mt-10">
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
    </div>
  )
}

export default Tour