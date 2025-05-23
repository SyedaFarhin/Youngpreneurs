import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/global.css';
import styled from 'styled-components';
const Media = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Youngpreneurs Launches New Academy Program',
      source: 'Education Today',
      date: 'May 15, 2023',
      excerpt: 'Youngpreneurs expands its offerings with a comprehensive entrepreneurship curriculum designed for schools across India.',
      link: '#'
    },
    {
      id: 2,
      title: 'Future Titans Competition Announces Winners',
      source: 'Business Daily',
      date: 'April 3, 2023',
      excerpt: 'Young innovators showcase remarkable entrepreneurial ideas at the annual Youngpreneurs Future Titans Competition.',
      link: '#'
    },
    {
      id: 3,
      title: 'Interview: Nurturing Young Entrepreneurial Talent',
      source: 'Startup Magazine',
      date: 'February 20, 2023',
      excerpt: 'An exclusive interview with the founders of Youngpreneurs on their mission to develop the next generation of business leaders.',
      link: '#'
    },
    {
      id: 4,
      title: 'Student Startups Making a Difference',
      source: 'Impact Journal',
      date: 'January 12, 2023',
      excerpt: 'Meet the young entrepreneurs from Youngpreneurs programs who are creating social impact through their ventures.',
      link: '#'
    }
  ];

  const pressReleases = [
    {
      id: 1,
      title: 'Youngpreneurs Announces Partnership with Leading Schools',
      date: 'June 5, 2023',
      excerpt: 'New collaboration brings entrepreneurship education to thousands of students across the country.'
    },
    {
      id: 2,
      title: 'Future Titans Competition 2024 Registration Now Open',
      date: 'May 28, 2023',
      excerpt: 'Annual competition expands categories and increases prize pool for young entrepreneurs.'
    },
    {
      id: 3,
      title: 'Youngpreneurs Receives Educational Excellence Award',
      date: 'April 15, 2023',
      excerpt: 'Organization recognized for innovative approach to developing entrepreneurial skills in students.'
    }
  ];
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

  return (
    <>
      <section className="page-header" style={{ 
        background: 'linear-gradient(135deg, var(--primary-red), var(--deep-green))',
        color: 'var(--white)',
        padding: 'var(--spacing-xl) 0'
      }}>
        <Container>
          <h1 className="display-4 mb-3">Media & Press</h1>
          {/* <p className="lead mb-0">Latest news, articles, and press releases about Youngpreneurs</p> */}
        <Lead>Latest news, articles, and press releases about Youngpreneurs</Lead>

        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="section-title">
            <h2 style={{ color: 'var(--primary-red)' }}>In the News</h2>
          </div>
          <Row>
            {newsItems.map(item => (
              <Col lg={6} className="mb-4" key={item.id}>
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title style={{ color: 'var(--deep-green)' }}>{item.title}</Card.Title>
                    <Card.Subtitle className="mb-3" style={{ color: 'var(--accent-gold)' }}>
                      {item.source} | {item.date}
                    </Card.Subtitle>
                    <Card.Text>{item.excerpt}</Card.Text>
                    <a href={item.link} className="btn btn-primary">Read full article</a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--light-gray)' }}>
        <Container>
          <div className="section-title">
            <h2 style={{ color: 'var(--primary-red)' }}>Press Releases</h2>
          </div>
          <Row>
            {pressReleases.map(release => (
              <Col md={4} className="mb-4" key={release.id}>
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title style={{ color: 'var(--deep-green)' }}>{release.title}</Card.Title>
                    <Card.Subtitle className="mb-3" style={{ color: 'var(--accent-gold)' }}>
                      {release.date}
                    </Card.Subtitle>
                    <Card.Text>{release.excerpt}</Card.Text>
                    <a href="#" className="btn btn-primary">View full release</a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section">
        <Container>
          <div className="section-title">
            <h2 style={{ color: 'var(--primary-red)' }}>Media Resources</h2>
          </div>
          <Row>
            <Col md={6} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title style={{ color: 'var(--deep-green)' }}>Press Kit</Card.Title>
                  <Card.Text>
                    Download our press kit containing logos, photos, and information about Youngpreneurs Future Titans.
                  </Card.Text>
                  <a href="#" className="btn btn-primary">Download Press Kit</a>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title style={{ color: 'var(--deep-green)' }}>Media Inquiries</Card.Title>
                  <Card.Text>
                    For interview requests, additional information, or other media inquiries, please contact our media relations team.
                  </Card.Text>
                  <a href="mailto:media@youngpreneurs.in" className="btn btn-primary">Contact Media Team</a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--light-gray)' }}>
        <Container>
          <div className="section-title">
            <h2 style={{ color: 'var(--primary-red)' }}>Social Media</h2>
          </div>
          <div className="text-center mb-4">
            <p>Follow us on social media for the latest updates, event announcements, and success stories.</p>
          </div>
          <Row className="justify-content-center text-center">
            <Col md={3} sm={6} className="mb-4">
              <a href="#" className="social-link">
                <i className="fab fa-facebook-f fa-3x mb-3" style={{ color: 'var(--primary-red)' }}></i>
                <h4 style={{ color: 'var(--deep-green)' }}>Facebook</h4>
              </a>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <a href="#" className="social-link">
                <i className="fab fa-twitter fa-3x mb-3" style={{ color: 'var(--primary-red)' }}></i>
                <h4 style={{ color: 'var(--deep-green)' }}>Twitter</h4>
              </a>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <a href="#" className="social-link">
                <i className="fab fa-instagram fa-3x mb-3" style={{ color: 'var(--primary-red)' }}></i>
                <h4 style={{ color: 'var(--deep-green)' }}>Instagram</h4>
              </a>
            </Col>
            <Col md={3} sm={6} className="mb-4">
              <a href="#" className="social-link">
                <i className="fab fa-linkedin-in fa-3x mb-3" style={{ color: 'var(--primary-red)' }}></i>
                <h4 style={{ color: 'var(--deep-green)' }}>LinkedIn</h4>
              </a>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Media; 