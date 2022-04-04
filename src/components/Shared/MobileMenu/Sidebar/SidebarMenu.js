import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SidebarMenu = ({ setIsSidebarOpen }) => {
    return (
        <div>
            <div className='bg-primary'>
                <div className="container py-2 flex justify-between items-center">
                    <div className="logo text-white w-2.5/12">
                        <Link to="/" className='flex space-x-1 items-center'>
                            <span className='text-4xl'><FaShoppingBag /></span>
                            <div className='flex flex-col -space-y-2 uppercase'>
                                <span className='text-xl font-bold'>Near</span>
                                <span className='text-l tracking-widest'>Bazar</span>
                            </div>
                        </Link>
                    </div>

                    <button
                        className="border bg-white border-white text-red-500 w-8 rounded-full h-8 flex justify-center items-center font-semibold focus:outline-none"
                        onClick={(e) => setIsSidebarOpen(false)}
                    >
                        x
                    </button>
                </div>
            </div>

            <div>
                <div className='container border-b border-gray-200 py-2'>
                    <h2 className='text-xl font-medium capitalize'>
                        all categories
                    </h2>

                    
                </div>
            </div>
        </div>
    );
};

export default SidebarMenu;