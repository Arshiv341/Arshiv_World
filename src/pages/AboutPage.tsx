import React from 'react';
import Layout from '../components/Layout';
import { Building, Users, Award, Target } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <div className="p-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Building className="w-8 h-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">About Arshiv World</h1>
          </div>
          <p className="text-gray-600 text-lg">
            Learn more about our company, mission, and the team behind Arshiv World.
          </p>
        </div>

        {/* Content Placeholder */}
        <div className="bg-white rounded-xl shadow-lg p-10">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About Page Structure Ready</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              This page structure is prepared for your detailed content about Arshiv World. 
              You can add comprehensive information about the company, team, history, and achievements here.
            </p>
          </div>

          {/* Content Sections Placeholder */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Building className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Company History</h3>
              <p className="text-gray-600 text-sm">
                Add detailed information about company founding, growth, and milestones.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Users className="w-8 h-8 text-teal-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Our Team</h3>
              <p className="text-gray-600 text-sm">
                Introduce key team members, leadership, and their expertise.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Award className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Achievements</h3>
              <p className="text-gray-600 text-sm">
                Highlight company achievements, awards, and recognition.
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Target className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Our Values</h3>
              <p className="text-gray-600 text-sm">
                Describe company values, culture, and commitment to excellence.
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Content Sections to Add:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Detailed company introduction and background</li>
              <li>• Founder and leadership team profiles</li>
              <li>• Company timeline and key milestones</li>
              <li>• Mission, vision, and core values</li>
              <li>• Awards, certifications, and recognition</li>
              <li>• Company culture and work environment</li>
              <li>• Corporate social responsibility initiatives</li>
              <li>• Future goals and expansion plans</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;