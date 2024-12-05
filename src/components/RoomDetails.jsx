import React from 'react';
import { useParams } from 'react-router-dom';
import herobg1 from "../images/herobg1.jpg";
import herobg2 from "../images/herobg2.jpg";

// Rooms data (you can replace this with an API call)
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
  },
  {
    id: 4,
    name: "Presidential Suite",
    image: herobg2,
    size: "100M2",
    maxPeople: 5,
    description: "Experience the ultimate luxury with our presidential suite.",
    price: 150000
  },
  // Add more rooms here
  {
    id: 5,
    name: "Ocean View Room",
    image: herobg1,
    size: "80M2",
    maxPeople: 2,
    description: "A stunning room with a view of the ocean.",
    price: 85000
  }
];

function RoomDetails() {
  const { id } = useParams(); // Extract the room ID from the URL
  const room = rooms.find((room) => room.id === parseInt(id)); // Find the room data by ID

  if (!room) {
    return <div className="text-center text-white">Room not found.</div>; // Handle invalid room ID
  }

  return (
    <div className="bg-[#111111] text-white min-h-screen py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-[300px] md:h-[500px] object-cover mb-8"
        />
        <h1 className="text-4xl font-serif mb-4">{room.name}</h1>
        <p className="text-white/70 mb-6">{room.description}</p>
        <div className="flex justify-between items-center mb-6">
          <div className="text-sm">
            <span className="block font-medium">Size: {room.size}</span>
            <span className="block font-medium">Max People: {room.maxPeople}</span>
          </div>
          <span className="text-lg font-bold text-[#d97706]">N{room.price}</span>
        </div>
        <button className="py-3 px-6 bg-[#991b1b] text-white hover:bg-[#A52A2A] transition-colors duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default RoomDetails;
