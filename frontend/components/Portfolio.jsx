import React, {useState} from 'react'
import Image from "next/image";
import {data} from "./data/data.js";

const Portfolio = () => {
    // console.log(data)
    const [portfolio, setPortfolio] = useState(data)
    //   Filter Type
    const filterType =(category) => {
        setPortfolio(
            data.filter((item) => {
                return item.category === category
            })
        );
    };
    return (
        <div id='portfolio' className='w-full md:h-auto px-4 flex items-center py-16'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase font-semibold'>
                    Portfolio
                </p>
                {/*Filter Row*/}
                <div className='flex flex-col lg:flex-row justify-between py-5 cursor-pointer'>
                    <div>
                        <div className='flex justify-between flex-wrap'>
                            <button onClick={() => setPortfolio(data)}
                                className='m-1 p-4 rounded border-[#FE8D28] text-[#FE8D28] hover:bg-[#FE8D28] hover:text-white'>All
                            </button>
                            <button onClick={() => filterType('webApp')}
                                className='m-1 px-4 rounded border-[#FE8D28] text-[#FE8D28] hover:bg-[#FE8D28] hover:text-white'>Web
                                Application
                            </button>
                            <button onClick={() => filterType('mobileApp')}
                                className='m-1 px-4 rounded border-[#FE8D28] text-[#FE8D28] hover:bg-[#FE8D28] hover:text-white'>Mobile
                                apps
                            </button>
                        </div>
                    </div>
                </div>
                {/*Display Items*/}
                <div className='grid md:grid-cols-4 gap-4 pt-4'>
                    {portfolio.map((item, index)=>(
                        <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                            <Image src={item.image} alt={item.name} width={380} height={250}
                                   className='w-full h-[200px] object-cover rounded-t-lg'/>
                            <div className='flex justify-between px-2 py-4'>
                                <p>{item.name}</p>
                            </div>
                        </div>
                    ) )}
                </div>
            </div>
        </div>
    )

}

export default Portfolio