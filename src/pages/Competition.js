import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import classImage from '../assets/classroom.jpg';
import juliya from '../assets/juliya.jpeg';
import sandipan from '../assets/sandipan.jpeg';
import suman from '../assets/suman.jpeg';
// Replace with actual path


const testimonials = [
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
            <button className="register-btn">REGISTER NOW</button>
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
      {/* CSS inside style tag */}
      <style>{`
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

      `}</style>
    </>
  );
};

export default Competition;
