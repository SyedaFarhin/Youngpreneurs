import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import contactHeaderBg from "../assets/contactHeaderBg.jpg"
import { TelephoneFill, EnvelopeFill } from "react-bootstrap-icons";
import emailjs from "emailjs-com";
const Contact = () => {
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_c7slref",
        "template_vf1quro",
        {
          to_email: "devika@youngpreneurs.ai",
          from_name: e.target.name.value,
          from_email: e.target.email.value,
          subject: e.target.subject.value,
          message: e.target.message.value,
        },
        "E8lk4udkqNof2HatE"
      )
      .then(
        (result) => {
          setStatus("Message Sent Successfully!");
          e.target.reset();
        },
        (error) => {
          setStatus("Failed to send message. Try again!");
        }
      );
  };







  return (
    <>

<style>{`





.hero-section {
  background-image: url(${contactHeaderBg});
  background-size: cover;            /* ensures full coverage without stretching */
  background-position: center top;   /* better positioning for tall mobile screens */
  background-repeat: no-repeat;
  width: 100%;
  min-height: 60vh;                  /* gives a tall hero on desktop */
   max-height: 100vh;  
  position: relative;
}

/* Tablet */
@media (max-width: 768px) {
  .hero-section {
    min-height: 50vh;                /* slightly smaller */
    background-position: top center; /* focus top part of image */
  }
}

/* Mobile */
@media (max-width: 480px) {
  .hero-section {
    min-height: 40vh;                /* prevent extreme zoom-in */
    background-size: contain;        /* show full image */
    background-position: center;     /* center align */
    background-repeat: no-repeat;
    background-color: #000;          /* optional fallback behind image */
  }
}
















    .contact-container {
  max-width: 500px;
  margin: 50px auto;
  padding: 25px;
  background: #ffffff;
  border-radius: 14px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.contact-container h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 28px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 16px;
  outline: none;
  transition: 0.3s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: #ff7b7b;
  box-shadow: 0 0 5px rgba(255, 0, 0, 0.2);
}

.contact-form button {
  padding: 12px;
  background: #134734;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s ease;
}

.contact-form button:hover {
  background: #dcae1a;
}

.status-msg {
  text-align: center;
  margin-top: 10px;
  font-size: 16px;
  color: green;
}

/* Responsive */
@media (max-width: 500px) {
  .contact-container {
    margin: 20px;
    padding: 20px;
  }

  .contact-container h2 {
    font-size: 24px;
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
          <p style={{ color: "#dcae1a", fontWeight: "bold", marginBottom: "5px" }}>
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
              style={{ borderRadius: "15px", padding: "30px", height: "100%" }}
            >
              <Card.Body style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ marginBottom: "15px" }}>
                  <TelephoneFill
                    size={40}
                    style={{ color: "#dcae1a" }}
                  />
                </div>
                <Card.Title style={{ fontWeight: "600", textAlign: "center" }}>Phone Number</Card.Title>
                <Card.Text style={{ color: "gray", textAlign: "center", marginBottom: "4px" }}>+91 7980783305</Card.Text>
                <Card.Text style={{ color: "gray", textAlign: "center" }}>+91 9674908532</Card.Text>

              </Card.Body>
            </Card>
          </Col>

          {/* Email */}
          <Col xs={12} md={6} lg={5}>
            <Card
              className="text-center shadow-md border-2"
              style={{ borderRadius: "15px", padding: "30px", height: "100%" }}
            >
              <Card.Body style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ marginBottom: "15px" }}>
                  <EnvelopeFill
                    size={40}
                    style={{ color: "#dcae1a" }}
                  />
                </div>
                <Card.Title style={{ fontWeight: "600", textAlign: "center" }}>Email Us</Card.Title>
                <Card.Text style={{ color: "gray", textAlign: "center", marginBottom: "4px" }}>
                  devika@youngpreneurs.ai
                </Card.Text>
                <Card.Text style={{ color: "gray", textAlign: "center" }}>
                  diya@youngpreneurs.ai
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>


    <div className="contact-container">
      <h2 style={{color:" #134734"}}>Contact Us</h2>

      <form onSubmit={sendEmail} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
        />

        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          required
        ></textarea>

        <button type="submit">Send Message</button>

        {status && <p className="status-msg">{status}</p>}
      </form>
    </div>


    </>
  );
};

export default Contact; 