import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Désinscription confirmée | Reciproque",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ConfirmedPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16">
      <div className="mx-auto max-w-lg rounded-xl border bg-white p-8">
        <p className="text-sm font-semibold text-teal-700">RECIPROQUE</p>

        <h1 className="mt-3 text-2xl font-bold">Désinscription confirmée</h1>

        <p className="mt-4 text-slate-600">
          Votre demande a été enregistrée. Vous ne recevrez plus de
          communications commerciales de Reciproque à cette adresse.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block text-teal-700 hover:underline"
        >
          Retour au site
        </Link>
      </div>
    </main>
  );
}
