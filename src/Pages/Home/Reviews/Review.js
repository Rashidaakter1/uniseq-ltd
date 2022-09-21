import React from "react";

const Review = ({ review }) => {
  const { name, email, description, ratings } = review;
  return (
    <div className="m-4">
      <div
        style={{ backgroundColor: " #f9f8f4" }}
        className="card h-full shadow-xl"
      >
        <div className="card-body">
          <h2 className="card-title text-lg uppercase">Name :{review.name}</h2>
          <p className=" text-justify"> {review.description}</p>
          <p className="">Ratings : {review.ratings}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
