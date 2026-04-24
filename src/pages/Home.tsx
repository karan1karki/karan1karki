// import { useState } from 'react'
import { CiDark , CiLight } from "react-icons/ci"
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"
import { FaStar, FaTrophy, FaAward, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"
import React from 'react'
import { useState } from 'react'
interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    technologies: string[];
    githubUrl?: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Stock Management System",
        description: "An inventory management system for tracking stock levels, sales, and generating reports for business optimization.",
        image: "/images/stocksx.png",
        technologies: ["Laravel", "PHP", "MySQL", "Chart.js"],
        githubUrl: "https://github.com",
    },
    {
        id: 2,
        title: "Student Performance",
        description: "An analytics dashboard for tracking and analyzing student performance across various subjects and semesters.",
        image: "/images/student.png",
        technologies: ["python","scikit-learn", "pandas"],
        githubUrl: "https://github.com/karan1karki/Student_Performance",
    },
    {
        id: 3,
        title: "Car Selling Prediction",
        description: "A machine learning model that predicts car selling prices based on various features like mileage, age, and condition.",
        image: "/images/carselling.png",
        technologies: ["Python", "Scikit-learn", "Pandas", "Flask"],
        githubUrl: "https://github.com/karan1karki/car_selling_prediction",
    },
    {
        id: 4,
        title: "AI Travel Planner",
        description: "An intelligent travel planning application that uses AI to create personalized itineraries based on user preferences, budget, and travel history.",
        image: "src//images/aitravel.png",
        technologies: ["React", "Python", "AI/ML", "Node.js"],
        githubUrl: "https://github.com/karan1karki/AITravel",
    },
    {
        id: 5,
        title: "Nepal Blood Bank",
        description: "A comprehensive blood bank management system for Nepal that connects donors with hospitals and manages blood inventory efficiently.",
        image: "/images/blood.png",
        technologies: ["PHP", "MySQL", "JavaScript"],
        githubUrl: "https://github.com/karan1karki/Blood_Bank",
    },
    {
        id: 6,
        title: "College Management System",
        description: "A complete college management solution handling student records, attendance, grades, and administrative tasks.",
        image: "/images/unknown.png",
        technologies: ["React", "Django", "MySQL", "Python"],
        githubUrl: "https://github.com/karan1karki/collegemanagement",
    },
    {
        id: 7,
        title: "Emotion Detection",
        description: "A computer vision application that detects human emotions from facial expressions using deep learning.",
        image: "/images/emotion.png",
        technologies: ["Python", "OpenCV", "TensorFlow", "Flask"],
        githubUrl: "https://github.com/karan1karki/emotion_detection",
    },
    {
        id: 8,
        title: "SRE Granite Ops",
        description: "Site reliability engineering tools and operations platform for monitoring and maintaining system reliability.",
        image: "/images/granite.png",
        technologies: ["Go", "Kubernetes", "Prometheus", "Grafana"],
        githubUrl: "https://github.com/karan1karki/Gronite_Ops",
    }
];

interface achivements {
    id : number;
    role : string;
    start_date : string;
    end_date : string;
    company_name : string;
    image : string;
}

interface Events {
    id : number;
    role : string;
    start_date : string;
    end_date : string;
    company_name : string;
    project_title : string;
    image : string;
}

const achivement : achivements [] = [
    {
        id : 1,
        role : "Full Stack web developer",
        start_date : "2025/11/12",
        end_date : "2026/02/12",
        company_name : "CodeIT Pvt. Ltd.",
        image : "/images/achivements/internship_karan.jpg"
    },
    {
        id : 2,
        role : "Full Stack Web developer",
        start_date : "2024/01/04",
        end_date : "2024/06/04",
        company_name : "Spell Innovation Pvt. Ltd.",
        image : "src//images/achivements/spell_inovation.jpg"
    },
]

const Event : Events [] = [
    {
        id : 1,
        role : "Hackathon",
        start_date : "",
        end_date : " ",
        company_name : "IT Skills Training Nepal",
        project_title : "Fake News Detection",
        image  : "/images/achivements/hackathon.jpeg"
    },
    {
        id : 2,
        role : "Hackathon",
        start_date : "",
        end_date : "",
        company_name : "IBM DEV DAYS",
        project_title : "SRE Granite Ops",
        image : "/images/unknown.png"
    },
    {
        id : 3,
        role : "Data Science",
        start_date : "2025/05/01",
        end_date : "2025/05/29",
        company_name : "Code IT Pvt. Ltd.",
        project_title : "_ _ - _ _",
        image  : "/images/achivements/Data_science_certificate.jpg"
    },
    {
        id : 4,
        role : "IT Enterpreneurship & Leadership",
        start_date : "2025/05/01",
        end_date : "2025/05/29",
        company_name : "GP Koirala foundation",
        project_title : "_ _ - _ _",
        image  : "/images/achivements/gpfoundation.jpeg"
    },


]
interface Skill {
    id: number;
    name: string;
    category: string;
    level: number;
}

const skills: Skill[] = [
    // Frontend
    { id: 1, name: 'HTML5', category: 'Frontend', level: 95 },
    { id: 2, name: 'CSS3', category: 'Frontend', level: 90 },
    { id: 3, name: 'JavaScript', category: 'Frontend', level: 92 },
    { id: 4, name: 'React.js', category: 'Frontend', level: 88 },
    { id: 5, name: 'TypeScript', category: 'Frontend', level: 85 },
    { id: 6, name: 'Tailwind CSS', category: 'Frontend', level: 87 },
    // Backend
    { id: 7, name: 'PHP', category: 'Backend', level: 90 },
    { id: 8, name: 'Laravel', category: 'Backend', level: 88 },
    { id: 9, name: 'Python', category: 'Backend', level: 85 },
    { id: 10, name: 'Django', category: 'Backend', level: 82 },
    { id: 11, name: 'Node.js', category: 'Backend', level: 40 },
    { id: 12, name: 'Express.js', category: 'Backend', level: 40 },
    // Database
    { id: 13, name: 'MySQL', category: 'Database', level: 88 },
    { id: 14, name: 'PostgreSQL', category: 'Database', level: 85 },
    { id: 15, name: 'MongoDB', category: 'Database', level: 30 },
    // Tools & Others
    { id: 16, name: 'Git', category: 'Tools', level: 90 },
    { id: 17, name: 'Docker', category: 'Tools', level: 65 },
    { id: 18, name: 'REST API', category: 'Tools', level: 75 },
    { id: 19, name: 'Machine Learning', category: 'AI/ML', level: 78 },
    { id: 20, name: 'TensorFlow', category: 'AI/ML', level: 75 }
]
export default function Home () {
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: '' }
    });

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(prev => ({ ...prev, submitting: true }));

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xpqkjegj', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: '✅ Message sent successfully!' }
        });
        form.reset();
      } else {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: true, msg: '❌ Failed to send message. Please try again.' }
        });
      }
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: '❌ Something went wrong. Please try again later.' }
      });
    }
  };

    const [isDark, setIsDark] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [showAllProjects, setShowAllProjects] = useState(false);
    const [selectAchivement, setselectAchivement] = useState<achivements |null>(null);
    const [selectedEvent, setSelectedEvent] = useState <Events | null > (null);

    const displayedProjects = showAllProjects ? projects : projects.slice(0, 6);

    return (
        <div className={`page-wrapper ${isDark ? 'dark' : ''}`}>
            <div>
                <nav className="nav-items" aria-label="Primary navigation">
                    <h1 className='hero-name'>Karan's Portfolio</h1>
                    <ul className="nav-list">
                        <li><a href="/">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li>
                            <a href="#skills" className="nav-with-badge">
                                Skills
                                <span className="nav-badge">{skills.length}</span>
                            </a>
                        </li>
                        <li>
                            <a href="#achievements" className="nav-with-badge">
                                Achievements
                                <span className="nav-badge achievements-badge">{achivement.length}</span>
                                {/* <FaTrophy className="badge-icon" /> */}
                            </a>
                        </li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <div className="nav-social">
                        <button className="nav-resume">
                            <a className="resume_nav" href="/images/cv.pdf" download="Karan_Resume.pdf">Resume</a>
                        </button>
                    </div>
                    <button className="nav-theme-toggle" type="button" aria-label="Toggle theme" onClick={() => setIsDark(!isDark)}>
                        {isDark ? <CiLight /> : <CiDark />}
                    </button>
                </nav>
            </div>
            <div className='hero'>
                <div className='hero-body'>
                    <h5 className='hero-name'>Welcome to Karan karki portfolio</h5>
                </div>
                <img src="./images/images/images.jpeg" alt="Hero background" className="hero-image"/>
                <div className='scroll-indicator'>
                    <a href='#about' className='scroll-arrow' aria-label='Scroll down'>
                        <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                            <polyline points='6 9 12 15 18 9'></polyline>
                        </svg>
                    </a>
                </div>
            </div>
            <section id='about' className='about-section'>
                <div className='about-inner'>
                    <div className='about-card about-intro'>
                        <span className='section-label'>About Me</span>
                        <h2 className='about-title'>Crafting modern web experiences with clean, scalable code.</h2>
                        <p className='about-text'>
                            Full Stack Web Developer with practical experience in backend development,
                            database design, security implementation, and bug resolution. Proficient in HTML5,
                            CSS, PHP/Laravel, Python, Git, and JavaScript frameworks such as Alpine.js, AJAX, and React.js.
                            Demonstrated ability to lead web development projects and deliver efficient,
                            scalable solutions within tight deadlines.
                        </p>
                        <div className='about-actions'>
                            <a href='#projects' className='button primary'>View Projects</a>
                            <a href='#contact' className='button secondary'>Let’s Connect</a>
                        </div>
                    </div>
                    <div className='about-card about-details'>
                        <div className='about-detail'>
                            <h3>10+</h3>
                            <p>Projects delivered</p>
                        </div>
                        <div className='about-detail'>
                            <h3>Web & Mobile</h3>
                            <p>React, Laravel, Flutter,Django</p>
                        </div>
                        <div className='about-detail'>
                            <h3>Problem Solver</h3>
                            <p>Performance, security, UX</p>
                        </div>
                        <div className='about-detail'>
                            <h3>BCA Student</h3>
                            <p>Bachelor of computer application</p>
                        </div>
                    </div>
                </div> 
            </section>
            <section id="projects" className='projects-section'>
                <div className='projects-container'>
                    <h1>Projects</h1>
                    <div className="projects-grid">
                        {displayedProjects.map((project) => (
                            <div key={project.id} className="project-card" onClick={() => setSelectedProject(project)}>
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} />
                                </div>
                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description.substring(0, 100)}...</p>
                                    <div className="project-tech">
                                        {project.technologies.slice(0, 3).map((tech) => (
                                            <span key={tech} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {projects.length > 6 && (
                        <div className="see-more-container">
                            <button 
                                className="button primary see-more-btn"
                                onClick={() => setShowAllProjects(!showAllProjects)}
                            >
                                {showAllProjects ? 'Show Less' : 'See More Projects'}
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Project Modal */}
            {selectedProject && (
                <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
                        <div className="modal-image">
                            <img src={selectedProject.image} alt={selectedProject.title} />
                        </div>
                        <div className="modal-details">
                            <h2>{selectedProject.title}</h2>
                            <p className="modal-description">{selectedProject.description}</p>
                            <div className="modal-tech">
                                <h3>Technologies Used:</h3>
                                <div className="tech-list">
                                    {selectedProject.technologies.map((tech) => (
                                        <span key={tech} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="modal-actions">
                                {selectedProject.githubUrl && (
                                    <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="button secondary">
                                        View Code
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Skills section */}
            <section id='skills' className='skills-section'>
                <div className='skills-container'>
                    <h1>Skills & Expertise</h1>                    
                    <div className='skills-wrapper'>
                        {['Frontend', 'Backend', 'Database', 'Tools', 'AI/ML'].map((category) => (
                            <div key={category} className='skill-category'>
                                <h3 className='category-title'>{category}</h3>
                                <div className='skills-scroll-container'>
                                    {skills.filter(s => s.category === category).map((skill) => (
                                        <div key={skill.id} className='skill-card'>
                                            <div className='skill-header'>
                                                <h4>{skill.name}</h4>
                                                <span className='skill-level'>{skill.level}%</span>
                                            </div>
                                            <div className='skill-bar'>
                                                <div className='skill-progress' style={{ width: `${skill.level}%` }}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements section */}
            <section id='achievements' className='achievements-section'>
                <div className='achievements-container'>
                    <h1>Achievements & Experience</h1>
                    
                    <div className='achievements-scroll-container'>
                        {achivement.map((achievement) => (
                            <div key={achievement.id} className='achievement-card' onClick={() => setselectAchivement(achievement)}>
                                <div className='achievement-icon'>
                                    <FaAward />
                                </div>
                                <div className='achievement-content'>
                                    <h3>{achievement.role}</h3>
                                    <p className='company-name'>
                                        <FaTrophy className='company-icon' />
                                        {achievement.company_name}
                                    </p>
                                    <div className='date-range'>
                                        <span className='date-badge'>
                                            {new Date(achievement.start_date).toLocaleDateString('en-US', { 
                                                year: 'numeric', 
                                                month: 'short' 
                                            })}
                                        </span>
                                        <span className='date-separator'>→</span>
                                        <span className='date-badge'>
                                            {new Date(achievement.end_date).toLocaleDateString('en-US', { 
                                                year: 'numeric', 
                                                month: 'short' 
                                            })}
                                        </span>
                                    </div>
                                </div>
                                <div className='achievement-star'>
                                    <FaStar className='star-icon' />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {selectAchivement && (
                    <div className="modal-overlay" onClick={() => setselectAchivement(null)}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close" onClick={() => setselectAchivement(null)}>×</button>
                            <div className="modal-image achivement_image">
                                <img src={selectAchivement.image} alt={selectAchivement.role} />
                            </div>
                        </div>
                    </div>
                )};
                 <div className='achievements-container'>
                    <h1>Participation & Events</h1>                    
                    <div className='achievements-scroll-container'>
                        {Event.map((Event) => (
                            <div key={Event.id} className='achievement-card' onClick={() => setSelectedEvent(Event)}>
                                <div className='achievement-icon'>
                                    <FaAward />
                                </div>
                                <div className='achievement-content'>
                                    <h3>{Event.role}</h3>
                                    <p className='company-name'>
                                        <FaTrophy className='company-icon' />
                                        {Event.company_name}
                                    </p>
                                    <p className='company-name'>
                                        <FaTrophy className='company-icon' />
                                        {Event.project_title}
                                    </p>
                                    <div className='date-range'>
                                        <span className='date-badge'>
                                            {new Date(Event.start_date).toLocaleDateString('en-US', { 
                                                year: 'numeric', 
                                                month: 'short' 
                                            })}
                                        </span>
                                        <span className='date-separator'>→</span>
                                        <span className='date-badge'>
                                            {new Date(Event.end_date).toLocaleDateString('en-US', { 
                                                year: 'numeric', 
                                                month: 'short' 
                                            })}
                                        </span>
                                    </div>
                                </div>
                                <div className='achievement-star'>
                                    <FaStar className='star-icon' />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {selectedEvent && (
                    <div className="modal-overlay" onClick={() => setSelectedEvent(null)}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close" onClick={() => setSelectedEvent(null)}>×</button>
                            <div className="modal-image achivement_image">
                                <img src={selectedEvent.image} alt={"Loading..."} />
                            </div>
                        </div>
                    </div>
                )};
            </section>

            {/* Contact section */}
            <section id='contact' className='contact-section'>
                <div className='contact-container'>
                    <h1>Get In Touch</h1>
                    <p className='section-subtitle'>Let's connect and create something amazing together</p>
                    
                    <div className='contact-wrapper'>
                        <div className='contact-info'>
                            <div className='contact-card'>
                                <div className='contact-icon'>
                                    <FaMapMarkerAlt />
                                </div>
                                <div className='contact-details'>
                                    <h3>Location</h3>
                                    <p>Kathmandu, Nepal</p>
                                </div>
                            </div>

                            <div className='contact-card'>
                                <div className='contact-icon'>
                                    <FaPhone />
                                </div>
                                <div className='contact-details'>
                                    <h3>Phone</h3>
                                    <a href='tel:+977-1234567890'>+977 9863022109</a>
                                </div>
                            </div>

                            <div className='contact-card'>
                                <div className='contact-icon'>
                                    <FaEnvelope />
                                </div>
                                <div className='contact-details'>
                                    <h3>Email</h3>
                                    <a href='mailto:karankarki199@gmail.com'>karankarki199@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        <div className='contact-form-wrapper'>
                            <form className='contact-form' onSubmit={handleSubmit}>
                                <div className='form-group'>
                                    <input 
                                        type='text' 
                                        name="name"
                                        placeholder='Your Name' 
                                        required
                                        className='form-input'
                                    />
                                </div>

                                <div className='form-group'>
                                    <input 
                                        type='email'
                                        name="email" 
                                        placeholder='Your Email' 
                                        required
                                        className='form-input'
                                    />
                                </div>

                                <div className='form-group'>
                                    <textarea 
                                        placeholder='Your Message'
                                        name="message" 
                                        rows={5}
                                        required
                                        className='form-textarea'
                                    ></textarea>
                                </div>

                                <button type='submit' disabled={status.submitting} className='button primary form-button'>
                                    {status.submitting ? 'Sending...' : 'Send Message'}
                                </button>
                                {status.info.msg && (
                                    <p className={`text-center mt-4 ${status.info.error ? 'text-red-500' : 'text-green-500'}`}>
                                    {status.info.msg}
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>

                    <div className='contact-social'>
                        <p>Or follow me on social media</p>
                        <div className='social-links'>
                            <a href='https://www.linkedin.com/in/karan-karki-b27v70237' target='_blank' rel='noreferrer' className='social-icon linkedin' aria-label='LinkedIn'>
                                <FaLinkedin />
                            </a>
                            <a href='https://github.com/karan1karki' target='_blank' rel='noreferrer' className='social-icon github' aria-label='GitHub'>
                                <FaGithub />
                            </a>
                            <a href='https://twitter.com/karki77083' target='_blank' rel='noreferrer' className='social-icon twitter' aria-label='Twitter'>
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}