import { Modal } from '@material-tailwind/react';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../util/hooks/useAuth';

const Login = ({ showLogin, setShowLogin }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const {signInWithGoogle} = useAuth();

    const handleGoogleSingIn = () => {
        signInWithGoogle(location, navigate)
    }
    return (
        <Modal active={showLogin} toggler={() => setShowLogin(false)}>
            <div>
                <div className="px-2 rounded-xl">
                    <button onClick={() => setShowLogin(false)} className='h-8 w-8 text-xs font-medium rounded-full border border-primary text-red-600 absolute right-5 top-5 hover:bg-primary hover:text-white focus:outline-none'>X</button>
                    <h1 className="font-bold text-3xl mt-3 text-center">Login</h1>
                    <h4 className="text-md mt-3 text-center text-gray-500">Login with your email and password</h4>
                    <form action="" className="mt-6">
                        <div className="my-5 text-sm">
                            <label htmlFor="username" className="block text-black">Email</label>
                            <div className="flex items-center relative">
                                <i className="far fa-envelope mr-2 text-gray-300 text-md absolute left-4 bottom-4"></i>
                                <input type="email" className='pl-10 py-3 mt-3 focus:outline-none border border-gray-200 focus:border-primary w-full rounded-md' autoFocus id="username" placeholder="john@gmail.com" />
                            </div>
                        </div>
                        <div className="my-5 text-sm">
                            <label htmlFor="password" className="block text-black">Password</label>
                            <div className="flex items-center relative">
                                <i className="fas fa-lock mr-2 text-gray-300 text-md absolute left-4 bottom-4"></i>
                                <input type="password" className='pl-10 py-3 mt-3 focus:outline-none border border-gray-200 focus:border-primary w-full rounded-md' autoFocus id="username" placeholder="Password" />
                            </div>
                        </div>

                        <button className="block text-center text-white bg-primary p-3 duration-300 hover:bg-green-700 w-full rounded-md">Login</button>
                    </form>

                    <div className="text-center">
                        <p className="my-5"> OR </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-2 mt-7">
                        <div>
                            <button className="w-full text-sm flex items-center justify-center text-gray-600 font-medium bg-gray-100 p-3 duration-300 rounded-md hover:bg-blue-600 hover:text-white"><i className='fab fa-facebook-f mr-2'></i> Login With Facebook</button>
                        </div>
                        <div>
                            <button onClick={() => handleGoogleSingIn()} className="w-full text-sm flex items-center justify-center text-gray-600 font-medium bg-gray-100 p-3 duration-300 rounded-md hover:bg-red-500 hover:text-white"><i className='fab fa-google mr-2'></i> Login With Google</button>
                        </div>
                    </div>

                    <p className="mt-12 text-center text-gray-400"> Don't have an account? <a href="../auth/register.html" className="text-black font-medium hover:text-primary"> Register </a>  </p>

                </div>
            </div>
        </Modal>
    );
};

export default Login;