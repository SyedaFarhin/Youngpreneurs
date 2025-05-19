// import React from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';


// const About = () => {
//   return (
//     <>
//       <section className="page-header text-white text-center py-5">
//         <Container>
//           <h1 className="headline">About Us</h1>
//           <p className="subheadline">Learn more about Youngpreneurs Future Titans</p>
//         </Container>
//       </section>

//       <section className="section">
//         <Container>
//           <Row className="mb-5">
//             <Col lg={6} className="mb-4">
//               <h2 className="headline-sm">Our Mission</h2>
//               <p>
//                 Youngpreneurs is dedicated to fostering entrepreneurship in young minds, developing 
//                 future leaders, and empowering them to drive change. We believe that teaching entrepreneurial 
//                 skills early creates confident, innovative, and resilient individuals ready to tackle 
//                 the challenges of tomorrow.
//               </p>
//             </Col>
//             <Col lg={6}>
//               <h2 className="headline-sm">Our Vision</h2>
//               <p>
//                 We envision a world where young people are equipped with the mindset, skills, and resources 
//                 to transform their ideas into reality. By nurturing a generation of entrepreneurial thinkers, 
//                 we aim to contribute to a more innovative, sustainable, and equitable future.
//               </p>
//             </Col>
//           </Row>

//           <div className="section-title mt-5">
//             <h2 className="headline-sm">What We Offer</h2>
//           </div>
//           <Row>
//             <Col md={4} className="mb-4">
//               <Card className="offer-card h-100">
//                 <Card.Body>
//                   <Card.Title>Future Titans Competition</Card.Title>
//                   <Card.Text>
//                     Our flagship competition provides a platform for young innovators to showcase 
//                     their entrepreneurial ideas and win mentorship and resources to bring their visions to life.
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={4} className="mb-4">
//               <Card className="offer-card h-100">
//                 <Card.Body>
//                   <Card.Title>YoungPreneur Academy</Card.Title>
//                   <Card.Text>
//                     Comprehensive entrepreneurship education for students, teaching them business skills, 
//                     design thinking, and leadership through practical experience.
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={4} className="mb-4">
//               <Card className="offer-card h-100">
//                 <Card.Body>
//                   <Card.Title>Mentorship & Resources</Card.Title>
//                   <Card.Text>
//                     We connect young entrepreneurs with industry experts and provide the tools and 
//                     guidance they need to succeed in their entrepreneurial journey.
//                   </Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       <section className="section bg-light">
//         <Container>
//           <div className="section-title">
//             <h2 className="headline-sm">Our Journey</h2>
//           </div>
//           <Row>
//             <Col lg={6} className="mb-4">
//               <p>
//                 Youngpreneurs was founded with a simple yet powerful idea: young people deserve the 
//                 opportunity to develop entrepreneurial skills and mindsets that will serve them throughout 
//                 their lives. What began as a small initiative has grown into a movement that has impacted 
//                 thousands of students across India.
//               </p>
//               <p>
//                 Through our programs, workshops, and competitions, we've witnessed the incredible potential 
//                 of young minds when given the right environment to flourish. Our alumni have gone on to start 
//                 businesses, lead community initiatives, and bring innovative solutions to complex problems.
//               </p>
//             </Col>
//             <Col lg={6}>
//               <p>
//                 We continue to evolve and expand our reach, collaborating with schools, educational institutions, 
//                 and industry partners who share our commitment to nurturing the next generation of entrepreneurs. 
//                 Our approach is constantly refined based on feedback from participants and the latest research 
//                 in entrepreneurship education.
//               </p>
//               <p>
//                 As we look to the future, we remain dedicated to our core mission of empowering young people 
//                 to think and act like entrepreneurs, equipping them with the skills and confidence to shape 
//                 their own futures and make a positive impact on the world.
//               </p>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </>
//   );
// };

// export default About;


import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <>
      <style>{`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

  @font-face {
    font-family: 'Garet';
    src: url('/fonts/Garet-Regular.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Helvetica World';
    src: url('/fonts/HelveticaWorld-Regular.woff2') format('woff2');
  }

  body {
    font-family: 'Poppins', sans-serif;
  }

  .page-header {
    background: radial-gradient(circle, #e82124, #9b0e10);
    animation: fadeInDown 1s ease-out both;
  }

  .headline {
    font-family: 'Helvetica World', sans-serif;
    font-size: 3.5rem;
    font-weight: 900;
    background: linear-gradient(to right, #fff, #ffcbcb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: slideUp 1s ease-out;
  }

  .subheadline {
  font-family: 'Garet', sans-serif;
  font-size: 1.6rem;
  font-style: italic;
  color: #fff3f3;
  letter-spacing: 1px;
  text-transform: capitalize;
  animation: fadeIn 1.3s ease-in-out;
}


  .headline-sm {
    font-family: 'Helvetica World', sans-serif;
    color: #e82124;
    font-size: 2rem;
    margin-bottom: 1rem;
    position: relative;
  }

  .headline-sm::after {
    content: '';
    display: block;
    width: 50px;
    height: 4px;
    background: #e82124;
    margin-top: 8px;
  }

  .section {
    padding: 80px 0;
    animation: fadeIn 1.2s ease-in;
  }

  .section-title {
    text-align: center;
    margin-bottom: 40px;
  }

  .offer-card {
    border: none;
    border-radius: 16px;
    background: white;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    box-shadow: 0 8px 24px rgba(0,0,0,0.05);
    padding: 20px;
  }

  .offer-card:hover {
    transform: translateY(-12px);
    box-shadow: 0 20px 40px rgba(232, 33, 36, 0.3);
    cursor: pointer;
  }

  .bg-light {
    background-color: #fff5f5 !important;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-40px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes slideUp {
    from { transform: translateY(50px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`}</style>


      <section className="page-header text-white text-center py-5">
        <Container>
          <h1 className="headline">About Us</h1>
          <p className="subheadline">Learn more about Youngpreneurs Future Titans</p>
        </Container>
      </section>

      <section className="section">
        <Container>
          <Row className="mb-5">
            <Col lg={6} className="mb-4">
              <h2 className="headline-sm">Our Mission</h2>
              <p>
                Youngpreneurs is dedicated to fostering entrepreneurship in young minds, developing 
                future leaders, and empowering them to drive change. We believe that teaching entrepreneurial 
                skills early creates confident, innovative, and resilient individuals ready to tackle 
                the challenges of tomorrow.
              </p>
            </Col>
            <Col lg={6}>
              <h2 className="headline-sm">Our Vision</h2>
              <p>
                We envision a world where young people are equipped with the mindset, skills, and resources 
                to transform their ideas into reality. By nurturing a generation of entrepreneurial thinkers, 
                we aim to contribute to a more innovative, sustainable, and equitable future.
              </p>
            </Col>
          </Row>

          <div className="section-title mt-5">
            <h2 className="headline-sm">What We Offer</h2>
          </div>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="offer-card h-100">
                <Card.Body>
                  <Card.Title>Future Titans Competition</Card.Title>
                  <Card.Text>
                    Our flagship competition provides a platform for young innovators to showcase 
                    their entrepreneurial ideas and win mentorship and resources to bring their visions to life.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="offer-card h-100">
                <Card.Body>
                  <Card.Title>YoungPreneur Academy</Card.Title>
                  <Card.Text>
                    Comprehensive entrepreneurship education for students, teaching them business skills, 
                    design thinking, and leadership through practical experience.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="offer-card h-100">
                <Card.Body>
                  <Card.Title>Mentorship & Resources</Card.Title>
                  <Card.Text>
                    We connect young entrepreneurs with industry experts and provide the tools and 
                    guidance they need to succeed in their entrepreneurial journey.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>





      <section className="section bg-light">
        <Container>
          <div className="section-title">
            <h2 className="headline-sm">Our Journey</h2>
          </div>
          <Row>
            <Col className="mb-4 text-center">
              <p>
                Youngpreneurs was founded with a simple yet powerful idea: young people deserve the 
                opportunity to develop entrepreneurial skills and mindsets that will serve them throughout 
                their lives. What began as a small initiative has grown into a movement that has impacted 
                thousands of students across India.
              </p>
              <p>
                Through our programs, workshops, and competitions, we've witnessed the incredible potential 
                of young minds when given the right environment to flourish. Our alumni have gone on to start 
                businesses, lead community initiatives, and bring innovative solutions to complex problems.
              </p>
            
              <p>
                We continue to evolve and expand our reach, collaborating with schools, educational institutions, 
                and industry partners who share our commitment to nurturing the next generation of entrepreneurs. 
                Our approach is constantly refined based on feedback from participants and the latest research 
                in entrepreneurship education.
              </p>
              <p>
                As we look to the future, we remain dedicated to our core mission of empowering young people 
                to think and act like entrepreneurs, equipping them with the skills and confidence to shape 
                their own futures and make a positive impact on the world.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
