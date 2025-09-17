import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import profilepic from "../assets/profile.jpeg";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm <span className="text-blue-600">Omkar Kumbhar</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-800 font-medium">Java Full Stack Developer</h2>
              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">I specialize in building scalable and efficient web applications using Java Spring Boot, React, and modern cloud technologies. I develop end-to-end solutions that combine robust backend architectures with seamless, user-friendly interfaces. My expertise lies in creating secure backends, intuitive frontends, and seamless integrations that deliver impactful digital solutions.</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200">
                Get In Touch
                <Mail className="ml-2 h-5 w-5" />
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/Omkar1046"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/omkar-kumbhar-3973302b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:omkarkumbhar1046@gmail.com"
                className="text-gray-600 hover:text-blue-600 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="lg:justify-self-center">
            <div className="relative">
              {/* Main Circle with Image (replace /profile.jpg with your image path) */}
              <div className="w-80 h-85 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 shadow-2xl overflow-hidden flex items-center justify-center">
                <img
                  src={profilepic}
                  alt="Profile"
                  // className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative Small Circles */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">1+</div>
            <div className="text-gray-600">Years Hands On Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">5+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">10+</div>
            <div className="text-gray-600">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">100%</div>
            <div className="text-gray-600">Effective Issue Resolver</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
