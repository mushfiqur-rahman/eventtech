import React, {useState} from 'react'
import Image from "next/image";
import {data} from './data/skillData.js'

const SkillDevelopment = () => {
    const [skillDevelopment, setSkillDevelopment] = useState(data)
    //   Filter Type
    const filterType = (name) => {
        setSkillDevelopment(
            data.filter((item) => {
                return item.name === name
            })
        );
    };
    return (
        <div id='SkillDevelopment' className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase font-semibold'>
                    Skill Development
                </p>
                <div className='grid md:grid-cols-3 gap-4 pt-4'>
                    {skillDevelopment.map((item, index) => (
                        <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                            <Image src={item.image} alt={item.name} width={500} height={250}
                                 className='object-cover rounded-t-lg'/>
                            <div className='flex justify-between px-2 py-4'>
                                <p>{item.name}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default SkillDevelopment