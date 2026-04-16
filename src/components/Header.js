"use client";
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import logo from '../assets/ypLogo.png';

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();

  const handleNavCollapse = () => setExpanded(false);

  useEffect(() => {
    setExpanded(false);
  }, [pathname]);

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
          height: 38px;
          width: auto;
        }

        .navbar-nav .nav-link-item {
          color:rgb(255, 255, 255) !important;
          font-weight: 500;
          padding: 0 12px;
          font-size: 15px;
          // text-transform: uppercase;
          transition: all 0.2s ease-in-out;
        }

        .navbar-nav .nav-link-item:hover {
          color: #dcae1a !important; /* red hover */
        }

        .navbar-nav .active {
          color:rgb(168, 173, 171) !important; /* red active */
        }

        .join-btn {
          font-weight: bold;
          border-left: 1px solid rgba(255, 255, 255, 0.3);
          padding-left: 16px !important;
          margin-left: 12px;
        }

        /* Custom Hamburger Icon */
        .custom-toggler-icon {
          display: inline-block;
          width: 30px;
          height: 22px;
          position: relative;
        }

        .custom-toggler-icon::before,
        .custom-toggler-icon::after,
        .custom-toggler-icon div {
          content: '';
          background-color: #fff;
          height: 3px;
          width: 100%;
          position: absolute;
          transition: all 0.3s ease;
        }

        .custom-toggler-icon::before {
          top: 0;
        }

        .custom-toggler-icon::after {
          bottom: 0;
        }

        .custom-toggler-icon div {
          top: 9px;
        }

        @media (max-width: 991px) {
          .navbar-collapse {
            background-color: #134734 ;
            padding: 1rem 0;
          }

          .navbar-nav {
            text-align: center;
          }

          .nav-link-item {
            color:  #333!important;
            padding: 2px 0;
          }

          .join-btn {
            border-left: none;
            margin-left: 0;
            padding-left: 12px;
            color: #dcae1a !important;
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
          <Navbar.Brand as={Link} href="/" className="brand-container">
            <Image
              src={logo}
              alt="Youngpreneurs Logo"
              className="brand-logo"
              priority
            />
          </Navbar.Brand>

          {/* Custom Toggle Button */}
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          >
            <span className="custom-toggler-icon">
              <div></div>
            </span>
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto menu-links">
              <Nav.Link as={Link} href="/" className={pathname === "/" ? "nav-link-item active" : "nav-link-item"} onClick={handleNavCollapse}>Home</Nav.Link>
              <Nav.Link as={Link} href="/about-us" className={pathname === "/about-us" ? "nav-link-item active" : "nav-link-item"} onClick={handleNavCollapse}>About Us</Nav.Link>
              <Nav.Link as={Link} href="/team" className={pathname === "/team" ? "nav-link-item active" : "nav-link-item"} onClick={handleNavCollapse}>Our Team</Nav.Link>
              <Nav.Link as={Link} href="/a-message-to-parents" className={pathname === "/a-message-to-parents" ? "nav-link-item active" : "nav-link-item"} onClick={handleNavCollapse}>For Parents</Nav.Link>
              <Nav.Link as={Link} href="/for-schools" className={pathname === "/for-schools" ? "nav-link-item active" : "nav-link-item"} onClick={handleNavCollapse}>For Schools</Nav.Link>
              <Nav.Link as={Link} href="/competition-details" className={pathname === "/competition-details" ? "nav-link-item active" : "nav-link-item"} onClick={handleNavCollapse}>Future Titans Competition</Nav.Link>
              <Nav.Link as={Link} href="/youngpreneur-academy" className={pathname === "/youngpreneur-academy" ? "nav-link-item active" : "nav-link-item"} onClick={handleNavCollapse}>Youngpreneur Academy</Nav.Link>
              <Nav.Link as={Link} href="/youngpreneur-voices" className={pathname === "/youngpreneur-voices" ? "nav-link-item active" : "nav-link-item"} onClick={handleNavCollapse}>YoungPreneurs Voices</Nav.Link>
              <Nav.Link as={Link} href="/success-stories" className={pathname === "/success-stories" ? "nav-link-item active" : "nav-link-item"} onClick={handleNavCollapse}>Success Stories</Nav.Link>
              <Nav.Link as={Link} href="/media-press" className={pathname === "/media-press" ? "nav-link-item active" : "nav-link-item"} onClick={handleNavCollapse}>Media</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} href="/contact" className="nav-link-item join-btn" onClick={handleNavCollapse}>Join Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
