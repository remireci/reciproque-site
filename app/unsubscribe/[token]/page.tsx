import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Désinscription | Reciproque",
  robots: {
    index: false,
    follow: false,
  },
  referrer: "strict-origin",
};

type Props = {
  params: Promise<{ token: string }>;
};

async function UnsubscribeContent({ params }: Props) {
  const { token } = await params;

  // 32 random bytes, base64url encoded.
  const validToken = /^[A-Za-z0-9_-]{43}$/.test(token);

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900">
      <div className="mx-auto max-w-lg rounded-xl border border-slate-200 bg-white p-8">
        <p className="text-sm font-semibold text-teal-700">RECIPROQUE</p>

        <h1 className="mt-3 text-2xl font-bold">Désinscription</h1>

        {!validToken ? (
          <p className="mt-5 text-slate-600">
            Ce lien de désinscription n&apos;est pas valide.
          </p>
        ) : (
          <>
            <p className="mt-5 text-slate-600">
              Vous ne souhaitez plus recevoir de communications commerciales de
              Reciproque ?
            </p>

            <p className="mt-3 text-sm text-slate-500">
              Confirmez votre choix ci-dessous. Votre adresse sera exclue de nos
              futurs envois commerciaux.
            </p>

            <form
              method="POST"
              action={`/api/unsubscribe/${token}`}
              className="mt-8"
            >
              <button
                type="submit"
                className="w-full rounded-lg bg-teal-700 px-5 py-3 font-medium text-white hover:bg-teal-800"
              >
                Confirmer la désinscription
              </button>
            </form>
          </>
        )}
      </div>
    </main>
  );
}

export default function UnsubscribePage(props: Props) {
  return (
    <Suspense fallback={<main className="p-8">Chargement…</main>}>
      <UnsubscribeContent params={props.params} />
    </Suspense>
  );
}
