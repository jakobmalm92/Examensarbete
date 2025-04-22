import React from "react";
import PageWrapper from "../components/PageWrapper";
 
export default function ContactPage() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Kontakta oss</h1>
        <p className="text-lg text-gray-600 mb-6">
          Har du frågor eller funderingar? Fyll i formuläret nedan så återkommer vi till dig så snart som möjligt.
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Ditt namn
            </label>
            <input
              type="text"
              id="name"
              className="w-full border-2 border-gray-400 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Din e-post
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-2 border-gray-400 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Meddelande
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full border-2 border-gray-400 rounded-md shadow-sm focus:ring-blue-600 focus:border-blue-600"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Skicka
          </button>
        </form>
      </div>
    </PageWrapper>
  );
}