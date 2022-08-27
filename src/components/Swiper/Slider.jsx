import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{

          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://www.bigbasket.com/media/uploads/banner_images/fresho-days-fnv-Bangalore-1600x460-23rdAUG22.jpeg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.bigbasket.com/media/uploads/banner_images/YXHP144_hp_fom_m_bbpl-staples_460_220822_Bangalore.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://www.bigbasket.com/media/uploads/banner_images/HP_EMF_M_T1-1600x460_280722.jpg" alt="" /></SwiperSlide>

      </Swiper>
    </>
  );
}
