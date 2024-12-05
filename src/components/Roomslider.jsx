import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users2, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import herobg1 from "../images/herobg1.jpg";
import herobg2 from "../images/herobg2.jpg";

const rooms = [
  {
    id: 1,
    name: "Signature Room",
    image: herobg1,
    size: "70M2",
    maxPeople: 2,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 50000
  },
  {
    id: 2,
    name: "Deluxe Room",
    image: herobg2,
    size: "50M2",
    maxPeople: 3,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 70000
  },
  {
    id: 3,
    name: "Luxury Room",
    image: herobg1,
    size: "50M2",
    maxPeople: 4,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 95000
  }
];

export default function Roomslider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const navigate = useNavigate();

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === rooms.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const handleBookNow = (roomId) => {
    navigate(`/book/${roomId}`);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === rooms.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? rooms.length - 1 : prevIndex - 1
    );
  };

  // Helper function to determine slide width based on screen size
  const getSlideWidth = () => {
    if (window.innerWidth < 768) {
      return 100; // 100% width for mobile, 1 item per slide
    } else if (window.innerWidth < 1024) {
      return 50; // 50% width for tablets, 2 items per slide
    } else {
      return 33.33; // 33.33% width for larger screens, 3 items per slide
    }
  };

  const slideWidth = getSlideWidth(); // Get the appropriate slide width

  return (
    <div className="bg-[#111111] py-16 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-12">
        <h3 className="text-white/80 uppercase tracking-wider text-sm mb-2">Landmark Hotels</h3>
        <h2 className="text-4xl md:text-5xl text-white font-serif">Room & Suites</h2>
      </div>

      <div className="relative w-full max-w-4xl mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * slideWidth}%)`,
              width: `${rooms.length * slideWidth}%`
            }}
          >
            {rooms.map((room) => (
              <div
                key={room.id}
                className="w-full flex-shrink-0 px-0 md:px-2"
                style={{ width: `${slideWidth}%` }}
              >
                <div className="bg-[#111111] overflow-hidden">
                  <div className="relative">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-[400px] md:w-full aspect-[4/3] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-[#991b1b] text-white text-xs flex justify-between items-center px-4 py-2">
                      <div className="flex items-center gap-2">
                        <Maximize2 className="w-4 h-4" />
                        <span className="uppercase font-medium tracking-wider">Size {room.size}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users2 className="w-4 h-4" />
                        <span className="uppercase font-medium tracking-wider">Max People {room.maxPeople}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 text-center w-80 flex flex-col justify-center">
                    <h3 className="text-[#C4A484] text-2xl font-serif mb-3">{room.name}</h3>
                    <p className="text-white/60 text-sm mb-6">{room.description}</p>
                    <button
                      className="uppercase text-sm tracking-wider py-3 px-6 bg-[#991b1b] text-white hover:bg-[#A52A2A] transition-colors duration-300"
                      onClick={() => handleBookNow(room.id)}
                    >
                      Book Now From N{room.price}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-8 gap-2">
          {rooms.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                currentIndex === index ? 'bg-[#8B0000]' : 'bg-white/20'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute top-1/2 -left-12 transform -translate-y-1/2 text-white border border-white/20 rounded-full p-2 hover:bg-white/10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:flex absolute top-1/2 -right-12 transform -translate-y-1/2 text-white border border-white/20 rounded-full p-2 hover:bg-white/10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
