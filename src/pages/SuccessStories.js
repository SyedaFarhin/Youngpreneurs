import React, { useRef } from "react";

import group1 from '../assets/group1.jpg';
import group2 from '../assets/group2.jpg';
import group3 from '../assets/group3.jpg';

import speech1 from '../assets/speech1.jpg';
import speech2 from '../assets/speech2.jpg';
import speech3 from '../assets/speech3.jpg';

const demoImages1 = [group1, group2, group3];
const demoImages2 = [speech1, speech2, speech3];


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

  return (
    <>
      <style>{`
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
  max-width: 400px;
  overflow: hidden; /* Hide overflowing images */
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
      `}</style>

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

      </div>
    </>
  );
};

export default SuccessStories;
