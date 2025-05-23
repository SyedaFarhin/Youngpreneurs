import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
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

const StoryCard = styled(Card)`
  border: none;
  border-radius: 12px;
  transition: all 0.3s ease;
  overflow: hidden;
  height: 100%;
  background: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 30px rgba(232, 33, 36, 0.15);
  }

  .card-title {
    color: #347c53;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .card-subtitle {
    color: #e82124;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .card-text {
    color: #2d2d2d;
    opacity: 0.8;
    line-height: 1.7;
  }
`;

const SchoolCard = styled(Card)`
  border: none;
  border-radius: 12px;
  transition: all 0.3s ease;
  background: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 30px rgba(52, 124, 83, 0.15);
  }

  .card-title {
    color: #347c53;
    font-weight: 600;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  background: #e82124;
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 8px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  border: none;
  box-shadow: 0 4px 15px rgba(232, 33, 36, 0.2);

  &:hover {
    background: #eb4c4b;
    transform: translateY(-2px);
    color: white;
    box-shadow: 0 6px 20px rgba(232, 33, 36, 0.3);
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

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      name: 'Student 1',
      age: 16,
      project: 'Eco-friendly School Supplies',
      story: 'Started with an idea for sustainable school supplies and developed it into a small business that now supplies eco-friendly products to schools across the region.',
      image: require('../assets/success1.jpg')
    },
    {
      id: 2,
      name: 'Student 2',
      age: 15,
      project: 'Community Tutoring App',
      story: 'Developed an app that connects student tutors with peers who need academic help, creating a platform that has facilitated thousands of tutoring sessions.',
      image: require('../assets/success2.jpg')
    },
    {
      id: 3,
      name: 'Student 3',
      age: 17,
      project: 'Recycled Fashion',
      story: 'Launched a clothing line made from upcycled materials, promoting sustainable fashion and raising awareness about textile waste.',
      image: require('../assets/success3.jpg')
    },
    {
      id: 4,
      name: 'Student 4',
      age: 14,
      project: 'Tech Workshop Initiative',
      story: 'Created a program that brings coding and technology workshops to underserved schools, helping bridge the digital divide in education.',
      image: require('../assets/success4.jpg')
    }
  ];

  return (
    <>
      <PageHeader>
        <Container>
          {/* <h1 className="display-4 fw-bold mb-4">Success Stories</h1> */}
          {/* <p className="lead mb-0">Meet our young entrepreneurs who turned their ideas into reality</p> */}
        <Lead>Meet our young entrepreneurs who turned their ideas into reality</Lead>

        </Container>
      </PageHeader>

      <StyledSection>
        <Container>
          <div className="text-center mb-5">
            <h2 className="mb-4" style={{ color: '#347c53' }}>Student Entrepreneurs</h2>
            <p className="lead" style={{ color: '#2d2d2d', opacity: 0.8 }}>
              These young innovators participated in our programs and have achieved remarkable success 
              with their entrepreneurial ventures. Their stories inspire us and demonstrate the 
              impact of entrepreneurship education.
            </p>
          </div>

          {stories.map((story, index) => (
            <Row key={story.id} className={`mb-5 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
              <Col lg={6} className="mb-4">
                <StoryCard>
                  <Card.Body className="p-4">
                    <Card.Title>{story.name}, Age {story.age}</Card.Title>
                    <Card.Subtitle className="mb-3">{story.project}</Card.Subtitle>
                    <Card.Text>{story.story}</Card.Text>
                    <div className="mt-4">
                      <h6 style={{ color: '#347c53' }}>Achievements</h6>
                      <p className="mb-3" style={{ color: '#2d2d2d', opacity: 0.8 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nullam id dolor id nibh ultricies vehicula ut id elit.
                      </p>
                      <h6 style={{ color: '#347c53' }}>What they learned</h6>
                      <p className="mb-0" style={{ color: '#2d2d2d', opacity: 0.8 }}>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nullam id dolor id nibh ultricies vehicula ut id elit."
                      </p>
                    </div>
                  </Card.Body>
                </StoryCard>
              </Col>
              <Col lg={6} className="d-flex align-items-center">
                <img 
                  src={story.image} 
                  alt={`${story.name}'s project`} 
                  className="img-fluid rounded shadow" 
                  style={{ borderRadius: '12px' }}
                />
              </Col>
            </Row>
          ))}
        </Container>
      </StyledSection>

      <StyledSection style={{ background: '#f8f9fa' }}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="mb-4" style={{ color: '#347c53' }}>School Success Stories</h2>
            <p className="lead" style={{ color: '#2d2d2d', opacity: 0.8 }}>
              Schools that have partnered with Youngpreneurs have seen impressive results, with students 
              developing entrepreneurial mindsets and valuable skills that extend beyond the classroom.
            </p>
          </div>

          <Row>
            <Col md={6} className="mb-4">
              <SchoolCard>
                <Card.Body className="p-4">
                  <Card.Title>School 1</Card.Title>
                  <Card.Text style={{ color: '#2d2d2d', opacity: 0.8 }}>
                    After implementing our entrepreneurship curriculum, this school saw a 30% increase in 
                    student engagement and a growing culture of innovation among both students and teachers.
                  </Card.Text>
                </Card.Body>
              </SchoolCard>
            </Col>
            <Col md={6} className="mb-4">
              <SchoolCard>
                <Card.Body className="p-4">
                  <Card.Title>School 2</Card.Title>
                  <Card.Text style={{ color: '#2d2d2d', opacity: 0.8 }}>
                    This school integrated entrepreneurship education across all subjects, resulting in 
                    improved problem-solving skills and creative thinking among students.
                  </Card.Text>
                </Card.Body>
              </SchoolCard>
            </Col>
          </Row>
        </Container>
      </StyledSection>

      <StyledSection className="text-center">
        <Container>
          <h2 className="mb-4" style={{ color: '#347c53' }}>Join Our Success Stories</h2>
          <p className="lead mb-4" style={{ color: '#2d2d2d', opacity: 0.8 }}>
            You could be the next success story! Join our programs and start your entrepreneurial journey today.
          </p>
          <CTAButton href="/contact">Get Started</CTAButton>
        </Container>
      </StyledSection>
    </>
  );
};

export default SuccessStories; 