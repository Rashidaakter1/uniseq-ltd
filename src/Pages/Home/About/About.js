import React from "react";
import { GiComputerFan } from "react-icons/gi";
const About = () => {
  return (
    <div className="lg:mx-24 md:mx-6 mx-8 my-4">
      <div className="my-6 mx-4">
        <div>
          <h1 className="flex justify-center lg:text-5xl md:text-4xl text-3xl font-semibold text-center my-8 mb-4">
            <div
              style={{ color: "#c45d3c" }}
              className="lg:mx-3 mt-1 lg:mt-0
             mx-2"
            >
              <GiComputerFan />
            </div>
            Why Choose Us
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 md:grid-cols-1 lg:my-10">
          <img
            className="my-4"
            src="https://demo.cmssuperheroes.com/themeforest/wp-compu-care/wp-content/uploads/2016/10/bg-computer.png"
            alt=""
          />
          <div>
            <h1 className="text-2xl font-semibold text-center my-2 ">
              What services we provide to you
            </h1>
            <p className="lg:px-8 px-3 text-justify">
              We are a Tech-based product seller. We are providing our customers
              with the best quality products at the most reasonable price. We
              have varieties of products that our customers can choose from. The
              product range starts from Desktop PC, Laptop, Gaming PC, UPS,
              Tablet PC, Graphics Tablet, Monitors, Office Equipment, Camera,
              Security Camera, Television and many other products. Each of our
              products is checked and reviewed before it is sold to our Loyal
              Customers. You are our driving force to better ourselves in all
              aspects of the service-providing sector. We strive to become a
              Perfectionist Company that delivers everything, word for word.
            </p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default About;
