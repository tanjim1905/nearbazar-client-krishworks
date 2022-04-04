import React from 'react';
import { RiSearchLine } from 'react-icons/ri';
import NavBar from './NavBar/NavBar';
import NavMenu from './NavMenu/NavMenu';
import NavTop from './NavTop/NavTop';

const Header = () => {
    return (
        <>
            <div className='hidden xl:block'>
                <NavTop />
                <NavBar />
                <NavMenu />
            </div>

            <div className='lg:hidden sticky top-0 z-20 bg-primary py-3 container flex justify-center'>
                <div className='w-11/12 bg-white flex items-center px-4 py-3 rounded-md'>
                    <input className='w-full bg-transparent focus:outline-none' type="text" name="" id="" placeholder='Search for products (e.g. fish, apple, oil)' />
                    <RiSearchLine className='text-gray-500 font-bold text-xl' />
                </div>
            </div>
        </>
    );
};

export default Header;