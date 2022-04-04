import React, { useState } from 'react';
import { IoBagAddSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { addToCart } from '../../util/Redux/slice/cartSlice';
import ProductModal from './ProductModal';

const Product = ({ product }) => {
    const [showProductModal, setShowProductModal] = useState(false);

    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product))
    }
    return (
        <>
            <div className='bg-white px-4 p-3 rounded-lg shadow group'>
                <div className='w-full py-2'>
                    <img onClick={() => setShowProductModal(true)} className='w-full h-44 group-hover:scale-105 duration-300 cursor-pointer' src={product.image} alt="" />
                </div>
                <div>
                    <div className='mb-2'>
                        <p>{product.title}</p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <span className='text-xl font-bold'>${product.price}</span>
                        <span onClick={() => handleAddToCart(product)} className='p-1.5 border border-gray-200 rounded cursor-pointer'><IoBagAddSharp className='text-2xl text-primary' /></span>
                    </div>
                </div>
            </div>
            {showProductModal && <ProductModal showProductModal={showProductModal} setShowProductModal={setShowProductModal} key={product._id} product={product} />}
        </>
    );
};

export default Product;