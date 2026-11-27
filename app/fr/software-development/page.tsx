import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import ContactForm from "../../components/ContactForm-bilingual";
import SoftwareLanguageSwitch from "../../components/SoftwareLanguageSwitch";
import ProjectMedia from "../../components/ProjectMedia";
import { projectMedia } from "../../components/projectMediaConfig";

export const metadata: Metadata = {
  title:
    "Logiciels sur mesure, automatisation et protection des données | Reciproque",
  description:
    "Gagnez du temps avec des logiciels sur mesure, des automatisations ciblées et des sites et applications web adaptés à votre activité.",
  alternates: {
    canonical: "/fr/software-development",
    languages: {
      en: "/software-development",
      fr: "/fr/software-development",
      "x-default": "/software-development",
    },
  },
  openGraph: {
    title: "Logiciels et automatisation | Reciproque",
    description:
      "Des améliorations concrètes : automatisation, intégration de vos outils existants, applications et sites web adaptés à votre activité.",
    url: "/fr/software-development",
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

const problems = [
  "Nous devons saisir les mêmes informations dans plusieurs logiciels.",
  "Nous perdons du temps avec des tâches manuelles répétitives.",
  "Nos logiciels actuels ne répondent pas vraiment à nos besoins.",
  "Nos informations sont dispersées entre plusieurs fichiers et applications.",
  "Nous traitons des données sensibles sans toujours savoir qui y a accès.",
  "Nous avons besoin d’un outil adapté à notre façon de travailler.",
];

const solutions = [
  {
    number: "01",
    title: "Applications sur mesure",
    description:
      "Quand vos outils actuels ne suffisent pas, nous développons une fonctionnalité complémentaire ou une application adaptée à votre façon de travailler, sans complexité inutile.",
    keywords:
      "Applications professionnelles · Outils internes · Plateformes web",
  },
  {
    number: "02",
    title: "Automatisation et intégration",
    description:
      "Évitez les doubles encodages, simplifiez la préparation de documents et faites communiquer vos outils. Une automatisation ciblée peut déjà faire gagner un temps précieux.",
    keywords: "Automatisation · API · Traitement de données · Intégrations",
  },
  {
    number: "03",
    title: "Protection des données dès la conception",
    description:
      "Protéger des informations sensibles ne se limite pas à publier une politique de confidentialité. Nous examinons la manière dont vos applications stockent, traitent et rendent accessibles les données, puis mettons en place des protections techniques adaptées.",
    keywords:
      "Gestion des accès · Minimisation des données · Architecture sécurisée",
  },
  {
    number: "04",
    title: "Sites web et applications web",
    description:
      "Nous développons des sites et applications web utiles à votre activité : formulaires, espaces clients, gestion de données et connexions avec vos outils internes. Avec une attention portée à la fiabilité, à la sécurité, au référencement et à la protection des données.",
    keywords:
      "Sites professionnels · Formulaires · Espaces clients · Applications web",
  },
];

const steps = [
  {
    number: "01",
    title: "Comprendre le besoin réel",
    description:
      "Nous commençons par comprendre vos méthodes de travail, vos contraintes techniques et vos objectifs, sans supposer qu’un nouveau logiciel est forcément nécessaire.",
  },
  {
    number: "02",
    title: "Concevoir une solution adaptée",
    description:
      "Nous déterminons ce qui peut être amélioré, connecté ou développé, en veillant à limiter la complexité et les coûts de maintenance.",
  },
  {
    number: "03",
    title: "Développer, tester et améliorer",
    description:
      "Nous réalisons des solutions concrètes, les testons dans des situations réelles et les faisons évoluer en fonction de vos besoins et des retours d’expérience.",
  },
];

export default function SoftwareDevelopmentPage() {
  return (
    <div
      lang="fr"
      className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-teal-400 selection:text-zinc-950"
    >
      {/* NAVIGATION */}
      <SiteHeader current="software" theme="dark" language="fr" />
      <SoftwareLanguageSwitch locale="fr" />
      <main>
        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6 pt-14 pb-16 md:pt-20 md:pb-20">
          <p className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-teal-400 mb-5">
            Logiciels sur mesure · Automatisation · Applications web
          </p>

          <h1 className="max-w-4xl text-4xl md:text-5xl font-bold tracking-tight leading-[1.12]">
            Vos logiciels doivent s’adapter à votre activité, pas l’inverse.
          </h1>

          <p className="mt-7 max-w-3xl text-lg md:text-xl text-zinc-300 leading-relaxed">
            Des tâches répétitives, des informations à recopier entre plusieurs
            logiciels ou des outils qui compliquent votre travail ?
          </p>

          <p className="mt-4 max-w-3xl text-base text-zinc-400 leading-relaxed">
            Reciproque vous aide à gagner du temps en améliorant vos logiciels,
            en automatisant des opérations et, lorsque c’est utile, en
            développant des applications adaptées à votre activité. Il n’est pas
            toujours nécessaire de repartir de zéro.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-teal-400 px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-teal-300 transition-colors"
            >
              Parlons de votre problème
            </a>

            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-200 hover:border-teal-400 hover:text-teal-300 transition-colors"
            >
              Découvrir nos réalisations
            </a>
          </div>
        </section>

        {/* PROBLEMS */}
        <section className="border-y border-zinc-800 bg-zinc-900/40">
          <div className="max-w-6xl mx-auto px-6 py-14 md:py-18">
            <p className="text-sm uppercase tracking-widest font-semibold text-teal-400 mb-3">
              Problèmes fréquents
            </p>

            <h2 className="max-w-3xl text-2xl md:text-3xl font-bold tracking-tight">
              L’informatique doit vous simplifier le travail.
            </h2>

            <p className="mt-4 max-w-2xl text-zinc-400 leading-relaxed">
              Vous n’avez pas besoin de savoir quelle technologie choisir.
              Partez simplement du problème que vous souhaitez résoudre.
            </p>

            <div className="mt-9 grid md:grid-cols-2 gap-x-12 gap-y-5">
              {problems.map((problem) => (
                <div key={problem} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-400"
                  />

                  <p className="text-zinc-300 leading-relaxed">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTIONS */}
        <section
          id="services"
          className="max-w-6xl mx-auto px-6 py-16 md:py-24 scroll-mt-8"
        >
          <div className="mb-10">
            <p className="text-sm uppercase tracking-widest font-semibold text-teal-400 mb-3">
              Nos services
            </p>

            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Une solution adaptée à chaque besoin.
            </h2>

            <p className="mt-4 max-w-2xl text-zinc-400 leading-relaxed">
              Une automatisation ciblée, une fonctionnalité supplémentaire ou
              une meilleure connexion entre vos logiciels peut déjà faire la
              différence. Un nouvel outil n’est pas toujours nécessaire.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
            {solutions.map((solution) => (
              <article
                key={solution.number}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-7 flex flex-col hover:border-teal-700 transition-colors"
              >
                <span className="text-sm font-mono text-teal-400">
                  {solution.number}
                </span>

                <h3 className="mt-5 text-xl font-bold tracking-tight">
                  {solution.title}
                </h3>

                <p className="mt-5 text-sm text-zinc-400 leading-relaxed flex-grow">
                  {solution.description}
                </p>

                <p className="mt-7 text-xs text-zinc-500 leading-relaxed">
                  {solution.keywords}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* DATA PROTECTION */}
        <section className="border-y border-zinc-800 bg-zinc-900/50">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              <div>
                <p className="text-sm uppercase tracking-widest font-semibold text-teal-400 mb-4">
                  Protection des données
                </p>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                  Qui peut réellement accéder à vos données ?
                </h2>

                <p className="mt-6 text-zinc-400 leading-relaxed">
                  Disposer d’une politique de confidentialité ne signifie pas
                  que vos données sont techniquement protégées.
                </p>
              </div>

              <div className="space-y-5 text-zinc-300 leading-relaxed">
                <p>
                  De nombreuses organisations stockent des informations
                  personnelles ou confidentielles dans des applications et bases
                  de données sans toujours savoir qui peut y accéder.
                </p>

                <p>
                  Les employés, administrateurs, prestataires et développeurs
                  externes disposent parfois d’accès plus étendus que
                  nécessaire.
                </p>

                <p>
                  Reciproque peut analyser la manière dont ces informations
                  sensibles sont traitées et proposer des améliorations
                  techniques, notamment :
                </p>

                <ul className="space-y-3 pl-5 list-disc marker:text-teal-400 text-sm text-zinc-400">
                  <li>
                    Limiter les accès selon les rôles et les responsabilités
                  </li>
                  <li>Éviter l’exposition inutile de données personnelles</li>
                  <li>
                    Séparer les environnements de développement et de test des
                    données réelles des clients
                  </li>
                  <li>
                    Renforcer les contrôles de sécurité des applications et des
                    bases de données
                  </li>
                  <li>
                    Envisager le chiffrement et d’autres mesures de protection
                    lorsque cela est pertinent
                  </li>
                </ul>

                <p className="text-sm text-zinc-500">
                  Ces améliorations techniques peuvent contribuer au respect du
                  RGPD, mais ne remplacent ni un avis juridique ni un audit de
                  conformité.
                </p>

                <a
                  href="#contact"
                  className="inline-flex text-sm font-semibold text-teal-300 hover:text-teal-200"
                >
                  Parlons de la protection de vos données →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="max-w-6xl mx-auto px-6 py-16 md:py-24 scroll-mt-8"
        >
          <p className="text-sm uppercase tracking-widest font-semibold text-teal-400 mb-3">
            Quelques réalisations
          </p>

          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Des applications qui répondent à des besoins concrets.
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-400 leading-relaxed">
            Deux exemples de solutions qui facilitent le travail des
            utilisateurs et automatisent des processus complexes.
          </p>

          <div className="mt-12 space-y-12">
            {/* BREEZE */}
            <article className="border-t border-zinc-800 pt-10 grid md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-teal-400">
                  Application web
                </span>

                <h3 className="mt-3 text-2xl font-bold">Breeze</h3>

                <p className="mt-5 text-zinc-300 leading-relaxed">
                  Une plateforme d’évaluation développée pour{" "}
                  <a
                    href="https://www.tomorrowneverknows.be/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-300 hover:underline"
                  >
                    Tomorrow Never Knows
                  </a>
                  , notamment utilisée pour des évaluations pratiques de
                  mécaniciens chez Volvo Cars Belgium.
                </p>

                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  La plateforme accompagne l’observation des compétences en
                  situation pratique : les évaluateurs collaborent en temps
                  réel, enregistrent leurs appréciations et produisent des
                  rapports à partir des résultats.
                </p>
                <div className="mt-7 rounded-xl border border-teal-900/70 bg-teal-950/30 p-5">
                  <p className="text-sm font-semibold text-zinc-100">
                    Vous souhaitez découvrir Breeze ?
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    Breeze n&apos;est pas accessible publiquement. Contactez-moi
                    pour discuter d&apos;une démonstration ou d&apos;un éventuel
                    accès d&apos;essai pour votre organisation.
                  </p>
                  <a
                    href="#contact"
                    className="mt-3 inline-flex text-sm font-semibold text-teal-300 hover:text-teal-200"
                  >
                    Parlons de Breeze →
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-7">
                <p className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-5">
                  Ce que permet la plateforme
                </p>

                <ul className="space-y-4 text-sm text-zinc-300">
                  <li>Évaluer des compétences lors d’épreuves pratiques</li>
                  <li>Faire collaborer plusieurs utilisateurs en temps réel</li>
                  <li>Centraliser les scores et les observations</li>
                  <li>Générer des rapports d’évaluation</li>
                </ul>

                <p className="mt-7 text-xs font-mono text-zinc-500 leading-relaxed">
                  TypeScript · Next.js · GraphQL · Ably · Sanity
                </p>
              </div>
              {(projectMedia.breeze.src ||
                process.env.NODE_ENV !== "production") && (
                <div className="md:col-span-2">
                  <ProjectMedia
                    kind={projectMedia.breeze.kind}
                    src={projectMedia.breeze.src}
                    // poster={projectMedia.breeze.poster}
                    alt="Démonstration de Breeze : évaluations pratiques, parcours évaluateur et participant"
                    caption="Breeze : observer les compétences pratiques, coordonner les évaluations et produire des rapports."
                    language="fr"
                  />
                </div>
              )}
            </article>

            {/* ARTNOWDATABASE */}
            <article className="border-t border-zinc-800 pt-10 grid md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-teal-400">
                  Plateforme de données et automatisation
                </span>

                <h3 className="mt-3 text-2xl font-bold">ArtNowDatabase</h3>

                <p className="mt-5 text-zinc-300 leading-relaxed">
                  Une plateforme indépendante qui rassemble des informations sur
                  les expositions d’art en Europe et les présente sur une carte
                  interactive.
                </p>

                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  Derrière la carte, des outils automatisés collectent,
                  extraient, contrôlent et organisent les informations provenant
                  de centaines de sites web. Ils réduisent le travail manuel
                  nécessaire à la recherche et à la mise à jour des expositions.
                </p>

                <a
                  href="https://artnowdatabase.eu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex text-sm font-semibold text-teal-300 hover:text-teal-200"
                >
                  Visiter ArtNowDatabase ↗
                </a>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-7">
                <p className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-5">
                  Ce que permet la plateforme
                </p>

                <ul className="space-y-4 text-sm text-zinc-300">
                  <li>
                    Collecter des informations auprès de nombreuses sources
                  </li>
                  <li>Extraire et contrôler les données automatiquement</li>
                  <li>Organiser les expositions par lieu et par date</li>
                  <li>Présenter les résultats sur une carte interactive</li>
                </ul>

                <p className="mt-7 text-xs font-mono text-zinc-500 leading-relaxed">
                  Python · Crawl4AI · Local LLMs · MongoDB · Next.js
                </p>
              </div>
              {(projectMedia.artNow.src ||
                process.env.NODE_ENV !== "production") && (
                <div className="md:col-span-2">
                  <ProjectMedia
                    // poster={projectMedia.artNow.poster}
                    kind={projectMedia.artNow.kind}
                    src={projectMedia.artNow.src}
                    alt="Carte interactive des expositions européennes d’ArtNowDatabase"
                    caption="ArtNowDatabase : une carte alimentée par des données collectées et organisées automatiquement."
                    language="fr"
                  />
                </div>
              )}
            </article>
          </div>
        </section>

        {/* WORKING APPROACH */}
        <section
          id="approach"
          className="border-y border-zinc-800 bg-zinc-900/40 scroll-mt-8"
        >
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <p className="text-sm uppercase tracking-widest font-semibold text-teal-400 mb-3">
              Notre méthode
            </p>

            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Des solutions concrètes, sans complexité inutile.
            </h2>

            <div className="mt-10 grid md:grid-cols-3 gap-8">
              {steps.map((step) => (
                <div key={step.number}>
                  <span className="text-2xl font-mono font-semibold text-teal-400">
                    {step.number}
                  </span>

                  <h3 className="mt-4 text-lg font-bold">{step.title}</h3>

                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <p className="text-sm uppercase tracking-widest font-semibold text-teal-400 mb-4">
                À propos de Reciproque
              </p>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                Un contact direct avec le développeur.
              </h2>
            </div>

            <div className="space-y-5 text-zinc-400 leading-relaxed">
              <p>
                Reciproque est l’activité indépendante de services informatiques
                et de développement logiciel de Dirk Mertens.
              </p>

              <p>
                Vous échangez directement avec la personne qui analyse vos
                besoins, conçoit la solution et développe le logiciel.
              </p>

              <p>
                L’expérience acquise dans les applications web, les
                infrastructures de données, l’automatisation et les systèmes
                informatiques permet d’aborder les problèmes qui se situent à la
                croisée des logiciels, de l’infrastructure et des processus
                métier.
              </p>

              <Link
                href="/reseaux-informatique"
                className="inline-flex text-sm font-semibold text-teal-300 hover:text-teal-200"
              >
                Découvrir nos services de réseaux informatiques →
              </Link>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="border-t border-zinc-800 bg-zinc-900/40 scroll-mt-8"
        >
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <div className="max-w-xl">
              <p className="text-sm uppercase tracking-widest font-semibold text-teal-400 mb-4">
                Contact
              </p>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Parlons de ce qui vous fait perdre du temps.
              </h2>

              <p className="mt-5 text-zinc-400 leading-relaxed">
                Une tâche répétitive, un logiciel difficile à utiliser ou un
                processus à simplifier ? Vous n’avez besoin ni d’un cahier des
                charges ni d’un projet déjà défini. Nous pouvons commencer par
                examiner ensemble ce qui mérite d’être amélioré.
              </p>

              <ContactForm variant="software" language="fr" />
            </div>
          </div>
        </section>
      </main>
      {/* FOOTER */}
      <SiteFooter theme="dark" language="fr" section="software" />{" "}
    </div>
  );
}
