import React, {useState} from "react";
import Image from "next/image";
// import client data
import {data} from "./data/clients";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";


const Client = () => {

    const [client, setClient] = useState(data)
    const filterType = (name) => {
        data.filter((item) => {
            return item.name === true
        })

    }

    return (
        <div id='clients' className='py-16'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <div className="max-w-[1240px] mx-auto px-2 py-16">
                    <p className='text-xl tracking-widest uppercase font-semibold'>Our Valued Clients</p>
                </div>
                <div className='object-center items-center font-semibold'>
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}

                        className="mySwiper absolute">

                        {client.map((item, index) => (
                            <div key={index}>
                                <SwiperSlide>
                                    <div>
                                        <Image src={item.image} alt={item.name} width={100} height={100}
                                           className=' rounded-t-lg'/>
                                    </div>
                                    {/* <div>
                                        <p>{item.name}</p>
                                    </div> */}
                                </SwiperSlide>
                            </div>
                        ))}

                    </Swiper>
                </div>
            </div>
        </div>
    )

}

export default Client