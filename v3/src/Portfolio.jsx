import React, { useState, useEffect } from 'react';
import { Mail, ExternalLink, ChevronDown, Menu, X, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: "HTML5", image: "/images/HTML5_Badge.png" },
    { name: "CSS3", image: "/images/CSS3_Badge.png" },
    { name: "JavaScript", image: "/images/JS_Badge.png" },
    { name: "React", image: "/images/react.png" },
    { name: "Java", image: "/images/java.png" },
    { name: "Spring Boot", image: "/images/spring_2.png" },
    { name: "PostgreSQL", image: "/images/postgres.png" },
    { name: "MongoDB", image: "/images/mongodb.png" },
  ];

  const projects = [
    {
      title: "Day-To-Day",
      description: "An Event Calendar with CRUD functionality. Users can sign up, then choose any date to create events. If there are events for that date, those events are displayed, and the user has the option to list the event as complete, which deletes the event from the database.",
      tech: ["React", "Spring Boot", "Postgres", "Docker", "AWS", "Figma"],
      image: "/images/projects/daytoday.PNG",
      github: "https://github.com/iqbalanwar/DayToDay",
    },
    {
      title: "Officey",
      description: "A Reddit-clone / social media application with CRUD functionality. Users can sign up, create posts, delete posts, create comments on those posts, and delete comments as well. The main page displays all posts and comments from all users, plus a profile view.",
      tech: ["HTML5", "CSS3", "JavaScript", "Spring Boot", "PostgreSQL", "Git"],
      image: "/images/logo.PNG",
      github: "https://github.com/iqbalanwar/Officey-Full-Stack",
    },
    {
      title: "SpotTunes",
      description: "A conceptual Spotify back-end using four data models: User, User_role, Song and Playlist. Users and roles are mapped one-to-many, and a Playlist join table connects user_id and song_id in a many-to-many relationship.",
      tech: ["Spring Boot", "PostgreSQL", "Git"],
      image: "/images/logo.PNG",
      github: "https://github.com/iqbalanwar/SpotTunes",
    },
    {
      title: "Rock-Paper-Scissors",
      description: "A straightforward Rock-Paper-Scissors game where users can play each other, or against a computer, in terminal. History of games during a play session is saved.",
      tech: ["Java"],
      image: "/images/projects/rps.jpg",
      github: "https://github.com/iqbalanwar/rock-paper-scissors",
    },
    {
      title: "Pixel Art",
      description: "A JavaScript pixel-art painting app. Color over the canvas by hovering over tiles based on your chosen color. Add a color swatch, and the app stores your current swatch along with your last three swatches for quick reuse.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/images/projects/pixelart2.png",
      github: "https://github.com/iqbalanwar/pixelart",
      live: "https://iqbalanwar.github.io/pixelart/",
    },
    {
      title: "Moi Inc",
      description: "A salon/barbershop booking app where users can sign in and make appointments with a hair specialist of their preference. The app has since sunsetted and is no longer available publicly.",
      tech: ["React", "HTML", "Bootstrap", "JavaScript", "Rails", "MongoDB"],
      image: "/images/logo.PNG",
      github: null,
    },
  ];

  return (
    <div className="min-h-screen bg-royal-white text-forest">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white-chocolate/90 backdrop-blur-lg border-b border-super-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-forest to-chinese-gold bg-clip-text text-transparent">
              Iqbal Anwar
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors hover:text-chinese-gold ${
                    activeSection === item.toLowerCase() ? 'text-chinese-gold' : 'text-forest/80'
                  }`}
                >
                  {item}
                </button>
              ))}
              <a
                href="/files/iqbal_anwar_resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 transition-colors hover:text-chinese-gold text-forest/80"
              >
                <FileText className="w-4 h-4" /> Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-forest"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white-chocolate/95 backdrop-blur-lg border-t border-super-gold/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-2 w-full text-left text-forest/80 hover:text-chinese-gold transition-colors"
                >
                  {item}
                </button>
              ))}
              <a
                href="/files/iqbal_anwar_resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="block px-3 py-2 w-full text-left text-forest/80 hover:text-chinese-gold transition-colors"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-forest-dark via-forest to-forest-light"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-super-gold to-chinese-gold bg-clip-text text-transparent">
            Iqbal Anwar
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-white-chocolate/80 font-mono">
            {'{ Full-Stack Software Engineer }'}
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://linkedin.com/in/iqbalaanwar" target="_blank" rel="noreferrer" className="text-white-chocolate/80 hover:text-super-gold transition-colors transform hover:scale-110">
              <FaLinkedin className="w-8 h-8" />
            </a>
            <a href="https://github.com/iqbalanwar" target="_blank" rel="noreferrer" className="text-white-chocolate/80 hover:text-super-gold transition-colors transform hover:scale-110">
              <FaGithub className="w-8 h-8" />
            </a>
            <a href="mailto:iqbalaanwar@gmail.com" className="text-white-chocolate/80 hover:text-super-gold transition-colors transform hover:scale-110">
              <Mail className="w-8 h-8" />
            </a>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="bg-gradient-to-r from-super-gold to-chinese-gold text-forest px-8 py-3 rounded-full font-bold hover:brightness-105 transition-all transform hover:scale-105 shadow-lg shadow-chinese-gold/20"
          >
            View My Work
          </button>
          <div className="mt-10">
            <button onClick={() => scrollToSection('about')} className="animate-bounce">
              <ChevronDown className="w-8 h-8 text-super-gold" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-forest to-chinese-gold bg-clip-text text-transparent">
            &lt; About Me &gt;
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg text-forest/80 mb-6">
                With a background in Applied Math, ongoing Masters Degree in Data Science, and several years of professional 
                experience as a Software Engineer, I bring both practical engineering expertise and analytical rigor to the 
                development process. My statistical analysis knowledge combined with functional programming builds quality, 
                scalable applications. 
                - I'm eager to continue learning and growing!
                Please reach out and let's talk about how my experience can best suit your team.
              </p>
              <p className="text-lg text-forest/80 mb-8">
                Expertise in building scalable backend systems using Java Spring Boot, C#/.NET Core, and Python
                with extensive experience integrating Large Language Models (LLMs) into telecommunication platforms (IVRs). 
                Proven track record in developing AI-powered IVR solutions on Google Cloud Platform and Azure with advanced 
                analytics and monitoring capabilities.
              </p>
              <a
                href="/files/iqbal_anwar_resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-gradient-to-r from-super-gold to-chinese-gold text-forest px-8 py-3 rounded-full font-bold hover:brightness-105 transition-all transform hover:scale-105 shadow-lg shadow-chinese-gold/20"
              >
                Download Resume
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-royal-white rounded-xl p-4 border border-forest/10 hover:border-super-gold/60 shadow-sm transition-all flex flex-col items-center gap-2"
                >
                  <img src={skill.image} alt={skill.name} className="w-12 h-12 object-contain" />
                  <p className="text-sm text-forest/80 text-center">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-solitaire">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-forest to-chinese-gold bg-clip-text text-transparent">
            &lt; Projects &gt;
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-royal-white rounded-xl overflow-hidden border border-forest/10 hover:border-super-gold/60 shadow-sm transition-all transform hover:scale-105 group flex flex-col">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300 bg-white-chocolate"
                />
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-forest">{project.title}</h3>
                  <p className="text-forest/70 mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-gradient-to-r from-forest-dark via-forest to-forest-light text-white-chocolate px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center text-forest/70 hover:text-chinese-gold transition-colors"
                      >
                        <FaGithub className="w-4 h-4 mr-1" /> Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center text-forest/70 hover:text-chinese-gold transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" /> Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-forest to-chinese-gold bg-clip-text text-transparent">
            You can reach me here...
          </h2>
          <p className="text-forest/70 mb-10">
            I'm always interested in new opportunities and exciting projects. Whether you have a
            question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="flex justify-center space-x-8 mb-6">
            <a href="https://linkedin.com/in/iqbalaanwar" target="_blank" rel="noreferrer" className="text-forest/70 hover:text-chinese-gold transition-colors transform hover:scale-110">
              <FaLinkedin className="w-8 h-8" />
            </a>
            <a href="https://github.com/iqbalanwar" target="_blank" rel="noreferrer" className="text-forest/70 hover:text-chinese-gold transition-colors transform hover:scale-110">
              <FaGithub className="w-8 h-8" />
            </a>
            <a href="mailto:iqbalaanwar@gmail.com" className="text-forest/70 hover:text-chinese-gold transition-colors transform hover:scale-110">
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-forest/10 bg-white-chocolate">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-forest/50">
            © 2026 Iqbal Anwar. Built with React.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
