import React from 'react';

const BannerBottom = () => {
    return (
        <div className='flex justify-between items-center px-8 py-6 bg-orange-100 rounded-xl'>
            <div>
                <p className='text-xl lg:text-2xl capitalize'><span className='font-bold text-primary'>100% natural quality</span> <span>organic product</span></p>
                <p className='text-xs lg:text-sm'><span className='text-gray-600'>See Our latest discounted products from here and get a special</span> <span className='text-primary'>discount product</span></p>
            </div>
            <div>
                <button className='text-white capitalize lg:font-bold bg-primary px-3 lg:px-6 hover:bg-green-700 py-2 rounded-full'>shop now</button>
            </div>
        </div>
    );
};

export default BannerBottom;