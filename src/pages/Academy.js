import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Academy = () => {
  return (
    <>
      <section className="page-header bg-primary text-white text-center py-5">
        <Container>
          <h1>YoungPreneur Academy</h1>
          <p className="lead">Comprehensive entrepreneurship education for students</p>
        </Container>
      </section>

      <section className="section">
        <Container>
          <Row className="mb-5">
            <Col lg={6} className="mb-4">
              <h2>About YoungPreneur Academy</h2>
              <p>
                YoungPreneur Academy offers comprehensive entrepreneurship education for students, 
                teaching them business skills, design thinking, and leadership through practical 
                experience. Our curriculum is designed by educators and entrepreneurs to provide 
                students with the knowledge and tools they need to succeed in an entrepreneurial world.
              </p>
              <p>
                Through workshops, hands-on projects, and mentorship, students develop not only 
                business acumen but also valuable soft skills like critical thinking, problem-solving, 
                teamwork, and communication.
              </p>
            </Col>
            <Col lg={6} className="d-flex align-items-center">
              <img 
                src={require('../assets/academy-main.jpg')} 
                alt="YoungPreneur Academy" 
                className="img-fluid rounded shadow" 
              />
            </Col>
          </Row>

          <div className="section-title mt-5">
            <h2>Academy Programs</h2>
          </div>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Weekend Workshops</Card.Title>
                  <Card.Text>
                    Intensive weekend sessions focusing on specific entrepreneurial skills and 
                    topics, perfect for busy students.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Summer Intensives</Card.Title>
                  <Card.Text>
                    Week-long immersive programs during school breaks, where students develop and 
                    pitch their own business ideas.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Year-Round Programs</Card.Title>
                  <Card.Text>
                    Comprehensive curriculum delivered throughout the academic year, integrated 
                    with school schedules.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section bg-light">
        <Container>
          <h2 className="text-center mb-5">What Students Learn</h2>
          <Row>
            <Col md={6} lg={3} className="mb-4">
              <Card className="h-100 text-center">
                <Card.Body>
                  <i className="fas fa-lightbulb fa-3x mb-3 text-primary"></i>
                  <Card.Title>Ideation</Card.Title>
                  <Card.Text>
                    Techniques for generating, evaluating, and refining business ideas.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Card className="h-100 text-center">
                <Card.Body>
                  <i className="fas fa-chart-line fa-3x mb-3 text-primary"></i>
                  <Card.Title>Business Fundamentals</Card.Title>
                  <Card.Text>
                    Understanding markets, business models, and financial planning.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Card className="h-100 text-center">
                <Card.Body>
                  <i className="fas fa-comments fa-3x mb-3 text-primary"></i>
                  <Card.Title>Communication</Card.Title>
                  <Card.Text>
                    Pitching ideas, public speaking, and persuasive presentation skills.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Card className="h-100 text-center">
                <Card.Body>
                  <i className="fas fa-users fa-3x mb-3 text-primary"></i>
                  <Card.Title>Leadership</Card.Title>
                  <Card.Text>
                    Team management, decision-making, and collaborative problem-solving.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section">
        <Container>
          <Row>
            <Col lg={6} className="mb-4">
              <h2>Learning Methodology</h2>
              <p>
                Our approach combines theory with practice, ensuring students don't just learn about 
                entrepreneurship but experience it firsthand. Key elements of our methodology include:
              </p>
              <ul className="mt-3">
                <li><strong>Experiential Learning:</strong> Students work on real projects and solve actual challenges.</li>
                <li><strong>Mentorship:</strong> Guidance from experienced entrepreneurs and industry professionals.</li>
                <li><strong>Design Thinking:</strong> A human-centered approach to problem-solving and innovation.</li>
                <li><strong>Peer Learning:</strong> Collaboration and feedback among students to enhance understanding.</li>
                <li><strong>Reflection:</strong> Regular opportunities to analyze and learn from experiences.</li>
              </ul>
            </Col>
            <Col lg={6}>
              <h2>Our Instructors</h2>
              <p>
                YoungPreneur Academy instructors are a diverse group of educators, entrepreneurs, and 
                industry professionals passionate about nurturing the next generation of business leaders. 
                They bring real-world experience and expertise to the classroom, providing students with 
                insights that go beyond textbook learning.
              </p>
              <p>
                All instructors undergo rigorous training in our curriculum and teaching methodology, 
                ensuring consistency in the quality of education across all our programs.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section bg-primary text-white text-center">
        <Container>
          <h2 className="mb-4">Ready to Join YoungPreneur Academy?</h2>
          <p className="mb-4">
            Enroll today and start your journey to becoming a successful entrepreneur.
          </p>
          <Link to="/contact" className="btn btn-light btn-lg">
            Enroll Now
          </Link>
        </Container>
      </section>
    </>
  );
};

export default Academy; 