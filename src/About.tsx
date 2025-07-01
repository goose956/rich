import { ArrowRight, Users, CheckCircle, Target, Heart, Zap } from 'lucide-react';

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
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
              <a href="#" className="text-blue-600 font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About facebook automation poster
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Elevate your social media strategy with the Facebook Automation Poster, a cutting-edge tool designed to optimize your presence in Facebook groups. Effortlessly identify the most active groups and engage directly with top contributors through automated posts. Integrating AI technology, this solution ensures your content resonates with and captivates your target audience, driving unparalleled engagement and growth.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Revolutionize Your Engagement with Facebook Automation Poster</h2>
              <p className="text-lg text-gray-600 mb-6">
                Elevate your social media strategy with the Facebook Automation Poster, a cutting-edge tool designed to optimize your presence in Facebook groups. Effortlessly identify the most active groups and engage directly with top contributors through automated posts. Integrating AI technology, this solution ensures your content resonates with and captivates your target audience, driving unparalleled engagement and growth.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Elevate your social media strategy with the Facebook Automation Poster, a cutting-edge tool designed to optimize your presence in Facebook groups. Effortlessly identify the most active groups and engage directly with top contributors through automated posts. Integrating AI technology, this solution ensures your content resonates with and captivates your target audience, driving unparalleled engagement and growth.
              </p>
              <div className="flex space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50+</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-2xl">
                  <Target className="w-8 h-8 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Focused</h3>
                  <p className="text-gray-600 text-sm">Laser-focused on delivering results that matter to your business.</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-2xl">
                  <CheckCircle className="w-8 h-8 text-purple-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Excellence</h3>
                  <p className="text-gray-600 text-sm">Committed to excellence in every project we undertake.</p>
                </div>
              </div>
              <div className="space-y-6 mt-8">
                <div className="bg-green-50 p-6 rounded-2xl">
                  <Users className="w-8 h-8 text-green-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Collaborative</h3>
                  <p className="text-gray-600 text-sm">Working closely with you every step of the way.</p>
                </div>
                <div className="bg-pink-50 p-6 rounded-2xl">
                  <Heart className="w-8 h-8 text-pink-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Passionate</h3>
                  <p className="text-gray-600 text-sm">Passionate about creating solutions that make a difference.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section with AI Content */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose facebook automation poster?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover what makes us different
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Automated Group Scraping</h3>
              <p className="text-gray-600">
                Experience the power of automated group scraping designed specifically for your success.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Targeted Auto-Posting</h3>
              <p className="text-gray-600">
                Experience the power of targeted auto-posting designed specifically for your success.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Multi-Group Posting Capability</h3>
              <p className="text-gray-600">
                Experience the power of multi-group posting capability designed specifically for your success.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered Content Optimization</h3>
              <p className="text-gray-600">
                Experience the power of ai-powered content optimization designed specifically for your success.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">User-Friendly Interface</h3>
              <p className="text-gray-600">
                Experience the power of user-friendly interface designed specifically for your success.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Performance Analytics</h3>
              <p className="text-gray-600">
                Experience the power of performance analytics designed specifically for your success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section with AI Content */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real testimonials from satisfied customers
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">S</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Thompson</div>
                  <div className="text-gray-600 text-sm">Social Media Strategist at DigiWave</div>
                </div>
              </div>
              <p className="text-gray-700 italic">"The Facebook Automation Poster has transformed our social media approach. In just weeks, our client engagement increased by 40%, allowing us to focus on strategic growth rather than repetitive tasks."</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">J</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">James Lee</div>
                  <div className="text-gray-600 text-sm">Marketing Manager at GreenTech Innovations</div>
                </div>
              </div>
              <p className="text-gray-700 italic">"Our community presence has never been stronger. The AI-powered content optimization ensures our posts are always relevant and engaging, leading to a 50% rise in group interactions."</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-semibold">E</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Emily Rogers</div>
                  <div className="text-gray-600 text-sm">Freelance Digital Marketer</div>
                </div>
              </div>
              <p className="text-gray-700 italic">"As a one-person team, managing multiple groups was daunting. This tool has streamlined my workflow, saving me 10 hours a week while boosting my client reach significantly."</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your goals and transform your business.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold flex items-center justify-center mx-auto">
            Get In Touch
            <ArrowRight className="w-5 h-5 ml-2" />
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