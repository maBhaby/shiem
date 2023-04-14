import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';

import style from './slider.module.scss';
import ButtonLike from '../Button/ButtonLike';
// Import Swiper styles
import 'swiper/css';

// import required modules

export default function SliderСlothes() {
  const [sale, setSale] = useState(false);
  const arr = [
    { title: 'Сиреневые джинсы', price: 1700, salePrice: null },
    { title: 'Молочные шорты', price: 1700, salePrice: null },
    { title: 'Худи на молнии', price: 3000, salePrice: 2000 },
    { title: 'Джинсовое платье-халат с поясом', price: 1700, salePrice: null },
    { title: 'Джинсовая куртка', price: 3200, salePrice: null },
    { title: 'Сиреневые джинсы', price: 4500, salePrice: null },
    { title: 'Сиреневые джинсы', price: 1700, salePrice: null },
    { title: 'Сиреневые джинсы', price: 1700, salePrice: null },
    { title: 'Сиреневые джинсы', price: 1700, salePrice: null },
  ];

  return (
    <>
      <Swiper slidesPerView={5} spaceBetween={27} slidesPerGroup={1} className={style.clother}>
        {arr.map((el, i) => {
          return (
            <SwiperSlide key={i} className={style.clotherSlide}>
              <a href="#asd" className={['link-reset', style.clotherLink].join(' ')}>
                <img
                  height={340}
                  width={270}
                  src={require('../../assets/img/SliderClother/1.jpg')}
                  alt="clother"
                />
                <ButtonLike />
                <p className={[style.clotherPrice, sale && style.br]}>
                  от {el.price} руб. {sale && <span className={'s'}>от {el.salePrice}</span>}
                </p>
                <h3 className={style.clotherTitle}>{el.title}</h3>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
