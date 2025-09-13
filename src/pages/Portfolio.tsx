import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SwipeDeck = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "My Personal Journey",
      address: "Yangon, Myanmar",
      date: "2024",
      image: "images/stonehenge.jpeg",
      copyright: "2024 Phyoe Min Khant. All rights reserved."
    },
    {
      title: "Professional Experience",
      address: "Yangon, Myanmar",
      date: "2024",
      image: "images/stonehenge.jpeg",
      copyright: "2024 Phyoe Min Khant. All rights reserved."
    },
    {
      title: "Core Skills & Expertise",
      address: "Yangon, Myanmar",
      date: "2024",
      image: "images/stonehenge.jpeg",
      copyright: "2024 Phyoe Min Khant. All rights reserved."
    },
    {
      title: "My Vlog & Content",
      address: "Yangon, Myanmar",
      date: "2024",
      image: "images/stonehenge.jpeg",
      copyright: "2024 Phyoe Min Khant. All rights reserved."
    },
    {
      title: "Vision & Goals",
      address: "Yangon, Myanmar",
      date: "2024",
      image: "images/stonehenge.jpeg",
      copyright: "2024 Phyoe Min Khant. All rights reserved."
    },
    {
      title: "Achievements & Recognition",
      address: "Yangon, Myanmar",
      date: "2024",
      image: "images/stonehenge.jpeg",
      copyright: "2024 Phyoe Min Khant. All rights reserved."
    },
    {
      title: "Leadership Philosophy",
      address: "Yangon, Myanmar",
      date: "2024",
      image: "images/stonehenge.jpeg",
      copyright: "2024 Phyoe Min Khant. All rights reserved."
    },
    {
      title: "Innovation & Future",
      address: "Yangon, Myanmar",
      date: "2024",
      image: "images/stonehenge.jpeg",
      copyright: "2024 Phyoe Min Khant. All rights reserved."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: { key: string; }) => {
      if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, slides.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center justify-center p-4">
        {/* Header */}
        <div className="text-center">
            <h1 className="text-2xl sm:text-4xl font-bold text-blue-900 mb-1">My Portfolio</h1>
            <div className="text-blue-700 mx-auto mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
        </div>

        {/* Main Deck Container - mobile friendly */}
        <div className="w-full max-w-6xl relative mt-10">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden relative">
            <div className="flex items-center sm:items-start gap-6 sm:gap-8 p-6 sm:p-12">
                
                {/* Left arrow (mobile: inline above/beside content; md+: outside using negative margin) */}
                
                <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="self-center bg-white shadow-lg rounded-full p-1 hover:bg-blue-50 transition transform active:scale-95 touch-manipulation
                            sm:w-8 sm:h-8 flex items-center justify-center"
                >
                    <ChevronLeft className="w-5 h-5 text-blue-600" />
                </button>

                {/* Slide Content */}
                <div className="flex-1 flex flex-col items-center ">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                        {slides[currentSlide].title}
                    </h3>

                    <div>
                        <p className="text-blue-400 text-base text-[12px] max-w-3xl">
                            {slides[currentSlide].address}
                            <br />
                            {slides[currentSlide].date}
                        </p>
                        

                        {/* image/Picture (stacked under text on small screens) */}
                        <img 
                        src = {slides[currentSlide].image}
                        className="bg-blue-50 rounded-md" />
                    </div>
                    

                    <span className="mt-4 text-blue-400 text-base text-[12px] max-w-3xl text-justify">
                        Copyright 2024 Phyoe Min Khant. All rights reserved.
                    </span>
                </div>

                {/* <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                        <div className="flex-1">
                        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                            {slides[currentSlide].description}
                        </p>
                        </div>
                        
                        <img 
                        src = {slides[currentSlide].image}
                        className="flex-shrink-0 flex items-center justify-center bg-blue-50 rounded-2xl p-6" />
                    
                    
                    </div> */}

                {/* Right arrow */}
                <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="self-center bg-white shadow-lg rounded-full p-1 hover:bg-blue-50 transition transform active:scale-95
                            w-8 h-8 flex items-center justify-center"
                >
                <ChevronRight className="w-5 h-5 text-blue-600" />
                </button>
            </div>
            </div>

            {/* Slide Indicators (touch friendly) */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {slides.map((_, index) => (
                <button
                key={index}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`w-5 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide ? 'bg-blue-600 scale-110' : 'bg-blue-200 hover:bg-blue-400'
                }`}
                />
            ))}
            </div>

            {/* Slide Counter */}
            <div className="absolute right-0 text-blue-600 font-semibold text-sm">
            {currentSlide + 1} / {slides.length}
            </div>
        </div>
    </div>
  );
};

export default SwipeDeck;