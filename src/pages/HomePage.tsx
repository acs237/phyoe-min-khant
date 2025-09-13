import { Link } from "react-router";
import profileImg from "/images/profile.JPG";
import ContactMe from "../components/ContactMe";

export default function Homepage() {

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
                    className="w-35 h-35 md:w-55 md:h-55 rounded-full shadow-lg mx-auto"
                />
            </div>

            <div className="text-sky-700 text-lg mb-16">
                <p className="text-sky-900 text-md">"There is no missed opportunity. In this world, there is always a golden seat that belongs to you, which can be earned."</p>
                <div className="mt-8 w-24 h-1 bg-sky-500 mx-auto rounded-full"></div>
            </div>

            {/* Navigation Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 place-items-center">
            
            {/* My Writing */}
            <Link 
                to="/writing"
                className="group bg-white hover:bg-sky-50 border-2 border-sky-200 hover:border-sky-400 rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
                
                <h3 className="text-xl font-semibold text-sky-900 mb-2">My Writing</h3>
            </Link>

            {/* My Portfolio */}
            <Link 
                to="/portfolio"
                className="group bg-white hover:bg-sky-50 border-2 border-sky-200 hover:border-sky-400 rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
                
                <h3 className="text-xl font-semibold text-sky-900 mb-2">My Portfolio</h3>
            </Link>

            {/* My Vlog */}
            {/* <button 
                onClick={() => navigate("/pmk-personal-portfolio/vlog")}
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
                onClick={() => navigate("/pmk-personal-portfolio/coaching")}
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
                onClick={() => navigate("/pmk-personal-portfolio/about-me")}
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
        
        {/* Footer Section */}
        <ContactMe />
        </div>
    );
}