import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Reciproque",
  description:
    "Informations sur la collecte et le traitement des données personnelles sur reciproque.eu.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#f8f9f7] text-slate-900">
      <SiteHeader current="home" />

      <main className="max-w-4xl mx-auto px-6 py-14 md:py-20">
        <header className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700 mb-4">
            Reciproque · Confidentialité
          </p>

          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Politique de confidentialité
          </h1>

          <p className="mt-4 text-sm text-slate-500">
            Dernière mise à jour : 5 novembre 2026
          </p>
        </header>

        <div className="space-y-10 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              1. Responsable du traitement
            </h2>

            <p>
              Le site reciproque.eu est exploité par Dirk Mertens, indépendant
              exerçant sous le nom commercial Reciproque.
            </p>

            <p className="mt-3">
              Contact :{" "}
              <a
                href="mailto:info@reciproque.eu"
                className="text-teal-800 hover:underline"
              >
                info@reciproque.eu
              </a>
            </p>

            <p className="mt-3">
              Les informations d&apos;identification de l&apos;entreprise figurent dans
              les{" "}
              <Link
                href="/mentions-legales"
                className="text-teal-800 hover:underline"
              >
                mentions légales
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              2. Données collectées
            </h2>

            <p>
              Lorsque vous utilisez le formulaire de contact, nous recueillons
              votre nom, votre adresse e-mail, le service concerné et le message
              que vous nous transmettez.
            </p>

            <p className="mt-3">
              Vous pouvez également indiquer un numéro de téléphone et votre
              commune.
            </p>

            <p className="mt-3">
              Ces informations sont fournies volontairement. Les champs
              obligatoires sont nécessaires pour pouvoir traiter votre demande.
            </p>

            <p className="mt-3">
              Nous vous recommandons de ne pas transmettre de mots de passe ou
              d&apos;informations sensibles dans le formulaire.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              3. Utilisation des données
            </h2>

            <p>
              Les informations sont utilisées exclusivement pour examiner votre
              demande, vous répondre et, le cas échéant, préparer une
              intervention ou une proposition commerciale.
            </p>

            <p className="mt-3">
              Le formulaire envoie également un e-mail automatique confirmant la
              réception de votre demande.
            </p>

            <p className="mt-3">
              Le traitement repose, selon la nature de votre demande, sur des
              mesures précontractuelles prises à votre initiative ou sur notre
              intérêt légitime à gérer les communications et protéger le
              service.
            </p>

            <p className="mt-3">
              Vos coordonnées ne sont pas utilisées pour vous inscrire
              automatiquement à une liste de diffusion commerciale.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              4. Conservation et destinataires
            </h2>

            <p>
              Les demandes sont conservées pendant la durée nécessaire à leur
              traitement et à leur suivi.
            </p>

            <p className="mt-3">
              Les échanges donnant lieu à une prestation peuvent être conservés
              plus longtemps lorsque cela est nécessaire à la gestion
              contractuelle ou au respect d&apos;obligations légales.
            </p>

            <p className="mt-3">
              Les messages transitent par les prestataires techniques
              d&apos;hébergement et de messagerie utilisés par Reciproque. Ils ne
              sont pas vendus à des tiers.
            </p>

            <p className="mt-3">
              Les modalités de traitement par ces prestataires, notamment les
              éventuels transferts de données hors de l&apos;Espace économique
              européen, doivent être prises en compte dans notre gestion des
              données.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              5. Cookies et sécurité
            </h2>

            <p>
              Le site n&apos;utilise pas de cookies publicitaires ni de suivi
              publicitaire.
            </p>

            <p className="mt-3">
              Des traitements techniques nécessaires au fonctionnement, à
              l&apos;hébergement et à la protection du site peuvent avoir lieu.
            </p>

            <p className="mt-3">
              Des mesures techniques et organisationnelles appropriées sont
              mises en œuvre pour limiter les risques d&apos;accès non autorisé, de
              perte ou de divulgation des données.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              6. Vos droits
            </h2>

            <p>
              Conformément au RGPD, vous disposez, selon les conditions
              applicables, d&apos;un droit d&apos;accès, de rectification, d&apos;effacement,
              de limitation et d&apos;opposition au traitement de vos données. Un
              droit à la portabilité peut également s&apos;appliquer dans certains
              cas.
            </p>

            <p className="mt-3">
              Pour exercer ces droits, écrivez à{" "}
              <a
                href="mailto:info@reciproque.eu"
                className="text-teal-800 hover:underline"
              >
                info@reciproque.eu
              </a>
              .
            </p>

            <p className="mt-3">
              Vous pouvez également introduire une réclamation auprès de l&apos;{" "}
              <a
                href="https://www.autoriteprotectiondonnees.be/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-800 hover:underline"
              >
                Autorité de protection des données
              </a>{" "}
              en Belgique.
            </p>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
