import React, { useState } from "react";
import "./style.css";

const Intro = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <>

      {/* <!-- end of icon section --> */}
      <div classNameName="intro-content">
        <div className="row intro-text">

          <p className="headingInfo">
            I create dynamic and easy to use online experiences. I'm passionate
            about approaching coding challenges from different angles and
            collaborating with others to develop interactive and meaningful web
            applications.
          </p>
        </div>

        <div className="row">
          <section className="col-6 links">
            <div className="idLinks">
              <a href="#about">
                <button className="contact shuttle">About Me</button>
              </a>
            </div>

          </section>
        </div>
      </div>
    </>
  );
};

export default Intro;
