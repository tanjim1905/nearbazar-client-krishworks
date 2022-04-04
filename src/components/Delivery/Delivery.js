import React from 'react';

const Delivery = () => {
    return (
        <div className='container'>
            <div className='bg-primary p-16 rounded-xl'>
                <div className='bg-white p-10 rounded-xl flex flex-col-reverse lg:flex-row items-center'>
                    <div className='w-full lg:w-7/12'>
                        <h2 className='text-xl font-medium'>Organic Products and Food</h2>
                        <h1 className='text-3xl font-bold py-2'>Quic Delivery to <span className='text-primary'>Your Home</span></h1>
                        <p className='leading-1 font-poppins text-sm mb-8'>There are many products you will find our shop, Choose your daily necessary product from our KachaBazar shop and get some special offer. See Our latest discounted products from here and get a special discount.</p>
                        <a href="#" className='bg-primary px-5 py-3 rounded-full text-white hover:bg-green-700'>Download App</a>
                    </div>
                    <div className='w-full lg:w-5/12 flex justify-end'>
                        <img className='h-5/6' src="https://kachabazar-store.vercel.app/_next/image?url=%2Fcta%2Fdelivery-boy.png&w=384&q=75" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Delivery;