import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
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

       


.subheadline {
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  font-weight: 300;
  color: var(--text-light);
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;

  position: absolute;
  top: 68%; /* Adjust this value to move it up/down */
  left: 50%;
  transform: translateX(-50%);

  z-index: 1;
}


        .section {
          padding: var(--spacing-xl) 0;
        }

        .section-title {
          text-align: center;
          margin-bottom: var(--spacing-lg);
        }

        .headline-sm {
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 600;
          color: var(--primary-red);
          margin-bottom: var(--spacing-md);
          position: relative;
          display: inline-block;
        }

        .headline-sm::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 40px;
          height: 3px;
          background: var(--accent-gold);
          transition: var(--transition);
        }

        .offer-card {
          border: none;
          border-radius: var(--border-radius);
          background: var(--background-light);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: var(--transition);
          height: 100%;
          overflow: hidden;
        }

        .offer-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 30px rgba(232, 33, 36, 0.15);
        }

        .offer-card .card-body {
          padding: var(--spacing-md);
        }

        .offer-card .card-title {
          color: var(--deep-green);
          font-weight: 600;
          margin-bottom: var(--spacing-sm);
        }

        .bg-light {
          background-color: var(--background-off) !important;
        }

        .journey-text {
          max-width: 800px;
          margin: 0 auto;
          font-size: 1.1rem;
          line-height: 1.8;
        }

        .journey-text p {
          margin-bottom: var(--spacing-md);
        }

        @keyframes slide {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }

        @media (max-width: 768px) {
          .section {
            padding: var(--spacing-lg) 0;
          }
          
          .offer-card {
            margin-bottom: var(--spacing-md);
          }
        }
      `}</style>

      <section className="page-header text-center">
        <Container>
          <p className="subheadline">Empowering the next generation of entrepreneurs</p>
        </Container>
      </section>

      <section className="section">
        <Container>
          <Row className="mb-5">
            <Col lg={6} className="mb-4">
              <h2 className="headline-sm">Our Mission</h2>
              <p>
                Youngpreneurs is dedicated to fostering entrepreneurship in young minds, developing 
                future leaders, and empowering them to drive change. We believe that teaching entrepreneurial 
                skills early creates confident, innovative, and resilient individuals ready to tackle 
                the challenges of tomorrow.
              </p>
            </Col>
            <Col lg={6}>
              <h2 className="headline-sm">Our Vision</h2>
              <p>
                We envision a world where young people are equipped with the mindset, skills, and resources 
                to transform their ideas into reality. By nurturing a generation of entrepreneurial thinkers, 
                we aim to contribute to a more innovative, sustainable, and equitable future.
              </p>
            </Col>
          </Row>

          <div className="section-title">
            <h2 className="headline-sm">What We Offer</h2>
          </div>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="offer-card">
                <Card.Body>
                  <Card.Title>Future Titans Competition</Card.Title>
                  <Card.Text>
                    Our flagship competition provides a platform for young innovators to showcase 
                    their entrepreneurial ideas and win mentorship and resources to bring their visions to life.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="offer-card">
                <Card.Body>
                  <Card.Title>YoungPreneur Academy</Card.Title>
                  <Card.Text>
                    Comprehensive entrepreneurship education for students, teaching them business skills, 
                    design thinking, and leadership through practical experience.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="offer-card">
                <Card.Body>
                  <Card.Title>Mentorship & Resources</Card.Title>
                  <Card.Text>
                    We connect young entrepreneurs with industry experts and provide the tools and 
                    guidance they need to succeed in their entrepreneurial journey.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section bg-light">
        <Container>
          <div className="section-title">
            <h2 className="headline-sm">Our Journey</h2>
          </div>
          <div className="journey-text">
            <p>
              Youngpreneurs was founded with a simple yet powerful idea: young people deserve the 
              opportunity to develop entrepreneurial skills and mindsets that will serve them throughout 
              their lives. What began as a small initiative has grown into a movement that has impacted 
              thousands of students across India.
            </p>
            <p>
              Through our programs, workshops, and competitions, we've witnessed the incredible potential 
              of young minds when given the right environment to flourish. Our alumni have gone on to start 
              businesses, lead community initiatives, and bring innovative solutions to complex problems.
            </p>
            <p>
              We continue to evolve and expand our reach, collaborating with schools, educational institutions, 
              and industry partners who share our commitment to nurturing the next generation of entrepreneurs. 
              Our approach is constantly refined based on feedback from participants and the latest research 
              in entrepreneurship education.
            </p>
            <p>
              As we look to the future, we remain dedicated to our core mission of empowering young people 
              to think and act like entrepreneurs, equipping them with the skills and confidence to shape 
              their own futures and make a positive impact on the world.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};

export default About;
