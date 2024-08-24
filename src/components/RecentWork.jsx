import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img0 from "../assets/0.jpg";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import { Link } from "react-router-dom";


// import "./st.css";

// import required modules
import { Scrollbar, FreeMode } from "swiper/modules";
import { Parallax } from "react-scroll-parallax";
const RecentWork = () => {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold font-serif">Recent Work</h2>
      <Swiper
      simulateTouch = 'true'
        scrollbar={{
          hide:true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          800: {
            slidesPerView: 4,
          },
        }}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Scrollbar]}
        className="mySwiper h-[300px] lg:h-[350px] mt-3 text-gray-800 md:hover:cursor-pointer"
      >
        {/* <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-29%"
        ></div> */}
        <SwiperSlide className="bg-red-50">
          <div className="w-full h-full overflow-hidden">
            <Parallax
              speed={-50}
              translateX={[0, 0]}
              translateY={[-15, 15]}
              className="h-[550px] w-full"
            >
        <Link to={`/project/${1}`}>
              <img src={img0} alt="image0" className="h-full object-cover" />
        </Link>
            </Parallax>
          </div>
        </SwiperSlide>
        
        <SwiperSlide className="bg-red-50">
          <div className="w-full h-full overflow-hidden">
            <Parallax
              speed={-50}
              translateX={[0, 0]}
              translateY={[-15, 15]}
              className="h-[550px] w-full"
            >
              <img src={img1} alt="image0" className="h-full object-cover" />
            </Parallax>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-red-50">
          <div className="w-full h-full overflow-hidden">
            <Parallax
              speed={-10}
              translateX={[0, 0]}
              translateY={[-15, 15]}
              className="h-[550px] w-full"
            >
              <img src={img2} alt="image0" className="h-full object-cover" />
            </Parallax>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-red-50">
          <div className="w-full h-full overflow-hidden">
            <Parallax
              speed={-50}
              translateX={[0, 0]}
              translateY={[-15, 15]}
              className="h-[550px] w-full"
            >
              <img src={img3} alt="image0" className="h-full object-cover" />
            </Parallax>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-red-50">
          <div className="w-full h-full overflow-hidden">
            <Parallax
              speed={-50}
              translateX={[0, 0]}
              translateY={[-15, 15]}
              className="h-[550px] w-full"
            >
              <img src={img4} alt="image0" className="h-full object-cover" />
            </Parallax>
          </div>
        </SwiperSlide>


      </Swiper>
    </section>
  );
};

export default RecentWork;
