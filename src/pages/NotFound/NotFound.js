import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImg from '../../util/assets/images/404.svg';

const NotFound = () => {
    return (
        <div className='container h-screen flex justify-center items-center'>
            <div>
                <img className='w-[650px]' src={NotFoundImg} alt="" />
                <div className='text-center pt-10 space-y-6'>
                    <h2 className='text-4xl font-bold'>Page is not found!</h2>
                    <p>Sorry! This page is not found! Please try again later.</p>
                    <button className='text-white font-semibold bg-primary hover:bg-green-600 px-8 py-3 rounded duration-300'>
                        <Link to="/">Back to Home</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;