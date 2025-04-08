"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-zinc-900 text-black dark:text-white">
      <header className="flex justify-between items-center px-6 py-4 sm:px-20">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Kanelbulle<span className="text-blue-600">.nu</span>
        </h1>
        <Link
          href="/login"
          className="text-sm sm:text-base hover:underline underline-offset-4 transition"
        >
          Logga in
        </Link>
      </header>

      <nav className="relative border-t border-b border-gray-200 dark:border-gray-700 px-6 sm:px-20 py-3 flex flex-wrap gap-6 text-sm sm:text-base">
        <div className="relative group">
          <a
            href="/tjanster/snickare"
            className="block hover:text-blue-600 transition"
          >
            <p className="font-medium text-gray-800 dark:text-white">Snickare</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Bygg och renovering</p>
          </a>

          <div className="absolute left-0 top-full mt-2 w-64 bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-4 space-y-2 hidden group-hover:block z-50">
            <p className="text-sm text-gray-800 dark:text-white">Altan & trall</p>
            <p className="text-sm text-gray-800 dark:text-white">Platsbyggda hyllor</p>
            <p className="text-sm text-gray-800 dark:text-white">Golvläggning</p>
          </div>
        </div>

        <div className="relative group">
        <a
          href="/tjanster/elektriker"
          className="block hover:text-blue-600 transition"
          >
            <p className="font-medium text-gray-800 dark:text-white">Elektriker</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Elinstallationer och felsökning.</p>
        </a>

          <div className="absolute left-0 top-full mt-2 w-64 bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-4 space-y-2 hidden group-hover:block z-50">
            <p className="text-sm text-gray-800 dark:text-white">Belysning</p>
            <p className="text-sm text-gray-800 dark:text-white">Eluttag</p>
            <p className="text-sm text-gray-800 dark:text-white">Felsökning</p>
          </div>
        </div>

        <div className="relative group">
        <a
          href="/tjanster/maleri"
          className="block hover:text-blue-600 transition"
          >
            <p className="font-medium text-gray-800 dark:text-white">Måleri</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Målning och tapetsering.</p>
        </a>

          <div className="absolute left-0 top-full mt-2 w-64 bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-4 space-y-2 hidden group-hover:block z-50">
            <p className="text-sm text-gray-800 dark:text-white">Inomhusmålning</p>
            <p className="text-sm text-gray-800 dark:text-white">Utomhusmålning</p>
            <p className="text-sm text-gray-800 dark:text-white">Tapetsering</p>
          </div>
        </div>

        <div className="relative group">
        <a
          href="/tjanster/rormokare"
          className="block hover:text-blue-600 transition"
        >
            <p className="font-medium text-gray-800 dark:text-white">Rörmokare</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">VVS-tjänster och reparationer.</p>
        </a>
          <div className="absolute left-0 top-full mt-2 w-64 bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-4 space-y-2 hidden group-hover:block z-50">
            <p className="text-sm text-gray-800 dark:text-white">Rörinstallation</p>
            <p className="text-sm text-gray-800 dark:text-white">Vattenläckor</p>
            <p className="text-sm text-gray-800 dark:text-white">Avloppsrensning</p>
          </div>
        </div>

        <div className="relative group">
        <a
          href="/tjanster/taklaggare"
          className="block hover:text-blue-600 transition"
        >
            <p className="font-medium text-gray-800 dark:text-white">Takläggare</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Takreparationer och installationer.</p>
        </a>
          <div className="absolute left-0 top-full mt-2 w-64 bg-white dark:bg-zinc-800 rounded-xl shadow-lg p-4 space-y-2 hidden group-hover:block z-50">
            <p className="text-sm text-gray-800 dark:text-white">Takreparation</p>
            <p className="text-sm text-gray-800 dark:text-white">Takläggning</p>
            <p className="text-sm text-gray-800 dark:text-white">Takinspektion</p>
          </div>
        </div>
      </nav>

      <main className="px-6 sm:px-20 py-12">
        <h2 className="text-2xl font-semibold mb-4">
          Välkommen till BokaTid.nu
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Här kan du snabbt och enkelt boka en tid hos oss.
        </p>
      </main>

      <footer className="text-center text-sm text-gray-600 dark:text-gray-500 py-6 border-t border-gray-200 dark:border-gray-700">
        Footer
      </footer>
    </div>
  );
}
