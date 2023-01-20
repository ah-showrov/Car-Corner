// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, EffectFade } from "swiper";

// my style css file
import "./Header.css";
import slide1 from "../../files/images/slide1.jpg";
import slide2 from "../../files/images/slide2.jpg";
const Header = () => {
  return (
    <div className="slider_container">
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="slider__image" src={slide1} alt=" slider car image" />
          <div className="slider__text__container">
            <h1>Custom Wide Body Kits</h1>
            <p>Let's help you find what you need.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="slider__image" src={slide2} alt=" slider car image" />
          <div className="slider__text__container">
            <h1> Lorem ipsum dolor sit</h1>
            <p>Lorem, ipsum dolor sit amet sit amet</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Header;
