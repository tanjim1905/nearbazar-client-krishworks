import React from 'react';
import left from '../../util/assets/images/App Store/app-download-img-left.png';
import right from '../../util/assets/images/App Store/app-download-img.png';
import apple from '../../util/assets/images/App Store/apple-store.png';
import google from '../../util/assets/images/App Store/google-store.png';

const AppStore = () => {
    return (
        <div className='bg-green-50 py-16'>
            <div className="container lg:grid grid-cols-3 items-center gap-x-5">
                <div>
                    <img src={left} alt="" />
                </div>
                <div>
                    <h1 className='text-3xl text-center capitalize font-semibold'>Get your daily needs from our nearBazar store</h1>
                    <p className='text-center text-sm leading-y-3 font-roboto py-5'>There are many products you will find our shop, Choose your daily necessary product from our NearBazar shop and get some special offer.</p>

                    <div className='flex gap-x-2 justify-between'>
                        <div className='w-full'><img className='cursor-pointer' src={apple} alt="" /></div>
                        <div className='w-full'><img className='cursor-pointer' src={google} alt="" /></div>
                    </div>
                </div>
                <div>
                    <img src={right} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AppStore;