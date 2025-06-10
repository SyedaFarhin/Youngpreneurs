import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import contactHeaderBg from "../assets/contactHeaderBg.jpg"


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    category: '',
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
        {/* You can place overlay text, buttons, or other elements here */}
      </div>
      </section>

      <section className="section">
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
                  <Form.Label>I am a:</Form.Label>
                  <Form.Select 
                    name="category" 
                    value={formData.category} 
                    onChange={handleChange}
                  >
                    <option value="">Please select</option>
                    <option value="student">Student</option>
                    <option value="parent">Parent</option>
                    <option value="teacher">Teacher/Educator</option>
                    <option value="school">School Representative</option>
                    <option value="partner">Potential Partner</option>
                    <option value="other">Other</option>
                  </Form.Select>
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
                
                <Button variant="primary" type="submit" className="w-100">
                  Send Message
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact; 