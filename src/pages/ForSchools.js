import React from 'react';
import backgroundImage from '../assets/forschools.jpg';
import forSchoolsHeaderBg from "../assets/forSchoolsHeaderBg.jpg"

const ForSchools = () => {
  return (
    <>
    <div className="hero-section">
        {/* You can place overlay text, buttons, or other elements here */}
      </div>

      <div className="school-benefits-section">
  <h2 className="school-benefits-heading">Why Should Your School Join Future Titans?</h2>
  </div>
      <div className="cards-container">
        <div className="card">
          <h3>Be a Flagbearer of Innovation</h3>
          <p>
          Position your school at the forefront of a national transformation in education. In partnership with <strong>The Times of India</strong>, YoungPreneurs recognizes visionary institutions as <strong>Torchbearers of Innovation </strong>— schools that go beyond academics to shape creators, leaders, and problem-solvers for the 21st century.
          </p>
        </div>
        <div className="card">
          <h3>Empower Your Educators</h3>
          <p>
          Through our <strong>Train-the-Trainer Program</strong>, your educators gain hands-on exposure to global entrepreneurial frameworks such as <strong>Design Thinking, Business Model Canvas,</strong> and <strong>IDEADNA</strong>.These sessions go beyond theory, equipping teachers to mentor student innovators, integrate real-world learning into everyday lessons, and build a thriving innovation culture within your school.
          </p>
        </div>
        <div className="card">
          <h3>Certification & Recognition</h3>
          <p>
          Partner schools receive an official certification from The Times of India and YoungPreneurs Academy,
           recognizing their commitment to fostering innovation, leadership, and entrepreneurship within their ecosystem.
           
          </p>
        </div>
        <div className="card">
          <h3>Seamless Implementation. Continuous Support</h3>
          <p>
          Built on a plug-and-play model, Future Titans integrates effortlessly into your existing system — with complete resources, simple evaluation through the Solution Seeking Index (SSI), and dedicated support for both faculty and students at every step,
           innovation becomes easy to execute and impossible to ignore.
          </p>
        </div>
        <div className="card">
          <h3>National Recognition & Lasting Impact</h3>
          <p>
          Your school earns visibility and distinction on a national level — celebrated for fostering innovation, leadership, and the entrepreneurial spirit that drives India’s next generation forward.
          </p>
        </div>
        
      </div>
      <div className="encouragement-section"  style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="overlay">
          <div className="content">
            <h2>Why Encourage Your Students?</h2>
            <p>
            The next CEO, innovator, or changemaker might be sitting in your classroom right now.
Future Titans gives them the chance — and your school, the legacy.
With national exposure, investor-backed mentorship, and real startup funding on the line, this is more than participation — it’s a chance to put your school’s name in India’s innovation story.

            </p>
           
            <p><strong>Is your school ready to make history?</strong></p>
            
            <button
 
  onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdGtYyt5jrjCOXa4sagyEVFD6-d5RKGvIEnAuXs8yTYCGn3QQ/viewform", "_blank")}
>
JOIN THE MOVEMENT
</button>

          </div>
        </div>
      </div>

      <style>{`
      .hero-section {
        background-image: url(${forSchoolsHeaderBg});
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

        .cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          padding: 60px ;
          max-width: 1200px;
          margin: 0 auto;
          
        }

        .card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          padding: 30px 20px;
          text-align: center;
        }

        .card h3 {
          font-size: 20px;
          color: #2c4a3f;
          margin-bottom: 15px;
        }

        .card p {
          font-size: 15px;
          color: #333;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .cards-container {
            padding: 40px 20px;
            gap: 20px;
          }

          .card h3 {
            font-size: 18px;
          }

          .card p {
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .card h3 {
            font-size: 16px;
          }

          .card p {
            font-size: 13.5px;
          }
        }

        .encouragement-section {
          position: relative;
         
          background-size: cover;
          background-position: center;
          color: #fff;
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

      .overlay {
  position: absolute; /* Add this */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* Covers full height of the parent */
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  z-index: 1;
}


       

        .content h2 {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 20px;
          color: white;
        }

        .content p {
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 15px;
           max-width: 800px;
        }

        .content strong {
          font-weight: bold;
        }

        button {
          background-color: #dcae1a;
          color: white;
          border: none;
          padding: 14px 24px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #dcae1a;
        }

        @media (max-width: 768px) {
          .content h2 {
            font-size: 26px;
          }

          .content p {
            font-size: 15px;
          }

          button {
            padding: 12px 20px;
            font-size: 13px;
          }
        }

        @media (max-width: 480px) {
          .content h2 {
            font-size: 22px;
          }

          .content p {
            font-size: 14px;
          }
        }
          .school-benefits-section {
      text-align: center;
      padding: 60px 20px;
      background-color: #fff;
    }

    .school-benefits-heading {
      font-size: 38px;
      font-weight: bold;
      color: #dcae1a; /* Bright red like in the image */
      margin: 0;
    }

    @media (max-width: 768px) {
      .school-benefits-heading {
        font-size: 22px;
      }
    }
      `}</style>
    </>
  );
};

export default ForSchools;
