import React from 'react';
import teamImage from '../assets/about-main.jpg'; 
import visionIcon from '../assets/vision.png';  
import missionIcon from '../assets/mission.png'; 
import headerBg from "../assets/headerBg.jpg"
const AboutUs = () => {
  return (
<div>
<style>
{`

 .hero-section {
          background-image: url(${headerBg});
          background-size: cover;
          background-position: center;
          height: 520px; /* Same as your screenshot image */
          width: 100%;
          position: relative;
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








  .about-us {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 40px;
    max-width: 1200px;
    margin: auto;
    gap: 40px;
    flex-wrap: wrap;
  }

  .about-text {
    flex: 1;
    min-width: 300px;
    margin-top: 100px;
  }

  .about-heading {
    color: #dcae1a;
    font-weight: bold;
    letter-spacing: 1px;
    margin-bottom: 10px;
  }

  .about-title {
    color: #264653;
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .about-paragraph {
    color: #555;
    line-height: 1.6;
    margin-bottom: 15px;
    font-size: 16px;
  }

  .about-image {
    flex: 1;
    min-width: 300px;
    margin-top: 200px;
  }

  .about-image img {
    width: 100%;
    max-width: 500px;
    border-radius: 12px;
    object-fit: cover;
  }

  .vision-mission-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 40px;
    max-width: 1200px;
    margin: auto;
  }

  .card {
    flex: 1;
    min-width: 280px;
    border-radius: 12px;
    padding: 30px 20px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    text-align: center;
    transition: transform 0.3s ease;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .vision-card {
    background: linear-gradient(to bottom right, #dcae1a, #dcae1a);
    color: #ffffff;
  }

  .mission-card {
    background-color: #ffffff;
    color: #333333;
  }

  .card img {
    width: 80px;
    height: auto;
    margin-bottom: 20px;
  }

  .card-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .card-text {
    font-size: 16px;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .vision-mission-container {
      flex-direction: column;
      padding: 20px;
    }

    .card {
      padding: 25px 15px;
    }

    .card-title {
      font-size: 18px;
    }

    .card-text {
      font-size: 15px;
    }

    .about-us {
      flex-direction: column;
      padding: 20px;
    }

    .about-title {
      font-size: 24px;
    }

    .about-paragraph {
      font-size: 15px;
    }

    .about-image img {
      max-width: 100%;
    }
  }

  /* NEW: Entrepreneurial section styles */
  .entrepreneurial-wrapper {
    background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.1),rgb(167, 166, 164));
    color: #264653;
    padding: 60px 20px;
    text-align: center;
  }

  .entrepreneurial-wrapper h2 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 40px;
    
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    max-width: 1500px;
    margin: auto;
  }

  .info-box {
    background: rgba(255, 255, 255, 0.32);
    border-radius: 10px;
    padding: 40px;
    font-size: 20px;
    text-align: left;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .grid-container {
      grid-template-columns: 1fr;
    }

    .entrepreneurial-wrapper h2 {
      font-size: 22px;
    }

    .info-box {
      font-size: 15px;
    }
  }
`}
</style>






<div className="hero-section">
        {/* You can place overlay text, buttons, or other elements here */}
      </div>


    <div className="about-us">
        <div className="about-text">
          <h4 className="about-heading">ABOUT US</h4>
          <h2 className="about-title">YoungPreneurs – Igniting India’s Young Innovators</h2>
          <p className="about-paragraph">
          The future belongs not to those who wait for opportunities, but to those who create them.
YoungPreneurs™ is India’s first patent-pending neuro-adaptive entrepreneurial ecosystem, designed to transform young minds into innovators, problem-solvers, and future leaders. Powered by our proprietary IDEA DNA™ Mindset Engine (LP00581) and the S.U.R.G.E.™ execution framework, it builds the internal architecture of innovation — teaching students to generate ideas, navigate complexity, and convert challenges into actionable solutions.

          </p>
          <p className="about-paragraph">
          Through immersive workshops, structured innovation models, real-world challenges, and guided execution, students progress from sparks of imagination to validated, scalable solutions. Their growth is tracked using the Solution-Seeking Index (SSI™) — India’s first metric to quantify entrepreneurial mindset, problem-solving ability, and innovation readiness.
          </p>
          <p className="about-paragraph">
          Guided by global experts and backed by The Times of India, YoungPreneurs™ fuels Future Titans™, India’s premier entrepreneurship challenge for school students. Winners gain national recognition, funding, incubation opportunities, and a platform to confidently enter the world of innovation.
          </p>
         
        </div>
        <div className="about-image">
          <img src={teamImage} alt="Young team of entrepreneurs" />
        </div>
      </div>

      <div className="vision-mission-container">
        <div className="card vision-card">
          <img src={missionIcon} alt="Vision Icon" style={{ display: "block", margin: "0 auto 20px auto" }}/>
          <div className="card-title">Our Vision</div>
          <div className="card-text">
          A Generation That Sees Problems as Opportunities. A future where every teen looks at a challenge and thinks — “Let’s solve it.” Where every classroom becomes a catalyst for change, and education becomes the engine of a nation that innovates its own tomorrow.
          </div>
        </div>
        <div className="card mission-card">
          <img src={visionIcon} alt="Mission Icon" style={{ display: "block", margin: "0 auto 20px auto",height: "50px",width: "100px", }}/>
          <div className="card-title">Our Mission</div>
          <div className="card-text">
          Our mission is to build a nation of solution-seekers, not just job-seekers. By fusing AI, neuroscience, and education, we inspire every teen to see possibilities where others see problems, create meaningful solutions, and shape the future.
          </div>
        </div>
      </div>




      <div className="entrepreneurial-wrapper">
  <h2 style={{color: ' #264653'}}>Building an Entrepreneurial India, One Teen at a Time</h2>
  <div className="grid-container">
  <div className="info-box">
  The world is evolving faster than ever. AI, automation, and emerging technologies are reshaping careers and industries. In this new landscape, the skill that matters most is the entrepreneurial mindset: the ability to solve problems, create solutions, and lead with purpose.
        </div>
        <div className="info-box">
        Future Titans™ by YoungPreneurs™ is India’s national entrepreneurship movement for students from Classes 8–12 — a launchpad empowering young innovators to act decisively, think boldly, and build solutions that matter.
        </div>
        <div className="info-box">
        Students transform problems into prototypes and ideas into ventures using the proven YoungPreneurs framework:
          <h5>IDEA DNA™ → S.U.R.G.E.™ → SSI™</h5>
          
          They are guided through five transformative workshops led by global faculty, including:
          <br />
          Prof. Fred Katz, Johns Hopkins University (USA)<br />
          Sandipan Chattopadhyay, Ex-CTO, Justdial & MD, Xelpmocz
          <br/>
          They are guided through five transformative workshops led by global faculty, including:
        </div>
       
  </div>
</div>

    </div>
  );
};

export default AboutUs;
