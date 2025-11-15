import React from 'react';
import Slider from "react-slick";


import classImage from '../assets/classroom.jpg';
import juliya from '../assets/juliya.jpeg';
import sandipan from '../assets/sandipan.jpeg';
import suman from '../assets/suman.jpeg';
import fred from '../assets/fred.jpeg';
import partha from '../assets/partha.jpg';
import devika from '../assets/devika.jpeg';

import presentation from '../assets/presentation.jpg';
import academyHeaderBg from '../assets/academyHeaderBg.jpg';



const testimonials = [
  {
    name: "Devika Majumder",
    title:
      "Founder & CEO",
    image: devika,
    quote:
      "As a founder, I believe in the power of an innovator’s eye, a founder’s grit, and an entrepreneurial mindset—not just for building businesses, but for shaping fearless, future-ready individuals. And that’s exactly what Future Titans is here to do—equip the next generation with the mindset, skills, and platform to think big, take risks, and create impact.",
  },
  {
    name: "Suman Bose",
    title: "Ex- CEO & MD Siemens",
    image: suman,
    quote:
      "In a world that’s changing faster than ever, an entrepreneurial mindset isn’t just an advantage—it’s a necessity. Future Titans isn’t just about building businesses; it’s about building fearless, future-ready leaders who create opportunities instead of waiting for them!",
  },
  {
    name: "Sandipan Chattopadhyay",
    title: "Ex-CTO Justdial",
    image: sandipan,
    quote:
      "Entrepreneurship is about problem-solving, adaptability, and resilience. It’s the ability to see opportunities where others see obstacles and the courage to take action despite uncertainty. Future Titans is here to ignite that mindset in young minds—equipping them with the skills, exposure, and confidence to lead, innovate, and shape the world of tomorrow.",
  },
  {
    name: "Dr. Julia Stamm",
    title:
      "Founder & CEO, She Shapes AI, UK | Global voice in Responsible Tech & AI for Impact",
    image: juliya,
    quote:
      "Equipping our youth with an entrepreneurial mindset, combined with a clear moral compass and the ability to think beyond silos, will be instrumental in creating a generation of future leaders who can connect the dots and solve today’s complex problems.",
  },





  {
    name: "Fred Katz",
    title: "Senior Professional Faculty, Johns Hopkins Carey Business School",
    image: fred,
    quote:
      "I am thrilled to be the Senior Advisor for Future Titans—a movement shaping the next generation of innovators and leaders in India! Entrepreneurship is about thinking big, understanding risks, and solving real-world problems that may make the world a better place. Future Titans is giving young minds the platform, mentorship, and exposure they need to develop this creative mindset and will impose lasting impact for years to come. I can’t wait to witness the groundbreaking, creative and innovative ideas that emerge! Thank you, The Times of India for your support of the Future Titians program",
  },
  {
    name: "Dr. Partha Ghosh ",
    title: "Founder, Partha Ghosh Leadership Academy | Ex-Senior Partner at McKinsey | Former Professor at MIT | IIT Kharagpur Alumni",
    image: partha,
    quote:
      "Digitization knows no boundaries, and knowledge has always been borderless, as a result in today’s business environment to succeed leaders have to think and act beyond borders, keeping in focus the locale – both in terms of the requirements and the assets",
  },
 
];

const Competition = () => {
  const settings = {
    dots: false,
    arrows: true, // ✅ Enable arrows
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
    <div className="hero-section">
        {/* You can place overlay text, buttons, or other elements here */}
      </div>

      <div className="section-container">
<style>{`
.section-container {
width: 100%;
padding: 40px 20px;
background: linear-gradient(135deg,rgba(10, 19, 52, 0.71), #1b4d3e);
color: white;
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: 'Poppins', sans-serif;
}


.main-title {
font-size: 2.5rem;
font-weight: 700;
margin-bottom: 10px;
}


.subtitle {
font-size: 1.2rem;
font-weight: 300;
margin-bottom: 30px;
}


.partners {
background: rgba(255, 255, 255, 0.1);
padding: 20px;
border-radius: 12px;
max-width: 500px;
width: 100%;
}


.partners h3 {
font-size: 1.4rem;
margin-bottom: 10px;
font-weight: 600;
}


.partners ul {
list-style: none;
padding: 0;
}


.partners ul li {
font-size: 1rem;
padding: 6px 0;
border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}


.partners ul li:last-child {
border-bottom: none;
}


@media (max-width: 600px) {
.main-title {
font-size: 2rem;
}


.subtitle {
font-size: 1rem;
}
}
`}</style>


<h1 className="main-title">Welcome to Future Titans – India’s Entrepreneurial Hunt</h1>
<p className="subtitle">A USA–India initiative<br />In Association with The Times of India</p>


<div className="partners">
<h3>Ecosystem Partners:</h3>
<ul>
<li>Startup India</li>
<li>Association of Indian Principals</li>
</ul>
</div>
</div>







      <section className="welcome-section">
        <div className="welcome-content">
          <div className="text-column">
            <h2>
             
    
              Building India’s Tomorrow, Today
            </h2>
            
            <p>
            We’re entering an age where AI creates faster than we can imagine and automation replaces routine in seconds.
Today, the future belongs to young innovators who see possibilities where others see limits, craft solutions with courage, and lead with vision that inspires change. 
<br/>
That’s where Future Titans by YoungPreneurs comes in — a national challenge designed to equip India’s teens (Classes 8-12) with the one mindset that will always stay relevant: the solution-seekingmindset.
<br/>
This journey isn’t about memorizing business lessons —it’s about forging a mindset that thrives in uncertainty, turns challenges into opportunities, and shapes the future on their own terms.
Because in the world ahead, every innovator is a leader, and every leader is an entrepreneur at heart.
Before stepping into the competition, every participant goes through a 5-part “Build Like a Titan” workshop series — a hands-on, globally benchmarked journey that transforms ideas into action.


            </p>
           
            
            <button
  className="register-btn"
  onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdGtYyt5jrjCOXa4sagyEVFD6-d5RKGvIEnAuXs8yTYCGn3QQ/viewform", "_blank")}
>
REGISTER NOW
</button>
          </div>
          <div className="image-column">
            <div className="image-container" style={{width: '100%', height: '100%'}}>
              <img src={classImage} alt="Classroom"  />
             
            </div>
          </div>
        </div>
      </section>

      <div className="workshop-container">
        <div className="workshop-title">The Learning Ladder: Build Like a Titan</div>
       

        <div className="cards-wrapper">
          <div className="card">
            <h4>Discover & Define</h4>
            <p><i>Turning Problems into Possibilities</i></p>
            <p>Students learn empathy-driven exploration of real-world challenges.</p>
            <i>Design Thinking: Empathize + Define | BMC: Market Segmentation, SWOT Analysis</i>
          </div>

          <div className="card red-border">
            <h4>Design the Difference</h4>
            <p><i>Crafting Bold Ideas That Matter</i></p>
            <p>They master ideation tools to uncover what makes their solution stand out.</p>
            <i>Design Thinking: Ideate | BMC: Value Proposition</i>
          </div>

          <div className="card">
            <h4>Prototype to Pitch — Build, Test, Improve — Fast!</h4>
            <p><i>Build, Test, Improve — Fast!</i></p>
            <p>They bring ideas to life using no-code tools, rapid testing, and iteration.</p>
            <i>Design Thinking: Prototype + Test | BMC: Key Activities, Channels</i>
          </div>

          <div className="card red-border">
            <h4>Map Your Model</h4>
            <p><i>Make It Work, Make It Worth It</i></p>
            <p>Students learn monetization and scalability — turning ideas into viable models.</p>
            <i>BMC: Revenue Streams, Cost Structure, Customer Relationships</i>
          </div>

          <div className="card">
            <h4>Pitch Like a Pro</h4>
            <p><i>Storytelling That Wins Judges & Investors</i></p>
            <p>	
A masterclass in influence and communication, refining delivery and confidence.
</p>
            <i>Full BMC Review + Media & Pitch Training</i>
          </div>
        </div>
      </div>

      <div className="testimonial-container">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-left">
              <img
                src={testimonial.image}
                alt={`Photo of ${testimonial.name}`}
                className="testimonial-image"
              />
              <div className="testimonial-name">{testimonial.name}</div>
              <div className="testimonial-title">{testimonial.title}</div>
            </div>
            <div className="testimonial-right">
              <blockquote className="testimonial-quote">
                {testimonial.quote}
              </blockquote>
            </div>
          </div>
        ))}
      </Slider>
      </div>

      <div style={{textAlign: "center",  color: "#dcae1a",fontSize: "26px",fontWeight: "bold"}}>The Competition Format: Where Ideas Take Flight</div>
      <div className="competition-section">
       
        <div className="card">
          <p><strong>Phase 1 — Idea Submission (Virtual)</strong></p>
          <p>After completing the Build Like a Titan series, 
            students submit their ideas through our digital platform.</p>
          
        </div>


        <div className="card">
        
          <p><strong>Phase 2 — Pitch Video (Virtual)</strong></p>
          <p>Participants bring their ideas to life in a short, 
            impactful video pitch that showcases their prototype, validation, and vision.</p>
          
        </div>
        <div className="card">
         
          <p><strong>Phase 3 — The Grand Finale (Live Bootcamp)</strong></p>
          <p>The Top 50 teams from across India enter an intensive 3-day bootcamp, working with mentors and pitching 
            their ventures to a national jury of entrepreneurs, investors, and innovators.</p>
          
        </div>




       
      
      </div>


      <section className="launchpad-section">
      <div className="content-box">
        <h2 className="section-title">Future Titans</h2>

        <p className="section-text">
          This is more than a competition — it’s a launchpad for India’s next
          generation of builders. Where ideas find direction, young leaders find
          their voice, and the journey to becoming a changemaker truly begins.
        </p>

        <p className="section-text">
          Never before has a curriculum of this scale, depth, and international
          caliber been made available to school students at this level. Future
          Titans isn’t just preparing students for the future — it’s empowering
          them to build it.
        </p>

        <p className="section-highlight">
          You’ve dreamed. You’ve imagined.  
          <br />
          Now it’s time to build, pitch, and rise.  
          <br />
          <strong>The next big name in entrepreneurship could be yours.</strong>
        </p>
      </div>
    </section>

      {/* <div className="cta-section">
       
        <p style={{fontSize:"23px",color:"#204e3d",fontWeight:"bold"}}>
        This is more than a competition — it’s a launchpad for India’s next generation of builders.
Where ideas find direction, young leaders find their voice, and the journey to becoming a changemaker truly begins.

        </p>
        <p className="cta-highlight">
        Never before has a curriculum of this scale, depth, and international caliber been made available to school students at this level.
Future Titans isn’t just preparing students for the future — it’s empowering them to build it.

        </p>
       
        
        <button
  className="register-btn"
  onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdGtYyt5jrjCOXa4sagyEVFD6-d5RKGvIEnAuXs8yTYCGn3QQ/viewform", "_blank")}
>
REGISTER NOW
</button>

      </div> */}


















      
      <style>{`

      .hero-section {
         background-image: url(${academyHeaderBg});
  background-size: cover;
  
  height: 825px;
  width: 100%;
  position: relative;
  padding-top: 90px;
  
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

        .welcome-section {
          background: #f8f8f8;
          padding: 60px 20px;
          border-radius: 20px;
          margin: 20px;
        }

        .welcome-content {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          margin-top: 100px;
        }

        .text-column {
          flex: 1 1 55%;
          padding: 20px;
          color: #2e6f57;

        }

        .text-column h2 {
          font-size: 24px;
          margin-bottom: 16px;
          line-height: 1.4;
        }

        .highlight {
       font-size: 24px;
          color: #dcae1a;
          font-weight: bold;
        }

        .subheading {
          color: #204e3d;
          font-weight: 600;
        }

        .theme {
          color: #2e6f57;
          font-weight: 600;
          margin: 10px 0;
        }

        .text-column p {
          color: #333;
          margin-bottom: 16px;
          line-height: 1.6;
        }

        .register-btn {
          background-color: #2e6f57;
          color: #fff;
          padding: 12px 24px;
          border: none;
          font-weight: bold;
          border-radius: 25px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .register-btn:hover {
          background-color: #dcae1a;
        }

        .image-column {
          flex: 1 1 30%;
          // padding: 15px;
          position: relative;
        }

      .image-container {
    flex: 1.5;
    min-width: 350px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-left: 20px;
  }

  .image-container img {
    width: 100%;
    max-width: 450px; /* Increase this as needed */
    height: auto;
    border-radius: 20px;
    object-fit: cover;
  }


  .workshop-container {
          padding: 40px 20px;
          text-align: center;
          font-family: Arial, sans-serif;
        }

        .workshop-title {
          color: #dcae1a;
          font-size: 26px;
          font-weight: bold;
        }

        .workshop-subtitle {
          font-size: 24px;
          font-weight: 600;
          margin-top: 10px;
          color: #1b4d3e;
        }

        .cards-wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          margin-top: 40px;
        }

        .card {
          width: 260px;
          border: 2px solid #1b4d3e;
          border-radius: 10px;
          padding: 20px;
          text-align: left;
          background-color: #fff;
          box-sizing: border-box;
          transition: transform 0.3s ease;
        }

        .card.red-border {
          border-color: #dcae1a;
        }

        .card h4 {
          font-size: 18px;
          color: #1b4d3e;
          margin-bottom: 10px;
        }

        .card p {
          font-size: 10px;
          color: #555;
          margin: 8px 0;
        }

        .card i {
          font-style: italic;
          display: block;
          margin-top: 10px;
          color: #888;
        }

        @media (max-width: 768px) {
          .cards-wrapper {
            flex-direction: column;
            align-items: center;
          }

          .card {
            width: 90%;
          }
        }



        

      

        @media (max-width: 768px) {
          .welcome-content {
            flex-direction: column;
          }

          .text-column,
          .image-column {
            flex: 1 1 100%;
            padding: 10px;
          }

          .text-column h2 {
            font-size: 20px;
          }

          .overlay-box {
            position: relative;
            margin-top: 10px;
            left: auto;
            right: auto;
            bottom: auto;
          }
        }

.testimonial-container {
            max-width: 800px;
            margin: 40px auto;
            padding: 20px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #f9f9f9;
            border-radius: 16px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          }

          .testimonial-card {
           text-align: center;
  padding: 20px;
          }

          .testimonial-left {
            flex: 0 0 100px;
            text-align: center;
          }

          .testimonial-image {
            width: 100px; /* or your desired size */
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  margin: 0 auto 20px auto;
           
          }

          .testimonial-name {
            margin-top: 10px;
            font-weight: bold;
            font-size: 16px;
            color: #333;
          }

          .testimonial-title {
            font-size: 14px;
            color: #777;
          }

          .testimonial-right {
            flex: 1;
            font-size: 16px;
            color: #444;
          }

          .testimonial-quote {
            font-style: italic;
            quotes: "“" "”" "‘" "’";
            position: relative;
            padding-left: 20px;
          }

          .testimonial-quote::before {
            content: open-quote;
            font-size: 32px;
            position: absolute;
            left: 0;
            top: -10px;
            color: #ccc;
          }

          @media (max-width: 768px) {
            .testimonial-card {
              flex-direction: column;
              text-align: center;
            }

            .testimonial-left {
              margin-bottom: 10px;
              
            }

            .testimonial-right {
              padding-top: 10px;
            }
          }
         
          /* Customize left arrow */
.slick-prev {
  left: 5px !important; /* Adjust this value for more or less padding */
  z-index: 1;
}

/* Customize right arrow */
.slick-next {
  right: 5px !important; /* Adjust this value for more or less padding */
  z-index: 1;
}

/* Optional: Customize arrow icons */
.slick-prev:before,
.slick-next:before {
  color: #dcae1a !important;
  font-size: 30px;
}

  .competition-section {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          padding: 40px 20px;
        }

        .card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          padding: 24px;
          flex: 1 1 300px;
          max-width: 350px;
        }

        .card h3 {
          color: #dcae1a;
          margin-bottom: 16px;
          font-size: 20px;
        }

        .card h4 {
          color: #1a1a1a;
          font-size: 16px;
          margin-top: 16px;
          margin-bottom: 8px;
        }

        .card p {
          margin: 6px 0;
          color: #333;
          font-size: 14px;
          line-height: 1.6;
        }

        .check-list {
          list-style: none;
          padding-left: 0;
        }

        .check-list li {
          position: relative;
          padding-left: 24px;
          margin-bottom: 10px;
          font-size: 14px;
          color: #333;
        }

        .check-list li::before {
          content: '✔';
          position: absolute;
          left: 0;
          color: #dcae1a;
        }

        @media (max-width: 768px) {
          .competition-section {
            flex-direction: column;
            align-items: center;
          }

          .card {
            max-width: 90%;
          }
        }
.live-pitch-section {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: center;
          padding: 40px 20px;
          gap: 40px;
        }

        .live-pitch-text {
          flex: 1 1 400px;
          max-width: 600px;
        }

        .live-pitch-text h2 {
          color: #dcae1a;
          font-size: 24px;
          margin-bottom: 24px;
        }

        .info-block {
          display: flex;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .icon-box {
          width: 32px;
          height: 32px;
          background-color: #dcae1a;
          color: white;
          font-size: 18px;
          border-radius: 6px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 12px;
        }

        .icon-box.purple {
          background-color: #9c27b0;
        }

        .info-content h4 {
          margin: 0;
          color: #1a1a1a;
          font-size: 16px;
        }

        .info-content p {
          margin: 4px 0 0;
          color: #555;
          font-size: 10px;
        }

        .live-pitch-image {
          flex: 1 1 300px;
          max-width: 500px;
        }

        .live-pitch-image img {
          width: 100%;
          height: auto;
          border-radius: 8px;
        }

        @media (max-width: 768px) {
          .live-pitch-section {
            flex-direction: column;
            align-items: center;
            text-align: left;
          }

          .live-pitch-text, .live-pitch-image {
            max-width: 100%;
          }

          .icon-box {
            margin-right: 10px;
          }
        }
          .criteria-section {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: flex-start;
          padding: 40px 20px;
          gap: 40px;
        }

        .criteria-image {
          flex: 1 1 300px;
          max-width: 500px;
        }

        .criteria-image img {
          width: 100%;
          height: auto;
          border-radius: 8px;
        }

        .criteria-content {
          flex: 1 1 400px;
          max-width: 600px;
        }

        .criteria-content h2 {
          color: #dcae1a;
          font-size: 24px;
          margin-bottom: 24px;
        }

        .criteria-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .icon-box {
          width: 32px;
          height: 32px;
          background-color: #dcae1a;
          color: white;
          font-size: 18px;
          border-radius: 6px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-right: 12px;
        }

        .icon-box.purple {
          background-color: #9c27b0;
        }

        .criteria-text h4 {
          margin: 0;
          font-size: 16px;
          color: #1a1a1a;
        }

        .criteria-text p {
          margin: 4px 0 0;
          font-size: 14px;
          color: #555;
        }

        @media (max-width: 768px) {
          .criteria-section {
            flex-direction: column;
            text-align: left;
          }

          .criteria-content, .criteria-image {
            max-width: 100%;
          }
        }
          .cta-section {
          background-color: #f2f2f2;
          text-align: center;
          padding: 50px 80px;
          position: relative;
          overflow: hidden;
        }

        .cta-section h2 {
          font-size: 28px;
          color: #dcae1a;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .cta-section p {
          font-size: 16px;
          color: #555;
          max-width: 1000px;
          margin: 0 auto 16px auto;
          line-height: 1.6;
        }

        .cta-section p strong {
          color: #333;
        }

        .cta-highlight {
          color: #2d2d2d;
          font-weight: bold;
        }

        .cta-register-button {
          display: inline-block;
          background-color: #dcae1a;
          color: white;
          font-weight: bold;
          padding: 12px 28px;
          border-radius: 999px;
          text-decoration: none;
          font-size: 14px;
          margin-top: 30px;
          transition: background-color 0.3s ease;
        }

        .cta-register-button:hover {
          background-color: #dcae1a;
        }

        @media (max-width: 768px) {
          .cta-section h2 {
            font-size: 22px;
          }

          .cta-section p {
            font-size: 14px;
          }

          .cta-register-button {
            font-size: 13px;
            padding: 10px 24px;
          }
        }


        .launchpad-section {
  width: 100%;
  padding: 60px 20px;
  background: linear-gradient(
    135deg,
    #fdf7ff 0%,
    #f8f3ff 40%,
    #fff 100%
  );
  display: flex;
  justify-content: center;
  animation: fadeIn 1.2s ease;
}

.content-box {
  max-width: 900px;
  text-align: center;
  padding: 20px;
}

.section-title {
  font-size: 32px;
  font-weight: 700;
  color: #0b3d2e;
  letter-spacing: 1px;
  position: relative;
  display: inline-block;
  margin-bottom: 25px;
}

.section-title::after {
  content: "";
  width: 60%;
  height: 4px;
  background: linear-gradient(to right, #d4af37, #f9d67a);
  position: absolute;
  bottom: -10px;
  left: 20%;
  border-radius: 10px;
}

.section-text {
  font-size: 18px;
  line-height: 1.7;
  color: #333;
  margin: 18px 0;
}

.section-highlight {
  margin-top: 30px;
  font-size: 20px;
  line-height: 1.8;
  font-weight: 500;
  color: #0b3d2e;
  background: rgba(212, 175, 55, 0.1);
  padding: 20px;
  border-radius: 12px;
  border-left: 4px solid #d4af37;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .section-title {
    font-size: 26px;
  }

  .section-text,
  .section-highlight {
    font-size: 16px;
  }
}

/* Fade Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

      `}</style>
    </>
  );
};

export default Competition;
