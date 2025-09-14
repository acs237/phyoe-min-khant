import profileImg from "/images/profile.JPG";
import ContactMe from "../components/ContactMe";
import NavBar from "../components/NavBar";
import RotatingText from "../components/RotatingText";
import DownloadCV from "../components/DownloadCV";

export default function Homepage() {

    const sentences=[
        'Don\'t be afraid to make a mistake but don\'t make the same mistake twice.',
        'Everything has two sides: good and bad. \nEveryone has two faces: good and evil. Try to see the good face. \nEvery decision has pros and cons. Choose the one with less cons.',
        'You must be honest to those who you think are the most important. \nYou will never get true friends if you\'re dishonest.',
        'When you are over confident, look at someone from a superior position. \nWhen you are desperate, look at someone from an inferior position.',
        'There is no shortcut to success. You will get there only after a series of failures which you can overcome with resilience and a mind of never giving up or perseverance.',
        'There is no missed opportunity. In this world, there is always a golden seat that belongs to you, which can be earned.'
    ];

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
                <DownloadCV cvUrl="resource/file1.pdf" />
            </div>

            <div className="border-2 border-sky-200 rounded-2xl bg-white/70 p-6 mb-12 shadow-lg">
                <h1 className="flex justify-center text-2xl font-bold text-sky-900 mb-4 tracking-tight">Insights from My Journey</h1>
                <RotatingText sentences={sentences}/>
            
                <div className="mt-10 w-24 h-1 bg-sky-500 mx-auto rounded-full"></div>
                
            </div>
            <div className="flex justify-center">
                <ContactMe />
            </div>
        </div>
        
        
        </div>
    );
}