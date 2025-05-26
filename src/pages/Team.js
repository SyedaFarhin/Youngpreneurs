import React from "react";
import devika from '../assets/devika.jpeg';
import fred from '../assets/fred.jpg';
import sandipan from '../assets/sandipan.jpeg'; 
import suman from '../assets/suman.jpeg';
import partha from '../assets/partha.jpeg';
import juliya from '../assets/juliya.jpeg';
import pankaj from '../assets/pankaj.jpg';
import jayesh from '../assets/jayesh.png';
import sachin from '../assets/sachin.jpeg';


const Team = () => {
  const teamMembers = [
    {
      name: "Devika Majumder",
      title: "Founder & CEO",
      description:
        "Wall Street Journal Featured | TedX Speaker | Nominated by Business Today as one of the most powerful women in business | CEO, Global Influencers Hub | Clark University",
      image: devika,
      linkedin: "#",
    },
    {
      name: "Fred Katz",
      title: "Senior Advisor",
      description:
        "Professor of Entrepreneurship, Johns Hopkins, USA | President / CEO, Wise Products Distributors",
      image: fred,
      linkedin: "#",
    },
    {
      name: "Sandipan Chattopadhyay",
      title: "Chief Mentor",
      description:
        "Ex-CTO Justdial | CEO & MD Xelpmoc | IIM | Indian Statistical Institute",
      image: sandipan,
      linkedin: "#",
    },
    {
      name: "Suman Bose",
      title: "Advisor",
      description:
        "Founder, Project KREEA | Ex-CEO & MD Siemens | Building India's Deeptech Hub",
      image: suman, // Replace with real image path or import
      linkedin: "#",
    },
    {
      name: "Partha Ghosh",
      title: "Advisor",
      description:
        "Founder, Partha Ghosh Leadership Academy IIT Kharagpur | Ex - Senior Partner McKinsey & Company | Ex -- MIT | IIT Alumni MD, Partha S Ghosh & Associates | Prof. Of Leadership MIT (Massachusetts Institute of Technology)",
      image: partha,
      linkedin: "#",
    },
    {
      name: "Dr. Julia Stamm",
      title: "Advisor",
      description:
        "Dr. Julia Stamm | Founder & CEO, She Shapes AI, London, UK | The Futures Project | Responsible Tech and AI for Impact | Fellow, Royal Society of Arts | Fellow, Centre for Digital Governance, Hertie School",
      image: juliya,
      linkedin: "#",
    },
    {
      name: "Pankaj Dubey",
      title: "Advisor",
      description:
        "Former Country Head & Managing Director, Polaris India | Founder, DSPN Consulting | Top 50 Indian Icon | ET Global Visionary Leader | HRD India 2025",
      image: pankaj, // Replace with actual image path
      linkedin: "#",
    },
    {
      name: "Jayesh Ranjan",
      title: "Advisor",
      description:
        "Special Chief Secretary, Information Technology (IT), Industries and Commerce (I&C) and Sports, Government of Telangana, Hyderabad (INDIA)",
      image: jayesh,
      linkedin: "#",
    },
    {
      name: "Sachin Kapoor",
      title: "Advisor",
      description:
        "Former Sr Director & Head of Business Development, LinkedIn India | Ex- Yahoo | Ex- Samsung | Founder & CEO Trumsy.Ai",
      image: sachin,
      linkedin: "#",
    },
  ];
  return (
    <div className="team-section">
      <h2 className="team-heading">MEET THE TEAM</h2>
      <p className="team-subtext">
        Great mentors don’t just teach; they inspire, guide, and unlock potential. Meet the experts shaping the entrepreneurs of tomorrow!
      </p>

      <div className="team-container">
      {teamMembers.map((member, index) => (
        <div key={index} className="team-card">
          <img src={member.image} alt={member.name} className="team-image" />
          <a href={member.linkedin} className="linkedin-icon" target="_blank" rel="noreferrer">
            <span>in</span>
          </a>
          <div className="team-info">
            <h4 className="team-title">{member.title}</h4>
            <h3 className="team-name">{member.name}</h3>
            <p className="team-description">{member.description}</p>
          </div>
        </div>
      ))}
      </div>



      <style>{`
        .team-section {
          text-align: center;
          padding: 60px 20px;
          background-color: #ffffff;
        }

        .team-heading {
          color: #e63946;
          font-size: 32px;
          font-weight: bold;
          margin-top: 50px;
          text-transform: uppercase;
        }

        .team-subtext {
          color: #264653;
          font-size: 18px;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .team-heading {
            font-size: 26px;
          }

          .team-subtext {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .team-heading {
            font-size: 22px;
          }

          .team-subtext {
            font-size: 15px;
            padding: 0 10px;
          }
        }
          .team-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
          padding: 40px 20px;
          background: #fff;
        }

        .team-card {
          background-color: #fff;
          border-radius: 12px;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
          max-width: 280px;
          width: 100%;
          text-align: center;
          overflow: hidden;
          position: relative;
          padding-bottom: 20px;
        }

        .team-image {
          width: 100%;
          height: auto;
          display: block;
        }

        .linkedin-icon {
          position: absolute;
         margin-top: 10px;
          left: 50%;
          transform: translateX(-50%);
          background-color: #204d40;
          color: white;
          font-size: 14px;
          border-radius: 50%;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        }

        .team-info {
          padding: 20px;
        }

        .team-title {
          font-size: 16px;
          font-weight: bold;
          color: #2a6b4c;
          margin-top: 30px;
          margin-bottom: 8px;
        }

        .team-name {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
          color: #222;
        }

        .team-description {
          font-size: 14px;
          color: #555;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .team-card {
            max-width: 100%;
            margin-bottom: 30px;
          }

          .linkedin-icon {
            bottom: 100px;
          }
        }

        @media (max-width: 480px) {
          .team-info {
            padding: 15px;
          }

          .team-title {
            font-size: 14px;
          }

          .team-name {
            font-size: 16px;
          }

          .team-description {
            font-size: 13px;
          }

          .linkedin-icon {
            width: 24px;
            height: 24px;
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default Team;
