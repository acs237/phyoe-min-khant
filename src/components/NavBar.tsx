import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  const tabs = [
    { name: 'Home', path: '/' },
    { name: 'My Writing', path: '/writing' },
    { name: 'My Portfolio', path: '/portfolio' },
    { name: 'My Resources', path: '/resources' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="w-full bg-gradient-to-b from-sky-50 to-white border-b border-blue-100 px-4 py-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center space-x-4">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              to={tab.path}
              className={`
                px-8 py-3 rounded-lg font-medium text-lg transition-all duration-300 ease-in-out inline-block
                ${
                  isActive(tab.path)
                    ? 'bg-white text-sky-900 shadow-md border border-blue-200 transform scale-105'
                    : 'bg-transparent text-sky-900 hover:bg-white/50 hover:scale-102'
                }
              `}
            >
              {tab.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;