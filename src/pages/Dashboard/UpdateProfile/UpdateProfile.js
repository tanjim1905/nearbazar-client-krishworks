import React, { useState } from 'react';
import useAuth from '../../../util/hooks/useAuth';

const UpdateProfile = () => {
    const { user } = useAuth();
    const [updateUser, setUpdateUser] = useState({});
    return (
        <div>
            <div>
                <h2 className='text-2xl capitalize'>update profile</h2>
            </div>

            <div className='space-y-1 pt-4'>
                <p className='text-sm'>Photo</p>

                <div className='flex justify-center items-center border border-dashed border-gray-200 rounded-lg py-6'>
                    <div className='text-center space-y-2.5'>
                        <div className='flex justify-center'>
                            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-3xl text-primary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg>
                        </div>
                        <p className='text-sm'>Drag your image here</p>
                        <p className='text-xs text-gray-400 italic'>(Only *jpeg and *png images will be accepted)</p>
                    </div>
                </div>
            </div>

            <div className='pt-5'>
                <img className='p-2 w-24 border border-gray-200 rounded-lg' src={user.photoURL} alt="" />
            </div>

            <div className='space-y-5 pt-6'>
                <div className='grid grid-cols-2 gap-5'>
                    <div className='flex flex-col gap-y-2'>
                        <label className='capitalize' htmlFor="">full name</label>
                        <input type="text" className='w-full ring-1 ring-gray-200 focus:outline-none focus:ring-primary px-5 py-3 rounded-lg' name="" id="" placeholder='Full Name' defaultValue="Justin J. Ruiz" required />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label className='capitalize' htmlFor="">your address</label>
                        <input type="text" className='w-full ring-1 ring-gray-200 focus:outline-none focus:ring-primary px-5 py-3 rounded-lg' name="" id="" placeholder='Your Address' defaultValue="705 Pine Barren Rd, Poole" required />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label className='capitalize' htmlFor="">phone/mobile</label>
                        <input type="number" className='w-full ring-1 ring-gray-200 focus:outline-none focus:ring-primary px-5 py-3 rounded-lg' name="" id="" placeholder='Your Mobile Number' defaultValue="212-512-2888" required />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label className='capitalize' htmlFor="">your email</label>
                        <input type="email" className='w-full ring-1 ring-gray-200 focus:outline-none focus:ring-primary px-5 py-3 rounded-lg' name="" id="" placeholder='Your Email' defaultValue="justin@gmail.com" required />
                    </div>
                </div>

                <div className='flex justify-end'>
                    <button className='capitalize bg-primary hover:bg-green-600 transition duration-300 font-semibold px-8 py-3 text-white rounded-lg'>update profile</button>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;