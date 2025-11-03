import React from 'react'
import { Award, TrendingUp,  Clock, } from 'lucide-react';
import AnalysisPic from "../../assets/Analysis.jpg"
const AnalysisSection = () => {
  return (
    <section className='overflow-hidden'>
     <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <img 
              src={AnalysisPic} 
              alt="Analytics Dashboard"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          
          <div data-aos="fade-left">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Track Your Progress with Advanced Analytics
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Monitor your learning journey with detailed analytics and insights. See your progress, identify areas for improvement, and celebrate your achievements.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <TrendingUp className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Performance Tracking</h3>
                  <p className="text-gray-600">Real-time insights into your learning progress and quiz scores</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Clock className="text-purple-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Time Management</h3>
                  <p className="text-gray-600">Track your study time and optimize your learning schedule</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Award className="text-orange-600" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Achievement Badges</h3>
                  <p className="text-gray-600">Earn badges and certificates as you complete milestones</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
    </section>
  )
}

export default AnalysisSection
