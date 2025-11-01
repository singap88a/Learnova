import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I enroll in a course?',
      answer: 'To enroll in a course, simply click on the "Enroll Now" button on the course page. You will be redirected to our secure payment gateway to complete your enrollment.'
    },
    {
      question: 'Do I get a certificate upon completion?',
      answer: 'Yes, upon successful completion of a course, you will receive a digital certificate that you can download and share on your professional profiles.'
    },
    {
      question: 'Can I access the courses on mobile devices?',
      answer: 'Absolutely! Our platform is fully responsive and optimized for mobile devices. You can access all course materials on your smartphone or tablet.'
    },
    {
      question: 'What if I need help during the course?',
      answer: 'We provide comprehensive support through our community forums, live Q&A sessions, and direct messaging with instructors. You are never alone in your learning journey.'
    },
    {
      question: 'Is there a refund policy?',
      answer: 'Yes, we offer a 30-day money-back guarantee. If you are not satisfied with your course, you can request a full refund within 30 days of enrollment.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-textPrimary">
            Frequently Asked Questions
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-textSecondary">
            Find answers to common questions about our platform and courses.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-lg shadow-md bg-secondary">
              <button
                className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-textPrimary">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-primary transform transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-textSecondary">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
