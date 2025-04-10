import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}
