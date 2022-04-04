import React, { useEffect, useState } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Categories2 = () => {
    const [categories, setCategoris] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/categories')
            .then(res => res.json())
            .then(data => setCategoris(data));
    }, [])

    return (
        <div className='bg-gray-100'>
            <div className='container'>
                <div>
                    <div className='text-center space-y-1'>
                        <h2 className='text-2xl font-bold'>Featured Categories</h2>
                        <p>Choose your necessary products from this feature categories.</p>
                    </div>

                    <div className='grid grid-cols-6 gap-1 mt-10'>
                        {categories.map((category) => <div key={category._id} className='group'>
                            <div className='h-[120px] flex bg-white p-4 gap-x-3 items-center group-hover:shadow'>
                                <div className='w-8'>
                                    <img className='w-full' src={category.image} alt="" />
                                </div>
                                <div className='capitalize'>
                                    <div className='space-y-1'>
                                        <Link to={`/category/search/${category.parent.replace(' & ', '-')}`} className='group-hover:text-primary text-sm'>{category.parent}</Link>
                                        <div className='flex flex-col space-y-1'>
                                            {
                                                category.children.map((child, index) => <Link className='flex items-center text-gray-500 text-xs' to={`/category/search/${child.replace(' & ', '-')}`} key={index}><RiArrowRightSLine /> {child}</Link>)
                                            }
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>)}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Categories2;