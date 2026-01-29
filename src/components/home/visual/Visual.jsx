import slides from '../../../assets/api/visualSlide';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';
import EasyTap from './EasyTap';

const Visual = () => {
    const [current, setCurrent] = useState(0);
    const [initialized, setInitialized] = useState(false);
    useEffect(() => {
        setInitialized(true); // 첫 렌더링 후 currentSlide 적용
    }, []);
    if (!slides || slides.length === 0) return null;
    const currentSlide = slides[current];

    return (
        <section className="main">
            <div className="visual">
                <Swiper
                    className="mySwiper"
                    modules={[Pagination, Autoplay]}
                    pagination={{ clickable: true }}
                    loop
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    speed={700}
                    onSwiper={(swiper) => {
                        setCurrent(swiper.realIndex); // 초기 첫 화면 index 동기화
                    }}
                    onSlideChange={(swiper) => {
                        setCurrent(swiper.realIndex);
                    }}
                >
                    {slides.map((slide, idx) => (
                        <SwiperSlide key={idx}>
                            <img src={slide.img} alt="" />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <h2 className={`visual-title ${currentSlide.isWhite ? 'is-white' : ''}`}>
                    {currentSlide.title.split('\n').map((line, i) => (
                        <span key={i}>
                            {line}
                            <br />
                        </span>
                    ))}
                </h2>
            </div>
            <div className="visualtap">
                <EasyTap />
            </div>
        </section>
    );
};

export default Visual;
