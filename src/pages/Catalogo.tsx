import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Catalogo = () => {
  const catalogItems = [
    {
      id: 1,
      nome: "Poltrona Papale",
      epoca: "XIX secolo",
      descrizione: "Maestosa poltrona cerimoniale, dallo schienale alto con intagli lignei e decorazioni dorate. Secondo tradizione, appartenuta a Papa Pio IX. La sua eleganza e la qualità artigianale la rendono un pezzo di pregio assoluto, ideale per ambienti ecclesiastici, museali o effigi di alto livello.",
      prezzo: "Prezzo su richiesta",
      immagine: "/lovable-uploads/a181c675-1405-400b-bf99-705b14627c24.png"
    },
    {
      id: 2,
      nome: "Violino Antico - Scuola Cremonese",
      epoca: "fine XVIII secolo / primi XIX",
      descrizione: "Strumento ad arco di fattura artigianale, appartenente alla scuola cremonese, con elementi costruttivi compatibili con la liuteria di fine Settecento o inizi Ottocento. Conservato nella collezione di famiglia da oltre due secoli, secondo tradizione appartenne a un allievo della scuola di Antonio Stradivari. Testimonia l'alto livello della liuteria dell'epoca.",
      prezzo: "Prezzo su richiesta",
      immagine: "/lovable-uploads/1678f04a-1ab7-44eb-a61f-ed08b5999e39.png"
    },
    {
      id: 3,
      nome: "Madonna con Bambino e San Giuseppe",
      epoca: "XVIII secolo o precedente",
      descrizione: "Raffinato dipinto ad olio che rappresenta la Sacra Famiglia, con la Vergine dal volto sereno che tiene il Bambino addormentato, affiancata da San Giuseppe. Caratterizzato da una luminosa resa barocca, ricca di introspezione e spiritualità. La tela è coeva, con una cornice dorata originale. Pezzo ideale per collezionisti di arte sacra.",
      prezzo: "Prezzo su richiesta",
      immagine: "/lovable-uploads/b3405b6e-7da2-43e1-9467-5876d10b7fd5.png"
    },
    {
      id: 4,
      nome: "Intaglio Ligneo firmato \"C. Boca\"",
      epoca: "fine XIX / primo XX secolo",
      descrizione: "Elegante bassorilievo artigianale della Val Gardena, scolpito a mano e firmato \"C. Boca.\" Raffigura un uccello immerso in volute floreali, con una sorprendente profondità e finezza di dettaglio. Tipico dell'arte lignea della Val Gardena, regione nota per la produzione di sculture ornamentali di alta qualità.",
      prezzo: "Prezzo su richiesta",
      immagine: "/lovable-uploads/4b3e0a5d-511f-4e6e-983f-c13e92020305.png"
    },
    {
      id: 5,
      nome: "Piccolo quadro con tre figure maschili - Del Fabbretto",
      epoca: "XIX secolo",
      descrizione: "Delicata scena ritratta a acquerello o pittura su carta: tre gentiluomini in abiti e cilindri ottocenteschi. Il tratto disteso e leggermente caricaturale suggerisce un acuto osservatore della vita sociale del tempo, probabilmente legato alla corrente popolare del Fabbretto. La doppia cornice con vetro preserva l'opera.",
      prezzo: "Prezzo su richiesta",
      immagine: "/lovable-uploads/e6edb06b-25d4-42a7-86d6-8c9e8d1427b8.png"
    },
    {
      id: 6,
      nome: "Arazzo con scena orientalizzante",
      epoca: "fine XIX / inizio XX secolo",
      descrizione: "Grande arazzo tessuto raffigurante una scena conviviale in un ambiente medio-orientale, con tre figure vestite in abiti tradizionali. Le raffinate motivazioni geometriche e la ricca scala cromatica rievocano il gusto orientalista dell'epoca, aggiungendo atmosfera e profondità a qualsiasi ambiente.",
      prezzo: "Prezzo su richiesta",
      immagine: "/lovable-uploads/936f095d-67fd-4e6f-82dc-98378521b164.png"
    },
    {
      id: 7,
      nome: "Natura morta con angurie - Bruno Saetti",
      epoca: "1952",
      descrizione: "Composizione moderna firmata dall'artista bolognese Bruno Saetti (1902–1984), realizzata nel 1952. Il dipinto mostra influenze post-cubiste e sperimentazioni cromatiche tipiche delle sue nature morte. La tavolozza calda e l'equilibrio formale rendono l'opera perfetta per ambienti contemporanei e collezioni moderne.",
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
