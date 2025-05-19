import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Competition = () => {
  return (
    <>
      <section className="page-header bg-primary text-white text-center py-5">
        <Container>
          <h1>Future Titans Competition</h1>
          <p className="lead">Showcasing the next generation of entrepreneurs</p>
        </Container>
      </section>

      <section className="section">
        <Container>
          <Row className="mb-5">
            <Col lg={6} className="mb-4">
              <h2>About the Competition</h2>
              <p>
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
              />
            </Col>
          </Row>

          <div className="section-title mt-5">
            <h2>Competition Categories</h2>
          </div>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Social Innovation</Card.Title>
                  <Card.Text>
                    Business ideas focused on addressing social challenges and making 
                    a positive impact in communities.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Technology</Card.Title>
                  <Card.Text>
                    Tech-based solutions and digital innovations that solve problems 
                    or improve existing processes.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Creative Enterprise</Card.Title>
                  <Card.Text>
                    Product or service ideas that showcase creativity and originality 
                    in addressing market needs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section bg-light">
        <Container>
          <h2 className="text-center mb-5">How It Works</h2>
          <Row>
            <Col md={3} className="mb-4 text-center">
              <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                <h3>1</h3>
              </div>
              <h4>Register</h4>
              <p>Sign up to participate in the competition.</p>
            </Col>
            <Col md={3} className="mb-4 text-center">
              <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                <h3>2</h3>
              </div>
              <h4>Develop</h4>
              <p>Refine your idea with guidance from mentors.</p>
            </Col>
            <Col md={3} className="mb-4 text-center">
              <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                <h3>3</h3>
              </div>
              <h4>Submit</h4>
              <p>Submit your business plan and presentation.</p>
            </Col>
            <Col md={3} className="mb-4 text-center">
              <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '80px', height: '80px' }}>
                <h3>4</h3>
              </div>
              <h4>Pitch</h4>
              <p>Finalists present to a panel of judges.</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section">
        <Container>
          <h2 className="text-center mb-5">Prizes and Benefits</h2>
          <Row>
            <Col md={6} lg={3} className="mb-4">
              <Card className="h-100 text-center">
                <Card.Body>
                  <Card.Title>Cash Prizes</Card.Title>
                  <Card.Text>
                    Substantial cash awards for winners to invest in their ventures.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Card className="h-100 text-center">
                <Card.Body>
                  <Card.Title>Mentorship</Card.Title>
                  <Card.Text>
                    One-on-one guidance from industry experts and successful entrepreneurs.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Card className="h-100 text-center">
                <Card.Body>
                  <Card.Title>Networking</Card.Title>
                  <Card.Text>
                    Connections with potential investors, partners, and the entrepreneurial community.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <Card className="h-100 text-center">
                <Card.Body>
                  <Card.Title>Recognition</Card.Title>
                  <Card.Text>
                    Media exposure and recognition for your innovative ideas.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section bg-primary text-white text-center">
        <Container>
          <h2 className="mb-4">Ready to Showcase Your Ideas?</h2>
          <p className="mb-4">
            Join the Future Titans Competition and take the first step in your entrepreneurial journey.
          </p>
          <Link to="/contact" className="btn btn-light btn-lg">
            Register Now
          </Link>
        </Container>
      </section>
    </>
  );
};

export default Competition; 