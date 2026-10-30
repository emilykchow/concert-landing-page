import React from "react";
import "./Review.css";

function Review() {
  const REVIEWS = [
    {
      name: "Britney Spears",
      occupation: "Teacher",
      date: "Jul 2019",
      comment: "Love it, it’s the best. I can’t live without it!",
      profilePicture:
        "https://pyxis.nymag.com/v1/imgs/7d8/8ef/01fa80b575d4538e91ec37b5b3b1f2c660-06-britney-spears-08.rsquare.w1200.jpg",
    },
    {
      name: "Scooter Braun",
      occupation: "Cashier",
      date: "Jul 2019",
      comment: "An amazing user experience. I love it",
      profilePicture:
        "https://images.squarespace-cdn.com/content/v1/582a3664b3db2b4f0a5c706b/1541961557975-2Q7NYY6A5QYGLXZYYNZQ/scooter+braun.jpg",
    },
    {
      name: "DJ Khalid",
      occupation: "Priest",
      date: "Jul 2019",
      comment: "Emily's cats made an appearance, they were so cute!",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe0J7kgPbuUN-F6Fe5kvhIax14FmrwztCdgfn1ZJuZiA&s=10",
    },
    {
      name: "Justin Bieber",
      occupation: "Basketball Coach",
      date: "Jul 2019",
      comment: "I showed up to see Emily's cats.",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJi3UqdyDQMdkRSfrJz8gmUFc42U5QWu7ugHwzkLgerg&s=10",
    },
    {
      name: "Selena Gomez",
      occupation: "Dentist",
      date: "Jul 2019",
      comment: "I had an amazing concert experience with Justin and Hailey!",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr-OXHE9z0k89fy9ZWHfOh9xoHGKV4yXmO9VtdbduJPA&s=10",
    },
    {
      name: "Benny Blanco",
      occupation: "Photographer",
      date: "Jul 2019",
      comment:
        "I lost Selena in the crowd but I made new friends along the way. Amazing venue and good vibes!",
      profilePicture:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmWEQoGjhAJ2tu0TJYbOyWnP3xuPnKbYG5pQAGxC9AQw&s=10",
    },
  ];

  return (
    <div className="Review-wrapper" id="reviews">
      <div className="review-title">
        <h2>Reviews</h2>
      </div>

      <div className="reviews-container">
        {REVIEWS.map((review) => (
          <div className="review-container">
            <div className="top-container">
              <div className="top-left">
                <img src={review.profilePicture} alt={review.name}></img>

                <div className="reviewer-info">
                  <div className="reviewer-heading">
                    <strong>{review.name}</strong>

                    <div className="stars-container">
                      <i className="fa fa-solid fa-star fa-lg"></i>
                      <i className="fa fa-solid fa-star fa-lg"></i>
                      <i className="fa fa-solid fa-star fa-lg"></i>
                      <i className="fa fa-solid fa-star fa-lg"></i>
                      <i className="fa fa-solid fa-star fa-lg"></i>
                    </div>
                  </div>

                  <p>{review.occupation}</p>
                  <p>{review.date}</p>
                </div>
              </div>
            </div>

            <div className="bottom-container">
              <p>{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
