"use client";

import Link from "next/link";
import { useState } from "react";

interface Service {
  name: string;
  description: string;
  path: string;
}

const services: Service[] = [
  {
    name: "Snickare",
    description: "Bygg och renovering",
    path: "/services/carpenter",
  },
  {
    name: "Elektriker",
    description: "Elinstallationer och felsökning",
    path: "/services/electrician",
  },
  {
    name: "Måleri",
    description: "Målning och tapetsering",
    path: "/services/painter",
  },
  {
    name: "Rörmokare",
    description: "VVS-tjänster och reparationer",
    path: "/services/plumber",
  },
  {
    name: "Takläggare",
    description: "Takreparationer och installationer",
    path: "/services/roofer",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-gray-200 bg-white px-4 py-3 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-full bg-gray-800 p-2">
            <span className="text-xl font-bold text-white">H</span>
          </div>
          <span className="text-lg font-bold text-gray-800">antverkare.se</span>
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="font-medium text-gray-700 hover:text-blue-600"
          >
            Hem
          </Link>
          <Link
            href="/om-oss"
            className="font-medium text-gray-700 hover:text-blue-600"
          >
            Om oss
          </Link>

          {/* Dropdown för Tjänster */}
          <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <button className="font-medium text-gray-700 hover:text-blue-600 bg-transparent focus:outline-none">
              Tjänster
            </button>

            {isOpen && (
              <div className="absolute left-0 mt-2 grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white shadow-lg rounded-xl z-50">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    href={service.path}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 hover:text-blue-600"
                  >
                    <div className="text-sm font-medium leading-none">
                      {service.name}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                      {service.description}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/kontakt"
            className="font-medium text-gray-700 hover:text-blue-600"
          >
            Kontakt
          </Link>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Logga in
          </button>
        </div>
      </div>
    </nav>
  );
}
