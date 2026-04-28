import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';
import { useQuoteModal } from '@/contexts/QuoteModalContext';
import { products } from '@/data/products';
import { toast } from 'sonner';
import { z } from 'zod';

const WHATSAPP_NUMBER = '6281241003047';

const quoteSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100),
  email: z.string().trim().email('Invalid email address').max(255),
  phone: z.string().trim().max(20).optional(),
  product: z.string().min(1, 'Please select a product'),
  quantity: z.string().trim().min(1, 'Quantity is required').max(100),
  message: z.string().trim().max(1000).optional(),
});

export const QuoteModal = () => {
  const { language, t } = useLanguage();
  const { open, setOpen } = useQuoteModal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      quoteSchema.parse(formData);
      
      const selectedProduct = products.find(p => p.id === formData.product);
      const productName = selectedProduct ? selectedProduct.name[language] : formData.product;
      
      const message = `*New Quote Request*\n\nName: ${formData.name}\nEmail: ${formData.email}\n${formData.phone ? `Phone: ${formData.phone}\n` : ''}Product: ${productName}\nQuantity: ${formData.quantity}\n${formData.message ? `\nMessage: ${formData.message}` : ''}`;
      
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      toast.success('Redirecting to WhatsApp...');
      setOpen(false);
      setFormData({ name: '', email: '', phone: '', product: '', quantity: '', message: '' });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      }
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">{t('quoteModalTitle')}</DialogTitle>
          <DialogDescription>{t('quoteModalDesc')}</DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Input
              placeholder={t('yourName')}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              maxLength={100}
            />
          </div>
          
          <div>
            <Input
              type="email"
              placeholder={t('yourEmail')}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              maxLength={255}
            />
          </div>
          
          <div>
            <Input
              type="tel"
              placeholder={t('yourPhone')}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              maxLength={20}
            />
          </div>
          
          <div>
            <Select value={formData.product} onValueChange={(value) => setFormData({ ...formData, product: value })}>
              <SelectTrigger>
                <SelectValue placeholder={t('selectProduct')} />
              </SelectTrigger>
              <SelectContent>
                {products.map((product) => (
                  <SelectItem key={product.id} value={product.id}>
                    {product.name[language]}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Input
              placeholder={t('quantity')}
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              required
              maxLength={100}
            />
          </div>
          
          <div>
            <Textarea
              placeholder={t('message')}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              maxLength={1000}
            />
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)} className="flex-1">
              {t('cancel')}
            </Button>
            <Button type="submit" className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground">
              {t('sendRequest')}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
