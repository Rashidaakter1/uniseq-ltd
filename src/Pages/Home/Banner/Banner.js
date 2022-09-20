import React from "react";

const Banner = () => {
  return (
    <div className="carousel ">
      <div id="slide1" className="carousel-item relative">
        <img src="https://wporganic.com/theme/phone-repair/wp-content/uploads/2017/02/slider-2.jpg" />{" "}
        /
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative ">
        <img
          alt=""
          src="https://www.cgdirector.com/wp-content/uploads/media/2019/01/Parts_Needed_to_Build_a_PC_Twitter-1200x675.jpg"
          className=""
        />{" "}
        /
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative ">
        <img
          alt=""
          src="https://media.istockphoto.com/photos/3d-rendering-of-futuristic-blue-circuit-board-picture-id1129032734?k=20&m=1129032734&s=612x612&w=0&h=ThTmVjLwGhjEoPbLuCYVFsDE8RFXJ_ElpTQVY8vAe1g="
          className=""
        />{" "}
        /
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative">
        <img
          alt=""
          src="https://whatsabyte.com/wp-content/uploads/pc-components-2.jpg"
          className="w-full"
        />{" "}
        /
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
