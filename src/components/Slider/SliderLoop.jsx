import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
// Import Swiper styles
import 'swiper/css';

import style from './slider.module.scss';

export default function SliderLoop({ slide, title }) {
  const [visibal, setVisibal] = useState(false);

  return (
    <section className={style.current}>
      <h2 className={style.sectionTitle}>{title}</h2>
      <Swiper
        grabCursor={true}
        loop={true}
        loopFillGroupWithBlank={true}
        slidesPerView={10}
        centeredSlides={false}
        slidesPerGroup={1}>
        {slide.map((el, i) => (
          <SwiperSlide key={i} className={style.slider}>
            <div className={style.sliderImg}></div>
            <h3 className={style.sliderSubTitle}>{el.subtitle}</h3>
            <span className={style.sliderTitle}>{el.title}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
