import React from "react";
import "./style.css";

const Contact = () => {
  return (
    <div>
      <h2 className="contactTitle">Contact</h2>
      <section class="contact-area">
        <div class="contact-area">
          <div class="social-icon">
            <a
              class="fa fa-linkedin fa-2x"
              href="https://www.linkedin.com/in/eric-hunter-b7a637183?trk=profile-badge"
            ></a>

            <a
              class="fa fa-github fa-2x"
              href="https://github.com/ehunter7"
            ></a>
          </div>
          <div class="resumeDiv">
            <a href="../Assets/docs/Resume.pdf">
              <button class="contact resumeBtn">My Resume</button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
