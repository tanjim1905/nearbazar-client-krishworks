import React, { useEffect } from 'react';
import { ImBoxRemove } from 'react-icons/im';
import { IoBagCheckOutline, IoBagHandle } from 'react-icons/io5';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from '../../util/Redux/slice/cartSlice';

const Cart = ({ setIsSidebarOpen }) => {
    const cart = useSelector((state) => state.rootReducer.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());
    }, [cart])

    const handleDecreaseCart = (cartItem) => {
        dispatch(decreaseCart(cartItem));
    }

    const handleIncreaseCart = (cartItem) => {
        dispatch(addToCart(cartItem));
    }

    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem));
    }

    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className='h-screen'>
            <div className='bg-indigo-50 py-4 sticky top-0 left-0 right-0'>
                <div className="container py-2 flex justify-between items-center">
                    <div className='flex gap-x-1'>
                        <p className='text-2xl'><IoBagCheckOutline /></p>
                        <p className='text-xl font-bold capitalize'>Shoping Cart</p>
                    </div>

                    <button
                        className="flex items-center gap-x-1 text-sm text-gray-500 hover:text-red-600 focus:outline-none"
                        onClick={() => setIsSidebarOpen(false)}
                    >
                        x <span>Close</span>
                    </button>
                </div>
            </div>

            <div className='overflow-y-auto h-[80%] scrollbar-hide'>
                {
                    cart.cartItems?.length === 0 ? (
                        <div className='h-full w-full container flex flex-col justify-center items-center'>
                            <div className='px-8 space-y-2'>
                                <div className='bg-green-100 w-20 h-20 rounded-full flex justify-center items-center mx-auto'>
                                    <IoBagHandle className='text-primary text-4xl'/>
                                </div>
                                <div className='text-center'>
                                    <p className='text-xl font-bold'>Your cart is empty</p>
                                    <p>No items added in your cart. Please add product to your cart list.</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            {
                                cart.cartItems?.map(cartItem => (
                                    <div className='container w-full border-b border-gray-200 last:border-b-0 py-4 flex justify-between items-end' key={cartItem._id}>
                                        <div className='w-6/12 flex items-center gap-x-4'>
                                            <div className='bg-white border border-gray-100 p-1 rounded-full'>
                                                <img className='w-8 h-8' src={cartItem.image} alt="" />
                                            </div>
                                            <div>
                                                <p className='text-sm'>{cartItem.title}</p>
                                                <p className='text-xs'>Item Price ${cartItem.price}</p>
                                                <p className='font-semibold'>${cartItem.price * cartItem.cartQuantity}</p>
                                            </div>
                                        </div>
                                        <div className='w-3/12 border border-gray-100 rounded flex justify-center items-center gap-x-4'>
                                            <button onClick={() => handleDecreaseCart(cartItem)} className='focus:outline-none'>-</button>
                                            <span>{cartItem.cartQuantity}</span>
                                            <button onClick={() => handleIncreaseCart(cartItem)} className='focus:outline-none'>+</button>
                                        </div>
                                        <div className='w-3/12 flex justify-end'>
                                            <button onClick={() => handleRemoveFromCart(cartItem)} className='focus:outline-none text-red-500 text-xl'><RiDeleteBinLine /></button>
                                        </div>
                                    </div>
                                ))
                            }
                        </>
                    )
                }
            </div>

            <div className='container pb-2 sticky bottom-0'>
                {
                    cart.cartItems.length > 0 && <div className='flex justify-end mb-2'>
                        <button onClick={() => handleClearCart()} className='bg-red-500 text-white font-bold p-2 rounded-lg hover:bg-red-700 flex gap-x-1 text-sm focus:outline-none'><ImBoxRemove className='text-lg' /> Clear Cart</button>
                    </div>
                }
                <Link onClick={() => setIsSidebarOpen(false)} to="/checkout" className="bg-primary flex justify-between items-center px-3 py-2 rounded-md">
                    <p className='text-white font-semibold capitalize'>proceed to checkout</p>
                    <button className='bg-white text-primary text-lg font-bold px-3 py-2 rounded-md'>${cart.cartTotalAmount}</button>
                </Link>
            </div>
        </div>
    );
};

export default Cart;