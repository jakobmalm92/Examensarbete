'use client'; 

import { useParams } from 'next/navigation';

type ServiceData = {
  title: string;
  description: string;
  services: string[];
  image: string;
};

const servicesData: { [key: string]: ServiceData } = {
    carpenter: {
      title: 'Snickare',
      description: 'Bygg och renovering som altaner, platsbyggda hyllor och golvläggning.',
      services: ['Altan & Trall', 'Platsbyggda hyllor', 'Golvläggning'],
      image: '/images/carpenter.jpg',
    },
    painter: {
      title: 'Målare',
      description: 'Målning och tapetsering för både inomhus och utomhus.',
      services: ['Inomhusmålning', 'Utomhusmålning', 'Tapetsering'],
      image: '/images/painter.jpg',
    },
    electrician: {
      title: 'Elektriker',
      description: 'Elinstallationer och felsökning.',
      services: ['Belysning', 'Eluttag', 'Felsökning'],
      image: '/images/electrician.jpg',
    },
    plumber: {
      title: 'Rörmokare',
      description: 'VVS-tjänster och reparationer.',
      services: ['Rörinstallation', 'Vattenläckor', 'Avloppsrensning'],
      image: '/images/plumber.jpg',
    },
    roofer: {
      title: 'Takläggare',
      description: 'Takreparationer och installationer.',
      services: ['Takreparation', 'Takläggning', 'Takinspektion'],
      image: '/images/roofer.jpg',
    },
  };

export default function ServicePage() {
  const params = useParams(); // Hämta parametrar från URL
  const service = Array.isArray(params?.service) ? params.service[0] : params?.service; // Hantera array

  // Kolla om tjänsten finns i våra data
  if (!service || !(service in servicesData)) {
    return <div>Tjänsten finns inte!</div>; // Om ingen tjänst matchas
  }

  const serviceData = servicesData[service];

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Hero sektion */}
      <div className="mb-8">
        <img
          src={serviceData.image}
          alt={serviceData.title}
          className="rounded-xl shadow-lg w-full"
        />
        <h1 className="text-3xl font-bold mt-6">{serviceData.title}</h1>
        <p className="mt-2 text-gray-600">{serviceData.description}</p>
      </div>

      {/* Lista på tjänster */}
      <div className="grid gap-4 sm:grid-cols-2">
        {serviceData.services.map((service, index) => (
          <div
            key={index}
            className="border rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            <h2 className="text-lg font-semibold">{service}</h2>
            <p className="text-sm text-gray-500 mt-1">Klicka för att lära dig mer och boka.</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Välj
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
