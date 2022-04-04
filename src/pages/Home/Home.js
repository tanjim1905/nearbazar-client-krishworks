import React from 'react';
import AppStore from '../../components/AppStore/AppStore';
import Banner from '../../components/Banner/Banner';
import Categories2 from '../../components/Categories/Categories2';
import Delivery from '../../components/Delivery/Delivery';
import DiscountedProducts from '../../components/DiscountedProducts/DiscountedProducts';
import Products from '../../components/Products/Products';

const Home = () => {
    return (
        <>
            <Banner />
            <Categories2 />
            <Products />
            <Delivery />
            <DiscountedProducts />
            <AppStore />
        </>
    );
};

export default Home;