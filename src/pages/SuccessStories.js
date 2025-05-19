import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

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
      <section className="page-header bg-primary text-white text-center py-5">
        <Container>
          <h1>Success Stories</h1>
          <p className="lead">Meet our young entrepreneurs who turned their ideas into reality</p>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="text-center mb-5">
            <h2>Student Entrepreneurs</h2>
            <p>
              These young innovators participated in our programs and have achieved remarkable success 
              with their entrepreneurial ventures. Their stories inspire us and demonstrate the 
              impact of entrepreneurship education.
            </p>
          </div>

          {stories.map((story, index) => (
            <Row key={story.id} className={`mb-5 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
              <Col lg={6} className="mb-4">
                <Card className="border-0 shadow h-100">
                  <Card.Body>
                    <Card.Title>{story.name}, Age {story.age}</Card.Title>
                    <Card.Subtitle className="mb-3 text-primary">{story.project}</Card.Subtitle>
                    <Card.Text>{story.story}</Card.Text>
                    <p>
                      <strong>Achievements:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Nullam id dolor id nibh ultricies vehicula ut id elit.
                    </p>
                    <p>
                      <strong>What they learned:</strong> "Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                      Nullam id dolor id nibh ultricies vehicula ut id elit."
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6} className="d-flex align-items-center">
                <img 
                  src={story.image} 
                  alt={`${story.name}'s project`} 
                  className="img-fluid rounded shadow" 
                />
              </Col>
            </Row>
          ))}
        </Container>
      </section>

      <section className="section bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2>School Success Stories</h2>
            <p>
              Schools that have partnered with Youngpreneurs have seen impressive results, with students 
              developing entrepreneurial mindsets and valuable skills that extend beyond the classroom.
            </p>
          </div>

          <Row>
            <Col md={6} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>School 1</Card.Title>
                  <Card.Text>
                    After implementing our entrepreneurship curriculum, this school saw a 30% increase in 
                    student engagement and a growing culture of innovation among both students and teachers.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>School 2</Card.Title>
                  <Card.Text>
                    This school integrated entrepreneurship education across all subjects, resulting in 
                    improved problem-solving skills and creative thinking among students.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section text-center">
        <Container>
          <h2 className="mb-4">Join Our Success Stories</h2>
          <p className="mb-4">
            You could be the next success story! Join our programs and start your entrepreneurial journey today.
          </p>
          <a href="/contact" className="btn btn-primary btn-lg">Get Started</a>
        </Container>
      </section>
    </>
  );
};

export default SuccessStories; 