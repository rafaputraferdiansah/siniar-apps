import brownies from '@/assets/cat-brownies.jpg';
import coffee from '@/assets/cat-coffee.jpg';
import dimsum from '@/assets/cat-dimsum.jpg';

export type Product = {
  id: string;
  name: { id: string; en: string };
  price: number;
  image: string;
  category: 'brownies' | 'coffee' | 'dimsum';
  rating: number;
  reviews: number;
  badge?: 'bestseller' | 'new';
  description: { id: string; en: string };
};

export const categories = [
  { slug: 'brownies', image: brownies },
  { slug: 'coffee', image: coffee },
  { slug: 'dimsum', image: dimsum },
] as const;

export const products: Product[] = [
  {
    id: 'p1',
    name: { id: 'Fudgy Chocolate Brownies', en: 'Fudgy Chocolate Brownies' },
    price: 45000, image: brownies, category: 'brownies',
    rating: 4.9, reviews: 128, badge: 'bestseller',
    description: {
      id: 'Brownies fudgy dengan coklat Belgia, dipanggang segar setiap pagi.',
      en: 'Rich fudgy brownies with Belgian chocolate, baked fresh every morning.',
    },
  },
  {
    id: 'p2',
    name: { id: 'Cream Cheese Brownies', en: 'Cream Cheese Brownies' },
    price: 52000, image: brownies, category: 'brownies',
    rating: 4.8, reviews: 76, badge: 'new',
    description: { id: 'Lapisan cream cheese lembut di atas brownies coklat pekat.', en: 'Silky cream cheese layer over dark chocolate brownies.' },
  },
  {
    id: 'p3',
    name: { id: 'Signature Latte', en: 'Signature Latte' },
    price: 32000, image: coffee, category: 'coffee',
    rating: 4.9, reviews: 210, badge: 'bestseller',
    description: { id: 'Espresso ganda dengan susu segar dan latte art tanda tangan barista.', en: 'Double espresso with velvety milk and our barista\'s signature art.' },
  },
  {
    id: 'p4',
    name: { id: 'Palm Sugar Cold Brew', en: 'Palm Sugar Cold Brew' },
    price: 35000, image: coffee, category: 'coffee',
    rating: 4.7, reviews: 54, badge: 'new',
    description: { id: 'Cold brew 18 jam dengan sentuhan gula aren organik.', en: '18-hour cold brew sweetened with organic palm sugar.' },
  },
  {
    id: 'p5',
    name: { id: 'Siomay Ayam Udang', en: 'Chicken & Shrimp Siomay' },
    price: 38000, image: dimsum, category: 'dimsum',
    rating: 4.8, reviews: 92, badge: 'bestseller',
    description: { id: 'Siomay klasik dengan isian ayam dan udang segar, dikukus lembut.', en: 'Classic siomay with tender chicken and shrimp, gently steamed.' },
  },
  {
    id: 'p6',
    name: { id: 'Hakau Udang Premium', en: 'Premium Shrimp Hakau' },
    price: 42000, image: dimsum, category: 'dimsum',
    rating: 4.9, reviews: 61,
    description: { id: 'Hakau kulit tipis translusen dengan udang utuh di dalamnya.', en: 'Translucent skin hakau with whole shrimp inside.' },
  },
];

export const formatIDR = (n: number) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);
