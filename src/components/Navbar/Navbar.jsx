"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";

const Navbar = () => {
    const [category, setCategory] = useState(false);
    const [profile, setProfile] = useState(false);

    return (
        <div className='bg-white p-6'>
            <div className='flex justify-between items-center max-w-6xl mx-auto'>
                <div className='w-[210px]'>
                    <h1 className='text-4xl font-bold text-black'>Event Wave</h1>
                </div>
                <div className='w-[260px]'>
                    <div className='absolute'>
                        <ul className='flex gap-8 text-sm text-black font-semibold cursor-pointer'>
                            <li><Link href={'/'}>Home</Link></li>
                            <li><Link href={'/event_listing'}>Event Listing</Link></li>
                            <li onClick={() => setCategory(!category)} className='flex gap-1 items-center'>
                                <span>Category</span>
                                <span className='text-[#737373] text-xs'>
                                    <FaAngleDown />
                                </span>
                            </li>
                        </ul>
                        <ul className={`relative left-[59px] bottom-[-28px] w-[210px] bg-gray-700 rounded-md px-4 py-4 text-white text-sm ${category ? 'block' : 'hidden'}`}>
                            <li className='py-2 px-3 hover:bg-gray-800 rounded-md cursor-pointer'><Link href={'/conferences'}>Conferences</Link></li>
                            <li className='py-2 px-3 hover:bg-gray-800 rounded-md cursor-pointer'><Link href={'/workshops'}>Workshops</Link></li>
                            <li className='py-2 px-3 hover:bg-gray-800 rounded-md cursor-pointer'><Link href={'/concerts'}>Concerts</Link></li>
                        </ul>
                    </div>
                </div>
                <div className='w-[320px]'>
                    <div className='absolute'>
                        <div className='relative top-[-18px] flex items-center gap-4'>
                            <div>
                                <input type="text" className='w-[230px] py-2 px-3 rounded-lg border-2 border-gray-300' placeholder='Search events' />
                            </div>
                            <div onClick={() => setProfile(!profile)}>
                                <Image src={'https://i.ibb.co/6mMsMt0/Untitled-design-5.png'} alt='okay' width={50} height={50} className='rounded-full cursor-pointer' />
                            </div>
                        </div>
                        <ul className={`relative left-[86px]  w-[210px] bg-gray-700 rounded-md px-4 py-4 text-white text-sm ${profile ? 'block' : 'hidden'}`}>
                            <Link href={'/login'}><li className='py-2 px-3 hover:bg-gray-800 rounded-md cursor-pointer'>Login</li></Link>
                            <Link href={'/register'}><li className='py-2 px-3 hover:bg-gray-800 rounded-md cursor-pointer'>Register</li></Link>
                            <Link href={'/dashboard'}><li className='py-2 px-3 hover:bg-gray-800 rounded-md cursor-pointer'>Dashboard</li></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
