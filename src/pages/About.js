import React from 'react';
import teamImage from '../assets/about-main.jpg'; 
import visionIcon from '../assets/vision.png';  
import missionIcon from '../assets/mission.png'; 

const AboutUs = () => {
  return (
<div>
<style>
{`
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
    color: #e63946;
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
    margin-top: 100px;
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
    background: linear-gradient(to bottom right, #b30000, #8b0000);
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
    background: linear-gradient(to bottom right, #450000, #000000);
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
    border: 1px solid rgba(255, 255, 255, 0.2);
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


<div className="about-us">
        <div className="about-text">
          <h4 className="about-heading">ABOUT US</h4>
          <h2 className="about-title">Youngpreneurs – Empowering Tomorrow’s Leaders</h2>
          <p className="about-paragraph">
            The future belongs to those who dare to dream, build, and lead. At <strong>Youngpreneurs</strong>, we don’t just teach
            entrepreneurship—we <strong>ignite it</strong>. Our mission is to equip young minds with the mindset, skills, and confidence
            to turn bold ideas into real-world ventures.
          </p>
          <p className="about-paragraph">
            Entrepreneurship isn’t a talent you’re born with—it’s <strong>a mindset you develop</strong>. Through immersive workshops,
            business simulations, and expert mentorship, students cultivate resilience, problem-solving skills, and the power to lead.
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
            Create the next generation of global thinkers and entrepreneurs equipped to tackle 21st century challenges.
          </div>
        </div>
        <div className="card mission-card">
          <img src={visionIcon} alt="Mission Icon" style={{ display: "block", margin: "0 auto 20px auto",height: "50px",width: "100px", }}/>
          <div className="card-title">Our Mission</div>
          <div className="card-text">
            Our goal is simple: To train young people in the entrepreneurial mindset and business principles, empowering them to innovate, solve problems, and lead with confidence.
          </div>
        </div>
      </div>




      <div className="entrepreneurial-wrapper">
  <h2 style={{color: 'white'}}>Building an Entrepreneurial India, One Teen at a Time</h2>
  <div className="grid-container">
  <div className="info-box">
          In an age powered by AI and automation, where traditional roles are rapidly evolving, one mindset stands out as future-proof — the entrepreneurial mindset. It is not just about launching startups. It’s about being a problem solver, a creator, a leader, and a change-maker.
        </div>
        <div className="info-box">
          Future Titans by Youngpreneurs is a national movement to inspire, equip, and empower students from Classes 8 to 12 to think like entrepreneurs — and act like one. We’re shifting India from a job-seeking economy to a creator economy by nurturing entrepreneurial skills early on — critical thinking, empathy, risk-taking, resilience, and innovation.
        </div>
        <div className="info-box">
          To kickstart this journey, every participant attends 5 power-packed, globally-led online workshops taught by:
          <br /><br />
          Prof. Fred Katz, Professor of Entrepreneurship, Johns Hopkins University (USA)<br />
          Sandipan Chattopadhyay, Ex-CTO of Justdial, MD of Xelpmoc (India’s innovation engine)
        </div>
        <div className="info-box">
          Our mission is clear: stir creativity, spark purpose, and seed the next generation of nation-builders.
        </div>
  </div>
</div>

    </div>
  );
};

export default AboutUs;
