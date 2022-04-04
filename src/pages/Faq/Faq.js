import React from 'react';
import bg from '../../util/assets/images/page-header-bg.jpg';
import AccordingLayout from './AccordingLayout';

const Faq = () => {
    return (
        <div>
            <div className='h-[200px] bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${bg})` }}>
                <div className="container h-full flex justify-center items-center">
                    <h2 className='text-4xl font-bold'>Privacy Policy</h2>
                </div>
            </div>

            <div className="container py-20 justify-center flex items-center gap-x-20">
                <div className='w-1/2'>
                    <img className='w-full' src="https://kachabazar-store.vercel.app/_next/image?url=%2Ffaq.svg&w=750&q=75" alt="" />
                </div>

                <div className='w-1/2'>
                    <AccordingLayout />
                </div>
            </div>
        </div>
    );
};

export default Faq;