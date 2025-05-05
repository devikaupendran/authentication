import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/home' element={<Home />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
            </Routes>

        </div>
    )
}

export default App
