import React from 'react'
import {Swiper,SwiperSlide,useSwiper} from 'swiper/react'
import 'swiper/css'
import './Watches.css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'

const Watches = () => {
  return (
    <section className="w-wrapper">
        <div className="padding innerWidth w-container">
            <div className="w-head flexColStart">
                <span className="orangeText">Best Choices</span>
                <span className="primaryText">Popular Watches</span>
            </div>
            <Swiper {...sliderSettings}>
                <SliderButtons/>
                {
                    data.map((card,i)=>(
                        <SwiperSlide key={i}>
                            <div className="flexColStart w-card">
                                <img src={card.image} alt="watch" />
                                <span className="secondaryText w-price">
                                    <span style={{color:'orange'}}>$</span>
                                    <span>{card.price}</span>
                                </span>
                                <span className="primarText">{card.name}</span>
                                <span className="secondaryText">{card.detail}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Watches

const SliderButtons=()=>{
    const swiper =useSwiper();
    return(
        <div className="flexCenter w-buttons">
            <button onClick={()=>swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    )
}