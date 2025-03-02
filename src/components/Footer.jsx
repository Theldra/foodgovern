import React from 'react';
import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import allfoodlogo from "../assets/images/alliancelogo.png"

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <img
                src={allfoodlogo}
                alt="Alliance for Food Security Logo"
                className="h-24 w-auto bg-white/5 rounded-md p-1"
              />
            </div>
            <p className="text-white">
              Supporting food security and good governance in Ghana through sustainable school feeding programs.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-white hover:text-red-300">About Us</Link></li>
              <li><Link to="/programs" className="text-white hover:text-red-300">Our Programs</Link></li>
              <li><Link to="/impact" className="text-white hover:text-red-300">Our Impact</Link></li>
              <li><Link to="/contact" className="text-white hover:text-red-300">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <FaEnvelope size={16} />
                <a 
                  href="mailto:Foodandgoodgov.1@gmail.com"
                  className="hover:text-red-300 transition-colors"
                >
                  Foodandgoodgov.1@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <FaPhoneAlt size={16} />
                <a 
                  href="tel:+233244047325"
                  className="hover:text-red-300 transition-colors"
                >
                  +233 244047325
                </a>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <FaMapMarkerAlt size={16} />
                <a 
                  href="https://maps.google.com/?q=Accra,Ghana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-300 transition-colors"
                >
                  Accra, Ghana
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="hover:text-red-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-red-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-red-300">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/80">
            © {new Date().getFullYear()} Alliance for Food Security and Good Governance. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;