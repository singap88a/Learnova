import React from 'react'
import { BookOpen, Users, Award, TrendingUp, Star, Clock, Video, ChevronRight, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Play } from 'lucide-react';

const NewsLetter = () => {
  return (
    <>
      <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center" data-aos="zoom-in">
          <Mail className="mx-auto mb-6 text-white" size={64} />
          <h2 className="text-4xl font-bold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest courses, updates, and special offers delivered to your inbox
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
              Subscribe
            </button>
          </div>
          
          <p className="text-sm text-blue-100 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default NewsLetter
