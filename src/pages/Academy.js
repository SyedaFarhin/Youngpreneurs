import React from 'react';
import rightImg from '../assets/curriculum-image.jpg';
import aca1 from '../assets/aca1.jpg';
import aca2 from '../assets/aca2.jpg';
import aca3 from '../assets/aca3.jpg';
import aca4 from '../assets/aca4.jpg';
import academy from '../assets/academy.png';



const Academy = () => {
  return (
    <>
      <style>{`

      


        .youngpreneur-wrapper {
  position: relative;
  width: 100%;
  background-image: url(${academy});
  background-size: cover;
  background-position: right center;  /* keep person visible */
  background-repeat: no-repeat;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100dvh;
  padding: 60px 20px;
}


@media (max-width: 480px) {
  .youngpreneur-wrapper {
    background-size: contain !important;
    background-position: top center;
    background-repeat: no-repeat;
    background-color: #000;
    min-height: auto;
    // height: 100vh;
    padding-top: 150px;
    padding-bottom: 20px;
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
          color: #dcae1a;
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
          background-color: #dcae1a;
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
          background-color: #dcae1a;
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
          max-width: 1000px;
          padding: 20px 30px;
        }

        .text-section h2 {
          font-size: 32px;
          color: #dcae1a;
          font-weight: bold;
          margin-bottom: 30px;
        }

        .text-section h4 {
          font-size: 18px;
          color: #305c4d;
          margin-bottom: 5px;
        }

        .text-section p {
          font-size: 18px;
          color: #666;
          margin-bottom: 20px;
        }

        .image-section {
          flex: 1;
          min-width: 300px;
          max-width: 600px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 60px;
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
          color: #dcae1a;
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
          color: #dcae1a;
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
          .cta-section {
          background-color: #f2f2f2;
          text-align: center;
          padding: 50px 80px;
          position: relative;
          overflow: hidden;
        }

        .cta-section h2 {
          font-size: 28px;
          color: #dcae1a;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .cta-section p {
          font-size: 16px;
          color: #555;
          max-width: 1000px;
          margin: 0 auto 16px auto;
          line-height: 1.6;
        }

        .cta-section p strong {
          color: #333;
        }

        .cta-highlight {
          color: #2d2d2d;
          font-weight: bold;
        }

        .register-btn {
          background-color: #dcae1a;
          color: #fff;
          padding: 12px 24px;
          border: none;
          font-weight: bold;
          border-radius: 25px;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .register-btn:hover {
          background-color: #dcae1a;
        }

        @media (max-width: 768px) {
          .cta-section h2 {
            font-size: 22px;
          }

          .cta-section p {
            font-size: 14px;
          }

          .cta-register-button {
            font-size: 13px;
            padding: 10px 24px;
          }
        }
      `}</style>



      <div className="youngpreneur-wrapper">
       
      </div>



      <div className="gain-wrapper">
        <div className="text-section">
          <h2>What Makes Us Different</h2>
          <h4>Global Learning. Indian Roots. Future-Ready Minds.</h4>
          <p>At YoungPreneurs Academy, we bring world-class entrepreneurial education, the kind taught at leading universities and incubators globally, directly to Indian classrooms — tailored for the next generation of innovators. Students don’t just learn concepts; they develop the mindset, methodology, and metrics that real-world founders use to turn ideas into impact.
</p>

          <h4>A Curriculum Built for the Future</h4>
          <p>Our programs are rooted in the IDEA DNA™ Mindset Engine (LP00581) and guided by the S.U.R.G.E.™ execution framework, ensuring every student learns how to think critically, break down complexity, and convert ideas into actionable solutions. From ideation to prototyping, from market testing to pitching, students engage with frameworks used by global changemakers — all adapted to create solutions that work in the real world.</p>

          <h4>Learning by Building, Measured by Growth</h4>
          <p>Every experience at YoungPreneurs is hands-on. Students design, test, and iterate their own ideas, receiving mentorship from global faculty and industry experts. Their progress is tracked through the Solution-Seeking Index (SSI™) — India’s first quantified metric for entrepreneurial mindset, problem-solving ability, and innovation growth. This ensures learning is not just theoretical, but measurable, meaningful, and transformative.
</p>

<h4>Mentorship That Matters</h4>
          <p>Students connect with global thought leaders, professors from top universities, and seasoned entrepreneurs who guide them through challenges, provide real-time feedback, and help them refine ideas into investable ventures. This exposure develops not only skills but the confidence and vision to lead change in any field — science, technology, arts, or business.
</p>
<h4>Turning Ideas into Impact</h4>
          <p>YoungPreneurs Academy is more than a learning program — it is a launchpad for India’s next generation of innovators. Students graduate with the ability to not just dream, but execute, measure, and scale their ideas, creating tangible impact in the world around them.
</p>    
        </div>

        <div className="image-section">
          <img src={aca3} alt="Students walking" />
          <img src={aca4} alt="Classroom activity" style={{marginTop:'-120px',marginLeft:"80px"}}/>
        </div>
      </div>


      <div className="curriculum-section">
       
      <div className="text-section">
          <h2>Our Signature Programs</h2>
          <h4>Future Titans — India’s Biggest School Entrepreneurship Challenge</h4>
          <p>A nationwide movement where young minds dream, design, and deliver innovation.
From virtual workshops to a live national pitch, students go through the full entrepreneurial journey — guided by mentors, entrepreneurs, and global educators.

</p>

          <h4>Build Like a Titan — 5-Step Innovation Journey</h4>
          <p>A powerful workshop series that transforms curiosity into capability: Discover problems → Design solutions → Prototype ideas → Model viability → Pitch like pros.
Every participant earns a Globally Recognized Certificate proving their mastery in innovation and problem-solving.
</p>

          <h4>Train-the-Trainer — Empowering Educators Nationwide</h4>
          <p>We don’t just inspire students; we equip teachers too.
Our Train-the-Trainer initiative empowers educators with entrepreneurial frameworks, teaching methodologies, and tools to turn classrooms into innovation labs.

</p>

          
        </div>
        <div className="curriculum-image">
          <img src={rightImg} alt="Young entrepreneur" />
        </div>
      </div>

      <div className="gain-wrapper">
      <div className="image-section">
          <img src={aca1} alt="Students walking" style={{}}/>
          {/* <img src={aca2} alt="Classroom activity" style={{marginTop:'-120px',marginLeft:"80px"}}/> */}
        </div>
        <div className="text-section">
          <h2>Our Vision</h2>
          
          <p>To make entrepreneurial thinking as fundamental as math and science —
so every student in India learns not just to find a job, but to create impact.
<br/>
Because the future won’t be built by those who wait —
it’ll be built by those who start.

</p>

          <h4>Future-Focused Curriculum</h4>
          <p>From Design Thinking to the Business Model Canvas, from ideation to pitching — every framework is adapted from what real founders, innovators, and changemakers use.</p>

          <h4>Learning by Building</h4>
          <p>Every YoungPreneurs experience is hands-on.
Students don’t just learn about ideas — they build them, test them, and pitch them to real mentors and investors.
</p>

          
        </div>

      
      </div>



      <div className="curriculum-section">
       
      <div className="text-section">
          <h2>Our Partnerships</h2>
          
          <p>In association with The Times of India, and powered by our Ecosystem Partners — Startup India, Association of Indian Principals, and AIC BIMTECH —
YoungPreneurs Academy is on a mission to empower 1 million student innovators to think boldly, build fearlessly, and shape India’s tomorrow, today.


</p>

         

          
        </div>
        <div className="curriculum-image">
          <img src={aca2} alt="Young entrepreneur" />
        </div>
      </div>

      <div className="cta-section">
       
        <h1 style={{fontSize:"23px",color:"#204e3d",fontWeight:"bold"}}>
        Join the Movement

        </h1>
        <p className="cta-highlight">
        Be part of the revolution transforming how India learns.
Whether you’re a student ready to build, a teacher ready to inspire, or a school ready to lead — your journey begins here.


        </p>
       
        
        <button
  className="register-btn"
  onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSdGtYyt5jrjCOXa4sagyEVFD6-d5RKGvIEnAuXs8yTYCGn3QQ/viewform", "_blank")}
>
Join YoungPreneurs Academy
</button>

      </div>
    </>
  );
};

export default Academy;
