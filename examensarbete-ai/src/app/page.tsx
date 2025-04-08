// page.tsx
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-zinc-900 text-black dark:text-white">
      <Header />
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
}

function Main() {
  return (
    <main className="px-6 sm:px-20 py-12">
      <h2 className="text-2xl font-semibold mb-4">Välkommen till BokaTid.nu</h2>
      <p className="text-gray-600 dark:text-gray-400">
        Här kan du snabbt och enkelt boka en tid hos oss.
      </p>
    </main>
  );
}
