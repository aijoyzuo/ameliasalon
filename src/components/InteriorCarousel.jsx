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
                slidesPerView={1.3}
                spaceBetween={10}
                grabCursor={true}        // 游標變手掌，可拖動
                navigation
                pagination={{ clickable: true }}
                keyboard={{ enabled: true }} // 鍵盤方向鍵可用
                breakpoints={{
                    0: { slidesPerView: 1.1, spaceBetween: 16 },
                    768: { slidesPerView: 1.5, spaceBetween: 16 },
                    1920: { slidesPerView: 1.9, spaceBetween: 24 }
                }}
            >
                <SwiperSlide><img src={process.env.PUBLIC_URL +'/images/home/insideSalon-1.png'} className='interiorCarousel__img' alt="沙龍內部1" /></SwiperSlide>
                <SwiperSlide><img src={process.env.PUBLIC_URL +'/images/home/insideSalon-2.png'} className='interiorCarousel__img' alt="沙龍內部2" /></SwiperSlide>
                <SwiperSlide><img src={process.env.PUBLIC_URL +'/images/home/insideSalon-3.png'} className='interiorCarousel__img' alt="沙龍內部3" /></SwiperSlide>
            </Swiper>
        </div>
    );
}
