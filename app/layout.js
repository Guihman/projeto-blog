import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Blog de Entretenimento e Pop Culture',
  description: 'Inspirado nos melhores portais de entretenimento e lifestyle.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '2rem 1rem' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}