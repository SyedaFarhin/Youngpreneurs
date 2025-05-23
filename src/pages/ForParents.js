import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../styles/global.css';

// Styled Components
const PageHeader = styled.section`
  background: linear-gradient(135deg, var(--color-primary), var(--color-success));
  padding: var(--spacing-3xl) 0;
  position: relative;
  overflow: hidden;

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

const CTAButton = styled(Link)`
  display: inline-block;
  background: var(--color-primary);
  color: var(--color-white);
  padding: var(--spacing-md) var(--spacing-2xl);
  font-size: var(--font-size-lg);
  font-weight: 500;
  border-radius: var(--border-radius-full);
  text-decoration: none;
  transition: var(--transition-base);

  &:hover {
    background: var(--color-success);
    color: var(--color-white);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
`;

const ForParents = () => {
  return (
    <>
      <PageHeader>
        <Container>
          <h1 className="text-center text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
            For Parents
          </h1>
          <p className="text-center text-white" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', opacity: 0.9 }}>
            Supporting your child's entrepreneurial journey
          </p>
        </Container>
      </PageHeader>

      <StyledSection>
        <Container>
          <Row className="mb-5 align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <SectionTitle>Why Entrepreneurship Education?</SectionTitle>
              <p style={{ color: 'var(--color-gray-700)', lineHeight: '1.8' }}>
                In today's rapidly changing world, entrepreneurial skills are more valuable than ever. 
                Our programs help students develop critical thinking, problem-solving abilities, and 
                the confidence to pursue their ideas. As a parent, you'll see your child grow in ways 
                that traditional education alone cannot provide.
              </p>
            </Col>
            <Col lg={6}>
              <img 
                src={require('../assets/parents-main.jpg')} 
                alt="Entrepreneurship Education" 
                className="img-fluid rounded shadow-lg" 
                style={{ borderRadius: 'var(--border-radius-lg)' }}
              />
            </Col>
          </Row>
        </Container>
      </StyledSection>

      <StyledSection style={{ background: 'var(--color-gray-100)' }}>
        <Container>
          <SectionTitle className="text-center">Benefits for Your Child</SectionTitle>
          <Row>
            <Col md={4} className="mb-4">
              <StyledCard>
                <Card.Body>
                  <Card.Title>Skill Development</Card.Title>
                  <Card.Text>
                    Students learn practical skills like financial literacy, marketing, 
                    and project management that will serve them throughout their lives.
                  </Card.Text>
                </Card.Body>
              </StyledCard>
            </Col>
            <Col md={4} className="mb-4">
              <StyledCard>
                <Card.Body>
                  <Card.Title>Confidence Building</Card.Title>
                  <Card.Text>
                    Through hands-on experience and mentorship, students develop the 
                    confidence to take initiative and lead.
                  </Card.Text>
                </Card.Body>
              </StyledCard>
            </Col>
            <Col md={4} className="mb-4">
              <StyledCard>
                <Card.Body>
                  <Card.Title>Future Readiness</Card.Title>
                  <Card.Text>
                    Our programs prepare students for the challenges and opportunities 
                    of the future job market and business world.
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
              <SectionTitle>Parent Involvement</SectionTitle>
              <p style={{ color: 'var(--color-gray-700)', lineHeight: '1.8' }}>
                We believe in the power of parent involvement in a child's entrepreneurial journey. 
                Our programs include opportunities for parents to:
              </p>
              <ul style={{ color: 'var(--color-gray-700)', lineHeight: '1.8' }}>
                <li className="mb-3">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  Attend workshops and events
                </li>
                <li className="mb-3">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  Connect with other parents and mentors
                </li>
                <li className="mb-3">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  Support your child's projects and ideas
                </li>
                <li className="mb-3">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  Learn about entrepreneurship education
                </li>
              </ul>
            </Col>
            <Col lg={6}>
              <SectionTitle>Program Details</SectionTitle>
              <p style={{ color: 'var(--color-gray-700)', lineHeight: '1.8' }}>
                Our programs are designed to be flexible and accessible, with options for different 
                schedules and learning styles. We offer:
              </p>
              <ul style={{ color: 'var(--color-gray-700)', lineHeight: '1.8' }}>
                <li className="mb-3">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  Weekend workshops and events
                </li>
                <li className="mb-3">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  After-school programs
                </li>
                <li className="mb-3">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  Summer intensives
                </li>
                <li className="mb-3">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  Online learning opportunities
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </StyledSection>

      <StyledSection style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-success))', color: 'var(--color-white)' }}>
        <Container className="text-center">
          <h2 className="mb-4">Ready to Get Started?</h2>
          <p className="mb-4" style={{ opacity: 0.9 }}>
            Join us in nurturing your child's entrepreneurial spirit.
          </p>
          <CTAButton to="/contact">
            Enroll Now
          </CTAButton>
        </Container>
      </StyledSection>
    </>
  );
};

export default ForParents; 