import React from 'react';

const FooterTop = () => {
    return (
        <div className='container grid grid-cols-2 lg:grid-cols-4 items-center my-16'>
            <div>
                <h3 className='my-5 text-xl'>Company</h3>
                <div className='flex flex-col gap-y-2'>
                    <a href="#" className='text-sm text-gray-800 hover:text-primary'>About Us</a>
                    <a href="#" className='text-sm text-gray-800 hover:text-primary'>Contact Us</a>
                    <a href="#" className='text-sm text-gray-800 hover:text-primary'>Careers</a>
                    <a href="#" className='text-sm text-gray-800 hover:text-primary'>Latest News</a>
                </div>
            </div>
            <div>
                <h3 className='my-5 text-xl'>Category</h3>
                <div className='flex flex-col gap-y-2'>
                    <a href="#" className='text-sm text-gray-800 hover:text-primary'>Fish & Meat</a>
                    <a href="#" className='text-sm text-gray-800 hover:text-primary'>Soft Drinks</a>
                    <a href="#" className='text-sm text-gray-800 hover:text-primary'>Baby Care</a>
                    <a href="#" className='text-sm text-gray-800 hover:text-primary'>Beauty & Health</a>
                </div>
            </div>
            <div>
                <h3 className='my-5 text-xl'>Company</h3>
                <div className='flex flex-col gap-y-2'>
                    <a href="#" className='text-sm text-gray-800 hover:text-primary'>Dahsboard</a>
                    <a href="#" className='text-sm text-gray-800 hover:text-primary'>My Orders</a>
                    <a href="#" className='text-sm text-gray-800 hover:text-primary'>Recent Orders</a>
                    <a href="#" className='text-sm text-gray-800 hover:text-primary'>Updated Profile</a>
                </div>
            </div>
            <div>
                <div className="logo my-3">
                    <a href="#" className='flex space-x-1 items-center'>
                        <span className='text-4xl text-primary'><i className='fas fa-shopping-bag'></i></span>
                        <div className='flex flex-col -space-y-2 uppercase'>
                            <span className='text-xl font-bold'>Near</span>
                            <span className='text-l tracking-widest'>Bazar</span>
                        </div>
                    </a>
                </div>
                <div className='flex flex-col gap-y-2'>
                    <a href="#" className='text-sm text-gray-800 hover:text-primary'>Matuail, Jarabari</a>
                    <a href="#" className='text-sm text-gray-800 hover:text-primary'>Dhaka- 1204, Bangladesh</a>
                    <a href="#" className='text-sm text-gray-800 hover:text-primary'>012345678990</a>
                    <a href="#" className='text-sm text-gray-800 hover:text-primary'>tanjimahmed1905@gmail.com</a>
                </div>
            </div>
        </div>
    );
};

export default FooterTop;