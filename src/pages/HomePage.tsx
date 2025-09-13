import profileImg from "/images/profile.JPG";
import ContactMe from "../components/ContactMe";
import NavBar from "../components/NavBar";

export default function Homepage() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-100 to-white ">
        {/* Nav Bar */}
        <NavBar />

        {/* Main Content Container */}
        <div className="flex grid grid-rows-3 justify-center p-10">
            
            {/* Title Section */}
            <div className="mb-12 grid grid-cols-2 items-center gap-8">
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

            <div className="text-sky-700 text-lg mb-5">
                <p className="text-sky-900 text-md">"There is no missed opportunity. In this world, there is always a golden seat that belongs to you, which can be earned."</p>
                <div className="mt-8 w-24 h-1 bg-sky-500 mx-auto rounded-full"></div>
                
                <div className="flex justify-center">
                    <ContactMe />
                </div>
                
            </div>
        </div>
        
        
        </div>
    );
}