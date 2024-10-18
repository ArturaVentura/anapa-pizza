// components/providers.tsx
'use client';

import React from 'react';
import { Toaster } from 'react-hot-toast';
import { SessionProvider } from 'next-auth/react';
import NextTopLoader from 'nextjs-toploader';
import { Session } from 'next-auth'; // Импортируем тип Session

interface ProvidersProps {
  session: Session | null; // Определяем проп для сессии
}

export const Providers: React.FC<React.PropsWithChildren<ProvidersProps>> = ({ children, session }) => {
  return (
    <>
      <SessionProvider session={session}>{children}</SessionProvider>
      <Toaster />
      <NextTopLoader />
    </>
  );
};
