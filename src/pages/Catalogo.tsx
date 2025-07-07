
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Catalogo = () => {
  const catalogItems = [
    {
      id: 1,
      nome: "Poltrona Papale",
      epoca: "XVIII secolo",
      descrizione: "Mobile ecclesiastico di pregio con decorazioni barocche",
      prezzo: "Prezzo su richiesta",
      immagine: "/lovable-uploads/a181c675-1405-400b-bf99-705b14627c24.png"
    },
    {
      id: 2,
      nome: "Violino Antico",
      epoca: "XIX secolo", 
      descrizione: "Strumento musicale d'epoca in ottimo stato di conservazione",
      prezzo: "Prezzo su richiesta",
      immagine: "/lovable-uploads/1678f04a-1ab7-44eb-a61f-ed08b5999e39.png"
    },
    {
      id: 3,
      nome: "Sacra Famiglia",
      epoca: "XVII secolo",
      descrizione: "Dipinto religioso con cornice dorata originale", 
      prezzo: "Prezzo su richiesta",
      immagine: "/lovable-uploads/b3405b6e-7da2-43e1-9467-5876d10b7fd5.png"
    },
    {
      id: 4,
      nome: "Spioncino di Castello",
      epoca: "XVI secolo",
      descrizione: "Pannello ligneo intagliato a mano con decorazioni floreali",
      prezzo: "Prezzo su richiesta",
      immagine: "/lovable-uploads/4b3e0a5d-511f-4e6e-983f-c13e92020305.png"
    },
    {
      id: 5,
      nome: "Opera di Del Fabbretto",
      epoca: "XIX secolo",
      descrizione: "Acquerello dell'artista italiano con cornice dorata",
      prezzo: "Prezzo su richiesta",
      immagine: "/lovable-uploads/e6edb06b-25d4-42a7-86d6-8c9e8d1427b8.png"
    },
    {
      id: 6,
      nome: "Arazzo Antico",
      epoca: "XVIII secolo",
      descrizione: "Tessuto pregiato con scene mitologiche su telaio originale",
      prezzo: "Prezzo su richiesta",
      immagine: "/lovable-uploads/936f095d-67fd-4e6f-82dc-98378521b164.png"
    },
    {
      id: 7,
      nome: "Natura Morta di Saetti",
      epoca: "XX secolo",
      descrizione: "Dipinto moderno dell'artista con soggetti di vita quotidiana",
      prezzo: "Prezzo su richiesta",
      immagine: "/lovable-uploads/179ac235-cb59-427e-9fad-0000137de6d2.png"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-grenga-ivory py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-5xl font-bold text-grenga-text text-center mb-4">
            Catalogo
          </h1>
          
          <p className="font-inter text-xl text-grenga-text text-center mb-12">
            Scopri i tesori della nostra collezione
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {catalogItems.map((item) => (
              <Card 
                key={item.id} 
                className="bg-white border border-grenga-bronze rounded-lg shadow-md hover:scale-105 transition-all duration-300"
              >
                <CardContent className="p-4">
                  <img 
                    src={item.immagine}
                    alt={item.nome}
                    className="w-full mb-3 rounded object-cover"
                  />
                  
                  <h3 className="font-playfair text-2xl font-bold text-grenga-text mb-2">
                    {item.nome}
                  </h3>
                  
                  <p className="font-inter text-sm text-grenga-text mb-3 leading-relaxed">
                    {item.epoca} - {item.descrizione}
                  </p>
                  
                  <p className="font-inter italic text-sm text-grenga-dark-brown mb-4">
                    {item.prezzo}
                  </p>
                  
                  <Link to="/contatti">
                    <Button className="w-full bg-grenga-dark-brown hover:scale-95 text-white font-inter font-medium transition-all duration-200 rounded-md">
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
