import React, { Component } from 'react'
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import myImage6 from './img/img6.png';
import myImage7 from './img/img7.png';
import myImage8 from './img/img8.png';
import myImage9 from './img/img9.png';
import myImage10 from './img/img10.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Container } from 'react-bootstrap';
import './css/index1.css';

export default class slider1 extends Component {
  render() {
    return (
      <>
       <div className='pb-5'>
      <Container>
          <Swiper
        // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, ]}
          spaceBetween={this.props.space}
          slidesPerView={3}
          
          >
          <SwiperSlide>
            <span className='first-span'>
              <img src={this.props.imgsrc1} alt="" className='img_radius'/>
            </span>
          </SwiperSlide>

          <SwiperSlide>
          <img src={this.props.imgsrc2} alt=""  className='img_radius' />
          </SwiperSlide>

          <SwiperSlide>
          <img src={this.props.imgsrc3} alt=""  className='img_radius'/>
          </SwiperSlide>

          <SwiperSlide>
          <img src={this.props.imgsrc4} alt=""  className='img_radius'/>
          </SwiperSlide>

          <SwiperSlide>
          <img src={this.props.imgsrc5} alt=""  className='img_radius'/>
          </SwiperSlide>

        </Swiper>
      </Container>
    </div> 
      </>
    )
  }
}
