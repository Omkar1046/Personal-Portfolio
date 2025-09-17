import React from "react";
import { ExternalLink, Github, Calendar, Users, Code, Database } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Online Food Ordering System",
      description: "A full-stack food ordering solution with user authentication, payment processing, and admin dashboard. Built with Spring Boot microservices architecture.",
      image: "https://cdn.pixabay.com/photo/2022/01/28/12/17/fast-food-6974507_1280.jpg",
      technologies: ["Spring Boot", "React", "MongoDB", "AWS", "REST API", "JWT", "AWS S3"],
      githubUrl: "https://github.com/Omkar1046/",
      liveUrl: "https://sales-crm-production-10.up.railway.app",
      features: ["JWT-based Auth", "Razorpay Payment Integration", "Admin Dashboard", "CRUD Operations", "Responsive Design", "Spring Security", "Microservices"],
      category: "Full Stack",
    },
    {
      title: "CRM Tool for Sales Teams",
      description: "A comprehensive CRM solution designed for sales teams, featuring lead management, pipeline tracking, and reporting.",
      image: "https://imgs.search.brave.com/QX7cr2unWdGj_Tn78Ot3grf56BubPnsGA13tyYjwLXM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/dXN0b21lci1yZWxh/dGlvbnNoaXAtbWFu/YWdlbWVudC1jb25j/ZXB0XzIzLTIxNTAw/MzgzOTQuanBnP3Nl/bXQ9YWlzX2luY29t/aW5nJnc9NzQwJnE9/ODA",
      technologies: ["Node.js", "Express", "Next.js", "React", "CSS Modules"],
      githubUrl: "https://github.com/Omkar1046/sales-crm",
      liveUrl: "https://sales-crm-ak1z.onrender.com",
      features: ["User Authentication", "Role-based access", "CRUD functionality", "Responsive UI"],
      category: "Backend",
    },
    {
      title: "Banking System Application ",
      description: "Secure banking API with account management, transaction processing, and fraud detection. Includes comprehensive testing and documentation.",
      image: "https://imgs.search.brave.com/6jB2K7Sod6HVnmV1Y9agLKDqseh5jU8JU7Nbkm7WyUs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvbG9nLWludG8t/b25saW5lLWJhbmst/YWNjb3VudC13aXRo/LWNvbXB1dGVyLWZs/YXQtaWxsdXN0cmF0/aW9uXzc3MzE4Ni05/NTEuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MA",
      technologies: ["Core Java", "JDBC", "MySQL", "Security"],
      githubUrl: "https://github.com/Omkar1046/",
      liveUrl: "https://banking-api-docs.herokuapp.com",
      features: ["Account Management", "Transaction Processing", "Security Layer", "Data Manipulation"],
      category: "Backend",
    },
    {
      title: "Personal Portfolio Website",
      description: " A sleek and modern portfolio website to showcase my projects, skills, and experience. Built with React and Tailwind CSS for a responsive design.",
      image: "https://cdn.pixabay.com/photo/2024/12/03/08/08/ai-generated-9241538_1280.jpg",
      technologies: ["React", "Tailwind CSS"],
      githubUrl: "https://github.com/Omkar1046/",
      liveUrl: "https://personal-portfolio-am4iyla2s-omkar-kumbhars-projects-56a1d5ae.vercel.app/",
      features: ["Responsive Design", "Smooth Scrolling", "Project Showcases"],
      category: "Frontend",
    },
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">A showcase of my full-stack development projects featuring Java Spring Boot, React, and modern cloud technologies.</p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-2 shadow-md">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-md font-medium transition-all ${selectedCategory === category ? "bg-blue-600 text-white shadow-sm" : "text-gray-600 hover:text-blue-600"}`}>
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Project Image */}
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}>
                <div className="h-full w-full bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div className="flex space-x-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">{project.category}</span>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-900 text-white text-center py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium">
                    <Github className="inline h-4 w-4 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    <ExternalLink className="inline h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Want to see more?</h2>
            <p className="text-gray-600 mb-6">Check out my GitHub profile for additional projects, contributions, and code samples.</p>
            <a
              href="https://github.com/Omkar1046"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
              <Github className="mr-2 h-5 w-5" />
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
