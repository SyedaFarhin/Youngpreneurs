import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import AOS from 'aos';
import 'aos/dist/aos.css';
import vision from '../assets/ourVision.jpg';
import mission from '../assets/ourMission.jpg';
import rightImg from '../assets/home1.jpg';
import mentor1 from '../assets/fred.jpg';
import mentor2 from '../assets/sandipan.jpeg';
import mentor3 from '../assets/devika.jpg';
import mentor4 from '../assets/partha.jpg';


import times from '../assets/ttoi.png';
import home2 from '../assets/home2.png';
import home4 from '../assets/home4.jpg';
import insta from '../assets/insta.jpg';
import linkedin from '../assets/linkedin.jpg';
import email from '../assets/email.jpg';
import youtube from '../assets/youtube.jpg';
// const images = ["/1.png", "/2.png", "/3.png","/4.png","/5.png","/Six.png"];
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  
  


  return (
    <>

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
        <img src="/1.png" alt="1" style={{ width: "100%" }} />
      </SwiperSlide>

      <SwiperSlide>
        <img src="/2.png" alt="2" style={{ width: "100%" }} />
      </SwiperSlide>

      <SwiperSlide>
        <img src="/3.png" alt="3" style={{ width: "100%" }} />
      </SwiperSlide> 
      
      <SwiperSlide>
        <img src="/4.png" alt="3" style={{ width: "100%" }} />
      </SwiperSlide> 

      <SwiperSlide>
        <img src="/5.png" alt="3" style={{ width: "100%" }} />
      </SwiperSlide> 
      
      <SwiperSlide>
        <img src="/SIX.png" alt="3" style={{ width: "100%" }} />
      </SwiperSlide> 
      


      </Swiper>

     
    








     


     









<div className="titans-section">
        <div className="titans-left">
          <h4>The YoungPreneurs™ Ecosystem </h4>
          <h2>Where Innovation, Neuroscience, and Purpose Converge</h2>
          <p>
          The YoungPreneurs™ ecosystem is more than a program — it’s a living, adaptive innovation network built to nurture solution-seeking capability in every student.
          </p>
          <p>
          Powered by insights from neuroscience, artificial intelligence, and design thinking, it redefines how young minds learn, think, and lead — turning classrooms into launchpads for innovation.
At its core lies the patent-pending Mindset Engine™, a neuro-adaptive system that decodes how students think, adapt, and create — helping them build measurable growth in curiosity, creativity, and resilience through the SSI™ Mindset Score (Solution-Seeking Index™).

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
        <h2>Surrounding this core are four innovation engines that power the <span style={{color:" #dcae1a",fontSize:"30px"}}>YoungPreneurs™</span> experience:</h2>
        <div className="card-container">
          <div className="info-card">
            <h3>IDEA DNA™ — The Science of Innovation</h3>
            <p>A cognitive framework that teaches students to deconstruct complex challenges and rebuild them into scalable, real-world solutions.
From idea spark to impact, it transforms imagination into disciplined innovation.
</p>
          </div>
          <div className="info-card">
            <h3>S.U.R.G.E.™ — The Mindset Accelerator</h3>
            <p>A neuroscience-informed growth model that strengthens five essential traits — Self-belief, Uncertainty, Resilience, Growth, and Empathy.
It helps students stay curious, confident, and courageous in an unpredictable world.
</p>
          </div>
          <div className="info-card">
            <h3>AI Co-Founder™ — The Future of Learning</h3>
            <p>An intelligent innovation partner that helps students ideate, research, and prototype — not by supplying answers, but by sparking better questions.
It fuses human creativity with AI precision to make learning more immersive and future-ready.
</p>
          </div>
          <div className="info-card">
            <h3>Future Titans™ — The Real-World Playground</h3>
            <p>The culmination of the YoungPreneurs™ journey — where students put their ideas to the test, pitch to experts, and experience the thrill of real innovation.
It’s more than a competition; it’s a nationwide movement redefining what young minds can achieve.


            </p>
          </div>
          
        </div>
        <p style={{fontSize:"25px",textAlign:"center",marginTop:"30px",color:" #2c4a3f",fontWeight:"initial"}}>Together, these pillars form the YoungPreneurs™ Ecosystem —<br/> an interconnected, measurable, and future-ready learning architecture that turns potential into purpose.
<br/>Where students don’t just prepare for the future —
they begin to create it.</p>
      </section>


      <section className="game-changer-section">
        <h2 >What Makes <span style={{color:" #dcae1a",fontSize:"35px"}}>Future Titans</span>  a True Game Changer</h2>
        <div className="card-container">
          <div className="info_card">
            <h3>A Revolution in Learning</h3>
            <p>Future Titans™ is powered by the world’s first neuro-adaptive, patent-pending entrepreneurial ecosystem — a system built to turn learning into creation.
Using IDEA DNA™ and the S.U.R.G.E.™ framework, students don’t just think of ideas — they build, test, and refine them like real innovators.

</p>
          </div>
          <div className="info_card">
            <h3>A Plug-n-Play Model for Schools</h3>
            <p>The YoungPreneurs™ model fits effortlessly into any classroom — empowering schools to deliver world-class entrepreneurship education without additional infrastructure. A plug-n-play ecosystem that makes 21st-century innovation accessible to every student.
</p>
          </div>
          <div className="info_card">
            <h3>Measured Growth. Real Outcomes</h3>
            <p>Through the Solution Seeking  Index (SSI), every participant’s journey is tracked and benchmarked — providing measurable insights into creativity, leadership, and entrepreneurial growth.
</p>
          </div>
          <div className="info_card">
            <h3>Powered by Intelligent Tools</h3>
            <p>At the heart of Future Titans™ is the AI Co-Founder™ — a breakthrough intelligence partner that helps every student think sharper, build faster, and innovate with real-world precision.

            </p>
          </div>
          
          <div className="info_card">
            <h3>National Recognition & Opportunity</h3>
            <p>In partnership with The Times of India, Future Titans™ offers students a national platform to showcase their ventures, gain visibility, and learn from global dignitaries and industry luminaries.
Winners receive ₹10 lakhs in funding to kickstart their entrepreneurial journey.


            </p>
          </div>

          <div className="info_card">
            <h3>Building the Leaders of Tomorrow</h3>
            <p>More than a competition, it’s a movement — designed to strengthen confidence, collaboration, and purpose-driven leadership in a rapidly accelerating AI world.
Because the future won’t be led by those who simply adapt to change, but by those who create it.



            </p>
          </div>
        </div>
      </section>











      <section className="mentorship-section">
        <h2>Why Should Schools and Parents Encourage Participation? </h2>
        <p>Entrepreneurship isn’t just about launching companies — it’s about cultivating a solution-seeking mindset:<br/> the ability to notice problems, take initiative, and create meaningful impact.<br/>
Through Future Titans™, students learn to transform ideas into real-world projects, gaining the confidence and capability to lead in any path they choose — <br/>whether as founders or as intrapreneurs shaping innovation within organizations.
</p>
       
       <p>Because inside every classroom sits a potential pioneer — <br/>someone who could become the next Ratan Tata or Falguni Nayar, waiting for the right platform to rise.</p>
       
        
        
        <div className="highlight">
        Future Titans™ gives them that platform — India’s premier stage for young innovators:
        </div>
        <p>National exposure in association with</p>
        <img className="logo" src={times} alt="Times of India Logo" />
        <div className="highlight">Expert Mentorship from Global Luminaries</div>
        <div className="mentors">
        <div className="mentor-card">
            <img src={mentor3} alt="Sandipan Chattopadhyay" />
            <h4>Devika Majumder</h4>
            <span>Founder & CEO | Wall Street Journal Featured | Nominated by Business Today as one of the most powerful women in business</span>
          </div>
          <div className="mentor-card">
            <img src={mentor1} alt="Fred Katz" />
            <h4>Fred Katz</h4>
            <span>Professor of Entrepreneurship, Johns Hopkins (USA)</span>
          </div>
          <div className="mentor-card">
            <img src={mentor2} alt="Sandipan Chattopadhyay" />
            <h4>Sandipan Chattopadhyay</h4>
            <span>Former CTO Justdial, CEO Xelpmoc</span>
          </div>
         
          <div className="mentor-card">
            <img src={mentor4} alt="Sandipan Chattopadhyay" />
            <h4>Partha Ghosh</h4>
            <span>Founder, Partha Ghosh Leadership Academy IIT Kharagpur | Former McKinsey Senior Partner | Prof. Of Leadership, MIT USA</span>
          </div>
        </div>
        <h2 style={{marginTop:"80px"}}>Empower one young innovator — <br/>and you ignite a ripple that can transform an entire generation.</h2>
      </section>


      <section className="workshop-section">
        <h2>Five Transformative Workshops to Shape the Solution-Seekers of Tomorrow</h2>
        <ul className="workshop-list">
          <li>Learn market research to uncover real, high-value opportunities.</li>
          <li>Master ideation and creative problem-solving like a future disruptor.</li>
          <li>Understand your target audience to build solutions that truly matter.</li>
          <li>Grasp the fundamentals of financial planning, pricing, and budgeting.</li>
          <li>Perfect your pitch and storytelling to win hearts—and investors.</li>
        </ul>
        <p className="subtext">
        Pitch to top investors, founders, and industry leaders, with ₹40 Lakhs in prizes, incubation, and mentorship.
        </p>
        <p className="cta-text">Will your child get the opportunity to shape the future?	</p>
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
      <div className="overlay"></div>

          <h2>The YoungPreneur Entrepreneurship Curriculum</h2>
          <h4>Where Ideas Evolve, Strengthen, and Launch.</h4>
          <p className="intro" style={{fontSize:"20px"}}>
          Powered by the world’s first neuro-adaptive Mindset Engine — a patent-pending innovation that adapts to how students think and create.
The YoungPreneurs™ Curriculum guides learners from their first spark of an idea to real-world execution — combining global innovation frameworks with hands-on application to cultivate minds that decode problems, engineer solutions, and leave a mark that truly counts.



          </p>

          <div className="curriculum-topic">
            <h4>Foundations of Entrepreneurship</h4>
            <p>Explore how today’s startups are redefining industries and creating opportunities. Understand what it truly means to think, build, and lead like an entrepreneur in a rapidly changing world.</p>
          </div>

          <div className="curriculum-topic">
            <h4>The Entrepreneurial Mindset</h4>
            <p>Develop the ability to adapt, take initiative, and convert challenges into opportunities — nurturing the core traits of resilience, agility, and purposeful risk-taking.</p>
          </div>

          <div className="curriculum-topic">
            <h4>Lateral Thinking & Creative Problem-Solving</h4>
            <p>Learn to challenge assumptions, think laterally, and identify real-world opportunities — the spark that begins every IDEA DNA™ journey.</p>
          </div>

          <div className="curriculum-topic">
            <h4>Idea Generation to Prototyping</h4>
            <p>Use the IDEA DNA™ Framework to shape, validate, and prototype ideas — turning raw concepts into practical innovation.</p>
          </div>

          <div className="curriculum-topic">
            <h4>Lean Launchpad and Business Model Canvas</h4>
            <p>Apply global startup tools to test value propositions and customer fit within our Plug-n-Play School Ecosystem — a ready-to-implement platform for innovation learning.</p>
          </div>

          <div className="curriculum-topic">
            <h4>Business Plan & Strategy</h4>
            <p>Master financial planning, budgeting, and scalability while applying the SURGE Framework™ to refine, grow, and sustain ventures.</p>
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
          font-weight: 400;
           
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
          font-size: 46px;
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
          font-weight: 600;
          font-size: 25px;
          margin-bottom: 10px;
          color: #305c4d;

        }

        .titans-left h2 {
          font-size: 18px;
          color: #dcae1a;

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
          padding: 60px 40px;
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
          gap: 30px;
        }

        .info-card {
          background-color: #fff;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
          padding: 30px 20px;
          width: 350px;
          transition: transform 0.3s ease;
        }
          .info_card{
           background-color:rgba(220, 175, 26, 0.24);
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
          padding: 30px 20px;
          width: 350px;
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
           .info_card h3 {
          font-size: 20px;
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
          background: #305c4d;
          padding: 60px 20px;
          color: #fff;
          text-align: center;
          // border-radius: 20px;
        }

        .mentorship-section h2 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .mentorship-section p {
       display:flex;
       justify-content:center;
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
  padding: 0 20px;
}

.mentor-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  width: 100%;
  max-width: 320px; /* perfect card width for all screens */
  padding: 20px;

  background: #0d0d0d00; /* remove if not needed */
  border-radius: 12px;
}

/* Mentor Image */
.mentor-card img {
  width: 110px;
  height: 110px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 12px;
  border: 3px solid #fff;
}

/* Name */
.mentor-card h4 {
  margin: 8px 0 6px;
  font-size: 20px;
  line-height: 1.2;
}

/* Description */
.mentor-card span {
  font-size: 16px;
  line-height: 1.4;
  color: #e0e0e0;
}

/* ------------------------------- */
/* 📱 Mobile Responsive Styling    */
/* ------------------------------- */
@media (max-width: 768px) {

  .mentors {
    gap: 30px;
  }

  .mentor-card {
    max-width: 100%;
  }

  .mentor-card img {
    width: 90px;
    height: 90px;
  }

  .mentor-card h4 {
    font-size: 18px;
  }

  .mentor-card span {
    font-size: 15px;
  }
}

@media (max-width: 480px) {
  .mentor-card img {
    width: 80px;
    height: 80px;
  }

  .mentor-card span {
    font-size: 14px;
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
          padding: 50px 20px;
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
          background: linear-gradient(to bottom right,rgba(113, 110, 99, 0.94),rgba(178, 183, 183, 0.91));
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
          .curriculum-right h4 {
        color:rgb(5, 59, 39);
          
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
          color:rgb(5, 59, 39);
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
      color: #104040;
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



/* MAIN LAYOUT */
.yp-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 60px 5%;
  gap: 50px;
}

/* LEFT SIDE */
.yp-left {
  flex: 1;
  max-width: 520px;
}

.welcome {
  color: #d62828;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 12px;
}

.title {
  color: #0b3d2e;
  font-size: 34px;
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: 18px;
}

.desc {
  color: #444;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 16px;
}

/* RIGHT SIDE */
.yp-right {
  flex: 1;
  max-width: 520px;  /* IMPORTANT: controls exact width like design */
  display: flex;
  flex-direction: column;
  gap: 35px;
}

/* CARD */
.card {
  position: relative;
  border-radius: 22px;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 4 / 3.7;   /* exact shape like sample */
  display: flex;
}

.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;  /* prevents stretched face */
  border-radius: 22px;
}

/* TAG */
.tag {
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 7px 26px;
  border: 2px solid white;
  border-radius: 30px;
  font-size: 20px;
  font-weight: 600;
  color: white;
  backdrop-filter: blur(8px);
}

/* GLASS BOX */
.glass-box {
  position: absolute;
  bottom: 18px;
  left: 50%;
  transform: translateX(-50%);
  width: 85%;
  padding: 25px 25px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(18px);
  color: white;
  font-size: 18px;
  line-height: 1.5;
  text-align: center;
}

/* ------------------ RESPONSIVE ------------------ */

@media (max-width: 1024px) {
  .yp-container {
    flex-direction: column;
    align-items: center;
  }
  .yp-right {
    max-width: 600px;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .title {
    font-size: 28px;
  }
  .glass-box {
    font-size: 16px;
  }
}

@media (max-width: 500px) {
  .yp-container {
    padding: 40px 20px;
  }
  .tag {
    font-size: 16px;
    right: 12px;
  }
  .glass-box {
    width: 92%;
    padding: 18px;
    font-size: 15px;
  }
}



.yp-container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 40px;
  padding: 50px 20px;
  width: 100%;
  background: #f8f9fc;
  box-sizing: border-box;
}

.yp-left {
  width: 55%;
  font-family: "Poppins", sans-serif;
}

.yp-left h1 {
  font-size: 2.6rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.yp-left p {
  font-size: 1.1rem;
  line-height: 1.7;
  font-weight: 300;
}

/* RIGHT SIDE */
.yp-right {
  width: 45%;
  display: flex;
  justify-content: center;
}

.image-row {
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: center;
}

.img-box {
  width: 50%;
  max-width: 300px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 25px rgba(0,0,0,0.15);
}

.img-box img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .yp-container {
    flex-direction: column;
  }

  .yp-left,
  .yp-right {
    width: 100%;
  }

  .image-row {
    flex-direction: row;
    justify-content: space-between;
  }

  .img-box {
    width: 48%;
  }
}

@media (max-width: 600px) {
  .image-row {
    flex-direction: column;
    align-items: center;
  }

  .img-box {
    width: 90%;
    max-width: 350px;
  }
}



    
  `}</style>
   
    </>
  );
};

export default Home; 
