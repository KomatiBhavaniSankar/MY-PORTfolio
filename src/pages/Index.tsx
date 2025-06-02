
import { useState } from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import { Moon, Sun, Github, Mail, Linkedin, ExternalLink, Code, Award, BookOpen, MapPin, Calendar, GraduationCap, Briefcase, Star } from 'lucide-react';

const Index = () => {
  const [theme, setTheme] = useState('dark');
  const [activeSection, setActiveSection] = useState('home');
  const isMobile = useIsMobile();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "50+", label: "Projects" },
    { number: "15+", label: "Technologies" },
    { number: "100%", label: "Passion" }
  ];

  const contacts = [
    { icon: Mail, text: "kbsportfolio@email.com", href: "mailto:kbsportfolio@email.com" },
    { icon: Github, text: "github.com/kbs", href: "https://github.com" },
    { icon: Linkedin, text: "linkedin.com/in/kbs", href: "https://linkedin.com" }
  ];

  const aboutCards = [
    {
      icon: Code,
      title: "Developer",
      description: "Passionate about creating innovative solutions with clean, efficient code"
    },
    {
      icon: Award,
      title: "Problem Solver",
      description: "Love tackling complex challenges and finding creative solutions"
    },
    {
      icon: BookOpen,
      title: "Learner",
      description: "Always exploring new technologies and staying current with industry trends"
    }
  ];

  const skills = [
    {
      category: "Frontend",
      tags: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Vue.js", "Angular"]
    },
    {
      category: "Backend",
      tags: ["Node.js", "Python", "Express", "Django", "FastAPI", "PostgreSQL", "MongoDB", "Redis"]
    },
    {
      category: "Tools & Cloud",
      tags: ["Git", "Docker", "AWS", "Vercel", "Netlify", "Firebase", "Supabase", "Linux"]
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management",
      highlights: ["Real-time updates", "Payment integration", "Admin dashboard"],
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management with team features and analytics",
      highlights: ["Team collaboration", "Analytics", "Mobile responsive"],
      tech: ["Vue.js", "Python", "MongoDB", "WebSocket"],
      link: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather dashboard with detailed forecasts and maps",
      highlights: ["Interactive maps", "7-day forecast", "Location-based"],
      tech: ["TypeScript", "D3.js", "Express", "Weather API"],
      link: "#"
    }
  ];

  const timeline = [
    {
      type: "Experience",
      title: "Senior Frontend Developer",
      description: "Led development of user-facing applications serving 10k+ users daily"
    },
    {
      type: "Project",
      title: "Open Source Contributor",
      description: "Contributed to popular React libraries with 50+ merged pull requests"
    },
    {
      type: "Achievement",
      title: "Hackathon Winner",
      description: "First place in regional hackathon for innovative fintech solution"
    }
  ];

  const education = [
    {
      icon: GraduationCap,
      title: "Computer Science",
      institution: "University of Technology",
      field: "Bachelor's Degree",
      gpa: "GPA: 3.8/4.0",
      year: "2019-2023",
      location: "Tech City, TC"
    },
    {
      icon: Star,
      title: "Certifications",
      certifications: [
        { name: "AWS Solutions Architect", provider: "Amazon Web Services" },
        { name: "React Developer", provider: "Meta" },
        { name: "Full Stack Web Development", provider: "freeCodeCamp" }
      ]
    }
  ];

  return (
    <div className={`portfolio ${theme}`}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">KBS PORTFOLIO</div>
          
          <div className="nav-menu">
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'].map((item, index) => (
              <a
                key={item}
                className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                onClick={() => scrollToSection(item.toLowerCase())}
                style={{ '--index': index } as React.CSSProperties}
              >
                {item}
              </a>
            ))}
          </div>
          
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={isMobile ? 10 : 14} /> : <Moon size={isMobile ? 10 : 14} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-title">
            <h1 className="title-name">KBS</h1>
            <h2 className="title-role">Full Stack Developer</h2>
          </div>
          
          <p className="hero-description">
            Crafting digital experiences with passion, precision, and pixel-perfect design. 
            Specializing in modern web technologies and creating solutions that make a difference.
          </p>

          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="hero-contacts">
            {contacts.map((contact, index) => (
              <a key={index} href={contact.href} className="contact-item">
                <contact.icon size={isMobile ? 12 : 16} />
                <span>{contact.text}</span>
              </a>
            ))}
          </div>

          <button 
            className="cta-button"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            {aboutCards.map((card, index) => (
              <div key={index} className="about-card">
                <card.icon className="about-icon" />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-category">
                <h3>{skillGroup.category}</h3>
                <div className="skill-tags">
                  {skillGroup.tags.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <a href={project.link} className="project-link">
                    <ExternalLink size={isMobile ? 10 : 12} />
                  </a>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-highlights">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <span key={highlightIndex} className="highlight-item">{highlight}</span>
                  ))}
                </div>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="container">
          <h2 className="section-title">Experience & Achievements</h2>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="achievement-type">{item.type}</div>
                  <h3 className="achievement-title">{item.title}</h3>
                  <p className="achievement-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education-section">
        <div className="container">
          <h2 className="section-title">Education & Certifications</h2>
          <div className="education-grid">
            {education.map((item, index) => (
              <div key={index} className="education-card">
                <item.icon className="education-icon" />
                <h3>{item.title}</h3>
                {item.institution && (
                  <>
                    <div className="education-institution">{item.institution}</div>
                    <div className="education-field">{item.field}</div>
                    <div className="education-details">
                      <div className="education-gpa">{item.gpa}</div>
                      <div className="education-year">{item.year}</div>
                      <div className="education-location">{item.location}</div>
                    </div>
                  </>
                )}
                {item.certifications && (
                  <div className="certifications">
                    {item.certifications.map((cert, certIndex) => (
                      <div key={certIndex} className="cert-item">
                        <span className="cert-name">{cert.name}</span>
                        <span className="cert-provider">{cert.provider}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Work Together</h3>
              <p>
                Ready to bring your ideas to life? Let's discuss your next project 
                and create something amazing together.
              </p>
            </div>
            <div className="contact-methods">
              {contacts.map((contact, index) => (
                <a key={index} href={contact.href} className="contact-method">
                  <contact.icon className="contact-icon" />
                  <div>
                    <h4>Get In Touch</h4>
                    <p>{contact.text}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>© 2024 KBS Portfolio</p>
            <p>Built with React, TypeScript & Passion</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
