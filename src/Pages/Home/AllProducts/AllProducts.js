import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const AllProducts = () => {
  const {
    isLoading,
    error,
    data: parts,
  } = useQuery("parts", () =>
    fetch("https://uniseq-computer-api.onrender.com/parts").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="mx-5 my-5">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-6">
        {parts.map((part) => (
          <div
            key={part._id}
            style={{ backgroundColor: " #f9f8f4" }}
            class="card md:w-auto h-full lg:w-auto shadow-xl"
          >
            <figure class="px-10 pt-10">
              <img src={part.img} alt="parts" class="rounded-xl" />
            </figure>
            <div class="card-body items-center ">
              <h2 class="card-title">{part.name}</h2>
              <p className="text-justify">
                {" "}
                {`${part.description?.slice(0, 50)} ...`}
              </p>

              <p>
                Price : $ <span className="font-bold">{part.price}</span>
              </p>

              <div className="card-actions justify-end">
                <Link
                  style={{ backgroundColor: " #c45d3c" }}
                  to={`/purchase/${part._id}`}
                  className="btn"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
