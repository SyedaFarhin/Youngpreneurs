import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";












import AOS from 'aos';
import 'aos/dist/aos.css';
import heroVideo from '../assets/videoplayback.mp4';
import vision from '../assets/ourVision.jpg';
import mission from '../assets/ourMission.jpg';
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
const images = ["/slide1.png", "/slide2.png", "/slide3.png"];
const Home = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     once: false,
  //   });
  // }, []);

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 600,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   arrows: true,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: { arrows: false }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: { arrows: false }
  //     }
  //   ],
  // };
  


  return (
    <>
    
   


        {/* <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}


<Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      slidesPerView={1}
      style={{ width: "100%", height: "auto" }}
    >
      <SwiperSlide>
        <img src="/slide1.png" alt="1" style={{ width: "100%" }} />
      </SwiperSlide>

      <SwiperSlide>
        <img src="/slide2.png" alt="2" style={{ width: "100%" }} />
      </SwiperSlide>

      <SwiperSlide>
        <img src="/slide3.png" alt="3" style={{ width: "100%" }} />
      </SwiperSlide>
    </Swiper>

  
     


      <div className="container">
      <div className="content">
        <div className="text-column">
          <p className="intro">Welcome to Youngpreneurs</p>
          <h1 className="heading">
          Not Just a Program — A Movement that Awakens the Leader Within
          </h1>
          <p className="description">
          The future doesn’t belong to those who wait for change — it belongs to those who create it.
          Every great leader began with a single idea, a spark of curiosity that dared to challenge the norm.

          </p>
         
          <button
  className="start-button"
  onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdGtYyt5jrjCOXa4sagyEVFD6-d5RKGvIEnAuXs8yTYCGn3QQ/viewform", "_blank")}
>
Start Your Journey
</button>











        </div>


        







</div>

<div className="card-column">
          <div className="card">
            <img src={vision} alt="Our Vision" style={{width: '380px', height: '100%'}}/>
            
          </div>

          <div className="card" style={{width: '280px', height: '90%'}}>
            <img src={mission} alt="Mission" />
            
          </div>

          {/* <p className="footer-note">
        Entrepreneurship isn’t a talent you’re born with—it’s <span>a mindset you develop.</span>
      </p> */}
        </div>


      {/* <p className="footer-note">
        Entrepreneurship isn’t a talent you’re born with—it’s <span>a mindset you develop.</span>
      </p> */}
</div>









<div className="titans-section">
        <div className="titans-left">
          <h4>Future Titans 2025 – India’s Biggest Hunt for Young Entrepreneurs </h4>
          <h2>Compete. Win. Launch Your Startup</h2>
          <p>
          This isn’t just a competition — it’s a national launchpad for India’s brightest young visionaries. 
            The Times of India and Youngpreneurs bring you Future Titans, India’s
            most prestigious entrepreneurship challenge for school students.
          </p>
          <p>
            <strong>Bold ideas. Young innovators. Awards worth ₹40 Lakhs</strong> to fuel your dreams!
          </p>
         
          <button
  className="register-button"
  onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdGtYyt5jrjCOXa4sagyEVFD6-d5RKGvIEnAuXs8yTYCGn3QQ/viewform", "_blank")}
>
REGISTER NOW
</button>

        </div>
        <div className="titans-right">
          <img src={rightImg} alt="Students discussing startup ideas" />
        </div>
      </div>


      <section className="game-changer-section">
        <h2>What Makes Future Titans a True Game Changer</h2>
        <div className="card-container">
          <div className="info-card">
            <h3>A Revolution in Learning</h3>
            <p>Future Titans isn’t just another school competition — it’s India’s first platform built on a patent-pending entrepreneurial ecosystem that transforms learning into real-world creation. 
              Students don’t just participate — they build, test, and launch their ideas using the IDEA DNA and SURGE Framework.</p>
          </div>
          <div className="info-card">
            <h3>A Plug-n-Play Model for Schools</h3>
            <p>Seamlessly integrated into the classroom, the YoungPreneurs model empowers schools to deliver entrepreneurship education without additional infrastructure 
              — making 21st-century innovation accessible to every student.</p>
          </div>
          <div className="info-card">
            <h3>Measured Growth. Real Outcomes</h3>
            <p>Through the Student Startup Index (SSI), every participant’s journey is tracked and benchmarked 
              — providing measurable insights into creativity, leadership, and entrepreneurial growth.</p>
          </div>
          <div className="info-card">
            <h3>National Recognition & Opportunity</h3>
            <p>In partnership with The Times of India, Future Titans gives students a national platform to showcase their ideas, gain recognition, and connect with real-world mentors.
               The winners will receive ₹10 lakhs in funding to kickstart their entrepreneurial journey!
            </p>
          </div>
          <div className="info-card">
            <h3>Building the Leaders of Tomorrow</h3>
            <p>Beyond competition, it’s a movement that builds confidence, collaboration, and leadership 
              — shaping students into purpose-driven thinkers ready to change the world.</p>
          </div>
        </div>
      </section>


      <section className="mentorship-section">
        <h2>Why Should Schools and Parents Encourage Participation? </h2>
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
        <h2>Five Transformative Workshops to Shape the Entrepreneurs of Tomorrow</h2>
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
        <button
  className="cta-button"
  onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdGtYyt5jrjCOXa4sagyEVFD6-d5RKGvIEnAuXs8yTYCGn3QQ/viewform", "_blank")}
>
  SECURE YOUR SPOT NOW
</button>

      </section>
    
    
      <section className="academy-section">
        <div className="overlay"></div>
        <div className="academy-content">
          <h2>YoungPreneur Academy – Build. Innovate. Lead.</h2>
          <p>
          Entrepreneurship isn’t just a subject — it’s a mindset.
           At YoungPreneur Academy, students go beyond textbooks to experience what it truly means to think, build, and lead like CEOs. Through immersive learning, real business challenges, and expert mentorship, they develop the skills that define tomorrow’s leaders.

          </p>

      
          <div className="curriculum-topic">
            <h4 style={{ color: " #dcae1a",fontSize: "20px" }}>Startup Fundamentals</h4>
            <p style={{ color: "rgb(255, 255, 255)" }}>Understanding ideas, markets, and business models.</p>
            <br/>
            <h4 style={{ color: "  #dcae1a",fontSize: "20px" }}>Pitching & Storytelling </h4>
            <p style={{ color: " rgb(255, 255, 255)" }}>Communicating vision with clarity and impact.</p>
            <br/>
            <h4 style={{ color: "  #dcae1a",fontSize: "20px" }}>Financial & Business Strategy </h4>
            <p style={{ color: "rgb(255, 255, 255)" }}>Learning the art of smart decision-making.</p>
            <br/>
            <h4 style={{ color: "  #dcae1a",fontSize: "20px" }}>Leadership & Communication </h4>
            <p style={{ color: " rgb(255, 255, 255)" }}>Building confidence, teamwork, and influence.</p>
          </div>
          
          
          <button
  className="enroll-btn"
  onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdGtYyt5jrjCOXa4sagyEVFD6-d5RKGvIEnAuXs8yTYCGn3QQ/viewform", "_blank")}
>
ENROLL TODAY
</button>

        </div>
      </section>
    
      <div className="curriculum-section">
        <div className="curriculum-left"></div>
        <div className="curriculum-right">
          <h2>The YoungPreneur Entrepreneurship Curriculum</h2>
          <p className="intro">
          Built on the world’s first patent-pending entrepreneurial ecosystem, the YoungPreneur Curriculum takes students through a complete innovation journey — from idea conception to real-world implementation.
Every module combines global entrepreneurship frameworks with hands-on application, empowering students to think like founders and act like leaders.

          </p>

          <div className="curriculum-topic">
            <h4>Foundations of Entrepreneurship</h4>
            <p>Explore how today’s startups are redefining industries and creating opportunities. Understand what it truly means to think, build,
               and lead like an entrepreneur in a rapidly changing world.</p>
          </div>

          <div className="curriculum-topic">
            <h4>The Entrepreneurial Mindset</h4>
            <p>Develop the ability to adapt, take initiative, and convert challenges into opportunities — nurturing the core traits of resilience,
               agility, and purposeful risk-taking.</p>
          </div>

          <div className="curriculum-topic">
            <h4>Lateral Thinking & Creative Problem-Solving</h4>
            <p>Learn to challenge assumptions, think laterally, and identify real-world opportunities
               — the spark that begins every IDEA DNA journey.</p>
          </div>

          <div className="curriculum-topic">
            <h4>Idea Generation to Prototyping</h4>
            <p>Use the IDEA DNA Framework to structure, validate, and prototype ideas
               — transforming imagination into viable innovation.</p>
          </div>

          <div className="curriculum-topic">
            <h4>Lean Launchpad and Business Model Canvas</h4>
            <p>Apply global startup tools to test value propositions and customer fit within our Plug-n-Play School Ecosystem 
              — a ready-to-implement platform for innovation learning.</p>
          </div>

          <div className="curriculum-topic">
            <h4>Business Plan & Strategy</h4>
            <p>Master financial planning, budgeting, and scalability while applying the SURGE Framework to refine,
               grow, and sustain ventures.</p>
          </div>

          <div className="curriculum-topic">
            <h4>Pitch, Present & Lead</h4>
            <p>Build influence and leadership presence — translating vision into a pitch that inspires action.</p>
          </div>
        </div>
      </div>


      <div className="connect-section">
  <h2 className="connect-title">Connect with Youngpreneurs</h2>
  <div className="social-icons">
    <a href="https://www.youtube.com/@youngpreneursindia4413" target="_blank" rel="noopener noreferrer">
      <img src={youtube} alt="YouTube" />
    </a>
    <a href="https://www.instagram.com/youngpreneurs.india?igsh=MThlOW93dXJtYjRpeQ==" target="_blank" rel="noopener noreferrer">
      <img src={insta} alt="Instagram" />
    </a>
    <a href="mailto:youngpreneursfuturetitans@gmail.com">
      <img src={email} alt="Email" />
    </a>
    <a href="https://www.linkedin.com/company/youngpreneurs-ind/" target="_blank" rel="noopener noreferrer">
      <img src={linkedin} alt="LinkedIn" />
    </a>
  </div>
  </div>
     

<style>{`


* {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body, html {
      width: 100%;
      overflow-x: hidden;
    }

   
    /* Avoid body scroll due to internal children */
    html, body {
      overflow-x: hidden;
    }

    section, div {
      max-width: 100vw;
    }



.container {

          padding: 60px 20px;
          // max-width: 1300px;
          // margin: auto;
          // font-family: 'Segoe UI', sans-serif;
         
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
          color: #dcae1a;
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
          background-color: #dcae1a;
          color: #fff;
          padding: 12px 24px;
          border: none;
          border-radius: 25px;
          font-weight: bold;
          cursor: pointer;
        }

        .card-column {
          flex: 1 1 200px;
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
          // background: rgba(178, 174, 174, 0.9);
          // color: white;
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
          color: #dcae1a;
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
          background-color: #dcae1a;
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
          background-color: #dcae1a;
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
          color: #305c4d;
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
          font-size: 20px;
          margin-bottom: 10px;
          color: #e0e0e0;
        }

        .highlight {
          font-weight: bold;
          font-size: 25px;
          color: #fff;
          margin-top: 20px;
        }

        .logo {
          width: 200px;
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
  display: flex;
  flex-direction: column; /* Stack items vertically */
  align-items: center;    /* Center items horizontally */
 
  text-align: center;
  max-width: 400px;
  height: 200px; /* Add a height if vertical centering is needed */
 
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
          font-size: 22px;
        }

        .mentor-card span {
          font-size: 18px;
          color: #e0e0e0;
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
          background: linear-gradient(rgba(220, 175, 26, 0.62), rgba(220, 175, 26, 0.28));
          padding: 60px 20px;
          
          color: #fff;
          text-align: center;
          border-radius: 30px;
          max-width: 900px;
          margin: 90px auto;
        }

        .workshop-section h2 {
          font-size: 26px;
          font-weight: 600;
          margin-bottom: 50px;
          color: #104040
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
          font-size: 20px;
          position: relative;
          padding-left: 32px;
          color: #104040
        }

        .workshop-list li::before {
          content: "✔";
          color: #fff;
          position: absolute;
          left: 0;
          top: 0;
           color: #104040
        }

        .subtext {
          font-size: 20px;
           font-weight: 600;
        color: #104040;
          margin-bottom: 30px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-text {
          font-size: 22px;
          font-weight: 700;
          color: #104040;
          margin-bottom: 20px;
        }

        .cta-button {
          background-color: #104040;
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
          background:rgba(17, 16, 10, 0.41);
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
          font-size: 35px;
          font-weight: 700;
          margin-bottom: 20px;
          color:rgb(242, 210, 104);

        }

        .academy-content p {
          font-size: 20px;
          color:rgba(255, 255, 255, 0.84);
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
          background-color: #dcae1a;
          color:rgb(255, 255, 255);
          padding: 12px 28px;
          font-weight: 600;
          font-size: 18px;
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
          margin-top:50px
        }

        .curriculum-left {
          flex: 1;
          min-width: 300px;
          background: url(${home4}) no-repeat center center/cover;
        }

        .curriculum-right {
          flex: 1;
          min-width: 300px;
          background: linear-gradient(to bottom right,rgba(220, 175, 26, 0.7), #dcae1a);
          // background:rgba(250, 228, 158, 0.26);
          color: #fff;
          padding: 60px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .curriculum-right h2 {
        color:rgb(5, 59, 39);
          font-size: 32px;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .curriculum-right p.intro {
          font-size: 16px;
          margin-bottom: 30px;
        color:rgb(255, 255, 255);
          line-height: 1.6;
        }

        .curriculum-topic {
          margin-bottom: 25px;
        }

        .curriculum-topic h4 {
          margin: 0;
          font-size: 18px;
          // font-weight: 600;
          // color:rgb(5, 59, 39);
        }

        .curriculum-topic p {
          margin: 5px 0 0 0;
          font-size: 20px;
            color:rgb(255, 255, 255);
         
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
      color: #dcae1a;
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
        font-size: 23px;
      }
    }



.swiper-button-next,
.swiper-button-prev {
  color: white !important;
}

/* Change Swiper pagination bullets to white */
.swiper-pagination-bullet {
  background: white !important;
  opacity: 0.6;
}

.swiper-pagination-bullet-active {
  background: white !important;
  opacity: 1;
}



















    
  `}</style>
   
    </>
  );
};

export default Home; 
