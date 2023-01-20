import React from "react";
import "./SpecialOffers.css";
import { specialOffersItems } from "../../data";

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination } from "swiper";
const SpecialOffers = () => {
  return (
    <div className="offers__main__container">
      <h1 className="offers__title">Special Offers</h1>
      <div className="offers__inner__container">
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {specialOffersItems.map((item) => (
              <SwiperSlide key={item.id} className="offer__item__card">
                {" "}
                <img width="100%" src={item.image} alt="" />
                <p>{item.title.slice(0, 23)}</p>
                <p>${item.price}</p>{" "}
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default SpecialOffers;
