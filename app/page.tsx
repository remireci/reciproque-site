import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

export const metadata: Metadata = {
  title: "Reciproque | Assistance informatique, réseaux et logiciels à Bertrix",
  description:
    "Assistance informatique à Bertrix et environs, réseaux professionnels et développement de logiciels et automatisations sur mesure pour entreprises et organisations.",
  alternates: {
    canonical: "/",
  },
};

const services = [
  {
    number: "01",
    title: "Assistance informatique",
    audience: "Particuliers & professionnels",
    description:
      "Votre ordinateur ne fonctionne plus correctement ? Un problème de connexion, de logiciel ou de sauvegarde ? Une assistance claire et efficace, à domicile ou à distance.",
    details: "Dépannage · Installation · Wi-Fi · Sauvegardes",
    href: "/assistance-informatique",
    link: "Obtenir de l'aide",
    navLabel: "Assistance",
  },
  {
    number: "02",
    title: "Réseaux & infrastructure",
    audience: "Indépendants & PME",
    description:
      "Un réseau instable, des données mal protégées ou une infrastructure à améliorer ? Des solutions fiables, adaptées à votre activité et à votre organisation.",
    details: "Réseaux · Sécurité · NAS · Infrastructure",
    href: "/reseaux-informatique",
    link: "Découvrir les solutions",
    navLabel: "Réseaux",
  },
  {
    number: "03",
    title: "Logiciels & automatisation",
    audience: "Entreprises & organisations",
    description:
      "Des tâches répétitives, des logiciels qui communiquent mal ou un outil qui manque à votre activité ? Des améliorations ciblées jusqu’aux applications sur mesure.",
    details: "Applications web · Intégrations · Automatisation · Données",
    href: "/fr/software-development",
    link: "Découvrir le développement",
    navLabel: "Logiciels",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f9f7] text-slate-900 font-sans">
      {/* NAVIGATION */}
      <SiteHeader current="home" />

      <main>
        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6 pt-12 pb-14 md:pt-16 md:pb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-teal-700 mb-5">
            Reciproque · Bertrix et environs
          </p>

          <h1 className="max-w-4xl text-4xl md:text-5xl font-bold tracking-tight leading-[1.12]">
            Assistance informatique de proximité.
            <br className="hidden sm:block" /> Logiciels adaptés à votre
            activité.
          </h1>

          <p className="mt-6 max-w-3xl text-lg md:text-xl leading-relaxed text-slate-600">
            Un dépannage ou un réseau à améliorer à Bertrix et environs ?
            Reciproque intervient localement. Pour les entreprises et les
            organisations, Reciproque développe aussi des outils, des
            applications web et des automatisations, y compris à distance.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/assistance-informatique"
              className="inline-flex items-center justify-center rounded-lg bg-teal-700 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-800 transition-colors"
            >
              Assistance informatique locale
            </Link>

            <Link
              href="/fr/software-development"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:border-teal-500 hover:text-teal-800 transition-colors"
            >
              Logiciels & automatisation
            </Link>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Assistance sur place dans un rayon d&apos;environ 50 km autour de
            Bertrix. Développement logiciel également disponible à distance.
          </p>
        </section>

        {/* SERVICES */}
        <section className="bg-white border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-6 py-14 md:py-16">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-700 mb-3">
                Nos services
              </p>

              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Comment pouvons-nous vous aider ?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="rounded-2xl border border-slate-200 bg-[#f8f9f7] p-6 flex flex-col hover:border-teal-300 hover:shadow-sm transition-all"
                >
                  <div className="flex justify-between items-start gap-3">
                    <span className="text-sm font-mono text-teal-700">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-teal-700">
                    {service.audience}
                  </p>

                  <p className="mt-5 text-sm text-slate-600 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  <p className="mt-7 text-xs text-slate-500 leading-relaxed">
                    {service.details}
                  </p>

                  <Link
                    href={service.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-800 hover:text-teal-600 transition-colors"
                  >
                    {service.link}
                    <span aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SOFTWARE FOR BUSINESSES */}
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700 mb-3">
            Pour les entreprises et les organisations
          </p>

          <h2 className="max-w-4xl text-2xl md:text-3xl font-bold tracking-tight">
            Gagnez du temps avec des outils adaptés à votre façon de travailler.
          </h2>

          <p className="mt-5 max-w-3xl text-slate-600 leading-relaxed">
            Des informations à recopier entre plusieurs logiciels, des documents
            à préparer manuellement ou un processus difficile à suivre ? Une
            automatisation ciblée, une connexion entre vos outils ou une
            fonctionnalité supplémentaire peut déjà faire la différence.
          </p>

          <div className="mt-9 grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-lg">Automatiser</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Réduire les tâches répétitives et faciliter le traitement des
                données.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">
                Améliorer l&apos;existant
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Connecter vos logiciels et ajouter les fonctions qui manquent.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">
                Créer des applications web
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Développer des outils professionnels, formulaires ou espaces
                clients.
              </p>
            </div>
          </div>

          <p className="mt-9 max-w-3xl text-slate-700 leading-relaxed">
            Pas besoin d&apos;un cahier des charges : nous pouvons commencer par
            examiner ensemble le problème que vous souhaitez résoudre.
          </p>

          <Link
            href="/fr/software-development#contact"
            className="mt-5 inline-flex text-sm font-semibold text-teal-800 hover:text-teal-600 transition-colors"
          >
            Parlons de ce qui vous fait perdre du temps →
          </Link>
        </section>

        {/* ABOUT / EXPERTISE */}
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-700 mb-4">
                Notre approche
              </p>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                Des problèmes courants
                <br />
                aux projets complexes.
              </h2>

              <p className="mt-5 text-lg text-teal-800 font-medium leading-relaxed">
                L&apos;informatique, du quotidien aux projets les plus
                ambitieux.
              </p>
            </div>

            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p>
                Reciproque est l&apos;activité informatique indépendante de Dirk
                Mertens, développeur logiciel et professionnel des systèmes
                informatiques.
              </p>

              <p>
                Vous échangez directement avec la personne qui analyse votre
                problème et réalise l&apos;intervention. Pas
                d&apos;intermédiaire, pas de solution inutilement compliquée.
              </p>

              <p>
                Cette expérience permet de résoudre des problèmes informatiques
                ponctuels, de concevoir des réseaux professionnels et de
                réaliser des logiciels sur mesure pour des clients locaux ou à
                distance.
              </p>

              <p>
                Des projets comme Breeze et ArtNowDatabase illustrent cette
                expertise en développement logiciel, traitement de données et
                systèmes complexes.
              </p>

              <Link
                href="/fr/software-development"
                className="inline-flex items-center gap-2 text-sm font-semibold text-teal-800 hover:text-teal-600 transition-colors"
              >
                Découvrir nos réalisations
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="bg-[#eaf3ef] border-t border-teal-100 scroll-mt-8"
        >
          <div className="max-w-6xl mx-auto px-6 py-14 md:py-16">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Un problème informatique ? Un projet en tête ?
              </h2>

              <p className="mt-3 text-slate-600 leading-relaxed">
                Expliquez-nous votre besoin, même si vous ne savez pas encore
                quelle solution envisager.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
                <Link
                  href="/assistance-informatique#contact"
                  className="text-sm font-semibold text-teal-800 hover:text-teal-600 transition-colors"
                >
                  Assistance informatique →
                </Link>

                <Link
                  href="/reseaux-informatique#contact"
                  className="text-sm font-semibold text-teal-800 hover:text-teal-600 transition-colors"
                >
                  Réseaux & infrastructure →
                </Link>

                <Link
                  href="/fr/software-development#contact"
                  className="text-sm font-semibold text-teal-800 hover:text-teal-600 transition-colors"
                >
                  Logiciels & automatisation →
                </Link>
              </div>

              <p className="mt-8 text-sm text-slate-600">
                Ou écrivez directement à{" "}
                <a
                  href="mailto:info@reciproque.eu"
                  className="font-semibold text-teal-800 hover:underline"
                >
                  info@reciproque.eu
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <SiteFooter />
    </div>
  );
}
