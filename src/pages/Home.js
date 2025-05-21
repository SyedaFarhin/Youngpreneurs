import React, { useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroVideo from '../assets/videoplayback.mp4';
import AnimatedLink from '../components/AnimatedLink';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <section className="hero-section" style={{ position: "relative", overflow: "hidden" }}>
        {/* Background Video */}
        <video autoPlay muted loop playsInline className="hero-video">
  <source src="/assets/videoplayback.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>


        {/* Content
        <div>
          <h1 className="hero-title">
            <span className="text-primary-red">Youngpreneurs</span> <span className="text-primary-gold">Future Titans</span>
          </h1>
          <h2 className="hero-subtitle" data-aos="fade-up" data-aos-delay="200">Driving Change through Entrepreneurship</h2>
          <Link to="/contact">
            <Button variant="primary" size="lg" className="hero-button" data-aos="fade-up" data-aos-delay="400">Join Us Today</Button>
          </Link>
        </div> */}

  
      </section>

      <section className="section parallax-section">
        <Container>
          <div className="section-title" data-aos="fade-up">
            <h2>Welcome to Youngpreneurs</h2>
          </div>
          <Row>
            <Col lg={6} data-aos="fade-right" data-aos-delay="200">
              <h5 className="mb-4">Not Just a Program—A Movement for Future Leaders</h5>
              <p>
                The world doesn't wait for leaders—it creates them. Youngpreneurs is more than a program;
                it's a movement that empowers students to think, build, and lead like entrepreneurs.
              </p>
              <Link to="/about-us">
                <Button variant="outline-primary" className="mt-3">Learn More</Button>
              </Link>
            </Col>
            <Col lg={6} className="d-flex align-items-center justify-content-center" data-aos="fade-left" data-aos-delay="400">
              <div className="image-container d-flex gap-3">
                <img src={require('../assets/mission.png')} alt="About Youngpreneurs" className="img-fluid rounded" />
                <img src={require('../assets/vision.png')} alt="About Youngpreneurs" className="img-fluid rounded" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section bg-light parallax-section">
        <Container>
          <div className="section-title" data-aos="fade-up">
            <h2>Our Programs</h2>
          </div>
          <Row>
            <Col md={6} className="mb-4" data-aos="fade-up" data-aos-delay="200">
              <Card className="program-card">
                <Card.Img variant="top" src={require('../assets/futuretitans.png')} />
                <Card.Body>
                  <Card.Title>Future Titans Competition</Card.Title>
                  <Card.Text>
                    A platform for young innovators to showcase their entrepreneurial ideas and
                    win mentorship and resources to bring their visions to life.
                  </Card.Text>
                  <Link to="/competition-details">
                    <Button variant="primary">Learn More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-4" data-aos="fade-up" data-aos-delay="400">
              <Card className="program-card">
                <Card.Img variant="top" src={require('../assets/academy.jpg')} />
                <Card.Body>
                  <Card.Title>YoungPreneur Academy</Card.Title>
                  <Card.Text>
                    Comprehensive entrepreneurship education for students, teaching them business skills,
                    design thinking, and leadership through practical experience.
                  </Card.Text>
                  <Link to="/youngpreneur-academy">
                    <Button variant="primary">Learn More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section parallax-section">
        <Container>
          <div className="section-title" data-aos="fade-up">
            <h2>Success Stories</h2>
          </div>
          <Row>
            <Col lg={4} className="mb-4" data-aos="fade-up" data-aos-delay="100">
              <Card className="h-100 story-card">
                <Card.Body>
                  <Card.Title>Student Entrepreneur 1</Card.Title>
                  <Card.Text>
                    "Youngpreneurs gave me the confidence to pursue my business idea.
                    Now I'm running a successful startup while still in school!"
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} className="mb-4" data-aos="fade-up" data-aos-delay="300">
              <Card className="h-100 story-card">
                <Card.Body>
                  <Card.Title>Student Entrepreneur 2</Card.Title>
                  <Card.Text>
                    "The mentorship I received through the Future Titans competition
                    was invaluable. It helped me turn my concept into reality."
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} className="mb-4" data-aos="fade-up" data-aos-delay="500">
              <Card className="h-100 story-card">
                <Card.Body>
                  <Card.Title>Student Entrepreneur 3</Card.Title>
                  <Card.Text>
                    "The practical skills I learned at YoungPreneur Academy
                    gave me an edge in school and prepared me for future success."
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="text-center mt-4" data-aos="fade-up" data-aos-delay="600">
            <Link to="/success-stories">
              <Button variant="outline-primary">Read More Success Stories</Button>
            </Link>
          </div>
        </Container>
      </section>

      <section className="section  text-white text-center parallax-section" style={{ backgroundColor: '#e82124' }}>
        <Container>
          <h2 className="mb-4" data-aos="fade-up">Ready to Begin Your Entrepreneurial Journey?</h2>
          <p className="mb-4" data-aos="fade-up" data-aos-delay="200">Join Youngpreneurs today and start building the future you envision.</p>
          <AnimatedLink to="/contact" className="btn btn-light btn-lg ai-pointer" data-aos="fade-up" data-aos-delay="400">
            Get Started Now
          </AnimatedLink>
        </Container>
      </section>

      {/* Design Elements Showcase */}
     
    </>
  );
};

export default Home; 