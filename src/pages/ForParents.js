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
        <h3>A Message to Parents </h3>
        <p style={{fontSize:"15px"}}>
        Every great change in the world started with a young mind daring to imagine. At <strong>Future Titans by YoungPreneurs</strong>, we give your child the space, guidance, and mentorship to become that change-maker.
         This is where curiosity sparks action, ideas find their wings, and potential unfolds into impact.As the world accelerates with AI, automation, and constant innovation, the most valuable gift you can give your child isn’t answers — it’s<strong>the ability to question, create, and take bold steps</strong>. Here, they will experiment,
          explore, and discover the capabilities they never knew they had.
          This is more than a program. It’s a <strong>movement of young innovators, problem-solvers, and creators</strong>  — a journey that shapes character,
           ignites purpose, and lights the path to a future they can define.
           By joining <strong>Future Titans</strong>,your child isn’t just preparing for what comes next — they are <strong>becoming the person who creates it.</strong>
        </p>
        
       
        
       
        <button
  className="cta-button"
  onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdGtYyt5jrjCOXa4sagyEVFD6-d5RKGvIEnAuXs8yTYCGn3QQ/viewform?usp=header", "_blank")}
>
GET STARTED
</button>

      </div>

      {/* Right Content */}
      <div className="right-content">
        <h4>Why Support Your Child’s Journey with Future Titans?</h4>
        <div className="cards">
          <div className="card red-card">
         
               <p>Future Titans is not just any competition — it’s India’s first national entrepreneurship movement for school students, where ideas meet opportunity and innovation is celebrated at every step.</p>
          </div>
          <div className="card">
            <p>Here, your child will explore uncharted challenges, test their own solutions, and discover what they’re truly capable of.</p>
          </div>
          <div className="card">
          <p>It’s a journey that nurtures vision, courage, and leadership, preparing them not just to compete, but to create, impact, and lead in a rapidly changing world.</p>
          </div>
          
        </div>

        {/* <p>
        Future Titans is not just any competition — it’s India’s first national entrepreneurship movement for school students, where ideas meet opportunity and innovation is celebrated at every step. Here, your child will explore uncharted challenges, test their own solutions, and discover what they’re truly capable of. It’s a journey that nurtures vision, courage, and leadership, preparing them not just to compete, but to create, impact, and lead in a rapidly changing world.
        </p> */}
      </div>

      <section className="cta-section">
      <p className="cta-text">
      Don’t let your child miss this opportunity to shine, learn, and grow into the leader of tomorrow.
      </p>
      <p className="cta-team"><strong>Youngpreneurs Competition Team</strong></p>
   
      <button
  className="cta-button"
  onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdGtYyt5jrjCOXa4sagyEVFD6-d5RKGvIEnAuXs8yTYCGn3QQ/viewform?usp=header", "_blank")}
>
REGISTER NOW
</button>

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
          background-color: #103120;
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
          color: #dcae1a;
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
          background-color: #dcae1a;
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
  background-color: white;
  
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
          color: #dcae1a;
          font-weight: bold;
          margin-bottom: 30px;
        }

        .cta-button {
          background-color: #dcae1a;
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
          background-color: #dcae1a;
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
