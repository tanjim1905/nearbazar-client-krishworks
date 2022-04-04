import React, { useState } from 'react';
import { AiOutlineAppstore } from 'react-icons/ai';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../util/hooks/useAuth';

const Dashboard = () => {
    const { logout } = useAuth();
    const [adminDashboard, setAdminDashboard] = useState(false);
    return (
        <div className='bg-gray-50'>
            <div className="container py-16 flex gap-x-10">
                <div className='w-3/12 h-full sticky top-0 left-0 z-50 bg-white px-6 py-8 rounded shadow-sm flex flex-col gap-y-2'>
                    <div>
                        <Link className='flex items-center gap-x-1' to=""><AiOutlineAppstore className='text-xl text-gray-700' /> Dashboard</Link>
                    </div>
                    <div>
                        <div onClick={() => setAdminDashboard(!adminDashboard)}>
                            <button>Admin Dashboard</button>
                        </div>
                        {
                            adminDashboard && <div className='flex flex-col px-4'>
                                <div>
                                    <Link className='flex items-center gap-x-1' to=""><AiOutlineAppstore className='text-xl text-gray-700' /> Add Product</Link>
                                </div>
                                <div>
                                    <Link className='flex items-center gap-x-1' to=""><AiOutlineAppstore className='text-xl text-gray-700' /> Add Product</Link>
                                </div>
                                <div>
                                    <Link className='flex items-center gap-x-1' to=""><AiOutlineAppstore className='text-xl text-gray-700' /> Add Product</Link>
                                </div>
                                <div>
                                    <Link className='flex items-center gap-x-1' to=""><AiOutlineAppstore className='text-xl text-gray-700' /> Add Product</Link>
                                </div>
                                <div>
                                    <Link className='flex items-center gap-x-1' to=""><AiOutlineAppstore className='text-xl text-gray-700' /> Add Product</Link>
                                </div>
                            </div>
                        }
                    </div>
                    <div>
                        <Link className='flex items-center gap-x-1' to="add-product">Add Product</Link>
                    </div>
                    <div>
                        <Link className='flex items-center gap-x-1' to="manage-all-products">Manage All Products</Link>
                    </div>
                    <div>
                        <Link className='flex items-center gap-x-1' to="myorders">My Orders</Link>
                    </div>
                    <div>
                        <Link to="update-profile">Update Profile</Link>
                    </div>
                    <div>
                        <Link to="change-password">Change Password</Link>
                    </div>
                    <div>
                        <button onClick={logout}>Logout</button>
                    </div>
                </div>
                <div className='w-9/12 bg-white px-6 py-8 shadow-sm rounded-xl'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;