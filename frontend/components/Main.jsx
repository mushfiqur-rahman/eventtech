import React from 'react'
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay} from "swiper";
import ItPark from '../public/assets/it-park.webp';
import DigitalMarketing from '../public/assets/digital-marketing.webp';
import Robotics from '../public/assets/robotics.jpg';
import SkillDevelopment from '../public/assets/skill-develop.webp';
import BlockChain from '../public/assets/block-chain.jpg';

// Import Swiper styles
import 'swiper/css';
import Image from "next/image";

const Main = () => {
    SwiperCore.use([Autoplay])

    return (
        <div className="">
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                        pagination={{clickable: true}}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                    >
                        <SwiperSlide><Image src={ItPark} alt="ItPark" height={800} width={1680}/></SwiperSlide>
                        <SwiperSlide><Image src={DigitalMarketing} alt="DigitalMarketing" height={800} width={1680}/></SwiperSlide>
                        <SwiperSlide><Image src={Robotics} alt="Robotics" height={800} width={1680}/></SwiperSlide>
                        <SwiperSlide><Image src={SkillDevelopment} alt="SkillDevelopment" height={800} width={1680}/></SwiperSlide>
                        <SwiperSlide><Image src={BlockChain} alt="BlockChain" height={800} width={1680}/></SwiperSlide>
                    </Swiper>

        </div>
    )
}

export default Main