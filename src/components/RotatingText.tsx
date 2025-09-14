import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type RotatingTextProps = {
  sentences: string[];
};

export default function RotatingText({sentences}: RotatingTextProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % sentences.length);
    }, 9000);

    return () => clearInterval(interval);
  }, [sentences.length]);

  return (
    <div className="h-40 md:h-20">
      <AnimatePresence mode="wait">
        <motion.h1
          key={sentences[index]}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-sky-900 text-lg mb-5 text-center whitespace-pre-line py-5"
        >
          {sentences[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}