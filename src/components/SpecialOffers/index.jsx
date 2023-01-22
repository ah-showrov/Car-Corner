import React from "react";
import "./SpecialOffers.css";
import { specialOffersItems } from "../../data";
import { BsBasketFill, BsHeart } from "react-icons/bs";

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
            style={{ width: "100%" }}
            slidesPerView={1}
            spaceBetween={10}
            pagination={false}
            breakpoints={{
              300: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
              1300: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper offer__swiper"
          >
            {specialOffersItems.map((item) => (
              <SwiperSlide key={item.id} className="offer__item__card">
                <span className="offer__item__heart__icon">
                  <BsHeart />
                </span>
                <img
                  className="offer__item__card__image"
                  src={item.image}
                  alt="offer item image"
                />
                <p className="offer__item__card__title">
                  {item.title.slice(0, 23)}
                </p>
                <div className="offer__card__item__bottom__box">
                  <span className="offer__item__card__price">
                    ${item.price}
                  </span>
                  <span className="offer__item__cart__icon">
                    <BsBasketFill />
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default SpecialOffers;
