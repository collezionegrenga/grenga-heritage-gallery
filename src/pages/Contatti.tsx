
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
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
    
    const emailSubject = `Richiesta informazioni: ${formData.oggetto}`;
    const emailBody = `Nome: ${formData.nome}\nEmail: ${formData.email}\n\nMessaggio:\n${formData.messaggio}`;
    const mailtoLink = `mailto:collezionegrenga@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <Layout>
      <div className="min-h-screen bg-grenga-ivory py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto py-10">
            <h1 className="font-playfair text-4xl font-bold text-grenga-text text-center mb-6">
              Contattaci per informazioni, trattative o proposte d'acquisto
            </h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <Label htmlFor="nome" className="font-inter font-medium text-sm text-grenga-text">
                  Nome
                </Label>
                <Input
                  id="nome"
                  type="text"
                  required
                  value={formData.nome}
                  onChange={(e) => setFormData({...formData, nome: e.target.value})}
                  className="w-full p-3 border border-grenga-bronze rounded focus:border-grenga-bronze"
                />
              </div>

              <div>
                <Label htmlFor="email" className="font-inter font-medium text-sm text-grenga-text">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="tuo.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-3 border border-grenga-bronze rounded focus:border-grenga-bronze"
                />
              </div>

              <div>
                <Label htmlFor="oggetto" className="font-inter font-medium text-sm text-grenga-text">
                  Oggetto di interesse
                </Label>
                <Select onValueChange={(value) => setFormData({...formData, oggetto: value})}>
                  <SelectTrigger className="w-full p-3 border border-grenga-bronze rounded focus:border-grenga-bronze">
                    <SelectValue placeholder="— Seleziona —" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="quadri">Quadri</SelectItem>
                    <SelectItem value="mobili">Mobili</SelectItem>
                    <SelectItem value="strumenti-musicali">Strumenti musicali</SelectItem>
                    <SelectItem value="altro">Altro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="messaggio" className="font-inter font-medium text-sm text-grenga-text">
                  Messaggio
                </Label>
                <textarea
                  id="messaggio"
                  required
                  rows={5}
                  value={formData.messaggio}
                  onChange={(e) => setFormData({...formData, messaggio: e.target.value})}
                  className="w-full p-3 border border-grenga-bronze rounded focus:border-grenga-bronze resize-vertical"
                  placeholder="Scrivi qui il tuo messaggio..."
                />
              </div>

              <Button 
                type="submit" 
                className="bg-grenga-bronze hover:bg-white hover:text-grenga-bronze text-white font-inter font-medium text-base py-3 px-6 rounded-md transition-all duration-300"
              >
                Invia Richiesta
              </Button>
            </form>

            <div className="text-center mt-6">
              <p className="font-inter text-xs text-grenga-text/70">
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
