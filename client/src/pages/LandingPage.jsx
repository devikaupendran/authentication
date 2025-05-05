import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const LandingPage = () => {
    return (
        <div>
            <div>
                <video
                    src={assets.homeVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                />
            </div>

            <div>
                <h1>Welcome to our webpage</h1>
                <p>We're excited to have you here.Whether you're returning or just getting started, signin or create an account to unlock a personalized experience. Everything you need is just a click away.</p>
                <div>
                    <Link to={'/signup'}>
                        <button>Signup</button>
                    </Link>

                    <Link to={'/login'}>
                        <button>Login</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LandingPage