import { ArrowRight, CheckCircle, Zap, Users, Sparkles } from 'lucide-react';

export default function Homepage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">facebook automation poster</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-blue-600 font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8">
              <CheckCircle className="w-4 h-4 mr-2" />
              Welcome to facebook automation poster
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Revolutionize Your Engagement with Facebook Automation Poster
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Elevate your social media strategy with the Facebook Automation Poster, a cutting-edge tool designed to optimize your presence in Facebook groups. Effortlessly identify the most active groups and engage directly with top contributors through automated posts. Integrating AI technology, this solution ensures your content resonates with and captivates your target audience, driving unparalleled engagement and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose facebook automation poster?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the features that make us the perfect choice for your needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Automated Group Scraping</h3>
              <p className="text-gray-600">
                Experience the best-in-class automated group scraping designed to exceed your expectations.
              </p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Targeted Auto-Posting</h3>
              <p className="text-gray-600">
                Experience the best-in-class targeted auto-posting designed to exceed your expectations.
              </p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-Group Posting Capability</h3>
              <p className="text-gray-600">
                Experience the best-in-class multi-group posting capability designed to exceed your expectations.
              </p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered Content Optimization</h3>
              <p className="text-gray-600">
                Experience the best-in-class ai-powered content optimization designed to exceed your expectations.
              </p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">User-Friendly Interface</h3>
              <p className="text-gray-600">
                Experience the best-in-class user-friendly interface designed to exceed your expectations.
              </p>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Analytics</h3>
              <p className="text-gray-600">
                Experience the best-in-class performance analytics designed to exceed your expectations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real results from real customers</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Sarah Thompson</h4>
                  <p className="text-gray-600 text-sm">Social Media Strategist at DigiWave</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"The Facebook Automation Poster has transformed our social media approach. In just weeks, our client engagement increased by 40%, allowing us to focus on strategic growth rather than repetitive tasks."</p>
              <div className="flex mt-4">
                <CheckCircle className="w-4 h-4 text-yellow-400 fill-current" /><CheckCircle className="w-4 h-4 text-yellow-400 fill-current" /><CheckCircle className="w-4 h-4 text-yellow-400 fill-current" /><CheckCircle className="w-4 h-4 text-yellow-400 fill-current" /><CheckCircle className="w-4 h-4 text-yellow-400 fill-current" />
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">James Lee</h4>
                  <p className="text-gray-600 text-sm">Marketing Manager at GreenTech Innovations</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"Our community presence has never been stronger. The AI-powered content optimization ensures our posts are always relevant and engaging, leading to a 50% rise in group interactions."</p>
              <div className="flex mt-4">
                <CheckCircle className="w-4 h-4 text-yellow-400 fill-current" /><CheckCircle className="w-4 h-4 text-yellow-400 fill-current" /><CheckCircle className="w-4 h-4 text-yellow-400 fill-current" /><CheckCircle className="w-4 h-4 text-yellow-400 fill-current" /><CheckCircle className="w-4 h-4 text-yellow-400 fill-current" />
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Emily Rogers</h4>
                  <p className="text-gray-600 text-sm">Freelance Digital Marketer</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"As a one-person team, managing multiple groups was daunting. This tool has streamlined my workflow, saving me 10 hours a week while boosting my client reach significantly."</p>
              <div className="flex mt-4">
                <CheckCircle className="w-4 h-4 text-yellow-400 fill-current" /><CheckCircle className="w-4 h-4 text-yellow-400 fill-current" /><CheckCircle className="w-4 h-4 text-yellow-400 fill-current" /><CheckCircle className="w-4 h-4 text-yellow-400 fill-current" /><CheckCircle className="w-4 h-4 text-yellow-400 fill-current" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their business with facebook automation poster.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold flex items-center justify-center mx-auto">
            Start Your Journey
            <Sparkles className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">facebook automation poster</span>
              </div>
              <p className="text-gray-400 mb-4">Elevate your social media strategy with the Facebook Automation Poster, a cutting-edge tool designed to optimize your presence in Facebook groups. Effortlessly identify the most active groups and engage directly with top contributors through automated posts. Integrating AI technology, this solution ensures your content resonates with and captivates your target audience, driving unparalleled engagement and growth.</p>
              <div className="space-y-2">
                <p className="text-gray-400">Email: hello@example.com</p>
                <p className="text-gray-400">Phone: (555) 123-4567</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Our Team</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 facebook automation poster. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}