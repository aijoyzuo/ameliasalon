// components/InteriorCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function InteriorCarousel() {
  return (
    <div className="interior-carousel">
      <Swiper
        modules={[Navigation, Pagination, Keyboard]}
        slidesPerView="auto"         // 保留露出下一張
        spaceBetween={16}
        pagination={{ clickable: true }}
        navigation={true}            // 使用內建左右箭頭
        keyboard={{ enabled: true }}
        centeredSlides={false}
        loop={false}                 // 關掉 loop，避免回跳
        rewind={true}                // 最後一張再按一次回到第一張
        watchOverflow={false}        // 就算滑塊寬度不超過容器也要顯示 pagination
        speed={600}
        breakpoints={{
          1200: { spaceBetween: 24 },
        }}
      >
        <SwiperSlide>
          <img
            src={process.env.PUBLIC_URL + '/images/home/insideSalon-1.png'}
            alt="沙龍內部1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={process.env.PUBLIC_URL + '/images/home/insideSalon-2.png'}
            alt="沙龍內部2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={process.env.PUBLIC_URL + '/images/home/insideSalon-3.png'}
            alt="沙龍內部3"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
