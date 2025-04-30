"use client";

import { useEffect, useState } from "react";
import PageWrapper from "../components/PageWrapper";

export default function RequestsPage() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      const response = await fetch("/api/requests", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      if (response.ok) {
        const data = await response.json();
        setRequests(data);
      }
    };
    fetchRequests();
  }, []);

  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Dina Offertförfrågningar</h1>
        {requests.length > 0 ? (
          <ul className="list-disc list-inside">
            {requests.map((request: any, index: number) => (
              <li key={index}>
                {request.title} - {new Date(request.date).toLocaleDateString()}
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