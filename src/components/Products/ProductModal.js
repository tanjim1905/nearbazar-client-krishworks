import Modal from "@material-tailwind/react/Modal";
import ModalBody from "@material-tailwind/react/ModalBody";
import React from "react";
import { Link } from "react-router-dom";

export default function ProductModal({ product, showProductModal, setShowProductModal }) {
    console.log(product);
    return (
        <>
            <Modal size="regular" active={showProductModal} toggler={() => setShowProductModal(false)}>

                <ModalBody>
                    <div className="flex gap-x-4 px-2 py-4">
                        <div className="w-full h-80">
                            <Link onClick={() => product.parent} to={`/products/details/${product._id}`}>
                                <img className="h-full" src={product.image} alt="" />
                            </Link>
                        </div>
                        <div className="w-full space-y-5">
                            <Link to={`/products/details/${product._id}`}><h3 className="text-2xl font-semibold">{product.title}</h3></Link>
                            <span className="text-primary bg-green-100 px-2 py-1 rounded-full text-sm font-semibold">In stock</span>
                            <p className="text-sm leading-6">${product.description}</p>

                            <p className="text-2xl font-semibold"><span>${product.price}</span> <span><del>${product.discount}</del></span></p>

                            <div className="flex justify-between">
                                <button className="flex space-x-8 border border-gray-300 py-2 px-4 rounded focus:outline-none"><span>-</span>
                                    <span className="px-5">1</span>
                                    <span>+</span></button>
                                <button className="bg-primary px-12 capitalize text-white text-sm rounded focus:outline-none hover:bg-green-700">add to cart</button>
                            </div>
                        </div>
                    </div>
                </ModalBody>

                <button
                    className="absolute right-3 top-3 border border-primary text-red-500 w-8 rounded-full h-8 flex justify-center items-center font-semibold focus:outline-none"
                    onClick={(e) => setShowProductModal(false)}
                >
                    x
                </button>
            </Modal>
        </>
    );
}