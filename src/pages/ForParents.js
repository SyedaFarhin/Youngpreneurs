import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ForParents = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        :root {
          --primary-red: #e82124;
          --accent-gold: #e5c16f;
          --deep-green: #347c53;
          --soft-pink: #f48c94;
          --text-dark: #2d2d2d;
          --text-light: #ffffff;
          --background-light: #ffffff;
          --background-off: #f8f9fa;
          --spacing-xs: 0.5rem;
          --spacing-sm: 1rem;
          --spacing-md: 2rem;
          --spacing-lg: 3rem;
          --spacing-xl: 5rem;
          --border-radius: 12px;
          --transition: all 0.3s ease;
        }

        body {
          font-family: 'Poppins', sans-serif;
          color: var(--text-dark);
          line-height: 1.6;
        }

        .page-header {
          background: linear-gradient(135deg, var(--primary-red), #9b0e10);
          padding: var(--spacing-xl) 0;
          position: relative;
          overflow: hidden;
         
        }

        
        .page-header::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('/patterns/dots.svg') repeat;
          opacity: 0.1;
          animation: slide 20s linear infinite;
        }

        .page-header h1 {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          color: var(--text-light);
          margin-bottom: var(--spacing-sm);
          position: relative;
          z-index: 1;
        }

        .page-header .lead {
          font-size: clamp(1.1rem, 2vw, 1.5rem);
          font-weight: 300;
          color: var(--text-light);
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          padding-top: 4rem;
        }

        .section {
          padding: var(--spacing-xl) 0;
        }

        .section-title {
          text-align: center;
          margin-bottom: var(--spacing-lg);
        }

        .section-title h2 {
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 600;
          color: var(--text-dark);
          position: relative;
          display: inline-block;
          margin-bottom: var(--spacing-md);
        }

        .section-title h2::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: var(--accent-gold);
          transition: var(--transition);
        }

        .benefit-card {
          border: none;
          border-radius: var(--border-radius);
          background: var(--background-light);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: var(--transition);
          height: 100%;
          overflow: hidden;
        }

        .benefit-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 30px rgba(232, 33, 36, 0.15);
        }

        .benefit-card .card-body {
          padding: var(--spacing-md);
        }

        .benefit-card .card-title {
          color: var(--deep-green);
          font-weight: 600;
          margin-bottom: var(--spacing-sm);
        }

        .benefit-card .card-text {
          color: var(--text-dark);
          opacity: 0.8;
        }

        .faq-section {
          background-color: var(--background-off);
        }

        .faq-item {
          margin-bottom: var(--spacing-md);
        }

        .faq-item h4 {
          color: var(--primary-red);
          font-size: 1.2rem;
          font-weight: 500;
          margin-bottom: var(--spacing-xs);
        }

        .faq-item p {
          color: var(--text-dark);
          opacity: 0.8;
        }

        .cta-section {
          background: linear-gradient(135deg, var(--deep-green), #2a6342);
          color: var(--text-light);
          padding: var(--spacing-xl) 0;
          text-align: center;
        }

        .cta-section h2 {
          color: var(--text-light);
          margin-bottom: var(--spacing-md);
        }

        .cta-section .btn {
          background-color: var(--accent-gold);
          color: var(--text-dark);
          font-weight: 500;
          padding: 0.8rem 2rem;
          border-radius: var(--border-radius);
          transition: var(--transition);
          border: none;
        }

        .cta-section .btn:hover {
          background-color: var(--soft-pink);
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        @keyframes slide {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }

        @media (max-width: 768px) {
          .section {
            padding: var(--spacing-lg) 0;
          }
          
          .benefit-card {
            margin-bottom: var(--spacing-md);
          }
        }
      `}</style>

      <section className="page-header text-center">
        <Container>
         
          <p className="lead">Preparing your child for future success</p>
        </Container>
      </section>

      <section className="section">
        <Container>
          <Row className="mb-5">
            <Col lg={6} className="mb-4">
              <h2>Why Entrepreneurship Education?</h2>
              <p>
                In today's rapidly changing world, entrepreneurial skills are more valuable than ever. 
                By introducing your child to entrepreneurship early, you're helping them develop:
              </p>
              <ul className="mt-3">
                <li>Critical thinking and problem-solving abilities</li>
                <li>Creativity and innovation</li>
                <li>Communication and presentation skills</li>
                <li>Financial literacy</li>
                <li>Resilience and adaptability</li>
                <li>Leadership and teamwork</li>
              </ul>
              <p className="mt-3">
                These skills will serve them well regardless of their future career path, whether they 
                become entrepreneurs or excel in traditional professions.
              </p>
            </Col>
            <Col lg={6}>
              <img 
                src={require('../assets/parents.jpg')} 
                alt="Parent and child" 
                className="img-fluid rounded shadow" 
                style={{ borderRadius: 'var(--border-radius)' }}
              />
            </Col>
          </Row>

          <div className="section-title">
            <h2>How Youngpreneurs Benefits Your Child</h2>
          </div>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="benefit-card">
                <Card.Body>
                  <Card.Title>Practical Learning</Card.Title>
                  <Card.Text>
                    Our programs provide hands-on experience that goes beyond 
                    traditional classroom learning, allowing children to apply concepts in real-world situations.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="benefit-card">
                <Card.Body>
                  <Card.Title>Expert Mentorship</Card.Title>
                  <Card.Text>
                    Students receive guidance from experienced entrepreneurs and industry professionals, 
                    giving them valuable insights and connections.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="benefit-card">
                <Card.Body>
                  <Card.Title>Confidence Building</Card.Title>
                  <Card.Text>
                    As children develop and present their ideas, they build confidence 
                    in their abilities and learn to advocate for themselves.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section faq-section">
        <Container>
          <h2 className="text-center mb-5">Frequently Asked Questions</h2>
          <Row>
            <Col lg={6} className="mb-4">
              <div className="faq-item">
                <h4>What age groups are your programs suitable for?</h4>
                <p>
                  Our programs are designed for students aged 10-18, with different 
                  curriculums tailored to various age groups and learning levels.
                </p>
              </div>
            </Col>
            <Col lg={6} className="mb-4">
              <div className="faq-item">
                <h4>How much time commitment is required?</h4>
                <p>
                  Program time commitments vary. Our competition is project-based, while 
                  our academy offers flexible schedules ranging from weekend workshops to 
                  week-long intensives.
                </p>
              </div>
            </Col>
            <Col lg={6} className="mb-4">
              <div className="faq-item">
                <h4>Does my child need any prior experience?</h4>
                <p>
                  No prior experience is needed! Our programs are designed to introduce 
                  entrepreneurship concepts to beginners while also challenging more 
                  experienced students.
                </p>
              </div>
            </Col>
            <Col lg={6} className="mb-4">
              <div className="faq-item">
                <h4>How can I support my child's entrepreneurial journey?</h4>
                <p>
                  Encourage their ideas, help them reflect on their experiences, and consider 
                  participating in our parent workshops where you'll learn how to nurture their 
                  entrepreneurial mindset at home.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="cta-section">
        <Container>
          <h2 className="mb-4">Ready to Get Started?</h2>
          <p className="mb-4">
            Enroll your child in our programs and help them develop the skills and mindset for future success.
          </p>
          <Link to="/contact" className="btn">
            Contact Us Today
          </Link>
        </Container>
      </section>
    </>
  );
};

export default ForParents; 