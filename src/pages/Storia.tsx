
import Layout from '@/components/Layout';

const Storia = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-grenga-ivory py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            {/* Testo - 60% */}
            <div className="md:col-span-3">
              <h1 className="font-playfair text-4xl md:text-5xl font-bold text-grenga-text mb-8">
                Una storia familiare lunga un secolo
              </h1>
              
              <div className="space-y-6 font-inter text-lg text-grenga-text leading-relaxed">
                <p>
                  La Collezione Grenga nasce agli inizi del XX secolo grazie a un ramo della famiglia 
                  in contatto con il Conte degli Augusti, da cui furono acquisite diverse opere e arredi.
                </p>
                
                <p>
                  Per tre generazioni, la famiglia Grenga ha custodito opere d'arte, strumenti musicali, 
                  mobili ecclesiastici e oggetti rari.
                </p>
                
                <p>
                  Lorenzo Gobbi (sindaco e professore) e Leonardo Salvigni (ingegnere presso il 
                  Ministero Marittimo) furono tra i principali conservatori della collezione.
                </p>
                
                <p>
                  Oggi, per la prima volta, la collezione viene resa pubblica e disponibile per 
                  l'acquisto. Un'occasione unica per collezionisti, gallerie e amanti dell'antico.
                </p>
              </div>
            </div>

            {/* Immagine - 40% */}
            <div className="md:col-span-2">
              <div className="bg-gray-200 aspect-[3/4] rounded-lg shadow-lg flex items-center justify-center text-gray-400 font-inter">
                [Immagine poltrona papale - Da inserire]
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Storia;
