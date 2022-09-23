import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";



// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img style={{opacity: ".9"}} src="https://wporganic.com/theme/phone-repair/wp-content/uploads/2017/02/slider-1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{opacity: ".9"}} src="https://wporganic.com/theme/phone-repair/wp-content/uploads/2017/02/slider-3.jpg" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img style={{opacity: ".9"}} src="https://wporganic.com/theme/phone-repair/wp-content/uploads/2017/02/slider-2.jpg" alt="" />
        </SwiperSlide>
       
      </Swiper>
    </>
  );
};

export default Banner;
