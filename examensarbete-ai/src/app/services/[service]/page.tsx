"use client";

import Footer from "@@/app/components/Footer";
import { Button } from "@@/app/components/ui/button";
import { useParams } from "next/navigation";

type ServiceData = {
  price: string;
  title: string;
  description: string;
  services: string[];
  image: string;
};

const servicesData: { [key: string]: ServiceData } = {
  carpenter: {
    price: "",
    title: "Snickare",
    description:
      "Bygg och renovering som altaner, platsbyggda hyllor och golvläggning.",
    services: ["Altan & Trall", "Platsbyggda hyllor", "Golvläggning"],
    image: "/images/carpenter.jpg",
  },
  painter: {
    price: "",
    title: "Målare",
    description: "Målning och tapetsering för både inomhus och utomhus.",
    services: ["Inomhusmålning", "Utomhusmålning", "Tapetsering"],
    image: "/images/painter.jpg",
  },
  electrician: {
    price: "",
    title: "Elektriker",
    description: "Elinstallationer och felsökning.",
    services: ["Belysning", "Eluttag", "Felsökning"],
    image: "/images/electrician.jpg",
  },
  plumber: {
    price: "",
    title: "Rörmokare",
    description: "VVS-tjänster och reparationer.",
    services: ["Rörinstallation", "Vattenläckor", "Avloppsrensning"],
    image: "/images/plumber.jpg",
  },
  roofer: {
    price: "",
    title: "Takläggare",
    description: "Takreparationer och installationer.",
    services: ["Takreparation", "Takläggning", "Takinspektion"],
    image: "/images/roofer.jpg",
  },
};

export default function ServicePage() {
  const params = useParams(); // Hämta parametrar från URL
  const service = Array.isArray(params?.service)
    ? params.service[0]
    : params?.service; // Hantera array

  if (!service || !(service in servicesData)) {
    return <div>Tjänsten finns inte!</div>;
  }

  const serviceData = servicesData[service];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img
              src={serviceData.image}
              alt={serviceData.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h1 className="text-3xl font-bold mb-2">{serviceData.title}</h1>
            <p className="text-lg text-gray-600 mb-4">
              {serviceData.description}
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-gray-100 px-4 py-2 rounded-lg">
                <span className="block text-sm text-gray-500">Tidsåtgång</span>
                <span className="font-medium">Engligt offert</span>
              </div>
              <div className="bg-gray-100 px-4 py-2 rounded-lg">
                <span className="block text-sm text-gray-500">Pris</span>
                <span className="font-medium">Enligt offert</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-4">
              Boka {serviceData.title.toLowerCase()}
            </h2>
            <p className="mb-6">
              Fyll i dina uppgifter och beskriv ditt projekt för att få en
              kostnadsfri offert.
            </p>
            <div className="bg-white p-4 rounded-lg border mb-4">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Ditt namn
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-swedish-blue focus:border-swedish-blue"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    E-post
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-swedish-blue focus:border-swedish-blue"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Telefonnummer
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-swedish-blue focus:border-swedish-blue"
                  />
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Beskriv ditt projekt
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-swedish-blue focus:border-swedish-blue"
                  ></textarea>
                </div>
              </div>
            </div>
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
            >
              Begär offert
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
