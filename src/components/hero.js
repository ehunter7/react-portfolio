import "./style.css";
import ResumePDF from "../Assets/docs/Resume.pdf";

const Hero = () => {
  return (
    <div className="hero-image">
      <section className="links">
        {/* <!-- this is the beginning of the icons --> */}

        <div className="idLinks">
          <a href={ResumePDF} target="_blank" rel="noopener noreferrer">
            <button className="contact shuttle">My Resume</button>
          </a>
        </div>

        <div className="social-icon">
          <a
            className="fa fa-linkedin shuttle"
            href="https://www.linkedin.com/in/eric-hunter-b7a637183?trk=profile-badge"
          ></a>
        </div>
        <div className="social-icon">
          <a
            className="fa fa-github shuttle"
            href="https://github.com/ehunter7"
          ></a>
        </div>
      </section>
      <div className="headingInfo mt-5">
        <div>
          <h1>
            Hey, i'm <span className="name">Eric !</span>
          </h1>
        </div>

        <div className="work-button">
          <a href="#work">
            <button className="contact">view my work</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
