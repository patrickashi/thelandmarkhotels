import React from 'react';
import { Link } from 'react-router-dom';
import presidential_suite from "../images/presidential_suite (2).jpg";
import '../index.css';


function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={presidential_suite}
          alt="Landmark Hotel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 text-center text-white">
        <p className=''>A TOUCH OF CLASS</p>
        <h1 className="text-4xl md:text-6xl font-carter my-10">WELCOME TO THE LANDMARK HOTEL</h1>
        <p className="text-xl md:text-2xl mb-8">Experience luxury like never before</p>
        <Link to="/rooms">
          <button className="bg-[#991b1b] text-sm text-white px-6 py-3 mt-4  transition duration-300">
            BOOK ONLINE
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;

