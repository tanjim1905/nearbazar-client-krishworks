import React from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { useGetAllProductsQuery } from '../../../../util/Redux/api/productsApi';

const ManageAllProducts = () => {
    const { data, error, isLoading } = useGetAllProductsQuery();
    console.log(data);
    return (
        <div>
            <div>
                <h2>All Products</h2>
            </div>
            <div className='w-full bg-gray-100 shadow flex items-center px-4 py-3 rounded-md'>
                <input className='w-full bg-transparent outline-none border-none' type="text" name="" id="" placeholder='Search for products (e.g. fish, apple, oil)' />
                <RiSearchLine className='text-gray-500 font-bold text-xl' />
            </div>

            {
                isLoading ? <p>Loading...</p> : error ? <p>An errror occured</p> : <div className='mt-16 grid grid-cols-2 gap-4'>
                    {
                        data.map((product) => <div className='relative group' key={product._id}>
                            <div>
                                <img src={product.image} alt="" />
                            </div>
                            <div>
                                <h3></h3>
                            </div>
                            <div><p></p></div>
                            <div>
                                <p>Size:</p>
                                <p>Size:</p>
                                <p>Size:</p>
                                <p>Size:</p>
                                <p>Size:</p>
                            </div>

                            <div className='absolute top-0 right-0 opacity-0 group-hover:opacity-100 group-hover:right-10 duration-500'>
                                <button>delete</button>
                                <button>update</button>
                            </div>
                        </div>)
                    }
                </div>
            }
        </div>
    );
};

export default ManageAllProducts;