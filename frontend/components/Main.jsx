import React from 'react'
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay} from "swiper";

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
                        <SwiperSlide><Image src="/assets/it-park.webp" alt="it-park" height={800} width={1680}/></SwiperSlide>
                        <SwiperSlide><Image src="/assets/digital-marketing.jpg" alt="" height={800} width={1680}/></SwiperSlide>
                        <SwiperSlide><Image src="/assets/robotics.jpg" alt="" height={800} width={1680}/></SwiperSlide>
                        <SwiperSlide><Image src="/assets/skill-develop.jpg" alt="" height={800} width={1680}/></SwiperSlide>
                        <SwiperSlide><Image src="/assets/block-chain.jpg" alt="" height={800} width={1680}/></SwiperSlide>
                    </Swiper>

        </div>
    )
}

export default Main