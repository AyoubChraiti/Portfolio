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
      title: 'HyperTube',
      description: 'Video streaming with concurrent transcoding, metadata and subtitles.',
      techStack: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
    },
    {
      title: 'Matcha',
      description: 'Profile discovery, real-time chat and secure authentication.',
      techStack: ['React', 'Express.js', 'PostgreSQL', 'WebSockets'],
    },
    {
      title: 'LogLens',
      description: 'A log analysis dashboard with AI-generated diagnostic summaries.',
      techStack: ['React', 'TypeScript', 'Claude API'],
    },
    {
      title: 'Live Chat',
      description: 'Real-time messaging with channels, authentication and saved conversations.',
      techStack: ['TypeScript', 'Fastify', 'WebSockets'],
    },
    {
      title: 'Web Hosting Infrastructure',
      description: 'Containerized web hosting with encrypted connections and persistent storage.',
      techStack: ['Docker', 'Nginx', 'MariaDB'],
    },
    {
      title: 'Multiplayer Pong',
      description: 'Real-time multiplayer gameplay with authentication and containerized deployment.',
      techStack: ['TypeScript', 'Fastify', 'WebSockets', 'Docker'],
    },
  ];

  const skills = [
    'Java', 'Spring Boot', 'REST APIs', 'Python',
    'React', 'TypeScript', 'SQL', 'PostgreSQL',
    'Docker', 'Kubernetes', 'Terraform', 'CI/CD',
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
                I build backend services, web applications and automated deployments.
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
                  View My Projects
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
                    "2026 graduate of UM6P’s 1337 School in Computer Science and Digital Technologies (RNCP Level 7).",
                    "Focused on backend development, full-stack applications and DevOps. Open to junior software engineering roles."
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
                <div className={`space-y-4 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>During my internship, I worked on backend service deployments and cloud infrastructure, helping the team make releases faster and more reliable. I identified services that could be deployed independently and changed a sequential workflow to run them in parallel, reducing its runtime by <strong>30%</strong>.</p>
                  <p>I also worked with senior engineers to design a <strong>blue/green release strategy</strong> for deploying updates without downtime. The team adopted it as its default deployment approach. Alongside this work, I developed and validated <strong>Terraform automation</strong> to make cloud infrastructure provisioning consistent and repeatable.</p>
                  <p>To support troubleshooting, I built an AI-assisted tool that analyzed application and deployment logs, identified failure signals and produced diagnostic summaries. This work gave me practical experience connecting backend services, deployment automation and operational tooling to help engineers release and maintain software.</p>
                </div>
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
                Selected backend, web and systems projects.
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

            <StaggerContainer className="grid md:grid-cols-2 auto-rows-fr gap-6">
              {[
                {
                  title: 'Software Engineer Certificate',
                  issuer: 'HackerRank',
                  description: 'Algorithms, data structures and software engineering.',
                  url: 'https://www.hackerrank.com/certificates/iframe/597cc4976d5f'
                },
                {
                  title: 'Machine Learning Bootcamp',
                  issuer: '1337 Coding School',
                  description: 'Machine learning fundamentals and practical Scikit-learn workflows.',
                  url: 'https://github.com/AyoubChraiti/Entry-Level-ML-Engineer-Bootcamp'
                },
                {
                  title: 'Intro to Data Science',
                  issuer: 'IBM SkillsBuild',
                  description: 'Foundations of data collection, processing and visualization.',
                  url: 'https://ayoubchraiti.github.io/Certificates/IBM-data-certificate.pdf'
                },
                {
                  title: 'Java & Python Certifications',
                  issuer: 'CodinGame',
                  description: 'Java and Python problem-solving certifications.',
                  url: undefined
                },
              ].map(({ title, issuer, description, url }, index) => (
                <StaggerItem key={index} className="h-full">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400"
                  >
                    <motion.div
                      className={`rounded-lg border p-6 sm:p-8 h-full min-h-[220px] flex flex-col items-start text-left transition-colors duration-300 ${
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
                      <div className="flex items-start justify-between gap-4 w-full min-h-[56px] mb-3">
                        <h3
                          className={`text-xl leading-7 font-semibold transition-colors duration-200 ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {title}
                        </h3>
                        {url && <ExternalLink
                          className={`w-5 h-5 shrink-0 mt-1 transition-colors duration-200 ${
                            theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                          }`}
                        />}
                      </div>
                      <p
                        className={`mb-3 text-sm transition-colors duration-200 ${
                          theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                        } font-medium`}
                      >
                        {issuer}
                      </p>
                      <p
                        className={`text-sm leading-relaxed transition-colors duration-200 ${
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
                Open to junior backend and full-stack roles. Let’s connect.
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