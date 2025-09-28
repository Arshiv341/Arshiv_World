import React from 'react';
import Layout from '../components/Layout';
import { Building, Target, Users, Award, BookOpen, Heart, MessageSquare, Star, ArrowRight, CircleCheck as CheckCircle } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <div className="p-8 space-y-12">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-12 text-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">Welcome to Arshiv World</h1>
            <p className="text-xl opacity-90 mb-8">
              Your trusted partner in career development, mentorship, and personal growth. 
              We empower individuals to achieve their professional goals through comprehensive guidance and support.
            </p>
            <div className="flex items-center">
              <div className="bg-white/20 p-2 rounded-full mr-4">
                <Building className="w-6 h-6" />
              </div>
              <span className="text-lg">Transforming careers, one success story at a time</span>
            </div>
          </div>
        </section>

        {/* Company Introduction */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Arshiv World</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Arshiv World is a leading professional development company dedicated to bridging the gap between 
              academic knowledge and industry requirements. Founded with the vision of creating successful 
              professionals, we specialize in mentorship, career guidance, and comprehensive counseling services.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our team of industry experts, career counselors, and mentors work collaboratively to provide 
              personalized solutions that align with individual career aspirations and market demands.
            </p>
          </div>
          <div className="bg-gray-100 rounded-xl p-8 text-center">
            <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Building className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Excellence</h3>
            <p className="text-gray-600">
              Dedicated to fostering professional growth and career advancement through expert guidance and mentorship.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-white rounded-xl shadow-lg p-10">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To empower individuals with the knowledge, skills, and confidence needed to excel in their chosen 
                careers. We strive to create meaningful connections between mentors and mentees, fostering an 
                environment of continuous learning and professional development.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-teal-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become the global leader in career development and mentorship services, creating a world where 
                every individual has access to quality guidance and support to achieve their professional aspirations 
                and contribute meaningfully to society.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mentorship */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mentorship Programs</h3>
              <p className="text-gray-600 mb-6">
                Connect with industry experts and experienced professionals who provide personalized guidance, 
                share insights, and help you navigate your career path effectively.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  One-on-one mentoring sessions
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Industry-specific guidance
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Goal-oriented development plans
                </li>
              </ul>
            </div>

            {/* Career Guidance */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Career Guidance</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive career planning services including skill assessment, career mapping, interview 
                preparation, and strategic career development planning.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Career assessment tools
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Resume and portfolio optimization
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Interview preparation coaching
                </li>
              </ul>
            </div>

            {/* Counseling */}
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibent text-gray-900 mb-4">Professional Counseling</h3>
              <p className="text-gray-600 mb-6">
                Professional counseling services focusing on career transitions, workplace challenges, 
                personal development, and achieving work-life balance.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Career transition support
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Workplace stress management
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Personal development coaching
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl p-10">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How Students & Professionals Benefit</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Clear Career Direction</h3>
              <p className="text-gray-600 text-sm">
                Gain clarity on career goals and develop actionable plans to achieve them.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Industry Connections</h3>
              <p className="text-gray-600 text-sm">
                Build valuable professional networks and connect with industry leaders.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Skill Development</h3>
              <p className="text-gray-600 text-sm">
                Develop essential skills and competencies required for career success.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Professional Growth</h3>
              <p className="text-gray-600 text-sm">
                Accelerate career advancement and achieve professional milestones.
              </p>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="bg-white rounded-xl shadow-lg p-10">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Success Stories & Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <h3 className="font-semibold text-gray-900 mb-2">Successful Placements</h3>
              <p className="text-gray-600">
                Students and professionals successfully placed in leading companies across various industries.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">95%</div>
              <h3 className="font-semibold text-gray-900 mb-2">Client Satisfaction</h3>
              <p className="text-gray-600">
                High satisfaction rate among clients who have achieved their career goals with our guidance.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
              <h3 className="font-semibent text-gray-900 mb-2">Industry Partners</h3>
              <p className="text-gray-600">
                Strong partnerships with leading companies providing exclusive opportunities to our clients.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 rounded-xl p-8">
            <div className="flex items-center mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-gray-600 font-medium">Client Testimonial</span>
            </div>
            <blockquote className="text-lg italic text-gray-700 mb-4">
              "Arshiv World transformed my career journey. The personalized mentorship and career guidance 
              helped me transition from a confused graduate to a confident professional. I couldn't have 
              achieved my current position without their support."
            </blockquote>
            <cite className="text-gray-900 font-semibold">- Sarah Johnson, Software Engineer at Tech Corp</cite>
          </div>
        </section>

        {/* Future Plans */}
        <section className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl p-10 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">Future Plans & Vision</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Expansion Goals</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mr-3 mt-0.5 opacity-80" />
                  <span>Launch virtual mentorship programs to reach global audiences</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mr-3 mt-0.5 opacity-80" />
                  <span>Establish partnerships with 100+ leading companies by 2026</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mr-3 mt-0.5 opacity-80" />
                  <span>Create specialized programs for emerging tech fields</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Innovation Initiatives</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mr-3 mt-0.5 opacity-80" />
                  <span>AI-powered career matching and recommendation systems</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mr-3 mt-0.5 opacity-80" />
                  <span>Mobile app for on-the-go career development</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-5 h-5 mr-3 mt-0.5 opacity-80" />
                  <span>Community platform for peer-to-peer learning and networking</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-white/20">
            <h3 className="text-xl font-semibold mb-4">Join Us in Shaping the Future</h3>
            <p className="text-lg opacity-90">
              Together, we're building a world where every individual has the opportunity to achieve 
              their career dreams and make a meaningful impact in their chosen field.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Dashboard;