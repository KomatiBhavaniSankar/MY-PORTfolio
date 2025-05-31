
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Award, GraduationCap, Briefcase, Code, User, Moon, Sun } from 'lucide-react';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
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
  };

  const skills = {
    languages: ['Python', 'C', 'SQL', 'JavaScript', 'R', 'C#'],
    frontend: ['HTML', 'CSS', 'ReactJS', 'NextJS', 'Tailwind CSS', 'Bootstrap'],
    backend: ['NodeJS', 'Django', 'ExpressJS', 'PHP'],
    databases: ['MongoDB', 'MySQL', 'PostgreSQL'],
    tools: ['Git', 'GitHub', 'AWS S3', 'MetaMask', 'EmailJS', 'Streamlit'],
    libraries: ['TensorFlow', 'NumPy', 'Pandas', 'Keras', 'Ethers.js']
  };

  const projects = [
    {
      title: "Natural Disaster Prediction Model",
      description: "Developed a model using satellite imagery to classify disasters like hurricanes and wildfires with TensorFlow & Keras.",
      tech: ["TensorFlow", "Keras", "OpenWeatherMap API", "Streamlit"],
      github: "https://github.com/KomatiBhavaniSankar/Natural-Disasters-Prediction-using-satellite--images",
      highlights: ["Satellite Disaster Classification", "Real-Time Weather Data Integration", "Scalable Interactive Solution"]
    },
    {
      title: "LikeStream – Blogging Platform",
      description: "Developed a platform with user authentication, AWS S3 integration, and community features increasing user interaction by 15%.",
      tech: ["Django", "AWS S3", "PostgreSQL", "GitHub"],
      github: "https://github.com/KomatiBhavaniSankar/LikeStream",
      highlights: ["User Authentication", "AWS S3 Integration", "Community Features"]
    },
    {
      title: "Stock Price Prediction with ML",
      description: "Developed an LSTM-based model with 75% accuracy for stock price prediction, deployed via Streamlit.",
      tech: ["TensorFlow", "NumPy", "Pandas", "Matplotlib", "Streamlit"],
      github: "https://github.com/KomatiBhavaniSankar/STOCK-price-Prediction-ML-",
      highlights: ["75% Model Accuracy", "Real-time Predictions", "50+ Active Users"]
    },
    {
      title: "EffiPay - DApp for Batch Payment",
      description: "Processes multiple payments in a single blockchain transaction with Solidity smart contracts and blacklisting mechanism.",
      tech: ["React.js", "Next.js", "Solidity", "Foundry", "MetaMask", "EmailJS"],
      github: "https://github.com/KomatiBhavaniSankar/EffiPay",
      highlights: ["Efficient Blockchain Transactions", "Security & Blacklist Mechanism", "Smart Contract Integration"]
    },
    {
      title: "Med-Trust: Blockchain Health Records",
      description: "Decentralized application for encrypted health record storage and sharing on Ethereum with secure PDF export.",
      tech: ["ReactJS", "Tailwind CSS", "Solidity", "Ethers.js", "MetaMask", "EmailJS"],
      github: "https://github.com/KomatiBhavaniSankar/Med-Trust-Blockchain-for-Secure-Health-Records-and-Share",
      highlights: ["Encrypted Health Records", "Search by Record ID", "Email Notifications"]
    },
    {
      title: "Full-Stack Book Management App",
      description: "MERN stack application with complete CRUD operations managing 100+ book entries with real-time updates.",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
      github: "https://github.com/KomatiBhavaniSankar/MERN-BOOK-LIST-PROJECT",
      highlights: ["CRUD Functionality", "100+ Book Entries", "Real-time Updates"]
    }
  ];

  const achievements = [
    {
      title: "Megathon 2024, IIIT Hyderabad",
      description: "Achieved top 4 position working on natural disaster prediction using satellite data.",
      type: "Hackathon"
    },
    {
      title: "FOSS Hack 2024, GITAM University",
      description: "Developed LikeStream blogging platform using Django.",
      type: "Hackathon"
    },
    {
      title: "MRU National Level 24-hour Hackathon",
      description: "Created a medical chatbot for triage using PHP and MySQL.",
      type: "Hackathon"
    },
    {
      title: "Tech Team Lead - VIVENCIA 2K25",
      description: "Led tech team to develop fest website used by 700+ participants.",
      type: "Leadership"
    }
  ];

  return (
    <div className={`portfolio ${darkMode ? 'dark' : 'light'}`}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
            Bhavani Sankar
          </div>
          <div className="nav-menu">
            {['hero', 'about', 'skills', 'projects', 'experience', 'education', 'contact'].map((section) => (
              <button
                key={section}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
                onClick={() => scrollToSection(section)}
              >
                {section}
              </button>
            ))}
            <button
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-name">Komati Bhavani Sankar</span>
              <span className="title-role">Full Stack Developer</span>
            </h1>
            <p className="hero-description">
              🎮 Passionate developer specializing in web technologies, machine learning, and blockchain solutions. 
              Creating innovative digital experiences with modern tech stacks! ⚡
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">6+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Top 4</span>
                <span className="stat-label">Hackathon</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">8.65</span>
                <span className="stat-label">GPA</span>
              </div>
            </div>
            <div className="hero-contacts">
              <a href="mailto:bhavanisankarkomati@gmail.com" className="contact-item">
                <Mail size={20} />
                <span>bhavanisankarkomati@gmail.com</span>
              </a>
              <a href="tel:6302130735" className="contact-item">
                <Phone size={20} />
                <span>6302130735</span>
              </a>
              <a href="https://github.com/KomatiBhavaniSankar" className="contact-item" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
                <span>GitHub Profile</span>
              </a>
              <a href="https://www.linkedin.com/in/bhavani-sankar-komati" className="contact-item" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
                <span>LinkedIn Profile</span>
              </a>
            </div>
            <button
              className="cta-button"
              onClick={() => scrollToSection('projects')}
            >
              ▶ Start Game
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-card">
              <User className="about-icon" />
              <h3>Professional Profile</h3>
              <p>
                Computer Science student at Malla Reddy College of Engineering & Technology with a strong foundation 
                in full-stack development, machine learning, and blockchain technologies. Experienced in leading 
                technical teams and delivering scalable solutions.
              </p>
            </div>
            <div className="about-card">
              <Code className="about-icon" />
              <h3>Technical Expertise</h3>
              <p>
                Proficient in modern web technologies including React, Next.js, Django, and Node.js. Specialized 
                in machine learning with TensorFlow and blockchain development with Solidity. Strong background 
                in database management and cloud services.
              </p>
            </div>
            <div className="about-card">
              <Briefcase className="about-icon" />
              <h3>Project Focus</h3>
              <p>
                Passionate about building impactful solutions in healthcare, finance, and disaster prediction. 
                Experience in developing secure, scalable applications that serve real-world needs and improve 
                user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Languages</h3>
              <div className="skill-tags">
                {skills.languages.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-tags">
                {skills.frontend.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-tags">
                {skills.backend.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Databases</h3>
              <div className="skill-tags">
                {skills.databases.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Platforms</h3>
              <div className="skill-tags">
                {skills.tools.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Libraries & Frameworks</h3>
              <div className="skill-tags">
                {skills.libraries.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">Notable Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={project.title} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-highlights">
                  {project.highlights.map((highlight) => (
                    <span key={highlight} className="highlight-item">{highlight}</span>
                  ))}
                </div>
                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
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
          <h2 className="section-title">Achievements & Experience</h2>
          <div className="timeline">
            {achievements.map((achievement, index) => (
              <div key={achievement.title} className="timeline-item" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="achievement-type">{achievement.type}</div>
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <p className="achievement-description">{achievement.description}</p>
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
            <div className="education-card">
              <GraduationCap className="education-icon" />
              <h3>Bachelor of Technology</h3>
              <p className="education-institution">Malla Reddy College of Engineering & Technology</p>
              <p className="education-field">Computer Science</p>
              <p className="education-details">
                <span className="education-gpa">GPA: 8.65</span>
                <span className="education-year">2023-2027</span>
                <span className="education-location">Hyderabad, IND</span>
              </p>
            </div>
            <div className="education-card">
              <Award className="education-icon" />
              <h3>Certifications</h3>
              <div className="certifications">
                <div className="cert-item">
                  <span className="cert-name">Career Essentials in Generative AI</span>
                  <span className="cert-provider">Microsoft & LinkedIn</span>
                </div>
                <div className="cert-item">
                  <span className="cert-name">Introduction to Django</span>
                  <span className="cert-provider">Infosys Springboard</span>
                </div>
                <div className="cert-item">
                  <span className="cert-name">Introduction to MySQL</span>
                  <span className="cert-provider">Infosys Springboard</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <p>
                I'm always interested in new opportunities and exciting projects. 
                Feel free to reach out if you'd like to collaborate or just have a chat!
              </p>
              <div className="contact-methods">
                <a href="mailto:bhavanisankarkomati@gmail.com" className="contact-method">
                  <Mail className="contact-icon" />
                  <div>
                    <h4>Email</h4>
                    <p>bhavanisankarkomati@gmail.com</p>
                  </div>
                </a>
                <a href="tel:6302130735" className="contact-method">
                  <Phone className="contact-icon" />
                  <div>
                    <h4>Phone</h4>
                    <p>+91 6302130735</p>
                  </div>
                </a>
                <a href="https://github.com/KomatiBhavaniSankar" target="_blank" rel="noopener noreferrer" className="contact-method">
                  <Github className="contact-icon" />
                  <div>
                    <h4>GitHub</h4>
                    <p>KomatiBhavaniSankar</p>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/bhavani-sankar-komati" target="_blank" rel="noopener noreferrer" className="contact-method">
                  <Linkedin className="contact-icon" />
                  <div>
                    <h4>LinkedIn</h4>
                    <p>bhavani-sankar-komati</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2024 Komati Bhavani Sankar. All rights reserved.</p>
            <p>Built with React & Pokémon-inspired Pixel Art ⚡</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
