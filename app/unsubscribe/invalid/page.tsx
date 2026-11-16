import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lien de désinscription invalide | Reciproque",
  robots: {
    index: false,
    follow: false,
  },
};

export default function InvalidPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-lg rounded-xl border bg-white p-8">
        <h1 className="text-2xl font-bold">Lien non valide</h1>

        <p className="mt-4 text-slate-600">
          Ce lien de désinscription n&apos;est pas reconnu. Vous pouvez
          également demander votre désinscription en nous contactant
          directement.
        </p>
      </div>
    </main>
  );
}
