import React from 'react';
import { useNavigate } from "react-router-dom";

export default function Homepage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-100 to-white flex flex-col items-center justify-center p-8">
        {/* Main Content Container */}
        <div className="max-w-4xl w-full text-center">
            
            {/* Title Section */}
            <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-sky-900 mb-4 tracking-tight">
                Hello, I am 
                <span className="block text-sky-600 mt-2">Phyoe Min Khant</span>
            </h1>
            <div className="w-24 h-1 bg-sky-500 mx-auto rounded-full"></div>
            </div>

            {/* Navigation Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            
            {/* My Personal Journey */}
            <button 
                onClick={() => navigate("/personal-journey")}
                className="group bg-white hover:bg-sky-50 border-2 border-sky-200 hover:border-sky-400 rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
                <div className="text-sky-600 text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                👤
                </div>
                <h3 className="text-xl font-semibold text-sky-900 mb-2">My Personal Journey</h3>
                <p className="text-sky-600 text-sm">Learn More</p>
            </button>

            {/* My Vlog */}
            <button 
                onClick={() => navigate("/vlog")}
                className="group bg-white hover:bg-sky-50 border-2 border-sky-200 hover:border-sky-400 rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
                <div className="text-sky-600 text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                💼
                </div>
                <h3 className="text-xl font-semibold text-sky-900 mb-2">My Vlog</h3>
                <p className="text-sky-600 text-sm">Learn More</p>
            </button>

            {/* My Coaching Journey */}
            <button 
                onClick={() => navigate("/coaching")}
                className="group bg-white hover:bg-sky-50 border-2 border-sky-200 hover:border-sky-400 rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
                <div className="text-sky-600 text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                ⚙️
                </div>
                <h3 className="text-xl font-semibold text-sky-900 mb-2">My Coaching Journey</h3>
                <p className="text-sky-600 text-sm">Learn More</p>
            </button>

            {/* About Me */}
            <button 
                onClick={() => navigate("/about-me")}
                className="group bg-white hover:bg-sky-50 border-2 border-sky-200 hover:border-sky-400 rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
                <div className="text-sky-600 text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                📧
                </div>
                <h3 className="text-xl font-semibold text-sky-900 mb-2">About Me</h3>
                <p className="text-sky-600 text-sm">Learn More</p>
            </button>
            </div>

            {/* Decorative Elements */}
            <div className="mt-16 flex justify-center space-x-2">
            <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-sky-500 rounded-full animate-pulse delay-75"></div>
            <div className="w-2 h-2 bg-sky-600 rounded-full animate-pulse delay-150"></div>
            </div>
        </div>

        {/* Background Decorative Shapes */}
        <div className="fixed top-10 left-10 w-20 h-20 bg-sky-200 rounded-full opacity-50 animate-bounce"></div>
        <div className="fixed bottom-10 right-10 w-16 h-16 bg-sky-300 rounded-full opacity-40 animate-bounce delay-1000"></div>
        <div className="fixed top-1/2 left-5 w-12 h-12 bg-sky-100 rounded-full opacity-60 animate-pulse"></div>
        </div>
    );
}