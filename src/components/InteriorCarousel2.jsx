import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css'; import 'swiper/css/navigation'; import 'swiper/css/pagination';

export default function InteriorCarousel({ prevBtnSelector, nextBtnSelector }) {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper) return;
    const prevEl = document.querySelector(prevBtnSelector);
    const nextEl = document.querySelector(nextBtnSelector);
    if (!prevEl || !nextEl) return;

    swiper.params.navigation.prevEl = prevEl;
    swiper.params.navigation.nextEl = nextEl;
    swiper.navigation.init();
    swiper.navigation.update();

    const onResize = () => swiper.navigation.update();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [prevBtnSelector, nextBtnSelector]);

  return (
    <div className="interior-carousel">
      <div className="carousel-viewport mb-3">
       <Swiper
  modules={[Navigation, Pagination, Keyboard]}
  onSwiper={(s) => (swiperRef.current = s)}
  slidesPerView={'auto'}               // 繼續用 auto，保留露出下一張
  spaceBetween={16}
  pagination={{ clickable: true }}
  keyboard={{ enabled: true }}
  watchOverflow={false}

  loop={false}          // ✅ 不用 loop，避免回跳
  rewind={true}         // ✅ 最後一張再按一次，跳回第一張
  centeredSlides={false} // ✅ 關掉，讓第一張從左邊開始貼齊

  speed={600}
  breakpoints={{ 1200: { spaceBetween: 24 } }}
>
  <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/home/insideSalon-1.png'} alt="沙龍內部1" /></SwiperSlide>
  <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/home/insideSalon-2.png'} alt="沙龍內部2" /></SwiperSlide>
  <SwiperSlide><img src={process.env.PUBLIC_URL + '/images/home/insideSalon-3.png'} alt="沙龍內部3" /></SwiperSlide>
</Swiper>

      </div>
    </div>
  );
}
