import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
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
                <Link to={'/contact'}>Contact us </Link>
            </div>

        </nav>
    )
}

export default Navbar