import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Menu, X, Code, Palette, Zap } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formStatus, setFormStatus] = useState('');

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Handle scroll for active section highlighting
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

  // Handle form submission
  const handleSubmit = async () => {
    const nameInput = document.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const messageInput = document.querySelector('textarea[name="message"]');
    
    if (!nameInput.value || !emailInput.value || !messageInput.value) {
      setFormStatus('error');
      return;
    }
    
    const formData = new FormData();
    formData.append('access_key', 'YOUR_ACCESS_KEY_HERE'); // Replace with your Web3Forms access key
    formData.append('name', nameInput.value);
    formData.append('email', emailInput.value);
    formData.append('message', messageInput.value);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        setFormStatus('success');
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
    
    setTimeout(() => setFormStatus(''), 5000);
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates.",
      tech: ["Vue.js", "Firebase", "Vuetify"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A beautiful weather dashboard with location-based forecasts and charts.",
      tech: ["React", "Chart.js", "OpenWeather API"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      github: "#",
      live: "#"
    }
  ];

  const skills = [
    { name: "Frontend", icon: <Code className="w-8 h-8" />, items: ["React", "Vue.js", "TypeScript", "Tailwind CSS"] },
    { name: "Backend", icon: <Zap className="w-8 h-8" />, items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
    { name: "Design", icon: <Palette className="w-8 h-8" />, items: ["Figma", "Adobe XD", "UI/UX", "Prototyping"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Portfolio
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors hover:text-emerald-400 ${
                    activeSection === item.toLowerCase() ? 'text-emerald-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block px-3 py-2 w-full text-left hover:text-emerald-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-cyan-600/10"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            John Doe
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Full Stack Developer & UI/UX Designer
          </p>
          <p className="text-lg mb-12 text-gray-400 max-w-2xl mx-auto">
            I create beautiful, functional web experiences that solve real-world problems. 
            Passionate about clean code, innovative design, and user-centered solutions.
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors transform hover:scale-110">
              <Github className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors transform hover:scale-110">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors transform hover:scale-110">
              <Mail className="w-8 h-8" />
            </a>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce"
          >
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6">
                I'm a passionate full-stack developer with 5+ years of experience creating 
                digital experiences that make a difference. I love turning complex problems 
                into simple, beautiful solutions.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open source projects, or enjoying a good cup of coffee while sketching 
                out my next big idea.
              </p>
              <button className="bg-gradient-to-r from-emerald-500 to-cyan-600 px-8 py-3 rounded-full font-semibold hover:from-emerald-600 hover:to-cyan-700 transition-all transform hover:scale-105 shadow-lg">
                Download Resume
              </button>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-emerald-400/50 transition-all">
                  <div className="flex items-center mb-4">
                    <div className="text-emerald-400 mr-4">{skill.icon}</div>
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span key={i} className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:border-emerald-400/50 transition-all transform hover:scale-105 group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={project.github} 
                      className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-1" /> Code
                    </a>
                    <a 
                      href={project.live} 
                      className="flex items-center text-gray-300 hover:text-emerald-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" /> Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's work together</h3>
              <p className="text-gray-300 mb-6">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-emerald-400" />
                  <span className="text-gray-300">john@example.com</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-emerald-400 focus:outline-none transition-colors text-white placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-emerald-400 focus:outline-none transition-colors text-white placeholder-gray-400"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-emerald-400 focus:outline-none transition-colors text-white placeholder-gray-400 resize-none"
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-emerald-500 to-cyan-600 px-8 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-cyan-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
              
              {formStatus === 'success' && (
                <p className="text-green-400 text-center">Message sent successfully!</p>
              )}
              {formStatus === 'error' && (
                <p className="text-red-400 text-center">Error sending message. Please try again.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-400">
            © 2025 John Doe. Built with React & deployed on GitHub Pages.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;