import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled Components
const StyledSection = styled.section`
  font-family: 'Poppins', sans-serif;
  padding: 4rem 0;
`;

const PageHeader = styled(StyledSection)`
  background: linear-gradient(135deg, #e82124 0%, #eb4c4b 100%);
  color: white;
  padding: 6rem 0;
`;

const SectionTitle = styled.h2`
  color: #347c53;
  font-weight: 600;
  margin-bottom: 2rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    
    height: 3px;
    background: #e5c16f;
  }
`;

const StyledCard = styled(Card)`
  border: none;
  border-radius: 12px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
  
  .card-title {
    color: #347c53;
    font-weight: 600;
  }
`;

const CTAButton = styled(Button)`
  background: #e82124;
  border: none;
  padding: 0.8rem 2rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: #eb4c4b;
    transform: translateY(-2px);
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    position: relative;
    
    &:before {
      content: '•';
      color: #e5c16f;
      position: absolute;
      left: 0;
    }
  }
`;

const Lead = styled.p`
  font-size: clamp(1.1rem, 2vw, 1.5rem);
          font-weight: 300;
          color: var(--text-light);
          opacity: 0.9;

         text-align: center;
          position: relative;
          z-index: 1;
          padding-top: 4rem;
          
`;




const ForSchools = () => {
  return (
    <>
      <PageHeader>
        <Container>
          <Lead>Partner with Youngpreneurs to bring entrepreneurship education to your students</Lead>

        </Container>
      </PageHeader>

      <StyledSection>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <SectionTitle>Why Partner With Us?</SectionTitle>
              <p className="text-muted mb-4">
                Integrating entrepreneurship education into your school curriculum helps prepare 
                students for the future of work and develop essential 21st-century skills.
              </p>
              <FeatureList>
                <li>Complement your existing curriculum</li>
                <li>Foster creativity and critical thinking</li>
                <li>Build communication and presentation skills</li>
                <li>Teach financial literacy</li>
                <li>Develop leadership abilities</li>
                <li>Connect classroom learning to real-world applications</li>
              </FeatureList>
            </Col>
            <Col lg={6}>
              <img 
                src={require('../assets/schools.jpg')} 
                alt="Students in classroom" 
                className="img-fluid rounded-3 shadow-lg" 
                loading="lazy"
              />
            </Col>
          </Row>
        </Container>
      </StyledSection>

      <StyledSection className="bg-light">
        <Container>
          <SectionTitle className="text-center">Our School Programs</SectionTitle>
          <Row>
            <Col md={4} className="mb-4">
              <StyledCard>
                <Card.Body className="p-4">
                  <Card.Title className="mb-3">In-School Workshops</Card.Title>
                  <Card.Text className="text-muted">
                    Interactive sessions led by our experienced facilitators, 
                    designed to fit into your school schedule and curriculum.
                  </Card.Text>
                </Card.Body>
              </StyledCard>
            </Col>
            <Col md={4} className="mb-4">
              <StyledCard>
                <Card.Body className="p-4">
                  <Card.Title className="mb-3">Entrepreneurship Clubs</Card.Title>
                  <Card.Text className="text-muted">
                    Support and resources for establishing and running successful 
                    entrepreneurship clubs as extracurricular activities.
                  </Card.Text>
                </Card.Body>
              </StyledCard>
            </Col>
            <Col md={4} className="mb-4">
              <StyledCard>
                <Card.Body className="p-4">
                  <Card.Title className="mb-3">Teacher Training</Card.Title>
                  <Card.Text className="text-muted">
                    Professional development for educators interested in integrating 
                    entrepreneurship education into their teaching.
                  </Card.Text>
                </Card.Body>
              </StyledCard>
            </Col>
          </Row>
        </Container>
      </StyledSection>

      <StyledSection className="text-center">
        <Container>
          <SectionTitle className="text-center">Ready to Partner With Us?</SectionTitle>
          <p className="text-muted mb-4">
            Contact us to discuss how we can bring entrepreneurship education to your school.
          </p>
          <Link to="/contact">
            <CTAButton size="lg">
              Get in Touch
            </CTAButton>
          </Link>
        </Container>
      </StyledSection>
    </>
  );
};

export default ForSchools; 