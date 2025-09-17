import React from 'react';
import { Code, Database, Server, Cloud, Users, Award } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      title: 'Java Full Stack Developer',
      company: 'Seed Infotech.',
      period: '2024 - 2025',
      description: 'development of microservices architecture using Spring Boot, React, and AWS. Worked on building scalable web applications and RESTful APIs, ensuring high performance and responsiveness. Implemented CI/CD pipelines and automated testing to streamline deployment processes. Collaborated with cross-functional teams to deliver robust software solutions. ',
    }
    
  ];

  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: 'Full Stack Expertise',
      description: 'Proficient in both frontend and backend technologies with 1+ years of hands-on experience.',
    },
    {
      icon: <Database className="h-8 w-8 text-green-600" />,
      title: 'Database Design',
      description: 'Expert in SQL and NoSQL databases including MySQL and MongoDB.',
    },
    {
      icon: <Server className="h-8 w-8 text-purple-600" />,
      title: 'API Development',
      description: 'Specialized in RESTful API design and microservices architecture using Spring Boot.',
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-bold">
            I'm a passionate Full Stack Developer with expertise in Java ecosystem and modern web technologies. 
            I love creating efficient, scalable solutions that make a real impact.
          </p>
        </div>

        {/* Bio Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">My Journey</h2>
            <div className="prose text-gray-600 leading-relaxed font-bold">
              <p>
                # Full-Stack Java Developer with hands-on experience in Java, Spring Framework (Spring Boot, Spring MVC, 
Spring Security), Hibernate ORM, and front-end technologies (HTML5, CSS3, JavaScript, React.js).</p>

<p># Skilled in developing scalable web applications using RESTful APIs, Microservices, JPA/Hibernate, and 
database (MySQL, MongoDB).</p>

<p># Strong understanding of SDLC, Agile methodologies, and version control (Git/GitHub).</p>

<p># Eager to leverage problem-solving skills and technical knowledge to contribute to innovative projects
while expanding expertise in cloud platforms (AWS/Azure) and DevOps tools (Docker, Jenkins).</p>

<p># Able to adapt to new technologies, frameworks, with a flexible approach to software
development</p>

              {/* <p> 
                I have a strong background in database design, API development, and cloud deployment. 
                I'm passionate about writing maintainable code, following best practices, and staying 
                updated with the latest technologies in the Java ecosystems.
              </p> */}
              
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="mb-4">{highlight.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Professional Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="mt-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="h-6 w-6 text-blue-600 mr-2" />
                Education
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900">Bachelor of Computer Science</h3>
                <p className="text-blue-600 font-medium">Shivaji University</p>
                <p className="text-gray-500">2021 - 2024</p>
                <p className="text-gray-600 mt-2">Graduated from Shivaji University with a degree in Computer Science & Technology with a CGPA of 7.93</p>
                <div/>
                </div>
                <div className="mt-4">
                {/* <div/> */}
                <div className="bg-gray-50 p-6 rounded-lg mt-4">
                <h3 className="text-lg font-semibold text-gray-900">HSC</h3>
                <p className="text-blue-600 font-medium">Maharashtra State Board</p>
                <p className="text-gray-500">2019 - 2021</p>
                <p className="text-gray-600 mt-2">HSC from Maharashtra State Board with a percentage of 69.33%.</p>
              </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg mt-4" >
                <h3 className="text-lg font-semibold text-gray-900">SSC</h3>
                <p className="text-blue-600 font-medium">Maharashtra State Board</p>
                <p className="text-gray-500">2019</p>
                <p className="text-gray-600 mt-2">SSC from Maharashtra State Board with a percentage of 61.60.</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="h-6 w-6 text-green-600 mr-2" />
                Certifications
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900">Full Stack Java Developer</h3>
                  <p className="text-gray-600">Seed Infotech - 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;