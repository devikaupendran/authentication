import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div className='w-full h-screen overflow-hidden absolute top-0'>
            <div className='w-full'>
                <video
                    src={assets.homeVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                    className='absolute top-0 left-0 w-full h-full object-cover z-[-1]'
                />
            </div>

            <div className='w-full h-full flex flex-col justify-center items-center gap-10 text-center'>

                <div className='max-w-[80%] text-wrap'>
                    <h1 className='text-2xl font-bold'>Welcome to our webpage</h1>
                    <p>We're excited to have you here.Whether you're returning or just getting started, signin or create an account to unlock a personalized experience. Everything you need is just a click away.</p>
                </div>

                <div className='flex justify-center gap-10'>
                    <Link to={'/signup'}>
                        <button className='px-7 py-4 bg-blue-500 hover:bg-blue-600 rounded text-white cursor-pointer'>Signup</button>
                    </Link>

                    <Link to={'/login'}>
                        <button className='px-7 py-4 bg-gray-500 hover:bg-gray-600 rounded text-white cursor-pointer'>Login</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage