import React from 'react'
import dynamic from "next/dynamic";

const About = () => {
    const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className="w-full h-4/5">

                <div className='max-w-[1240px] m-auto h-full md:grid grid-cols-4 gap-12'>
                    <div className='col-span-2'>
                        <p className='uppercase text-xl tracking-widest font-semibold'>
                            Our Company
                        </p>
                        <h2 className='py-4'>Event Tech Bangladesh</h2>
                        <p className='py-2'>
                            Event Tech is a Bangladesh based IT company, in Jashore, Bangladesh
                        </p>
                        {/*First Colaps Peer */}
                        <div className="relative w-[400x] overflow-hidden shadow-lg shadow-gray-300 pt-2 rounded">
                            <input
                                type="checkbox"
                                className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"
                            />
                            <div className=" h-12 w-full pl-5 flex items-center ">
                                <h1 className="text-lg font-semibold">Who we are?</h1>
                            </div>
                            {/*Arrow Icon*/}
                            <div
                                className="absolute top-3 right-3 text-black transition-transform duration-500 peer-checked:rotate-180"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none"
                                     viewBox="0 0 24 24"
                                     stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                                </svg>
                            </div>
                            {/*Content*/}
                            <div
                                className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40 "
                            >
                                <div className="p-4 ">
                                    <p>
                                        Event Tech is a Bangladesh based IT system integration,
                                        professional service and software development venture. As a
                                        privately owned organization, Event Tech provides software
                                        design and development as well as professional services in
                                        Application Development (android & IOs), Website Hosting,
                                        Digital marketing & IT Event Management.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className='col-span-2 md:h-[75%] shadow-xl shadow-gray-400 rounded-xl flex items-center p-2'>
                        <ReactPlayer url='https://www.youtube.com/watch?v=k9w1tscS9ZA'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About