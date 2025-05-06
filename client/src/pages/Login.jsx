import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import axios from 'axios';
import { useAppContext } from '../contexts/AppContext';
import toast from 'react-hot-toast'

const Login = () => {

    const { backendURL, setIsAuthenticated } = useAppContext();
    const navigate = useNavigate();
    const [formData, setFormData] = useState(
        {
            email: '',
            password: ''
        }
    );

    const handleChange = (e) => {
        setFormData(
            {
                ...formData,
                [e.target.name]: e.target.value
            }
        )
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`${backendURL}/api/user/login`, formData, { withCredentials: true })
            if (data.success) {
                toast.success('Login Successfully');
                setIsAuthenticated(true);
                console.log('Login successfull : ', data);
                navigate('/home');
            }
            else {
                toast.error(data.message);
            }
        }
        catch (err) {
            const msg = err.response?.data?.message || err.message;
            console.log("error : ", err);
            toast.error(msg);
        }
    }
    return (
        <div className='w-full h-screen text-white flex items-center justify-center md:justify-start absolute top-0 overflow-hidden md:ps-40 ps-0'>

            {/* background image  */}
            <div className='absolute top-0 left-0 w-full h-full -z-10'>
                <img
                    src={assets.loginBg}
                    alt="background image"
                    className='w-full h-full object-cover'
                />
            </div>

            {/* Login form  */}
            <div className='w-[100%] sm:w-[400px] h-[460px] bg-black/40 backdrop-blur-md p-6 sm:p-10 rounded-lg shadow-lg'>
                <h1 className='text-5xl font-semibold mb-10 text-center' >Login</h1>

                {/* Form */}
                <form className='flex flex-col gap-3' onSubmit={handleOnSubmit}>

                    {/* Email field  */}
                    <label className='font-medium'>Email ID:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        className='border border-gray-300 outline-none p-2 rounded-sm text-white'
                        placeholder='Type here'
                        required
                        onChange={handleChange}
                    />

                    {/* Password field  */}
                    <label className='font-medium'>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        className='border border-gray-300 outline-none p-2 rounded-sm text-white'
                        placeholder='Type here'
                        required
                        onChange={handleChange}
                    />

                    <div>
                        <p className='text-[13px] mb-2'> Don't have an account ?
                            <Link to={'/signup'} className='underline'>Signup</Link>
                        </p>
                    </div>

                    {/* Submit button  */}
                    <div className='flex justify-center'>
                        <button className='p-2 px-8 rounded-2xl bg-[#0e3359] hover:bg-[#26476a] transition font-semibold'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login