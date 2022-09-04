import React from 'react'
import Image from "next/image";

import DigitalImg from '../public/assets/service/digital.webp';
import CloudImg from '../public/assets/service/cloud.webp';
import GraphicsImg from '../public/assets/service/graphics.webp';
import WebImg from '../public/assets/service/web.webp';
import MobImg from '../public/assets/service/apps.webp';
import IotImg from '../public/assets/service/iot.webp';
import AiImg from '../public/assets/service/ai.webp';
import RobImg from '../public/assets/service/robot.webp';


const Services = () => {
    return (
        <div id='services' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase font-semibold'>
                    Services
                </p>
                <h2 className='py-4'>What We can do</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={DigitalImg}
                                    alt='DigitalImg'
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Digital Marketing</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={CloudImg}
                                    alt='CloudImg'
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Cloud Management Service</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={GraphicsImg}
                                    alt='GraphicsImg'
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Graphics Design</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={WebImg}
                                    alt='WebImg'
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Web Development</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={MobImg}
                                    alt='MobImg'
                                    width={40}
                                    height={64}
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Apps Development</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={IotImg}
                                    alt='/'
                                    width={100}
                                    height={64}
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Internet Of Things</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={AiImg}
                                    alt='AiImg'
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Artificial Intelligence</h3>
                            </div>
                        </div>
                    </div>

                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image
                                    src={RobImg}
                                    alt='RobImg'
                                    width={64}
                                    height={64}
                                />
                            </div>
                            <div className='flex flex-col items-center justify-center'>
                                <h3>Robotics</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services