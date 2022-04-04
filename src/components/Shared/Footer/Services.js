import React from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { GoGift } from 'react-icons/go';
import { MdOutlineLocalShipping, MdPayment } from 'react-icons/md';

const Services = () => {
    return (
        <div className='border-b border-gray-200'>
            <div className="container py-10">
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
                    <div className='flex items-center gap-x-2 px-16 py-2 border-r border-gray-200'>
                        <MdOutlineLocalShipping className='text-primary text-2xl' />
                        <p className='capitalize text-sm'>free shipping from $500</p>
                    </div>
                    <div className='flex items-center gap-x-2 px-16 py-2 lg:border-r border-gray-200'>
                        <FiPhoneCall className='text-primary text-xl' />
                        <p className='capitalize text-sm'>support 24/7 at anytime</p>
                    </div>
                    <div className='flex items-center gap-x-2 px-16 py-2 border-r border-gray-200'>
                        <MdPayment className='text-primary text-2xl' />
                        <p className='capitalize text-sm'>secure payment totally safe</p>
                    </div>
                    <div className='flex items-center gap-x-2 px-16 py-2'>
                        <GoGift className='text-primary text-2xl' />
                        <p className='capitalize text-sm'>latest offer upto 20% off</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;