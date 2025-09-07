import { useState } from "react";

const ImageCarousel = ({ images }: { images: string[] }) =>{
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="mt-4">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 w-full max-w-2xl mx-auto">

        {/* Prev Button */}
        <button
            onClick={prev}
            className="top-1/2 left-2 -translate-y-1/2 bg-sky-600 text-white px-3 py-1 rounded-full hover:bg-sky-700"
        >
            ‹
        </button>

        {/* Image */}
        <img
            src={images[index]}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover rounded-xl shadow-md"
        />

        {/* Next Button */}
        <button
            onClick={next}
            className="top-1/2 right-2 -translate-y-1/2 bg-sky-600 text-white px-3 py-1 rounded-full hover:bg-sky-700"
        >
            ›
        </button>
        </div>
        
        {/* Dots indicator */}
        <div className="flex justify-center mt-2 gap-2">
        {images.map((_, i) => (
            <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
                i === index ? "bg-sky-600" : "bg-sky-300"
            }`}
            />
        ))}
        </div>
    </div>
  );
}

export default ImageCarousel;
