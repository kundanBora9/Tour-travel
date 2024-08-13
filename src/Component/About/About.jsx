import React from 'react'
import Client from '../../assets/client-1.jpg'

function About() {
  return (
    <div>
      <h1 className='text-center text-6xl playfair font-bold text-gray-900  mb-10'>About Us</h1>
      <div className='flex justify-center items-top gap-10 md:flex-row flex-col'>
        <div className='hidden md:block'>
          <img src={Client} alt="" className='w-full md:'/>
        </div>
        <div className='md:'>
          <h1 className='text-2xl playfair font-bold tracking-tight text-gray-900'>
            Our Mission:
          </h1>
          <p className='font-normal text-gray-700 lato-bold'>Namasta Odyssey specializes in and believes in personalized travel and tour solutions as its services are as diverse as the country of India. Our aim is to present India as cleanly, uniquely, and as accurately as possible. Our aim is to guide you through all the opportunities of this land, from the grandeur of the forts and the richness of the colourful civilizations to the quietude of the landscape and the wisdom of the retreats. Thousands of tourists can testify that Africa marathon, Silk Road, photographing wild tigers are unique and that we ensure just that. Being well aware of what every visitor would like to get and our commitment of trying to go beyond and above their expectation, we provide Quality and Excellence.</p>
          <h1 className='text-2xl playfair font-bold tracking-tight text-gray-900'>Our Services:</h1>
          <p className='font-normal text-gray-700 lato-bold'>Namasta Odyssey boasts of having the capability to execute such plans accurately has assembled a vast array of option that it offers activity-based tours suit individual and group travelers. Our services encompass cultural touring, adventure travel, history and archaeology, art and craft, heritage travel in India, wildlife tourism, spiritual travel and pilgrimage, wellness and holistic tourism, Yoga and meditation tourism, and many other forms of travel across the Indian sub continent. We are primarily involved in the sale of inbound tours across the Northern region of India. Among our principal offerings are:Among our principal offerings are:</p>
          <h1 className='text-2xl playfair font-bold tracking-tight text-gray-900'>Hotel Booking in India:</h1>
          <p className='font-normal text-gray-700 lato-bold'>We do hotel bookings for one or groups or any category in any part of the Indian subcontinent. Thanks to our large number of connections, we can quote reasonable prices as well as many convenient offers. Just fill out your information, and we shall be back with the best solutions as soon as you can imagine.</p>
          <h1 className='text-2xl playfair font-bold tracking-tight text-gray-900'>Creating Itineraries and Personalized Vacations</h1>
          <p className='font-normal text-gray-700 lato-bold'>Namasta Odyssey boasts the service of developing the unique travel schedule. All you need to tell us is your dates to travel, the duration, and how much you’d be willing to spend, and we will take care of the rest to make your travel a remarkable one.</p>
          <h1 className='text-2xl playfair font-bold tracking-tight text-gray-900'>Tour Guide Services:</h1>
          <p className='font-normal text-gray-700 lato-bold'>Our knowledgeable tour guides provide guidance and explanation of cultural, historical, and renowned heritage. Every client gets the approved government guides who speak different languages thus improving the exploration for the clients.</p>
          <h1 className='text-2xl playfair font-bold tracking-tight text-gray-900'>Car Rental Services:</h1>
          <p className='font-normal text-gray-700 lato-bold'>We have a variety of cars and coaches, mostly to ensure that our clients get the best value for their money. While our mission is to offer a transport solution, we aim to make your transportation smooth and as comfortable as possible.</p>
        </div>
      </div>
    </div>
  )
}

export default About