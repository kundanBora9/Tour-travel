import "./../../../src/App.css";
import slider_1 from "../Hero/images/slider_1.jpg";
import slider_2 from "../Hero/images/slider_2.jpg";
import slider_4 from "../Hero/images/slider_4.jpg";
import sameday from ".//images/sameday.jpeg";
import GoldenTriangle from ".//images/GoldenTriangle.png";
import sameday_1 from "../Hero/images/sameday_1.jpg";
import sameday_2 from "../Hero/images/sameday_2.jpeg";
import sameday_3 from "../Hero/images/sameday_3.jpeg";
import sameday_4 from "../Hero/images/sameday_4.jpeg";
import Jaipur from ".//images/Jaipur.jpg";
import Jodhpur from ".//images/jodhpur.jpg";
import udaipur from ".//images/udaipur.jpg";
import car_rental from ".//images/car-rental.jpg";
import Guide from ".//images/guide.jpg";
import Hotel from ".//images/Hotel.jpg";
import Whatsapp from ".//images/Whatsapp.png"
import Bhutan from './images/Bhutan.jpg';
import Nepal from './images/Nepal.jpg';
import Goa from './images/Goa.jpg'
import CustomBanner from '../../assets/CustomBanner.jpg'
import { Carousel } from "flowbite-react";
import { Card } from "flowbite-react";
import { FloatingLabel, Textarea, Label } from "flowbite-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Client_img from "./images/client-1.jpg";
import Client_img2 from "./images/client-2.jpg";
import { useState, useEffect } from 'react';
import { useRef} from 'react';
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import 'aos/dist/aos.css'
import Video from "../../assets/Video.mp4"

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed top-0 left-0 w-full h-full  bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-md">
        {children}
        <button
          className="bg-red-500 text-white p-2 rounded-md mt-10"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
};

const onSubmit = async (event) => {
  event.preventDefault();
  const form = event.target;
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  const formData = new FormData(event.target);

  formData.append("access_key", "b4b4a765-5689-47dc-8442-abf33c08237e");

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
function Home() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect((
    () => {
      AOS.init();
    }
  ),[])


  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <>
    <div className="relative">
  <video src={Video} loop muted autoPlay className="w-full h-full object-cover" />
  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
    <h1 className="text-white text-3xl lg:text-7xl  playfair ">
      Explore India's Timeless Beauty
    </h1>
  </div>
</div>
  {/* Whatsapp */}

  <div className="fixed right-10 bottom-5 p-3" style={{zIndex:"99",}}>
      <a href="https://wa.me/8171932323?text= Hello How Can I help You ?" target="_blank">
        <img src={Whatsapp} alt="Whatsapp" className="w-16 lg:w-20" />
      </a>
    </div>


      {/* marquee */}
      <div className="flex justify-center items-center  bg-orange-500  mt-5 overflow-hidden">
      <motion.div
        initial={{ x: 1000 }}
        animate={{ x: -1000 }}
        transition={{ duration: 20, repeat: Infinity }}
        className="text-lg font-bold text-white p-4 rounded-md flex justify-center items-center gap-5"
      >
       <p> Email: <a href="mailto:example@example.com">example@example.com</a> | WhatsApp: <a href="https://wa.me/8171932323">8171932323</a></p>
      </motion.div>
      <motion.div
        initial={{ x: 1000 }}
        animate={{ x: -1000 }}
        transition={{ duration: 20, repeat: Infinity,delay:3}}
        className="text-lg font-bold text-white p-4 rounded-md flex justify-center items-center gap-5"
      >
       <p> Email: <a href="mailto:example@example.com">example@example.com</a> | WhatsApp: <a href="https://wa.me/8171932323">8171932323</a></p>
      </motion.div>
    </div>


      {/* Banner */}

       <div className="mt-5">
        <img src={CustomBanner} alt="" />
       </div>


      {/* tours */}

      <div>
        <h2 data-aos="fade-up"
     data-aos-duration="3000" className="text-6xl font-bold text-center mt-10 playfair">
          Discover the Majesty of Agra, Delhi and Rajasthan
        </h2>
        <div data-aos="fade-up"
     data-aos-duration="3000" className="flex justify-evenly flex-wrap items-center mt-10">
          <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="card-1">
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
     data-aos-duration="3000" className="card-1">
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
     data-aos-duration="3000" className="card-1">
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
        <h2 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className=" font-bold text-center mt-10 playfair text-6xl">
          Same Day Tour
        </h2>
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="flex justify-evenly flex-wrap items-center mt-10">
          <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="card-1">
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={sameday_2}
            >
              <Link to="/sameday">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white playfair">
                Same Day Delhi to Agra
              </h5>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white playfair">
                By Car
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "#FFD43B" }}
                />{" "}
                Taj Mahal/AgraFort......
              </p>
              </Link>
              <div className="flex justify-evenly items-center">
              <Link to="/sameday">
                <p>Read More</p>
                </Link>
                <div>
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
     data-aos-duration="1500" className="card-2">
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={sameday_1}
            >
                 <Link to="/samedaytrain">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white playfair">
                Same Day Delhi to Agra
              </h5>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white playfair">
                By Train
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "#FFD43B" }}
                />{" "}
                Taj Mahal/AgraFort......
              </p>
              </Link>
              <div className="flex justify-evenly items-center">
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

          <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="card-3">
            <Card
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={sameday_3}
            >
              <Link to="/samedaycarjai">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white playfair">
                Same Day Delhi to Jaipur
              </h5>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white playfair">
                By Car
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "#FFD43B" }}
                />{" "}
                Amber Fort, City Palace, and Hawa Mahal
              </p>
              </Link>
              <div className="flex justify-evenly items-center">
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

          <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="card-4">
            <Card
              className="max-w-sm mt-5"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={sameday_4}
            >
                <Link to="/samedaytrainjai">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white playfair">
                Same Day Delhi to Jaipur
              </h5>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white playfair">
                By Train
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "#FFD43B" }}
                />{" "}
                Amber Fort, City Palace, and Hawa Mahal
              </p>
              </Link>
              <div className="flex justify-evenly items-center">
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

      <div data-aos="fade-up"
     data-aos-duration="3000">
        <h2 className=" font-bold text-center mt-10 playfair text-6xl">
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

      <div  data-aos="fade-up"
     data-aos-duration="3000">
        <h2 className="playfair text-6xl font-bold text-center mt-10 ">
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


      {/* Goa */}
     
      <div  data-aos="fade-up"
     data-aos-duration="3000">
        <h2 className="playfair text-6xl font-bold text-center mt-10 ">
        Goa Awaits: Sun, Sand, and Sea
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
 {/* Internatiol  */}

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


      {/* what we offer */}

      <div data-aos="zoom-in-left" className="">
        <h2 className="playfair text-6xl font-bold text-center mt-10">
          What we offer
        </h2>
        <div className="flex flex-wrap justify-evenly items-center mt-10">
          <div className="Car Rental card-1">
            <Card
              className="max-w-sm mt-5"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={car_rental}
            >
              <h5 className="text-2xl font-bold text-center text-gray-900 playfair">
                Rental Car
              </h5>
              <p className="font-normal text-gray-700 lato-bold">
                You can Book cabs or taxi in Agra for full day sightseeings.
              </p>
            </Card>
          </div>
          <div className="Tour-guide card-1">
            <Card
              className="max-w-sm mt-5"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={Guide}
            >
              <h5 className="text-2xl font-bold text-center text-gray-900 playfair">
                Tour Guide
              </h5>
              <p className="font-normal text-gray-700 lato-bold">
                Book your local private tour guide & explore beautiful cities in
                India.
              </p>
            </Card>
          </div>
          <div className="Hotel card-1">
            <Card
              className="max-w-sm mt-5"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={Hotel}
            >
              <h5 className="text-2xl font-bold text-center text-gray-900 playfair">
                Hotels
              </h5>
              <p className="font-normal text-gray-700 lato-bold">
                Book budget and luxury hotels at best price from us.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* What Our Clients Say */}
      <div >
        <h2 className="playfair text-6xl font-bold text-center mt-10">
          What Our Clients Say
        </h2>
        <div className="flex flex-wrap justify-center items-center mt-10">
  <Swiper
    spaceBetween={50}
    slidesPerView={3}
    onSlideChange={() => console.log("slide change")}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide>
      <div className="relative">
        <img
          src={Client_img}
          alt=""
          srcset=""
          className="w-full h-60 object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#001F3F] opacity-0 hover:opacity-100 transition duration-300">
          <p className="p-4  text-white  text-center text-lg">⭐ ⭐ ⭐ ⭐ ⭐<br/>
          "The day tour was simply perfect! From the moment we were picked up to the final stop, everything was well-organized and seamless. Our guide was knowledgeable and friendly, making the whole experience even more enjoyable. Highly recommend their services!"</p>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="relative">
        <img
          src={Client_img2}
          alt=""
          srcset=""
          className="w-full h-60 object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#001F3F] opacity-0 hover:opacity-100 transition duration-300">
          <p className="p-4 text-lg text-white text-center">⭐ ⭐ ⭐ ⭐ ⭐<br/>
          "I booked a same-day tour of Jaipur, and it exceeded all my expectations. The itinerary was perfectly balanced between sightseeing and relaxation. The driver was professional, and the guide brought the city’s history to life!"</p>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="relative">
        <img
          src={Client_img}
          alt=""
          srcset=""
          className="w-full h-60 object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#001F3F] opacity-0 hover:opacity-100 transition duration-300">
          <p className="p-4 text-lg text-white text-center">⭐ ⭐ ⭐ ⭐ ⭐<br/>
          "Saffron Routes made our Golden Triangle tour an unforgettable journey. From the Taj Mahal to the vibrant streets of Jaipur, every moment was magical. We couldn't have asked for better hospitality and care."</p>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="relative">
        <img
          src={Client_img2}
          alt=""
          srcset=""
          className="w-full h-60 object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-[#001F3F] opacity-0 hover:opacity-100 transition duration-300">
          <p className="p-4 text-lg text-white text-center">⭐ ⭐ ⭐ ⭐ ⭐<br/>
          "I was worried about how the kids would handle the long travel, but the team made sure we were comfortable at every point. The personalized tour itinerary catered to our needs perfectly. Will definitely book with them again!"</p>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</div>
      </div>

      {/* Start your Journey */}

      <div data-aos="zoom-out-down" className="flex justify-center items-center size-full">
        <div>
          <h2 className="playfair text-6xl font-bold text-center mt-10">
            Start Your Journey
          </h2>
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
    </>
  );
}

export default Home;
