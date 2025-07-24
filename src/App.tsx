import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Menu, X } from 'lucide-react';
import AnimatedSection from './components/AnimatedSection';
import StaggerContainer, { StaggerItem } from './components/StaggerContainer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: 'HTTP Server with CGI & Event-Driven I/O',
      description: 'High-performance multi-server HTTP server in C/C++ with dynamic routing, RESTful design, and epoll-based non-blocking I/O.',
      techStack: ['C/C++', 'HTTP', 'Postman', "CGI", "Event-Driven I/O", "Python"],
    },
    {
      title: 'Containerized Web Hosting Infrastructure',
      description: 'Secure, modular web infrastructure using Docker, Docker Compose, Nginx, MariaDB, and WordPress with SSL and persistent storage.',
      techStack: ['Docker', 'Docker Compose', 'Nginx', 'MariaDB', 'WordPress', 'SSL'],
    },
    {
      title: 'Full-Stack Web Application: Pong Game',
      description: 'Secure multiplayer Pong game with Fastify, TypeScript, WebSockets, JWT, 2FA, and containerized deployment.',
      techStack: ['Fastify', 'TypeScript', 'WebSockets', 'Docker', 'JWT', '2FA', 'SQLite'],
    },
    {
      title: "Live Chat Web App",
      description: "A real-time web-based chat system built with WebSocket and Fastify, enabling instant communication between users with authentication, channels, and message persistence.",
      techStack: ["TypeScript", "Fastify", "WebSocket", "SQLite", "Tailwind CSS", "HTML", "CSS"],
    },
    {
      title: 'Unix Shell: Minishell',
      description: 'A simplified Unix shell implemented in C with support for pipelines, redirections, environment variables, and built-in commands.',
      techStack: ['C Programming Language', 'POSIX', 'Shell', 'Process Management', 'Pipes', 'Unix Signals'],
    },
    {
      title: '2D Game: So-Long',
      description: 'A tile-based 2D game built with a custom game engine in C using the MinilibX graphics library. Includes collectibles, enemies, and player movement.',
      techStack: ['C Programming Language', 'MinilibX', 'Game Dev', '2D Graphics', 'Algorithms'],
    },
  ];

  const skills = [
    'Fastify', 'Node.js', 'Spring Boot', 'React',
    'Python', 'C++', 'Java', 'JavaScript', 'TypeScript', 'Bash',
    'Docker', 'Kubernetes',
    'Postman', 'Pytest',
    'PostgreSQL', 'MariaDB', 'SQLite', 'MongoDB', 'Redis',
    'Git', 'GitHub',
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-gray-800"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              className="text-xl font-bold text-white"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ayoub Chraiti
            </motion.div>
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <motion.div
                className="ml-10 flex items-baseline space-x-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {['home', 'about', 'projects', 'certifications', 'contact'].map((section, index) => (
                  <motion.button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      activeSection === section
                        ? 'text-purple-400 border-b-2 border-purple-400'
                        : 'text-gray-300 hover:text-white hover:border-b-2 hover:border-purple-400'
                    }`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {section}
                  </motion.button>
                ))}
              </motion.div>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'projects', 'skills', 'experience', 'contact'].map((section, index) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 ${
                    activeSection === section
                      ? 'text-purple-400 bg-purple-900/20'
                      : 'text-gray-300 hover:text-white hover:bg-purple-900/10'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {section}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection direction="up" delay={0.2}>
            <motion.h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Ayoub Chraiti
            </motion.h1>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.4}>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8">
              Software Developer & Digital Technology Architect Student
            </p>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.6}>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Passionate about building efficient, scalable software. I craft full-stack applications with clean code, while focusing on performance and collaboration.
            </p>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="/Portfolio/Chraiti-Ayoub-Resume-En.pdf"
                download
                className="flex items-center gap-2 border border-gray-600 hover:border-purple-400 text-gray-300 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-200"
              >
                <Download size={20} />
                Download CV
              </motion.a>
              
              <motion.button
                onClick={() => scrollToSection('projects')}
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(147, 51, 234, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                Explore My Work
              </motion.button>
            </div>
          </AnimatedSection>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">About Me</h2>
            <motion.div 
              className="w-24 h-1 bg-purple-600 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" delay={0.2}>
              <h3 className="text-2xl font-semibold mb-6 text-white">Get to know me</h3>
              <motion.div className="space-y-4">
                <motion.p 
                  className="text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Motivated Software Engineering student at 1337 Coding School, UM6P Benguerir, where I’ve developed a strong foundation in full-stack web development using React, TypeScript, Java, and Spring Boot. The project-based, peer-driven learning environment at 1337 has enabled me to grow through real-world challenges, emphasizing autonomy, collaboration, and deep technical exploration.
                </motion.p>
                <motion.p 
                  className="text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  I enjoy solving complex problems, improving performance, and delivering clean code. I’ve worked on personal and collaborative projects, and I’m always looking to learn more.
                </motion.p>
                <motion.p 
                  className="text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  I’m excited to collaborate with dynamic teams, leveraging collective expertise to deliver innovative, user-focused solutions that make a meaningful impact.
                </motion.p>
              </motion.div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" delay={0.4}>
              <h3 className="text-2xl font-semibold mb-6 text-white">My Skills</h3>
              <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((skill) => (
                  <StaggerItem key={skill}>
                    <motion.div
                      className="bg-gray-800 hover:bg-purple-900/30 text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-center cursor-default"
                      whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: "rgba(147, 51, 234, 0.3)",
                        color: "#ffffff"
                      }}
                    >
                      {skill}
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </AnimatedSection>
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Projects</h2>
            <motion.div
              className="w-24 h-1 bg-purple-600 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <motion.p
              className="text-gray-400 mt-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Here are some of my recent projects that showcase my skills and passion for development.
            </motion.p>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.2}>
            {projects.map((project, index) => (
              <StaggerItem key={index}>
                <motion.div
                  className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 h-full"
                  whileHover={{
                    scale: 1.03,
                    borderColor: 'rgba(168, 85, 247, 0.5)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-6 h-full flex flex-col">
                    <motion.h3
                      className="text-xl font-semibold mb-3 text-white"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                      className="text-gray-400 mb-4 leading-relaxed flex-grow"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      {project.description}
                    </motion.p>
                    <motion.div
                      className="flex flex-wrap gap-2 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      {project.techStack.map((tech) => (
                        <motion.span
                          key={tech}
                          className="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full text-sm font-medium"
                          whileHover={{ scale: 1.1, backgroundColor: 'rgba(147, 51, 234, 0.4)' }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Certifications</h2>
            <motion.div
              className="w-24 h-1 bg-purple-600 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {/* Each certification item */}
            <StaggerItem>
              <motion.div
                className="bg-gray-900 rounded-lg border border-gray-800 p-6 flex flex-col items-center text-center"
                whileHover={{
                  scale: 1.03,
                  borderColor: 'rgba(168, 85, 247, 0.5)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-white">Machine Learning</h3>
                <p className="text-gray-400 mb-2">Codingame</p>
                <p className="text-gray-300">
                  Hands-on projects solving real-world ML challenges using Python and Scikit-learn.
                </p>
              </motion.div>
            </StaggerItem>

            <StaggerItem>
              <motion.div
                className="bg-gray-900 rounded-lg border border-gray-800 p-6 flex flex-col items-center text-center"
                whileHover={{
                  scale: 1.03,
                  borderColor: 'rgba(168, 85, 247, 0.5)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-white">Intro to Data Science</h3>
                <p className="text-gray-400 mb-2">IBM / Coursera</p>
                <p className="text-gray-300">
                  Covered the fundamentals of data science, Python, and data analysis workflows.
                </p>
              </motion.div>
            </StaggerItem>

            {/* Machine Learning Bootcamp */}
            <StaggerItem>
              <motion.div
                className="bg-gray-900 rounded-lg border border-gray-800 p-6 flex flex-col items-center text-center"
                whileHover={{
                  scale: 1.03,
                  borderColor: 'rgba(168, 85, 247, 0.5)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-white">Machine Learning Bootcamp</h3>
                <p className="text-gray-400 mb-2">1337 Coding School</p>
                <p className="text-gray-300">
                  Hands-on training with Python, Scikit-learn, and ML pipelines using real-world datasets.
                </p>
              </motion.div>
            </StaggerItem>

            {/* ALX Software Engineering Program */}
            <StaggerItem>
              <motion.div
                className="bg-gray-900 rounded-lg border border-gray-800 p-6 flex flex-col items-center text-center"
                whileHover={{
                  scale: 1.03,
                  borderColor: 'rgba(168, 85, 247, 0.5)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-white">ALX Software Engineering Program</h3>
                <p className="text-gray-400 mb-2">ALX</p>
                <p className="text-gray-300">
                  Completed core modules in systems programming, web development, and team-based collaboration.
                </p>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>




      {/* Contact Section */}
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up" className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Get in Touch</h2>
          <motion.div 
            className="w-24 h-1 bg-purple-600 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.p 
            className="text-gray-400 mt-6 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Let's connect and create something awesome together.
          </motion.p>
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.4} className="text-center">
          <motion.div 
            className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="mailto:ayoubchraiti.dev@gmail.com"
              className="w-64 flex items-center justify-center gap-3 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              Email Me
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/ayoubchraiti"
              target="_blank"
              className="w-64 flex items-center justify-center gap-3 border border-gray-600 hover:border-purple-400 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} />
              LinkedIn
            </motion.a>

            <motion.a
              href="https://github.com/ayoubchraiti"
              target="_blank"
              className="w-64 flex items-center justify-center gap-3 border border-gray-600 hover:border-purple-400 text-gray-300 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              GitHub
            </motion.a>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>


      {/* Footer */}
      <AnimatedSection direction="fade">
        <footer className="bg-black border-t border-gray-800 py-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">
              © 2025 Ayoub Chraiti. Built with React & Tailwind CSS.
            </p>
          </div>
        </footer>
      </AnimatedSection>
    </div>
  );
}

export default App;
