import React, { useState, useEffect } from "react";
import "./index.css";
import visionImg from "../../assets/vision.jpeg";
import missionImg from "../../assets/misssion.jpg";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="aboutus-container poppins-regular">
      <div className="aboutintro-img">
        <div className="about-title ">About Us</div>
      </div>

      <div className="aboutintro-section">
        <div>
          <div className="about-paraTitle">
            Welcome to CareerNiTi; your singular solution for a bright future.
          </div>
          <div className="about-paraText">
            We have been transforming students' confusion into clarity since
            2021 by providing comprehensive career guidance and admission
            support across India. Through personalised mentorship and a
            compassionate approach, we help students embark on a journey of
            self-discovery. By understanding their strengths and interests, we
            empower them to make informed decisions about their future.
            <br />
            <br />
            We offer career guidance, career counselling, exam guidance and
            counselling, psychological counselling, and admission counselling,
            making course and college selection easy for students. Our site
            provides a personalised experience based on educational background
            and career interest, enabling well-informed decisions.
            Decision-making is empowered with easy access to detailed
            information on career choices, courses, exams, colleges, admission
            criteria, eligibility, fees, placement statistics, rankings,
            reviews, scholarships, and the latest updates. <br /> <br />
            With a legacy of commitment and excellence, we have provided
            counselling to over 2000 students, guided more than 10,000 students,
            and connected with 200 classes. This fosters a legacy of
            personalised support and impactful educational experiences as a
            trusted educational partner.
          </div>
        </div>
      </div>

      <div className="vis-misContainer">
        <div className="vis-Section">
          <div className="visleft-section">
            <div className="vision-title">Our Vision</div>
            <br />
            <div className="vision-text">
              At CareerNiTi, our bold vision is to revolutionise the Indian
              education landscape by decolonising the mindset of our youth. We
              are on a mission to break free from traditional confines,
              empowering students across India to embrace their unique
              identities, ideas, and aspirations. Through a holistic approach to
              the career-to-admission journey, we guide and mentor our youth to
              transcend limitations, fostering a generation of independent
              thinkers, innovators, and change-makers. Together, we aim for a
              transformative path towards a liberated and inclusive educational
              future, where every student's potential is realised and
              celebrated.
            </div>
          </div>

          <div className="visright-section">
            <img className="vision-Image" src={visionImg} alt="" />
          </div>
        </div>

        <div className="mis-Section">
          <div className="misleft-section">
            <img className="mission-Image" src={missionImg} alt="" />
          </div>
          <div className="misright-section">
            <div className="vision-title">Our Mission</div>
            <br />
            <div className="vision-text">
              At CareerNiTi, our purpose is deeply rooted in the experiences of
              our founders, who emerged from middle-class backgrounds and
              navigated the challenges of education. With an unwavering
              commitment to pay forward the opportunities they fought for, our
              mission is to provide comprehensive career guidance and admission
              support to students across India. Through personalised mentorship
              and a compassionate approach, we aspire to break down barriers,
              shatter financial constraints, and empower every aspiring student
              to access quality education. Our purpose-driven journey is a
              testament to the resilience of the human spirit, dedicated to
              shaping a future where no dream is too big and no obstacle
              insurmountable.
            </div>
          </div>
          <div className="additional-misleft-section">
            <img className="mission-Image" src={missionImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
