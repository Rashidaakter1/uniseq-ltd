import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import Part from "./Part";
import { GiComputerFan } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
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
    <div className="lg:mx-24 md:mx-6 mx-8">
      <div className="my-6 mx-4">
        <div>
          <h1 className="flex justify-center lg:text-5xl md:text-4xl text-3xl font-semibold text-center my-8 mb-4">
            <div style={{ color: "#c45d3c" }} className="mt-1 lg:mt-0 lg:mx-3">
              <GiComputerFan />
            </div>
            Materials That We Provide{" "}
          </h1>
        </div>

        <p className="text-justify">
        Technology has become a part of our daily lives and for a huge portion of our life, we are dependent on tech products daily. There is hardly a home in Bangladesh without a tech product. This is where we come in. <span className="font-semibold" style={{color: " #c45d3c"}} >UniseQ Tech & Engineering Ltd</span> had started as a Tech product shop way back in March 2007. We focused on giving the customers the best service possible
        </p>
      </div>

      {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-6">
        {parts.map((part) => (
          <Part key={part._id} part={part}></Part>
        ))}
      </div> */}
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <div style={{ height: "10vh" }}>
          {parts.map((part) => (
            <SwiperSlide>
              <Part key={part._id} part={part}></Part>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      <div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:mx-10 lg:my-16 my-4">
        <div >
          {" "}
          <h2 className="text-3xl font-semibold">Find out all repair service we offer.</h2>
          <p>We're here to get your devices repair soon.</p>
        </div>
        <div className="lg:mx-6 mx-auto my-4">
          <a
            style={{ backgroundColor: " #c45d3c" }}
            href="/allproducts"
            className="btn"
          >
            View All Products
          </a>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Parts;
