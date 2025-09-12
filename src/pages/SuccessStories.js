import React, { useState ,useRef} from "react";

import group1 from '../assets/group1.jpg';
import group2 from '../assets/group2.jpg';
import group3 from '../assets/group3.jpg';

import speech1 from '../assets/speech1.jpg';
import speech2 from '../assets/speech2.jpg';
import speech3 from '../assets/speech3.jpg';

import Mark from '../assets/Mark-Zuckerberg.png';
import Advait from '../assets/Advait-Thakur.png';
import kaivalya from '../assets/kaivalya.png';
import Aadithyan from '../assets/Aadithyan.png';

import successStoriesHeaderBg from "../assets/successStoriesHeaderBg.jpg"


 

const demoImages1 = [group1, group2, group3];
const demoImages2 = [speech1, speech2, speech3];



const testimonials = [
  {
    name: "Advait Thakur (Apex Infosys India)",
    image:Advait,
      
    stars: 5,
    text: "Advait Thakur founded Apex Infosys India at 12, pioneering AI and cybersecurity solutions. By 16, he became a Google-certified developer. Now 20, he continues to drive innovation, inspiring young tech entrepreneurs worldwide.",
  },
  {
    name: "Mark Zuckerberg (Facebook)",
    image:Mark,
      
    stars: 5,
    text: "Mark Zuckerberg founded Facebook at 19, transforming social networking forever. From a college project to a global tech giant, he now leads Meta in 2025, driving innovations in AI, virtual reality, and the metaverse.",
  },
  {
    name: "Kaivalya Vohra (Zepto) ",
    image:kaivalya,
      
    stars: 5,
    text: "Kaivalya Vohra co-founded Zepto at 19, disrupting India’s quick-commerce space with 10-minute grocery deliveries. By 21, he became one of India’s youngest entrepreneurs on the Hurun Rich List, shaping the future of e-commerce.",
  },
  {
    name: "Aadithyan Rajesh (Trinet Solutions)  ",
    image:Aadithyan,
      
    stars: 5,
    text: "Aadithyan Rajesh started coding at 5, built his first app at 9, and founded Trinet Solutions at 13. Now 19, he continues to lead the company, delivering cutting-edge digital solutions while inspiring young entrepreneurs globally.",
  },
];


const SuccessStories = () => {
  const carousel1Ref = useRef(null);
  const carousel2Ref = useRef(null);

  const scrollCarousel = (ref, direction) => {
    const scrollAmount = 420;
    if (ref.current) {
      ref.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <style>{`

.hero-section {
  background-image: url(${successStoriesHeaderBg});
  background-size: contain;
  background-position: center top; /* Align from top */
  height: 520px;
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












 .future-titans-container {
          text-align: center;
          padding: 40px 20px;
          margin-top:80px
        }

        .future-titans-heading {
          font-size: 2.5rem;
          font-weight: bold;
          color: #e60023;
          margin-bottom: 10px;
        }

        .future-titans-subtitle {
          font-size: 1.25rem;
          color: #2f4f4f;
        }

        @media (max-width: 768px) {
          .future-titans-heading {
            font-size: 2rem;
          }

          .future-titans-subtitle {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .future-titans-heading {
            font-size: 1.6rem;
          }

          .future-titans-subtitle {
            font-size: 0.9rem;
          }
        }




        .section-container {
          display: flex;
          flex-direction: column;
          width: 90%;
          margin: auto;
          gap: 50px;
        }

        .section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }

        .section.reverse {
          flex-direction: row-reverse;
        }

        .text-content {
          flex: 1;
          min-width: 280px;
          padding: 10px;
        }

        .text-content h2 {
          color: #e60023;
          font-size: 1.5rem;
          margin-bottom: 10px;
        }

        .text-content p {
          color: #444;
          line-height: 1.6;
        }

       .carousel-container {
  flex: 1;
  position: relative;
  min-width: 300px;
  max-width: 700px;
  overflow: hidden; 
  top:50px;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease;
  width: 100%;
  overflow: hidden;
}

.carousel-track img {
  width: 100%;
  height: auto;
  flex-shrink: 0;
  border-radius: 8px;
}


        .carousel-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: rgba(0, 0, 0, 0.5);
          border: none;
          color: white;
          padding: 8px 12px;
          cursor: pointer;
          z-index: 1;
        }

        .carousel-button.left {
          left: 0;
        }

        .carousel-button.right {
          right: 0;
        }

        @media (max-width: 768px) {
          .section, .section.reverse {
            flex-direction: column;
          }

          .carousel-button {
            display: none;
          }
        }
          .belief-section {
          padding: 40px 20px;
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .belief-title {
          font-size: 2.2rem;
          font-weight: bold;
          color: #e60023;
          margin-bottom: 20px;
        }

        .belief-description {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #555;
          margin-bottom: 30px;
        }

        .belief-highlight {
          font-size: 1.3rem;
          font-weight: bold;
          color: #2f4f4f;
        }

        @media (max-width: 768px) {
          .belief-title {
            font-size: 1.8rem;
          }

          .belief-description {
            font-size: 1rem;
          }

          .belief-highlight {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .belief-title {
            font-size: 1.5rem;
          }

          .belief-description {
            font-size: 0.95rem;
          }

          .belief-highlight {
            font-size: 1rem;
          }
        }
           .testimonial-container {
          background-color: #f9f9f9;
          padding: 60px 20px;
          text-align: center;
        }

        .testimonial-card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          padding: 30px;
          max-width: 600px;
          margin: 0 auto;
          position: relative;
        }

     .testimonial-image {
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 50%;
  margin: 20px auto; /* Top/bottom margin + horizontal centering */
  display: block; /* Allows margin: auto to center the image */
}

        .testimonial-name {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 10px;
          color: #2c3e50;
        }

        .testimonial-stars {
          color: #f7c948;
          font-size: 1.2rem;
          margin-bottom: 15px;
        }

        .testimonial-text {
          font-size: 1rem;
          color: #555;
          font-style: italic;
          line-height: 1.6;
        }

        .nav-buttons {
          margin-top: 30px;
        }

        .arrow-btn {
          font-size: 1.8rem;
          background: none;
          border: none;
          cursor: pointer;
          color: #e60023;
          margin: 0 20px;
          transition: transform 0.2s;
        }

        .arrow-btn:hover {
          transform: scale(1.2);
        }

        @media (max-width: 600px) {
          .testimonial-card {
            padding: 20px;
          }

          .testimonial-image {
            width: 100px;
            height: 100px;
          }

          .testimonial-name {
            font-size: 1.1rem;
          }

          .testimonial-text {
            font-size: 0.95rem;
          }
        }
      `}</style>

<div className="hero-section">
        {/* You can place overlay text, buttons, or other elements here */}
      </div>


<div className="future-titans-container">
        <h2 className="future-titans-heading">Future Titans in the Making</h2>
        <p className="future-titans-subtitle">Success isn’t born—it’s built.</p>
      </div>


      <div className="section-container">

        {/* First Section */}
        <div className="section">
          <div className="text-content">
            <h2>Igniting Young Minds with Entrepreneurial Spirit</h2>
            <p>
              At Youngpreneurs, we bring your child dynamic workshops, immersive camps, and hands-on experiences designed to unlock their true potential. By fostering innovation, problem-solving, and leadership, we help them build an entrepreneurial mindset and become responsible global citizens.
            </p>
          </div>
          <div className="carousel-container">
            <button className="carousel-button left" onClick={() => scrollCarousel(carousel1Ref, "left")}>&#8249;</button>
            <div className="carousel-track" ref={carousel1Ref}>
              {demoImages1.map((src, index) => (
                <img key={index} src={src} alt={`carousel-1-${index}`} />
              ))}
            </div>
            <button className="carousel-button right" onClick={() => scrollCarousel(carousel1Ref, "right")}>&#8250;</button>
          </div>
        </div>

        {/* Second Section */}
        <div className="section reverse">
          <div className="text-content">
            <h2>Camp Delta E: Where Ideas Take Flight</h2>
            <p>
              At Camp Delta E, students don’t just learn about entrepreneurship—they experience it! Through interactive lessons, engaging activities, and a real-world business simulation, they develop critical thinking, leadership, and communication skills.
            </p>
          </div>
          <div className="carousel-container">
            <button className="carousel-button left" onClick={() => scrollCarousel(carousel2Ref, "left")}>&#8249;</button>
            <div className="carousel-track" ref={carousel2Ref}>
              {demoImages2.map((src, index) => (
                <img key={index} src={src} alt={`carousel-2-${index}`} />
              ))}
            </div>
            <button className="carousel-button right" onClick={() => scrollCarousel(carousel2Ref, "right")}>&#8250;</button>
          </div>
        </div>
{/* Third Section */}
        <div className="section">
          <div className="text-content">
            <h2>Igniting Young Minds with Entrepreneurial Spirit</h2>
            <p>
              At Youngpreneurs, we bring your child dynamic workshops, immersive camps, and hands-on experiences designed to unlock their true potential. By fostering innovation, problem-solving, and leadership, we help them build an entrepreneurial mindset and become responsible global citizens.
            </p>
          </div>
          <div className="carousel-container">
            <button className="carousel-button left" onClick={() => scrollCarousel(carousel1Ref, "left")}>&#8249;</button>
            <div className="carousel-track" ref={carousel1Ref}>
              {demoImages1.map((src, index) => (
                <img key={index} src={src} alt={`carousel-1-${index}`} />
              ))}
            </div>
            <button className="carousel-button right" onClick={() => scrollCarousel(carousel1Ref, "right")}>&#8250;</button>
          </div>
        </div>

        
      </div>

      <div className="belief-section">
        <h2 className="belief-title">Greatness Begins with Belief</h2>
        <p className="belief-description">
          Every teen entrepreneur started with a spark—an idea, a dream, and most importantly, someone who believed in them. From Mark Zuckerberg launching Facebook as a teenager to Aadithyan Rajesh building his first company at 13, these young changemakers achieved greatness because someone saw their potential before the world did and gave them the confidence to pursue their vision.
        </p>
        <p className="belief-highlight">
          NOW, IMAGINE WHAT YOUR CHILD COULD ACHIEVE WITH THAT SAME BELIEF. THEIR FUTURE STARTS HERE!
        </p>
      </div>

      <div className="testimonial-container">
        <div className="testimonial-card">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="testimonial-image"
          />
          <div className="testimonial-name">{testimonials[currentIndex].name}</div>
          <div className="testimonial-stars">
            {"★".repeat(testimonials[currentIndex].stars)}
          </div>
          <div className="testimonial-text">{testimonials[currentIndex].text}</div>
        </div>

        <div className="nav-buttons">
          <button className="arrow-btn" onClick={handlePrev}>
            &#10094;
          </button>
          <button className="arrow-btn" onClick={handleNext}>
            &#10095;
          </button>
        </div>
      </div>
    </>
  );
};

export default SuccessStories;
