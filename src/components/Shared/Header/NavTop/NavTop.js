import React, { useState } from 'react';
import { BiUser } from 'react-icons/bi';
import { FiPhoneCall } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Login from '../../../../pages/Authentication/Login/Login';

const NavTop = () => {
    const [showLogin, setShowLogin] = useState(false);
    return (
        <div className=' bg-indigo-50 py-3 text-xs'>
            <div className="container flex justify-between items-center">
                <div>
                    <p className='flex items-center'><FiPhoneCall className='mr-1' /> We are available 24/7, Need help? Call Us: <span className='ml-1 font-bold text-primary'>+01234567890</span></p>
                </div>
                <div className='flex'>
                    <Link to="/about-us" className='hover:text-primary px-3 border-r border-black'>About Us</Link>
                    <Link to="/contact-us" className='hover:text-primary px-3 border-r border-black'>Contact Us</Link>
                    <a href="#" className='hover:text-primary px-3 border-r border-black'>My account</a>
                    <button className='hover:text-primary pl-3 flex items-center justify-center focus:outline-none' onClick={() => setShowLogin(true)}><BiUser className='mr-1' /> Login</button>
                </div>
            </div>

            {showLogin && <Login showLogin={showLogin} setShowLogin={setShowLogin} />}
        </div>
    );
};

export default NavTop;