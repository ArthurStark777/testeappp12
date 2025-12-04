import './globals.css';

export const metadata = {
  title: 'Explora+',
  description: 'Encontre as melhores ofertas de reservas',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, padding: 0, fontFamily: 'Arial, sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
