
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Catalogo = () => {
  // Placeholder data structure for future items
  const placeholderItems = [
    { id: 1, name: 'Oggetto d\'esempio 1' },
    { id: 2, name: 'Oggetto d\'esempio 2' },
    { id: 3, name: 'Oggetto d\'esempio 3' }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-grenga-ivory py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-grenga-text text-center mb-12">
            Catalogo
          </h1>
          
          <div className="text-center mb-16">
            <p className="font-inter text-lg text-grenga-text">
              I singoli oggetti verranno aggiunti a breve. Ogni pezzo racconta una storia unica.
            </p>
          </div>

          {/* Grid placeholder for future items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placeholderItems.map((item) => (
              <Card 
                key={item.id} 
                className="border-grenga-bronze/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white"
              >
                <CardContent className="p-6">
                  <div className="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-400 font-inter text-sm">
                    [Immagine oggetto]
                  </div>
                  
                  <h3 className="font-playfair text-xl font-semibold text-grenga-text mb-2">
                    {item.name}
                  </h3>
                  
                  <p className="font-inter text-sm text-grenga-text/70 mb-2">
                    Epoca • Descrizione breve
                  </p>
                  
                  <p className="font-inter text-lg font-medium text-grenga-bronze mb-4">
                    Prezzo su richiesta
                  </p>
                  
                  <Button 
                    className="w-full bg-grenga-bronze hover:bg-grenga-dark-brown text-white font-inter transition-colors duration-300"
                    size="sm"
                  >
                    Contattaci per trattativa
                  </Button>
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
