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
              src="https://destination-ontario-prod.s3.ca-central-1.amazonaws.com/files/s3fs-public/2021-10/great-outdoo-venues-live-music-lovers.jpg?VersionId=p7D59VP49xcld3mv_TGw_9vDet9fqD3o"
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Classical_spectacular10.jpg"
              alt="Second slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media4.s-nbcnews.com/i/newscms/2021_31/3496464/210804-live-music-comeback-mb-1314_7fceb566941001f336d12735ffbfb5d2.jpg"
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://cdn.britannica.com/58/155258-050-2F8189A9/Symphony-concert-Svetlanov-Hall-Moscow-International-House.jpg"
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
