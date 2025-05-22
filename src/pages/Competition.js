import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
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
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
  
  .card-title {
    color: #347c53;
    font-weight: 600;
  }
`;

const ProcessStep = styled.div`
  text-align: center;
  padding: 2rem;
  
  .step-number {
    width: 80px;
    height: 80px;
    background: #e82124;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    font-size: 1.5rem;
    font-weight: 600;
    transition: transform 0.3s ease;
    
    &:hover {
      transform: scale(1.1);
    }
  }
  
  h4 {
    color: #347c53;
    margin-bottom: 1rem;
  }
`;

const CTASection = styled(StyledSection)`
  background: linear-gradient(135deg, #347c53 0%, #2a6342 100%);
  color: white;
  text-align: center;
  
  .btn-light {
    background: #e5c16f;
    border: none;
    padding: 0.8rem 2rem;
    font-weight: 500;
    transition: all 0.3s ease;
    
    &:hover {
      background: #f48c94;
      transform: translateY(-2px);
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

const Competition = () => {
  return (
    <>
      <PageHeader>
        <Container>
        <Lead>Showcasing the next generation of entrepreneurs</Lead>
       
          
        </Container>
      </PageHeader>

      <StyledSection>
        <Container>
          <Row className="mb-5 align-items-center">
            <Col lg={6} className="mb-4">
              <SectionTitle>About the Competition</SectionTitle>
              <p className="mb-4">
                The Future Titans Competition is a platform for young innovators to showcase 
                their entrepreneurial ideas and win mentorship and resources to bring their 
                visions to life. This annual competition challenges students to think creatively, 
                solve real-world problems, and develop viable business solutions.
              </p>
              <p>
                Participants receive guidance throughout the competition process, with opportunities 
                to refine their ideas based on expert feedback. The competition culminates in a pitch 
                event where finalists present their ideas to a panel of judges from the business community.
              </p>
            </Col>
            <Col lg={6} className="d-flex align-items-center">
              <img 
                src={require('../assets/competition-main.jpg')} 
                alt="Competition participants" 
                className="img-fluid rounded shadow" 
                style={{ borderRadius: '12px' }}
              />
            </Col>
          </Row>

          <SectionTitle className="text-center">Competition Categories</SectionTitle>
          <Row>
            <Col md={4} className="mb-4">
              <StyledCard>
                <Card.Body>
                  <Card.Title>Social Innovation</Card.Title>
                  <Card.Text>
                    Business ideas focused on addressing social challenges and making 
                    a positive impact in communities.
                  </Card.Text>
                </Card.Body>
              </StyledCard>
            </Col>
            <Col md={4} className="mb-4">
              <StyledCard>
                <Card.Body>
                  <Card.Title>Technology</Card.Title>
                  <Card.Text>
                    Tech-based solutions and digital innovations that solve problems 
                    or improve existing processes.
                  </Card.Text>
                </Card.Body>
              </StyledCard>
            </Col>
            <Col md={4} className="mb-4">
              <StyledCard>
                <Card.Body>
                  <Card.Title>Creative Enterprise</Card.Title>
                  <Card.Text>
                    Product or service ideas that showcase creativity and originality 
                    in addressing market needs.
                  </Card.Text>
                </Card.Body>
              </StyledCard>
            </Col>
          </Row>
        </Container>
      </StyledSection>

      <StyledSection style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <SectionTitle className="text-center">How It Works</SectionTitle>
          <Row>
            <Col md={3} className="mb-4">
              <ProcessStep>
                <div className="step-number">1</div>
                <h4>Register</h4>
                <p>Sign up to participate in the competition.</p>
              </ProcessStep>
            </Col>
            <Col md={3} className="mb-4">
              <ProcessStep>
                <div className="step-number">2</div>
                <h4>Develop</h4>
                <p>Refine your idea with guidance from mentors.</p>
              </ProcessStep>
            </Col>
            <Col md={3} className="mb-4">
              <ProcessStep>
                <div className="step-number">3</div>
                <h4>Submit</h4>
                <p>Submit your business plan and presentation.</p>
              </ProcessStep>
            </Col>
            <Col md={3} className="mb-4">
              <ProcessStep>
                <div className="step-number">4</div>
                <h4>Pitch</h4>
                <p>Finalists present to a panel of judges.</p>
              </ProcessStep>
            </Col>
          </Row>
        </Container>
      </StyledSection>

      <StyledSection>
        <Container>
          <SectionTitle className="text-center">Prizes and Benefits</SectionTitle>
          <Row>
            <Col md={6} lg={3} className="mb-4">
              <StyledCard>
                <Card.Body className="text-center">
                  <Card.Title>Cash Prizes</Card.Title>
                  <Card.Text>
                    Substantial cash awards for winners to invest in their ventures.
                  </Card.Text>
                </Card.Body>
              </StyledCard>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <StyledCard>
                <Card.Body className="text-center">
                  <Card.Title>Mentorship</Card.Title>
                  <Card.Text>
                    One-on-one guidance from industry experts and successful entrepreneurs.
                  </Card.Text>
                </Card.Body>
              </StyledCard>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <StyledCard>
                <Card.Body className="text-center">
                  <Card.Title>Networking</Card.Title>
                  <Card.Text>
                    Connections with potential investors, partners, and the entrepreneurial community.
                  </Card.Text>
                </Card.Body>
              </StyledCard>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <StyledCard>
                <Card.Body className="text-center">
                  <Card.Title>Recognition</Card.Title>
                  <Card.Text>
                    Media exposure and recognition for your innovative ideas.
                  </Card.Text>
                </Card.Body>
              </StyledCard>
            </Col>
          </Row>
        </Container>
      </StyledSection>

      <CTASection>
        <Container>
          <h2 className="mb-4" style={{ color: 'white' }}>Ready to Showcase Your Ideas?</h2>
          <p className="mb-4">
            Join the Future Titans Competition and take the first step in your entrepreneurial journey.
          </p>
          <Link to="/contact" className="btn btn-light btn-lg" >
            Register Now
          </Link>
        </Container>
      </CTASection>
    </>
  );
};

export default Competition; 