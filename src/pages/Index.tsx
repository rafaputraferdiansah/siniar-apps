import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import hero from '@/assets/hero.jpg';
import { categories, products } from '@/lib/mock-data';
import { ProductCard } from '@/components/ProductCard';
import { PromoCountdown } from '@/components/PromoCountdown';
import { ArrowRight, Sparkles, Star } from 'lucide-react';

function Rail({ title, items }: { title: string; items: typeof products }) {
  return (
    <section className="container my-14">
      <div className="flex items-end justify-between mb-5">
        <h2 className="font-display text-2xl md:text-3xl font-semibold">{title}</h2>
        <Link to="/menu" className="text-sm text-accent hover:text-accent/80 inline-flex items-center gap-1">
          Lihat semua <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
        {items.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}

const Index = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" aria-hidden />
        <div className="container relative grid lg:grid-cols-2 gap-10 items-center py-14 md:py-20">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs tracking-[0.2em] uppercase text-accent">
              <Sparkles className="h-3.5 w-3.5" /> {t('hero.eyebrow')}
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-semibold mt-4 leading-[1.05] text-balance">
              {t('hero.title')}
            </h1>
            <p className="mt-5 text-muted-foreground text-lg max-w-lg text-balance">{t('hero.subtitle')}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/menu" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 h-12 font-medium hover:bg-primary/90 transition-colors shadow-soft">
                {t('hero.cta')} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/menu" className="inline-flex items-center gap-2 rounded-full glass px-6 h-12 font-medium hover:bg-card transition-colors">
                {t('hero.secondary')}
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}</div>
              <span><b className="text-foreground">4.9</b> · 1,240+ tamu bahagia</span>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="absolute -inset-6 bg-primary-glow/30 blur-3xl rounded-full" aria-hidden />
            <img
              src={hero}
              alt="Ruang Rasa SINIAR spread"
              width={1600}
              height={1024}
              className="relative rounded-3xl shadow-elegant object-cover aspect-[5/4] w-full"
            />
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container my-14">
        <h2 className="font-display text-2xl md:text-3xl font-semibold mb-5">{t('section.categories')}</h2>
        <div className="grid grid-cols-3 gap-3 md:gap-5">
          {categories.map((c) => (
            <Link key={c.slug} to={`/category/${c.slug}`} className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-3xl hover-lift">
              <img src={c.image} alt={t(`cat.${c.slug}`)} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-primary-foreground">
                <div className="font-display text-xl md:text-2xl font-semibold">{t(`cat.${c.slug}`)}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Rail title={t('section.featured')} items={products.slice(0, 4)} />
      <PromoCountdown />
      <Rail title={t('section.bestseller')} items={products.filter((p) => p.badge === 'bestseller')} />
      <Rail title={t('section.newArrival')} items={products.filter((p) => p.badge === 'new')} />
      <Rail title={t('section.recommended')} items={products.slice(2, 6)} />

      {/* REVIEWS */}
      <section className="container my-16">
        <h2 className="font-display text-2xl md:text-3xl font-semibold mb-6">{t('section.reviews')}</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { n: 'Aulia', t: 'Browniesnya juara, fudgy sempurna. Latte-nya juga smooth.' },
            { n: 'Ravi', t: 'Suasana cozy, dimsum-nya fresh. Sudah jadi langganan tiap weekend.' },
            { n: 'Nadya', t: 'Cold brew gula aren-nya bikin nagih. Highly recommended!' },
          ].map((r) => (
            <div key={r.n} className="rounded-2xl bg-card border border-border/60 p-6 shadow-soft">
              <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}</div>
              <p className="mt-3 text-sm text-foreground/90">"{r.t}"</p>
              <div className="mt-4 text-xs text-muted-foreground">— {r.n}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Index;
