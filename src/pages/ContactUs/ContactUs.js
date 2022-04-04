import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import bg from '../../util/assets/images/page-header-bg.jpg';

const ContactUs = () => {
    return (
        <div>
            <div className='h-[200px] bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${bg})` }}>
                <div className="container h-full flex justify-center items-center">
                    <h2 className='text-4xl font-bold'>Contact Us</h2>
                </div>
            </div>

            <div className="container">
                <div className='py-16 flex gap-x-10'>
                    <div className='w-2/6 p-10 border border-gray-200 rounded-xl space-y-4 text-center'>
                        <span className='flex justify-center'><AiOutlineMail className='text-primary text-4xl' /></span>
                        <h4 className='text-xl font-semibold'>Email Us</h4>
                        <p className=' font-light leading-8'><span className='text-primary'>nearbazar@gmail.com</span>  Interactively grow empowered for process-centric total linkage.</p>
                    </div>

                    <div className='w-2/6 p-10 border border-gray-200 rounded-xl space-y-4 text-center'>
                        <span className='flex justify-center'><FiPhoneCall className='text-primary text-4xl' /></span>
                        <h4 className='text-xl font-semibold'>Call Us</h4>
                        <p className=' font-light leading-8'><span className='text-primary'>029-00124667</span> Distinctively disseminate focused solutions clicks-and-mortar ministate.</p>
                    </div>

                    <div className='w-2/6 p-10 border border-gray-200 rounded-xl space-y-4 text-center'>
                        <span className='flex justify-center'><HiOutlineLocationMarker className='text-primary text-4xl' /></span>
                        <h4 className='text-xl font-semibold'>Location</h4>
                        <p className=' font-light leading-8'>Cecilia Chapman, 561-4535 Nulla LA, United States 96522</p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className='flex gap-x-10'>
                    <div className='w-7/12'>
                        <img src="https://kachabazar-store.vercel.app/_next/image?url=%2Fcontact-us.png&w=1080&q=75" alt="" />
                    </div>
                    <div className='w-5/12'>
                        <div className='space-y-3'>
                            <h2 className='text-3xl font-bold'>For any suppoort just send your query</h2>
                            <p className='leading-8'>Collaboratively promote client-focused convergence vis-a-vis customer directed alignments via plagiarize strategic users and standardized infrastructures.</p>
                        </div>

                        <form className='space-y-5 pt-10'>
                            <div className='flex gap-x-5'>
                                <div className='w-1/2 flex flex-col gap-y-2'>
                                    <label htmlFor="name">Your Name</label>
                                    <input className='w-full px-5 py-4 border border-gray-200 rounded focus:outline-primary' type="text" name="" id="" placeholder='Inter Your Name' />
                                </div>
                                <div className='w-1/2 flex flex-col gap-y-2'>
                                    <label htmlFor="email">Your Email</label>
                                    <input className='w-full px-5 py-4 border border-gray-200 rounded focus:outline-primary' type="email" name="" id="" placeholder='Inter Your Email' />
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <label htmlFor="subject">Subject</label>
                                <input className='w-full px-5 py-4 border border-gray-200 rounded focus:outline-primary' type="text" name="" id="" placeholder='Inter Your Subject' />
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <label htmlFor="message">Message</label>
                                <textarea className='w-full px-5 py-4 border border-gray-200 rounded focus:outline-primary' name="" id="" rows="5" placeholder='Write your message here'>
                                </textarea>
                            </div>
                            <div>
                                <button className='bg-primary hover:bg-green-700 text-white font-semibold capitalize px-12 py-5 rounded focus:outline-none'>send message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;