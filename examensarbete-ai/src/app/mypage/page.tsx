"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PageWrapper from "../components/PageWrapper";

export default function MyPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("userName");
    if (!token) {
      router.push("/login");
    } else {
      setUserName(name || "Användare");
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <PageWrapper>
      <div className="flex min-h-screen bg-gray-100">
        <aside className="w-64 bg-white border-r">
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-6">Meny</h2>
            <ul className="space-y-4">
              <li>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-200 rounded cursor-pointer">
                    Offertförfrågningar
                </button>
              </li>
              <li>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-200 rounded cursor-pointer">
                    Inkorg
                </button>
              </li>
              <li>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-200 rounded cursor-pointer">
                    Inställningar
                </button>
              </li>
              <li>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-200 rounded cursor-pointer">
                    Min Profil
                </button>
              </li>
              <li>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-200 rounded cursor-pointer text-red-600">
                    Logga ut
                </button>
              </li>
            </ul>
          </div>
        </aside>

        <main className="flex-1 p-8">
          <div className="bg-white p-6 rounded shadow">
            <h1 className="text-xl font-semibold mb-4">
                Välkommen, {userName}!</h1>
            <p className="mb-6 text-gray-600">
                Här kan du hantera dina inställningar, se dina offertförfrågningar och hålla koll på dina meddelanden.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-4 border rounded shadow hover:shadow-md transition-shadow">
                <h2 className="text-lg font-bold mb-2">
                    Offertförfrågningar</h2>
                <p className="text-sm text-gray-600">
                    Se och hantera dina senaste offertförfrågningar.</p>
                <button
                    onClick={() => router.push("/requests")}
                    className="mt-4 px-4 py-2 border rounded-md cursor-pointer bg-blue-600 text-white">
                    Visa
                </button>
              </div>

              <div className="p-4 border rounded shadow hover:shadow-md transition-shadow">
                <h2 className="text-lg font-bold mb-2">
                    Inkorg</h2>
                <p className="text-sm text-gray-600">
                    Kontrollera dina senaste meddelanden.</p>
                <button className="mt-4 px-4 py-2 border rounded-md cursor-pointer bg-blue-600 text-white">
                    Öppna
                </button>
              </div>

              <div className="p-4 border rounded shadow hover:shadow-md transition-shadow">
                <h2 className="text-lg font-bold mb-2">
                    Inställningar</h2>
                <p className="text-sm text-gray-600">
                    Uppdatera dina kontoinställningar.</p>
                <button className="mt-4 px-4 py-2 border rounded-md cursor-pointer bg-blue-600 text-white">
                    Redigera
                </button>
              </div>

              <div className="p-4 border rounded shadow hover:shadow-md transition-shadow">
                <h2 className="text-lg font-bold mb-2">
                    Min Profil</h2>
                <p className="text-sm text-gray-600">
                    Uppdatera din profil och se din information.
                </p>
                <button className="mt-4 px-4 py-2 border rounded-md cursor-pointer bg-blue-600 text-white">
                    Visa Profil
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </PageWrapper>
  );
}