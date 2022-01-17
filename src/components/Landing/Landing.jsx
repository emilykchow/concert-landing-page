import React from "react";
import "./Landing.css";
import { Link } from "react-scroll";

import { Carousel } from "react-bootstrap";

function Landing() {
  return (
    <div className="Landing-wrapper" id="home">
      <div className="intro-container">
        <h2>INTERACTIVE CONCERT EXPERIENCES</h2>
        <p>
          Experience your favourite artists like never before and from the
          comfort of your own home.{" "}
          <span className="link-to-pricing">
            <Link
              activeClass="active"
              className="nav-item-text"
              to="pricing"
              spy={true}
              smooth={true}
              duration={500}
              offset={-72}
            >
              Try it now
            </Link>
          </span>
        </p>
      </div>
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/MnGjT6K/Image-1.png"
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/S66xWrf/Image-2.png"
              alt="Second slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/gVwS2B9/Image-3.png"
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/Yhn00Tz/Image-4.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Landing;
