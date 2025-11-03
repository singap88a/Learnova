import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
  <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div data-aos="fade-up">
            <h3 className="text-2xl font-bold text-white mb-4">Learnova</h3>
            <p className="mb-6">Empowering learners worldwide with quality education and expert-led courses.</p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Courses</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Instructors</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Become an Instructor</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div data-aos="fade-up" data-aos-delay="300">
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                <span>123 Learning Street, Education City, EC 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-blue-400 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-blue-400 flex-shrink-0" />
                <span>info@learnhub.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p>&copy; 2024 LearnHub. All rights reserved. Made with ❤️ for learners worldwide.</p>
        </div>
      </div>
    </footer>  );
};

export default Footer;
