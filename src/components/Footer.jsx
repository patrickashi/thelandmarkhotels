import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#991b1b] text-white pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold">The Landmark Hotel</h3>
            <p className="mt-2">Luxury redefined</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
            <a href="#" className="hover:text-gray-300">Contact Us</a>
          </div>
        </div>

      </div>
        <div className="mt-8 bg-black text-center py-4 text-xs">
          <p>&copy; 2024 The Landmark Hotel. All rights reserved.</p>
        </div>
    </footer>
  );
}

export default Footer;

