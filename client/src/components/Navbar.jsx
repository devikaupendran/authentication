import React from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { useAppContext } from '../contexts/AppContext'
import axios from 'axios'
import toast from 'react-hot-toast'

const Navbar = () => {

    const { backendURL, isAuthenticated, setIsAuthenticated } = useAppContext();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const { data } = await axios.post(`${backendURL}/api/user/logout`, {}, { withCredentials: true });
    
            if (data.success) {
                setIsAuthenticated(false);
                navigate('/');
                toast.success('Logged out successfully');
            } else {
                toast.error('Logout failed');
            }
    
        } catch (err) {
            const msg = err.response?.data?.message || err.message;
            console.log("error : ", err);
            toast.error(msg);
        }
    };
    

    return (
        <nav className='w-full h-20 flex gap-5 justify-between items-center px-10 relative z-30 bg-transparent'>
            <Link to={'/home'}>
                <div className='h-16 w-16 flex items-center'>
                    <img src={assets.logo} alt='logo' />
                    <h1>Authentication</h1>
                </div>
            </Link>

            <div className='hidden md:flex gap-8 font-semibold text-[18px]'>
                <Link to={'/home'}>Home</Link>
                <Link to={'/about'}>About us</Link>
                {
                    isAuthenticated && (
                        <button
                            onClick={handleLogout}
                            className='bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 transition'
                        >
                            Logout
                        </button>
                    )
                }
            </div>

        </nav>
    )
}

export default Navbar;