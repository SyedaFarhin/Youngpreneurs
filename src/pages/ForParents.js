import React from 'react';
import forParentsHeader from "../assets/forParentsHeader.jpg"
const ForParents = () => {
  return (

<>
<div className="hero-section">
        {/* You can place overlay text, buttons, or other elements here */}
      </div>
    
    <section className="game-changer">
      {/* Left Content */}
      <div className="left-content">
        <h5>A MESSAGE TO PARENTS</h5>
        <p>
          Imagine a future where your child stands out not just for their academic achievements, but for their ability to innovate, lead, and turn ideas into real-world solutions.
        </p>
        <p>
          <strong>Future Titans – India’s Entrepreneurial Hunt</strong>, in collaboration with <strong>The Times of India</strong> and <strong>Youngpreneurs</strong>, offers more than just a competition—it’s a transformative opportunity for young minds to shape their entrepreneurial journey.
        </p>
        <button className="cta-btn">GET STARTED</button>
      </div>

      {/* Right Content */}
      <div className="right-content">
        <h4>WHY THIS COMPETITION A GAME-CHANGER</h4>
        <div className="cards">
          <div className="card red-card">
            <div className="icon">📶</div>
            <h5>Real-World Learning</h5>
            <p>They’ll learn to think critically, solve real-world problems, and create innovative solutions through hands-on workshops and mentoring.</p>
          </div>
          <div className="card">
            <div className="icon">🛠️</div>
            <h5>Prestigious Platform</h5>
            <p>As part of an TOI-backed competition, they’ll gain national recognition and credibility.</p>
          </div>
          <div className="card">
            <div className="icon">📺</div>
            <h5>Unparalleled Opportunities</h5>
            <p>The winners will receive ₹5 lakhs in funding to kickstart their entrepreneurial journey!</p>
          </div>
          <div className="card">
            <div className="icon">💰</div>
            <h5>Skill Development</h5>
            <p>From pitching to problem-solving, your child will master skills that colleges and employers value.</p>
          </div>
        </div>
      </div>

      <section className="cta-section">
      <p className="cta-text">
        Don’t let your child miss this opportunity to shine, learn, and grow into the leader of tomorrow.
      </p>
      <p className="cta-team"><strong>Youngpreneurs Competition Team</strong></p>
      <button className="cta-button">REGISTER NOW</button>
       </section>




      <style>{`


.hero-section {
         background-image: url(${forParentsHeader});
  background-size: cover;
  
  height: 720px;
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


        .game-changer {
          display: flex;
          flex-wrap: wrap;
          padding: 50px 30px;
          background-color:rgb(192, 11, 11);
          color: white;
          justify-content: center;
        }

        .left-content {
          flex: 1 1 40%;
          padding: 20px;
          max-width: 500px;
          margin-top: 150px;
        }

        .left-content h5 {
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 15px;
        }

        .left-content p {
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .left-content strong {
          font-weight: bold;
        }

        .cta-btn {
          background: white;
          color: #ec5c5c;
          border: none;
          padding: 12px 25px;
          font-weight: bold;
          border-radius: 30px;
          cursor: pointer;
          font-size: 14px;
          text-transform: uppercase;
        }

        .cta-btn:hover {
          background-color: #f5f5f5;
        }

        .right-content {
          flex: 1 1 55%;
          padding: 20px;
          max-width: 700px;
          margin-top: 100px;
        }

        .right-content h4 {
          font-size: 18px;
          text-transform: uppercase;
          font-weight: bold;
          margin-bottom: 30px;
        }

        .cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .card {
          background-color: white;
          color: #333;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }

        .card.red-card {
          background-color:rgb(238, 176, 176);
          color: white;
        }

        .card .icon {
          font-size: 24px;
          margin-bottom: 10px;
        }

        .card h5 {
          font-size: 16px;
          margin-bottom: 10px;
        }

        .card p {
          font-size: 14px;
          line-height: 1.5;
        }

        @media (max-width: 900px) {
          .game-changer {
            flex-direction: column;
            align-items: center;
          }

          .left-content,
          .right-content {
            flex: 1 1 100%;
            max-width: 100%;
          }

          .cards {
            grid-template-columns: 1fr;
          }
        }


       .cta-section {
  width: 100vw;
  margin: 0;
  padding: 100px 20px;
  background-color: #fff;
  
  text-align: center;
  position: relative;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
}



        .cta-text {
          font-size: 26px;
          color: #2c4a3f;
          line-height: 1.5;
          margin-bottom: 10px;
        }

        .cta-team {
          font-size: 22px;
          color: #ec1e26;
          font-weight: bold;
          margin-bottom: 30px;
        }

        .cta-button {
          background-color: #ec1e26;
          color: white;
          padding: 12px 30px;
          font-size: 14px;
          border: none;
          border-radius: 30px;
          font-weight: bold;
          text-transform: uppercase;
          cursor: pointer;
        }

        .cta-button:hover {
          background-color: #c81b21;
        }

        @media (max-width: 768px) {
          .cta-text {
            font-size: 20px;
          }

          .cta-team {
            font-size: 18px;
          }

          .cta-button {
            padding: 10px 24px;
            font-size: 13px;
          }
        }

        @media (max-width: 480px) {
          .cta-text {
            font-size: 18px;
          }

          .cta-team {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
    </>
  );
};

export default ForParents;
