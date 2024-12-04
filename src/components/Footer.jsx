import React from 'react'
import { Link } from 'react-router-dom'
import herobg1 from "../images/herobg1.jpg";
import herobg2 from "../images/herobg2.jpg";

const galleryImages = [
  herobg1,
  herobg2,
  herobg1,
  herobg2,
  herobg1,
  herobg2
]

const footerLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Rooms', path: '/rooms' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' }
]

export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
  }

  return (
    <footer className="bg-[#8B0000] text-white">
      <div className="container mx-auto px-4 py-6 text-xs">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Newsletter Section */}
          <div>
            <h3 className="text-xs mb-4">NEWSLETTER</h3>
            <p className="mb-4">Subscribe to our Newsletter.</p>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full px-4 py-2 mb-3 text-black"
                required
              />
              <button
                type="submit"
                className="w-full bg-black text-white px-4 py-2 hover:bg-gray-900 transition-colors duration-300"
              >
                SUBSCRIBE NOW
              </button>
            </form>
          </div>

          {/* Useful Links Section */}
          <div>
            <h3 className="text-xsf mb-4">USEFUL LINKS</h3>
            <nav className="flex flex-col space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="hover:text-gray-300 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>


          {/* Gallery Section */}
          <div>
            <h3 className="text-xs mb-4">GALLERY</h3>
            <div className="grid grid-cols-3 gap-2">
              {galleryImages.map((image, index) => (
                <div key={index} className="aspect-square overflow-hidden">
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-40 h-40 object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="border-t border-white/10 bg-black">
        <div className="container mx-auto px-4 py-4">
          <p className="text-xs text-center">
            © 2024, The Landmark Hotels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

