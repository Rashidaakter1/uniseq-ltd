import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import Part from "./Part";

const Parts = () => {
  const {
    isLoading,
    error,
    data: parts,
  } = useQuery("parts", () =>
    fetch("https://obscure-waters-19361.herokuapp.com/parts").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="lg:mx-24 md:mx-6 mx-6">
      <div className="my-6">
        <h1 className="text-5xl font-semibold text-center my-8 mb-4">
          Materials That We Provide{" "}
        </h1>
        <p className="text-center">
         Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, facilis cupiditate expedita explicabo nisi unde asperiores quae at. Quibusdam aperiam repellendus quos nemo reiciendis, voluptates possimus quod laborum consequuntur similique.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-6">
        {parts.map((part) => (
          <Part key={part._id} part={part}></Part>
        ))}
      </div>
    </div>
  );
};

export default Parts;
