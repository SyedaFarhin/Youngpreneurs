import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ForParents = () => {
  return (
    <>
      <section className="page-header bg-primary text-white text-center py-5">
        <Container>
          <h1>A Message to Parents</h1>
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
              />
            </Col>
          </Row>

          <div className="section-title mt-5">
            <h2>How Youngpreneurs Benefits Your Child</h2>
          </div>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100">
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
              <Card className="h-100">
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
              <Card className="h-100">
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

      <section className="section bg-light">
        <Container>
          <h2 className="text-center mb-5">Frequently Asked Questions</h2>
          <Row>
            <Col lg={6} className="mb-4">
              <h4>What age groups are your programs suitable for?</h4>
              <p>
                Our programs are designed for students aged 10-18, with different 
                curriculums tailored to various age groups and learning levels.
              </p>
            </Col>
            <Col lg={6} className="mb-4">
              <h4>How much time commitment is required?</h4>
              <p>
                Program time commitments vary. Our competition is project-based, while 
                our academy offers flexible schedules ranging from weekend workshops to 
                week-long intensives.
              </p>
            </Col>
            <Col lg={6} className="mb-4">
              <h4>Does my child need any prior experience?</h4>
              <p>
                No prior experience is needed! Our programs are designed to introduce 
                entrepreneurship concepts to beginners while also challenging more 
                experienced students.
              </p>
            </Col>
            <Col lg={6} className="mb-4">
              <h4>How can I support my child's entrepreneurial journey?</h4>
              <p>
                Encourage their ideas, help them reflect on their experiences, and consider 
                participating in our parent workshops where you'll learn how to nurture their 
                entrepreneurial mindset at home.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section text-center">
        <Container>
          <h2 className="mb-4">Ready to Get Started?</h2>
          <p className="mb-4">
            Enroll your child in our programs and help them develop the skills and mindset for future success.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Contact Us Today
          </Link>
        </Container>
      </section>
    </>
  );
};

export default ForParents; 