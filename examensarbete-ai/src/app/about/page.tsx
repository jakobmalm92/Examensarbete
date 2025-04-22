import React from "react";
import PageWrapper from "../components/PageWrapper";

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Om oss</h1>
        <p className="text-lg text-gray-600 mb-6">
          Vi är ett företag som brinner för att leverera högkvalitativa tjänster till våra kunder. Med många års erfarenhet inom branschen är vi stolta över att kunna erbjuda skräddarsydda lösningar för varje projekt.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Vår vision</h2>
        <p className="text-lg text-gray-600 mb-6">
          Vår vision är att vara det självklara valet för våra kunder genom att erbjuda pålitliga och professionella tjänster.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Vårt team</h2>
        <p className="text-lg text-gray-600 mb-6">
          Vi består av ett dedikerat team av experter som arbetar tillsammans för att säkerställa att varje projekt blir en framgång.
        </p>
      </div>
    </PageWrapper>
  );
}