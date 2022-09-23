import React from "react";
import { GiComputerFan } from "react-icons/gi";

const Brands = () => {
  return (
    <div>
      <div className="my-6 mx-4">
        <div>
          <h1 className="flex justify-center lg:text-5xl md:text-4xl text-3xl font-semibold mx-auto my-8 mb-4">
            <div
              style={{ color: "#c45d3c" }}
              className="lg:mx-6 mt-1 lg:mt-0
             mx-2"
            >
              <GiComputerFan />
            </div>
            We work with every brand
          </h1>
        </div>
        <p className="text-center text-xl my-8">
          We work on almost all of the more popular brands. We are the #1
          digital device repair shop in Country
        </p>
      </div>
      <div className="mx-6 my-24  grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 ">
        <img
          src="https://wporganic.com/theme/phone-repair/wp-content/uploads/2017/02/logo-1.png"
          alt=""
        />
        <img
          src="https://wporganic.com/theme/phone-repair/wp-content/uploads/2017/02/logo-2.png"
          alt=""
        />
        <img
          src="https://wporganic.com/theme/phone-repair/wp-content/uploads/2017/02/logo-3.png"
          alt=""
        />
        <img
          src="https://wporganic.com/theme/phone-repair/wp-content/uploads/2017/02/logo-4.png"
          alt=""
        />
        <img
          src="https://wporganic.com/theme/phone-repair/wp-content/uploads/2017/02/logo-5.png"
          alt=""
        />
        <img
          src="https://wporganic.com/theme/phone-repair/wp-content/uploads/2017/02/logo-3.png"
          alt=""
        />
      </div>
      <div style={{ backgroundColor: "#446a73", color: "white" }} className="grid lg:grid-cols-2  md:grid-col-2 grid-col-1">
        <div className="px-14 py-10">
          <h2 className="lg:text-3xl font-semibold md:text-2xl text-xl " >Do you want to repair your devices?</h2>
          <p className="lg:text-xl md:text-lg my-4 ">
          Undoubtedly the best perk for repairing your device instead of going for a new one is saving a lot of money, which can easily be utilized elsewhere.
          </p>
        </div>

        <div className="lg:my-auto  my-4  mx-auto">
          <a
            style={{ backgroundColor: " #c45d3c" }}
            href="/home"
            className="btn"
          >
            Get free advice
          </a>
        </div>
      </div>
    </div>
  );
};

export default Brands;
