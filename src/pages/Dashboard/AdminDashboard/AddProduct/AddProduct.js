import React from 'react';
import { Link } from 'react-router-dom';

const AddProduct = () => {
    return (
        <div>
            <div>
                <h2 className='capitalize text-2xl font-bold'>add a new product</h2>
            </div>

            <div className='flex justify-between mt-8'>
                <div className='w-full text-center bg-primary text-white text-lg capitalize py-4'><Link className='' to="/product">product details</Link></div>
                <div className='w-full border border-gray-200 text-center bg-primary text-white text-lg capitalize py-4'><Link className='' to="/product">product images</Link></div>
                <div className='w-full border border-gray-200 text-center bg-primary text-white text-lg capitalize py-4'><Link className='' to="/product">product price</Link></div>
                <div className='w-full border border-gray-200 text-center bg-primary text-white text-lg capitalize py-4'><Link className='' to="/product">product inventory</Link></div>
            </div>

            <div className='mt-2 p-6 border border-gray-300 space-y-4'>
                <div className='flex flex-col space-y-1'>
                    <label className='capitalize' htmlFor="">product name</label>
                    <input className='w-full bg-gray-100  placeholder:text-black py-5 px-6' type="text" placeholder='Enter Your Product Name' />
                </div>
                <div className='flex flex-col space-y-1'>
                    <label className='capitalize' htmlFor="">product name</label>
                    <input className='w-full bg-gray-100  placeholder:text-black py-5 px-6' type="text" placeholder='Enter Your Product Name' />
                </div>
                <div className='flex flex-col space-y-1'>
                    <label className='capitalize' htmlFor="">product name</label>
                    <input className='w-full bg-gray-100  placeholder:text-black py-5 px-6' type="text" placeholder='Enter Your Product Name' />
                </div>
                <div className='flex flex-col space-y-1'>
                    <label className='capitalize' htmlFor="">product name</label>
                    <input className='w-full bg-gray-100  placeholder:text-black py-5 px-6' type="text" placeholder='Enter Your Product Name' />
                </div>
            </div>
        </div>
    );
};

export default AddProduct;