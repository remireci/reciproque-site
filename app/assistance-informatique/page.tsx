import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactForm from "../components/ContactForm";

const OG_IMAGE = "https://reciproque.eu/opengraph-image";

export const metadata: Metadata = {
  title: "Assistance informatique à Bertrix | Reciproque",
  description:
    "Dépannage et assistance informatique à Bertrix et environs. Ordinateurs, Wi-Fi, logiciels, sauvegardes et installation. Tarifs clairs, déplacement inclus.",
  alternates: {
    canonical: "/assistance-informatique",
  },
  openGraph: {
    title: "Assistance informatique à Bertrix | Reciproque",
    description:
      "Une aide informatique de proximité pour particuliers, indépendants et petites entreprises. Intervention autour de Bertrix ou à distance.",
    url: "/assistance-informatique",
    siteName: "Reciproque",
    locale: "fr_BE",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Reciproque — Assistance informatique, réseaux et logiciels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE],
  },
};

const contactEmail = "info@reciproque.eu";

const emailHref =
  `mailto:${contactEmail}?subject=` +
  encodeURIComponent("Demande d'assistance informatique");

const services = [
  {
    number: "01",
    title: "Ordinateur lent ou bloqué",
    description:
      "Votre ordinateur ralentit, se bloque ou ne fonctionne plus correctement ? Diagnostic du problème, mises à jour, configuration et recherche de solutions adaptées.",
  },
  {
    number: "02",
    title: "Installation et configuration",
    description:
      "Un nouvel ordinateur à installer ? Configuration de votre environnement de travail, des comptes utilisateurs, des logiciels et des périphériques.",
  },
  {
    number: "03",
    title: "Wi-Fi et connexion Internet",
    description:
      "Connexion instable, problème de Wi-Fi ou appareil qui refuse de se connecter ? Analyse de votre installation et amélioration de la configuration réseau.",
  },
  {
    number: "04",
    title: "Logiciels et problèmes courants",
    description:
      "Installation, configuration et dépannage de logiciels. Assistance pour les difficultés informatiques rencontrées au quotidien.",
  },
  {
    number: "05",
    title: "Sauvegardes et transfert de données",
    description:
      "Transfert de vos documents vers un nouvel ordinateur, organisation de vos fichiers et mise en place de solutions de sauvegarde adaptées.",
  },
  {
    number: "06",
    title: "Assistance informatique à distance",
    description:
      "Certains problèmes peuvent être résolus sans déplacement, grâce à une assistance à distance, avec votre accord et selon la nature du problème.",
  },
];

const steps = [
  {
    number: "01",
    title: "Expliquez votre problème",
    description:
      "Décrivez brièvement ce qui ne fonctionne pas ou ce que vous souhaitez installer ou améliorer. Pas besoin de connaître les termes techniques.",
  },
  {
    number: "02",
    title: "Nous évaluons la situation",
    description:
      "Nous déterminons ensemble si une intervention sur place est nécessaire ou si une assistance à distance est possible.",
  },
  {
    number: "03",
    title: "Une solution adaptée",
    description:
      "L'objectif est de résoudre le problème efficacement, de vous expliquer ce qui a été fait et de vous conseiller si nécessaire.",
  },
];

export default function AssistanceInformatiquePage() {
  return (
    <div className="min-h-screen bg-[#f8f9f7] text-slate-900 font-sans">
      {/* NAVIGATION */}
      <SiteHeader current="assistance" />
      <main>
        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6 pt-12 pb-12 md:pt-16 md:pb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-teal-700 mb-5">
            Assistance informatique · Bertrix et environs
          </p>

          <h1 className="max-w-4xl text-4xl md:text-5xl font-bold tracking-tight leading-[1.12]">
            Un problème informatique ?
            <br />
            Trouvons une solution.
          </h1>

          <p className="mt-6 max-w-3xl text-lg md:text-xl leading-relaxed text-slate-600">
            Ordinateur lent ou bloqué, problème de Wi-Fi, installation de
            logiciels, transfert de données…
          </p>

          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">
            Reciproque propose une assistance informatique à domicile ou à
            distance, pour les particuliers, les indépendants et les petites
            entreprises.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-teal-700 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-800 transition-colors"
            >
              Demander une intervention
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:border-teal-500 hover:text-teal-800 transition-colors"
            >
              Voir les services
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            À domicile dans un rayon d&apos;environ 50 km autour de Bertrix ·
            Assistance à distance également possible
          </p>
        </section>

        {/* PRICING */}
        <section
          id="tarifs"
          className="bg-white border-y border-slate-200 scroll-mt-8"
        >
          <div className="max-w-6xl mx-auto px-6 py-12 md:py-14">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-700 mb-3">
                Tarifs
              </p>

              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Des tarifs simples et transparents.
              </h2>

              <p className="mt-3 text-sm text-slate-500">
                Tarifs pour particuliers, TVA comprise.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-5">
              {/* ON-SITE */}
              <div className="rounded-2xl border border-teal-200 bg-[#eaf3ef] p-6 flex flex-col">
                <h3 className="text-sm font-semibold text-teal-800">
                  Intervention à domicile
                </h3>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-bold tracking-tight">
                    70 €
                  </span>
                  <span className="text-sm text-slate-500">TVAC</span>
                </div>

                <p className="mt-2 text-sm text-slate-600">
                  Première heure d&apos;intervention
                </p>

                <p className="mt-5 text-sm font-medium text-teal-800">
                  Déplacement inclus
                </p>
              </div>

              {/* ADDITIONAL TIME */}
              <div className="rounded-2xl border border-slate-200 bg-[#f8f9f7] p-6 flex flex-col">
                <h3 className="text-sm font-semibold text-slate-700">
                  Temps supplémentaire
                </h3>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-bold tracking-tight">
                    35 €
                  </span>
                  <span className="text-sm text-slate-500">TVAC</span>
                </div>

                <p className="mt-2 text-sm text-slate-600">
                  Par demi-heure supplémentaire
                </p>
              </div>

              {/* REMOTE */}
              <div className="rounded-2xl border border-slate-200 bg-[#f8f9f7] p-6 flex flex-col">
                <h3 className="text-sm font-semibold text-slate-700">
                  Assistance à distance
                </h3>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-4xl font-bold tracking-tight">
                    30 €
                  </span>
                  <span className="text-sm text-slate-500">TVAC</span>
                </div>

                <p className="mt-2 text-sm text-slate-600">
                  Par tranche de 30 minutes
                </p>
              </div>
            </div>

            <p className="mt-6 text-xs text-slate-500 leading-relaxed">
              Première heure facturée intégralement pour les interventions à
              domicile. Demi-heures supplémentaires facturées par tranche
              entamée. Pièces et licences éventuelles en supplément, après
              accord préalable.
            </p>

            <p className="mt-3 text-sm text-slate-600">
              Pour les projets informatiques professionnels plus complexes, un
              devis adapté peut être établi.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="scroll-mt-8">
          <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-700 mb-3">
                Nos services
              </p>

              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Comment puis-je vous aider ?
              </h2>

              <p className="mt-4 max-w-2xl text-slate-600 leading-relaxed">
                Voici quelques-uns des problèmes et des besoins informatiques
                pour lesquels vous pouvez faire appel à Reciproque.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="rounded-2xl border border-slate-200 bg-white p-6 hover:border-teal-300 transition-colors"
                >
                  <span className="text-sm font-mono text-teal-700">
                    {service.number}
                  </span>

                  <h3 className="mt-5 text-lg font-bold tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>

            <p className="mt-8 text-sm text-slate-600">
              Votre problème ne figure pas dans cette liste ?{" "}
              <a
                href="#contact"
                className="font-semibold text-teal-800 hover:underline"
              >
                Contactez-moi pour en discuter.
              </a>
            </p>
          </div>
        </section>

        {/* AUDIENCES */}
        <section className="bg-white border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 bg-[#f8f9f7] p-7 md:p-9">
                <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">
                  Pour les particuliers
                </p>

                <h2 className="mt-4 text-2xl font-bold tracking-tight">
                  Une aide informatique proche de chez vous.
                </h2>

                <p className="mt-5 text-slate-600 leading-relaxed">
                  Pas besoin de maîtriser l&apos;informatique pour expliquer
                  votre problème. Je vous aide à comprendre ce qui ne fonctionne
                  pas et à trouver une solution.
                </p>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  Qu&apos;il s&apos;agisse d&apos;installer un nouvel
                  ordinateur, de résoudre un problème de connexion ou de mettre
                  en place des sauvegardes, l&apos;objectif est de vous
                  simplifier la vie.
                </p>
              </div>

              <div className="rounded-2xl border border-teal-100 bg-[#eaf3ef] p-7 md:p-9">
                <p className="text-xs font-semibold uppercase tracking-widest text-teal-700">
                  Pour les indépendants et PME
                </p>

                <h2 className="mt-4 text-2xl font-bold tracking-tight">
                  Une informatique fiable pour votre activité.
                </h2>

                <p className="mt-5 text-slate-600 leading-relaxed">
                  Un problème informatique peut rapidement perturber votre
                  travail. Reciproque vous accompagne pour résoudre les
                  difficultés du quotidien et améliorer votre environnement
                  informatique.
                </p>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  Et si vos besoins dépassent le dépannage ponctuel, nous
                  pouvons également aborder les réseaux, la sécurité, les
                  sauvegardes et l&apos;infrastructure professionnelle.
                </p>

                <Link
                  href="/reseaux-informatique"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-800 hover:text-teal-600 transition-colors"
                >
                  Découvrir les solutions pour entreprises
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="max-w-6xl mx-auto px-6 py-14 md:py-20">
          <p className="text-sm font-semibold uppercase tracking-widest text-teal-700 mb-3">
            Comment ça se passe ?
          </p>

          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Une démarche simple, sans complications inutiles.
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number}>
                <span className="text-2xl font-mono font-semibold text-teal-700">
                  {step.number}
                </span>

                <h3 className="mt-4 text-lg font-bold">{step.title}</h3>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section className="bg-white border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-teal-700 mb-4">
                  Pourquoi Reciproque ?
                </p>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                  Un contact direct.
                  <br />
                  Une expertise qui va plus loin.
                </h2>
              </div>

              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  Derrière Reciproque, il y a Dirk Mertens, informaticien
                  indépendant et développeur logiciel.
                </p>

                <p>
                  Vous êtes en contact direct avec la personne qui intervient,
                  analyse votre problème et recherche la solution adaptée.
                </p>

                <p>
                  Mon activité ne se limite pas au dépannage. Je travaille
                  également sur des réseaux informatiques, des applications
                  professionnelles et des systèmes d&apos;automatisation.
                </p>

                <p>
                  Cette expérience permet d&apos;aborder les problèmes
                  informatiques avec une vision plus large, tout en privilégiant
                  des solutions simples lorsque c&apos;est ce dont vous avez
                  besoin.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-[#eaf3ef] scroll-mt-8">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-700 mb-4">
                Contact
              </p>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Besoin d&apos;une assistance informatique ?
              </h2>

              <p className="mt-5 text-slate-600 leading-relaxed">
                Expliquez brièvement votre problème et indiquez votre commune.
                Nous pourrons déterminer ensemble la meilleure façon de vous
                aider.
              </p>

              <div className="max-w-xl">
                <ContactForm variant="assistance" />
              </div>

              <p className="mt-5 text-sm text-slate-600">
                Vous préférez nous écrire directement ?{" "}
                <a
                  href={`mailto:${contactEmail}`}
                  className="font-semibold text-teal-800 hover:underline"
                >
                  {contactEmail}
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
