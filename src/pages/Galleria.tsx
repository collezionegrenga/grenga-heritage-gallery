
import Layout from '@/components/Layout';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Galleria = () => {
  // Placeholder images array
  const placeholderImages = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: `Immagine ${i + 1}`
  }));

  return (
    <Layout>
      <div className="min-h-screen bg-grenga-ivory py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-grenga-text text-center mb-12">
            Galleria Fotografica
          </h1>
          
          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {placeholderImages.map((image) => (
                  <CarouselItem key={image.id}>
                    <div className="aspect-[16/10] bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 font-inter text-lg hover:scale-105 transition-transform duration-300 cursor-zoom-in">
                      [Immagine HD immersiva {image.id} - Da inserire]
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
          
          <div className="text-center mt-8">
            <p className="font-inter text-grenga-text/70">
              Scorri per visualizzare tutte le immagini della collezione
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Galleria;
