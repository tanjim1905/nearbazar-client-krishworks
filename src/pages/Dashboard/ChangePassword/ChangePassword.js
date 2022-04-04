import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../util/hooks/useAuth';

const ChangePassword = () => {
    const { user, resetPassword } = useAuth();
    const { register, handleSubmit } = useForm();
    const handleResetPassword = data => {
        if (user.password === data.password) {
            resetPassword(data.email);
        }
    }
    return (
        <div>
            <div>
                <h2 className='text-2xl capitalize font-semibold'>change password</h2>
            </div>

            <form onSubmit={() => handleSubmit(handleResetPassword)} className='space-y-5 pt-6'>
                <div className='flex flex-col gap-y-2'>
                    <label className='capitalize' htmlFor="">email address</label>
                    <input {...register("email")} type="email" className='w-full ring-1 ring-gray-200 focus:outline-none focus:ring-primary px-5 py-3 rounded-lg' name="" id="" placeholder='Your Email' defaultValue={user.email} required />
                </div>
                <div className='flex flex-col gap-y-2'>
                    <label className='capitalize' htmlFor="">current password</label>
                    <input type="password" className='w-full ring-1 ring-gray-200 focus:outline-none focus:ring-primary px-5 py-3 rounded-lg' name="" id="" placeholder='Your Current Password' required />
                </div>
                <div className='flex flex-col gap-y-2'>
                    <label className='capitalize' htmlFor="">new password</label>
                    <input type="password" className='w-full ring-1 ring-gray-200 focus:outline-none focus:ring-primary px-5 py-3 rounded-lg' name="" id="" placeholder='Your New Password' required />
                </div>

                <div className='flex justify-end'>
                    <button type='submit' className='capitalize bg-primary hover:bg-green-600 transition duration-300 font-semibold px-8 py-3 text-white rounded-lg'>Change Password</button>
                </div>
            </form>
        </div>
    );
};

export default ChangePassword;