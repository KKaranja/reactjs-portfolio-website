import React from "react";
import "./testimonial.css";
import Avatar1 from "../../assets/avatar-1.png";
import Avatar2 from "../../assets/avatar-3.png";
import Avatar3 from "../../assets/avatar-meher.jpg";
import Avatar4 from "../../assets/Avatar-2.png";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: Avatar1,
    name: "Isaac Kimura",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. VoluptasLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas",
  },
  {
    avatar: Avatar2,
    name: "Jeff Alex",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. VoluptasLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas",
  },
  {
    avatar: Avatar3,
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. VoluptasLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas",
  },
  {
    avatar: Avatar4,
    name: "Jane Williums",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. VoluptasLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas",
  },
];

const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Client</h5>
      <h2>Testimonials</h2>
      <Swiper
        className='container testimonial__container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} alt='' />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
