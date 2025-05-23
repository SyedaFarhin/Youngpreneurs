import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import styled from 'styled-components';
import '../styles/global.css';

// Styled Components
const PageHeader = styled.section`
  background: linear-gradient(135deg, var(--color-primary), var(--color-success));
  padding: var(--spacing-3xl) 0;
  position: relative;
  overflow: hidden;
  animation: fadeInDown 1s ease-out both;

  &::before {
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
`;

const Headline = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: var(--color-white);
  margin-bottom: var(--spacing-md);
  animation: slideUp 1s ease-out;
  text-align: center;
`;

const Subheadline = styled.p`
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  font-weight: 300;
  color: var(--color-white);
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  animation: fadeIn 1.5s ease-out;
`;

const StyledSection = styled.section`
  padding: var(--spacing-3xl) 0;
  font-family: var(--font-family-base);
`;

const SectionTitle = styled.h2`
  color: var(--color-success);
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 600;
  margin-bottom: var(--spacing-lg);
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 3px;
    background: var(--color-accent);
    transition: var(--transition-base);
  }
`;

const StyledCard = styled(Card)`
  border: none;
  border-radius: var(--border-radius-lg);
  background: var(--color-white);
  box-shadow: var(--shadow-md);
  transition: var(--transition-base);
  height: 100%;
  overflow: hidden;

  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
  }

  .card-body {
    padding: var(--spacing-xl);
  }

  .card-title {
    color: var(--color-success);
    font-weight: 600;
    margin-bottom: var(--spacing-md);
  }

  .card-text {
    color: var(--color-gray-700);
    line-height: 1.6;
  }
`;

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

      <PageHeader>
        <Container>
          <Headline>About YoungPreneurs</Headline>
          <Subheadline>
            Empowering the next generation of entrepreneurs through education, mentorship, and real-world experience.
          </Subheadline>
        </Container>
      </PageHeader>

      <StyledSection>
        <Container>
          <Row className="mb-5 align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <SectionTitle>Our Mission</SectionTitle>
              <p style={{ color: 'var(--color-gray-700)', lineHeight: '1.8' }}>
                At YoungPreneurs, we believe that entrepreneurship education should be accessible to all students. 
                Our mission is to empower young minds with the skills, knowledge, and mindset needed to succeed 
                in an ever-changing world. Through our innovative programs and dedicated mentorship, we help 
                students develop critical thinking, problem-solving abilities, and the confidence to pursue 
                their entrepreneurial dreams.
              </p>
            </Col>
            <Col lg={6}>
              <img 
                src={require('../assets/about-main.jpg')} 
                alt="YoungPreneurs Mission" 
                className="img-fluid rounded shadow-lg" 
                style={{ borderRadius: 'var(--border-radius-lg)' }}
              />
            </Col>
          </Row>
        </Container>
      </StyledSection>

      <StyledSection style={{ background: 'var(--color-gray-100)' }}>
        <Container>
          <SectionTitle className="text-center">Our Values</SectionTitle>
          <Row>
            <Col md={4} className="mb-4">
              <StyledCard>
                <Card.Body>
                  <Card.Title>Innovation</Card.Title>
                  <Card.Text>
                    We foster creativity and encourage students to think outside the box, 
                    developing innovative solutions to real-world problems.
                  </Card.Text>
                </Card.Body>
              </StyledCard>
            </Col>
            <Col md={4} className="mb-4">
              <StyledCard>
                <Card.Body>
                  <Card.Title>Excellence</Card.Title>
                  <Card.Text>
                    We maintain high standards in everything we do, from curriculum design 
                    to program delivery and student support.
                  </Card.Text>
                </Card.Body>
              </StyledCard>
            </Col>
            <Col md={4} className="mb-4">
              <StyledCard>
                <Card.Body>
                  <Card.Title>Impact</Card.Title>
                  <Card.Text>
                    We measure our success by the positive impact we create in students' 
                    lives and their communities.
                  </Card.Text>
                </Card.Body>
              </StyledCard>
            </Col>
          </Row>
        </Container>
      </StyledSection>

      <StyledSection>
        <Container>
          <Row>
            <Col lg={6} className="mb-4">
              <SectionTitle>Our Journey</SectionTitle>
              <p style={{ color: 'var(--color-gray-700)', lineHeight: '1.8' }}>
                Founded in 2020, YoungPreneurs has grown from a small initiative to a comprehensive 
                entrepreneurship education platform. Our journey has been marked by continuous learning, 
                adaptation, and a deep commitment to our students' success.
              </p>
              <p style={{ color: 'var(--color-gray-700)', lineHeight: '1.8' }}>
                Today, we work with schools, educators, and industry partners to deliver high-quality 
                entrepreneurship education that prepares students for the challenges and opportunities 
                of the future.
              </p>
            </Col>
            <Col lg={6}>
              <SectionTitle>Our Team</SectionTitle>
              <p style={{ color: 'var(--color-gray-700)', lineHeight: '1.8' }}>
                Our team consists of experienced educators, successful entrepreneurs, and industry 
                professionals who are passionate about nurturing the next generation of business leaders. 
                Together, we bring diverse perspectives and expertise to create an enriching learning 
                environment for our students.
              </p>
            </Col>
          </Row>
        </Container>
      </StyledSection>

      <StyledSection style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-success))', color: 'var(--color-white)' }}>
        <Container className="text-center">
          <h2 className="mb-4">Join Our Community</h2>
          <p className="mb-4" style={{ opacity: 0.9 }}>
            Be part of a growing network of young entrepreneurs and changemakers.
          </p>
          <a href="/contact" className="btn btn-light btn-lg">
            Get Started
          </a>
        </Container>
      </StyledSection>
    </>
  );
};

export default About;
