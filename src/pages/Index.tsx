
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  const scrollToCatalog = () => {
    const catalogSection = document.getElementById('catalogo');
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center relative">
        {/* Background Image - Madonna con Bambino */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/lovable-uploads/b3405b6e-7da2-43e1-9467-5876d10b7fd5.png')`
          }}
        />
        
        {/* Dark bronze overlay */}
        <div className="absolute inset-0 bg-grenga-dark-brown opacity-50" />

        <div className="text-center z-20 px-4">
          <h1 className="font-playfair text-6xl font-normal text-white mb-4 tracking-wider">
            Collezione Grenga
          </h1>
          <p className="font-inter italic text-xl text-grenga-ivory mb-6 max-w-3xl">
            Tre generazioni di passione per l'arte e l'antico. Ora disponibili.
          </p>
          
          <Button 
            onClick={scrollToCatalog}
            className="bg-grenga-bronze hover:bg-white hover:text-grenga-bronze text-white font-playfair font-medium text-lg px-8 py-3 rounded-lg transition-all duration-300 hover:underline tracking-wide"
          >
            Entra nella Collezione
          </Button>
        </div>
      </div>

      {/* Storia Section */}
      <div id="storia" className="py-16 bg-grenga-ivory">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Text Column - 60% */}
            <div className="lg:w-3/5 p-10">
              <h2 className="font-playfair text-5xl font-bold text-grenga-text mb-6">
                Una storia familiare lunga un secolo
              </h2>
              
              <div className="space-y-4 font-inter text-base text-grenga-text leading-relaxed">
                <p>
                  La Collezione Grenga nasce agli inizi del XX secolo grazie a un ramo della famiglia 
                  in contatto con il Conte degli Augusti, da cui furono acquisite alcune opere e arredi.
                </p>
                
                <p>
                  Per tre generazioni la famiglia Grenga ha custodito dipinti, strumenti musicali, 
                  mobili ecclesiastici e oggetti rari, provenienti anche da un barone romagnolo.
                </p>
                
                <p>
                  Tra i principali conservatori figurano il Commendatore Lorenzo Gobbi e il 
                  Cavaliere Leonardo Salvigni.
                </p>
                
                <p>
                  Oggi, per la prima volta, la collezione viene resa pubblica e disponibile per 
                  l'acquisto. Un'occasione unica per collezionisti, gallerie e appassionati dell'antico.
                </p>
              </div>
            </div>

            {/* Image Column - 40% */}
            <div className="lg:w-2/5 p-5">
              <img 
                src="/lovable-uploads/a181c675-1405-400b-bf99-705b14627c24.png"
                alt="Poltrona papale antica"
                className="w-full object-cover border-2 border-grenga-dark-brown rounded"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Catalogo Section */}
      <div id="catalogo" className="py-16 bg-grenga-ivory">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-5xl font-bold text-grenga-text text-center mb-12">
            Catalogo
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Poltrona Papale */}
            <div className="bg-white border border-grenga-bronze rounded-lg shadow-md p-4 hover:scale-105 transition-all duration-300">
              <img 
                src="/lovable-uploads/a181c675-1405-400b-bf99-705b14627c24.png"
                alt="Poltrona Papale"
                className="w-full mb-3 rounded"
              />
              <h3 className="font-playfair text-2xl font-bold text-grenga-text mb-2">
                Poltrona Papale
              </h3>
              <p className="font-inter text-sm text-grenga-text mb-3 leading-relaxed">
                XVIII secolo - Mobile ecclesiastico di pregio con decorazioni barocche
              </p>
              <p className="font-inter italic text-sm text-grenga-dark-brown mb-4">
                Prezzo su richiesta
              </p>
              <Link to="/contatti">
                <Button className="w-full bg-grenga-dark-brown hover:scale-95 text-white font-inter font-medium transition-all duration-200 rounded-md">
                  Contattaci per trattativa
                </Button>
              </Link>
            </div>

            {/* Violino Antico */}
            <div className="bg-white border border-grenga-bronze rounded-lg shadow-md p-4 hover:scale-105 transition-all duration-300">
              <img 
                src="/lovable-uploads/1678f04a-1ab7-44eb-a61f-ed08b5999e39.png"
                alt="Violino Antico"
                className="w-full mb-3 rounded"
              />
              <h3 className="font-playfair text-2xl font-bold text-grenga-text mb-2">
                Violino Antico
              </h3>
              <p className="font-inter text-sm text-grenga-text mb-3 leading-relaxed">
                XIX secolo - Strumento musicale d'epoca in ottimo stato di conservazione
              </p>
              <p className="font-inter italic text-sm text-grenga-dark-brown mb-4">
                Prezzo su richiesta
              </p>
              <Link to="/contatti">
                <Button className="w-full bg-grenga-dark-brown hover:scale-95 text-white font-inter font-medium transition-all duration-200 rounded-md">
                  Contattaci per trattativa
                </Button>
              </Link>
            </div>

            {/* Sacra Famiglia */}
            <div className="bg-white border border-grenga-bronze rounded-lg shadow-md p-4 hover:scale-105 transition-all duration-300">
              <img 
                src="/lovable-uploads/b3405b6e-7da2-43e1-9467-5876d10b7fd5.png"
                alt="Sacra Famiglia"
                className="w-full mb-3 rounded"
              />
              <h3 className="font-playfair text-2xl font-bold text-grenga-text mb-2">
                Sacra Famiglia
              </h3>
              <p className="font-inter text-sm text-grenga-text mb-3 leading-relaxed">
                XVII secolo - Dipinto religioso con cornice dorata originale
              </p>
              <p className="font-inter italic text-sm text-grenga-dark-brown mb-4">
                Prezzo su richiesta
              </p>
              <Link to="/contatti">
                <Button className="w-full bg-grenga-dark-brown hover:scale-95 text-white font-inter font-medium transition-all duration-200 rounded-md">
                  Contattaci per trattativa
                </Button>
              </Link>
            </div>

            {/* Spioncino Intagliato */}
            <div className="bg-white border border-grenga-bronze rounded-lg shadow-md p-4 hover:scale-105 transition-all duration-300">
              <img 
                src="/lovable-uploads/4b3e0a5d-511f-4e6e-983f-c13e92020305.png"
                alt="Spioncino Intagliato"
                className="w-full mb-3 rounded"
              />
              <h3 className="font-playfair text-2xl font-bold text-grenga-text mb-2">
                Spioncino di Castello
              </h3>
              <p className="font-inter text-sm text-grenga-text mb-3 leading-relaxed">
                XVI secolo - Pannello ligneo intagliato a mano con decorazioni floreali
              </p>
              <p className="font-inter italic text-sm text-grenga-dark-brown mb-4">
                Prezzo su richiesta
              </p>
              <Link to="/contatti">
                <Button className="w-full bg-grenga-dark-brown hover:scale-95 text-white font-inter font-medium transition-all duration-200 rounded-md">
                  Contattaci per trattativa
                </Button>
              </Link>
            </div>

            {/* Opera Del Fabbretto */}
            <div className="bg-white border border-grenga-bronze rounded-lg shadow-md p-4 hover:scale-105 transition-all duration-300">
              <img 
                src="/lovable-uploads/e6edb06b-25d4-42a7-86d6-8c9e8d1427b8.png"
                alt="Opera di Del Fabbretto"
                className="w-full mb-3 rounded"
              />
              <h3 className="font-playfair text-2xl font-bold text-grenga-text mb-2">
                Opera di Del Fabbretto
              </h3>
              <p className="font-inter text-sm text-grenga-text mb-3 leading-relaxed">
                XIX secolo - Acquerello dell'artista italiano con cornice dorata
              </p>
              <p className="font-inter italic text-sm text-grenga-dark-brown mb-4">
                Prezzo su richiesta
              </p>
              <Link to="/contatti">
                <Button className="w-full bg-grenga-dark-brown hover:scale-95 text-white font-inter font-medium transition-all duration-200 rounded-md">
                  Contattaci per trattativa
                </Button>
              </Link>
            </div>

            {/* Arazzo Antico */}
            <div className="bg-white border border-grenga-bronze rounded-lg shadow-md p-4 hover:scale-105 transition-all duration-300">
              <img 
                src="/lovable-uploads/936f095d-67fd-4e6f-82dc-98378521b164.png"
                alt="Arazzo Antico"
                className="w-full mb-3 rounded"
              />
              <h3 className="font-playfair text-2xl font-bold text-grenga-text mb-2">
                Arazzo Antico
              </h3>
              <p className="font-inter text-sm text-grenga-text mb-3 leading-relaxed">
                XVIII secolo - Tessuto pregiato con scene mitologiche su telaio originale
              </p>
              <p className="font-inter italic text-sm text-grenga-dark-brown mb-4">
                Prezzo su richiesta
              </p>
              <Link to="/contatti">
                <Button className="w-full bg-grenga-dark-brown hover:scale-95 text-white font-inter font-medium transition-all duration-200 rounded-md">
                  Contattaci per trattativa
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
