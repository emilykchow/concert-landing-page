import React from "react";
import "./Review.css";

function Review() {
  return (
    <div className="Review-wrapper" id="reviews">
      <div className="review-title">
        <h2>Reviews</h2>
      </div>

      <div className="reviews-container">
        <div className="review-container">
          <div className="top-container">
            <div className="top-left">
              <img src="https://pyxis.nymag.com/v1/imgs/7d8/8ef/01fa80b575d4538e91ec37b5b3b1f2c660-06-britney-spears-08.rsquare.w1200.jpg"></img>

              <div className="reviewer-info">
                <p className="red-text">
                  <strong>Britney Spears</strong>
                </p>
                <p>Artist</p>
                <p>Jul 2019</p>
              </div>
            </div>
            <div className="stars-container">
              <i className="fa fa-solid fa-star fa-lg"></i>
              <i className="fa fa-solid fa-star fa-lg"></i>
              <i className="fa fa-solid fa-star fa-lg"></i>
              <i className="fa fa-solid fa-star fa-lg"></i>
              <i className="fa fa-solid fa-star fa-lg"></i>
            </div>
          </div>

          <div className="bottom-container">
            <p>Love it, it’s the best. I can’t live without it!</p>
          </div>
        </div>

        <div className="review-container">
          <div className="top-container">
            <div className="top-left">
              <img src="https://images.squarespace-cdn.com/content/v1/582a3664b3db2b4f0a5c706b/1541961557975-2Q7NYY6A5QYGLXZYYNZQ/scooter+braun.jpg"></img>

              <div className="reviewer-info">
                <p className="red-text">
                  <strong>Scooter Braun</strong>
                </p>
                <p>Talent Manager</p>
                <p>Jul 2019</p>
              </div>
            </div>
            <div className="stars-container">
              <i className="fa fa-solid fa-star fa-lg"></i>
              <i className="fa fa-solid fa-star fa-lg"></i>
              <i className="fa fa-solid fa-star fa-lg"></i>
              <i className="fa fa-solid fa-star fa-lg"></i>
              <i className="fa fa-solid fa-star fa-lg"></i>
            </div>
          </div>

          <div className="bottom-container">
            <p>An amazing user experience. I love it</p>
          </div>
        </div>

        <div className="review-container">
          <div className="top-container">
            <div className="top-left">
              <img src="https://cdn.smehost.net/2020sonymusiccouk-ukprod/wp-content/uploads/2017/05/c16367f4d6cf286d282eaffd0d3b9928-800x800.jpg"></img>

              <div className="reviewer-info">
                <p className="red-text">
                  <strong>DJ Khalid</strong>
                </p>
                <p>Producer</p>
                <p>Jul 2019</p>
              </div>
            </div>
            <div className="stars-container">
              <i className="fa fa-solid fa-star fa-lg"></i>
              <i className="fa fa-solid fa-star fa-lg"></i>
              <i className="fa fa-solid fa-star fa-lg"></i>
              <i className="fa fa-solid fa-star fa-lg"></i>
              <i className="fa fa-solid fa-star fa-lg"></i>
            </div>
          </div>

          <div className="bottom-container">
            <p>This is sick! I'm Obsessed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
