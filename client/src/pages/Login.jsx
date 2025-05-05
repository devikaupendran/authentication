import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Login = () => {
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
                <h1 className='text-5xl font-semibold mb-10 text-center'>Login</h1>

                {/* Form */}
                <form className='flex flex-col gap-3'>

                    {/* Email field  */}
                    <label className='font-medium'>Email ID:</label>
                    <input
                        type="email"
                        name="email"
                        className='border border-gray-300 outline-none p-2 rounded-sm text-white'
                        placeholder='Type here'
                        required
                    />

                    {/* Password field  */}
                    <label className='font-medium'>Password</label>
                    <input
                        type="password"
                        name="password"
                        className='border border-gray-300 outline-none p-2 rounded-sm text-white'
                        placeholder='Type here'
                        required
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