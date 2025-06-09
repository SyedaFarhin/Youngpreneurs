import React from 'react';
import backgroundImage from '../assets/forschools.jpg';
import forSchoolsHeaderBg from "../assets/forSchoolsHeaderBg.jpeg"

const ForSchools = () => {
  return (
    <>
    <div className="hero-section">
        {/* You can place overlay text, buttons, or other elements here */}
      </div>
      <div className="cards-container">
        <div className="card">
          <h3>Workshops and Bootcamps That Matter</h3>
          <p>
            Students don’t just compete—they <strong>learn, build, and pitch like real entrepreneurs</strong>. 
            Our exclusive training ensures they master problem-solving, leadership, and business strategy.
          </p>
        </div>
        <div className="card">
          <h3>Train-the-Trainer Program</h3>
          <p>
            <strong>Empower your educators to shape young innovators!</strong> 
            We provide <strong>specialized training sessions</strong> for teachers, equipping them with 
            <strong> entrepreneurial frameworks, real-world business strategies</strong>, and 
            <strong> hands-on teaching methodologies</strong>. This ensures they can 
            <strong> mentor students effectively</strong>, foster problem-solving skills, and create a dynamic learning 
            environment that <strong>turns classrooms into innovation hubs!</strong>
          </p>
        </div>
        <div className="card">
          <h3>Be the Torchbearer of Innovation!</h3>
          <p>
            [Title Sponsor], in partnership with The Times of India and Youngpreneurs, proudly presents 
            the “Torchbearer of Innovation” award—an accolade that recognizes schools championing entrepreneurial 
            spirit among students. 
            <br /><br />
            By encouraging participation in the Future Titans competition, your institution will be celebrated as a 
            true torchbearer of innovation, receiving a prestigious trophy and certificate in honor of your commitment 
            to fostering young visionaries.
          </p>
        </div>
        <div className="card">
          <h3>Official Recognition and Certification</h3>
          <p>
            Get an <strong>exclusive certification</strong> from 
            <strong> The Times of India and Youngpreneurs Academy</strong>, proving your school nurtures innovation and 
            leadership. Stand out as a <strong>pioneer in shaping future-ready education!</strong>
          </p>
        </div>
        <div className="card">
          <h3>National Media Spotlight</h3>
          <p>
            Partner schools get featured in <strong>The Times of India and top media platforms</strong>. 
            <strong> Boost your school’s reputation</strong>, attract top students, and become the 
            <strong> go-to institution for future leaders.</strong>
          </p>
        </div>
        <div className="card">
          <h3>Real-World Impact</h3>
          <p>
            Schools producing top talent will be <strong>honoured for their contribution to nurturing young changemakers.</strong> 
            <strong> Your students succeed, your school shines.</strong>
          </p>
        </div>
      </div>
      <div className="encouragement-section"  style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="overlay">
          <div className="content">
            <h2>Why Encourage Your Students?</h2>
            <p>
              With ₹40 Lakhs in funding, incubation, and mentorship from India’s top entrepreneurs, 
              Future Titans is where big dreams turn into real-world success stories.
            </p>
            <p>
              This is bigger than a competition—it’s a revolution. And the schools that back their 
              students today will be the institutions that shape tomorrow.
            </p>
            <p><strong>Is your school ready to make history?</strong></p>
            <button>JOIN THE MOVEMENT</button>
          </div>
        </div>
      </div>

      <style>{`
      .hero-section {
        background-image: url(${forSchoolsHeaderBg});
background-size: cover;
background-position: center -300px; /* push image down */
height: 520px;
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

        .cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          padding: 60px 40px;
          max-width: 1200px;
          margin: 0 auto;
          margin-top: 100px;
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
          background-color: #e50914;
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
          background-color: #c20710;
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
      `}</style>
    </>
  );
};

export default ForSchools;
