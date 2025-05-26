import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../styles/global.css';

// Styled Components
const StyledSection = styled.section`
  padding: var(--spacing-3xl) 0;
  font-family: var(--font-family-base);
`;

const PageHeader = styled.section`
  background: linear-gradient(135deg, var(--color-primary), var(--color-success));
  color: var(--color-white);
  text-align: center;
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

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    margin-bottom: var(--spacing-md);
    animation: fadeInDown 1s ease-out;
  }

  p {
    font-size: clamp(1.1rem, 2vw, 1.5rem);
    font-weight: 300;
    opacity: 0.9;
    max-width: 600px;
    margin: 0 auto;
    animation: fadeInUp 1s ease-out;
  }
`;

const StyledCard = styled(Card)`
  border: none;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: var(--transition-base);
  height: 100%;

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

const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  border-radius: var(--border-radius-full);
  background: ${props => props.color || 'var(--color-primary)'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-lg);
  color: var(--color-white);
  font-size: 1.5rem;
  transition: var(--transition-base);

  &:hover {
    transform: scale(1.1);
  }
`;

const CTAButton = styled(Button)`
  background: var(--color-primary);
  border: none;
  padding: var(--spacing-md) var(--spacing-2xl);
  font-size: var(--font-size-lg);
  font-weight: 500;
  border-radius: var(--border-radius-full);
  transition: var(--transition-base);

  &:hover {
    background: var(--color-success);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
`;

const Academy = () => {
  return (
    <>
      <PageHeader>
        <Container>
          <h1>YoungPreneur Academy</h1>
          <p>Comprehensive entrepreneurship education for students</p>
        </Container>
      </PageHeader>

      <StyledSection>
        <Container>
          <Row className="mb-5 align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h2 className="mb-4" style={{ color: 'var(--color-success)' }}>About YoungPreneur Academy</h2>
              <p className="mb-4" style={{ color: 'var(--color-gray-700)', lineHeight: '1.8' }}>
                YoungPreneur Academy offers comprehensive entrepreneurship education for students, 
                teaching them business skills, design thinking, and leadership through practical 
                experience. Our curriculum is designed by educators and entrepreneurs to provide 
                students with the knowledge and tools they need to succeed in an entrepreneurial world.
              </p>
              <p style={{ color: 'var(--color-gray-700)', lineHeight: '1.8' }}>
                Through workshops, hands-on projects, and mentorship, students develop not only 
                business acumen but also valuable soft skills like critical thinking, problem-solving, 
                teamwork, and communication.
              </p>
            </Col>
            <Col lg={6}>
              <img 
                src={require('../assets/academy-main.jpg')} 
                alt="YoungPreneur Academy" 
                className="img-fluid rounded shadow-lg" 
                style={{ borderRadius: 'var(--border-radius-lg)' }}
              />
            </Col>
          </Row>

          <div className="text-center mb-5">
            <h2 style={{ color: 'var(--color-success)' }}>Academy Programs</h2>
          </div>
          <Row>
            <Col md={4} className="mb-4">
              <StyledCard>
                <Card.Body>
                  <IconWrapper color="var(--color-accent)">
                    <i className="fas fa-calendar-week"></i>
                  </IconWrapper>
                  <Card.Title>Weekend Workshops</Card.Title>
                  <Card.Text>
                    Intensive weekend sessions focusing on specific entrepreneurial skills and 
                    topics, perfect for busy students.
                  </Card.Text>
                </Card.Body>
              </StyledCard>
            </Col>
            <Col md={4} className="mb-4">
              <StyledCard>
                <Card.Body>
                  <IconWrapper color="var(--color-soft-pink)">
                    <i className="fas fa-sun"></i>
                  </IconWrapper>
                  <Card.Title>Summer Intensives</Card.Title>
                  <Card.Text>
                    Week-long immersive programs during school breaks, where students develop and 
                    pitch their own business ideas.
                  </Card.Text>
                </Card.Body>
              </StyledCard>
            </Col>
            <Col md={4} className="mb-4">
              <StyledCard>
                <Card.Body>
                  <IconWrapper color="var(--color-success)">
                    <i className="fas fa-graduation-cap"></i>
                  </IconWrapper>
                  <Card.Title>Year-Round Programs</Card.Title>
                  <Card.Text>
                    Comprehensive curriculum delivered throughout the academic year, integrated 
                    with school schedules.
                  </Card.Text>
                </Card.Body>
              </StyledCard>
            </Col>
          </Row>
        </Container>
      </StyledSection>

      <StyledSection style={{ background: 'var(--color-gray-100)' }}>
        <Container>
          <h2 className="text-center mb-5" style={{ color: 'var(--color-success)' }}>What Students Learn</h2>
          <Row>
            <Col md={6} lg={3} className="mb-4">
              <StyledCard>
                <Card.Body className="text-center">
                  <IconWrapper color="var(--color-primary)">
                    <i className="fas fa-lightbulb"></i>
                  </IconWrapper>
                  <Card.Title>Ideation</Card.Title>
                  <Card.Text>
                    Techniques for generating, evaluating, and refining business ideas.
                  </Card.Text>
                </Card.Body>
              </StyledCard>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <StyledCard>
                <Card.Body className="text-center">
                  <IconWrapper color="var(--color-accent)">
                    <i className="fas fa-chart-line"></i>
                  </IconWrapper>
                  <Card.Title>Business Fundamentals</Card.Title>
                  <Card.Text>
                    Understanding markets, business models, and financial planning.
                  </Card.Text>
                </Card.Body>
              </StyledCard>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <StyledCard>
                <Card.Body className="text-center">
                  <IconWrapper color="var(--color-soft-pink)">
                    <i className="fas fa-comments"></i>
                  </IconWrapper>
                  <Card.Title>Communication</Card.Title>
                  <Card.Text>
                    Pitching ideas, public speaking, and persuasive presentation skills.
                  </Card.Text>
                </Card.Body>
              </StyledCard>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <StyledCard>
                <Card.Body className="text-center">
                  <IconWrapper color="var(--color-success)">
                    <i className="fas fa-users"></i>
                  </IconWrapper>
                  <Card.Title>Leadership</Card.Title>
                  <Card.Text>
                    Team management, decision-making, and collaborative problem-solving.
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
              <h2 className="mb-4" style={{ color: 'var(--color-success)' }}>Learning Methodology</h2>
              <p className="mb-4" style={{ color: 'var(--color-gray-700)', lineHeight: '1.8' }}>
                Our approach combines theory with practice, ensuring students don't just learn about 
                entrepreneurship but experience it firsthand. Key elements of our methodology include:
              </p>
              <ul className="list-unstyled" style={{ color: 'var(--color-gray-700)' }}>
                <li className="mb-3">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  <strong>Experiential Learning:</strong> Students work on real projects and solve actual challenges.
                </li>
                <li className="mb-3">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  <strong>Mentorship:</strong> Guidance from experienced entrepreneurs and industry professionals.
                </li>
                <li className="mb-3">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  <strong>Design Thinking:</strong> A human-centered approach to problem-solving and innovation.
                </li>
                <li className="mb-3">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  <strong>Peer Learning:</strong> Collaboration and feedback among students to enhance understanding.
                </li>
                <li className="mb-3">
                  <i className="fas fa-check-circle text-success me-2"></i>
                  <strong>Reflection:</strong> Regular opportunities to analyze and learn from experiences.
                </li>
              </ul>
            </Col>
            <Col lg={6}>
              <h2 className="mb-4" style={{ color: 'var(--color-success)' }}>Our Instructors</h2>
              <p className="mb-4" style={{ color: 'var(--color-gray-700)', lineHeight: '1.8' }}>
                YoungPreneur Academy instructors are a diverse group of educators, entrepreneurs, and 
                industry professionals passionate about nurturing the next generation of business leaders. 
                They bring real-world experience and expertise to the classroom, providing students with 
                insights that go beyond textbook learning.
              </p>
              <p style={{ color: 'var(--color-gray-700)', lineHeight: '1.8' }}>
                All instructors undergo rigorous training in our curriculum and teaching methodology, 
                ensuring consistency in the quality of education across all our programs.
              </p>
            </Col>
          </Row>
        </Container>
      </StyledSection>

      <StyledSection style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-success))', color: 'var(--color-white)' }}>
        <Container className="text-center">
          <h2 className="mb-4">Ready to Join YoungPreneur Academy?</h2>
          <p className="mb-4" style={{ opacity: 0.9 }}>
            Enroll today and start your journey to becoming a successful entrepreneur.
          </p>
          <Link to="/contact">
            <CTAButton variant="light">
              Enroll Now
            </CTAButton>
          </Link>
        </Container>
      </StyledSection>
    </>
  );
};

export default Academy; 