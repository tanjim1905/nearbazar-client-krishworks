import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRouter = () => {
    const location = useLocation();
    const {user, loading} = useAuth();
    if(loading){
        return "Loading"
    }
    else{
        return user?.email ? <Outlet/> : <Navigate to='/register' state={{from: location}}/>;
    }
};

export default PrivateRouter;