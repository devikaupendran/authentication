import React from 'react'

const About = () => {
    return (
        <div className="max-w-4xl mx-auto mt-20 px-6 py-12 bg-white rounded-2xl shadow-lg">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>
            <p className="text-lg text-gray-600 mb-4 text-center">
                We are a modern authentication platform focused on providing secure, fast, and user-friendly login experiences for web and mobile applications.
            </p>
            <p className="text-md text-gray-700 leading-relaxed">
                Our mission is to make authentication simple and safe. Whether you're building a startup or scaling an enterprise product, our tools help you implement secure login flows, token-based authentication, and session management with ease.
            </p>
            <p className="text-md text-gray-700 mt-4 leading-relaxed">
                We prioritize data privacy, encryption best practices, and developer-friendly APIs to streamline your workflow. Join hundreds of developers who trust us to secure their users' identity.
            </p>
            <div className="mt-8 text-center">
                <span className="text-sm text-gray-500">© 2025 SecureAuth Platform. All rights reserved.</span>
            </div>
        </div>
    )
}

export default About