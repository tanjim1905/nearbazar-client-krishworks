import React, { useState } from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { RiSearchLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useAuth from '../../../../util/hooks/useAuth';
import Cart from '../../../Cart/Cart';
import CartSidebar from '../../../Cart/CartSiderbar';

const NavBar = () => {
    const { user } = useAuth();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const { cartTotalQuantity } = useSelector(state => state.rootReducer.cart);
    return (
        <>
            <div className='bg-primary py-3'>
                <div className="container flex justify-between items-center">
                    <div className="logo text-white w-2.5/12">
                        <Link to="/" className='flex space-x-1 items-center'>
                            <span className='text-4xl'><FaShoppingBag /></span>
                            <div className='flex flex-col -space-y-2 uppercase'>
                                <span className='text-xl font-bold'>Near</span>
                                <span className='text-l tracking-widest'>Bazar</span>
                            </div>
                        </Link>
                    </div>

                    <div className='w-7/12 bg-white flex items-center px-4 py-3 rounded-md'>
                        <input className='w-full bg-transparent outline-none border-none' type="text" name="" id="" placeholder='Search for products (e.g. fish, apple, oil)' />
                        <RiSearchLine className='text-gray-500 font-bold text-xl' />
                    </div>

                    <div className='w-2.5/12 flex justify-end items-center gap-x-10 text-white'>
                        <IoMdNotificationsOutline className='text-3xl font-bold' />
                        <span onClick={() => setIsSidebarOpen(!isSidebarOpen)} className='relative cursor-pointer'><FiShoppingCart className='text-2xl font-bold' /> <span className='bg-red-500 text-xs w-5 h-5 flex justify-center items-center rounded-full absolute -top-2.5 -right-2.5'>{cartTotalQuantity}</span></span>
                        {
                            user.email && <Link to="/dashboard">
                            <span>{user.displayName}</span>
                                <img className='w-8 h-8 rounded-full' src={user.photoURL} alt="" />
                            </Link>
                        }
                    </div>
                </div>
            </div>
            <CartSidebar width={"100%"} position={"left"} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}>
                <Cart setIsSidebarOpen={setIsSidebarOpen} />
            </CartSidebar>
        </>
    );
};

export default NavBar;