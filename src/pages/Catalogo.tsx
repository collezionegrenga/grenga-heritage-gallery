
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Catalogo = () => {
  // Placeholder items - will be replaced with real data later
  const catalogItems = [
    {
      id: 1,
      nome: "Esempio Opera d'Arte",
      epoca: "XVIII secolo",
      descrizione: "Descrizione breve dell'oggetto",
      prezzo: "Prezzo su richiesta"
    },
    {
      id: 2,
      nome: "Strumento Musicale Antico",
      epoca: "XIX secolo", 
      descrizione: "Descrizione breve dell'oggetto",
      prezzo: "Prezzo su richiesta"
    },
    {
      id: 3,
      nome: "Mobile Ecclesiastico",
      epoca: "XVII secolo",
      descrizione: "Descrizione breve dell'oggetto", 
      prezzo: "Prezzo su richiesta"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-grenga-ivory py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-grenga-text text-center mb-4">
            Catalogo
          </h1>
          
          <p className="font-inter text-lg text-grenga-text text-center mb-12">
            Scopri i tesori della nostra collezione
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {catalogItems.map((item) => (
              <Card 
                key={item.id} 
                className="border-grenga-bronze/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white"
              >
                <CardContent className="p-6">
                  {/* Placeholder for image */}
                  <div className="w-full h-64 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-400 font-inter">
                      [Immagine da inserire]
                    </span>
                  </div>
                  
                  <h3 className="font-playfair text-xl font-semibold text-grenga-text mb-2">
                    {item.nome}
                  </h3>
                  
                  <p className="font-inter text-sm text-grenga-text/70 mb-2">
                    {item.epoca}
                  </p>
                  
                  <p className="font-inter text-sm text-grenga-text mb-4">
                    {item.descrizione}
                  </p>
                  
                  <p className="font-inter text-lg font-medium text-grenga-text mb-4">
                    {item.prezzo}
                  </p>
                  
                  <Link to="/contatti">
                    <Button className="w-full bg-grenga-bronze hover:bg-grenga-dark-brown text-white font-inter transition-colors duration-300">
                      Contattaci per trattativa
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Catalogo;
