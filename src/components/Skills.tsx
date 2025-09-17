import React from "react";
import { Code, Database, Server, Cloud, Smartphone, Settings } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="h-8 w-8 text-blue-600" />,
      color: "blue",
      skills: [
        { name: "React", level: 70 },
        { name: "JavaScript", level: 70 },
        { name: "HTML5 & CSS3", level: 90 },
        { name: "Tailwind CSS", level: 80 },
        { name: "Angular", level: 40 },
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-8 w-8 text-green-600" />,
      color: "green",
      skills: [
        { name: "Java", level: 90 },
        { name: "Spring Framework", level: 80 },
        { name: "Spring Boot", level: 85 },
        { name: "Spring Security", level: 85 },
        { name: "Hibernate/JPA", level: 90 },
        { name: "RESTful APIs", level: 90 },
        { name: "Microservices", level: 80 },
        { name: "JWT", level: 80 },
      ],
    },
    {
      title: "Database Technologies",
      icon: <Database className="h-8 w-8 text-purple-600" />,
      color: "purple",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 80 },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-8 w-8 text-orange-600" />,
      color: "orange",
      skills: [
        { name: "AWS (EC2, S3)", level: 80 },
        { name: "Docker", level: 60 },
        { name: "Git/GitHub", level: 90 },
      ],
    },
    {
      title: "Tools & Others",
      icon: <Settings className="h-8 w-8 text-gray-600" />,
      color: "gray",
      skills: [
        { name: "IntelliJ IDEA", level: 95 },
        { name: "VS Code", level: 90 },
        { name: "Eclipse", level: 90 },
        { name: "Postman", level: 90 },
        { name: "Maven", level: 80 },
        { name: "Code Review", level: 85 },
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: "bg-blue-100", text: "text-blue-800", progress: "bg-blue-600" },
      green: { bg: "bg-green-100", text: "text-green-800", progress: "bg-green-600" },
      purple: { bg: "bg-purple-100", text: "text-purple-800", progress: "bg-purple-600" },
      orange: { bg: "bg-orange-100", text: "text-orange-800", progress: "bg-orange-600" },
      indigo: { bg: "bg-indigo-100", text: "text-indigo-800", progress: "bg-indigo-600" },
      gray: { bg: "bg-gray-100", text: "text-gray-800", progress: "bg-gray-600" },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">A comprehensive overview of my technical skills and expertise across different areas of full-stack development.</p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg ${getColorClasses(category.color).bg} mr-4`}>{category.icon}</div>
                <h2 className="text-xl font-bold text-gray-900">{category.title}</h2>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className={`text-sm font-semibold px-2 py-1 rounded ${getColorClasses(category.color).bg} ${getColorClasses(category.color).text}`}>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${getColorClasses(category.color).progress} transition-all duration-300`}
                        style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Highlights */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Technical Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Full Stack</h3>
              <p className="text-gray-600">End-to-end application development with modern technologies</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Microservices</h3>
              <p className="text-gray-600">Scalable architecture design and implementation</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Database Expert</h3>
              <p className="text-gray-600">SQL & NoSQL database design and optimization</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cloud Native</h3>
              <p className="text-gray-600">AWS deployment and containerization expertise</p>
            </div>
          </div>
        </div>

        {/* Learning Journey */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Continuous Learning</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">I believe in staying updated with the latest technologies and best practices. Currently exploring advanced Spring Cloud patterns, Dropwizard, JHipster and modern frontend frameworks.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium">Spring Cloud</span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium">Dropwizard</span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium">JHipster</span>
              <span className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium">Vue.js</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
