import React from "react";
import { Link } from "react-router-dom";

const Part = ({ part }) => {
  const { _id, name, description, img, available, minimumOrder, price } = part;

  return (
    <div className="">
      <div
        style={{ backgroundColor: " #f9f8f4" }}
        class="card md:w-auto h-full lg:w-auto  shadow-xl"
      >
        <figure class="px-10 pt-10">
          <img src={img} alt="parts" class="rounded-xl" />
        </figure>
        <div class="card-body items-center ">
          <h2 class="card-title">{name}</h2>
          <p className="text-justify"> {`${description?.slice(0, 50)} ...`}</p>

          <p>
            Price : $ <span className="font-bold">{price}</span>
          </p>

          <div className="card-actions justify-end">
            <Link
              style={{ backgroundColor: " #c45d3c" }}
              to={`/purchase/${_id}`}
              className="btn"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Part;
