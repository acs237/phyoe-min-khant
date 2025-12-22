import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { supabase } from "../helper/supabase";
import { getUser, signOut } from "../helper/auth";

const NavBar = () => {
  const location = useLocation();
  const [isSignedIn, setIsSignedIn] = useState(false);

  const tabs = [
    { name: 'Home', path: '/' },
    { name: 'Thoughts', path: '/thoughts' },
    { name: 'Buildings', path: '/buildings' },
    { name: 'Notes', path: '/notes' }
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const checkAdmin = async () => {
      const { data } = await getUser();
      setIsSignedIn(!!data.user);
      const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
        setIsSignedIn(!!session);
      });
      return () => sub.subscription.unsubscribe();
    }
    checkAdmin();
  }, []);

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <nav className="w-full bg-gradient-to-b from-sky-50 to-white border-b border-blue-100 px-4 py-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center">
          <div className="flex-1" />
          <div className="flex flex-1 justify-center space-x-4">
            {tabs.map((tab) => (
              <Link
                key={tab.name}
                to={tab.path}
                className={`
                  px-2 md:px-8 md:py-3 rounded-lg text-md transition-all duration-300 ease-in-out inline-block
                  ${
                    isActive(tab.path)
                      ? "bg-white text-sky-900 shadow-md border border-blue-200 transform scale-105"
                      : "bg-transparent text-sky-900 hover:bg-white/50 hover:scale-102"
                  }
                `}
              >
                {tab.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-1 justify-end">
            {isSignedIn && (
              <button
                onClick={handleSignOut}
                className="rounded-lg border border-sky-200 px-3 py-2 text-sm font-semibold text-sky-700 transition hover:bg-sky-50"
              >
                Sign out
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
