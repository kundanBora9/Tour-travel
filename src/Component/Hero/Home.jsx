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

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    if (carouselRef.current) {
      const slider = carouselRef.current.querySelector('.carousel');
      slider.addEventListener('slideChanged', () => {
        setAnimateText(true);
        setTimeout(() => {
          setAnimateText(false);
        }, 500);
      });
    }
  }, [carouselRef]);


  const slides = [
    {
      img: slider_1,
      text: 'Timeless Taj Mahal - Golden Triangle Tour',
    },
    {
      img: slider_2,
      text: 'Royal Rajasthan - Hawa Mahal Awaits',
    },
    {
      img: slider_4,
      text: 'Historic Udaipur - Explore Now',
    },
  ];
  return (
    <>
<div className="h-56 sm:h-64 xl:h-screen 2xl:h-screen relative">
<Carousel ref={carouselRef} pauseOnHover>
  {slides.map((slide, index) => (
    <div key={index}>
      <img src={slide.img} alt="..." />
      <h1
        className={`absolute bottom-40 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-bold playfair text-orange-500 ${
          animateText && index === currentIndex ? 'animate-fade-in' : ''
        }`}
        style={{
          backdropFilter: 'blur(2px)', // Add this line
          WebkitBackdropFilter: 'blur(2px)', // Add this line for Safari support
        }}
      >
        {slide.text}
      </h1>
    </div>
  ))}
</Carousel>
    </div>

      {/* marquee */}

      {/* tours */}

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
                  Explore the majestic forts and palaces of Agra and Rajasthan
                  and Delhi, Experience the rich history
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

          <div className="card-3">
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

          <div className="card-4">
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

      <div>
        <h1 className=" font-bold text-center mt-10 playfair text-6xl">
          Rajasthan Tour
        </h1>
        <div className="flex justify-evenly flex-wrap items-center">
          <div>
            <Card
              className="max-w-sm mt-5"
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

      {/* what we offer */}

      <div>
        <h1 className="playfair text-6xl font-bold text-center mt-10">
          What we offer
        </h1>
        <div className="flex flex-wrap justify-evenly items-center mt-10">
          <div className="Car Rental">
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
          <div className="Tour-guide">
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
          <div className="Hotel">
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
      <div>
        <h1 className="playfair text-6xl font-bold text-center mt-10">
          What Our Clients Say
        </h1>
        <div className="flex flex-wrap justify-center items-center mt-10">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              {" "}
              <img
                src={Client_img}
                alt=""
                srcset=""
                className="w-full h-60 object-cover"
              />{" "}
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Client_img2}
                alt=""
                srcset=""
                className="w-full h-60 object-cover"
              />{" "}
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Client_img}
                alt=""
                srcset=""
                className="w-full h-60 object-cover"
              />{" "}
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Client_img2}
                alt=""
                srcset=""
                className="w-full h-60 object-cover"
              />{" "}
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      {/* Start your Journey */}

      <div className="flex justify-center items-center size-full">
        <div>
          <h1 className="playfair text-6xl font-bold text-center mt-10">
            Start Your Journey
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
    </>
  );
}

export default Home;
