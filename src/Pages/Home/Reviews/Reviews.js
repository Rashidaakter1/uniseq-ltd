import React from "react";
import { GiComputerFan } from "react-icons/gi";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import Review from "./Review";

const Reviews = () => {
  const {
    isLoading,
    error,
    data: reviews,
  } = useQuery("reviews", () =>
    fetch(`https://uniseq-computer-api.onrender.com/reviews`).then((res) =>
      res.json()
    )
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="mx-8 my-10 md:mx-6 ">
      <div>
        <h1 className="flex justify-center lg:text-5xl md:text-4xl text-3xl font-semibold text-center my-8 mb-4">
          <div style={{ color: "#c45d3c" }} className="lg:mx-3 mt-1 lg:mt-0">
            <GiComputerFan />
          </div>
          What Our Customers Say !!!
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
      {/* <Link to='dashboard/addreview'> Add your review</Link> */}
    </div>
  );
};

export default Reviews;
