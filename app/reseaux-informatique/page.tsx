import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Réseaux informatiques pour PME à Bertrix | Reciproque",
  description:
    "Installation et amélioration de réseaux informatiques pour indépendants et PME à Bertrix et environs. Wi-Fi professionnel, NAS, sauvegardes, accès sécurisés et infrastructure IT.",
  alternates: {
    canonical: "/reseaux-informatique",
  },

  openGraph: {
    title: "Réseaux & infrastructure informatique | Reciproque",
    description:
      "Des réseaux fiables, des sauvegardes adaptées et une infrastructure informatique pensée pour votre entreprise.",
    url: "/reseaux-informatique",
    siteName: "Reciproque",
    locale: "fr_BE",
    type: "website",
    images: [
      {
        url: "https://reciproque.eu/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Reciproque — Assistance informatique, réseaux et logiciels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://reciproque.eu/opengraph-image"],
  },
};

const contactEmail = "info@reciproque.eu";

const emailHref =
  `mailto:${contactEmail}?subject=` +
  encodeURIComponent("Projet réseau ou infrastructure informatique");

const problems = [
  "Notre Wi-Fi est instable ou ne couvre pas tous les locaux.",
  "Nous avons besoin de partager des fichiers entre plusieurs postes.",
  "Nous ne sommes pas certains que nos sauvegardes soient fiables.",
  "Nous voulons accéder à nos outils en toute sécurité à distance.",
  "Notre installation informatique a grandi sans véritable organisation.",
  "Nous souhaitons moderniser nos outils, mais ne savons pas par où commencer.",
];

const services = [
  {
    number: "01",
    title: "Réseaux locaux & Wi-Fi",
    description:
      "Installation, configuration et amélioration de réseaux filaires et sans fil. Connexion des ordinateurs, imprimantes et autres équipements, avec une couverture adaptée à vos locaux.",
    keywords: "Ethernet · Wi-Fi · Routeurs · Switches",
  },
  {
    number: "02",
    title: "Stockage & partage de fichiers",
    description:
      "Mise en place de solutions de stockage partagé et de serveurs NAS, avec une organisation des dossiers et des droits d'accès adaptée aux utilisateurs.",
    keywords: "NAS · Stockage · Partage · Permissions",
  },
  {
    number: "03",
    title: "Sauvegardes & protection des données",
    description:
      "Analyse des besoins, configuration de sauvegardes locales ou distantes et vérification des possibilités de restauration pour limiter les conséquences d'une panne ou d'une erreur.",
    keywords: "Sauvegardes · Restauration · Continuité",
  },

  {
    number: "04",
    title: "Protection des données & contrôle des accès",
    description:
      "Qui peut accéder aux données de votre entreprise ? Vérification des comptes utilisateurs, des droits d'accès, des accès externes et des protections techniques. Identification des risques et mise en place d'améliorations adaptées.",
    keywords: "Confidentialité · Permissions · Accès externes · Protection",
  },

  {
    number: "05",
    title: "Accès à distance & télétravail",
    description:
      "Configuration de solutions adaptées pour accéder aux ressources professionnelles à distance, en tenant compte de la sécurité et des besoins des utilisateurs.",
    keywords: "VPN · Accès distant · Télétravail",
  },
  {
    number: "06",
    title: "Diagnostic & modernisation",
    description:
      "Analyse d'une installation existante, identification des points faibles et proposition d'améliorations progressives, sans remplacer inutilement ce qui fonctionne déjà.",
    keywords: "Diagnostic · Évolution · Optimisation",
  },
];

const steps = [
  {
    number: "01",
    title: "Comprendre votre activité",
    description:
      "Nous discutons de votre organisation, de vos outils actuels et des difficultés rencontrées. L'objectif est de comprendre vos besoins avant de proposer une technologie.",
  },
  {
    number: "02",
    title: "Examiner l'existant",
    description:
      "Selon la situation, j'examine votre réseau, vos équipements, vos accès ou vos sauvegardes pour identifier les améliorations utiles.",
  },
  {
    number: "03",
    title: "Proposer une solution",
    description:
      "Vous recevez une proposition adaptée à vos besoins et à votre budget, avec une explication claire des interventions envisagées.",
  },
];

export default function ReseauxInformatiquePage() {
  return (
    <div className="min-h-screen bg-[#f8f9f7] text-slate-900 font-sans">
      {/* NAVIGATION */}
      <SiteHeader current="reseaux" />

      <main>
        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6 pt-12 pb-14 md:pt-16 md:pb-18">
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-teal-700 mb-5">
            Réseaux & infrastructure · Indépendants et PME
          </p>

          <h1 className="max-w-4xl text-4xl md:text-5xl font-bold tracking-tight leading-[1.12]">
            Un réseau fiable.
            <br />
            Une informatique qui suit votre activité.
          </h1>

          <p className="mt-6 max-w-3xl text-lg md:text-xl leading-relaxed text-slate-600">
            Connexions instables, partage de fichiers, accès à distance,
            sauvegardes ou sécurité : votre infrastructure informatique doit
            faciliter le travail, pas le compliquer.
          </p>

          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">
            Reciproque accompagne les indépendants et les petites et moyennes
            entreprises dans l&apos;installation, l&apos;amélioration et
            l&apos;organisation de leurs systèmes informatiques.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-teal-700 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-800 transition-colors"
            >
              Discutons de votre infrastructure
            </a>

            <a
              href="#solutions"
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:border-teal-500 hover:text-teal-800 transition-colors"
            >
              Découvrir les solutions
            </a>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            Interventions dans la région de Bertrix, dans un rayon
            d&apos;environ 50 km. Prestations à distance également possibles
            selon le projet.
          </p>
        </section>

        {/* BUSINESS PROBLEMS */}
        <section className="bg-white border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-6 py-14 md:py-18">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-700 mb-3">
              Vos besoins
            </p>

            <h2 className="text-2xl md:text-3xl font-bold tracking-tight max-w-3xl">
              Votre informatique vous pose-t-elle l&apos;un de ces problèmes ?
            </h2>

            <div className="mt-9 grid md:grid-cols-2 gap-x-12 gap-y-5">
              {problems.map((problem) => (
                <div key={problem} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-600"
                  />

                  <p className="text-slate-700 leading-relaxed">{problem}</p>
                </div>
              ))}
            </div>

            <p className="mt-9 max-w-3xl text-slate-600 leading-relaxed">
              Ces difficultés peuvent avoir des causes très différentes. Avant
              de proposer du matériel ou de nouveaux logiciels, il faut
              comprendre l&apos;installation existante et identifier ce qui
              mérite réellement d&apos;être amélioré.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section id="solutions" className="scroll-mt-8">
          <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
            <div className="mb-10">
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-700 mb-3">
                Nos solutions
              </p>

              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                Une infrastructure adaptée à votre entreprise.
              </h2>

              <p className="mt-4 max-w-2xl text-slate-600 leading-relaxed">
                Chaque entreprise a des besoins différents. L&apos;objectif est
                de mettre en place des outils fiables, compréhensibles et
                adaptés à votre activité.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col hover:border-teal-300 transition-colors"
                >
                  <span className="text-sm font-mono text-teal-700">
                    {service.number}
                  </span>

                  <h3 className="mt-5 text-lg font-bold tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm text-slate-600 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  <p className="mt-7 text-xs text-slate-500">
                    {service.keywords}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section className="bg-white border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-6 py-14 md:py-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-teal-700 mb-3">
              Notre approche
            </p>

            <h2 className="max-w-3xl text-2xl md:text-3xl font-bold tracking-tight">
              Comprendre avant de modifier.
            </h2>

            <p className="mt-4 max-w-2xl text-slate-600 leading-relaxed">
              Une solution efficace ne commence pas nécessairement par
              l&apos;achat de nouveaux équipements. Elle commence par une bonne
              compréhension du problème.
            </p>

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

            <p className="mt-9 text-sm text-slate-600">
              Les interventions et projets sont définis en fonction des besoins,
              avec une proposition de prix adaptée avant réalisation.
            </p>
          </div>
        </section>

        {/* CONNECTION TO SOFTWARE */}
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-teal-700 mb-4">
                Aller plus loin
              </p>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                Et si vos outils informatiques pouvaient faire davantage ?
              </h2>
            </div>

            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p>
                Une infrastructure informatique bien organisée est une base
                solide. Mais parfois, le véritable problème se trouve dans les
                logiciels que l&apos;entreprise utilise au quotidien.
              </p>

              <p>
                Des informations à recopier entre plusieurs outils, des
                opérations répétitives, des applications qui ne communiquent pas
                entre elles...
              </p>

              <p>
                Reciproque développe également des applications sur mesure et
                des systèmes d&apos;automatisation. Cette double compétence
                permet de réfléchir aux problèmes informatiques dans leur
                ensemble, plutôt que de traiter chaque outil séparément.
              </p>

              <p>
                Nos réalisations, notamment Breeze et ArtNowDatabase, illustrent
                cette expérience dans la conception de logiciels et
                l&apos;automatisation de traitements complexes.
              </p>

              <Link
                href="/software-development"
                className="inline-flex items-center gap-2 text-sm font-semibold text-teal-800 hover:text-teal-600 transition-colors"
              >
                Découvrir le développement logiciel
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="bg-white border-y border-slate-200">
          <div className="max-w-6xl mx-auto px-6 py-14 md:py-18">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-teal-700 mb-4">
                  Pourquoi Reciproque ?
                </p>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                  Un interlocuteur direct, du diagnostic à la solution.
                </h2>
              </div>

              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  Reciproque est l&apos;activité informatique indépendante de
                  Dirk Mertens, développeur logiciel et professionnel des
                  systèmes informatiques.
                </p>

                <p>
                  Vous échangez directement avec la personne qui examine votre
                  installation et travaille sur votre projet.
                </p>

                <p>
                  Mon approche privilégie les solutions adaptées à votre
                  situation, sans complexité inutile et en tenant compte de
                  votre organisation et de vos moyens.
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
                Parlons de votre infrastructure informatique.
              </h2>

              <p className="mt-5 text-slate-600 leading-relaxed">
                Vous rencontrez un problème de réseau, souhaitez améliorer vos
                sauvegardes ou envisagez une nouvelle installation ?
              </p>

              <p className="mt-3 text-slate-600 leading-relaxed">
                Décrivez brièvement votre activité, votre installation actuelle
                et vos besoins. Nous pourrons examiner ensemble les solutions
                possibles.
              </p>

              <div className="max-w-xl">
                <ContactForm variant="reseaux" />
              </div>

              <p className="mt-5 text-sm text-slate-600">
                Ou écrivez directement à{" "}
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
