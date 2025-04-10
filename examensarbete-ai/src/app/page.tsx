"use client";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Button } from "./components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-zinc-900 text-black dark:text-white">
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
}

function Main() {
  return (
    <main className="relative bg-white dark:bg-zinc-900">
      {/* Hero-bild */}
      <div className="relative">
        <img
          src="pexels-burst-374861.jpg"
          alt="Hero"
          className="w-full max-h-[70vh] object-cover"
        />
          {/* Text ovanpå bilden */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center space-y-6 bg-black/30 dark:bg-black/50">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Välkommen
          </h1>
          <p className="text-lg text-gray-200">
            Boka tjänster snabbt och enkelt – när det passar dig.
          </p>
          <p className="text-gray-300">
            Vi kopplar ihop dig med pålitliga yrkespersoner inom snickeri, VVS,
            måleri och mer. Välj en tjänst, välj en tid, och luta dig tillbaka.
          </p>
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
            onClick={() => (window.location.href = "/services")}
          >
            Utforska tjänster
          </Button>
        </div>
      </div>
    </main>
  );
}
