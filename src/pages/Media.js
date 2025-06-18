import React from "react";
import businessStandard from "../assets/businesStandard.png"
import bussinessworld from "../assets/bussinessworld.png"
import et from "../assets/et.png"
import telegraph from "../assets/telegraph.png"
import cnbc from "../assets/cnbc.png"
import ibns from "../assets/ibns.png"
import enterpreneurIndia from "../assets/enterpreneurIndia.png"



import mediaHeaderBg from "../assets/mediaHeaderBg.jpg"


const mediaItems = [
  {
    logo: businessStandard,
    desc: "Three US-based entrepreneurs’ mission to make leaders out of Indian teens...",
    button: "Read More"
  },
  {
    logo: bussinessworld,
    desc: "Our Mission Is To Connect Education And Entrepreneur Ecosystem In India...",
    button: "Read More"
  },
  {
    logo: et,
    desc: "Meet eight budding teenpreneurs who are giving wings to their startup ideas...",
    button: "Read More"
  },
  
  {
    logo: ibns,
    desc: "Kolkata: Students get hands-on training at the Youngpreneurs India Camp...",
    button: "Read More"
  },
  {
    logo: enterpreneurIndia,
    desc: "It's Time The Indian Students' Entrepreneurship Streak Is Tapped in School...",
    button: "Read More"
  },
  {
    logo: telegraph,
    desc: "",
    button: "Read More"
  },
  {
    logo: cnbc,
    desc: "",
    button: "Watch Now"
  },
];

const Media = () => {
  return (
    <>
    
<div className="hero-section">
        {/* You can place overlay text, buttons, or other elements here */}
      </div>

 <div className="media-heading-container">
        <h1 className="media-heading">
          Recognized by leading media platforms for sparking India’s youth innovation wave
        </h1>
      </div>

      <div className="media-section">
        {mediaItems.map((item, index) => (
          <div className="media-card" key={index}>
            <img src={item.logo} alt="media logo" className="media-logo" />
            {item.desc && (
              <p className="media-desc">
                <a href="#">{item.desc}</a>
              </p>
            )}
            <a href="#" className="media-button">
              {item.button}
            </a>
          </div>
        ))}
      </div>

      <style>{`

      .hero-section {
  background-image: url(${mediaHeaderBg});
  background-size: cover;
  background-position: center top; /* Align from top */
  height: 620px;
  width: 100%;
  position: relative;
  padding-top: 80px; /* Push content/image downward */
  box-sizing: border-box;
  background-repeat: no-repeat;
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


      .media-heading-container {
      margin-top:120px;
          text-align: center;
          padding: 30px 20px;
        }

        .media-heading {
          font-size: 24px;
          font-weight: bold;
          color: #e50914;
          max-width: 1000px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .media-heading {
            font-size: 18px;
          }
        }
        .media-section {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
          padding: 40px 20px;
          margin-top:20px
        }

        .media-card {
          background: white;
          border-radius: 12px;
          padding: 20px;
          width: 260px;
          text-align: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          transition: transform 0.2s;
        }

        .media-card:hover {
          transform: translateY(-5px);
        }

        .media-logo {
          max-width: 100%;
          height: auto;
          margin-bottom: 15px;
        }

        .media-desc {
          font-size: 14px;
          color: #333;
          margin-bottom: 15px;
        }

        .media-desc a {
          text-decoration: underline;
          color: #2e7d32;
        }

        .media-button {
          background-color: #e50914;
          color: white;
          padding: 10px 20px;
          border-radius: 5px;
          text-decoration: none;
          font-weight: bold;
          display: inline-block;
        }

        .media-button:hover {
          background-color: #c20710;
        }

        @media (max-width: 768px) {
          .media-card {
            width: 100%;
            max-width: 90%;
          }
        }
      `}</style>
    </>
  );
};

export default Media;
