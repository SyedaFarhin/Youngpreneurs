import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/ypLogo.png';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="footer-content" >
          <Col md={4} className="footer-section">
            <img src={logo} alt="Youngpreneurs Logo" className="footer-logo" />
            <p className="footer-description">
            YoungPreneurs ignites a movement of future leaders — creating a launchpad where ideas take flight,
             innovation is born, and the next generation of changemakers rise.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </Col>
          
          <Col md={4} className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/competition-details">Future Titans Competition</Link></li>
              <li><Link to="/youngpreneur-academy">YoungPreneur Academy</Link></li>
              <li><Link to="/contact">Join Us</Link></li>
            </ul>
          </Col>
          
          <Col md={4} className="footer-section">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="contact-info">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Youngpreneurs Future Titans, India</span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>info@youngpreneurs.in</span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      
      <div className="footer-bottom">
        <Container>
          <p className="copyright">
            &copy; {year} Youngpreneurs Future Titans. All Rights Reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer; 