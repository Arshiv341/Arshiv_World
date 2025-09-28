import React from 'react';
import Layout from '../components/Layout';
import { MessageSquare, Phone, Mail, Clock, Circle as HelpCircle, FileText, Users, Headphones } from 'lucide-react';

const SupportPage: React.FC = () => {
  return (
    <Layout>
      <div className="p-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Headphones className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Support & Help Center</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Get the help you need. Our support team is here to assist you with any questions or concerns.
          </p>
        </div>

        {/* Support Content Structure */}
        <div className="space-y-8">
          {/* Contact Methods */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Speak directly with our support team
                </p>
                <p className="font-medium text-blue-600">+1 (555) 123-4567</p>
                <p className="text-gray-500 text-sm">Mon-Fri, 9AM-6PM</p>
              </div>

              <div className="text-center p-6 bg-green-50 rounded-lg">
                <Mail className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Send us your questions and concerns
                </p>
                <p className="font-medium text-green-600">support@arshivworld.com</p>
                <p className="text-gray-500 text-sm">Response within 24 hours</p>
              </div>

              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <MessageSquare className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Chat with us in real-time
                </p>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Start Chat
                </button>
                <p className="text-gray-500 text-sm mt-2">Available 24/7</p>
              </div>
            </div>
          </div>

          {/* Support Categories */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Support Categories</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border rounded-lg hover:border-blue-300 transition-colors">
                <HelpCircle className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">General Help</h3>
                <p className="text-gray-600 text-sm">
                  Account questions, basic navigation, and general platform assistance.
                </p>
              </div>

              <div className="p-6 border rounded-lg hover:border-teal-300 transition-colors">
                <Users className="w-8 h-8 text-teal-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Mentorship Support</h3>
                <p className="text-gray-600 text-sm">
                  Questions about mentorship programs, matching, and session scheduling.
                </p>
              </div>

              <div className="p-6 border rounded-lg hover:border-orange-300 transition-colors">
                <FileText className="w-8 h-8 text-orange-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Career Guidance</h3>
                <p className="text-gray-600 text-sm">
                  Help with career planning, resume review, and interview preparation services.
                </p>
              </div>

              <div className="p-6 border rounded-lg hover:border-green-300 transition-colors">
                <Clock className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Technical Issues</h3>
                <p className="text-gray-600 text-sm">
                  Platform bugs, login issues, and technical troubleshooting.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section Placeholder */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">How do I schedule a mentorship session?</h3>
                <p className="text-gray-600 text-sm">
                  [Detailed answer to be added about scheduling process]
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">What career services do you offer?</h3>
                <p className="text-gray-600 text-sm">
                  [Detailed answer to be added about available career services]
                </p>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">How can I update my profile information?</h3>
                <p className="text-gray-600 text-sm">
                  [Step-by-step instructions to be added for profile updates]
                </p>
              </div>
            </div>
          </div>

          {/* Resources Section Placeholder */}
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Support Resources</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <FileText className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">User Guide</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Comprehensive guide to using all platform features
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  Download Guide
                </button>
              </div>

              <div className="text-center">
                <MessageSquare className="w-12 h-12 text-teal-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Video Tutorials</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Step-by-step video guides for common tasks
                </p>
                <button className="text-teal-600 hover:text-teal-700 font-medium">
                  Watch Videos
                </button>
              </div>

              <div className="text-center">
                <Users className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Community Forum</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Connect with other users and share experiences
                </p>
                <button className="text-orange-600 hover:text-orange-700 font-medium">
                  Join Community
                </button>
              </div>
            </div>
          </div>

          {/* Content Areas to Develop */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Support Content to Add:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Detailed FAQ section with comprehensive answers</li>
              <li>• Step-by-step user guides and tutorials</li>
              <li>• Troubleshooting guides for common issues</li>
              <li>• Contact form for submitting support tickets</li>
              <li>• Knowledge base with searchable articles</li>
              <li>• Video tutorials and demonstrations</li>
              <li>• Community forum integration</li>
              <li>• Support ticket tracking system</li>
              <li>• Service status and maintenance updates</li>
              <li>• Feedback and suggestion submission form</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SupportPage;