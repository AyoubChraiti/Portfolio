import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, Menu, X, Sun, Moon, ExternalLink } from 'lucide-react';
import AnimatedSection from './components/AnimatedSection';
import StaggerContainer, { StaggerItem } from './components/StaggerContainer';
import { ThemeProvider, useTheme } from './context/ThemeContext';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentSection = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
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
      title: 'HyperTube | Streaming Service',
      description: 'Built a Java/Spring Boot streaming backend with FFmpeg HLS transcoding so playback starts before downloads finish. Separated media processing from API requests for concurrent streaming, and integrated TMDb and OpenSubtitles to enrich 10,000+ titles with metadata and multilingual subtitles.',
      techStack: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Redis', 'OAuth2', 'FFmpeg'],
    },
    {
      title: 'Matcha | Dating Platform',
      description: 'Built profiles and tag- and location-based discovery with optimized PostgreSQL queries, plus real-time chat and notifications over WebSockets. Added session authentication, input sanitization, rate limiting and connection throttling to reduce spam and brute-force attempts.',
      techStack: ['React', 'Express.js', 'PostgreSQL', 'WebSockets'],
    },
    {
      title: 'LogLens | AI-Powered Log Analyzer',
      description: 'Integrated the Claude API to turn application and deployment logs into structured diagnostic summaries for engineers investigating failures. Built real-time log ingestion, filtering and visualization to support AI-assisted root-cause analysis.',
      techStack: ['React', 'TypeScript', 'Claude API'],
    },
    {
      title: 'Live Chat Web App',
      description: 'A real-time web-based chat system built with WebSocket and Fastify, enabling instant communication between users with authentication, channels, and message persistence.',
      techStack: ['TypeScript', 'Fastify', 'WebSocket', 'SQLite', 'Tailwind CSS', 'HTML', 'CSS'],
    },
    {
      title: 'Containerized Web Hosting Infrastructure',
      description: 'Secure, modular web infrastructure using Docker, Docker Compose, Nginx, MariaDB, and WordPress with SSL and persistent storage.',
      techStack: ['Docker', 'Docker Compose', 'Nginx', 'MariaDB', 'WordPress', 'SSL'],
    },
    {
      title: 'Full-Stack Web Application',
      description: 'Secure multiplayer Pong game with Fastify, TypeScript, WebSockets, JWT, 2FA, and containerized deployment.',
      techStack: ['Fastify', 'TypeScript', 'WebSockets', 'Docker', 'JWT', '2FA', 'SQLite'],
    },
    {
      title: 'HTTP Server with CGI & Event-Driven I/O',
      description: 'High-performance multi-server HTTP server in C/C++ with dynamic routing, RESTful design, and epoll-based non-blocking I/O.',
      techStack: ['C/C++', 'HTTP', 'Postman', 'CGI', 'Event-Driven I/O', 'Python'],
    },
    {
      title: 'Unix Shell: Minishell',
      description: 'A simplified Unix shell implemented in C with support for pipelines, redirections, environment variables, and built-in commands.',
      techStack: ['C Programming Language', 'POSIX', 'Shell', 'Process Management', 'Pipes', 'Unix Signals'],
    },
    {
      title: '2D Game World: So-Long',
      description: 'A tile-based 2D game built with a custom game engine in C using the MinilibX graphics library. Includes collectibles, enemies, and player movement.',
      techStack: ['C Programming Language', 'MinilibX', 'Game Dev', '2D Graphics', 'Algorithms'],
    },
  ];

  const skills = [
    'Java', 'Spring Boot', 'REST APIs', 'FastAPI', 'Node.js', 'Express',
    'React', 'TypeScript', 'JavaScript', 'Python',
    'PostgreSQL', 'Redis', 'SQLite', 'SQL',
    'Microservices', 'Distributed Systems', 'Concurrency', 'API Design', 'OOP',
    'OCI', 'Terraform', 'Docker', 'Docker Compose', 'Kubernetes', 'CI/CD',
    'LLM APIs', 'Claude API', 'Prompt & Tool Integration', 'AI-Assisted Development',
    'Fastify', 'C++', 'Bash', 'Postman', 'Pytest', 'MariaDB', 'MongoDB', 'Git', 'GitHub',
  ];

  return (
    <ThemeProvider>
      <div className={`${theme === 'dark' ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'} min-h-screen transition-colors duration-300`}>
        {/* Navigation */}
        <motion.nav
          className={`fixed top-0 w-full z-50 border-b backdrop-blur-xl transition-colors duration-300 ${
            theme === 'dark' ? 'bg-black/80 border-gray-800' : 'bg-gray-50/80 border-gray-200'
          }`}
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <motion.div
                className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Ayoub Chraiti
              </motion.div>
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                <motion.div
                  className="ml-10 flex items-baseline space-x-8"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {['home', 'about', 'experience', 'projects', 'certifications', 'contact'].map((section, index) => (
                    <motion.button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className={`capitalize px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                        activeSection === section
                          ? 'text-blue-400 border-b-2 border-blue-400'
                          : `${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} hover:border-b-2 hover:border-blue-400`
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
                <motion.button
                  onClick={toggleTheme}
                  aria-label="Toggle color theme"
                  className={`
                    p-2 rounded-full transition-all duration-200
                    ${theme === 'dark'
                      ? 'bg-black/80 text-white hover:bg-gray-900/80'
                      : 'bg-gray-100/80 text-gray-900 hover:bg-gray-200/80'}
                    backdrop-blur-xl
                  `}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                >
                  {theme === 'dark' ? <Sun size={21} /> : <Moon size={21} />}
                </motion.button>
              </div>
              {/* Mobile menu button */}
              <div className="lg:hidden">
                <motion.button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isMenuOpen}
                  className={`${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} p-2 transition-colors duration-200`}
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
              className={`lg:hidden ${theme === 'dark' ? 'bg-black/95 border-gray-800' : 'bg-gray-50/95 border-gray-200'} backdrop-blur-md border-t transition-colors duration-300`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['home', 'about', 'experience', 'projects', 'certifications', 'contact'].map((section, index) => (
                  <motion.button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 ${
                      activeSection === section
                        ? 'text-blue-400 bg-blue-900/20'
                        : `${theme === 'dark' ? 'text-gray-300 hover:text-white hover:bg-blue-900/10' : 'text-gray-600 hover:text-gray-900 hover:bg-blue-100/10'}`
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {section}
                  </motion.button>
                ))}
                <motion.button
                  onClick={toggleTheme}
                  aria-label="Toggle color theme"
                  className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 ${
                    theme === 'dark' ? 'text-gray-300 hover:text-white hover:bg-blue-900/10' : 'text-gray-600 hover:text-gray-900 hover:bg-blue-100/10'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  {theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
                </motion.button>
              </div>
            </motion.div>
          )}
        </motion.nav>

        {/* Home Section */}
        <section
          id="home"
          className={`min-h-screen flex items-center justify-center pt-16 transition-colors duration-300 ${
            theme === 'dark' ? 'bg-black' : 'bg-gray-50'
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection direction="up" delay={0.2}>
              <motion.h1
                className={`text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-${theme === 'dark' ? 'white' : 'gray-900'} to-blue-400 bg-clip-text text-transparent`}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Ayoub Chraiti
              </motion.h1>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={0.4}>
              <p className={`text-xl sm:text-2xl lg:text-3xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mb-8 transition-colors duration-200`}>
                Full-Stack Developer | Java, Spring Boot & React
              </p>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={0.6}>
              <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-12 max-w-2xl mx-auto transition-colors duration-200`}>
                2026 UM6P / 1337 graduate and former Oracle software engineering intern. I build backend services and full-stack applications, combining API integration, cloud infrastructure and practical AI tools.
              </p>
            </AnimatedSection>
            
            <AnimatedSection direction="up" delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href={`${import.meta.env.BASE_URL}Ayoub_Chraiti-Resume.pdf`}
                  download
                  className={`flex items-center gap-2 border ${theme === 'dark' ? 'border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white' : 'border-gray-300 hover:border-blue-400 text-gray-700 hover:text-gray-900'} px-8 py-3 rounded-lg font-medium transition-all duration-200`}
                >
                  <Download size={20} />
                  Download CV
                </motion.a>
                
                <motion.button
                  onClick={() => scrollToSection('projects')}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200"
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore My Work
                </motion.button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className={`py-20 transition-colors duration-300 ${
            theme === 'dark' ? 'bg-black' : 'bg-gray-50'
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="text-center mb-16">
              <h2
                className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-200 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                About Me
              </h2>
              <motion.div
                className="w-24 h-1 bg-blue-600 mx-auto rounded"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection direction="left" delay={0.2}>
                <h3
                  className={`text-2xl font-semibold mb-6 transition-colors duration-200 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Get to know me
                </h3>
                <motion.div className="space-y-4">
                  {[
                    "I graduated in 2026 from University Mohammed VI Polytechnic — 1337 School in Computer Science and Digital Technologies, earning an RNCP Level 7 qualification (Master’s equivalent). My project-based training developed my foundations in software engineering, autonomy and collaboration.",
                    "At Oracle Morocco R&D Center, I reduced an internal deployment workflow’s runtime by 30%, co-designed a zero-downtime rollout strategy adopted by the infrastructure organization, and built Terraform automation for OCI and AI-assisted log diagnostics.",
                    "I work across Java/Spring Boot backends, React and TypeScript interfaces, PostgreSQL, cloud infrastructure and LLM integrations. I’m looking for junior backend or full-stack engineering opportunities where I can contribute to reliable products and grow with an experienced team."
                  ].map((paragraph, idx) => (
                    <motion.p
                      key={idx}
                      className={`leading-relaxed transition-colors duration-200 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </motion.div>
              </AnimatedSection>

              <AnimatedSection direction="right" delay={0.4}>
                <h3
                  className={`text-2xl font-semibold mb-6 transition-colors duration-200 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  My Skills
                </h3>
                <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {skills.map((skill) => (
                    <StaggerItem key={skill}>
                      <motion.div
                        className={`px-4 py-2 rounded-lg text-sm font-medium text-center cursor-default transition-all duration-200 ${
                          theme === 'dark'
                            ? 'bg-gray-900 text-gray-300 hover:bg-blue-900/30 hover:text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-blue-100/30 hover:text-gray-900'
                        }`}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: theme === 'dark' ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)',
                          color: theme === 'dark' ? '#ffffff' : '#1f2937',
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

        {/* Experience Section */}
        <section
          id="experience"
          className={`py-20 transition-colors duration-300 ${theme === 'dark' ? 'bg-black' : 'bg-gray-50'}`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="text-center mb-16">
              <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Professional Experience</h2>
              <motion.div className="w-24 h-1 bg-blue-600 mx-auto rounded" initial={{ width: 0 }} whileInView={{ width: 96 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} />
            </AnimatedSection>
            <AnimatedSection direction="up" delay={0.2}>
              <div className={`rounded-lg border p-6 sm:p-8 ${theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}`}>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">Oracle Morocco R&amp;D Center</h3>
                    <p className={theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}>Software Engineering Intern</p>
                  </div>
                  <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>February – July 2026 · Casablanca, Morocco</p>
                </div>
                <ul className={`list-disc pl-5 space-y-4 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <li>Reduced an internal deployment workflow’s runtime by <strong>30%</strong> by identifying independent service groups and parallelizing a previously sequential 24-hour process.</li>
                  <li>Co-designed a <strong>zero-downtime blue/green rollout</strong> with 3 senior engineers and presented it to a 15-person infrastructure organization, which adopted it as the default deployment pattern.</li>
                  <li>Developed and validated <strong>Terraform automation for OCI</strong>, making infrastructure provisioning more repeatable and reliable.</li>
                  <li>Built an <strong>AI-assisted diagnostics tool</strong> to identify failure signals and turn application and deployment logs into diagnostic summaries for infrastructure engineers.</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className={`py-20 transition-colors duration-300 ${
            theme === 'dark' ? 'bg-black' : 'bg-gray-50'
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="text-center mb-16">
              <h2
                className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-200 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                Projects
              </h2>
              <motion.div
                className="w-24 h-1 bg-blue-600 mx-auto rounded"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <motion.p
                className={`mt-6 max-w-2xl mx-auto transition-colors duration-200 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Selected work in streaming systems, real-time applications and AI-assisted diagnostics, followed by earlier software engineering projects.
              </motion.p>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.2}>
              {projects.map((project, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    className={`rounded-lg overflow-hidden border h-full flex flex-col transition-colors duration-300 ${
                      theme === 'dark'
                        ? 'bg-gray-900 border-gray-700'
                        : 'bg-white border-gray-200'
                    }`}
                    whileHover={{
                      scale: 1.03,
                      borderColor: 'rgba(59, 130, 246, 0.8)',
                      boxShadow:
                        theme === 'dark'
                          ? '0 20px 40px rgba(59, 130, 246, 0.3)'
                          : '0 10px 20px rgba(59, 130, 246, 0.15)',
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 flex flex-col flex-grow">
                      <motion.h3
                        className={`text-xl font-semibold mb-3 transition-colors duration-200 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p
                        className={`mb-4 leading-relaxed flex-grow transition-colors duration-200 ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                      >
                        {project.description}
                      </motion.p>
                      <motion.div
                        className="flex flex-wrap gap-2 mt-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        {project.techStack.map((tech) => (
                          <motion.span
                            key={tech}
                            className={`text-sm font-medium rounded-full px-3 py-1 transition-colors duration-200 ${
                              theme === 'dark'
                                ? 'bg-blue-700 text-blue-200 hover:bg-blue-600 hover:text-blue-100'
                                : 'bg-blue-100 text-blue-800 hover:bg-blue-200 hover:text-blue-900'
                            }`}
                            whileHover={{ scale: 1.1 }}
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
        <section
          id="certifications"
          className={`py-20 transition-colors duration-300 ${
            theme === 'dark' ? 'bg-black' : 'bg-gray-50'
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="text-center mb-16">
              <h2
                className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-200 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                Certifications
              </h2>
              <motion.div
                className="w-24 h-1 bg-blue-600 mx-auto rounded"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'HackerRank Software Engineering Certificate',
                  issuer: 'HackerRank',
                  description: 'Earned the HackerRank Software Engineering Certificate by completing the rigorous coding assessments. Demonstrated proficiency in algorithms, data structures, and practical software development skills and efficient code implementation.',
                  url: 'https://www.hackerrank.com/certificates/iframe/597cc4976d5f'
                },
                {
                  title: 'Machine Learning Bootcamp',
                  issuer: '1337 Coding School',
                  description: 'Intensive hands-on training covering core machine learning algorithms, data preprocessing, Scikit-learn, and real-world ML pipeline implementation with a focus on experimentation.',
                  url: 'https://github.com/AyoubChraiti/Entry-Level-ML-Engineer-Bootcamp'
                },
                {
                  title: 'Intro to Data Science',
                  issuer: 'IBM SkillsBuild',
                  description: 'Introduced to the foundational concepts of data science, including the basic roles of data scientists, and an overview of how data can be collected, processed, and visualized.',
                  url: 'https://ayoubchraiti.github.io/Certificates/IBM-data-certificate.pdf'
                },
                {
                  title: 'Java & Python Certifications',
                  issuer: 'Codingame',
                  description: 'CodinGame certifications in Java and Python, complementing my backend development and scripting experience.',
                  url: undefined
                },
              ].map(({ title, issuer, description, url }, index) => (
                <StaggerItem key={index}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <motion.div
                      className={`rounded-lg border p-6 flex flex-col items-center text-center transition-colors duration-300 cursor-pointer ${
                        theme === 'dark' ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
                      }`}
                      whileHover={{
                        scale: 1.03,
                        borderColor: 'rgba(59, 130, 246, 0.8)',
                        boxShadow:
                          theme === 'dark'
                            ? '0 20px 40px rgba(59, 130, 246, 0.3)'
                            : '0 10px 20px rgba(59, 130, 246, 0.15)',
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center justify-between w-full mb-2">
                        <h3
                          className={`text-xl font-semibold transition-colors duration-200 ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {title}
                        </h3>
                        {url && <ExternalLink
                          className={`w-5 h-5 ml-2 transition-colors duration-200 ${
                            theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                          }`}
                        />}
                      </div>
                      <p
                        className={`mb-2 transition-colors duration-200 ${
                          theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                        } font-medium`}
                      >
                        {issuer}
                      </p>
                      <p
                        className={`transition-colors duration-200 ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        {description}
                      </p>
                    </motion.div>
                  </a>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className={`py-20 transition-colors duration-300 ${
            theme === 'dark' ? 'bg-black' : 'bg-gray-50'
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="text-center mb-16">
              <h2
                className={`text-3xl sm:text-4xl font-bold mb-4 transition-colors duration-200 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                Get in Touch
              </h2>
              <motion.div
                className="w-24 h-1 bg-blue-600 mx-auto rounded"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <motion.p
                className={`mt-6 max-w-xl mx-auto transition-colors duration-200 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Open to junior backend and full-stack engineering opportunities. Let’s discuss how I can contribute to your team.
              </motion.p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.4} className="text-center">
              <motion.div
                className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.a
                  href="mailto:ayoubchraiti2@gmail.com"
                  className="w-64 flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={20} />
                  Email Me
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/ayoubchraiti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-64 flex items-center justify-center gap-3 border px-6 py-3 rounded-lg font-semibold shadow-sm transition-all duration-200 ${
                    theme === 'dark'
                      ? 'border-gray-600 text-gray-300 hover:border-blue-400 hover:text-white'
                      : 'border-gray-300 text-gray-700 hover:border-blue-600 hover:text-gray-900'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={20} />
                  LinkedIn
                </motion.a>

                <motion.a
                  href="https://github.com/ayoubchraiti"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-64 flex items-center justify-center gap-3 border px-6 py-3 rounded-lg font-semibold shadow-sm transition-all duration-200 ${
                    theme === 'dark'
                      ? 'border-gray-600 text-gray-300 hover:border-blue-400 hover:text-white'
                      : 'border-gray-300 text-gray-700 hover:border-blue-600 hover:text-gray-900'
                  }`}
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
          <footer
            className={`py-8 transition-colors duration-300 ${
              theme === 'dark' ? 'bg-black border-gray-800' : 'bg-gray-50 border-gray-200'
            } border-t`}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p
                className={`transition-colors duration-200 ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}
              >
                © {new Date().getFullYear()} Ayoub Chraiti. Built with React & Tailwind CSS.
              </p>
            </div>
          </footer>
        </AnimatedSection>
      </div>
    </ThemeProvider>
  );
};

export default App;