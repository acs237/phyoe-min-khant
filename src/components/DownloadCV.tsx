import React from "react";
import { FileText } from "lucide-react";

type DownloadCVProps = {
  cvUrl: string; // URL or path to your CV file
  buttonText?: string;
};

const DownloadCV: React.FC<DownloadCVProps> = ({ cvUrl, buttonText = "My CV" }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvUrl;
    link.target = "_blank";
    // link.download = cvUrl.split("/").pop() as string; // Extract filename from URL
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="">
      <button
        onClick={handleDownload}
        className="flex items-center text-black font-semibold rounded-lg shadow-lg transition-all bg-white hover:bg-sky-50        border-2 border-sky-200 hover:border-sky-400 rounded-xl        transition-all duration-300 transform hover:scale-105          hover:shadow-xl"
      >
        <FileText className="text-l text-sky-900 m-2" />
        <span className='text-l text-sky-900 m-2'>{buttonText}</span>
        
      </button>
    </div>
  );
};

export default DownloadCV;
