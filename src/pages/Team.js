import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Team Member 1',
      position: 'Founder & CEO',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.',
      image: require('../assets/team1.jpg')
    },
    {
      id: 2,
      name: 'Team Member 2',
      position: 'Co-Founder & COO',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.',
      image: require('../assets/team2.jpg')
    },
    {
      id: 3,
      name: 'Team Member 3',
      position: 'Program Director',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.',
      image: require('../assets/team3.jpg')
    },
    {
      id: 4,
      name: 'Team Member 4',
      position: 'Education Lead',
      bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.',
      image: require('../assets/team4.jpg')
    }
  ];

  return (
    <>
      <section className="page-header bg-primary text-white text-center py-5">
        <Container>
          <h1>Our Team</h1>
          <p className="lead">Meet the passionate individuals behind Youngpreneurs</p>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="mb-5">
            <h2 className="text-center mb-4">Leadership Team</h2>
            <p className="text-center">
              Our team is made up of educators, entrepreneurs, and industry professionals 
              who are passionate about nurturing the next generation of entrepreneurs.
            </p>
          </div>

          <Row>
            {teamMembers.map(member => (
              <Col md={6} lg={3} className="mb-4" key={member.id}>
                <Card className="team-card h-100">
                  <Card.Img variant="top" src={member.image} className="img-fluid" />
                  <Card.Body className="text-center">
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{member.position}</Card.Subtitle>
                    <Card.Text>{member.bio}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section bg-light">
        <Container>
          <div className="text-center mb-5">
            <h2>Our Advisors</h2>
            <p>
              We are fortunate to have the guidance of these distinguished professionals 
              who provide valuable insights and mentorship to our team and participants.
            </p>
          </div>

          <Row>
            <Col md={6} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Advisor 1</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Industry Expert</Card.Subtitle>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, 
                    a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>Advisor 2</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Education Specialist</Card.Subtitle>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, 
                    a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section">
        <Container className="text-center">
          <h2 className="mb-4">Join Our Team</h2>
          <p className="mb-4">
            We're always looking for passionate individuals to join our team. If you're excited 
            about entrepreneurship education and want to make a difference, we'd love to hear from you.
          </p>
          <a href="/contact" className="btn btn-primary">Get In Touch</a>
        </Container>
      </section>
    </>
  );
};

export default Team; 