// import Swiper core and required modules
import { Autoplay, Navigation, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import banner from '../../../util/assets/images/banner.jpg';




export const Slider = () => {
    return (

        <div className='w-full lg:w-7/12 rounded-md overflow-hidden'>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                // navigation
                pagination={{ clickable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
            >
                <SwiperSlide>
                    <div className='relative'>
                        <img className='w-full h-[350px]' src={banner} />
                        <div className='w-1/2 absolute top-[10%] left-[5%]'>
                            <h1 className='text-4xl text-gray-800 font-bold mb-4 capitalize'>Quality Freshness <br /> Guaranted!</h1>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Nostrum cumque iste non dolorem ex eligendi id porro dolores, nobis nesciunt.</p>

                            <div className='mt-12'>
                                <a href="#" className='bg-primary border border-primay rounded-lg text-white px-5 py-3 hover:bg-green-700 transition duration-300'>Shop Now</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img className='w-full h-[350px]' src={banner} />
                        <div className='w-1/2 absolute top-[10%] left-[5%]'>
                            <h1 className='text-4xl text-gray-800 font-bold mb-4 capitalize'>Quality Freshness <br /> Guaranted!</h1>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Nostrum cumque iste non dolorem ex eligendi id porro dolores, nobis nesciunt.</p>

                            <div className='mt-12'>
                                <a href="#" className='bg-primary border border-primay rounded-lg text-white px-5 py-3 hover:bg-green-700 transition duration-300'>Shop Now</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img className='w-full h-[350px]' src={banner} />
                        <div className='w-1/2 absolute top-[10%] left-[5%]'>
                            <h1 className='text-4xl text-gray-800 font-bold mb-4 capitalize'>Quality Freshness <br /> Guaranted!</h1>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Nostrum cumque iste non dolorem ex eligendi id porro dolores, nobis nesciunt.</p>

                            <div className='mt-12'>
                                <a href="#" className='bg-primary border border-primay rounded-lg text-white px-5 py-3 hover:bg-green-700 transition duration-300'>Shop Now</a>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;









{/*import React from 'react';
import banner from '../../../util/assets/images/banner.jpg';

const Slider = () => {
    return (
        <div className='w-full lg:w-7/12 rounded-md overflow-hidden'>
            <div className='relative'>
                <img className='w-full h-[350px]' src={banner} />
                <div className='w-1/2 absolute top-[10%] left-[5%]'>
                    <h1 className='text-4xl text-gray-800 font-bold mb-4 capitalize'>Quality Freshness <br /> Guaranted!</h1>

                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Nostrum cumque iste non dolorem ex eligendi id porro dolores, nobis nesciunt.</p>

                    <div className='mt-12'>
                        <a href="#" className='bg-primary border border-primay rounded-lg text-white px-5 py-3 hover:bg-green-700 transition duration-300'>Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;*/}