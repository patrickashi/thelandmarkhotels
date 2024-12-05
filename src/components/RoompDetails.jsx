import React from 'react';
import { useParams } from 'react-router-dom';
import { rooms } from '../data/roomData'; // Import the static room data

export default function RoompDetails() {
  const { roomId } = useParams(); // Get the room ID from the URL params
  const room = rooms.find((room) => room.id === parseInt(roomId)); // Find the room by its ID

  if (!room) {
    return <p>Room not found!</p>;
  }

  return (
    <div className="bg-[#111111] py-16 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-12">
        <h3 className="text-white/80 uppercase tracking-wider text-sm mb-2">Landmark Hotels</h3>
        <h2 className="text-4xl md:text-5xl text-white font-serif">{room.name}</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-96 object-cover"
          />
        </div>
        <div className="text-white flex flex-col gap-2">
          <p className="text-sm">{room.description}</p>
          <p className="text-sm">Size: {room.size}</p>
          <p className="text-sm">Max People: {room.maxPeople}</p>
          <p className="text-sm text-[#d97706]">Price: N{room.price}</p>
          <button className="py-3 px-6 mt-10 bg-[#991b1b] text-white hover:bg-[#A52A2A] transition-colors duration-300">
            Book Now
          </button>
        </div>
   
      </div>
    </div>
  );
}
