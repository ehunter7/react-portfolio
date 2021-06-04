import React from "react";
import { Carousel } from "react-bootstrap";
import "./style.css";

const ImageCarousel = ({ images }) => {
  return (
    <Carousel>
      {images.map((img) => {
        return img.map((image) => {
          return (
            <Carousel.Item>
              <img className="projectImage" src={image} />
            </Carousel.Item>
          );
        });
      })}
    </Carousel>
  );
};

export default ImageCarousel;
