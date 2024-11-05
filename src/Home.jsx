// Home.js
import React from 'react';
import './Home.css'; // For styling the homepage
import logo from './logo.svg'

const Home = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to TechSagna</h1>
          <img src={logo} height={50}/>
          <p>Empowering Your Business with Reliable IT Solutions</p>
          <a href="/contact" className="cta-button">Get Started</a>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          {/* Microsoft 365 Projects */}
          <div className="service-card">
            <h3>Microsoft 365 Projects</h3>
            <p>Full-service project work for every aspect of Microsoft 365, including Entra/Azure, SharePoint, Purview, application implementation, and more.</p>
          </div>

          {/* Cyber Insurance Hardening */}
          <div className="service-card">
            <h3>Cyber Insurance Hardening</h3>
            <p>We help you prepare to obtain cyber insurance and assist with cleaning up security vulnerabilities to lower your premiums.</p>
          </div>

          {/* Device Management */}
          <div className="service-card">
            <h3>Device Management</h3>
            <p>We work with all major MDM, UEM, and DDM platforms to build, implement, migrate, and manage device management solutions for your organization.</p>
          </div>

          {/* Web & App Development */}
          <div className="service-card">
            <h3>Web & App Development</h3>
            <p>End-to-end web and mobile app development services to help you build scalable and secure applications tailored to your business needs.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <h2>Ready to Transform Your Business?</h2>
        <p>Let TechSagna provide you with customized IT solutions that drive innovation, security, and efficiency for your business.</p>
        <a href="/contact" className="cta-button">Contact Us</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 TechSagna | All Rights Reserved</p>
        <div className="social-media">
          <a href="https://twitter.com/techsagna">Twitter</a>
          <a href="https://linkedin.com/company/techsagna">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
