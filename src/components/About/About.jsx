import React from 'react';

const About = () => {
  const stats = [
    { number: '50,000+', label: 'Students Enrolled' },
    { number: '200+', label: 'Expert Instructors' },
    { number: '500+', label: 'Courses Available' },
    { number: '95%', label: 'Student Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-secondary">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About Knowledge Academy</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Empowering learners worldwide with quality education and innovative courses.
            Join our community and start your journey towards success.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-textPrimary mb-6">Our Mission</h2>
              <p className="text-textSecondary text-lg leading-relaxed mb-6">
                Knowledge Academy is a leading online learning platform dedicated to empowering individuals
                with the skills and knowledge they need to succeed in today's fast-paced world. Our mission
                is to make quality education accessible to everyone, regardless of their location or background.
              </p>
              <p className="text-textSecondary text-lg leading-relaxed">
                We believe that education should be flexible, affordable, and tailored to individual learning
                styles. That's why we've created a platform that combines expert instruction, interactive
                learning experiences, and practical projects to ensure our students gain real-world skills.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-textPrimary mb-4">What Sets Us Apart</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-textSecondary">Industry-leading curriculum designed by experts</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-textSecondary">Lifetime access to course materials</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-textSecondary">Interactive learning with hands-on projects</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-primary mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-textSecondary">Personalized learning paths and mentorship</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-textSecondary">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-textPrimary mb-4">Our Values</h2>
            <p className="text-textSecondary max-w-2xl mx-auto">
              The principles that guide everything we do at Knowledge Academy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-textPrimary mb-2">Innovation</h3>
              <p className="text-textSecondary">We continuously innovate our teaching methods and technology to provide the best learning experience.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-textPrimary mb-2">Community</h3>
              <p className="text-textSecondary">We foster a supportive learning community where students can connect, collaborate, and grow together.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-textPrimary mb-2">Excellence</h3>
              <p className="text-textSecondary">We are committed to delivering excellence in education through rigorous standards and continuous improvement.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
