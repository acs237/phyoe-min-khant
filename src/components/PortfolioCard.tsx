import type { PortfolioCardProps } from "../assets/content/portfolio";

const PortfolioCard: React.FC<PortfolioCardProps> = (portfolio) => {
  return (
    <div className="grid grid-row w-80 h-full border border-blue-100 rounded-2xl shadow-md overflow-hidden bg-white">
      
      <div className="p-4">
        <h2 className="text-2xl text-sky-900 text-center">{portfolio.title}</h2>
        <div className="mt-3 space-y-1 text-sm text-black">
          <p>Year: <span className="font-medium">{portfolio.year}</span></p>
          <p>Location: <span className="font-medium">{portfolio.address}</span></p>
        </div>
      </div>
    
    <img
        src={portfolio.image}
        alt={portfolio.title}
        className="w-full h-60 object-cover"
    />

    <p className="text-xs text-gray-500 text-center italic">{portfolio.copyright}</p>
    
    </div>
  );
}
export default PortfolioCard;