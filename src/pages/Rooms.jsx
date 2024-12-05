import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users2, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { rooms } from '../data/roomData'; // Import the static room data

export default function Rooms() {
  const navigate = useNavigate();

  const handleRoomClick = (roomId) => {
    navigate(`/room/${roomId}`); // Redirect to the room detail page
  };

  return (
    <div className="bg-[#111111] py-16 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-12">
        <h3 className="text-white/80 uppercase tracking-wider text-sm mb-2">Landmark Hotels</h3>
        <h2 className="text-4xl md:text-5xl text-white font-serif">All Rooms</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rooms.map((room) => (
          <div key={room.id} className="bg-[#111111] overflow-hidden">
            <div className="relative">
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-64 object-cover"
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
            <div className="p-6 text-center">
              <h3 className="text-[#C4A484] text-2xl font-serif mb-3">{room.name}</h3>
              <p className="text-white/60 text-sm mb-6">{room.description}</p>
              <button
                className="uppercase text-sm tracking-wider py-3 px-6 bg-[#991b1b] text-white hover:bg-[#A52A2A] transition-colors duration-300"
                onClick={() => handleRoomClick(room.id)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
