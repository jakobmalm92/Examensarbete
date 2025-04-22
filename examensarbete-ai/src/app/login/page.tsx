"use client";

import React, { useState } from "react";
import PageWrapper from "../components/PageWrapper";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.email || !formData.password) {
      setError("Alla fält måste fyllas i.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5030/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse?.error || "Inloggning misslyckades.");
      }

      alert("Inloggning lyckades!");
    } catch (error) {
      setError((error as Error).message || "Ett fel inträffade.");
    }
  };

  return (
    <PageWrapper>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4 text-center">Logga in</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-post
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600 px-3 py-2"
                placeholder="Ange din e-postadress"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Lösenord
              </label>
              <input
                type="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600 px-3 py-2"
                placeholder="Ange ditt lösenord"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Logga in
            </button>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
}