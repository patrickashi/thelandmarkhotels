import React from 'react';
import herobg1 from "../images/herobg1.jpg";


function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={herobg1}
          alt="Landmark Hotel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 text-center text-white">
        <p className='font-serif'>COME AND ENJOY</p>
        <h1 className="text-4xl md:text-6xl mb-4 font-serif my-10">WELCOME TO THE LANDMARK HOTEL</h1>
        <p className="text-xl md:text-2xl mb-8">Experience luxury like never before</p>
        <button className="bg-[#991b1b] text-sm text-white px-6 py-3 mt-4  transition duration-300">
          BOOK ONLINE
        </button>
      </div>
    </div>
  );
}

export default Hero;

