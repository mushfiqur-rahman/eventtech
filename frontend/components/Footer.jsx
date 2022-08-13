import React from "react";
import {FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube} from "react-icons/fa";
import {HiOutlineChevronDoubleUp} from "react-icons/hi";
import Link from "next/link";
import ScrollToTop from "react-scroll-to-top";

function Footer() {
    const current = new Date();
    const date = `${current.getFullYear()}`;
    return (
        <>
            <ScrollToTop smooth top={20} component={<HiOutlineChevronDoubleUp/>}
                         className='text-[#FE8D28] font-extrabold'/>
            <div className="h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
                <div className="p-5 ">
                    <ul>
                        <p className="font-bold text-3xl pb-6">
                            <span className='text-[#FE8D28]'>Eventtech,</span> Bangladesh
                        </p>
                        <div className="flex gap-6 pb-5">
                            <a href='https://www.facebook.com/eventtechbd'
                               target='_blank'
                               rel='noreferrer'>
                                <FaFacebook className="text-2xl cursor-pointer hover:text-[#FE8D28]"/>
                            </a>
                            <a href='https://www.linkedin.com/company/eventtechbd/'
                               target='_blank'
                               rel='noreferrer'>
                                <FaLinkedinIn className="text-2xl cursor-pointer hover:text-[#FE8D28]"/>
                            </a>
                            <a href='https://www.instagram.com/'
                               target='_blank'
                               rel='noreferrer'>
                                <FaInstagram className="text-2xl cursor-pointer hover:text-[#FE8D28]"/>
                            </a>
                            <a href='https://www.youtube.com/channel/UCcCQ3paVGm4B_-N3OXSjXqA'
                               target='_blank'
                               rel='noreferrer'>
                                <FaYoutube className="text-2xl cursor-pointer hover:text-[#FE8D28]"/>
                            </a>
                        </div>
                    </ul>
                </div>
                <div className="p-5 ">
                    {/*<ul>*/}
                    {/*    <p className=" font-bold text-2xl pb-4">Product</p>*/}
                    {/*    <li className=" text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">*/}
                    {/*        Stocks*/}
                    {/*    </li>*/}
                    {/*    <li className=" text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">*/}
                    {/*        Futures & Options*/}
                    {/*    </li>*/}
                    {/*    <li className=" text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">*/}
                    {/*        Mutual Funds*/}
                    {/*    </li>*/}
                    {/*    <li className=" text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">*/}
                    {/*        Fixed deposits*/}
                    {/*    </li>*/}
                    {/*</ul>*/}
                </div>
                <div className="p-5">
                    <ul>
                        <p className=" font-bold text-2xl pb-4">Services</p>
                        <li className=" text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Digital Marketing
                        </li>
                        <li className=" text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Cloud Management Service
                        </li>
                        <li className=" text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Graphics Design
                        </li>
                        <li className=" text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Web Development
                        </li>
                        <li className=" text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Apps Development
                        </li>
                        <li className=" text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Event Management
                        </li>
                        <li className=" text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Artificial Intelligence
                        </li>
                        <li className="text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Robotics
                        </li>
                    </ul>
                </div>
                <div className="p-5">
                    <ul>
                        <p className="font-bold text-2xl pb-4">Skill Development</p>
                        <Link href='/GraphicsDesign'><li className=" text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Graphics Design
                        </li></Link>
                        <Link href='/DigitalMarketing'>
                            <li className=" text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Digital Marketing
                        </li>
                        </Link>
                        <Link href='/WebDevelopment'>
                        <li className="text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Web Design & Development
                        </li>
                        </Link>
                        <Link href='/CallCenter'>
                        <li className=" text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Call Center Support
                        </li>
                        </Link>
                        <Link href='/DataScience'>
                        <li className=" text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Data Science & Machine Learning
                        </li>
                        </Link>
                        <Link href='/robotics'>
                        <li className=" text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Robotics
                        </li>
                        </Link>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-5">
                <h1 className="text-sm text-gray-500">
                    ©{date} All rights reserved by <Link
                    href="https://www.eventtechbd.com/"><a>Eventtech</a></Link> |
                    Build with by{" "}
                    <span className="hover:text-blue-600 cursor-pointer">
						<Link href="https://www.linkedin.com/in/mushfiqurrahmanshaon/"><a target='_blank'
                               rel='noreferrer'>ABC</a></Link>
					</span>
                </h1>
            </div>
        </>
    );
}

export default Footer;