import React from 'react';
import { useGetAllProductsQuery } from '../../util/Redux/api/productsApi';
import Product from './Product';

const Products = () => {
    const { data, error, isLoading } = useGetAllProductsQuery();
    return (
        <div className='py-16 bg-gray-100 relative'>
            <div className="container">
                <div className='text-center'>
                    <h2 className='text-2xl font-bold'>Popular Products for Daily Shopping</h2>
                    <p className='pt-3'>See all our popular products in this week. You can choose your daily needs <br /> products from this list and get some special offer with free shipping.</p>
                </div>

                {
                    isLoading ? <p>Loading...</p> : error ? <p>An errror occured</p> : <div className='mt-16 grid grid-cols-2 lg:grid-cols-6 gap-4'>
                        {
                            data.slice(0, 18).map((product) => <Product key={product._id} product={product} />)
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default Products;