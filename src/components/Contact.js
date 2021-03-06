import React from "react";
import "./style.css";
import ResumePDF from "../Assets/docs/Resume.pdf";

const Contact = () => {
  return (
    <div>
      <h2 className="contactTitle">Contact</h2>
      <section class="contact-area">
        <div class="contact-area">
          <div class="social-icon">
            <a
              class="fa fa-linkedin fa-2x shuttle"
              href="https://www.linkedin.com/in/eric-hunter-b7a637183?trk=profile-badge"
            ></a>
          </div>
          <div class="social-icon">
            <a
              class="fa fa-github fa-2x shuttle"
              href="https://github.com/ehunter7"
            ></a>
          </div>
          <div class="resumeDiv">
            <a href={ResumePDF} target="_blank" rel="noopener noreferrer">
              <button class="contact resumeBtn shuttle">My Resume</button>
            </a>
          </div>
          <div class="resumeDiv">
            <a
              href="mailto:ehunter7@live.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button class="contact resumeBtn shuttle">
                Ehunter@live.com
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
