import React from "react";
import "./style.css";

const About = () => {
  return (
    <section className="about-me" id="about">
      <h2 className="about-me-header mt-5">About Me</h2>
      <section className="box-container">
        <div className="box">
          <h3>Achievements</h3>
          <p>
            Certificate in full-stack web development from University of
            California, Riverside. Programming certification from Mt. San
            Jacinto College. Pursuing a Bachelor’s degree in Computer Science.
          </p>
        </div>
        <div className="box">
          <h3>Skills</h3>
          <p>
            Technical programming skills in ReactJS, Javascript, C++, Node Js,
            Express, MongoDB, HTML5, CSS3, JQuery, Bootstrap, Firebase, MySQL, &
            Handelbars.js.
          </p>
        </div>
        <div className="box">
          <h3>Experience</h3>
          <p>
            Successfully implemented new software and procedures at my current
            organization. Actively manage day to day operations, ensuring weekly
            goals are met and risks are mitigated.
          </p>
        </div>
      </section>
    </section>
  );
};

export default About;
