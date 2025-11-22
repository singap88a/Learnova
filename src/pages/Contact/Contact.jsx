import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane, FaUser, FaEnvelopeOpen, FaComment } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    
    // Show success message (you can replace this with a toast notification)
    alert('Message sent successfully! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section with Background Image */}
      <section className="relative py-20 overflow-hidden bg-gray-900">
        <div 
          className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-40"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
        
        <div className="relative px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-6 text-5xl font-bold text-white">Get In Touch</h1>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-200">
            We're here to help and answer any questions you might have. 
            We look forward to hearing from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Contact Information */}
            <div className="space-y-6 lg:col-span-1">
              <div className="p-8 bg-white shadow-lg rounded-2xl">
                <h2 className="flex items-center mb-6 text-2xl font-bold text-gray-900">
                  <FaComment className="mr-3 text-indigo-600" />
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 bg-indigo-100 rounded-xl">
                      <FaMapMarkerAlt className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-semibold text-gray-900">Our Location</h3>
                      <p className="text-gray-600">
                        123 Education Street<br />
                        Learning City, LC 12345<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 bg-indigo-100 rounded-xl">
                      <FaPhone className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-semibold text-gray-900">Phone Number</h3>
                      <p className="text-gray-600">(555) 123-4567</p>
                      <p className="mt-1 text-sm text-gray-600">Mon-Fri from 8am to 6pm</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 bg-indigo-100 rounded-xl">
                      <FaEnvelope className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-semibold text-gray-900">Email Address</h3>
                      <p className="text-gray-600">info@knowledgeacademy.com</p>
                      <p className="text-gray-600">support@knowledgeacademy.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-4 bg-indigo-100 rounded-xl">
                      <FaClock className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-semibold text-gray-900">Working Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 - 18:00<br />
                        Saturday: 9:00 - 16:00<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="p-8 bg-white shadow-lg rounded-2xl">
                <h2 className="flex items-center mb-6 text-2xl font-bold text-gray-900">
                  <FaEnvelopeOpen className="mr-3 text-indigo-600" />
                  Quick Answers
                </h2>
                
                <div className="space-y-6">
                  <div className="pl-4 border-l-4 border-indigo-500">
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      How do I enroll in a course?
                    </h3>
                    <p className="text-sm text-gray-600">
                      Simply browse our courses, select the one you're interested in, 
                      and click "Enroll Now" to get started.
                    </p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-indigo-500">
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      Do you offer refunds?
                    </h3>
                    <p className="text-sm text-gray-600">
                      Yes, we offer a 30-day money-back guarantee on all our courses 
                      if you're not satisfied with your learning experience.
                    </p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-indigo-500">
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      How long do I have access to course materials?
                    </h3>
                    <p className="text-sm text-gray-600">
                      You have lifetime access to all course materials, including 
                      future updates, once you enroll.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form & Map */}
            <div className="space-y-8 lg:col-span-2">
              {/* Contact Form */}
              <div className="p-8 bg-white shadow-lg rounded-2xl">
                <div className="flex items-center mb-2">
                  <div className="flex items-center justify-center w-12 h-12 mr-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl">
                    <FaPaperPlane className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
                    <p className="text-gray-600">We typically respond within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="mt-8">
                  <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
                    <div className="relative">
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <FaUser className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="block w-full py-3 pl-10 pr-4 transition duration-200 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="relative">
                      <label className="block mb-2 text-sm font-medium text-gray-700">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <FaEnvelope className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="block w-full py-3 pl-10 pr-4 transition duration-200 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="block w-full px-4 py-3 transition duration-200 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>
                  
                  <div className="mb-8">
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="block w-full px-4 py-3 transition duration-200 border border-gray-300 resize-none rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Tell us how we can help you..."
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition duration-200 flex items-center justify-center ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 mr-3 border-b-2 border-white rounded-full animate-spin"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="mr-3" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Map Section */}
              <div className="overflow-hidden bg-white shadow-lg rounded-2xl">
                <div className="p-6 border-b border-gray-200">
                  <h2 className="flex items-center text-xl font-bold text-gray-900">
                    <FaMapMarkerAlt className="mr-3 text-indigo-600" />
                    Find Us Here
                  </h2>
                </div>
                
                <div className="relative bg-gray-200 h-72">
                  {/* Placeholder for Map - You can integrate Google Maps or any other map service */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500">
                    <div className="p-8 text-center text-white">
                      <FaMapMarkerAlt className="w-16 h-16 mx-auto mb-4 text-white opacity-80" />
                      <h3 className="mb-2 text-2xl font-bold">Interactive Map</h3>
                      <p className="text-lg opacity-90">
                        123 Education Street, Learning City
                      </p>
                      <p className="mt-2 text-sm opacity-80">
                        (Map integration placeholder)
                      </p>
                    </div>
                  </div>
                  
 
                </div>
                
 
              </div>
            </div>
          </div>
        </div>
      </section>

 
    </div>
  );
};

export default Contact;