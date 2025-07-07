
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

const Contatti = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    oggetto: '',
    messaggio: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Per ora solo un log, in futuro implementazione email
    console.log('Form inviato:', formData);
    
    // Costruisce l'email manuale come fallback
    const emailSubject = `Richiesta informazioni: ${formData.oggetto}`;
    const emailBody = `Nome: ${formData.nome}\nEmail: ${formData.email}\n\nMessaggio:\n${formData.messaggio}`;
    const mailtoLink = `mailto:collezionegrenga@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <Layout>
      <div className="min-h-screen bg-grenga-ivory py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-grenga-text text-center mb-4">
              Contatti
            </h1>
            
            <p className="font-inter text-lg text-grenga-text text-center mb-12">
              Contattaci per informazioni, trattative o proposte d'acquisto
            </p>

            <Card className="border-grenga-bronze/30 shadow-lg bg-white">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-grenga-text">
                  Richiesta Informazioni
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="nome" className="font-inter text-grenga-text">
                      Nome *
                    </Label>
                    <Input
                      id="nome"
                      type="text"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({...formData, nome: e.target.value})}
                      className="border-grenga-bronze/30 focus:border-grenga-bronze"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="font-inter text-grenga-text">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="border-grenga-bronze/30 focus:border-grenga-bronze"
                    />
                  </div>

                  <div>
                    <Label htmlFor="oggetto" className="font-inter text-grenga-text">
                      Oggetto di interesse
                    </Label>
                    <Select onValueChange={(value) => setFormData({...formData, oggetto: value})}>
                      <SelectTrigger className="border-grenga-bronze/30 focus:border-grenga-bronze">
                        <SelectValue placeholder="Seleziona categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="opere-arte">Opere d'arte</SelectItem>
                        <SelectItem value="strumenti-musicali">Strumenti musicali</SelectItem>
                        <SelectItem value="mobili-ecclesiastici">Mobili ecclesiastici</SelectItem>
                        <SelectItem value="oggetti-rari">Oggetti rari</SelectItem>
                        <SelectItem value="informazioni-generali">Informazioni generali</SelectItem>
                        <SelectItem value="altro">Altro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="messaggio" className="font-inter text-grenga-text">
                      Messaggio *
                    </Label>
                    <textarea
                      id="messaggio"
                      required
                      rows={5}
                      value={formData.messaggio}
                      onChange={(e) => setFormData({...formData, messaggio: e.target.value})}
                      className="w-full px-3 py-2 border border-grenga-bronze/30 rounded-md focus:outline-none focus:border-grenga-bronze resize-vertical"
                      placeholder="Scrivi qui il tuo messaggio..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-grenga-bronze hover:bg-grenga-dark-brown text-white font-inter text-lg py-3 transition-colors duration-300"
                  >
                    Invia Richiesta
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="text-center mt-8">
              <p className="font-inter text-sm text-grenga-text/70">
                Email diretta: <a href="mailto:collezionegrenga@gmail.com" className="text-grenga-link hover:underline">collezionegrenga@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contatti;
