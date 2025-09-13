import type { PortfolioCardProps } from "../assets/content/portfolio";

const PortfolioCard: React.FC<PortfolioCardProps> = (portfolio) => {
  return (
    <div className="w-80 h-full border border-orange-100 rounded-2xl shadow-md overflow-hidden bg-white font-poppins">
      <div className="relative">
        <img
          src={portfolio.image}
          alt={portfolio.title}
          className="w-full h-48 object-cover"
        />
        {/* <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <h1 className="text-yellow-400 text-4xl">UNSW</h1>
        </div> */}
      </div>
      <div className="p-8">
        <h2 className="text-2xl text-yellow-500 text-center">{portfolio.title}</h2>
        <div className="mt-10 space-y-4 text-sm text-black">
          <p>Date: <span className="font-medium">{portfolio.date}</span></p>
          <p>Location: <span className="font-medium">{portfolio.address}</span></p>
        </div>
      </div>
    </div>
  );
}
export default PortfolioCard;