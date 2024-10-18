// app/layout.tsx
import { Nunito } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/shared/providers';
import { Session } from 'next-auth';


const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
  // Предполагаем, что session будет передана через props
  session, 
}: Readonly<{
  children: React.ReactNode;
  session: Session | null; // Импортируйте тип Session из next-auth, если нужно
}>) {
  return (
    <html lang="en">
      <head>
        <link data-rh="true" rel="icon" href="/logo.png" />
      </head>
      <body className={nunito.className}>
        <Providers session={session}> {/* Оборачиваем children в Providers */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
