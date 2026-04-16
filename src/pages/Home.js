// import React, { useEffect } from 'react';
// import { Swiper, SwiperSlide } from "swiper/react";

// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import 'aos/dist/aos.css';
// import AOS from 'aos';
// import rightImg from '../assets/home1.png';
// import mentor1 from '../assets/fred.jpg';
// import mentor2 from '../assets/sandipan.jpeg';
// import mentor3 from '../assets/devika.jpg';
// import mentor4 from '../assets/partha.jpg';


// import times from '../assets/ttoi.png';
// import home2 from '../assets/home2.png';
// import home4 from '../assets/home4.jpg';
// import insta from '../assets/insta.jpg';
// import linkedin from '../assets/linkedin.jpg';
// import email from '../assets/email.jpg';
// import youtube from '../assets/youtube.jpg';
// const Home = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       offset: 100
//     });
//   }, []);
  
//   return (
//     <>

// <Swiper
//       modules={[Navigation, Pagination, Autoplay]}
//       navigation
//       pagination={{ clickable: true }}
//       autoplay={{ delay: 6000 }}
//       loop={true}
//       slidesPerView={1}
//       style={{ width: "100%", height: "auto", }}
//     >
//       <SwiperSlide>
//         <img src="/1.png" alt="1" style={{ width: "100%" }} />
//       </SwiperSlide>

//       <SwiperSlide>
//         <img src="/2.png" alt="2" style={{ width: "100%" }} />
//       </SwiperSlide>

//       <SwiperSlide>
//         <img src="/3.png" alt="3" style={{ width: "100%" }} />
//       </SwiperSlide> 
      
//       <SwiperSlide>
//         <img src="/4.png" alt="3" style={{ width: "100%" }} />
//       </SwiperSlide> 

//       <SwiperSlide>
//         <img src="/5.png" alt="3" style={{ width: "100%" }} />
//       </SwiperSlide> 
      
//       <SwiperSlide>
//         <img src="/SIX.png" alt="3" style={{ width: "100%" }} />
//       </SwiperSlide> 
      


//       </Swiper>

     
    








     


     









// <div className="titans-section" data-aos="fade-up">
//         <div className="titans-left">
//           <h4>The YoungPreneurs™ Ecosystem </h4>
//           <h2>Where Innovation, Neuroscience, and Purpose Converge</h2>
//           <p>
//           The YoungPreneurs™ ecosystem is more than a program — it’s a living, adaptive innovation network built to nurture solution-seeking capability in every student.
//           </p>
//           <p>
//           Powered by insights from neuroscience, artificial intelligence, and design thinking, it redefines how young minds learn, think, and lead — turning classrooms into launchpads for innovation.
// At its core lies the patent-pending Mindset Engine™, a neuro-adaptive system that decodes how students think, adapt, and create — helping them build measurable growth in curiosity, creativity, and resilience through the SSI™ Mindset Score (Solution-Seeking Index™).

//           </p>
         
//           <button
//   className="register-button"
//   onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSf5kqAas0Q84ygmKTdkKxi-9RFJ8MgeAcDqyF3SDKsvpEhFSQ/viewform", "_blank")}
// >
// REGISTER NOW
// </button>

//         </div>
//         <div className="titans-right">
//           <img src={rightImg} alt="Students discussing startup ideas" />
//         </div>
//       </div>


//       <section className="game-changer-section" data-aos="fade-up" data-aos-delay="100">
//         <h2>Surrounding this core are four innovation engines that power the <span style={{color:" #dcae1a",fontSize:"30px"}}>YoungPreneurs™</span> experience:</h2>
//         <div className="card-container">
//           <div className="info-card">
//             <h3>IDEA DNA™ — The Science of Innovation</h3>
//             <p>A cognitive framework that teaches students to deconstruct complex challenges and rebuild them into scalable, real-world solutions.
// From idea spark to impact, it transforms imagination into disciplined innovation.
// </p>
//           </div>
//           <div className="info-card">
//             <h3>S.U.R.G.E.™ — The Mindset Accelerator</h3>
//             <p>A neuroscience-informed growth model that strengthens five essential traits — Self-belief, Uncertainty, Resilience, Growth, and Empathy.
// It helps students stay curious, confident, and courageous in an unpredictable world.
// </p>
//           </div>
//           <div className="info-card">
//             <h3>AI Co-Founder™ — The Future of Learning</h3>
//             <p>An intelligent innovation partner that helps students ideate, research, and prototype — not by supplying answers, but by sparking better questions.
// It fuses human creativity with AI precision to make learning more immersive and future-ready.
// </p>
//           </div>
//           <div className="info-card">
//             <h3>Future Titans™ — The Real-World Playground</h3>
//             <p>The culmination of the YoungPreneurs™ journey — where students put their ideas to the test, pitch to experts, and experience the thrill of real innovation.
// It’s more than a competition; it’s a nationwide movement redefining what young minds can achieve.


//             </p>
//           </div>
          
//         </div>
//         <p style={{fontSize:"25px",textAlign:"center",marginTop:"30px",color:" #2c4a3f",fontWeight:"initial"}}>Together, these pillars form the YoungPreneurs™ Ecosystem —<br/> an interconnected, measurable, and future-ready learning architecture that turns potential into purpose.
// <br/>Where students don’t just prepare for the future —
// they begin to create it.</p>
//       </section>


//       <section className="game-changer-section" data-aos="fade-up" data-aos-delay="200">
//         <h2 >What Makes <span style={{color:" #dcae1a",fontSize:"35px"}}>Future Titans</span>  a True Game Changer?</h2>
//         {/* <div className="card-container">
//           <div className="info_card">
//             <h3>A Revolution in Learning</h3>
//             <p>Future Titans™ is powered by the world’s first neuro-adaptive, patent-pending entrepreneurial ecosystem — a system built to turn learning into creation.
// Using IDEA DNA™ and the S.U.R.G.E.™ framework, students don’t just think of ideas — they build, test, and refine them like real innovators.

// </p>
//           </div>
//           <div className="info_card">
//             <h3>A Plug-n-Play Model for Schools</h3>
//             <p>The YoungPreneurs™ model fits effortlessly into any classroom — empowering schools to deliver world-class entrepreneurship education without additional infrastructure. A plug-n-play ecosystem that makes 21st-century innovation accessible to every student.
// </p>
//           </div>
//           <div className="info_card">
//             <h3>Measured Growth. Real Outcomes</h3>
//             <p>Through the Solution Seeking  Index (SSI), every participant’s journey is tracked and benchmarked — providing measurable insights into creativity, leadership, and entrepreneurial growth.
// </p>
//           </div>
//           <div className="info_card">
//             <h3>Powered by Intelligent Tools</h3>
//             <p>At the heart of Future Titans™ is the AI Co-Founder™ — a breakthrough intelligence partner that helps every student think sharper, build faster, and innovate with real-world precision.

//             </p>
//           </div>
          
//           <div className="info_card">
//             <h3>National Recognition & Opportunity</h3>
//             <p>In partnership with The Times of India, Future Titans™ offers students a national platform to showcase their ventures, gain visibility, and learn from global dignitaries and industry luminaries.
// Winners receive ₹10 lakhs in funding to kickstart their entrepreneurial journey.


//             </p>
//           </div>

//           <div className="info_card">
//             <h3>Building the Leaders of Tomorrow</h3>
//             <p>More than a competition, it’s a movement — designed to strengthen confidence, collaboration, and purpose-driven leadership in a rapidly accelerating AI world.
// Because the future won’t be led by those who simply adapt to change, but by those who create it.



//             </p>
//           </div>
//         </div> */}
//         <div className="card-container">
//   <div className="info_card">
//     <h3>A Revolution in Learning</h3>
//     <p>
//       Future Titans™ is powered by the world’s first neuro-adaptive,
//       patent-pending entrepreneurial ecosystem — a system built to turn
//       learning into creation. Using IDEA DNA™ and the S.U.R.G.E.™ framework,
//       students don’t just think of ideas — they build, test, and refine them
//       like real innovators.
//     </p>
//   </div>

//   <div className="info_card">
//     <h3>A Plug-n-Play Model for Schools</h3>
//     <p>
//       The YoungPreneurs™ model fits effortlessly into any classroom —
//       empowering schools to deliver world-class entrepreneurship education
//       without infrastructure.
//     </p>
//   </div>

//   <div className="info_card">
//     <h3>Measured Growth. Real Outcomes</h3>
//     <p>
//       Through the Solution Seeking Index (SSI), every participant’s journey is
//       tracked and benchmarked — providing measurable insights into creativity,
//       leadership, and entrepreneurial growth.
//     </p>
//   </div>

//   <div className="info_card">
//     <h3>Powered by Intelligent Tools</h3>
//     <p>
//       At the heart of Future Titans™ is the AI Co-Founder™ — a breakthrough
//       intelligence partner that helps students think sharper, build faster, and
//       innovate with precision.
//     </p>
//   </div>

//   <div className="info_card">
//     <h3>National Recognition & Opportunity</h3>
//     <p>
//       In partnership with The Times of India, Future Titans™ offers students a
//       national platform to showcase ventures. Winners receive ₹10 lakhs in
//       funding.
//     </p>
//   </div>

//   <div className="info_card">
//     <h3>Building the Leaders of Tomorrow</h3>
//     <p>
//       More than a competition, it’s a movement — designed to strengthen
//       confidence, collaboration, and leadership in an AI world.
//     </p>
//   </div>
// </div>

//       </section>











//       <section className="mentorship-section" data-aos="fade-up" data-aos-delay="300">
//         <h2>Why Should Schools and Parents Encourage Participation? </h2>
//         <p>Entrepreneurship isn’t just about launching companies — it’s about cultivating a solution-seeking mindset:<br/> the ability to notice problems, take initiative, and create meaningful impact.<br/>
// Through Future Titans™, students learn to transform ideas into real-world projects, gaining the confidence and capability to lead in any path they choose — <br/>whether as founders or as intrapreneurs shaping innovation within organizations.
// </p>
       
//        <p>Because inside every classroom sits a potential pioneer — <br/>someone who could become the next Ratan Tata or Falguni Nayar, waiting for the right platform to rise.</p>
       
        
        
//         <div className="highlight">
//         Future Titans™ gives them that platform — India’s premier stage for young innovators:
//         </div>
//         <p>National Exposure in association with</p>
//         <img className="logo" src={times} alt="Times of India Logo" />
//         <div className="highlight">Expert Mentorship from Global Luminaries</div>
//         <div className="mentors">
//         <div className="mentor-card">
//             <img src={mentor3} alt="Sandipan Chattopadhyay" />
//             <h4>Devika Majumder</h4>
//             <span>Founder & CEO | Wall Street Journal Featured | Nominated by Business Today as one of the most powerful women in business</span>
//           </div>
//           <div className="mentor-card">
//             <img src={mentor1} alt="Fred Katz" />
//             <h4>Fred Katz</h4>
//             <span>Professor of Entrepreneurship, Johns Hopkins (USA)</span>
//           </div>
//           <div className="mentor-card">
//             <img src={mentor2} alt="Sandipan Chattopadhyay" />
//             <h4>Sandipan Chattopadhyay</h4>
//             <span>Former CTO Justdial, CEO Xelpmoc</span>
//           </div>
         
//           <div className="mentor-card">
//             <img src={mentor4} alt="Sandipan Chattopadhyay" />
//             <h4>Partha Ghosh</h4>
//             <span>Founder, Partha Ghosh Leadership Academy IIT Kharagpur | Former McKinsey Senior Partner | Prof. Of Leadership, MIT USA</span>
//           </div>
//         </div>
//         <h2 style={{marginTop:"80px"}}>Empower one young innovator — <br/>and you ignite a ripple that can transform an entire generation.</h2>
//       </section>


//       {/* <section className="workshop-section">
//         <h2>Five Transformative Workshops to Shape the Solution-Seekers of Tomorrow</h2>
//         <ul className="workshop-list">
//           <li>Learn market research to uncover real, high-value opportunities.</li>
//           <li>Master ideation and creative problem-solving like a future disruptor.</li>
//           <li>Understand your target audience to build solutions that truly matter.</li>
//           <li>Grasp the fundamentals of financial planning, pricing, and budgeting.</li>
//           <li>Perfect your pitch and storytelling to win hearts—and investors.</li>
//         </ul>
//         <p className="subtext">
//         Pitch to top investors, founders, and industry leaders, with ₹40 Lakhs in prizes, incubation, and mentorship.
//         </p>
//         <p className="cta-text">Will your child get the opportunity to shape the future?	</p>
//         <button
//   className="cta-button"
//   onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSf5kqAas0Q84ygmKTdkKxi-9RFJ8MgeAcDqyF3SDKsvpEhFSQ/viewform", "_blank")}
// >
//   SECURE YOUR SPOT NOW
// </button>

//       </section>
    
    
//       <section className="academy-section">
//         <div className="overlay"></div>
//         <div className="academy-content">
//           <h2>YoungPreneur Academy – Build. Innovate. Lead.</h2>
//           <p>
//           Entrepreneurship isn’t just a subject — it’s a mindset.
//            At YoungPreneur Academy, students go beyond textbooks to experience what it truly means to think, build, and lead like CEOs. Through immersive learning, real business challenges, and expert mentorship, they develop the skills that define tomorrow’s leaders.

//           </p>

      
//           <div className="curriculum-topic">
//             <h4 style={{ color: " #dcae1a",fontSize: "20px" }}>Startup Fundamentals</h4>
//             <p style={{ color: "rgb(255, 255, 255)" }}>Understanding ideas, markets, and business models.</p>
//             <br/>
//             <h4 style={{ color: "  #dcae1a",fontSize: "20px" }}>Pitching & Storytelling </h4>
//             <p style={{ color: " rgb(255, 255, 255)" }}>Communicating vision with clarity and impact.</p>
//             <br/>
//             <h4 style={{ color: "  #dcae1a",fontSize: "20px" }}>Financial & Business Strategy </h4>
//             <p style={{ color: "rgb(255, 255, 255)" }}>Learning the art of smart decision-making.</p>
//             <br/>
//             <h4 style={{ color: "  #dcae1a",fontSize: "20px" }}>Leadership & Communication </h4>
//             <p style={{ color: " rgb(255, 255, 255)" }}>Building confidence, teamwork, and influence.</p>
//           </div>
          
          
//           <button
//   className="enroll-btn"
//   onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSf5kqAas0Q84ygmKTdkKxi-9RFJ8MgeAcDqyF3SDKsvpEhFSQ/viewform", "_blank")}
// >
// ENROLL TODAY
// </button>

//         </div>
//       </section>
    


//       <div className="curriculum-section">

//         <div className="curriculum-left"></div>
//         <div className="curriculum-right">
   

//           <h2>The YoungPreneur Entrepreneurship Curriculum</h2>
//           <h4>Where Ideas Evolve, Strengthen, and Launch.</h4>
//           <p className="intro" style={{fontSize:"20px"}}>
//           Powered by the world’s first neuro-adaptive Mindset Engine — a patent-pending innovation that adapts to how students think and create.
// The YoungPreneurs™ Curriculum guides learners from their first spark of an idea to real-world execution — combining global innovation frameworks with hands-on application to cultivate minds that decode problems, engineer solutions, and leave a mark that truly counts.



//           </p>

//           <div className="curriculum-topic">
//             <h4>Foundations of Entrepreneurship</h4>
//             <p>Explore how today’s startups are redefining industries and creating opportunities. Understand what it truly means to think, build, and lead like an entrepreneur in a rapidly changing world.</p>
//           </div>

//           <div className="curriculum-topic">
//             <h4>The Entrepreneurial Mindset</h4>
//             <p>Develop the ability to adapt, take initiative, and convert challenges into opportunities — nurturing the core traits of resilience, agility, and purposeful risk-taking.</p>
//           </div>

//           <div className="curriculum-topic">
//             <h4>Lateral Thinking & Creative Problem-Solving</h4>
//             <p>Learn to challenge assumptions, think laterally, and identify real-world opportunities — the spark that begins every IDEA DNA™ journey.</p>
//           </div>

//           <div className="curriculum-topic">
//             <h4>Idea Generation to Prototyping</h4>
//             <p>Use the IDEA DNA™ Framework to shape, validate, and prototype ideas — turning raw concepts into practical innovation.</p>
//           </div>

//           <div className="curriculum-topic">
//             <h4>Lean Launchpad and Business Model Canvas</h4>
//             <p>Apply global startup tools to test value propositions and customer fit within our Plug-n-Play School Ecosystem — a ready-to-implement platform for innovation learning.</p>
//           </div>

//           <div className="curriculum-topic">
//             <h4>Business Plan & Strategy</h4>
//             <p>Master financial planning, budgeting, and scalability while applying the SURGE Framework™ to refine, grow, and sustain ventures.</p>
//           </div>

//           <div className="curriculum-topic">
//             <h4>Pitch, Present & Lead</h4>
//             <p>Build influence and leadership presence — translating vision into a pitch that inspires action.</p>
//           </div>
//         </div>
//       </div> */}


//       <div className="connect-section" data-aos="fade-up" data-aos-delay="400">
//   <h2 className="connect-title">Connect with Youngpreneurs</h2>
//   <div className="social-icons">
//     <a href="https://www.youtube.com/@youngpreneursindia4413" target="_blank" rel="noopener noreferrer">
//       <img src={youtube} alt="YouTube" />
//     </a>
//     <a href="https://www.instagram.com/youngpreneurs.ai?igsh=YjN1bG5zeG1xYzV1&utm_source=qr" target="_blank" rel="noopener noreferrer">
//       <img src={insta} alt="Instagram" />
//     </a>
//     <a href="mailto:youngpreneursfuturetitans@gmail.com">
//       <img src={email} alt="Email" />
//     </a>
//     <a href="https://www.linkedin.com/company/youngpreneurs-ind/" target="_blank" rel="noopener noreferrer">
//       <img src={linkedin} alt="LinkedIn" />
//     </a>
//   </div>
//   </div>
     

// <style>{`


// * {
//       margin: 0;
//       padding: 0;
//       box-sizing: border-box;
//     }

//     body, html {
//       width: 100%;
//       overflow-x: hidden;
//     }

   
//     /* Avoid body scroll due to internal children */
//     html, body {
//       overflow-x: hidden;
//     }

//     section, div {
//       max-width: 100vw;
//     }



// .container {

//           padding: 60px 20px;
//           // max-width: 1300px;
//           // margin: auto;
//           // font-family: 'Segoe UI', sans-serif;
         
//         }

//         .content {
//           display: flex;
//           flex-wrap: wrap;
//           align-items: center;
//           justify-content: space-between;
//           gap: 30px;
//         }

//         .text-column {
//           flex: 1 1 400px;
//           max-width: 500px;
//         }

//         .intro {
//           color: #dcae1a;
//           font-weight: 400;
           
//           margin-bottom: 10px;
//         }
          

//         .heading {
//           font-size: 28px;
//           font-weight: 800;
//           color: #134734;
//           margin-bottom: 20px;
//         }

//         .description {
//           color: #666;
//           line-height: 1.6;
//           font-size: 46px;
//         }

//         .start-button {
//           margin-top: 20px;
//           background-color: #dcae1a;
//           color: #fff;
//           padding: 12px 24px;
//           border: none;
//           border-radius: 25px;
//           font-weight: bold;
//           cursor: pointer;
//         }

//         .card-column {
//           flex: 1 1 200px;
//           display: flex;
//           gap: 30px;
//           flex-wrap: wrap;
//           justify-content: center;
//         }

//         .card {
//           position: relative;
        
//           border-radius: 20px;
//           overflow: hidden;
//           box-shadow: 0 8px 20px rgba(0,0,0,0.1);
//         }

//         .card img {
//           width: 100%;
//           display: block;
//           border-radius: 20px;
//         }

//         .badge {
//           position: absolute;
//           top: 15px;
//           right: 15px;
//           background: rgba(255, 255, 255, 0.8);
//           color: #134734;
//           padding: 5px 15px;
//           border-radius: 30px;
//           font-weight: 600;
//           font-size: 14px;
//           border: 1px solid #134734;
//         }

//         .overlay-text {
//           position: absolute;
//           bottom: 0;
//           width: 100%;
//           padding: 15px;
//           // background: rgba(178, 174, 174, 0.9);
//           // color: white;
//           font-size: 14px;
//           line-height: 1.4;
//           backdrop-filter: blur(4px);
//         }

//         .footer-note {
//           margin-top: 60px;
//           text-align: center;
//           font-size: 16px;
//           color: #666;
//            margin-left: 950px;
//            margin-top: -80px;

//         }

//         .footer-note span {
//           font-weight: 600;
//           color: #134734;
          
//         }

//         @media (max-width: 768px) {
//           .content {
//             flex-direction: column;
//             text-align: center;
//           }

//           .card-column {
//             justify-content: center;
//           }
//         }
//           .titans-section {
//           display: flex;
//           flex-wrap: wrap;
//           align-items: center;
//           justify-content: center;
//           padding: 80px 20px;
//           background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
//           position: relative;
//           overflow: hidden;
//         }
        
//         .titans-section::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(26, 26, 26, 0.9) 100%);
//           z-index: 1;
//         }
        
//         .titans-section > * {
//           position: relative;
//           z-index: 2;
//         }

//         .titans-left {
//           flex: 1;
//           min-width: 300px;
//           max-width: 600px;
//           padding: 20px 30px;
//         }

//         .titans-left h4 {
//           font-weight: 600;
//           font-size: 28px;
//           margin-bottom: 15px;
//           color: #dcae1a;
//           text-transform: uppercase;
//           letter-spacing: 2px;
//           animation: fadeInUp 0.8s ease-out;
//         }

//         .titans-left h2 {
//           font-size: 42px;
//           color: #ffffff;
//           font-weight: 700;
//           margin-bottom: 25px;
//           line-height: 1.2;
//           text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
//           animation: fadeInUp 0.8s ease-out 0.2s both;
//         }

//         .titans-left p {
//           font-size: 18px;
//           color: rgba(255, 255, 255, 0.85);
//           margin-bottom: 20px;
//           line-height: 1.7;
//           animation: fadeInUp 0.8s ease-out 0.4s both;
//         }

//         .titans-left p strong {
//           color: #dcae1a;
//           font-weight: 600;
//         }

//         .register-button {
//           background: #dcae1a;
//           color: #000000;
//           padding: 15px 40px;
//           font-size: 16px;
//           font-weight: 600;
//           border: 2px solid #dcae1a;
//           border-radius: 4px;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           box-shadow: 0 4px 15px rgba(220, 174, 26, 0.2);
//           text-transform: uppercase;
//           letter-spacing: 1px;
//           animation: fadeInUp 0.8s ease-out 0.6s both;
//           position: relative;
//           overflow: hidden;
//         }

//         .register-button:hover {
//           background: #000000;
//           color: #dcae1a;
//           transform: translateY(-2px);
//           box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
//         }

//         .titans-right {
//           flex: 1;
//           min-width: 300px;
//           max-width: 600px;
//           padding: 20px;
//           display: flex;
//           justify-content: center;
//         }

//         .titans-right img {
//           width: 100%;
//           height: auto;
//           border-radius: 20px;
//           object-fit: cover;
//           box-shadow: 0 10px 30px rgba(0,0,0,0.2);
//           transition: transform 0.3s ease;
//         }

//         .titans-right img:hover {
//           transform: scale(1.05);
//         }

//         @media (max-width: 768px) {
//           .titans-section {
//             flex-direction: column;
//           }

//           .titans-left {
//             text-align: center;
//             padding: 20px 15px;
//           }

//           .titans-left h2 {
//             font-size: 26px;
//           }

//           .register-button {
//             margin-top: 15px;
//           }
//         }
//           .game-changer-section {
//           background: #ffffff;
//           padding: 80px 40px;
//           text-align: center;
//           position: relative;
//         }

//         .game-changer-section h2 {
//           color: #000000;
//           font-size: 32px;
//           margin-bottom: 50px;
//           font-weight: 700;
//         }

//         .card-container {
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: center;
//           gap: 30px;
//         }

//         .info-card {
//           background: #ffffff;
//           border: 1px solid #e5e5e5;
//           border-radius: 8px;
//           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
//           padding: 35px 25px;
//           width: 350px;
//           transition: all 0.3s ease;
//           position: relative;
//         }
        
//         .info-card:hover {
//           transform: translateY(-4px);
//           box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
//           border-color: #dcae1a;
//         }
//           .info_card {
//   background: #ffffff;
//   border: 1px solid #dcae1a;
//   border-radius: 8px;
//   box-shadow: 0 4px 15px rgba(220, 174, 26, 0.15);
//   padding: 30px 20px;
//   color: #000000;
//   width: 100%;
//   max-width: 350px;
//   transition: all 0.3s ease;
// }

// .info_card:hover {
//   transform: translateY(-4px);
//   box-shadow: 0 8px 25px rgba(220, 174, 26, 0.25);
//   border-color: #000000;
// }

// /* Optional hover effect for desktop */
// .info_card:hover {
//   transform: translateY(-4px);
// }

// /* Tablet and large screens alignment stays perfect */
// @media (min-width: 768px) {
//   .info_card {
//     width: 350px;
//   }
// }


//         .info-card:hover {
//           transform: translateY(-5px);
//         }

//         .info-card h3 {
//           font-size: 20px;
//           color: #000000;
//           font-weight: 600;
//           margin-bottom: 20px;
//         }
        
//         .info-card h3::after {
//           content: '';
//           display: block;
//           width: 40px;
//           height: 2px;
//           background: #dcae1a;
//           margin: 8px 0 0 0;
//         }
//            .info_card h3 {
//           font-size: 20px;
//           color: #000000;
//           font-weight: 600;
//           margin-bottom: 15px;
//         }

//         .info-card p {
//           font-size: 16px;
//           color: #333333;
//           line-height: 1.6;
//           font-weight: 400;
//         }
        
//         .info_card p {
//           font-size: 16px;
//           color: #333333;
//           line-height: 1.6;
//           font-weight: 400;
//         }

//         @media (max-width: 768px) {
//           .card-container {
//             flex-direction: column;
//             align-items: center;
//           }

//           .info-card {
//             width: 90%;
//           }
//         }
//            .mentorship-section {
//           background: #000000;
//           padding: 80px 20px;
//           color: #ffffff;
//           text-align: center;
//           position: relative;
//         }

//         .mentorship-section h2 {
//           font-size: 32px;
//           font-weight: 700;
//           margin-bottom: 25px;
//           color: #dcae1a;
//         }

//         .mentorship-section p {
//        display:flex;
//        justify-content:center;
//           font-size: 20px;
//           margin-bottom: 10px;
//           color: rgba(255, 255, 255, 0.85);
//         }

//         .highlight {
//           font-weight: 600;
//           font-size: 25px;
//           color: #dcae1a;
//           margin-top: 20px;
//         }

//         .logo {
//           width: 200px;
//           margin: 20px auto;
//           filter: brightness(0) invert(1);
//           transition: filter 0.3s ease;
//         }
        
//         .logo:hover {
//           filter: brightness(0) invert(1) sepia(1) saturate(100) hue-rotate(15deg);
//         }

//        .mentors {
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   gap: 40px;
//   margin-top: 40px;
//   padding: 0 20px;
// }

//         .mentor-card {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   width: 100%;
//   max-width: 320px;
//   padding: 25px;
//   background: rgba(255, 255, 255, 0.05);
//   border: 1px solid rgba(220, 174, 26, 0.2);
//   border-radius: 8px;
//   transition: all 0.3s ease;
// }

// .mentor-card:hover {
//   transform: translateY(-4px);
//   background: rgba(255, 255, 255, 0.08);
//   border-color: #dcae1a;
//   box-shadow: 0 8px 25px rgba(220, 174, 26, 0.15);
// }

// /* Mentor Image */
// .mentor-card img {
//   width: 110px;
//   height: 110px;
//   border-radius: 50%;
//   object-fit: cover;
//   margin-bottom: 15px;
//   border: 2px solid #dcae1a;
//   box-shadow: 0 4px 15px rgba(0,0,0,0.3);
//   transition: all 0.3s ease;
// }

// .mentor-card:hover img {
//   transform: scale(1.05);
//   border-color: #ffffff;
// }

// /* Name */
// .mentor-card h4 {
//   margin: 8px 0 6px;
//   font-size: 20px;
//   line-height: 1.2;
// }

// /* Description */
// .mentor-card span {
//   font-size: 16px;
//   line-height: 1.4;
//   color: #e0e0e0;
// }

// /* ------------------------------- */
// /* 📱 Mobile Responsive Styling    */
// /* ------------------------------- */
// @media (max-width: 768px) {

//   .mentors {
//     gap: 30px;
//   }

//   .mentor-card {
//     max-width: 100%;
//   }

//   .mentor-card img {
//     width: 90px;
//     height: 90px;
//   }

//   .mentor-card h4 {
//     font-size: 18px;
//   }

//   .mentor-card span {
//     font-size: 15px;
//   }
// }

// @media (max-width: 480px) {
//   .mentor-card img {
//     width: 80px;
//     height: 80px;
//   }

//   .mentor-card span {
//     font-size: 14px;
//   }
// }

//            .workshop-section {
//           background: linear-gradient(rgba(220, 175, 26, 0.62), rgba(220, 175, 26, 0.28));
//           padding: 60px 20px;
          
//           color: #fff;
//           text-align: center;
//           border-radius: 30px;
//           max-width: 900px;
//           margin: 90px auto;
//         }

//         .workshop-section h2 {
//           font-size: 26px;
//           font-weight: 600;
//           margin-bottom: 50px;
//           color: #104040
//         }

//         .workshop-list {
//           list-style: none;
//           padding: 0;
//           margin: 0 auto 30px;
//           max-width: 700px;
//           text-align: left;
          
//         }

//         .workshop-list li {
//           margin-bottom: 16px;
//           font-size: 20px;
//           position: relative;
//           padding-left: 32px;
//           color: #104040
//         }

//         .workshop-list li::before {
//           content: "✔";
//           color: #fff;
//           position: absolute;
//           left: 0;
//           top: 0;
//            color: #104040
//         }

//         .subtext {
//           font-size: 20px;
//            font-weight: 600;
//         color: #104040;
//           margin-bottom: 30px;
//           max-width: 700px;
//           margin-left: auto;
//           margin-right: auto;
//         }

//         .cta-text {
//           font-size: 22px;
//           font-weight: 700;
//           color: #104040;
//           margin-bottom: 20px;
//         }

//         .cta-button {
//           background-color: #104040;
//           color: #fff;
//           padding: 12px 30px;
//           font-weight: 600;
//           font-size: 14px;
//           border-radius: 30px;
//           border: none;
//           cursor: pointer;
//           transition: background 0.3s ease;
//         }

//         .cta-button:hover {
//           background-color: #333;
//         }

//         @media (max-width: 768px) {
//           .workshop-section {
//             padding: 40px 15px;
//           }

//           .workshop-section h2 {
//             font-size: 20px;
//           }

//           .workshop-list li {
//             font-size: 15px;
//           }

//           .cta-text {
//             font-size: 18px;
//           }

//           .cta-button {
//             padding: 10px 20px;
//             font-size: 13px;
//           }
//         }
//            .academy-section {
//           background: url(${home2}) no-repeat center center/cover;
//           position: relative;
//           padding: 50px 20px;
//           color: #fff;
//         }

//         .overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           height: 100%;
//           width: 100%;
//           background:rgba(17, 16, 10, 0.41);
//           z-index: 1;
//         }

//         .academy-content {
//           position: relative;
//           z-index: 2;
//           max-width: 600px;
//           margin: 0 auto;
//           text-align: left;
//         }

//         .academy-content h2 {
//           font-size: 35px;
//           font-weight: 700;
//           margin-bottom: 20px;
//           color:rgb(242, 210, 104);

//         }

//         .academy-content p {
//           font-size: 20px;
//           color:rgba(255, 255, 255, 0.84);
//           margin-bottom: 30px;
//           line-height: 1.6;
//         }

//         .points {
//           list-style: none;
//           padding: 0;
//           margin-bottom: 30px;
//         }

//         .points li {
//           display: flex;
//           align-items: center;
//           margin-bottom: 15px;
//           font-weight: bold;
//           font-size: 16px;
//         }

//         .points li::before {
//           content: "🟥";
//           font-size: 18px;
//           margin-right: 10px;
//         }

//         .enroll-btn {
//           background-color: #dcae1a;
//           color:rgb(255, 255, 255);
//           padding: 12px 28px;
//           font-weight: 600;
//           font-size: 18px;
//           border: none;
//           border-radius: 30px;
//           cursor: pointer;
//           transition: background 0.3s ease;
//         }

//         .enroll-btn:hover {
//           background-color: #e0e0e0;
//         }

//         @media (max-width: 768px) {
//           .academy-content h2 {
//             font-size: 24px;
//           }

//           .points li {
//             font-size: 15px;
//           }

//           .academy-content p {
//             font-size: 15px;
//           }
//         }
//            .curriculum-section {
//           display: flex;
//           flex-wrap: wrap;
//           width: 100%;
//           min-height: 100vh;
//           margin-top:50px
//         }

//         .curriculum-left {
//           flex: 1;
//           min-width: 300px;
//           background: url(${home4}) no-repeat center center/cover;
//         }

//         .curriculum-right {
//           flex: 1;
//           min-width: 300px;
//           background: linear-gradient(to bottom right,rgba(113, 110, 99, 0.94),rgba(178, 183, 183, 0.91));
//           // background:rgba(250, 228, 158, 0.26);
//           color: #fff;
//           padding: 60px 40px;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//         }

//         .curriculum-right h2 {
//         color:rgb(5, 59, 39);
//           font-size: 32px;
//           margin-bottom: 20px;
//           font-weight: 700;
//         }
//           .curriculum-right h4 {
//         color:rgb(5, 59, 39);
          
//           margin-bottom: 20px;
//           font-weight: 700;
//         }

//         .curriculum-right p.intro {
//           font-size: 16px;
//           margin-bottom: 30px;
//         color:rgb(255, 255, 255);
//           line-height: 1.6;
//         }

//         .curriculum-topic {
//           margin-bottom: 25px;
//         }

//         .curriculum-topic h4 {
//           margin: 0;
//           font-size: 18px;
//           // font-weight: 600;
//           color:rgb(5, 59, 39);
//         }

//         .curriculum-topic p {
//           margin: 5px 0 0 0;
//           font-size: 20px;
//             color:rgb(255, 255, 255);
         
//           line-height: 1.4;
//         }

//         @media (max-width: 768px) {
//           .curriculum-section {
//             flex-direction: column;
//           }

//           .curriculum-right {
//             padding: 40px 20px;
//           }

//           .curriculum-right h2 {
//             font-size: 24px;
//           }

//           .curriculum-topic h4 {
//             font-size: 16px;
//           }

//           .curriculum-topic p {
//             font-size: 14px;
//           }
//         }
//           .connect-section {
//       text-align: center;
//       padding: 80px 20px;
//       background: #ffffff;
//       position: relative;
//     }

//     .connect-title {
//       font-size: 32px;
//       font-weight: 700;
//       color: #000000;
//       margin-bottom: 40px;
//     }

//     .social-icons {
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       gap: 30px;
//       flex-wrap: wrap;
//     }

//     .social-icons a {
//       display: block;
//       border-radius: 8px;
//       overflow: hidden;
//       box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
//       transition: all 0.3s ease;
//       position: relative;
//       border: 1px solid #e5e5e5;
//     }

//     .social-icons a:hover {
//       transform: translateY(-4px);
//       box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
//       border-color: #dcae1a;
//     }

//     .social-icons img {
//       width: 300px;
//       height: 100%;
//       object-fit: cover;
//       border-radius: 8px;
//       transition: all 0.3s ease;
//     }
    
//     .social-icons a:hover img {
//       filter: grayscale(0%);
//     }

//     @media (max-width: 768px) {
//       .social-icons {
//         gap: 20px;
//       }

//       .social-icons img {
//         width: 120px;
//         height: 80px;
//       }

//       .connect-title {
//         font-size: 23px;
//       }
//     }



// .swiper-button-next,
// .swiper-button-prev {
//   color: white !important;
// }

// /* Change Swiper pagination bullets to white */
// .swiper-pagination-bullet {
//   background: white !important;
//   opacity: 0.6;
// }

// .swiper-pagination-bullet-active {
//   background: white !important;
//   opacity: 1;
// }



// /* MAIN LAYOUT */
// .yp-container {
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-start;
//   padding: 60px 5%;
//   gap: 50px;
// }

// /* LEFT SIDE */
// .yp-left {
//   flex: 1;
//   max-width: 520px;
// }

// .welcome {
//   color: #d62828;
//   font-weight: 600;
//   font-size: 18px;
//   margin-bottom: 12px;
// }

// .title {
//   color: #0b3d2e;
//   font-size: 34px;
//   font-weight: 700;
//   line-height: 1.3;
//   margin-bottom: 18px;
// }

// .desc {
//   color: #444;
//   font-size: 16px;
//   line-height: 1.6;
//   margin-bottom: 16px;
// }

// /* RIGHT SIDE */
// .yp-right {
//   flex: 1;
//   max-width: 520px;  /* IMPORTANT: controls exact width like design */
//   display: flex;
//   flex-direction: column;
//   gap: 35px;
// }

// /* CARD */
// .card {
//   position: relative;
//   border-radius: 22px;
//   overflow: hidden;
//   width: 100%;
//   aspect-ratio: 4 / 3.7;   /* exact shape like sample */
//   display: flex;
// }

// .card-img {
//   width: 100%;
//   height: 100%;
//   object-fit: cover;  /* prevents stretched face */
//   border-radius: 22px;
// }

// /* TAG */
// .tag {
//   position: absolute;
//   top: 20px;
//   right: 20px;
//   padding: 7px 26px;
//   border: 2px solid white;
//   border-radius: 30px;
//   font-size: 20px;
//   font-weight: 600;
//   color: white;
//   backdrop-filter: blur(8px);
// }

// /* GLASS BOX */
// .glass-box {
//   position: absolute;
//   bottom: 18px;
//   left: 50%;
//   transform: translateX(-50%);
//   width: 85%;
//   padding: 25px 25px;
//   border-radius: 22px;
//   background: rgba(255, 255, 255, 0.18);
//   backdrop-filter: blur(18px);
//   color: white;
//   font-size: 18px;
//   line-height: 1.5;
//   text-align: center;
// }

// /* ------------------ RESPONSIVE ------------------ */

// @media (max-width: 1024px) {
//   .yp-container {
//     flex-direction: column;
//     align-items: center;
//   }
//   .yp-right {
//     max-width: 600px;
//     width: 100%;
//   }
// }

// @media (max-width: 768px) {
//   .title {
//     font-size: 28px;
//   }
//   .glass-box {
//     font-size: 16px;
//   }
// }

// @media (max-width: 500px) {
//   .yp-container {
//     padding: 40px 20px;
//   }
//   .tag {
//     font-size: 16px;
//     right: 12px;
//   }
//   .glass-box {
//     width: 92%;
//     padding: 18px;
//     font-size: 15px;
//   }
// }



// .yp-container {
//   display: flex;
//   align-items: flex-start;
//   justify-content: space-between;
//   gap: 40px;
//   padding: 50px 20px;
//   width: 100%;
//   background: #f8f9fc;
//   box-sizing: border-box;
// }

// .yp-left {
//   width: 55%;
//   font-family: "Poppins", sans-serif;
// }

// .yp-left h1 {
//   font-size: 2.6rem;
//   font-weight: 700;
//   margin-bottom: 20px;
// }

// .yp-left p {
//   font-size: 1.1rem;
//   line-height: 1.7;
//   font-weight: 300;
// }

// /* RIGHT SIDE */
// .yp-right {
//   width: 45%;
//   display: flex;
//   justify-content: center;
// }

// .image-row {
//   display: flex;
//   gap: 20px;
//   width: 100%;
//   justify-content: center;
// }

// .img-box {
//   width: 50%;
//   max-width: 300px;
//   border-radius: 16px;
//   overflow: hidden;
//   box-shadow: 0 4px 25px rgba(0,0,0,0.15);
// }

// .img-box img {
//   width: 100%;
//   height: auto;
//   display: block;
//   object-fit: cover;
// }

// /* RESPONSIVE */
// @media (max-width: 900px) {
//   .yp-container {
//     flex-direction: column;
//   }

//   .yp-left,
//   .yp-right {
//     width: 100%;
//   }

//   .image-row {
//     flex-direction: row;
//     justify-content: space-between;
//   }

//   .img-box {
//     width: 48%;
//   }
// }

// @media (max-width: 600px) {
//   .image-row {
//     flex-direction: column;
//     align-items: center;
//   }

//   .img-box {
//     width: 90%;
//     max-width: 350px;
//   }
// }

// /* ANIMATIONS */
// @keyframes fadeInUp {
//   from {
//     opacity: 0;
//     transform: translateY(30px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// }

// @keyframes fadeInLeft {
//   from {
//     opacity: 0;
//     transform: translateX(-30px);
//   }
//   to {
//     opacity: 1;
//     transform: translateX(0);
//   }
// }

// @keyframes fadeInRight {
//   from {
//     opacity: 0;
//     transform: translateX(30px);
//   }
//   to {
//     opacity: 1;
//     transform: translateX(0);
//   }
// }

// @keyframes pulse {
//   0%, 100% {
//     transform: scale(1);
//   }
//   50% {
//     transform: scale(1.05);
//   }
// }

// @keyframes shimmer {
//   0% {
//     background-position: -1000px 0;
//   }
//   100% {
//     background-position: 1000px 0;
//   }
// }

// /* Floating animation */
// @keyframes float {
//   0%, 100% {
//     transform: translateY(0px);
//   }
//   50% {
//     transform: translateY(-10px);
//   }
// }

// /* Glow effect */
// @keyframes glow {
//   0%, 100% {
//     box-shadow: 0 0 5px rgba(220, 174, 26, 0.5);
//   }
//   50% {
//     box-shadow: 0 0 20px rgba(220, 174, 26, 0.8), 0 0 30px rgba(220, 174, 26, 0.4);
//   }
// }

//     `}</style>
   
//     </>
//   );
// };

// export default Home; 



import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'aos/dist/aos.css';
import AOS from 'aos';
import rightImg from '../assets/home1.png';
import mentor1 from '../assets/fred.jpg';
import mentor2 from '../assets/sandipan.jpeg';
import mentor3 from '../assets/devika.jpg';
import mentor4 from '../assets/partha.jpg';
import times from '../assets/ttoi.png';
import home2 from '../assets/home2.png';
import home4 from '../assets/home4.jpg';
import insta from '../assets/insta.jpg';
import linkedin from '../assets/linkedin.jpg';
import email from '../assets/email.jpg';
import youtube from '../assets/youtube.jpg';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, offset: 80 });
  }, []);

  return (
    <>
      {/* ── HERO SLIDER ── */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000 }}
        loop={true}
        slidesPerView={1}
        style={{ width: '100%', height: 'auto' }}
      >
        {['1','2','3','4','5','SIX'].map((s, i) => (
          <SwiperSlide key={i}>
            <img src={`/${s}.png`} alt={s} style={{ width: '100%', display: 'block' }} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ── ECOSYSTEM INTRO ── */}
      <div className="yp-intro-section" data-aos="fade-up">
        <div className="yp-intro-left">
          <span className="yp-eyebrow">The YoungPreneurs™ Ecosystem</span>
          <h2 className="yp-intro-heading">Where Innovation, Neuroscience, and Purpose Converge</h2>
          <p className="yp-intro-body">
            The YoungPreneurs™ ecosystem is more than a program — it's a living, adaptive innovation network built to nurture solution-seeking capability in every student.
          </p>
          <p className="yp-intro-body">
            Powered by insights from neuroscience, artificial intelligence, and design thinking, it redefines how young minds learn, think, and lead — turning classrooms into launchpads for innovation.
            At its core lies the patent-pending <strong>Mindset Engine™</strong>, a neuro-adaptive system that decodes how students think, adapt, and create — helping them build measurable growth in curiosity, creativity, and resilience through the <strong>SSI™ Mindset Score (Solution-Seeking Index™)</strong>.
          </p>
          <button
            className="yp-cta-btn"
            onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSf5kqAas0Q84ygmKTdkKxi-9RFJ8MgeAcDqyF3SDKsvpEhFSQ/viewform", "_blank")}
          >
            Register Now
          </button>
        </div>
        <div className="yp-intro-right">
          <img src={rightImg} alt="Students discussing startup ideas" className="yp-intro-img" />
        </div>
      </div>

      {/* ── 4 INNOVATION ENGINES ── */}
      <section className="yp-engines-section" data-aos="fade-up" data-aos-delay="100">
        <div className="yp-section-label">The Four Innovation Engines</div>
        <h2 className="yp-section-heading">
          Surrounding this core are four innovation engines that power the{' '}
          <span className="yp-gold">YoungPreneurs™</span> experience:
        </h2>
        <div className="yp-engines-grid">
          {[
            {
              tag: '01', title: 'IDEA DNA™ — The Science of Innovation',
              body: 'A cognitive framework that teaches students to deconstruct complex challenges and rebuild them into scalable, real-world solutions. From idea spark to impact, it transforms imagination into disciplined innovation.'
            },
            {
              tag: '02', title: 'S.U.R.G.E.™ — The Mindset Accelerator',
              body: 'A neuroscience-informed growth model that strengthens five essential traits — Self-belief, Uncertainty, Resilience, Growth, and Empathy. It helps students stay curious, confident, and courageous in an unpredictable world.'
            },
            {
              tag: '03', title: 'AI Co-Founder™ — The Future of Learning',
              body: 'An intelligent innovation partner that helps students ideate, research, and prototype — not by supplying answers, but by sparking better questions. It fuses human creativity with AI precision to make learning more immersive and future-ready.'
            },
            {
              tag: '04', title: 'Future Titans™ — The Real-World Playground',
              body: "The culmination of the YoungPreneurs™ journey — where students put their ideas to the test, pitch to experts, and experience the thrill of real innovation. It's more than a competition; it's a nationwide movement redefining what young minds can achieve."
            }
          ].map((c, i) => (
            <div className="yp-engine-card" key={i}>
              <span className="yp-engine-tag">{c.tag}</span>
              <h3 className="yp-engine-title">{c.title}</h3>
              <p className="yp-engine-body">{c.body}</p>
            </div>
          ))}
        </div>
        <p className="yp-engines-footer">
          Together, these pillars form the YoungPreneurs™ Ecosystem —<br />
          an interconnected, measurable, and future-ready learning architecture that turns potential into purpose.<br />
          Where students don't just prepare for the future — they begin to create it.
        </p>
      </section>

      {/* ── GAME CHANGER ── */}
      <section className="yp-gc-section" data-aos="fade-up" data-aos-delay="200">
        {/* <div className="yp-section-label yp-label-dark">What Sets Us Apart</div> */}
        <div className="yp-section-label yp-label-white"> What Makes Future Titans a True Game Changer?</div>

        {/* <h2 className="yp-gc-heading">
          What Makes <span className="yp-gold">Future Titans</span> a True Game Changer?
        </h2> */}
        <div className="yp-gc-grid">
          {[
            {
              title: 'A Revolution in Learning',
              body: "Future Titans™ is powered by the world's first neuro-adaptive, patent-pending entrepreneurial ecosystem — a system built to turn learning into creation. Using IDEA DNA™ and the S.U.R.G.E.™ framework, students don't just think of ideas — they build, test, and refine them like real innovators."
            },
            {
              title: 'A Plug-n-Play Model for Schools',
              body: "The YoungPreneurs™ model fits effortlessly into any classroom — empowering schools to deliver world-class entrepreneurship education without additional infrastructure."
            },
            {
              title: 'Measured Growth. Real Outcomes',
              body: "Through the Solution Seeking Index (SSI), every participant's journey is tracked and benchmarked — providing measurable insights into creativity, leadership, and entrepreneurial growth."
            },
            {
              title: 'Powered by Intelligent Tools',
              body: "At the heart of Future Titans™ is the AI Co-Founder™ — a breakthrough intelligence partner that helps students think sharper, build faster, and innovate with real-world precision."
            },
            {
              title: 'National Recognition & Opportunity',
              body: 'In partnership with The Times of India, Future Titans™ offers students a national platform to showcase their ventures, gain visibility, and learn from global dignitaries. Winners receive ₹10 lakhs in funding.'
            },
            {
              title: 'Building the Leaders of Tomorrow',
              body: "More than a competition, it's a movement — designed to strengthen confidence, collaboration, and purpose-driven leadership in a rapidly accelerating AI world."
            }
          ].map((c, i) => (
            <div className="yp-gc-card" key={i}>
              <h3 className="yp-gc-card-title">{c.title}</h3>
              <p className="yp-gc-card-body">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MENTORSHIP ── */}
      <section className="yp-mentor-section" data-aos="fade-up" data-aos-delay="300">
        <div className="yp-section-label">Why Participate?</div>
        {/* <h2 className="yp-mentor-heading">Why Should Schools and Parents Encourage Participation?</h2> */}
        <p className="yp-mentor-body">
          Entrepreneurship isn't just about launching companies — it's about cultivating a solution-seeking mindset:
          the ability to notice problems, take initiative, and create meaningful impact.
          Through Future Titans™, students learn to transform ideas into real-world projects, gaining the confidence and capability
          to lead in any path they choose — whether as founders or as intrapreneurs shaping innovation within organizations.
        </p>
        <p className="yp-mentor-body yp-italic">
          Because inside every classroom sits a potential pioneer —<br />
          someone who could become the next Ratan Tata or Falguni Nayar, waiting for the right platform to rise.
        </p>

        <div className="yp-divider" />

        <p className="yp-highlight-text">
          Future Titans™ gives them that platform — India's premier stage for young innovators:
        </p>

        <div className="yp-national-block">
          <p className="yp-national-label">National Exposure in association with</p>
          <img className="yp-times-logo" src={times} alt="Times of India Logo" />
        </div>

        <p className="yp-highlight-text">Expert Mentorship from Global Luminaries</p>

        <div className="yp-mentors-grid">
          {[
            { img: mentor3, name: 'Devika Majumder', role: 'Founder & CEO | Wall Street Journal Featured | Nominated by Business Today as one of the most powerful women in business' },
            { img: mentor1, name: 'Fred Katz', role: 'Professor of Entrepreneurship, Johns Hopkins (USA)' },
            // { img: mentor2, name: 'Sandipan Chattopadhyay', role: 'Former CTO Justdial, CEO Xelpmoc' },
            { img: mentor4, name: 'Partha Ghosh', role: 'Founder, Partha Ghosh Leadership Academy IIT Kharagpur | Former McKinsey Senior Partner | Prof. Of Leadership, MIT USA' }
          ].map((m, i) => (
            <div className="yp-mentor-card" key={i}>
              <div className="yp-mentor-img-wrap">
                <img src={m.img} alt={m.name} />
              </div>
              <h4 className="yp-mentor-name">{m.name}</h4>
              <p className="yp-mentor-role">{m.role}</p>
            </div>
          ))}
        </div>

        <div className="yp-mentor-closing">
          Empower one young innovator —<br />and you ignite a ripple that can transform an entire generation.
        </div>
      </section>





      

      {/* ── CONNECT ── */}
      <div className="yp-connect-section" data-aos="fade-up" data-aos-delay="400">
        <div className="yp-section-label">Connect with YoungPreneurs</div>
        {/* <h2 className="yp-connect-title">Connect with YoungPreneurs</h2> */}
        <div className="yp-social-row">
          {[
            { href: 'https://www.youtube.com/@youngpreneursindia4413', img: youtube, alt: 'YouTube' },
            { href: 'https://www.instagram.com/youngpreneurs.ai?igsh=YjN1bG5zeG1xYzV1&utm_source=qr', img: insta, alt: 'Instagram' },
            { href: 'mailto:youngpreneursfuturetitans@gmail.com', img: email, alt: 'Email' },
            { href: 'https://www.linkedin.com/company/youngpreneurs-ind/', img: linkedin, alt: 'LinkedIn' }
          ].map((s, i) => (
            <a key={i} href={s.href} target={s.href.startsWith('mailto') ? undefined : '_blank'} rel="noopener noreferrer" className="yp-social-link">
              <img src={s.img} alt={s.alt} />
            </a>
          ))}
        </div>
      </div>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body { overflow-x: hidden; }

        :root {
          --gold: #dcae1a;
          --black: #0a0a0a;
          --white: #ffffff;
          --off-white: #f7f6f2;
          --gray-100: #f2f2f0;
          --gray-200: #e4e4e0;
          --gray-500: #888884;
          --gray-700: #444440;
          --radius-sm: 4px;
          --radius-md: 10px;
          --radius-lg: 18px;
          --section-pad: 100px 6%;
        }

        .swiper-button-next, .swiper-button-prev { color: var(--white) !important; }
        .swiper-pagination-bullet { background: var(--white) !important; opacity: 0.5; }
        .swiper-pagination-bullet-active { opacity: 1 !important; }

        .yp-section-label {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--gold);
          border: 1px solid var(--gold);
          padding: 4px 14px;
          border-radius: 40px;
          margin-bottom: 20px;
        }
        .yp-label-dark { color: var(--black); border-color: var(--gray-200); }
        .yp-gold { color: var(--gold); }

        /* INTRO */
        .yp-intro-section {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 60px;
          padding: var(--section-pad);
          background: var(--black);
        }
        .yp-intro-left { flex: 1; min-width: 300px; max-width: 600px; }
        .yp-eyebrow {
          display: block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 16px;
        }
        .yp-intro-heading {
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 700;
          color: var(--white);
          line-height: 1.2;
          margin-bottom: 28px;
        }
        .yp-intro-body {
          font-size: 17px;
          color: rgba(255,255,255,0.78);
          line-height: 1.8;
          margin-bottom: 20px;
        }
        .yp-intro-body strong { color: var(--gold); font-weight: 600; }
        .yp-cta-btn {
          margin-top: 12px;
          background: var(--gold);
          color: var(--black);
          padding: 15px 42px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          border: 2px solid var(--gold);
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: background 0.25s, color 0.25s, transform 0.2s;
        }
        .yp-cta-btn:hover {
          background: transparent;
          color: var(--gold);
          transform: translateY(-2px);
        }
        .yp-intro-right { flex: 1; min-width: 280px; max-width: 580px; }
        .yp-intro-img {
          width: 100%;
          border-radius: var(--radius-lg);
          display: block;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
          transition: transform 0.4s;
        }
        .yp-intro-img:hover { transform: scale(1.02); }

        /* ENGINES */
        .yp-engines-section {
          padding: var(--section-pad);
          background: var(--off-white);
          text-align: center;
        }
        .yp-section-heading {
          font-size: clamp(22px, 2.8vw, 34px);
          font-weight: 700;
          color: var(--black);
          max-width: 800px;
          margin: 0 auto 56px;
          line-height: 1.35;
        }
        .yp-engines-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 28px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .yp-engine-card {
          background: var(--white);
          border: 1px solid var(--gray-200);
          border-radius: var(--radius-md);
          padding: 36px 28px;
          text-align: left;
          transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
        }
        .yp-engine-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.09);
          border-color: var(--gold);
        }
        .yp-engine-tag {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          color: var(--gold);
          display: block;
          margin-bottom: 14px;
        }
        .yp-engine-title {
          font-size: 17px;
          font-weight: 700;
          color: var(--black);
          margin-bottom: 14px;
          line-height: 1.35;
        }
        .yp-engine-title::after {
          content: '';
          display: block;
          width: 32px;
          height: 2px;
          background: var(--gold);
          margin-top: 10px;
        }
        .yp-engine-body {
          font-size: 15px;
          color: var(--gray-700);
          line-height: 1.7;
        }
        .yp-engines-footer {
          font-size: 19px;
          color: var(--black);
          line-height: 1.8;
          margin-top: 60px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        /* GAME CHANGER */
        .yp-gc-section {
          padding: var(--section-pad);
          background: var(--black);
          text-align: center;
        }
        .yp-gc-heading {
          font-size: clamp(22px, 2.8vw, 36px);
          font-weight: 700;
          color: var(--white);
          margin: 0 auto 52px;
          max-width: 760px;
          line-height: 1.3;
        }
        .yp-gc-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .yp-gc-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(220,174,26,0.25);
          border-radius: var(--radius-md);
          padding: 32px 24px;
          text-align: left;
          transition: background 0.25s, border-color 0.25s, transform 0.25s;
        }
        .yp-gc-card:hover {
          background: rgba(220,174,26,0.07);
          border-color: var(--gold);
          transform: translateY(-4px);
        }
        .yp-gc-card-title {
          font-size: 17px;
          font-weight: 700;
          color: var(--gold);
          margin-bottom: 12px;
          line-height: 1.3;
        }
        .yp-gc-card-body {
          font-size: 15px;
          color: rgba(255,255,255,0.72);
          line-height: 1.75;
        }

        /* MENTORSHIP */
        .yp-mentor-section {
          padding: var(--section-pad);
          background: var(--off-white);
          text-align: center;
        }
        .yp-mentor-heading {
          font-size: clamp(22px, 2.8vw, 34px);
          font-weight: 700;
          color: var(--black);
          margin-bottom: 32px;
          max-width: 820px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.3;
        }
        .yp-mentor-body {
          font-size: 17px;
          color: var(--gray-700);
          line-height: 1.85;
          max-width: 820px;
          margin: 0 auto 22px;
        }
        .yp-italic { font-style: italic; color: var(--gray-500); }
        .yp-divider {
          width: 60px;
          height: 3px;
          background: var(--gold);
          margin: 48px auto;
          border-radius: 2px;
        }
        .yp-highlight-text {
          font-size: 20px;
          font-weight: 700;
          color: var(--black);
          margin-bottom: 28px;
        }
        .yp-national-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          margin: 32px auto;
        }
        .yp-national-label { font-size: 16px; color: var(--gray-500); }
        .yp-times-logo {
          width: 180px;
          filter: grayscale(100%);
          opacity: 0.75;
          transition: filter 0.3s, opacity 0.3s;
        }
        .yp-times-logo:hover { filter: grayscale(0%); opacity: 1; }
        .yp-mentors-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 28px;
          max-width: 1100px;
          margin: 48px auto 0;
        }
        .yp-mentor-card {
          background: var(--white);
          border: 1px solid var(--gray-200);
          border-radius: var(--radius-md);
          padding: 36px 22px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
        }
        .yp-mentor-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 36px rgba(0,0,0,0.1);
          border-color: var(--gold);
        }
        .yp-mentor-img-wrap {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid var(--gold);
          flex-shrink: 0;
        }
        .yp-mentor-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .yp-mentor-name {
          font-size: 17px;
          font-weight: 700;
          color: var(--black);
          text-align: center;
        }
        .yp-mentor-role {
          font-size: 13px;
          color: var(--gray-500);
          text-align: center;
          line-height: 1.55;
        }
        .yp-mentor-closing {
          font-size: clamp(10px, 2.5vw, 25px);
          // font-weight: 700;
          color: var(--black);
          margin-top: 80px;
          // line-height: 1.5;
          // max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        /* CONNECT */
        .yp-connect-section {
          padding: var(--section-pad);
          background: var(--black);
          text-align: center;
        }
        .yp-connect-title {
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 700;
          color: var(--white);
          margin-bottom: 52px;
        }
        .yp-social-row {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px;
        }
        .yp-social-link {
          display: block;
          border-radius: var(--radius-md);
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
        }
        .yp-social-link:hover {
          transform: translateY(-4px);
          border-color: var(--gold);
          box-shadow: 0 8px 28px rgba(220,174,26,0.18);
        }
        .yp-social-link img {
          width: 200px;
          height: auto;
          display: block;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          :root { --section-pad: 64px 5%; }
          .yp-intro-section { gap: 40px; }
          .yp-social-link img { width: 130px; }
          .yp-mentor-closing { margin-top: 52px; }
        }
        @media (max-width: 480px) {
          .yp-social-link img { width: 110px; }
        }
      `}</style>
    </>
  );
};

export default Home;