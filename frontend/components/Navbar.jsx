import React, {useState, useEffect} from 'react'
import Image from "next/image";
import Link from "next/link";
import Logo from '../public/logo.png'
import {useRouter} from "next/router";
import {useTheme} from "next-themes";

import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {FaLinkedinIn, FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa';
import {BsSunFill, BsMoonFill} from 'react-icons/bs';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);
    // const [navBg, setNavBg] = useState('#FFFFFF')
    const [linkColor] = useState('#FE8D28')
    // const router = useRouter()


    const handleNav = () => {
        setNav(!nav)
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);

//Next Theme or dark mood setup=============================================
    const {SystemTheme, theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const renderThemeChanger = () => {
        if (!mounted) return null;

        const currentTheme = theme === 'system' ? SystemTheme : theme;

        if (currentTheme === 'dark') {
            return (<BsSunFill className='w-7 h-7 text-[#FE8D28]' role='button' onClick={() => setTheme('light')}/>)
        } else {
            return (<BsMoonFill className='w-7 h-7' role='button' onClick={() => setTheme('dark')}/>)
        }
    }

    return (<div
        // style={{backgroundColor: `${navBg}`}}
        className="fixed w-full h-20 shadow-xl z-[100] bg-white dark:bg-gray-900 dark:text-gray-100">
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 cursor-pointer'>
            <Link href='/'>
                <Image src={Logo} alt='/' width={125} height={50}/>
            </Link>
            {renderThemeChanger()}
            <div>
                <ul style={{color: `${linkColor}`}} className='hidden md:flex'>
                    <Link href="/">
                        <li className="font-medium uppercase hover:text-indigo-600">
                            Home
                        </li>
                    </Link>
                    <Link href="/#about">
                        <li className="ml-10 font-medium uppercase hover:text-indigo-600">
                            About
                        </li>
                    </Link>
                    <Link href="/#services">
                        <li className="ml-10 font-medium uppercase hover:text-indigo-600">
                            Services
                        </li>
                    </Link>
                    <Link href="/#SkillDevelopment">
                        <li className="ml-10 font-medium uppercase hover:text-indigo-600">
                            Skill Development
                        </li>
                    </Link>
                    <Link href="/#clients">
                        <li className="ml-10 font-medium uppercase hover:text-indigo-600">
                            Clients
                        </li>
                    </Link>
                    <Link href="/gallery">
                        <li className="ml-10 font-medium uppercase hover:text-indigo-600">
                            Gallery
                        </li>
                    </Link>
                    <Link href="/contact">
                        <li className="ml-10 font-medium uppercase hover:text-indigo-600">
                            Contact
                        </li>
                    </Link>
                </ul>
                <div onClick={handleNav} className='md:hidden'>
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
        </div>
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ' : ''}>
            <div
                className={nav ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white ' +
                    'dark:bg-gray-900 dark:text-gray-100 p-10 ease-in duration-500' :
                    'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                <div>
                    <div className='flex w-full items-center justify-between cursor-pointer'>
                        <Link href='/'>
                            <Image src={Logo} alt='/' width={125} height={50}/>
                        </Link>
                        <div onClick={handleNav}
                             className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer bg-white dark:bg-gray-900 dark:text-gray-100'>
                            <AiOutlineClose/>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col cursor-pointer'>
                        <ul className='uppercase ' style={{color: `${linkColor}`}}>
                            <Link href='/'>
                                <li onClick={() => setNav(false)}
                                    className='py-4 font-medium hover:text-indigo-600'>
                                    Home
                                </li>
                            </Link>
                            <Link href='/#about'>
                                <li onClick={() => setNav(false)}
                                    className='py-4 font-medium hover:text-indigo-600'>
                                    About
                                </li>
                            </Link>
                            <Link href='/#services'>
                                <li onClick={() => setNav(false)}
                                    className='py-4 font-medium hover:text-indigo-600'>
                                    Services
                                </li>
                            </Link>
                            <Link href='/#SkillDevelopment'>
                                <li onClick={() => setNav(false)}
                                    className='py-4 font-medium hover:text-indigo-600'>
                                    Skill Development
                                </li>
                            </Link>
                            <Link href='/#clients'>
                                <li onClick={() => setNav(false)}
                                    className='py-4 font-medium hover:text-indigo-600'>
                                    Clients
                                </li>
                            </Link>
                            <Link href='/gallery'>
                                <li onClick={() => setNav(false)}
                                    className='py-4 font-medium hover:text-indigo-600'>
                                    Gallery
                                </li>
                            </Link>
                            <Link href='/contact'>
                                <li onClick={() => setNav(false)}
                                    className='py-4 font-medium hover:text-indigo-600'>
                                    Contact
                                </li>
                            </Link>
                        </ul>
                        <div className='pt-20'>
                            <p className='uppercase tracking-widest text-[#FE8D28]'>
                                Lets Connect
                            </p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <a href='https://www.facebook.com/eventtechbd'
                                   target='_blank'
                                   rel='noreferrer'>
                                    <div
                                        className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105
                                    ease-in duration-300'>
                                        <FaFacebook/>
                                    </div>
                                </a>
                                <a href='https://www.linkedin.com/company/eventtechbd/'
                                   target='_blank'
                                   rel='noreferrer'>
                                    <div
                                        className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105
                                    ease-in duration-300'>
                                        <FaLinkedinIn/>
                                    </div>
                                </a>
                                <a href='https://www.instagram.com/'
                                   target='_blank'
                                   rel='noreferrer'>
                                    <div
                                        className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105
                                    ease-in duration-300'>
                                        <FaInstagram/>
                                    </div>
                                </a>
                                <a href='https://www.youtube.com/channel/UCcCQ3paVGm4B_-N3OXSjXqA'
                                   target='_blank'
                                   rel='noreferrer'>
                                    <div onClick={handleNav}
                                         className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105
                                     ease-in duration-300'>
                                        <FaYoutube/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default Navbar