import React, { useEffect, useState } from 'react';
import { AiFillCreditCard } from 'react-icons/ai';
import { BsArrow90DegLeft } from 'react-icons/bs';
import { FiArrowRight } from 'react-icons/fi';
import { ImCreditCard } from 'react-icons/im';
import { IoBagHandle } from 'react-icons/io5';
import { MdOutlineLocalShipping } from 'react-icons/md';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decreaseCart, getTotals, removeFromCart } from '../../util/Redux/slice/cartSlice';

const Checkout = () => {
    const [creditCard, setCreditCard] = useState(false);
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

    return (
        <div className='py-16 bg-gray-50'>
            <div className='container flex gap-x-10'>
                <div className='w-7/12'>
                    <form className='space-y-10'>
                        <div className='space-y-3'>
                            <p className='text-xl font-semibold capitalize'>01. personal details</p>

                            <div className='space-y-6'>
                                <div className='flex gap-x-8'>
                                    <div className='w-1/2 flex flex-col gap-y-1'>
                                        <label className='text-sm capitalize' htmlFor="">first name</label>
                                        <input defaultValue={"John"} className="w-full border border-gray-200 px-5 py-3" type="text" name="" id="" />
                                    </div>
                                    <div className='w-1/2 flex flex-col gap-y-1'>
                                        <label className='text-sm capitalize' htmlFor="">last name</label>
                                        <input defaultValue={"Doe"} className="w-full border border-gray-200 px-5 py-3 rounded" type="text" name="" id="" />
                                    </div>
                                </div>
                                <div className='flex gap-x-8'>
                                    <div className='w-1/2 flex flex-col gap-y-1'>
                                        <label className='text-sm capitalize' htmlFor="">email address</label>
                                        <input defaultValue={"yourgamil@gmail.com"} className="w-full border border-gray-200 px-5 py-3" type="text" name="" id="" />
                                    </div>
                                    <div className='w-1/2 flex flex-col gap-y-1'>
                                        <label className='text-sm capitalize' htmlFor="">phone number</label>
                                        <input defaultValue={"046464646464"} className="w-full border border-gray-200 px-5 py-3 rounded" type="text" name="" id="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='space-y-3'>
                            <p className='text-xl font-semibold capitalize'>02. shopping details</p>

                            <div className='space-y-6'>
                                <div className='w-full flex flex-col gap-y-1'>
                                    <label className='text-sm capitalize' htmlFor="">street address</label>
                                    <input defaultValue={"Dhaka"} className="w-full border border-gray-200 px-5 py-3" type="text" name="" id="" />
                                </div>
                                <div className='flex gap-x-8'>
                                    <div className='w-1/3 flex flex-col gap-y-1'>
                                        <label className='text-sm capitalize' htmlFor="">email address</label>
                                        <input defaultValue={"yourgamil@gmail.com"} className="w-full border border-gray-200 px-5 py-3" type="text" name="" id="" />
                                    </div>
                                    <div className='w-1/3 flex flex-col gap-y-1'>
                                        <label className='text-sm capitalize' htmlFor="">city</label>
                                        <input defaultValue={"Dhaka, Bangladesh"} className="w-full border border-gray-200 px-5 py-3 rounded" type="text" name="" id="" />
                                    </div>
                                    <div className='w-1/3 flex flex-col gap-y-1'>
                                        <label className='text-sm capitalize' htmlFor="">zip/postal</label>
                                        <input defaultValue={"1362"} className="w-full border border-gray-200 px-5 py-3 rounded" type="text" name="" id="" />
                                    </div>
                                </div>
                                <div className='flex gap-x-8 items-end'>
                                    <div className='w-1/2 flex flex-col gap-y-1'>
                                        <label className='text-sm capitalize' htmlFor="">shipping cost</label>
                                        <div className='w-full bg-white p-5 rounded border border-gray-200 flex justify-between items-center'>
                                            <div className='flex items-center gap-x-2'>
                                                <div>
                                                    <MdOutlineLocalShipping className='text-3xl' />
                                                </div>
                                                <div>
                                                    <p className='text-sm font-semibold'>FedEx</p>
                                                    <p className='text-xs capitalize'>delivery: today cost: $60.00</p>
                                                </div>
                                            </div>
                                            <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="shipping-cost" id="" />
                                        </div>
                                    </div>
                                    <div className='w-1/2 bg-white px-3 py-5 rounded border border-gray-200 flex justify-between items-center'>
                                        <div className='flex items-center gap-x-2'>
                                            <div>
                                                <MdOutlineLocalShipping className='text-3xl' />
                                            </div>
                                            <div>
                                                <p className='text-sm font-semibold uppercase'>ups</p>
                                                <p className='text-xs capitalize'>delivery: 7 days cost: $20.00</p>
                                            </div>
                                        </div>
                                        <input className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="shipping-cost" id="" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='space-y-3'>
                            <p className='text-xl font-semibold capitalize'>03 payment details</p>

                            <div className='space-y-6'>
                                <div className='space-y-4'>
                                    {creditCard && <div className='flex justify-between border border-gray-200'>
                                        <input className='w-full py-3 px-5' type="text" placeholder='Card number' />
                                        <input className='py-3 px-5' type="text" />
                                    </div>}
                                    <div className='flex gap-x-8 items-end'>
                                        <div className='w-1/2 flex flex-col gap-y-1'>
                                            <div className='w-full bg-white px-3 py-5 rounded border border-gray-200 flex justify-between items-center'>
                                                <div className='flex items-center gap-x-2'>
                                                    <div>
                                                        <AiFillCreditCard className='text-xl' />
                                                    </div>
                                                    <div>
                                                        <p className='text-sm capitalize'>cash on delivery</p>
                                                    </div>
                                                </div>
                                                <input onClick={() => setCreditCard(false)} className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="shipping-cost" id="" />
                                            </div>
                                        </div>
                                        <div className='w-1/2 bg-white px-3 py-5 rounded border border-gray-200 flex justify-between items-center'>
                                            <div className='flex items-center gap-x-2'>
                                                <div>
                                                    <ImCreditCard className='text-xl' />
                                                </div>
                                                <div>
                                                    <p className='text-sm capitalize'>credit card</p>
                                                </div>
                                            </div>
                                            <input onClick={() => setCreditCard(true)} className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-primary checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="shipping-cost" id="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-x-8'>
                            <div className='w-1/2'>
                                <button className='capitalize w-full text-center bg-indigo-100 px-5 py-3 flex justify-center items-center'><BsArrow90DegLeft className='mr-2' /> continue shopping</button>
                            </div>
                            <div className='w-1/2'>
                                <button className='capitalize w-full text-center bg-indigo-100 px-5 py-3 flex items-center justify-center'>confirm order <FiArrowRight className='ml-2' /></button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='w-5/12 px-8 py-5 rounded shadow bg-white h-2/3'>
                    <p className='capitalize font-semibold'>order summary</p>

                    <div>
                        {
                            cart.cartItems?.length === 0 ? (
                                <div className='h-[200px] bg-gray-50 rounded-lg flex flex-col justify-center items-center my-6'>
                                    <div className='px-8 space-y-2'>
                                        <div className='flex justify-center items-center mx-auto'>
                                            <IoBagHandle className='text-gray-400 text-4xl' />
                                        </div>
                                        <div className='text-center'>
                                            <p className='capitalize text-gray-400'>no item added yet!</p>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className='max-h-[375px] overflow-auto scrollbar-hide'>
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
                                </div>
                            )
                        }
                    </div>

                    <div>
                        <div className='space-y-2'>
                            <form className='flex gap-x-2 pt-2'>
                                <input className='w-full border border-gray-100 px-4 py-1 rounded text-sm' type="text" name="" id="" placeholder='Input your coupon code' />
                                <button className='border border-gray-100 px-6 py-1 rounded capitalize font-semibold text-sm'>apply</button>
                            </form>

                            <div className='space-y-3'>
                                <div className='space-y-2 text-sm border-b border-gray-100 py-3'>
                                    <div className='flex justify-between items-center'>
                                        <p className='capitalize'>Subtotal</p>
                                        <p>$150.00</p>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <p className='capitalize'>shopping cost</p>
                                        <p>$0.00</p>
                                    </div>
                                    <div className='flex justify-between items-center'>
                                        <p className='capitalize'>discount</p>
                                        <p>$0.00</p>
                                    </div>
                                </div>

                                <div className='flex justify-between items-center'>
                                    <p className='uppercase text-sm font-semibold'>total cost</p>
                                    <p className='font-semibold'>$150</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;