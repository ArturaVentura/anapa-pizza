import type { Metadata } from "next";
import { Header } from "@/components/shared/header";


export const metadata: Metadata = {
  title: "Главная Next",
};

export default function HomeLayout({
  children,
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (

        <main className="min-n-screen">
          <Header />
          {children}
          {modal}
        </main>
    
  );
}
