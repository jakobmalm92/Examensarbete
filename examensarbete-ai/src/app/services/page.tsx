import Link from "next/link";
import PageWrapper from "../components/PageWrapper";

const services = [
  { name: "Snickare", description: "Bygg och renovering", path: "/services/carpenter" },
  { name: "Målare", description: "Målning och tapetsering", path: "/services/painter" },
  { name: "Elektriker", description: "Elinstallationer och felsökning", path: "/services/electrician" },
  { name: "Rörmokare", description: "VVS-tjänster och reparationer", path: "/services/plumber" },
  { name: "Takläggare", description: "Takreparationer och installationer", path: "/services/roofer" },
];

export default function ServicesPage() {
  return (
    <PageWrapper>
      <main className="w-full px-0 py-30 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 px-10">Våra tjänster</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-10">
          {services.map((service) => (
            <Link
              key={service.path}
              href={service.path}
              className="block p-6 bg-white rounded-lg shadow hover:shadow-md hover:bg-gray-50 transition-transform transform hover:scale-105"
            >
              <h2 className="text-xl font-semibold">{service.name}</h2>
              <p className="text-gray-600">{service.description}</p>
            </Link>
          ))}
        </div>
      </main>
    </PageWrapper>
  );
}