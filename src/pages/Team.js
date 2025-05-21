import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/global.css';

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
    <div className="team-page">
      <section className="page-header bg-gradient text-white py-5">
        <Container>
          <div className="text-center">
            <h1 className="display-4 mb-3 fw-bold">Our Team</h1>
            <p className="lead mb-0">Meet the passionate individuals behind Youngpreneurs</p>
          </div>
        </Container>
      </section>

      <section className="section py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="mb-3 fw-bold">Leadership Team</h2>
            <p className="text-muted max-width-800 mx-auto">
              Our team is made up of educators, entrepreneurs, and industry professionals 
              who are passionate about nurturing the next generation of entrepreneurs.
            </p>
          </div>

          <Row className="g-4">
            {teamMembers.map(member => (
              <Col md={6} lg={3} key={member.id}>
                <Card className="team-card h-100 border-0">
                  <div className="card-img-wrapper">
                    <Card.Img 
                      variant="top" 
                      src={member.image} 
                      className="img-fluid"
                      alt={`${member.name} - ${member.position}`}
                    />
                  </div>
                  <Card.Body className="text-center p-4">
                    <Card.Title className="h4 mb-2 fw-bold">{member.name}</Card.Title>
                    <Card.Subtitle className="text-accent mb-3">{member.position}</Card.Subtitle>
                    <Card.Text className="text-muted">{member.bio}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section bg-light py-5">
        <Container>
          <div className="text-center mb-5">
            <h2 className="mb-3 fw-bold">Our Advisors</h2>
            <p className="text-muted max-width-800 mx-auto">
              We are fortunate to have the guidance of these distinguished professionals 
              who provide valuable insights and mentorship to our team and participants.
            </p>
          </div>

          <Row className="g-4">
            <Col md={6}>
              <Card className="advisor-card h-100 border-0">
                <Card.Body className="p-4">
                  <Card.Title className="h4 mb-2 fw-bold">Advisor 1</Card.Title>
                  <Card.Subtitle className="text-accent mb-3">Industry Expert</Card.Subtitle>
                  <Card.Text className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, 
                    a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="advisor-card h-100 border-0">
                <Card.Body className="p-4">
                  <Card.Title className="h4 mb-2 fw-bold">Advisor 2</Card.Title>
                  <Card.Subtitle className="text-accent mb-3">Education Specialist</Card.Subtitle>
                  <Card.Text className="text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, 
                    a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section py-5">
        <Container className="text-center">
          <h2 className="mb-3 fw-bold">Join Our Team</h2>
          <p className="text-muted max-width-800 mx-auto mb-4">
            We're always looking for passionate individuals to join our team. If you're excited 
            about entrepreneurship education and want to make a difference, we'd love to hear from you.
          </p>
          <a href="/contact" className="btn btn-primary btn-lg">Get In Touch</a>
        </Container>
      </section>

      <style jsx>{`
        .team-page {
          background-color: var(--color-white);
          font-family: 'Poppins', sans-serif;
        }
        
        .page-header {
          background: linear-gradient(135deg, #e82124 0%, #347c53 100%);
        }
        
        .team-card {
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          overflow: hidden;
        }
        
        .team-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
        }
        
        .card-img-wrapper {
          overflow: hidden;
          border-radius: 12px 12px 0 0;
          position: relative;
        }
        
        .card-img-wrapper::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.1) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .team-card:hover .card-img-wrapper::after {
          opacity: 1;
        }
        
        .card-img-wrapper img {
          transition: transform 0.5s ease;
        }
        
        .team-card:hover .card-img-wrapper img {
          transform: scale(1.05);
        }
        
        .advisor-card {
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
        }
        
        .advisor-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
        }
        
        .max-width-800 {
          max-width: 800px;
        }
        
        .section {
          padding: var(--spacing-3xl) 0;
        }
        
        .btn-primary {
          background-color: #e82124;
          border-color: #e82124;
          transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
          background-color: #347c53;
          border-color: #347c53;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        
        .text-accent {
          color: #e5c16f;
        }
        
        @media (max-width: 768px) {
          .section {
            padding: var(--spacing-2xl) 0;
          }
          
          .team-card, .advisor-card {
            margin-bottom: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Team; 