import { FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Socials() {
  return (
    <div className="flex grid grid-cols-3 justify-center gap-4">
      {/* Facebook */}
      <a
        href="https://www.facebook.com/phyoe.min.khant.969757"
        className="p-2 w-15 h-15 rounded-lg flex items-center border-2 border-sky-200 text-sky-900 hover:border-sky-400 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100"
      >
        <FaFacebook size={28} />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/phyoe-min-khant"
        className="p-2 w-15 h-15 rounded-lg flex items-center border-2 border-sky-200 text-sky-900 hover:border-sky-400 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100"
      >
        <FaLinkedin size={28} />
      </a>

      {/* Email */}
      <Link to={"/contact"}
            className={"p-2 w-15 h-15 rounded-lg flex items-center border-2 border-sky-200 text-sky-900 hover:border-sky-400 justify-center transition-all duration-500 hover:border-gray-100 hover:bg-gray-100"}
      >
        <FaEnvelope size={28} />
      </Link>
    </div>
  );
}