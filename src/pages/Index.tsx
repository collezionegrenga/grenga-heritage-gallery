
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-grenga-ivory relative">
        {/* Hero Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-grenga-ivory/80 z-10"></div>
        
        {/* Placeholder for hero image */}
        <div className="absolute inset-0 bg-gray-200 opacity-20">
          <div className="w-full h-full flex items-center justify-center text-gray-400 font-inter">
            [Immagine Hero - Da inserire]
          </div>
        </div>

        <div className="text-center z-20 px-4">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-grenga-text mb-6">
            Collezione Grenga
          </h1>
          <p className="font-inter text-xl md:text-2xl text-grenga-text mb-8 max-w-3xl">
            Tre generazioni di passione per l'arte e l'antico. Ora disponibili.
          </p>
          
          <Link to="/catalogo">
            <Button 
              className="bg-grenga-bronze hover:bg-grenga-dark-brown text-white font-inter text-lg px-8 py-4 transition-all duration-300 hover:shadow-lg"
              size="lg"
            >
              Entra nella Collezione
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
