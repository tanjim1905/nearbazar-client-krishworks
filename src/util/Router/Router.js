import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CategoriesResult from '../../components/Categories/CategoriesResult';
import CategoriesResult2 from '../../components/Categories/CategoriesResult2';
import CategoriesResult3 from '../../components/Categories/CategoriesResult3';
import ProductDetails from '../../components/Products/ProductDetails';
import AboutUs from '../../pages/AboutUs/AboutUs';
import Register from '../../pages/Authentication/Register/Register';
import Checkout from '../../pages/Checkout/Checkout';
import ContactUs from '../../pages/ContactUs/ContactUs';
import AddProduct from '../../pages/Dashboard/AdminDashboard/AddProduct/AddProduct';
import ManageAllProducts from '../../pages/Dashboard/AdminDashboard/ManageAllProducts/ManageAllProducts';
import ChangePassword from '../../pages/Dashboard/ChangePassword/ChangePassword';
import Dashboard from '../../pages/Dashboard/Dashboard';
import DashboardContainer from '../../pages/Dashboard/DashboardContainer';
import MyOrders from '../../pages/Dashboard/MyOrders/MyOrders';
import UpdateProfile from '../../pages/Dashboard/UpdateProfile/UpdateProfile';
import Faq from '../../pages/Faq/Faq';
import Home from '../../pages/Home/Home';
import NotFound from '../../pages/NotFound/NotFound';
import Offers from '../../pages/Offers/Offers';
import TearmsCondiction from '../../pages/TearmsCondition/TearmsCondition';
import PrivateRouter from '../PrivateRouter/PrivateRouter';

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/products/details/:detailsId" element={<ProductDetails />} />
                <Route path="/products/category/vegetable" element={<CategoriesResult />} />
                <Route path="/offers" element={<Offers />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="/terms-and-conditions" element={<TearmsCondiction />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/privacy-policy" element={<Faq />} />

                <Route path="/" element={<PrivateRouter />}>
                    <Route path="about-us" element={<AboutUs />} />
                </Route>

                <Route path='/dashboard' element={<Dashboard />}>
                    <Route path='' element={<DashboardContainer />} />
                    <Route path='add-product' element={<AddProduct />} />
                    <Route path='myorders' element={<MyOrders />} />
                    <Route path='manage-all-products' element={<ManageAllProducts />} />
                    <Route path='update-profile' element={<UpdateProfile />} />
                    <Route path='change-password' element={<ChangePassword />} />
                </Route>


                <Route path='/categories-result/:searchResultId' element={<CategoriesResult />} />

                <Route path='/category/search/:categories' element={<CategoriesResult2 />} />
                <Route path='/category/:categoryParent' element={<CategoriesResult3 />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/register" element={<Register />} />
                <Route path='/404' element={<NotFound />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default Router;