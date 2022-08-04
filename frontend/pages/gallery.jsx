import React, {useState} from 'react'
import Image from "next/image";
import {data} from '../components/data/gal.js';

const Gallery = () => {
    const [imgGallery, setImgGallery] = useState(data)
    //   Filter Type
    const filterType = (image) => {
        setImgGallery(
            data.filter((item) => {
                return item.image === image
            })
        );
    };
    return (
        <div className="w-full">
            <div className=" h-[25vh] relative">
                <div className="absolute top-0 left-0 w-full h-[25vh]"/>
            </div>
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className='text-xl tracking-widest uppercase font-semibold'>Gallery</p>
            </div>

            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-5 p-2'>
                {imgGallery.map((item, index) => (
                        <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                            <Image src={item.image} alt={item.image} width={500} height={260}
                                 className=' object-cover rounded-t-lg'/>
                        </div>
                    ))}

            </div>
        </div>
)
}

export default Gallery