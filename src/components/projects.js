import React from "react";
import "./style.css";
import gentle_drinker_login_screenshot from "../Assets/Images/gentle_drinker_login_screenshot.png";
import GentleDrinker_img from "../Assets/Images/gentle_drinker_main_screenshot.png";
import CtyFaktz_img from "../Assets/Images/CtyFaktz_screenshot.png";
import Burger_screenshot from "../Assets/Images/Burger_screenshot.png";

import { Carousel } from "react-bootstrap";

const Projects = () => {
  return (
    <section className="container">
      <h2 id="work" className="work work-header mt-5">
        Work
      </h2>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={gentle_drinker_login_screenshot}
                alt="First slide"
              />
              <Carousel.Caption className="d-none d-md-block">
                <h3>
                  <a href="https://gentledrinkers.herokuapp.com/">
                    gentledrinkers.herokuapp.com
                  </a>
                </h3>
                <p>
                  <a href="https://github.com/ehunter7/beerapp">GitHub Repo</a>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={GentleDrinker_img}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>
                  <a href="https://gentledrinkers.herokuapp.com/">
                    gentledrinkers.herokuapp.com
                  </a>
                </h3>
                <p>
                  <a href="https://github.com/ehunter7/beerapp">GitHub Repo</a>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={CtyFaktz_img}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>
                  <a href="https://charlestbell.github.io/ctyFaktz/">
                    ctyFakytz
                  </a>
                </h3>
                <p>
                  <a href="https://github.com/ehunter7/ctyFaktz">GitHub Repo</a>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={Burger_screenshot}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3></h3>
                <p>
                  <a href="https://github.com/ehunter7/Eat-Da-Burger">
                    GitHub Repo
                  </a>
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Projects;
