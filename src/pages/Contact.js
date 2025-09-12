import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert , Card} from 'react-bootstrap';
import contactHeaderBg from "../assets/contactHeaderBg.jpg"
import { TelephoneFill, EnvelopeFill } from "react-bootstrap-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    
  });

  const [showMessage, setShowMessage] = useState(false);
  const [messageType, setMessageType] = useState('');
  const [messageText, setMessageText] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setMessageType('danger');
      setMessageText('Please fill in all required fields.');
      setShowMessage(true);
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setMessageType('danger');
      setMessageText('Please enter a valid email address.');
      setShowMessage(true);
      return;
    }
    
    // In a real app, you would send the data to a server here
    console.log('Form data submitted:', formData);
    
    // Show success message
    setMessageType('success');
    setMessageText('Thank you for your message! We will get back to you soon.');
    setShowMessage(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      category: '',
    });
  };

  return (
    <>

<style>{`

.hero-section {
background-image: url(${contactHeaderBg});
background-size: cover;
background-position: center top; /* Align from top */
height: 620px;
width: 100%;
position: relative;
padding-top: 80px; /* Push content/image downward */
box-sizing: border-box;
background-repeat: no-repeat;
}

  @media (max-width: 768px) {
    .hero-section {
      height: 380px;
    }
  }

  @media (max-width: 480px) {
    .hero-section {
      height: 280px;
    }
  }
 `}</style>




      <section>
      <div className="hero-section">
        
      </div>
      </section>

      {/* <section className="section">
        <Container>
          <Row>
            <Col lg={6} className="mb-5">
              <h2>Contact Information</h2>
              <p className="mb-4">
                Have questions about our programs or want to get involved? 
                Fill out the form or reach out to us directly using the information below.
              </p>
              
              <div className="contact-info">
                <div className="mb-3">
                  <h5>Email</h5>
                  <p><a href="mailto:info@youngpreneurs.in">info@youngpreneurs.in</a></p>
                </div>
                
                <div className="mb-3">
                  <h5>Location</h5>
                  <p>Youngpreneurs Future Titans<br />India</p>
                </div>
                
                <div className="mb-3">
                  <h5>Social Media</h5>
                  <div className="social-links">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="me-3">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="me-3">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="me-3">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={6}>
              <h2>Send Us a Message</h2>
              {showMessage && (
                <Alert 
                  variant={messageType} 
                  onClose={() => setShowMessage(false)} 
                  dismissible
                >
                  {messageText}
                </Alert>
              )}
              
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name *</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Email *</Form.Label>
                  <Form.Control 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
                
                <Form.Group className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                  />
                </Form.Group>
                
                
                
                <Form.Group className="mb-3">
                  <Form.Label>Message *</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={5} 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
                
                <Button
  variant="primary"
  type="submit"
  className="w-100"
  style={{ color: "blue" }}
>
  Send Message
</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section> */}
      <section style={{ padding: "60px 0", backgroundColor: "#fff" }}>
      <Container>
        {/* Section Title */}
        <div className="text-center mb-5">
          <p style={{ color: "red", fontWeight: "bold", marginBottom: "5px" }}>
            CONTACT US
          </p>
          <h2 style={{ fontWeight: "700", color: "#2f4f4f" }}>
            Get In Touch With Youngpreneurs
          </h2>
        </div>

        {/* Contact Cards */}
        <Row className="g-4 justify-content-center">
          {/* Phone */}
          <Col xs={12} md={6} lg={5}>
            <Card
              className="text-center shadow-md border-2"
              style={{ borderRadius: "15px", padding: "30px" }}
            >
              <Card.Body>
                <TelephoneFill
                  size={40}
                  style={{ color: "red", marginBottom: "15px" }}
                />
                <Card.Title style={{ fontWeight: "600" }}>Phone Number</Card.Title>
                <Card.Text style={{ color: "gray" }}>+91-9038428532</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Email */}
          <Col xs={12} md={6} lg={5}>
            <Card
              className="text-center shadow-sm border-2"
              style={{ borderRadius: "15px", padding: "30px" }}
            >
              <Card.Body>
                <EnvelopeFill
                  size={40}
                  style={{ color: "red", marginBottom: "15px" }}
                />
                <Card.Title style={{ fontWeight: "600" }}>Email Us</Card.Title>
                <Card.Text style={{ color: "gray" }}>
                  youngpreneursfuturetitans@gmail.com
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  );
};

export default Contact; 