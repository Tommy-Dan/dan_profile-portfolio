import React from 'react';
import './testimonials.css';
import ATEST1 from '../../assets/images/Dr.Maggi3.png';
import ATEST2 from '../../assets/images/avatar2.jpg';
import ATEST3 from '../../assets/images/Dr.Maggi2.jpg';
import ATEST4 from '../../assets/images/avatar3.jpg';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    atest: ATEST1,
    name: 'Dr. Margaret Sesay',
    review: "Because he uphold integrity he always choose what's right over what's convenient!"
  },
  {
    atest: ATEST2,
    name: 'Tina Snow',
    review: 'He is a complete representattive of the quote "Trust starts with trust and ends with trust" !'
  },
  {
    atest: ATEST3,
    name: 'Dr. Margaret Sesay',
    review: 'Always there whenever he is needed!'
  },
  {
    atest: ATEST4,
    name: 'Jude Ekene',
    review: 'A stronger beliver in saying "Nothing comes without hard work, nothing ventured, nothing gain" !'
  }
]

const Testimonials = () => {
  return (
     <section id='testimonials'>
         <h5>Review from Clients</h5>
         <h2>Testimonials</h2>

         <Swiper className='container testimonials__container'
          // install Swiper modules
          modules={[ Navigation, Pagination, Scrollbar, A11y ]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}>
            {
              data.map(({atest, name, review}, index) => {
                return(
                  <SwiperSlide key={index} className='testimonial'>
                      <div className="client__avatar">
                          <img src={atest} alt="Atest-1" />
                      </div>
                      <h5 className="client__name">{name}</h5>
                      <small className="client__review">{review}</small>
                  </SwiperSlide>
                )
              })
            }
         </Swiper>
     </section>
  )
}

export default Testimonials;