import React from "react";
import Image from "next/image";
import ContactImg from '../public/assets/contact.jpg';

const contact = () => {
    return (
        <div id='contact' className="w-full lg:h-full">
            <div className="w-full">
                <div className="max-w-[1240px] mx-auto px-2 py-16">
                    <h2 className="py-4">Get in Touch</h2>
                    <div className="grid lg:grid-cols-5 gap-8">
                        {/* left */}
                        <div
                            className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                            <div className="lg:p-4 h-full">
                                <div>
                                    <Image
                                        className="rounded-xl hover:scale-105 ease-in duration-300"
                                        src={ContactImg}
                                        alt="/"
                                    />
                                </div>
                                <div>
                                    <h2 className="py-2">Eventtech</h2>
                                </div>
                                <div className='text-center'>
                                    <p className=" pt-2">Sheikh Hasina Software Technology Park, <br/> MTB, L-5,
                                        Jashore</p>
                                    <p className=" pt-2">Mobile : +880 188 006 0906</p>
                                    <p className=" pt-2">mail : eventtechint@gmail.com</p>
                                    <p className=" pt-2">Sat-Thur: 9am to 5pm</p>
                                </div>
                            </div>
                        </div>
                        {/* right */}
                        <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                            <div className="p-4">
                                <form>
                                    <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                        <div className="flex flex-col">
                                            <label className="uppercase text-sm py-2">Name</label>
                                            <input
                                                className="border-2 rounded-lg p-3 flex border-gray-300"
                                                type="text"
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="uppercase text-sm py-2">
                                                Phone Number
                                            </label>
                                            <input
                                                className="border-2 rounded-lg p-3 flex border-gray-300"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col py-2">
                                        <label className="uppercase text-sm py-2">Email</label>
                                        <input
                                            className="border-2 rounded-lg p-3 flex border-gray-300"
                                            type="email"
                                        />
                                    </div>
                                    <div className="flex flex-col py-2">
                                        <label className="uppercase text-sm py-2">Subject</label>
                                        <input
                                            className="border-2 rounded-lg p-3 flex border-gray-300"
                                            type="text"
                                        />
                                    </div>
                                    <div className="flex flex-col py-2">
                                        <label className="uppercase text-sm py-2">Message</label>
                                        <textarea
                                            className="border-2 rounded-lg p-3 flex border-gray-300 rows-10"></textarea>
                                    </div>
                                    <button
                                        className="w-full p-4 text-gray-100 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default contact;