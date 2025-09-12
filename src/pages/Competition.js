import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import classImage from '../assets/classroom.jpg';
import juliya from '../assets/juliya.jpeg';
import sandipan from '../assets/sandipan.jpeg';
import suman from '../assets/suman.jpeg';
import fred from '../assets/fred.jpeg';
import partha from '../assets/partha.jpg';
import devika from '../assets/devika.jpeg';

import presentation from '../assets/presentation.jpg';
import academyHeaderBg from '../assets/academyHeaderBg.png';



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
      <section className="welcome-section">
        <div className="welcome-content">
          <div className="text-column">
            <h2>
              <span className="highlight">Welcome to Future Titans – USA, INDIA Initiative:</span><br />
              <span className="subheading">Building India’s Tomorrow, Today</span>
            </h2>
            <p className="theme">Theme: Build Like a Titan</p>
            <p>
              In the age of AI and the creator economy, an entrepreneurial mindset is no longer optional — it’s a life skill.
              Whether you start a business or not, thinking like a creator, innovator, and problem-solver is what will set you apart.
              That’s the mission behind Future Titans, brought to you by Youngpreneurs — a national movement to unlock the potential of teenagers across India.
              This isn’t just another competition. It’s a nationwide call to action to spark innovation, creativity, and leadership among students from Class 8 to 12.
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
        <div className="workshop-title">The Workshop Series: Build Like a Titan</div>
        <div className="workshop-subtitle">
          Each 90-minute session blends Design Thinking, Business Model Canvas,<br />
          and real-world application — making it actionable and future-ready.
        </div>

        <div className="cards-wrapper">
          <div className="card">
            <h4>Discover & Define</h4>
            <p><i>Turning Problems into Possibilities</i></p>
            <p>Empathy-driven exploration of real-world challenges</p>
            <i>Design Thinking: Empathize + Define | BMC: Market/Customer Segmentation, SWOT</i>
          </div>

          <div className="card red-border">
            <h4>Design the Difference</h4>
            <p><i>Crafting Bold Ideas That Matter</i></p>
            <p>Ideation tools to uncover what makes your solution stand out</p>
            <i>Design Thinking: Ideate | BMC: Value Proposition</i>
          </div>

          <div className="card">
            <h4>Prototype to Pitch</h4>
            <p><i>Build, Test, Improve — Fast!</i></p>
            <p>Create MVPs using no-code tools + rapid feedback</p>
            <i>Design Thinking: Prototype + Test | BMC: Key Activities, Channels</i>
          </div>

          <div className="card red-border">
            <h4>Map Your Model</h4>
            <p><i>Make It Work, Make It Worth It</i></p>
            <p>Turn ideas into scalable models with smart monetization</p>
            <i>BMC: Revenue, Cost Structure, Customer Relationships</i>
          </div>

          <div className="card">
            <h4>Pitch Like a Pro</h4>
            <p><i>Storytelling That Wins Judges & Investors</i></p>
            <p>Narrative tools + peer feedback + pitch frameworks</p>
            <i>Full BMC Review + Media Training</i>
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


      <div className="competition-section">
        {/* Card 1 */}
        <div className="card">
          <h3>Competition Format</h3>
          <p><strong>Round 1: Idea Submission (Virtual)</strong></p>
          <h4>Task</h4>
          <p>Submit a 1–3 page business idea proposal or a 2–3 page pitch deck</p>
          <h4>Details to Include</h4>
          <p>Problem statement, proposed solution, target audience, feasibility and innovation</p>
          <h4>Judging Criteria</h4>
          <p>Clarity of idea, relevance to the problem, innovation, and scalability</p>
        </div>

        {/* Card 2 */}
        <div className="card">
          <h3>Key Takeaways</h3>
          <ul className="check-list">
            <li>Exclusive Access to 2 High-Impact Workshops (2–3 hours each) on Idea Validation</li>
            <li>Step-by-Step Guidance on Crafting a Winning Business Proposal</li>
            <li>Master the Art of Defining a Problem and Presenting a Strong Solution</li>
            <li>Exclusive Insights with two of India’s Leading Celebrity Entrepreneurs</li>
            <li>Certificate of Participation</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="card">
          <h3>Competition Format</h3>
          <p><strong>Round 2: Business Plan (Virtual)</strong></p>
          <h4>Task</h4>
          <p>Shortlisted participants will develop a detailed business plan covering market research, operational strategy, financial model, and marketing.</p>
          <h4>Submission Format</h4>
          <p>Written business plan (4–5 pages) OR recorded pitch video</p>
          <h4>Judging Criteria</h4>
          <p>Feasibility, depth of research, and financial viability</p>
        </div>

        {/* Card 4 */}
        <div className="card">
          <h3>Key Takeaways</h3>
          <ul className="check-list">
            <li>2 Expert-Led Workshops (2–3 hours each) on market research and finances</li>
            <li>Guidance on Crafting a Winning Business Plan or Video Pitch</li>
            <li>Exclusive Insights from two of India’s Leading Investors</li>
            <li>Certificate of Participation</li>
          </ul>
        </div>
      </div>


      <div className="live-pitch-section">
        <div className="live-pitch-text">
          <h2>Live Pitch (Finale)</h2>

          <div className="info-block">
            <div className="icon-box">🚀</div>
            <div className="info-content">
              <h4>Task</h4>
              <p>Present a compelling business pitch, covering budgeting, pricing, and profitability.</p>
            </div>
          </div>

          <div className="info-block">
            <div className="icon-box purple">📽</div>
            <div className="info-content">
              <h4>Setup</h4>
              <p>Physical or virtual presentation with slides, demos, or props.</p>
            </div>
          </div>

          <div className="info-block">
            <div className="icon-box">⏸</div>
            <div className="info-content">
              <h4>Scoring</h4>
              <p>Judges will evaluate each pitch on a scale of 1–10 across all criteria.</p>
            </div>
          </div>

          <div className="info-block">
            <div className="icon-box">⏯</div>
            <div className="info-content">
              <h4>Advancement</h4>
              <p>Top-scoring entries (e.g., top 20%) move to the next round.</p>
            </div>
          </div>
        </div>

        <div className="live-pitch-image">
          <img src={presentation} alt="Pitch Presentation" />
          {/* Replace the image URL above with your actual image path if needed */}
        </div>
      </div>
      

      <div className="criteria-section">
        <div className="criteria-image">
          <img src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg" alt="Team working on UI" />
          {/* Replace with your image path if local */}
        </div>

        <div className="criteria-content">
          <h2>Judging Criteria</h2>

          <div className="criteria-item">
            <div className="icon-box">🚀</div>
            <div className="criteria-text">
              <h4>Creativity and Innovation (30%)</h4>
              <p>Is the idea fresh, unique, and impactful?</p>
            </div>
          </div>

          <div className="criteria-item">
            <div className="icon-box purple">📽</div>
            <div className="criteria-text">
              <h4>Problem Relevance (20%)</h4>
              <p>Does it solve a real-world issue?</p>
            </div>
          </div>

          <div className="criteria-item">
            <div className="icon-box">⏸</div>
            <div className="criteria-text">
              <h4>Feasibility (20%)</h4>
              <p>Can this be built and scaled?</p>
            </div>
          </div>

          <div className="criteria-item">
            <div className="icon-box">⏸</div>
            <div className="criteria-text">
              <h4>Impact (20%)</h4>
              <p>What change does it bring?</p>
            </div>
          </div>

          <div className="criteria-item">
            <div className="icon-box">⏸</div>
            <div className="criteria-text">
              <h4>Presentation (10%)</h4>
              <p>How well is the idea communicated?</p>
            </div>
          </div>
        </div>
      </div>


      <div className="cta-section">
        <h2>Ready to Build, Pitch and Scale?</h2>
        <p>
          This isn’t just a competition—it’s a launchpad for 
          <strong> India’s future entrepreneurs.</strong> If you have the vision, the passion, and the drive to build something extraordinary, 
          <strong> Future Titans is where your journey begins.</strong>
        </p>
        <p className="cta-highlight">
          Do you have what it takes to be the next big name in entrepreneurship? Let’s find out!
        </p>
       
        
        <button
  className="register-btn"
  onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdGtYyt5jrjCOXa4sagyEVFD6-d5RKGvIEnAuXs8yTYCGn3QQ/viewform", "_blank")}
>
REGISTER NOW
</button>

      </div>
      <style>{`

      .hero-section {
         background-image: url(${academyHeaderBg});
  background-size: cover;
  
  height: 920px;
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
          max-width: 1200px;
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
        }

        .text-column h2 {
          font-size: 24px;
          margin-bottom: 16px;
          line-height: 1.4;
        }

        .highlight {
          color: #d62828;
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
          background-color: #e4002b;
          color: #fff;
          padding: 12px 24px;
          border: none;
          font-weight: bold;
          border-radius: 25px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .register-btn:hover {
          background-color: #c70024;
        }

        .image-column {
          flex: 1 1 40%;
          padding: 20px;
          position: relative;
        }

      .image-container {
    flex: 1.2;
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
          color: #e12727;
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
          border-color: #e12727;
        }

        .card h4 {
          font-size: 18px;
          color: #1b4d3e;
          margin-bottom: 10px;
        }

        .card p {
          font-size: 14px;
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
  color: red !important;
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
          color: #e60023;
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
          color: red;
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
          color: #e60023;
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
          background-color: #f44336;
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
          font-size: 14px;
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
          color: #e60023;
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
          background-color: #f44336;
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
          padding: 60px 20px;
          position: relative;
          overflow: hidden;
        }

        .cta-section h2 {
          font-size: 28px;
          color: #e60023;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .cta-section p {
          font-size: 16px;
          color: #555;
          max-width: 800px;
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
          background-color: #e60023;
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
          background-color: #cc001f;
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
      `}</style>
    </>
  );
};

export default Competition;
