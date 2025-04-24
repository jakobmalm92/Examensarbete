"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PageWrapper from "../components/PageWrapper";

export default function MyPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true); // Lägg till en laddningsindikator

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login"); // Omdirigera om användaren inte är inloggad
    } else {
      setIsLoading(false); // Sluta ladda om token finns
    }
  }, []);

  if (isLoading) {
    return null; // Visa ingenting medan token kontrolleras
  }

  return (
    <PageWrapper>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md text-center">
          <h1 className="text-2xl font-bold mb-4">Välkommen till din sida!</h1>
          <p>Här kan du hantera dina inställningar och se din information.</p>
        </div>
      </div>
    </PageWrapper>
  );
}