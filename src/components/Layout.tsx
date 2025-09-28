import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogOut, User, Phone, Mail, Target, Building, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-80 bg-white shadow-lg flex flex-col">
        {/* User Profile Section */}
        <div className="p-6 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
          <div className="flex items-center mb-4">
            <div className="bg-white/20 p-3 rounded-full">
              <User className="w-8 h-8" />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-lg">User Profile</h3>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-3 opacity-80" />
              <span className="text-sm">{user?.fullName}</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-3 opacity-80" />
              <span className="text-sm">{user?.phoneNumber}</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-3 opacity-80" />
              <span className="text-sm">{user?.email}</span>
            </div>
            <div className="flex items-center">
              <Target className="w-4 h-4 mr-3 opacity-80" />
              <span className="text-sm capitalize">{user?.purpose?.replace('-', ' ')}</span>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 p-6">
          <nav className="space-y-2">
            <Link
              to="/dashboard"
              className={`block px-4 py-3 rounded-lg transition-colors ${
                isActive('/dashboard')
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Building className="w-5 h-5 inline mr-3" />
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-4 py-3 rounded-lg transition-colors ${
                isActive('/about')
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              About
            </Link>
            <Link
              to="/support"
              className={`block px-4 py-3 rounded-lg transition-colors ${
                isActive('/support')
                  ? 'bg-blue-100 text-blue-700 font-medium'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Support
            </Link>
          </nav>
        </div>

        {/* Logout Button */}
        <div className="p-6 border-t">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Building className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">Arshiv World</h1>
            </div>
            
            <nav className="flex items-center space-x-6">
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </Link>
              <Link
                to="/support"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Support
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center text-gray-700 hover:text-red-600 transition-colors"
              >
                <LogOut className="w-4 h-4 mr-1" />
                Logout
              </button>
            </nav>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Company Info */}
              <div>
                <div className="flex items-center mb-4">
                  <Building className="w-8 h-8 mr-3" />
                  <h3 className="text-xl font-bold">Arshiv World</h3>
                </div>
                <p className="text-gray-300 mb-4">
                  Empowering students and professionals through mentorship, career guidance, and counseling services.
                </p>
              </div>

              {/* Contact Information */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-3" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-3" />
                    <span>info@arshivworld.com</span>
                  </div>
                  <div className="flex items-center">
                    <Building className="w-4 h-4 mr-3" />
                    <span>123 Business District, City, State 12345</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <Link to="/dashboard" className="block text-gray-300 hover:text-white transition-colors">
                    Home
                  </Link>
                  <Link to="/about" className="block text-gray-300 hover:text-white transition-colors">
                    About
                  </Link>
                  <Link to="/support" className="block text-gray-300 hover:text-white transition-colors">
                    Support
                  </Link>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="border-t border-gray-700 mt-8 pt-8">
              <div className="flex items-center justify-between">
                <p className="text-gray-300">
                  © 2025 Arshiv World. All rights reserved.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;