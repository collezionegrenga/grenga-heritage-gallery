
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-grenga-dark-brown py-5">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="font-inter text-xs text-white mb-2">
            © 2025 Collezione Grenga – Tutti i diritti riservati
          </p>
          
          <div className="flex justify-center items-center space-x-2">
            <Link 
              to="/" 
              className="font-inter font-medium text-xs text-grenga-ivory hover:text-grenga-bronze transition-colors duration-200"
            >
              Home
            </Link>
            <span className="text-grenga-ivory">|</span>
            <Link 
              to="/storia" 
              className="font-inter font-medium text-xs text-grenga-ivory hover:text-grenga-bronze transition-colors duration-200"
            >
              La Storia
            </Link>
            <span className="text-grenga-ivory">|</span>
            <Link 
              to="/catalogo" 
              className="font-inter font-medium text-xs text-grenga-ivory hover:text-grenga-bronze transition-colors duration-200"
            >
              Catalogo
            </Link>
            <span className="text-grenga-ivory">|</span>
            <Link 
              to="/contatti" 
              className="font-inter font-medium text-xs text-grenga-ivory hover:text-grenga-bronze transition-colors duration-200"
            >
              Contatti
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
