import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Custom Software, Automation & Data Protection | Reciproque",
  description:
    "Custom business applications, workflow automation, system integration and privacy-conscious software development. Independent software engineering by Reciproque.",
  alternates: {
    canonical: "/software-development",
  },
  openGraph: {
    title: "Software & Automation | Reciproque",
    description:
      "Software designed around your business needs. Custom applications, automation, integrations and better data protection.",
    url: "/software-development",
    siteName: "Reciproque",
    locale: "en_GB",
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
  "We enter the same information into several different systems.",
  "Too much of our daily work depends on repetitive manual tasks.",
  "Our existing software doesn't quite do what we need.",
  "Our information is scattered across websites, files and applications.",
  "We handle sensitive data, but aren't sure who can access it.",
  "We need a solution that fits our organisation, not the other way around.",
];

const solutions = [
  {
    number: "01",
    title: "Custom applications",
    description:
      "When existing products don't match your processes, we build tools around the way your organisation actually works. From internal applications to more complex web platforms.",
    keywords: "Business applications · Internal tools · Web platforms",
  },
  {
    number: "02",
    title: "Automation & integration",
    description:
      "Reduce repetitive work, connect existing systems and bring information together. We develop automated workflows, data integrations and processing pipelines.",
    keywords: "Automation · APIs · Data pipelines · Integrations",
  },
  {
    number: "03",
    title: "Data protection by design",
    description:
      "Sensitive information deserves more than a privacy policy. We help examine how applications store, process and expose data, and implement appropriate technical safeguards.",
    keywords: "Access control · Data minimisation · Secure architecture",
  },
];

const steps = [
  {
    number: "01",
    title: "Understand the real problem",
    description:
      "We start with your existing processes, technical constraints and business objectives, rather than assuming new software is always necessary.",
  },
  {
    number: "02",
    title: "Design a practical solution",
    description:
      "We identify what can be improved, connected or built, keeping complexity and ongoing maintenance in proportion to your needs.",
  },
  {
    number: "03",
    title: "Build, test and refine",
    description:
      "We develop working solutions, validate them against real situations and improve them as requirements and experience evolve.",
  },
];

export default function SoftwareDevelopmentPage() {
  return (
    <div
      lang="en"
      className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-teal-400 selection:text-zinc-950"
    >
      {/* NAVIGATION */}
      <SiteHeader current="software" theme="dark" language="en" />
      <main>
        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6 pt-14 pb-16 md:pt-20 md:pb-20">
          <p className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-teal-400 mb-5">
            Software development · Automation · Data protection
          </p>

          <h1 className="max-w-4xl text-4xl md:text-5xl font-bold tracking-tight leading-[1.12]">
            Your business shouldn&apos;t have to work around its software.
          </h1>

          <p className="mt-7 max-w-3xl text-lg md:text-xl text-zinc-300 leading-relaxed">
            Disconnected tools, repetitive work, unreliable processes or
            sensitive data that&apos;s difficult to protect?
          </p>

          <p className="mt-4 max-w-3xl text-base text-zinc-400 leading-relaxed">
            Reciproque builds and improves software to solve the problems behind
            them. From practical internal tools to custom applications,
            automation and better data protection.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-teal-400 px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-teal-300 transition-colors"
            >
              Tell us what isn&apos;t working
            </a>

            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-200 hover:border-teal-400 hover:text-teal-300 transition-colors"
            >
              Explore our work
            </a>
          </div>
        </section>

        {/* PROBLEMS */}
        <section className="border-y border-zinc-800 bg-zinc-900/40">
          <div className="max-w-6xl mx-auto px-6 py-14 md:py-18">
            <p className="text-sm uppercase tracking-widest font-semibold text-teal-400 mb-3">
              Typical challenges
            </p>

            <h2 className="max-w-3xl text-2xl md:text-3xl font-bold tracking-tight">
              Technology should make your work easier.
            </h2>

            <p className="mt-4 max-w-2xl text-zinc-400 leading-relaxed">
              You don&apos;t need to know which technology to use. Start with
              the problem you want to solve.
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
        <section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-widest font-semibold text-teal-400 mb-3">
              What we do
            </p>

            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              The right solution for the problem.
            </h2>

            <p className="mt-4 max-w-2xl text-zinc-400 leading-relaxed">
              Sometimes that means building something new. Sometimes it means
              improving what you already have.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
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
                  Data protection
                </p>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                  Who can actually access your data?
                </h2>

                <p className="mt-6 text-zinc-400 leading-relaxed">
                  Having a privacy policy is not the same as having technically
                  protected data.
                </p>
              </div>

              <div className="space-y-5 text-zinc-300 leading-relaxed">
                <p>
                  Many organisations store personal or confidential information
                  in applications and databases without a clear understanding of
                  who can access it.
                </p>

                <p>
                  Employees, administrators, service providers and external
                  developers may have broader access than their work requires.
                </p>

                <p>
                  Reciproque can help examine the technical handling of
                  sensitive information and implement appropriate improvements,
                  including:
                </p>

                <ul className="space-y-3 pl-5 list-disc marker:text-teal-400 text-sm text-zinc-400">
                  <li>
                    Restricting access according to roles and responsibilities
                  </li>
                  <li>Limiting unnecessary exposure of personal data</li>
                  <li>
                    Separating development and test environments from real
                    customer data
                  </li>
                  <li>Improving database and application security controls</li>
                  <li>
                    Considering encryption and other protective measures where
                    appropriate
                  </li>
                </ul>

                <p className="text-sm text-zinc-500">
                  Technical improvements can support GDPR compliance, but do not
                  replace legal assessments or formal compliance audits.
                </p>

                <a
                  href="#contact"
                  className="inline-flex text-sm font-semibold text-teal-300 hover:text-teal-200"
                >
                  Discuss your data protection concerns →
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
            Selected work
          </p>

          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Real projects. Real technical challenges.
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-400 leading-relaxed">
            Two examples of software engineering, integration and automated data
            processing.
          </p>

          <div className="mt-12 space-y-12">
            {/* BREEZE */}
            <article className="border-t border-zinc-800 pt-10 grid md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-teal-400">
                  Web application
                </span>

                <h3 className="mt-3 text-2xl font-bold">Breeze</h3>

                <p className="mt-5 text-zinc-300 leading-relaxed">
                  A practical assessment platform owned by{" "}
                  <a
                    href="https://www.tomorrowneverknows.be/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-300 hover:underline"
                  >
                    Tomorrow Never Knows
                  </a>
                  , used by Volvo Benelux.
                </p>

                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  Supports real-time collaboration between examiners, assessment
                  scoring and report generation.
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-7">
                <p className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-5">
                  Engineering challenges
                </p>

                <ul className="space-y-4 text-sm text-zinc-300">
                  <li>Real-time application behaviour</li>
                  <li>Coordinating multiple users and workflows</li>
                  <li>Data processing and report generation</li>
                  <li>Integration of external services</li>
                </ul>

                <p className="mt-7 text-xs font-mono text-zinc-500 leading-relaxed">
                  TypeScript · Next.js · GraphQL · Ably · Sanity
                </p>
              </div>
            </article>

            {/* ARTNOWDATABASE */}
            <article className="border-t border-zinc-800 pt-10 grid md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-teal-400">
                  Data platform & automation
                </span>

                <h3 className="mt-3 text-2xl font-bold">ArtNowDatabase</h3>

                <p className="mt-5 text-zinc-300 leading-relaxed">
                  An independently developed platform collecting and organising
                  information about art exhibitions across Europe.
                </p>

                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  Automated extraction, validation and processing of information
                  from hundreds of different websites, using custom scraping
                  infrastructure and local AI models.
                </p>

                <a
                  href="https://artnowdatabase.eu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex text-sm font-semibold text-teal-300 hover:text-teal-200"
                >
                  Visit ArtNowDatabase ↗
                </a>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-7">
                <p className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-5">
                  Engineering challenges
                </p>

                <ul className="space-y-4 text-sm text-zinc-300">
                  <li>Automated collection from diverse sources</li>
                  <li>Data extraction and validation</li>
                  <li>Asynchronous processing at scale</li>
                  <li>Integration of local language models</li>
                </ul>

                <p className="mt-7 text-xs font-mono text-zinc-500 leading-relaxed">
                  Python · Crawl4AI · Local LLMs · MongoDB · Next.js
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* WORKING APPROACH */}
        <section className="border-y border-zinc-800 bg-zinc-900/40">
          <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
            <p className="text-sm uppercase tracking-widest font-semibold text-teal-400 mb-3">
              Our approach
            </p>

            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Practical engineering, without unnecessary complexity.
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
                About Reciproque
              </p>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                Work directly with the engineer.
              </h2>
            </div>

            <div className="space-y-5 text-zinc-400 leading-relaxed">
              <p>
                Reciproque is the independent IT and software development
                activity of Dirk Mertens.
              </p>

              <p>
                You work directly with the person who analyses your needs,
                designs the solution and develops the software.
              </p>

              <p>
                Experience with web applications, data infrastructure,
                automation and IT systems makes it possible to approach problems
                across the boundaries between software, infrastructure and
                business processes.
              </p>

              <Link
                href="/reseaux-informatique"
                className="inline-flex text-sm font-semibold text-teal-300 hover:text-teal-200"
              >
                Explore our IT infrastructure services →
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
                What problem can we help you solve?
              </h2>

              <p className="mt-5 text-zinc-400 leading-relaxed">
                Tell us about the challenge you&apos;re facing, your current
                tools or the idea you want to explore. You don&apos;t need to
                have a technical specification.
              </p>

              <ContactForm variant="software" />
            </div>
          </div>
        </section>
      </main>
      {/* FOOTER */}
      <SiteFooter theme="dark" language="en" />{" "}
    </div>
  );
}
