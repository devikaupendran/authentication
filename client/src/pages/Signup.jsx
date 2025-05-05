import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Signup = () => {
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

            {/* Signup form  */}
            <div className='w-[100%] sm:w-[400px] bg-black/40 backdrop-blur-md p-6 sm:p-10 rounded-lg shadow-lg'>
                <h1 className='text-5xl font-semibold mb-10 text-center'>Signup</h1>

                {/* Form */}
                <form className='flex flex-col gap-3'>

                    {/* Name field  */}
                    <label className='font-medium'>Name : </label>
                    <input
                        type="name"
                        name="name"
                        className='border border-gray-300 outline-none p-2 rounded-sm text-white'
                        placeholder='Type here'
                        required
                    />

                    {/* Email field  */}
                    <label className='font-medium'>Email ID : </label>
                    <input
                        type="email"
                        name="email"
                        className='border border-gray-300 outline-none p-2 rounded-sm text-white'
                        placeholder='Type here'
                        required
                    />

                    {/* Password field  */}
                    <label className='font-medium'>Password : </label>
                    <input
                        type="password"
                        name="password"
                        className='border border-gray-300 outline-none p-2 rounded-sm text-white'
                        placeholder='Type here'
                        required
                    />

                    {/* Confirm Password field  */}
                    <label className='font-medium'>Confirm Password : </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        className='border border-gray-300 outline-none p-2 rounded-sm text-white'
                        placeholder='Type here'
                        required
                    />

                    <div>
                        <p className='text-[13px] mb-2'> Don't have an account ?
                            <Link to={'/login'} className='underline'>Login</Link>
                        </p>
                    </div>

                    {/* Submit button  */}
                    <div className='flex justify-center'>
                        <button className='p-2 px-8 rounded-2xl bg-[#0e3359] hover:bg-[#26476a] transition font-semibold'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup