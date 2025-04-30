import PageWrapper from "../components/PageWrapper";

export default function SettingsPage() {
  return (
    <PageWrapper>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Inställningar</h1>
        <p>Här kan du hantera dina inställningar och se din information.</p>
      </div>
    </div>
    </PageWrapper>
  );
}