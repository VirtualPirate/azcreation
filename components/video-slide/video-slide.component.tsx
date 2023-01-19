import { useRef, useState } from "react";
import { ReactElement } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import styles from "./video-slide.module.css";

// import required modules
import { Pagination, Navigation } from "swiper";

type VideoInfo = {
  title: string;
  id: string;
};

type VideoSlideProps = {
  children: JSX.Element | JSX.Element[];
};

export default function VideoSlide({ children }: VideoSlideProps) {
  let children_: Array<JSX.Element>;
  if (!Array.isArray(children)) {
    children_ = [children];
  } else {
    children_ = children;
  }

  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        slidesPerGroup={5}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={styles.swiper}
      >
        {children_.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
