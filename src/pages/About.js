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
    background: linear-gradient(to bottom right, rgba(220, 175, 26, 0.85),rgb(121, 96, 15));
    color: white;
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
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    max-width: 1000px;
    margin: auto;
  }

  .info-box {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgb(255, 255, 255);
    border-radius: 10px;
    padding: 20px;
    font-size: 16px;
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
          The future belongs to those who don’t wait for change—they create it. YoungPreneurs is more than a program—
          it’s India’s first patent-pending entrepreneurial ecosystem that transforms ideas into action and students into innovators, leaders, and changemakers.
          </p>
          <p className="about-paragraph">
          Through immersive workshops, hands-on startup frameworks, and real-world challenges, students move from creative sparks to tangible ventures. They learn to think critically, solve complex problems, and launch scalable solutions,
           guided by structured models like IDEA DNA and the SURGE Framework, while their growth is benchmarked through the Student Startup Index (SSI).
          </p>
          <p className="about-paragraph">
          Backed by The Times of India, YoungPreneurs powers Future Titans, India’s premier entrepreneurship challenge for school students. Winners gain funding to bring their ideas to life, national recognition, and a platform to step confidently into the world of innovation.
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
          To redefine education by making entrepreneurial thinking a core life skill —empowering students to turn ideas into impact and shape a future driven by innovation and purpose.
          </div>
        </div>
        <div className="card mission-card">
          <img src={visionIcon} alt="Mission Icon" style={{ display: "block", margin: "0 auto 20px auto",height: "50px",width: "100px", }}/>
          <div className="card-title">Our Mission</div>
          <div className="card-text">
          To bring India’s first patent-pending entrepreneurial ecosystem into classrooms — enabling schools to nurture creativity, problem-solving, and leadership from an early age.
          </div>
        </div>
      </div>




      <div className="entrepreneurial-wrapper">
  <h2 style={{color: 'white'}}>Building an Entrepreneurial India, One Teen at a Time</h2>
  <div className="grid-container">
  <div className="info-box">
  The world is changing faster than ever. AI, automation, and emerging technologies are redefining careers, industries, and opportunities. In this landscape, the skill that stands the test of time isn’t a degree — it’s the entrepreneurial mindset: the ability to solve problems, create solutions, and lead with impact.
        </div>
        <div className="info-box">
        Future Titans by YoungPreneurs is India’s national entrepreneurship movement that empowers students from Classes 8–12 to think boldly, act decisively, and innovate relentlessly.This is not a competition — it’s a launchpad. Students learn to navigate complex challenges, turn ideas into prototypes, and explore strategies for ventures that can scale. Every step of the journey is guided by proven frameworks like IDEA DNA and SURGE,
         with progress tracked through the Student Startup Index (SSI).
        </div>
        <div className="info-box">
        Participants gain access to five transformative, globally-led workshops taught by world-class mentors:
          <br /><br />
          Prof. Fred Katz, Johns Hopkins University (USA)<br />
          Sandipan Chattopadhyay, Ex-CTO, Justdial & MD, Xelpmoc
        </div>
        <div className="info-box">
        Here, students build solutions that matter — blending creativity, critical thinking, empathy, and leadership to solve real problems in an AI-driven world. Winners receive funding, recognition, and a platform to launch ventures that impact communities, industries, and the nation.
        </div>
  </div>
</div>

    </div>
  );
};

export default AboutUs;
