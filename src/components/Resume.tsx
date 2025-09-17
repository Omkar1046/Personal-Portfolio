import React from "react";
import { Download, Eye, Mail, Phone, MapPin, Calendar, Award, Briefcase, Github, Linkedin } from "lucide-react";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume-omkar-kumbhar.pdf"; // Replace with actual path
    link.download = "Omkar_Kumbhar_Resume.pdf";
    link.click();
  };

  const experience = [
    {
      title: "Java Full Stack Developer Intern",
      company: "Seed Infotech",
      period: "2024 - 2025",
      location: "Pune, India",
      responsibilities: ["Developed full-stack applications using Java, Spring Boot, React.js, and MongoDB", "Built REST APIs with JWT-based authentication and role-based authorization", "Worked with AWS S3 for image uploads and cloud content management", "Collaborated in Agile team environment using Git/GitHub for version control"],
    },
  ];

  const projects = [
    {
      name: "Online Food Delivery Web Application",
      details: ["Built using Spring Boot (backend), React.js (frontend), and MongoDB (database)", "Developed REST APIs for authentication, catalog, cart, and orders", "Integrated Razorpay Payment Gateway and AWS S3 for image storage", "Implemented Spring Security with JWT authentication & role-based access", "Responsive UI built with React, Vite, and Bootstrap 5", "Deployed on Netlify/Railway with GitHub for CI/CD"],
    },
    {
      name: "Banking Management System",
      details: ["Developed using Core Java, JDBC, and MySQL", "Implemented secure authentication, user registration, and account management", "Features include debit, credit, transfer, and balance inquiry", "Applied exception handling, input validation, and transaction safety"],
    },
  ];

  const education = [
    {
      degree: "B.Sc. in Computer Science",
      school: "Shivaji University, Kolhapur",
      period: "2021 - 2024",
      location: "Kolhapur, India",
      details: "Grade: A, CGPA: 7.93/10",
    },
    {
      degree: "H.S.C (Science)",
      school: "Maharashtra State Board",
      period: "2019 - 2021",
      details: "69.33%",
    },
    {
      degree: "S.S.C",
      school: "Maharashtra State Board",
      period: "2018 - 2019",
      details: "61.62%",
    },
  ];

  const certifications = ["Java Full Stack Developer – Seed Infotech (2024-25, Grade: A+)", "Personality Development & Leadership Training Program – Disha Bharat NGO, Bengaluru"];

  const skills = {
    "Programming & Backend": ["Java", "OOPs", "Spring Boot", "Spring MVC", "Spring Security", "JDBC", "Hibernate/JPA", "RESTful APIs", "Microservices", "JWT", "Servlets"],
    Frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React.js (Basic)"],
    Database: ["MySQL", "MongoDB"],
    Tools: ["Maven", "Postman", "Git/GitHub", "IntelliJ IDEA", "Eclipse", "VS Code"],
    "Cloud & DevOps": ["AWS (S3)", "Docker", "Jenkins"],
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Resume</h1>
          <p className="text-xl text-gray-600">Download my complete resume below</p>
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handleDownload}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-lg">
              <Download className="mr-2 h-5 w-5" />
              Download PDF
            </button>
          </div>
        </div>

        {/* Resume Content */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-2">Omkar Kumbhar</h1>
              <h2 className="text-xl mb-4">Java Full Stack Developer</h2>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <a
                    href="mailto:omkarkumbhar1046@gmail.com"
                    className="text-white-600 hover:underline">
                    omkarkumbhar1046@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +91 8956777327
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Pune, India
                </div>

                <a
                  href="https://github.com/Omkar1046"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white-600 hover:text-blue-400 transition-colors">
                  <Github className="h-6 w-6" />
                </a>

                <a
                  href="https://www.linkedin.com/in/omkar-kumbhar-3973302b9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white-600 hover:text-blue-400 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Professional Summary */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">Professional Summary</h3>
              <p className="text-gray-700 leading-relaxed">
                # Full-Stack Java Developer with hands-on experience in Java, Spring Framework (Spring Boot, Spring MVC, Spring Security), Hibernate ORM, and front-end technologies (HTML5, CSS3, JavaScript, React.js).
                <p># Skilled in building scalable applications using REST APIs, Microservices, and databases (MySQL, MongoDB).</p>
                <p># Strong knowledge of SDLC, Agile, and Git/GitHub.</p>
                <p># Eager to contribute technical skills and grow expertise in cloud (AWS) and DevOps (Docker, Jenkins).</p>
              </p>
            </section>

            {/* Experience */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2 flex items-center">
                <Briefcase className="h-6 w-6 mr-2" />
                Experience & Internships
              </h3>
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-blue-200 pl-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{job.title}</h4>
                        <p className="text-blue-600 font-medium">{job.company}</p>
                      </div>
                      <div className="text-sm text-gray-500 mt-1 md:mt-0">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {job.period}
                        </div>
                        <div className="flex items-center mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                      </div>
                    </div>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">Projects</h3>
              <div className="space-y-6">
                {projects.map((project, idx) => (
                  <div
                    key={idx}
                    className="border-l-4 border-blue-200 pl-6">
                    <h4 className="text-lg font-semibold text-gray-900">{project.name}</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {project.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">Technical Skills</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education & Certifications */}
            <div className="grid md:grid-cols-2 gap-8">
              <section>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">Education</h3>
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-900">{edu.degree}</h4>
                    <p className="text-blue-600 font-medium">{edu.school}</p>
                    <p className="text-gray-600">
                      {edu.period} {edu.location && `| ${edu.location}`}
                    </p>
                    {edu.details && <p className="text-gray-700 mt-1">{edu.details}</p>}
                  </div>
                ))}
              </section>

              <section>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2 flex items-center">
                  <Award className="h-6 w-6 mr-2" />
                  Certifications & Volunteering
                </h3>
                <ul className="space-y-2">
                  {certifications.map((cert, index) => (
                    <li
                      key={index}
                      className="flex items-start">
                      <Award className="h-4 w-4 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{cert}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
            {/* Projects Note */}
            <section className="mt-8 bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Notable Projects</h3>
              <p className="text-gray-700">
                For a detailed view of my projects including live demos and source code, please visit the <strong>Projects</strong> section of this portfolio or check out my GitHub profile.
              </p>
            </section>
          </div>
        </div>
        {/* Download CTA */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Download the complete resume or get in touch!</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={handleDownload}
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              <Download className="mr-2 h-5 w-5" />
              Download Full Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
