import React from 'react';

function Contact() {
  return (
    <div className="pt-40 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="mb-4">Get in touch with The Landmark Hotel</p>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name</label>
          <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded" required />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded" required />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">Message</label>
          <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border rounded" required></textarea>
        </div>
        <button type="submit" className="bg-[#991b1b] text-white px-6 py-3 text-xs transition duration-300">
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
}

export default Contact;

