import React, { useState } from 'react';
import { AiOutlineAlignLeft } from 'react-icons/ai';
import { FiHome, FiShoppingCart } from 'react-icons/fi';
import Sidebar from './Sidebar/Sidebar';
import SidebarMenu from './Sidebar/SidebarMenu';

const MobileMenu = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div className='w-full h-16 bg-primary xl:hidden sticky bottom-0 left-0'>
            <div className='py-4'>
                <div className='container flex justify-between items-center'>
                    <div>
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className='focus:outline-none'>
                            <AiOutlineAlignLeft className='text-white text-2xl' />
                        </button>

                    </div>
                    <div>
                        <FiHome className='text-white text-2xl' />
                    </div>
                    <div>
                        <span className='relative'><FiShoppingCart className='text-white text-2xl' /> <span className='bg-red-500 text-xs w-5 h-5 flex justify-center items-center rounded-full absolute -top-2.5 left-5'>4</span></span>
                    </div>
                    <div>
                        <img className='w-8 h-8 rounded-full' src="https://i.ibb.co/dtDBPkt/271645357-3156867994600394-7872895962775948864-n.jpg" alt="" />
                    </div>
                </div>


                <Sidebar width={"100%"} position={"left"} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}>
                    <SidebarMenu setIsSidebarOpen={setIsSidebarOpen} />
                </Sidebar>
            </div>
        </div>
    );
};

export default MobileMenu;