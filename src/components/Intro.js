import React from "react";
import "./style.css";

const Intro = () => {
  return (
    <div classNameName="introText">
      <h1 className="headingInfo">
        Hello, I'm Eric Hunter
        <br />
        Web Developer
      </h1>
      <p className="headingInfo">
        I create dynamic and easy to use online experiences. I'm passionate
        about approaching coding challenges from different angles and
        collaborating with others to develop interactive and meaningful web
        applications.
      </p>
      <div className="row">
        <section className="col-6 links">
          <div className="idLinks">
            <a href="#about">
              <button className="contact">About Me</button>
            </a>
          </div>
          <div className="idLinks">
            <a href="#work">
              <button className="contact">My Work</button>
            </a>
          </div>
          <div className="idLinks">
            <a href="./Assets/docs/Resume.pdf">
              <button className="contact">My Resume</button>
            </a>
          </div>
        </section>
        <section className="col-6 links">
          {/* <!-- this is the beginning of the icons --> */}

          <div className="social-icon">
            <a
              className="fa fa-linkedin fa-2x"
              href="https://www.linkedin.com/in/eric-hunter-b7a637183?trk=profile-badge"
            ></a>
          </div>
          <div className="social-icon">
            <a
              className="fa fa-github fa-2x"
              href="https://github.com/ehunter7"
            ></a>
          </div>
          {/* </div> */}
        </section>
        {/* <!-- end of icon section --> */}
      </div>
    </div>
  );
};

export default Intro;
