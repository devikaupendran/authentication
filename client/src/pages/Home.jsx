import React from 'react'

const Home = () => {
    return (
        <div className="max-w-xl mx-auto mt-20 p-8 text-center border border-gray-200 rounded-2xl shadow-md bg-white">
            <h1 className="text-3xl font-bold text-gray-800">Welcome, you are logged in!</h1>
            <p className="mt-6 text-lg text-gray-600">
                This is your personalized home page. As a logged-in user, you now have access to exclusive content and features.
                Explore the dashboard and enjoy your experience.
            </p>
        </div>
    )
}

export default Home