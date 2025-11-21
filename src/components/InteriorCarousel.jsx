import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function InteriorCarousel() {
  return (
    <div className="interior-carousel py-3">
      <Swiper
        modules={[Navigation, Pagination, Keyboard]}
        slidesPerView="auto"         
        spaceBetween={16}
        pagination={{ clickable: true }}
        navigation={true}            
        keyboard={{ enabled: true }}
        centeredSlides={false}
        loop={false}                 
        rewind={true}                
        watchOverflow={false}        
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
