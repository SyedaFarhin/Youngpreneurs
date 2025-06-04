import React, { useEffect } from 'react';

import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroVideo from '../assets/videoplayback.mp4';
import vision from '../assets/ourVision.png';
import mission from '../assets/ourMission.png';
import rightImg from '../assets/home1.png';
import mentor1 from '../assets/fred.jpg';
import mentor2 from '../assets/sandipan.jpeg';
import times from '../assets/ttoi.png';
import home2 from '../assets/home2.jpg';
import home4 from '../assets/home4.jpg';
import insta from '../assets/insta.jpg';
import linkedin from '../assets/linkedin.jpg';
import email from '../assets/email.jpg';
import youtube from '../assets/youtube.jpg';

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
        
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <div className="container">
      <div className="content">
        <div className="text-column">
          <p className="intro">Welcome to Youngpreneurs</p>
          <h1 className="heading">
            NOT JUST A PROGRAM—A MOVEMENT FOR FUTURE LEADERS
          </h1>
          <p className="description">
            The world doesn’t wait for leaders—it creates them. Youngpreneurs is more than a program; it’s a movement that empowers students to think, build, and lead like entrepreneurs.
          </p>
          <button className="start-button">Start Your Journey</button>
        </div>

        <div className="card-column">
          <div className="card">
            <img src={vision} alt="Our Vision" style={{width: '380px', height: '100%'}}/>
            
          </div>

          <div className="card" style={{width: '280px', height: '90%'}}>
            <img src={mission} alt="Mission" />
            
          </div>
        </div>
      </div>

      <p className="footer-note">
        Entrepreneurship isn’t a talent you’re born with—it’s <span>a mindset you develop.</span>
      </p>
</div>





<div className="titans-section">
        <div className="titans-left">
          <h4>Future Titans 2025 – India’s Entrepreneurial Hunt</h4>
          <h2>Compete. Win. Launch Your Startup</h2>
          <p>
            This is not just a competition—it’s a launchpad for young visionaries.
            The Times of India and Youngpreneurs bring you Future Titans, India’s
            most prestigious entrepreneurship challenge for school students.
          </p>
          <p>
            <strong>Bold ideas. Young innovators. Awards worth ₹40 Lakhs</strong> to fuel your dreams!
          </p>
          <button className="register-button">REGISTER NOW</button>
        </div>
        <div className="titans-right">
          <img src={rightImg} alt="Students discussing startup ideas" />
        </div>
      </div>


      <section className="game-changer-section">
        <h2>Why is this competition a game changer?</h2>
        <div className="card-container">
          <div className="info-card">
            <h3>Real-World Learning</h3>
            <p>They’ll learn to think critically, solve real-world problems, and create innovative solutions through hands-on workshops and mentoring.</p>
          </div>
          <div className="info-card">
            <h3>Prestigious Platform</h3>
            <p>As part of an TOI-backed competition, they’ll gain national recognition and credibility.</p>
          </div>
          <div className="info-card">
            <h3>Unparalleled Opportunities</h3>
            <p>The winners will receive <strong>₹10 lakhs</strong> in funding to kickstart their entrepreneurial journey!</p>
          </div>
          <div className="info-card">
            <h3>Skill Development</h3>
            <p>From pitching to problem-solving, your child will master skills that colleges and employers value.</p>
          </div>
          <div className="info-card">
            <h3>Confidence and Leadership</h3>
            <p>They’ll build self-belief, collaborate with like-minded peers, and unlock their full potential.</p>
          </div>
        </div>
      </section>


      <section className="mentorship-section">
        <h2>Why Should Schools and Parents Encourage Participation?</h2>
        <p>The future belongs to those who create it!</p>
        <p>What if the next Ratan Tata or Falguni Nayar is your child?</p>
        <div className="highlight">
          Future Titans – India’s Premier Platform to Make Students Investor-Ready!
        </div>
        <p>National Exposure in association with</p>
        <img className="logo" src={times} alt="Times of India Logo" />
        <div className="highlight">Expert Mentorship from global leaders</div>
        <div className="mentors">
          <div className="mentor-card">
            <img src={mentor1} alt="Fred Katz" />
            <h4>Fred Katz</h4>
            <span>Professor of Entrepreneurship, Johns Hopkins (USA)</span>
          </div>
          <div className="mentor-card">
            <img src={mentor2} alt="Sandipan Chattopadhyay" />
            <h4>Sandipan Chattopadhyay</h4>
            <span>Ex-CTO Justdial, CEO Xelpmoc</span>
          </div>
        </div>
      </section>


      <section className="workshop-section">
        <h2>5 Power-Packed Workshops to Build Future Leaders</h2>
        <ul className="workshop-list">
          <li>Learn market research to spot billion-dollar opportunities.</li>
          <li>Master ideation and brainstorming like a disruptor.</li>
          <li>Understand your target audience to drive business success.</li>
          <li>Get the basics of financial planning, pricing, and budgeting.</li>
          <li>Perfect your pitch and storytelling to impress investors.</li>
        </ul>
        <p className="subtext">
          Pitch to top investors, founders, and industry leaders, with ₹40 Lakhs in prizes, incubation, and mentorship.
        </p>
        <p className="cta-text">Will your child get the chance to shape the future?</p>
        <button className="cta-button">SECURE YOUR SPOT NOW</button>
      </section>
    
    
      <section className="academy-section">
        <div className="overlay"></div>
        <div className="academy-content">
          <h2>Youngpreneur Academy – Build, Innovate, Lead</h2>
          <p>
            Entrepreneurship isn’t just a subject—it’s a way of thinking. At Youngpreneur Academy, we train future CEOs through experiential learning, business challenges, and expert mentorship.
          </p>
          <ul className="points">
            <li>Startup Fundamentals</li>
            <li>Pitching and Storytelling</li>
            <li>Financial and Business Strategy</li>
            <li>Leadership and Communication</li>
          </ul>
          <button className="enroll-btn">ENROLL TODAY</button>
        </div>
      </section>
    
      <div className="curriculum-section">
        <div className="curriculum-left"></div>
        <div className="curriculum-right">
          <h2>The Youngpreneur Entrepreneurship Curriculum</h2>
          <p className="intro">
            Our carefully designed curriculum lays the foundation for a lifelong entrepreneurial journey. Students explore:
          </p>

          <div className="curriculum-topic">
            <h4>What is Entrepreneurship?</h4>
            <p>Understanding the startup world and its opportunities.</p>
          </div>

          <div className="curriculum-topic">
            <h4>The Entrepreneurial Mindset</h4>
            <p>Developing resilience, adaptability, and risk-taking skills.</p>
          </div>

          <div className="curriculum-topic">
            <h4>Lateral Thinking and Creative Problem-Solving</h4>
            <p>Finding innovative solutions to challenges.</p>
          </div>

          <div className="curriculum-topic">
            <h4>Idea Generation to Prototyping</h4>
            <p>Turning ideas into tangible business concepts.</p>
          </div>

          <div className="curriculum-topic">
            <h4>Lean Launchpad and Business Model Canvas</h4>
            <p>Structuring and testing business ideas.</p>
          </div>

          <div className="curriculum-topic">
            <h4>Business Plan Basics</h4>
            <p>Learning financial planning, budgeting, and scalability.</p>
          </div>

          <div className="curriculum-topic">
            <h4>The Art of Pitching</h4>
            <p>Crafting and delivering a compelling business pitch.</p>
          </div>
        </div>
      </div>


      <div className="connect-section">
  <h2 className="connect-title">Connect with Youngpreneurs</h2>
  <div className="social-icons">
    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
      <img src={youtube} alt="YouTube" />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <img src={insta} alt="Instagram" />
    </a>
    <a href="mailto:youngpreneursfuturetitans@gmail.com">
      <img src={email} alt="Email" />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <img src={linkedin} alt="LinkedIn" />
    </a>
  </div>
  </div>
      <style>{`
        .container {
          padding: 60px 20px;
          max-width: 1300px;
          margin: auto;
          font-family: 'Segoe UI', sans-serif;
        }

        .content {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .text-column {
          flex: 1 1 400px;
          max-width: 500px;
        }

        .intro {
          color: #d31937;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .heading {
          font-size: 28px;
          font-weight: 800;
          color: #134734;
          margin-bottom: 20px;
        }

        .description {
          color: #666;
          line-height: 1.6;
          font-size: 16px;
        }

        .start-button {
          margin-top: 20px;
          background-color: #d31937;
          color: #fff;
          padding: 12px 24px;
          border: none;
          border-radius: 25px;
          font-weight: bold;
          cursor: pointer;
        }

        .card-column {
          flex: 1 1 600px;
          display: flex;
          gap: 30px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .card {
          position: relative;
        
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
        }

        .card img {
          width: 100%;
          display: block;
          border-radius: 20px;
        }

        .badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: rgba(255, 255, 255, 0.8);
          color: #134734;
          padding: 5px 15px;
          border-radius: 30px;
          font-weight: 600;
          font-size: 14px;
          border: 1px solid #134734;
        }

        .overlay-text {
          position: absolute;
          bottom: 0;
          width: 100%;
          padding: 15px;
          background: rgba(0, 0, 0, 0.55);
          color: white;
          font-size: 14px;
          line-height: 1.4;
          backdrop-filter: blur(4px);
        }

        .footer-note {
          margin-top: 60px;
          text-align: center;
          font-size: 16px;
          color: #666;
           margin-left: 950px;
           margin-top: -80px;

        }

        .footer-note span {
          font-weight: 600;
          color: #134734;
          
        }

        @media (max-width: 768px) {
          .content {
            flex-direction: column;
            text-align: center;
          }

          .card-column {
            justify-content: center;
          }
        }
          .titans-section {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
          background-color: #f8f8f8;
        }

        .titans-left {
          flex: 1;
          min-width: 300px;
          max-width: 600px;
          padding: 20px 30px;
        }

        .titans-left h4 {
          color: #e30613;
          font-weight: 600;
          font-size: 16px;
          margin-bottom: 10px;
        }

        .titans-left h2 {
          font-size: 32px;
          color: #305c4d;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .titans-left p {
          font-size: 16px;
          color: #555;
          margin-bottom: 20px;
          line-height: 1.6;
        }

        .titans-left p strong {
          color: #305c4d;
        }

        .register-button {
          background-color: #e30613;
          color: #fff;
          padding: 12px 30px;
          font-size: 14px;
          font-weight: 600;
          border: none;
          border-radius: 25px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .register-button:hover {
          background-color: #c00410;
        }

        .titans-right {
          flex: 1;
          min-width: 300px;
          max-width: 600px;
          padding: 20px;
          display: flex;
          justify-content: center;
        }

        .titans-right img {
          width: 100%;
          height: auto;
          border-radius: 20px;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .titans-section {
            flex-direction: column;
          }

          .titans-left {
            text-align: center;
            padding: 20px 15px;
          }

          .titans-left h2 {
            font-size: 26px;
          }

          .register-button {
            margin-top: 15px;
          }
        }
          .game-changer-section {
          background-color: #f9f9f9;
          padding: 60px 20px;
          text-align: center;
        }

        .game-changer-section h2 {
          color: #e30613;
          font-size: 28px;
          margin-bottom: 40px;
          font-weight: 700;
        }

        .card-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }

        .info-card {
          background-color: #fff;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
          padding: 30px 20px;
          width: 250px;
          transition: transform 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-5px);
        }

        .info-card h3 {
          font-size: 18px;
          color: #305c4d;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .info-card p {
          font-size: 15px;
          color: #555;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .card-container {
            flex-direction: column;
            align-items: center;
          }

          .info-card {
            width: 90%;
          }
        }
           .mentorship-section {
          background: linear-gradient(rgba(0, 63, 63, 0.6),rgba(0, 63, 63, 0.6));
          padding: 60px 20px;
          color: #fff;
          text-align: center;
          border-radius: 20px;
        }

        .mentorship-section h2 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .mentorship-section p {
          font-size: 16px;
          margin-bottom: 10px;
          color: #e0e0e0;
        }

        .highlight {
          font-weight: bold;
          font-size: 18px;
          color: #fff;
          margin-top: 20px;
        }

        .logo {
          width: 120px;
          margin: 20px auto;
        }

        .mentors {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 40px;
          margin-top: 40px;
        }

        .mentor-card {
          text-align: center;
          max-width: 200px;
        }

        .mentor-card img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 10px;
          border: 3px solid #fff;
        }

        .mentor-card h4 {
          margin: 10px 0 5px;
          font-size: 16px;
        }

        .mentor-card span {
          font-size: 14px;
          color: #ccc;
        }

        @media (max-width: 768px) {
          .mentorship-section {
            padding: 40px 15px;
          }

          .mentor-card {
            max-width: 100%;
          }
        }
           .workshop-section {
          background: linear-gradient(rgba(6, 131, 131, 0.6), rgba(0, 63, 63, 0.6));
          padding: 60px 20px;
          color: #fff;
          text-align: center;
          border-radius: 30px;
          max-width: 900px;
          margin: 40px auto;
        }

        .workshop-section h2 {
          font-size: 26px;
          font-weight: 700;
          margin-bottom: 30px;
        }

        .workshop-list {
          list-style: none;
          padding: 0;
          margin: 0 auto 30px;
          max-width: 700px;
          text-align: left;
        }

        .workshop-list li {
          margin-bottom: 16px;
          font-size: 17px;
          position: relative;
          padding-left: 32px;
          color: #f0f0f0;
        }

        .workshop-list li::before {
          content: "✔";
          color: #fff;
          position: absolute;
          left: 0;
          top: 0;
        }

        .subtext {
          font-size: 16px;
          color: #d5e5e5;
          margin-bottom: 30px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-text {
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 20px;
        }

        .cta-button {
          background-color: #1b1b1b;
          color: #fff;
          padding: 12px 30px;
          font-weight: 600;
          font-size: 14px;
          border-radius: 30px;
          border: none;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .cta-button:hover {
          background-color: #333;
        }

        @media (max-width: 768px) {
          .workshop-section {
            padding: 40px 15px;
          }

          .workshop-section h2 {
            font-size: 20px;
          }

          .workshop-list li {
            font-size: 15px;
          }

          .cta-text {
            font-size: 18px;
          }

          .cta-button {
            padding: 10px 20px;
            font-size: 13px;
          }
        }
           .academy-section {
          background: url(${home2}) no-repeat center center/cover;
          position: relative;
          padding: 80px 20px;
          color: #fff;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background: rgba(0, 0, 0, 0.6);
          z-index: 1;
        }

        .academy-content {
          position: relative;
          z-index: 2;
          max-width: 600px;
          margin: 0 auto;
          text-align: left;
        }

        .academy-content h2 {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .academy-content p {
          font-size: 16px;
          color: #e0e0e0;
          margin-bottom: 30px;
          line-height: 1.6;
        }

        .points {
          list-style: none;
          padding: 0;
          margin-bottom: 30px;
        }

        .points li {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
          font-weight: bold;
          font-size: 16px;
        }

        .points li::before {
          content: "🟥";
          font-size: 18px;
          margin-right: 10px;
        }

        .enroll-btn {
          background-color: #fff;
          color: #104040;
          padding: 12px 28px;
          font-weight: 600;
          font-size: 14px;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .enroll-btn:hover {
          background-color: #e0e0e0;
        }

        @media (max-width: 768px) {
          .academy-content h2 {
            font-size: 24px;
          }

          .points li {
            font-size: 15px;
          }

          .academy-content p {
            font-size: 15px;
          }
        }
           .curriculum-section {
          display: flex;
          flex-wrap: wrap;
          width: 100%;
          min-height: 100vh;
        }

        .curriculum-left {
          flex: 1;
          min-width: 300px;
          background: url(${home4}) no-repeat center center/cover;
        }

        .curriculum-right {
          flex: 1;
          min-width: 300px;
          background: linear-gradient(to bottom right, #d40000, #a30000);
          color: #fff;
          padding: 60px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .curriculum-right h2 {
          font-size: 32px;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .curriculum-right p.intro {
          font-size: 16px;
          margin-bottom: 30px;
          color: #f2f2f2;
          line-height: 1.6;
        }

        .curriculum-topic {
          margin-bottom: 25px;
        }

        .curriculum-topic h4 {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
        }

        .curriculum-topic p {
          margin: 5px 0 0 0;
          font-size: 15px;
          color: #ddd;
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .curriculum-section {
            flex-direction: column;
          }

          .curriculum-right {
            padding: 40px 20px;
          }

          .curriculum-right h2 {
            font-size: 24px;
          }

          .curriculum-topic h4 {
            font-size: 16px;
          }

          .curriculum-topic p {
            font-size: 14px;
          }
        }
          .connect-section {
      text-align: center;
      padding: 60px 20px;
      background-color: #fff;
    }

    .connect-title {
      font-size: 28px;
      font-weight: bold;
      color: #d31937;
      margin-bottom: 30px;
    }

    .social-icons {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px;
      flex-wrap: wrap;
    }

    .social-icons a {
      display: block;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s ease;
    }

    .social-icons a:hover {
      transform: translateY(-5px);
    }

    .social-icons img {
      width: 300px;
      height: 100%;
      object-fit: cover;
      border-radius: 12px;
    }

    @media (max-width: 768px) {
      .social-icons {
        gap: 20px;
      }

      .social-icons img {
        width: 120px;
        height: 80px;
      }

      .connect-title {
        font-size: 22px;
      }
    }
      `}</style>
   











      {/* <section className="section parallax-section">
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
      </section> */}

      {/* Design Elements Showcase */}
     
    </>
  );
};

export default Home; 