
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/storia', label: 'La Storia' },
    { href: '/catalogo', label: 'Catalogo' },
    { href: '/galleria', label: 'Galleria' },
    { href: '/contatti', label: 'Contatti' }
  ];

  return (
    <nav className="bg-grenga-ivory border-b border-grenga-bronze/20 py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-playfair text-2xl font-semibold text-grenga-text">
            Collezione Grenga
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "font-inter text-sm font-medium transition-colors duration-200 relative",
                  "after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-grenga-link after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
                  location.pathname === item.href 
                    ? "text-grenga-link after:scale-x-100" 
                    : "text-grenga-text hover:text-grenga-link"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button - simplified for now */}
          <div className="md:hidden">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="font-inter text-sm text-grenga-text hover:text-grenga-link"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
