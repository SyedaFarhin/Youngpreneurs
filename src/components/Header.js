import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleNavCollapse = () => setExpanded(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setExpanded(false);
  }, [location]);

  return (
    <Navbar 
      bg={scrolled ? "white" : "light"} 
      expand="lg" 
      expanded={expanded} 
      fixed="top"
      className={`modern-navbar ${scrolled ? 'scrolled' : ''}`}
    >
     <Container fluid className="px-4 custom-header-container">

        <Navbar.Brand as={Link} to="/" className="brand-container">
          <img
            src={logo}
            alt="Youngpreneurs Logo"
            className="d-inline-block align-top brand-logo"
            height="300%"
            width="500px"
          />
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="responsive-navbar-nav" 
          onClick={() => setExpanded(expanded ? false : "expanded")}
          className="hamburger-toggle"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={handleNavCollapse} className="nav-link-item">Home</Nav.Link>
            <Nav.Link as={Link} to="/about-us" onClick={handleNavCollapse} className="nav-link-item">About Us</Nav.Link>
            <Nav.Link as={Link} to="/team" onClick={handleNavCollapse} className="nav-link-item">Our Team</Nav.Link>
            <Nav.Link as={Link} to="/a-message-to-parents" onClick={handleNavCollapse} className="nav-link-item">For Parents</Nav.Link>
            <Nav.Link as={Link} to="/for-schools" onClick={handleNavCollapse} className="nav-link-item">For Schools</Nav.Link>
            <Nav.Link as={Link} to="/competition-details" onClick={handleNavCollapse} className="nav-link-item">Future Titans Competition</Nav.Link>
            <Nav.Link as={Link} to="/youngpreneur-academy" onClick={handleNavCollapse} className="nav-link-item">YoungPreneur Academy</Nav.Link>
            <Nav.Link as={Link} to="/success-stories" onClick={handleNavCollapse} className="nav-link-item">Success Stories</Nav.Link>
            <Nav.Link as={Link} to="/media-press" onClick={handleNavCollapse} className="nav-link-item">Media</Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={handleNavCollapse} className="nav-link-item highlight">Join Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header; 