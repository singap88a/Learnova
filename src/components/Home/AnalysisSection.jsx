import React from 'react';
import { TrendingUp, Clock, Award } from 'lucide-react';

const AnalysisSection = () => {
  return (
    <div className="px-20 py-20">
      <div className="container px-4 mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div data-aos="fade-right">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
              alt="Analytics Dashboard"
              className="shadow-2xl rounded-2xl"
            />
          </div>

          <div data-aos="fade-left">
            <h2 className="mb-6 text-4xl font-bold text-gray-900">
              Track Your Progress with Advanced Analytics
            </h2>
            <p className="mb-8 text-lg text-gray-600">
              Monitor your learning journey with detailed analytics and insights. See your progress, identify areas for improvement, and celebrate your achievements.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <TrendingUp className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-gray-900">Performance Tracking</h3>
                  <p className="text-gray-600">Real-time insights into your learning progress and quiz scores</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Clock className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-gray-900">Time Management</h3>
                  <p className="text-gray-600">Track your study time and optimize your learning schedule</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <Award className="text-orange-600" size={24} />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-gray-900">Achievement Badges</h3>
                  <p className="text-gray-600">Earn badges and certificates as you complete milestones</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisSection;
