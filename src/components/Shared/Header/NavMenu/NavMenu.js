import React, { useRef, useState } from 'react';
import { BsExclamationCircle, BsQuestionCircle } from 'react-icons/bs';
import { FiGift } from 'react-icons/fi';
import { HiOutlinePhoneIncoming } from 'react-icons/hi';
import { IoBagCheckOutline, IoChevronDown } from 'react-icons/io5';
import { MdOutlinePrivacyTip } from 'react-icons/md';
import { RiFileListLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import useOutsideAlerter from '../../../../util/hooks/useOutsiderAlerter.js';
const NavMenu = () => {
    const [showOption, setShowOption] = useState(false);
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, () => {
        setShowOption(false);
    });
    return (
        <>
            <div className='bg-white border-b border-gray-200'>
                <div className="container py-3 flex justify-between items-center text-sm">
                    <div className='flex gap-x-10'>
                        <a href="#" className='capitalize hover:text-primary flex items-center'>categories <IoChevronDown className='ml-1' /></a>
                        <Link to="/about-us" className='capitalize hover:text-primary'>about us</Link>
                        <Link to="/contact-us" className='capitalize hover:text-primary'>contact us</Link>

                        <div ref={wrapperRef} className='z-10'>
                            <div className="relative inline text-left">
                                <button onClick={() => setShowOption(!showOption)} className='capitalize hover:text-primary flex items-center focus:outline-none'>pages <IoChevronDown className='ml-1' /></button>
                                {showOption && <div className="origin-top-right absolute mt-2.5 w-80 rounded-md shadow-lg bg-white focus:outline-none duration-500 group" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                    <div className="p-5 flex flex-col gap-y-2" role="none">
                                        <Link onClick={() => setShowOption(false)} className='capitalize flex items-center gap-x-2 px-3 py-2 rounded hover:bg-gray-50 hover:text-primary' to="/offers"><FiGift /> offers</Link>
                                        <Link onClick={() => setShowOption(false)} className='capitalize flex items-center gap-x-2 px-3 py-2 rounded hover:bg-gray-50 hover:text-primary' to="/checkout"><IoBagCheckOutline /> checkout</Link>
                                        <Link onClick={() => setShowOption(false)} className='capitalize flex items-center gap-x-2 px-3 py-2 rounded hover:bg-gray-50 hover:text-primary' to="/faq"><BsQuestionCircle /> faq</Link>
                                        <Link onClick={() => setShowOption(false)} className='capitalize flex items-center gap-x-2 px-3 py-2 rounded hover:bg-gray-50 hover:text-primary' to="/about-us">
                                            <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" className="flex-shrink-0 h-4 w-4" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                            about us</Link>
                                        <Link onClick={() => setShowOption(false)} className='capitalize flex items-center gap-x-2 px-3 py-2 rounded hover:bg-gray-50 hover:text-primary' to="/contact-us"><HiOutlinePhoneIncoming /> contact us</Link>
                                        <Link onClick={() => setShowOption(false)} className='capitalize flex items-center gap-x-2 px-3 py-2 rounded hover:bg-gray-50 hover:text-primary' to="/privacy-policy"><MdOutlinePrivacyTip /> privacy policy</Link>
                                        <Link onClick={() => setShowOption(false)} className='capitalize flex items-center gap-x-2 px-3 py-2 rounded hover:bg-gray-50 hover:text-primary' to="/terms-and-conditions"><RiFileListLine /> terms & condition</Link>
                                        <Link onClick={() => setShowOption(false)} className='capitalize flex items-center gap-x-2 px-3 py-2 rounded hover:bg-gray-50 hover:text-primary' to="/404"><BsExclamationCircle />404</Link>
                                    </div>
                                </div>}
                            </div>
                        </div>

                        <span className='relative'><Link to="/offers" className='capitalize bg-red-200 text-red-500 px-2.5 py-1 rounded hover:text-primary'>offers</Link>
                            <span className="flex absolute -top-1.5 -right-2.5">
                                <span className="rounded-full h-2 w-2 bg-red-500"></span>
                                <span className="relative right-2 animate-ping w-2 h-2 rounded-full bg-red-400 opacity-75"></span>
                            </span>
                        </span>


                    </div>
                    <div className='flex gap-x-10'>
                        <Link to="/privacy-policy" className='capitalize hover:text-primary'>privacy policy</Link>
                        <Link to="/terms-and-conditions" className='capitalize hover:text-primary'>terms & conditions</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavMenu;