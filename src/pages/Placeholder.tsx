import { Link } from 'react-router-dom';

export default function Placeholder({ title }: { title: string }) {
  return (
    <section className="container py-24 text-center">
      <div className="font-display text-3xl md:text-4xl font-semibold">{title}</div>
      <p className="mt-3 text-muted-foreground">Halaman ini sedang dikurasi — segera hadir di fase berikutnya.</p>
      <Link to="/" className="inline-block mt-6 rounded-full bg-primary text-primary-foreground px-6 h-11 leading-[2.75rem] font-medium">
        Kembali ke beranda
      </Link>
    </section>
  );
}
