import React from 'react';
import BannerBottom from './BannerBottom/BannerBottom';
import OfferTimer from './OfferTimer/OfferTimer';
import Slider from './Slider/Slider';

const Banner = () => {
    return (
        <div className='container py-5'>
            <div className='sm:space-y-5 lg:space-y-0 lg:flex lg:gap-x-5'>
                <Slider />
                <OfferTimer />
            </div>
            <div className='pt-5'>
                <BannerBottom />
            </div>
        </div>
    );
};

export default Banner;