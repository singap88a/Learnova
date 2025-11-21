import React, { useState } from 'react';
import { HelpCircle, BookOpen, Smartphone, MessageCircle, Award, RefreshCw } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I enroll in a course?',
      answer: 'To enroll in a course, simply click on the "Enroll Now" button on the course page. You will be redirected to our secure payment gateway to complete your enrollment.',
      icon: BookOpen
    },
    {
      question: 'Do I get a certificate upon completion?',
      answer: 'Yes, upon successful completion of a course, you will receive a digital certificate that you can download and share on your professional profiles.',
      icon: Award
    },
    {
      question: 'Can I access the courses on mobile devices?',
      answer: 'Absolutely! Our platform is fully responsive and optimized for mobile devices. You can access all course materials on your smartphone or tablet.',
      icon: Smartphone
    },
    {
      question: 'What if I need help during the course?',
      answer: 'We provide comprehensive support through our community forums, live Q&A sessions, and direct messaging with instructors. You are never alone in your learning journey.',
      icon: MessageCircle
    },
    {
      question: 'Is there a refund policy?',
      answer: 'Yes, we offer a 30-day money-back guarantee. If you are not satisfied with your course, you can request a full refund within 30 days of enrollment.',
      icon: RefreshCw
    },
    {
      question: 'How long do I have access to the courses?',
      answer: 'You get lifetime access to all enrolled courses. This includes all future updates and additional content added to the course.',
      icon: HelpCircle
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Split FAQs into two columns for larger screens
  const leftColumnFaqs = faqs.slice(0, 3);
  const rightColumnFaqs = faqs.slice(3, 6);

  return (
    <section className="relative py-20 overflow-hidden ">
 

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-16 text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 bg-white border border-blue-100 rounded-full shadow-lg">
            <HelpCircle className="text-blue-600" size={24} />
            <span className="text-lg font-semibold text-blue-600">FAQ</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-slate-800 to-blue-600 bg-clip-text">
            Frequently Asked Questions
          </h2>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-slate-600">
            Everything you need to know about our platform and courses. 
            Can't find the answer you're looking for? Contact our support team.
          </p>
        </div>

        {/* FAQ Grid - Two Columns on Large Screens */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2" data-aos="fade-up" data-aos-delay="200">
          {/* Left Column */}
          <div className="space-y-6">
            {leftColumnFaqs.map((faq, index) => (
              <div 
                key={index}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 overflow-hidden ${
                  openIndex === index ? 'ring-2 ring-blue-500 shadow-xl' : ''
                }`}
              >
                <button
                  className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center flex-1 gap-4">
                      <div className="flex-shrink-0">
                        <div className="p-3 transition-colors duration-300 bg-blue-50 rounded-xl group-hover:bg-blue-100">
                          <faq.icon className="text-blue-600" size={20} />
                        </div>
                      </div>
                      <h3 className="pr-8 text-lg font-semibold transition-colors duration-300 text-slate-800 group-hover:text-blue-600">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0">
                      <div className={`p-2 bg-slate-100 rounded-lg transition-all duration-300 group-hover:bg-blue-100 ${
                        openIndex === index ? 'bg-blue-100 rotate-180' : ''
                      }`}>
                        <svg
                          className={`w-4 h-4 text-slate-600 transition-transform duration-300 ${
                            openIndex === index ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="pl-16">
                      <div className="w-12 h-1 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                      <p className="leading-relaxed text-slate-600">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {rightColumnFaqs.map((faq, index) => (
              <div 
                key={index + 3}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 overflow-hidden ${
                  openIndex === index + 3 ? 'ring-2 ring-blue-500 shadow-xl' : ''
                }`}
              >
                <button
                  className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl"
                  onClick={() => toggleFAQ(index + 3)}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center flex-1 gap-4">
                      <div className="flex-shrink-0">
                        <div className="p-3 transition-colors duration-300 bg-blue-50 rounded-xl group-hover:bg-blue-100">
                          <faq.icon className="text-blue-600" size={20} />
                        </div>
                      </div>
                      <h3 className="pr-8 text-lg font-semibold transition-colors duration-300 text-slate-800 group-hover:text-blue-600">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="flex-shrink-0">
                      <div className={`p-2 bg-slate-100 rounded-lg transition-all duration-300 group-hover:bg-blue-100 ${
                        openIndex === index + 3 ? 'bg-blue-100 rotate-180' : ''
                      }`}>
                        <svg
                          className={`w-4 h-4 text-slate-600 transition-transform duration-300 ${
                            openIndex === index + 3 ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>
                {openIndex === index + 3 && (
                  <div className="px-6 pb-6 animate-fadeIn">
                    <div className="pl-16">
                      <div className="w-12 h-1 mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                      <p className="leading-relaxed text-slate-600">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

 
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default FAQSection;