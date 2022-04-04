import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
    const [datas, setDatas] = useState([]);
    const [parentsAll, setParentsAll] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7000/products')
            .then(res => res.json())
            .then(data => {
                setDatas(data)
                const king = data;


                // filtering Parents
                const parents = king.map(item => item.parent);
                const uniqParents = [...new Set(parents)];
                setParentsAll(uniqParents);
            })
    }, []);
    return (
        <div className='bg-gray-100'>
            <div className='container'>
                <div>
                    <div className='text-center space-y-1'>
                        <h2 className='text-2xl font-bold'>Featured Categories</h2>
                        <p>Choose your necessary products from this feature categories.</p>
                    </div>

                    <div className='grid grid-cols-6 gap-1 mt-10'>
                        {parentsAll.map((item, index) => <div key={`id+ ${index}`} className='h-[100px] group'>
                            <div className='flex bg-white p-4 gap-x-3 items-center group-hover:shadow'>
                                <div className='w-8'>
                                    <img className='w-full' src="https://kachabazar-store.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fahossain%2Fimage%2Fupload%2Fv1643898146%2Faolu4dryjfofkmvxhtac.png&w=48&q=75" alt="" />
                                </div>
                                <div className='capitalize'>
                                    <div>
                                        <Link to={`/categories-result/${item}`} className='group-hover:text-primary'>{item}</Link>
                                        <div className='relative top-0 left-2 flex flex-col'>
                                            {
                                                ([...new Set(((datas.filter(fine => fine?.parent === item)).map(k => k.children)))]).map((n, index) => <Link to={`/categories-result/${n}`} key={`child+ ${index}`}>{n}</Link>)
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

export default Categories;



{/*<div className='container py-16 bg-gray-200'>
            <div className='mb-16'>
                <h2 className='text-3xl text-center font-bold text-gray-800 capitalize mb-4'>Featured Categories</h2>
                <p className='text-center'>Choose your necessary products from this feature categories.</p>
            </div>

            <div className='grid sm:grid-cols-1 lg:grid-cols-3 gap-3'>
                <div className='relative rounded-sm overflow-hidden group'>
                    <img src={foods} className='w-full h-60' alt="" />
                    <Link to="/products/category/vegetable" className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition'>Foods</Link>
                </div>

                <div className='relative rounded-sm overflow-hidden group'>
                    <img src={fruits} className='w-full h-60' alt="" />
                    <a href="#" className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition'>Fruits</a>
                </div>

                <Link to="/products/category/vegetable" className='relative rounded-sm overflow-hidden group'>
                    <img src={vegetable} className='w-full h-60' alt="" />
                    <span className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition'>Vegetable</span>
                </Link>

                <div className='relative rounded-sm overflow-hidden group'>
                    <img src={chicken} className='w-full h-60' alt="" />
                    <a href="#" className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition'>Chicken</a>
                </div>

                <div className='relative rounded-sm overflow-hidden group'>
                    <img src={fish} className='w-full h-60' alt="" />
                    <a href="#" className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition'>Fish</a>
                </div>

                <div className='relative rounded-sm overflow-hidden group'>
                    <img src={drinks} className='w-full h-60' alt="" />
                    <a href="#" className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition'>Drinks</a>
                </div>
            </div>
</div>*/}