import React from "react";
import { IoLogoNodejs } from "react-icons/io";
import { SiHeroku, SiMongodb } from "react-icons/si";

const ServerSide = () => {
  return (
    <div className="lg:my-24">
      <h2 className="lg:text-3xl md:text-2xl text-xl text-center">
        Server Side Scripting / Coding
      </h2>
      <div className="mx-6 lg:my-10 md:my-5 grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 ">
        <div className=" mx-auto my-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer">
          <div
            className=" mx-auto my-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer"
            style={{ fontSize: "8vw" }}
          >
            {" "}
            <IoLogoNodejs></IoLogoNodejs>
          </div>
          <p className="text-center my-2 text-xl ">Nodejs</p>
        </div>
        <div className=" mx-auto my-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer">
          <div
            className=" mx-auto my-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer"
            style={{ fontSize: "8vw" }}
          >
            {" "}
            <SiMongodb />
          </div>
          <p className="text-center my-2 text-xl ">Mongodb</p>
        </div>
        <div className=" mx-auto my-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer">
          <div
            className=" mx-auto my-4  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 cursor-pointer"
            style={{ fontSize: "8vw" }}
          >
            {" "}
            <SiHeroku />
          </div>
          <p className="text-center my-2 text-xl ">Heroku</p>
        </div>
      </div>
    </div>
  );
};

export default ServerSide;
