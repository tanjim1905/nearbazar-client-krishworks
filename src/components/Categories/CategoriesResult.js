import React, { useEffect, useState } from 'react';
import { IoBagAddSharp } from 'react-icons/io5';
import { useParams } from 'react-router-dom';

const CategoriesResult = () => {
    const { searchResultId } = useParams();
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        fetch('http://localhost:7000/products')
            .then(res => res.json())
            .then(data => {
                const king = data;


                // filtering Parents
                setSearchResult(king.filter(item => item.parent === searchResultId));
                setSearchResult(king.filter(item => item.children === searchResultId));

            })
    }, []);

    console.log(searchResult);
    return (
        <div className='grid grid-cols-5'>
            {
                searchResult.map((result) => <div key={result?._id} className='bg-white px-4 p-3 rounded-lg shadow group'>
                    <div className='w-full py-2 relative'>
                        <img className='w-full h-44 group-hover:scale-105 duration-300 cursor-pointer' src={result?.image} alt="" />
                        <div className='absolute top-0 right-0'>
                            <span className='bg-secondary text-white px-2 py-1 rounded-md'>7% Off</span>
                        </div>
                    </div>
                    <div>
                        <div className='mb-2'>
                            <p>{result?.title}</p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <span className='text-xl font-bold'>{result?.price}</span>
                            <span className='p-1.5 border border-gray-200 rounded cursor-pointer'><IoBagAddSharp className='text-2xl text-primary' /></span>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default CategoriesResult;