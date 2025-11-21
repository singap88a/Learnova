import React, { useState } from 'react';
import { Mail, Send, Sparkles, Shield, Bell } from 'lucide-react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      // Here you would typically send the email to your backend
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute rounded-full -top-40 -right-32 w-80 h-80 bg-gradient-to-r from-blue-500 to-purple-600 blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute delay-1000 rounded-full -bottom-40 -left-32 w-80 h-80 bg-gradient-to-r from-cyan-500 to-blue-600 blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute delay-500 transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-pink-500 to-rose-600 blur-3xl opacity-10 animate-pulse"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="container relative px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="mb-16 text-center" data-aos="fade-up">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 rounded-full opacity-75 bg-gradient-to-r from-blue-400 to-purple-500 blur-lg animate-pulse"></div>
              <div className="relative p-4 shadow-2xl bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl">
                <Mail className="text-white" size={48} />
              </div>
              <Sparkles className="absolute text-yellow-400 -top-2 -right-2 animate-spin" size={24} />
            </div>
            
            <h2 className="mb-6 text-5xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-white to-blue-200 bg-clip-text">
              Stay In The Loop
            </h2>
            
            <p className="max-w-2xl mx-auto mb-4 text-xl leading-relaxed text-gray-300">
              Join thousands of learners and get exclusive access to premium courses, 
              expert insights, and career-boosting opportunities
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-3" data-aos="fade-up" data-aos-delay="200">
            {[
              { icon: Bell, text: "Weekly course updates" },
              { icon: Shield, text: "No spam, guaranteed" },
              { icon: Send, text: "Instant notifications" }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center gap-3 p-4 border bg-white/5 rounded-xl backdrop-blur-sm border-white/10">
                <item.icon className="text-blue-400" size={20} />
                <span className="text-sm font-medium text-gray-300">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Subscription Form */}
          <div className="max-w-2xl mx-auto" data-aos="zoom-in" data-aos-delay="400">
            {isSubscribed ? (
              <div className="p-8 text-center border bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl backdrop-blur-sm border-green-500/30">
                <div className="inline-flex items-center gap-3 mb-4 text-green-400">
                  <Send className="animate-bounce" size={32} />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white">Welcome Aboard! 🎉</h3>
                <p className="text-gray-300">Check your inbox for a confirmation email</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative">
                <div className="absolute inset-0 opacity-50 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-lg"></div>
                <div className="relative p-1 border shadow-2xl bg-slate-900/90 backdrop-blur-xl rounded-2xl border-white/10">
                  <div className="flex flex-col gap-2 p-2 sm:flex-row">
                    <div className="flex-1">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your professional email"
                        className="w-full px-6 py-4 text-white placeholder-gray-400 transition-all duration-300 border bg-slate-800/50 border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 min-w-[160px]"
                    >
                      <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-r from-blue-600 to-purple-700 group-hover:opacity-100"></div>
                      <span className="relative flex items-center justify-center gap-2">
                        Subscribe
                        <Send className="transition-transform duration-300 group-hover:translate-x-1" size={18} />
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Trust Badges */}
          <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="600">
            <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-green-400" />
                <span className="text-sm">100% Secure & Private</span>
              </div>
              <div className="w-px h-4 bg-gray-600"></div>
              <div className="flex items-center gap-2">
                <Bell size={16} className="text-blue-400" />
                <span className="text-sm">One-click Unsubscribe</span>
              </div>
              <div className="w-px h-4 bg-gray-600"></div>
              <div className="flex items-center gap-2">
                <Send size={16} className="text-purple-400" />
                <span className="text-sm">Quality Content Only</span>
              </div>
            </div>
            
            <p className="max-w-md mx-auto mt-6 text-sm text-gray-500">
              Join 50,000+ professionals who trust us with their learning journey. 
              We never share your data with third parties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;