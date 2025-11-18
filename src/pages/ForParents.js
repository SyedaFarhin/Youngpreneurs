import React from 'react';
import forParentsHeader from "../assets/forParentsHeader.png"
const ForParents = () => {
  return (

<>
<div className="hero-section">
        {/* You can place overlay text, buttons, or other elements here */}
      </div>
    
    <section className="game-changer">
      {/* Left Content */}
      <div className="left-content">
        <h4>A Message to Parents </h4>
        <p>
        Every great change in the world started with a young mind daring to imagine. At Future Titans by YoungPreneurs, we provide your child not just guidance, but the space, mentorship, and tools to become a true change-maker. This is where curiosity sparks action, ideas find their wings, and potential unfolds into impact.<br/><br/>
        As the world accelerates with AI, automation, and constant innovation, the most valuable gift you can give your child isn’t answers — it’s the ability to question, create, and take bold steps. Here, they experiment, explore, and discover capabilities they never knew they had — building not only skills but a solution-seeking mindset that will serve them for life.<br/><br/>
        Future Titans is more than a challenge. It’s a movement of young innovators, problem-solvers, and creators — a journey that shapes character, ignites purpose, and equips them to lead in a world defined by constant change.<br/>
        By joining Future Titans, your child isn’t just preparing for what comes next — they are becoming the person who defines it.
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
  background-size: cover;            /* ensures full coverage without stretching */
  background-position: center top;   /* better positioning for tall mobile screens */
  background-repeat: no-repeat;
  width: 100%;
  min-height: 60vh;
  max-height: 100vh;                  /* gives a tall hero on desktop */
                    /* gives a tall hero on desktop */
  // height: auto;
  position: relative;
}

/* Tablet */
@media (max-width: 768px) {
  .hero-section {
    min-height: 50vh;                /* slightly smaller */
    background-position: top center; /* focus top part of image */
  }
}

/* Mobile */
@media (max-width: 480px) {
  .hero-section {
    min-height: 40vh;                /* prevent extreme zoom-in */
    background-size: contain;        /* show full image */
    background-position: center;     /* center align */
    background-repeat: no-repeat;
    background-color: #000;          /* optional fallback behind image */
  }
}








        // .game-changer {
        //   display: flex;
        //   flex-wrap: wrap;
        //   padding: 50px 30px;
        //   background-color:rgba(189, 195, 192, 0.26);
        //   color: white;
        //   justify-content: center;
        // }

        // .left-content {
        //   flex: 1 1 40%;
        //   padding: 20px;
        //   max-width: 800px;
        //   margin-top: 110px;
        // }

        // .left-content h4 {
          
        //   text-transform: uppercase;
        //   color: #134734;
        
        //   margin-bottom: 15px;
        // }

        // .left-content p {
          
        //   color:rgb(141, 141, 141);

        //   font-size: 20px;
        //   // line-height: 1.6;
        //   margin-bottom: 20px;
        // }

        // .left-content strong {
        //   font-weight: bold;
        // }

        // .cta-btn {
        //   background: white;
        //   color: #dcae1a;
        //   border: none;
        //   padding: 12px 25px;
        //   font-weight: bold;
        //   border-radius: 30px;
        //   cursor: pointer;
        //   font-size: 14px;
        //   text-transform: uppercase;
        // }

        // .cta-btn:hover {
        //   background-color: #f5f5f5;
        // }

        // .right-content {
        //   flex: 1 1 55%;
        //   padding: 20px;
        //   max-width: 600px;
        //   margin-top: 100px;
        // }

        // .right-content h4 {
        //   font-size: 20px;
        //   color: #134734;
        //   text-transform: uppercase;
        //   font-weight: bold;
        //   margin-bottom: 30px;
        // }


        .game-changer {
  display: flex;
  flex-wrap: wrap;
  padding: 50px 30px;
  background-color: rgba(189, 195, 192, 0.26);
  justify-content: center;
  align-items: flex-start;
}

/* LEFT CONTENT */
.left-content {
  flex: 1 1 450px;
  padding: 20px;
  max-width: 700px;
}

.left-content h4 {
  text-transform: uppercase;
  color: #134734;
  margin-bottom: 15px;
}

.left-content p {
  color: rgb(141, 141, 141);
  font-size: 20px;
  margin-bottom: 20px;
}

/* Button */
.cta-button {
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

.cta-button:hover {
  background-color: #f5f5f5;
}

/* RIGHT CONTENT */
.right-content {
  flex: 1 1 450px;
  padding: 20px;
  max-width: 700px;
}

.right-content h4 {
  font-size: 20px;
  color: #134734;
  text-transform: uppercase;
  font-weight: bold;
  margin-bottom: 30px;
}

        .cards {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 10px;
}

.red-card {
  /* Keep your existing style if any */
}

       .cta-section {
  width: 100vw;
  margin: 0;
  padding: 100px 20px;
  background-color: #dcae1a;
  margin-top:30px;
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
          color:  #2c4a3f;
          font-weight: bold;
          margin-bottom: 30px;
        }

        .cta-button {
          background-color: #2c4a3f;
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
