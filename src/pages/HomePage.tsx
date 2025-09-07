import { useNavigate } from "react-router-dom";

import profileImg from "/images/profile-picture.png";

export default function Homepage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-100 to-white flex flex-col items-center justify-center p-8">
        {/* Main Content Container */}
        <div className="max-w-5xl w-full text-center">
            
            {/* Title Section */}
            <div className="mb-12 grid grid-cols-2 gap-6">
                <h1 className="text-5xl md:text-6xl font-bold text-sky-900 mb-4 tracking-tight">
                    Hello, I am 
                    <span className="block text-sky-600 mt-2">Phyoe Min Khant</span>
                </h1>
                <img
                    src={profileImg}
                    alt="My profile"
                    className="w-48 h-48 rounded-full shadow-lg mx-auto"
                />
            </div>

            <div className="text-sky-700 text-lg mb-16">
                <p className="text-sky-600 text-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="mt-8 w-24 h-1 bg-sky-500 mx-auto rounded-full"></div>
            </div>

            {/* Navigation Buttons */}
            {/* TODO: use this when there's more items*/}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 place-items-center"> */}
            <div className="grid grid-cols-1 gap-6 mt-16 place-items-center">
            
            {/* My Personal Journey */}
            <button 
                onClick={() => navigate("/personal-journey")}
                className="group bg-white hover:bg-sky-50 border-2 border-sky-200 hover:border-sky-400 rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
                {/* <div className="text-sky-600 text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                👤
                </div> */}
                <h3 className="text-xl font-semibold text-sky-900 mb-2">My Personal Journey</h3>
            </button>

            {/* My Vlog */}
            {/* <button 
                onClick={() => navigate("/vlog")}
                className="group bg-white hover:bg-sky-50 border-2 border-sky-200 hover:border-sky-400 rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
                <div className="text-sky-600 text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                💼
                </div>
                <h3 className="text-xl font-semibold text-sky-900 mb-2">My Vlog</h3>
                <p className="text-sky-600 text-sm">Learn More</p>
            </button> */}

            {/* My Coaching Journey */}
            {/* <button 
                onClick={() => navigate("/coaching")}
                className="group bg-white hover:bg-sky-50 border-2 border-sky-200 hover:border-sky-400 rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
                <div className="text-sky-600 text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                ⚙️
                </div>
                <h3 className="text-xl font-semibold text-sky-900 mb-2">My Coaching Journey</h3>
                <p className="text-sky-600 text-sm">Learn More</p>
            </button> */}

            {/* About Me */}
            {/* <button 
                onClick={() => navigate("/about-me")}
                className="group bg-white hover:bg-sky-50 border-2 border-sky-200 hover:border-sky-400 rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
                <div className="text-sky-600 text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                📧
                </div>
                <h3 className="text-xl font-semibold text-sky-900 mb-2">About Me</h3>
                <p className="text-sky-600 text-sm">Learn More</p>
            </button> */}
            </div>
        </div>

        </div>
    );
}