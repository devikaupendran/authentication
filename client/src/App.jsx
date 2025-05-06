import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import About from './pages/About'
import { Toaster } from 'react-hot-toast'
import PrivateRoute from './components/PrivateRoute'


const App = () => {
    return (
        <div>
            <Toaster/>
            <Navbar />
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/home' element={<PrivateRoute> <Home /> </PrivateRoute>} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/about' element={<About />} />
            </Routes>

        </div>
    )
}

export default App
