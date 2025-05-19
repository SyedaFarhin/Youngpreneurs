import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ForSchools = () => {
  return (
    <>
      <section className="page-header bg-primary text-white text-center py-5">
        <Container>
          <h1>For Schools</h1>
          <p className="lead">Partner with Youngpreneurs to bring entrepreneurship education to your students</p>
        </Container>
      </section>

      <section className="section">
        <Container>
          <Row className="mb-5">
            <Col lg={6} className="mb-4">
              <h2>Why Partner With Us?</h2>
              <p>
                Integrating entrepreneurship education into your school curriculum helps prepare 
                students for the future of work and develop essential 21st-century skills. Our 
                programs are designed to:
              </p>
              <ul className="mt-3">
                <li>Complement your existing curriculum</li>
                <li>Foster creativity and critical thinking</li>
                <li>Build communication and presentation skills</li>
                <li>Teach financial literacy</li>
                <li>Develop leadership abilities</li>
                <li>Connect classroom learning to real-world applications</li>
              </ul>
            </Col>
            <Col lg={6} className="d-flex align-items-center">
              <img 
                src={require('../assets/schools.jpg')} 
                alt="Students in classroom" 
                className="img-fluid rounded shadow" 
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section bg-light">
        <Container>
          <div className="section-title">
            <h2>Our School Programs</h2>
          </div>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>In-School Workshops</Card.Title>
                  <Card.Text>
                    Interactive sessions led by our experienced facilitators, 
                    designed to fit into your school schedule and curriculum.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Entrepreneurship Clubs</Card.Title>
                  <Card.Text>
                    Support and resources for establishing and running successful 
                    entrepreneurship clubs as extracurricular activities.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Teacher Training</Card.Title>
                  <Card.Text>
                    Professional development for educators interested in integrating 
                    entrepreneurship education into their teaching.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section text-center">
        <Container>
          <h2 className="mb-4">Ready to Partner With Us?</h2>
          <p className="mb-4">
            Contact us to discuss how we can bring entrepreneurship education to your school.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Get in Touch
          </Link>
        </Container>
      </section>
    </>
  );
};

export default ForSchools; 