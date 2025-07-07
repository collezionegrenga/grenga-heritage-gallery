
import Layout from '@/components/Layout';

const Storia = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-grenga-ivory py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Text Column - 60% */}
            <div className="lg:w-3/5 p-10">
              <h1 className="font-playfair text-5xl font-bold text-grenga-text mb-6">
                Una storia familiare lunga un secolo
              </h1>
              
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
    </Layout>
  );
};

export default Storia;
