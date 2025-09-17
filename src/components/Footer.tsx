import React from "react";
import { Github, Linkedin, Mail, Heart, Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Omkar Kumbhar</span>
            </div>
            <p className="text-gray-400 leading-relaxed">Java Full Stack Developer passionate about creating scalable web applications and sharing knowledge with the developer community.</p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Omkar1046"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/omkar-kumbhar-3973302b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:omkarkumbhar1046@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/About"
                  className="text-gray-400 hover:text-blue-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a
                  href="/Projects"
                  className="text-gray-400 hover:text-blue-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/Skills"
                  className="text-gray-400 hover:text-blue-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="/Contact"
                  className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Core Technologies</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-gray-800 text-blue-400 px-3 py-1 rounded-full text-sm">Java</span>
              <span className="bg-gray-800 text-yellow-400 px-3 py-1 rounded-full text-sm">Spring Framework</span>
              <span className="bg-gray-800 text-orange-400 px-3 py-1 rounded-full text-sm">Spring Boot</span>
              <span className="bg-gray-800 text-white-400 px-3 py-1 rounded-full text-sm">Spring MVC</span>
              <span className="bg-gray-800 text-green-400 px-3 py-1 rounded-full text-sm">Spring Security</span>
              <span className="bg-gray-800 text-purple-400 px-3 py-1 rounded-full text-sm">MySQL</span>
              <span className="bg-gray-800 text-orange-400 px-3 py-1 rounded-full text-sm">MongoDB</span>
              <span className="bg-gray-800 text-purple-400 px-3 py-1 rounded-full text-sm">JDBC</span>
              <span className="bg-gray-800 text-yellow-400 px-3 py-1 rounded-full text-sm">Hibernate/JPA</span>
              <span className="bg-gray-800 text-blue-400 px-3 py-1 rounded-full text-sm">RESTful APIs</span>
              <span className="bg-gray-800 text-green-400 px-3 py-1 rounded-full text-sm">HTML5</span>
              <span className="bg-gray-800 text-blue-400 px-3 py-1 rounded-full text-sm">CSS3</span>
              <span className="bg-gray-800 text-orange-400 px-3 py-1 rounded-full text-sm">Bootstrap</span>
              <span className="bg-gray-800 text-purple-400 px-3 py-1 rounded-full text-sm">React</span>
              <span className="bg-gray-800 text-yellow-400 px-3 py-1 rounded-full text-sm">Maven</span>
              <span className="bg-gray-800 text-white-400 px-3 py-1 rounded-full text-sm">IDEs (IntelliJ, VS Code, Eclipse)</span>
              <span className="bg-gray-800 text-black-400 px-3 py-1 rounded-full text-sm">Git/GitHub</span>
              <span className="bg-gray-800 text-orange-400 px-3 py-1 rounded-full text-sm">Postman</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Omkar Kumbhar. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0 flex items-center">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> by Omkar Kumbhar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
