import coffeeImg from '@/assets/coffee.jpg';
import candlenutImg from '@/assets/candlenut.jpg';
import turmericImg from '@/assets/turmeric.jpg';
import palmOilImg from '@/assets/palm-oil.jpg';
import clovesImg from '@/assets/cloves.jpg';
import nutmegImg from '@/assets/nutmeg.jpg';
import tunaImg from '@/assets/tuna.jpg';
import coconutImg from '@/assets/coconut.jpg';
import cocoaImg from '@/assets/cocoa.jpg';
import rubberImg from '@/assets/rubber.jpg';
import cinnamonVanillaImg from '@/assets/cinnamon-vanilla.jpg';

export const productImages: Record<string, string> = {
  'specialty-coffee': coffeeImg,
  'candlenut': candlenutImg,
  'turmeric': turmericImg,
  'palm-oil': palmOilImg,
  'cloves': clovesImg,
  'nutmeg': nutmegImg,
  'tuna': tunaImg,
  'coconut-products': coconutImg,
  'cocoa': cocoaImg,
  'rubber': rubberImg,
  'cinnamon-vanilla': cinnamonVanillaImg,
};

export const getProductImage = (productId: string): string => {
  return productImages[productId] || '';
};
