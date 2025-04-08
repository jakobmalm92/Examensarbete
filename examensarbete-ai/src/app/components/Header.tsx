import Link from 'next/link';
import React from 'react';


export default function Header() {
  return (
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
  );
}
