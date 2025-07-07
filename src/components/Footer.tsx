
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-grenga-dark-brown text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="font-inter text-sm mb-4">
            © 2025 Collezione Grenga – Tutti i diritti riservati
          </p>
          
          <div className="flex justify-center space-x-6">
            <Link 
              to="/" 
              className="font-inter text-sm hover:text-grenga-bronze transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              to="/storia" 
              className="font-inter text-sm hover:text-grenga-bronze transition-colors duration-200"
            >
              La Storia
            </Link>
            <Link 
              to="/catalogo" 
              className="font-inter text-sm hover:text-grenga-bronze transition-colors duration-200"
            >
              Catalogo
            </Link>
            <Link 
              to="/contatti" 
              className="font-inter text-sm hover:text-grenga-bronze transition-colors duration-200"
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
