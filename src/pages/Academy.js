import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import rightImg from '../assets/curriculum-image.jpg';
import aca1 from '../assets/aca1.jpg';
import aca2 from '../assets/aca2.jpg';
import aca3 from '../assets/aca3.jpg';
import aca4 from '../assets/aca4.jpg';
import academy from '../assets/academy.jpg';



const Academy = () => {
  return (
    <>
      <style>{`

      


        .youngpreneur-wrapper {
           position: relative;
          width: 100%;
          background-image: url(${academy});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 60px 20px;
          flex-wrap: wrap;
        }

        .youngpreneur-overlay {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          background-color: rgba(0, 0, 0, 0.4);
         
        }

        .youngpreneur-content {
          position: relative;
          z-index: 2;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          text-align: left;
        }

        .youngpreneur-title {
          font-size: 36px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .youngpreneur-description {
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .youngpreneur-description strong {
          font-weight: 700;
        }

        .register-button {
          background-color: #e60023;
          color: white;
          padding: 14px 30px;
          border: none;
          border-radius: 30px;
          font-weight: bold;
          font-size: 14px;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: background-color 0.3s ease;
        }

        .register-button:hover {
          background-color: #c2001e;
        }

        @media (max-width: 768px) {
          .youngpreneur-title {
            font-size: 26px;
          }

          .youngpreneur-description {
            font-size: 14px;
          }

          .register-button {
            font-size: 13px;
            padding: 12px 24px;
          }
        }
       .entrepreneurship-container {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 50px 20px;
          flex-wrap: wrap;
          background-color: white;
        }

        .image-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
          flex: 1;
          min-width: 300px;
          max-width: 400px;
          align-items: center;
        }

        .image-column img {
          width: 80%;
          height: auto;
          border-radius: 5px;
          object-fit: cover;
          
        }

        .text-column {
          flex: 1;
          min-width: 300px;
          max-width: 600px;
          padding: 0 30px;
        }

        .text-column h2 {
          color: #e30613;
          font-size: 32px;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 20px;
        }

        .text-column p {
          font-size: 16px;
          line-height: 1.7;
          color: #344e41;
          margin-bottom: 15px;
        }

        .text-column strong {
          font-weight: 700;
        }

        .register-button {
          background-color: #e30613;
          color: white;
          font-weight: bold;
          padding: 12px 25px;
          border-radius: 30px;
          border: 2px solid white;
          cursor: pointer;
          text-decoration: none;
          font-size: 14px;
          margin-top: 20px;
          display: inline-block;
          transition: background-color 0.3s ease;
        }

        .register-button:hover {
          background-color: #c00510;
        }

        @media (max-width: 768px) {
          .entrepreneurship-container {
            flex-direction: column;
            align-items: center;
          }

          .text-column {
            padding: 20px 0;
            text-align: center;
          }

          .text-column h2 {
            font-size: 24px;
          }
        }    
          .gain-wrapper {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: flex-start;
          padding: 60px 20px;
          background-color: white;
        }

        .text-section {
          flex: 1;
          min-width: 300px;
          max-width: 600px;
          padding: 20px 30px;
        }

        .text-section h2 {
          font-size: 32px;
          color: #e30613;
          font-weight: bold;
          margin-bottom: 30px;
        }

        .text-section h4 {
          font-size: 18px;
          color: #305c4d;
          margin-bottom: 5px;
        }

        .text-section p {
          font-size: 15px;
          color: #666;
          margin-bottom: 20px;
        }

        .image-section {
          flex: 1;
          min-width: 300px;
          max-width: 500px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          padding: 20px;
        }

        .image-section img {
          width: 100%;
          height: auto;
          border-radius: 5px;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .gain-wrapper {
            flex-direction: column;
            align-items: center;
          }

          .text-section {
            padding: 20px 15px;
            text-align: center;
          }

          .text-section h2 {
            font-size: 26px;
          }

          .image-section {
            padding: 20px 0;
          }
        }
          .curriculum-section {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          padding: 60px 20px;
          background-color: white;
        }

        .curriculum-text {
          flex: 1;
          min-width: 300px;
          max-width: 600px;
          padding: 20px 30px;
        }

        .curriculum-text h2 {
          font-size: 36px;
          color: #e30613;
          font-weight: bold;
          margin-bottom: 20px;
          line-height: 1.3;
        }

        .curriculum-text p {
          font-size: 16px;
          color: #555;
          margin-bottom: 30px;
        }

        .curriculum-text p strong {
          font-weight: 600;
          color: #333;
        }

        .curriculum-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .curriculum-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .curriculum-item .icon {
          color: #e30613;
          font-size: 20px;
          margin-top: 4px;
        }

        .curriculum-item-content h4 {
          font-size: 18px;
          color: #305c4d;
          margin: 0 0 4px 0;
        }

        .curriculum-item-content p {
          font-size: 15px;
          color: #666;
          margin: 0;
        }

        .curriculum-image {
          flex: 1;
          min-width: 300px;
          max-width: 500px;
          padding: 20px;
          display: flex;
          justify-content: center;
        }

        .curriculum-image img {
          width: 100%;
          height: auto;
          object-fit: cover;
          border-radius: 5px;
        }

        @media (max-width: 768px) {
          .curriculum-section {
            flex-direction: column;
            align-items: center;
          }

          .curriculum-text {
            text-align: center;
            padding: 20px 15px;
          }

          .curriculum-text h2 {
            font-size: 28px;
          }

          .curriculum-item {
            justify-content: center;
            text-align: left;
          }
        }
      `}</style>



      <div className="youngpreneur-wrapper">
        <div className="youngpreneur-overlay" />
        <div className="youngpreneur-content">
          <h2 className="youngpreneur-title">
            YOUNGPRENEUR – The Entrepreneurship Academy for Promising Youth
          </h2>
          <p className="youngpreneur-description">
            We believe in the research-backed truth: <strong>“Entrepreneurs aren’t born; they are made.”</strong><br />
            Through <strong>experiential learning, mentorship, and real-world challenges</strong>, we train young minds to think like entrepreneurs, solve problems creatively, and turn ideas into thriving ventures.
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdGtYyt5jrjCOXa4sagyEVFD6-d5RKGvIEnAuXs8yTYCGn3QQ/viewform?pli=1" className="register-button">REGISTER NOW</a>
        </div>
      </div>

      <div className="entrepreneurship-container">
        <div className="image-column">
          <img src={aca1} alt="Group of students studying" />
          <img src={aca2} alt="Students at computers" style={{marginTop: '10px',marginRight: '500px'}}/>
        </div>
        <div className="text-column">
          <h2>Why Entrepreneurship Matters Today</h2>
          <p>
            In today’s fast-changing innovation economy, success demands more than just academic excellence. Young minds need a <strong>visionary mindset</strong>—one that sees problems as opportunities and is driven by initiative and creativity. An entrepreneurial outlook empowers youth to unlock their potential and take charge of their future.
          </p>
          <p>
            At Youngpreneur, students experience the <strong>power of entrepreneurship</strong> firsthand by <strong>bringing their own ideas to life</strong>. Our immersive programs extend beyond textbooks, offering hands-on learning through engaging activities, business simulations, and interactive workshops.
          </p>
         
          <button
  className="register-button"
  onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdGtYyt5jrjCOXa4sagyEVFD6-d5RKGvIEnAuXs8yTYCGn3QQ/viewform?pli=1", "_blank")}
>
REGISTER NOW
</button>

        </div>
      </div>


      <div className="gain-wrapper">
        <div className="text-section">
          <h2>What Youngpreneurs Gain</h2>
          <h4>Entrepreneurial Thinking</h4>
          <p>A “Can-Do” attitude that turns obstacles into opportunities.</p>

          <h4>Business & Leadership Skills</h4>
          <p>Understanding business models, pitching, and strategy.</p>

          <h4>Creative Problem–Solving</h4>
          <p>Innovation-driven techniques to design real-world solutions.</p>

          <h4>Confidence & Communication</h4>
          <p>Mastering the art of storytelling, persuasion, and leadership.</p>
        </div>

        <div className="image-section">
          <img src={aca3} alt="Students walking" />
          <img src={aca4} alt="Classroom activity" style={{marginTop:'-120px',marginLeft:"80px"}}/>
        </div>
      </div>


      <div className="curriculum-section">
        <div className="curriculum-text">
          <h2>The Youngpreneur<br />Entrepreneurship Curriculum</h2>
          <p>
            Our carefully designed curriculum lays the <strong>foundation for a lifelong entrepreneurial journey</strong>. Students explore:
          </p>
          <div className="curriculum-list">
            {[
              {
                title: "What is Entrepreneurship?",
                desc: "Understanding the startup world and its opportunities.",
              },
              {
                title: "The Entrepreneurial Mindset",
                desc: "Developing resilience, adaptability, and risk-taking skills.",
              },
              {
                title: "Lateral Thinking & Creative Problem–Solving",
                desc: "Finding innovative solutions to challenges.",
              },
              {
                title: "Idea Generation to Prototyping",
                desc: "Turning ideas into tangible business concepts.",
              }
            ].map((item, index) => (
              <div className="curriculum-item" key={index}>
                <FontAwesomeIcon icon={faCheckCircle} className="icon" />
                <div className="curriculum-item-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="curriculum-image">
          <img src={rightImg} alt="Young entrepreneur" />
        </div>
      </div>
    </>
  );
};

export default Academy;
