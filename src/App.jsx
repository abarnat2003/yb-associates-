
import React, { useState } from "react";
import "./App.css";

import logo from "./assets/logo.jpg";
import pic1 from "./assets/pic 1.jpg";
import pic2 from "./assets/pic 2.jpg";
import pic3 from "./assets/piic 3.jpg";
import pic4 from "./assets/pic 4.jpg";
import chennai from "./assets/chennai.jpg";
import madurai from "./assets/madurai.jpg";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  
  const services = [
    {
      number: "01",
      title: "Our Vision",
      desc: "To become a trusted and leading name in the construction and real estate development industry by creating innovative, sustainable and high-quality spaces that shape a better future.",
    },
    {
      number: "02",
      title: "Our Mission",
      desc: "To deliver exceptional construction, design and development solutions through quality workmanship, innovative practices, transparent communication and customer-focused service.",
    },
    {
      number: "03",
      title: "Interior Design",
      desc: "Beautiful, functional and modern interiors designed around your lifestyle.",
    },
    {
      number: "04",
      title: "Project Development",
      desc: "Complete project coordination, planning, development and execution.",
    },
  ];


  const projects = [
    {
      name: "Luxury Villa",
      type: "RESIDENTIAL",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900",
    },
    {
      name: "Commercial Building",
      type: "COMMERCIAL",
      image: pic1,
    },
    {
      name: "Modern Interior",
      type: "INTERIOR DESIGN",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900",
    },
    {
      name: "Contemporary Residence",
      type: "RESIDENTIAL",
      image: pic2,
    },
  ];

  const process = [
    "Construction",
    "Planning & Design",
    "Estimation & Scheduling",
    "Construction & Supervision",
    "Quality Inspection & Handover",
  ];

  const processDescriptions = [
    "Understanding your expectations, budget and project requirements.",
    "Developing suitable plans and design concepts.",
    "Preparing project estimates and execution schedules.",
    "Managing construction activities and monitoring progress.",
    "Reviewing completed work and handing over the project.",
  ];
  


  const navLinks = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Services", "#services"],
    ["Projects", "#projects"],
    ["Process", "#process"],
    ["Contact", "#contact"],
  ];


  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    const name = data.get("name");
    const email = data.get("email");
    const phone = data.get("phone");
    const service = data.get("service");
    const message = data.get("message");

    const subject = encodeURIComponent("New Website Enquiry");

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`
    );

    window.location.href =
      `mailto:ybassociates304@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="website">


      <header className="navbar">

        <a
          href="#home"
          className="nav-logo"
          onClick={() => setMenuOpen(false)}
        >
          <img src={logo} alt="YB Associates Logo" />
        </a>

        <button
          type="button"
          className="menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>

          {navLinks.map(([name, link]) => (
            <a
              href={link}
              key={name}
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </a>
          ))}

          <a
            href="#contact"
            className="nav-contact"
            onClick={() => setMenuOpen(false)}
          >
            Get in Touch ↗
          </a>

        </nav>
      </header>


     
      <section id="home" className="hero">

        <div className="hero-content">

          <h1>
            Building Your Dreams.
            <br />
            <span>Creating Your Future.</span>
          </h1>

          <p className="hero-description">
        YB Associates is committed to delivering quality construction, innovative design and reliable development solutions. With a focus on excellence, transparency and customer satisfaction, we transform ideas into spaces that inspire and last for generations
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="gold-button">
              Explore Our Projects ↗
            </a>

            <a href="#services" className="outline-button">
              Our Services →
            </a>

          </div>

          <div className="hero-location">
            CHENNAI &nbsp; | &nbsp; MADURAI
          </div>

        </div>

      </section>


      {/* ABOUT */}
      <section id="about" className="section about">

        <div className="section-heading">

          <p className="tagline">WHO WE ARE</p>

          <h2>
            Building Trust.
            <br />
            <span>Shaping Tomorrow.</span>
          </h2>

        </div>

        <div className="about-content">

          <div className="about-image-wrap">
            <img
              src={pic3}
              alt="Modern luxury architecture"
              className="about-image"
            />
          </div>

          <div className="about-text">

            <h3>Welcome to YB Associates</h3>

            <p>
              YB Associates is committed to delivering
              quality construction, innovative design
              and reliable development solutions.
            </p>

            <p>
              YB Associates is a construction, design and development company dedicated to creating exceptional spaces through quality workmanship, thoughtful planning and professional execution.
            </p>

            <p>
              We believe every project represents a dream, an investment and a future. Our approach combines innovative ideas, technical expertise and a commitment to delivering value to our clients.
Operating across Chennai and Madurai, we aim to build lasting relationships through trust, transparency and excellence.
            </p>

            <a href="#contact" className="dark-button">
              Know More About Us →
            </a>

          </div>

        </div>

        <div className="stats">

          <div>
            <h3>Integrity & Trust</h3>
            <p>Building honest relationships through transparency and accountability.</p>
          </div>

          <div>
            <h3>Quality Excellence</h3>
            <p>Maintaining high standards in every stage of our projects.</p>
          </div>

          <div>
            <h3>Innovation & Creativity
 </h3>
            <p>Bringing creative ideas and modern solutions into every project.
</p>
          </div>

          <div>
            <h3>Customer Satisfaction
</h3>
            <p>Understanding client requirements and delivering solutions that meet their expectations</p>
          </div>

        </div>

      </section>


    
      <section id="services" className="section services">

        <div className="section-heading center">

          <p className="tagline">WHAT WE DO</p>

          <h2>Our Services</h2>

          <p>
            Complete construction and development
            solutions for every vision.
          </p>

        </div>

        <div className="service-grid">

          {services.map((service) => (

            <div className="service-card" key={service.number}>

              <span className="service-number">
                {service.number}
              </span>

              <div className="service-icon">◆</div>

              <h3>{service.title}</h3>

              <p>{service.desc}</p>

              <a href="#contact">
                Enquire Now ↗
              </a>

            </div>

          ))}

        </div>

      </section>



      <section id="projects" className="section projects">

        <div className="section-heading">

          <p className="tagline">OUR PORTFOLIO</p>

          <h2>
            Projects That
            <span> Inspire.</span>
          </h2>

          <p>
            Explore our project categories and design inspirations.
          </p>

        </div>

        <div className="project-grid">

          {projects.map((project) => (

            <div className="project-card" key={project.name}>

              <img
                src={project.image}
                alt={project.name}
              />

              <div className="project-info">

                <small>{project.type}</small>

                <h3>{project.name}</h3>

                <a href="#contact">
                  Discuss a Similar Project ↗
                </a>

              </div>

            </div>

          ))}

        </div>

        
      </section>


     
      <section className="section why-us">

        <div className="why-content">

          <p className="tagline">WHY CHOOSE US?</p>

          <br />
            <span><h2>Our Commitment</h2></span>
         
         <p>
            We believe every successful project begins
            with trust and ends with satisfaction.
          </p>

          {[
            "Professional Approach",
            "Quality-Focused Execution",
            "Transparent Communication",
            "Innovative Design Solutions",
            "Customer-Oriented Service",
            "Reliable Project Coordination",
            "Commitment to Long-Term Value",
          ].map((item) => (

            <div className="check-item" key={item}>
              <span>✓</span> {item}
            </div>

          ))}

          <a href="#contact" className="gold-button">
            Work With Us ↗
          </a>

        </div>

        <div className="why-image">

          <img
            src={pic4}
            alt="Luxury home architecture"
          />

        </div>

      </section>


          <section id="process" className="section process">

        <div className="section-heading center">

          <p className="tagline">HOW WE WORK</p>

          <h2>Our Working Process</h2>

          <p>
            From the first meeting to the final handover,
            we follow a structured approach.
          </p>

        </div>

        <div className="process-list">

          {process.map((item, index) => (

            <div className="process-item" key={item}>

              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{item}</h3>

              <p>{processDescriptions[index]}</p>

            </div>

          ))}

        </div>

      </section>


     
      <section className="section presence">

        <div className="section-heading center">

          <p className="tagline">OUR PRESENCE</p>

          <h2>Serving Across Tamil Nadu</h2>

          <p>
            Connecting ideas and delivering development
            solutions in Chennai and Madurai.
          </p>

        </div>

        <div className="city-grid">

          <div className="city-card">

            <img
              src={chennai}
              alt="Chennai city"
            />

            <div>
              <h3>Chennai</h3>
              <p>YB Associates ,Vettuvankeni chennai Tamilnadu - 600115 </p>
              <span>Our Chennai Office</span>
            </div>

          </div>

          <div className="city-card">

            <img
              src={madurai}
              alt="Madurai city"
            />

            <div>
              <h3>Madurai</h3>
              <p>Tamil Nadu, India</p>
              <span>Our Madurai Office</span>
            </div>

          </div>

        </div>

        <p className="image-note">
        </p>

      </section>


   
      <section className="section testimonials">

        <div className="section-heading center">

          <p className="tagline">Our Process</p>

          <h2>What Our Clients Say</h2>

        </div>

        <div className="testimonial-card">

          <div className="stars">★★★★★</div>

          <h3>Trust. Quality. Satisfaction.</h3>

          <p>
            "Your trust is our greatest achievement.
            Every project is an opportunity to build
            a lasting relationship."
          </p>

               </div>

      </section>


      
      <section id="contact" className="section contact">

        <div className="contact-left">

          <p className="tagline">LET'S CONNECT</p>

          <h2>
            Let's Build
            <br />
            <span>Something Great.</span>
          </h2>

          <p>
            Have a construction or design project in mind?
            Contact our team to discuss your requirements.
          </p>

          <div className="contact-detail">

            <span>📍</span>

            <div>
              <h4>OUR LOCATIONS</h4>
              <p>Chennai & Madurai, Tamil Nadu</p>
            </div>

          </div>

          <div className="contact-detail">

            <span>✉</span>

            <div>
              <h4>EMAIL ADDRESS</h4>
              <p>ybassociates304@gmail.com</p>
            </div>

          </div>

          <div className="contact-detail">

            <span>☎</span>

            <div>
              <h4>PHONE NUMBER</h4>
              <p>+91 80152 97645</p>
            </div>

          </div>

        </div>


        <form className="contact-form" onSubmit={handleSubmit}>

          <h3>Send Us an Enquiry</h3>

          <p>We would love to hear about your project.</p>

          <label htmlFor="contact-name">Full Name *</label>

          <input
            id="contact-name"
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="contact-email">Email Address *</label>

          <input
            id="contact-email"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="contact-phone">Phone Number</label>

          <input
            id="contact-phone"
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
          />

          <label htmlFor="contact-service">Service Required</label>

          <select id="contact-service" name="service">
            <option>Construction</option>
            <option>Architecture & Design</option>
            <option>Interior Design</option>
            <option>Project Development</option>
            <option>Other</option>
          </select>

          <label htmlFor="contact-message">Message *</label>

          <textarea
            id="contact-message"
            name="message"
            rows="5"
            placeholder="Tell us about your project"
            required
          />

          <button type="submit" className="gold-button">
            Submit Enquiry ↗
          </button>

        </form>

      </section>


      
      <footer className="footer">

        <div className="footer-main">

          <a href="#home" className="footer-logo">
            <img src={logo} alt="YB Associates Logo" />
          </a>

          <p>Building Trust. Shaping Tomorrow.</p>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>

        </div>

        <div className="copyright">
          © {new Date().getFullYear()} YB Associates.
          All Rights Reserved.
        </div>

      </footer>

    </div>
  );
}

export default App;
