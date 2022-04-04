import React from 'react';
import paypal from '../../../util/assets/images/paypal.png';

const FooterBottom = () => {
    return (
        <div className='container'>
            <div className="hidden lg:block py-6 bg-gray-200 rounded-lg">
                <div className='flex justify-around items-center'>
                    <div className='w-3/12'>
                        <p>Follow us</p>
                        <div className='flex gap-x-3 text-white text-xl pt-3'>
                            <a href="#" className='bg-blue-900 w-10 h-10 p-2 text-center rounded-full'><i className='fab fa-facebook-f'></i></a>
                            <a href="#" className='bg-cyan-600 w-10 h-10 p-2 text-center rounded-full'><i className='fab fa-twitter'></i></a>
                            <a href="#" className='bg-red-700 w-10 h-10 p-2 text-center rounded-full'><i className='fab fa-pinterest-p'></i></a>
                            <a href="#" className='bg-sky-700 w-10 h-10 p-2 text-center rounded-full'><i className='fab fa-linkedin-in'></i></a>
                            <a href="#" className='bg-green-600 w-10 h-10 p-2 text-center rounded-full'><i className='fab fa-whatsapp'></i></a>
                        </div>
                    </div>
                    <div className='w-3/12 text-center'>
                        <p>Call Us Today!</p>
                        <h2 className='text-2xl font-bold text-primary'>+012345-678900</h2>
                    </div>
                    <div className='w-3/12'>
                        <img className='w-full' src={paypal} alt="" />
                    </div>
                </div>
            </div>

            <div className='bg-white'>
                <div className="container">
                    <p className='text-center py-6'>Copyright 2022 &copy <span className='text-primary'>Tanjim Ahmed</span>. All right reserves.</p>
                </div>
            </div>
        </div>
    );
};

export default FooterBottom;