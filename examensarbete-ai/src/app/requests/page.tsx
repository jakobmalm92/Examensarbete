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
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
          Dina Offertförfrågningar
        </h1>
        {requests.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requests.map((request) => (
              <div
                key={request.id}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border-2"
              >
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {request.name}
                </h2>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>E-post:</strong> {request.email}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Telefon:</strong> {request.phone}
                </p>
                <p className="text-gray-700 mb-3">{request.description}</p>
                <small className="text-gray-500">
                  Skickad: {new Date(request.createdAt).toLocaleString()}
                </small>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            <p className="text-gray-600 text-lg">
              Du har inga skickade offertförfrågningar.
            </p>
            <button
              onClick={() => alert("Skapa en ny offertförfrågan!")}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Skapa ny förfrågan
            </button>
          </div>
        )}
      </div>
    </PageWrapper>
  );