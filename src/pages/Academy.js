import React from 'react';
import classImage from '../assets/classroom.jpg'; // Replace with actual path

const WelcomeSection = () => {
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
            <div className="image-container">
              <img src={classImage} alt="Classroom" />
              <div className="overlay-box">
                <h4>Awards & Recognition</h4>
                <ul>
                  <li>Top 3 Winners – ₹10 Lakhs each in seed funding + Incubation</li>
                  <li>Top Female Entrepreneur – ₹10 Lakhs in seed funding</li>
                  <li>Top 50 Finalists – Incubation + Trophy</li>
                  <li>All Participants – Certificate of Completion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

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
          position: relative;
          border-radius: 20px;
          overflow: hidden;
        }

        .image-container img {
          width: 100%;
          height: auto;
          border-radius: 20px;
          display: block;
        }

        .overlay-box {
          position: absolute;
          bottom: 20px;
          left: 20px;
          right: 20px;
          background-color: rgba(255, 255, 255, 0.9);
          padding: 20px;
          border-radius: 12px;
          font-size: 14px;
          color: #000;
        }

        .overlay-box h4 {
          margin-bottom: 10px;
          font-weight: bold;
        }

        .overlay-box ul {
          margin: 0;
          padding-left: 20px;
        }

        .overlay-box li {
          margin-bottom: 6px;
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
      `}</style>
    </>
  );
};

export default WelcomeSection;
