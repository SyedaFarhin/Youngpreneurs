// 
















import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  const handleNavCollapse = () => setExpanded(false);

  useEffect(() => {
    setExpanded(false);
  }, [location]);

  return (
    <>
      <style>{`
        .custom-navbar {
          background-color: transparent !important;
          padding: 0.8rem 1rem;
          transition: background-color 0.3s ease;
          z-index: 999;
        }

        .custom-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand-logo {
          height: 60px;
          width: auto;
        }

        .navbar-nav .nav-link-item {
          color: white !important;
          font-weight: 500;
          padding: 0 12px;
          font-size: 14px;
          text-transform: uppercase;
          transition: all 0.2s ease-in-out;
        }

        .navbar-nav .nav-link-item:hover {
          color: #d21f26 !important; /* red hover */
        }

        .navbar-nav .active {
          color: #d21f26 !important; /* red active */
        }

        .join-btn {
          font-weight: bold;
          border-left: 1px solid rgba(255, 255, 255, 0.3);
          padding-left: 16px !important;
          margin-left: 12px;
        }

        @media (max-width: 991px) {
          .navbar-nav {
            text-align: center;
          }
          .join-btn {
            border-left: none;
            margin-left: 0;
            padding-left: 12px;
          }
        }
      `}</style>

      <Navbar 
        expand="lg" 
        expanded={expanded} 
        fixed="top"
        className="custom-navbar"
      >
        <Container fluid className="px-4 custom-container">
          <Navbar.Brand as={Link} to="/" className="brand-container">
            <img
              src={logo}
              alt="Youngpreneurs Logo"
              className="brand-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle 
            aria-controls="responsive-navbar-nav" 
            onClick={() => setExpanded(expanded ? false : "expanded")}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto menu-links">
              <Nav.Link as={Link} to="/" className={location.pathname === "/" ? "nav-link-item active" : "nav-link-item"}>Home</Nav.Link>
              <Nav.Link as={Link} to="/about-us" className="nav-link-item">About Us</Nav.Link>
              <Nav.Link as={Link} to="/team" className="nav-link-item">Our Team</Nav.Link>
              <Nav.Link as={Link} to="/a-message-to-parents" className="nav-link-item">For Parents</Nav.Link>
              <Nav.Link as={Link} to="/for-schools" className="nav-link-item">For Schools</Nav.Link>
              <Nav.Link as={Link} to="/competition-details" className="nav-link-item">Future Titans Competition</Nav.Link>
              <Nav.Link as={Link} to="/youngpreneur-academy" className="nav-link-item">Youngpreneur Academy</Nav.Link>
              <Nav.Link as={Link} to="/success-stories" className="nav-link-item">Success Stories</Nav.Link>
              <Nav.Link as={Link} to="/media-press" className="nav-link-item">Media</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/contact" className="nav-link-item join-btn">Join Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
