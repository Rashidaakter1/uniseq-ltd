import React from "react";
import { GiComputerFan } from "react-icons/gi";

const Business = () => {
  return (
    <div className="text-center lg:mx-24 md:mx-6 mx-8 lg:my-16 my-5">
      <div>
        <h1 className="flex justify-center lg:text-5xl md:text-4xl text-3xl font-semibold text-center my-8 mb-4">
          <div style={{ color: "#c45d3c" }} className="lg:mx-3 mt-1 lg:mt-0 my-4">
            <GiComputerFan />
          </div>
          Million Business Trust Us{" "}
        </h1>
      </div>

      <div className="stats stats-vertical lg:stats-horizontal shadow">
        <div className="stat">
          <div className="stat-figure text-primary lg:w-24">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Sold Products</div>
          <div className="stat-value text-primary">25.6K</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary lg:w-24">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block  stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Happy Clients</div>
          <div className="stat-value text-secondary">22.6K</div>
          <div className="stat-desc">21% more than last month</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="lg:w-24 w-16 rounded-full">
                <img src="https://placeimg.com/128/128/people" />
              </div>
            </div>
          </div>
          <div className="stat-value">86%</div>
          <div className="stat-title">FeedBack</div>
          <div className="stat-desc text-secondary">31 tasks remaining</div>
        </div>
      </div>
    </div>
  );
};

export default Business;
