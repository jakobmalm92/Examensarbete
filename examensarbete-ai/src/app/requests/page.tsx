"use client";

import { useEffect, useState } from "react";
import PageWrapper from "../components/PageWrapper";

interface Request {
    id: string;
    name: string;
    email: string;
    phone: string;
    description: string;
    createdAt: string;
    }

export default function RequestsPage() {
  const [requests, setRequests] = useState<Request[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch("http://localhost:5030/api/offer", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });

        if (!response.ok) {
          throw new Error("Misslyckades att hämta offertförfrågningar.");
        }

        const data = await response.json();
        setRequests(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  if (loading) {
    return <p>Laddar offertförfrågningar...</p>;
  }

  if (error) {
    return <p className="text-red-600">Fel: {error}</p>;
  }

  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Dina Offertförfrågningar</h1>
        {requests.length > 0 ? (
          <ul className="list-disc list-inside">
            {requests.map((request) => (
              <li key={request.id}>
                <strong>{request.name}</strong> ({request.email}) - {request.phone}
                <p>{request.description}</p>
                <small>Skickad: {new Date(request.createdAt).toLocaleString()}</small>
              </li>
            ))}
          </ul>
        ) : (
          <p>Du har inga skickade offertförfrågningar.</p>
        )}
      </div>
    </PageWrapper>
  );
}