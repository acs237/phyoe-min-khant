import type { PortfolioCardProps } from "../assets/content/portfolio";

const PortfolioCard: React.FC<PortfolioCardProps> = (portfolio) => {
  return (
    <div className="grid grid-row w-80 h-full border border-blue-100 rounded-2xl shadow-md overflow-hidden bg-white">
      
      <div className="p-4">
        <h2 className="text-2xl text-blue-900 text-center">{portfolio.title}</h2>
        <div className="mt-10 space-y-4 text-sm text-black">
          <p>Date: <span className="font-medium">{portfolio.date}</span></p>
          <p>Location: <span className="font-medium">{portfolio.address}</span></p>
        </div>
      </div>
    
    <img
        src={portfolio.image}
        alt={portfolio.title}
        className="w-full h-60 object-cover"
    />

    <p className="text-xs text-gray-500 italic">{portfolio.copyright}</p>
    
    </div>
  );
}
export default PortfolioCard;