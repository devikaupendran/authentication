import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAppContext } from '../contexts/AppContext';

const PrivateRoute = ({ children }) => {

    const { isAuthenticated, loading } = useAppContext();

    if (loading) return <div>Loading...</div>
    return isAuthenticated ? children : <Navigate to="/" />;
}

export default PrivateRoute