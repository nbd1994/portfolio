import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { projects } from "../data";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import { Link, unstable_useViewTransitionState } from "react-router-dom";
import "./card.css";
// import "./st.css";

// import required modules
import { Scrollbar, FreeMode } from "swiper/modules";
import { Parallax } from "react-scroll-parallax";
const RecentWork = () => {
  const [allProjects, setAllPProjects] = useState(projects);
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold font-serif">Recent Work</h2>
      <Swiper
        simulateTouch="true"
        scrollbar={{
          hide: true,
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
        {allProjects.map((project) => {
          const {id, shortTitle, imgUrl} = project;
          const url = `/project/${id}`;
          const isTransitioning = unstable_useViewTransitionState(url);

          return (
            <SwiperSlide key={id}>
              <div className="w-full h-full overflow-hidden z-10">
                <Parallax
                  speed={-50}
                  // translateX={[0, 0]}
                  translateY={[-15, 15]}
                  className="h-[550px] w-full"
                >
                  <Link unstable_viewTransition to={url}>
                    <h3 className="text-gray-50 font-mono font-bold z-50 bg-none absolute top-20 left-5">
                      {shortTitle}
                    </h3>
                    <img
                      src={imgUrl}
                      alt={shortTitle}
                      className="h-full object-cover"
                      style={{
                        viewTransitionName: isTransitioning ? "item-image" : "",
                      }}
                    />
                  </Link>
                </Parallax>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default RecentWork;
