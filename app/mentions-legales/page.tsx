import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Mentions légales | Reciproque",
  description:
    "Informations légales et coordonnées professionnelles de Reciproque.",
  alternates: {
    canonical: "/mentions-legales",
  },
};

// À compléter avec vos informations officielles
// avant le déploiement.
const business = {
  name: "Dirk Mertens",
  commercialName: "Reciproque",
  address: "rue Haute 17, 6880 Bertrix, Belgique",
  enterpriseNumber: "BE 0505.598.840",
  email: "info@reciproque.eu",
  phone: "+32 499 167 510",
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-[#f8f9f7] text-slate-900">
      <SiteHeader current="home" />

      <main className="max-w-4xl mx-auto px-6 py-14 md:py-20">
        <header className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700 mb-4">
            Reciproque
          </p>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Mentions légales
          </h1>
        </header>

        <div className="space-y-10 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Identification de l&apos;entreprise
            </h2>

            <div className="space-y-2">
              <p>
                <strong>Nom commercial :</strong> {business.commercialName}
              </p>

              <p>
                <strong>Exploitant :</strong> {business.name}
              </p>

              <p>
                <strong>Statut :</strong> Entreprise individuelle (indépendant
                en personne physique)
              </p>

              <p>
                <strong>Adresse d&apos;établissement :</strong>{" "}
                {business.address}
              </p>

              <p>
                <strong>Numéro d&apos;entreprise :</strong>{" "}
                {business.enterpriseNumber}
              </p>

              {/* <p>
                <strong>Numéro de TVA :</strong> {business.vatNumber}
              </p> */}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Contact</h2>

            <p>
              E-mail :{" "}
              <a
                href={`mailto:${business.email}`}
                className="text-teal-800 hover:underline"
              >
                {business.email}
              </a>
            </p>

            <p className="mt-2">Téléphone : {business.phone}</p>

            <p className="mt-4">Site internet : https://reciproque.eu</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Activités</h2>

            <p>
              Reciproque propose des services d&apos;assistance informatique,
              d&apos;installation et de configuration de réseaux, de
              développement logiciel et d&apos;automatisation.
            </p>

            <p className="mt-4">
              Les interventions sur site sont réalisées auprès des clients.
              L&apos;adresse d&apos;établissement n&apos;est pas un point
              d&apos;accueil du public.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Protection des données
            </h2>

            <p>
              Pour plus d&apos;informations sur le traitement des données
              personnelles, consultez notre{" "}
              <a href="/privacy" className="text-teal-800 hover:underline">
                politique de confidentialité
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
