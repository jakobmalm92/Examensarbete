// src/app/layout.tsx
import Navigation from '../components/Navigation';  // Importera Navbar
import Header from '../components/Header';          // Importera din Header
import Footer from '../components/Footer';          // Om du har en Footer också

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Navbar */}
      <Navigation />

      {/* Huvudinnehåll */}
      <main className="flex-1">
        {children}  {/* Här kommer allt specifikt innehåll från olika sidor */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
