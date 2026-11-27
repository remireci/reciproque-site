import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactForm from "../components/ContactForm-bilingual";
import SoftwareLanguageSwitch from "../components/SoftwareLanguageSwitch";
import ProjectMedia from "../components/ProjectMedia";
import { projectMedia } from "../components/projectMediaConfig";

export const metadata: Metadata = {
  title: "Custom Software, Automation & Data Protection | Reciproque",
  description:
    "Independent software development for businesses worldwide: custom applications, web platforms, workflow automation, integrations and privacy-conscious engineering.",
  alternates: {
    canonical: "/software-development",
    languages: {
      en: "/software-development",
      fr: "/fr/software-development",
      "x-default": "/software-development",
    },
  },
  openGraph: {
    title: "Software & Automation | Reciproque",
    description:
      "From targeted improvements to complete web platforms: custom software, workflow automation and integrations built around real business needs.",
    url: "/software-development",
    siteName: "Reciproque",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "https://reciproque.eu/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Reciproque — Custom software, automation and web applications",
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
      "When off-the-shelf tools fall short, we build software around your processes: a missing feature, a practical internal tool or a complete web platform.",
    keywords: "Business applications · Internal tools · Web platforms",
  },
  {
    number: "02",
    title: "Automation & integration",
    description:
      "Reduce repetitive work, connect systems and make information flow reliably. A focused automation or integration can solve a problem without replacing the tools you already use.",
    keywords: "Automation · APIs · Data pipelines · Integrations",
  },
  {
    number: "03",
    title: "Data protection by design",
    description:
      "Sensitive information deserves more than a privacy policy. We help examine how applications store, process and expose data, and implement appropriate technical safeguards.",
    keywords: "Access control · Data minimisation · Secure architecture",
  },
  {
    number: "04",
    title: "Websites & web applications",
    description:
      "We create websites and web applications that do useful work: forms, client portals, data management and integrations with internal systems, with attention to reliability, security, search visibility and data protection.",
    keywords: "Business websites · Forms · Client portals · Web applications",
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
      <SoftwareLanguageSwitch locale="en" />
      <main>
        {/* HERO */}
        <section className="max-w-6xl mx-auto px-6 pt-14 pb-16 md:pt-20 md:pb-20">
          <p className="text-xs sm:text-sm uppercase tracking-widest font-semibold text-teal-400 mb-5">
            Custom software · Automation · Web applications
          </p>

          <h1 className="max-w-4xl text-4xl md:text-5xl font-bold tracking-tight leading-[1.12]">
            Your business shouldn&apos;t have to work around its software.
          </h1>

          <p className="mt-7 max-w-3xl text-lg md:text-xl text-zinc-300 leading-relaxed">
            Software that doesn&apos;t fit your processes? Repetitive work,
            disconnected systems or a new application you need to build?
          </p>

          <p className="mt-4 max-w-3xl text-base text-zinc-400 leading-relaxed">
            Reciproque helps businesses solve these problems through focused
            improvements, integrations and custom software. Sometimes a small
            change is enough; sometimes you need an entirely new application.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-teal-400 px-6 py-3 text-sm font-semibold text-zinc-950 hover:bg-teal-300 transition-colors"
            >
              Discuss your project or problem
            </a>

            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-lg border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-200 hover:border-teal-400 hover:text-teal-300 transition-colors"
            >
              Explore our work
            </a>
          </div>

          <p className="mt-6 text-sm text-zinc-500">
            Independent software development · Available for remote
            collaboration
          </p>
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
        <section
          id="services"
          className="max-w-6xl mx-auto px-6 py-16 md:py-24 scroll-mt-8"
        >
          <div className="mb-10">
            <p className="text-sm uppercase tracking-widest font-semibold text-teal-400 mb-3">
              What we do
            </p>

            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              The right solution for the problem.
            </h2>

            <p className="mt-4 max-w-2xl text-zinc-400 leading-relaxed">
              From a targeted improvement to a complete application, the scope
              follows the problem — not the other way around.
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
            Software built for real-world challenges.
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-400 leading-relaxed">
            Two examples of complex applications with practical outcomes —
            supported by solid engineering behind the scenes.
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
                  A practical skills-assessment platform owned by{" "}
                  <a
                    href="https://www.tomorrowneverknows.be/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-300 hover:underline"
                  >
                    Tomorrow Never Knows
                  </a>
                  , used for practical assessments of mechanics at Volvo Cars
                  Belgium.
                </p>

                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  Evaluators observe skills during practical exercises, record
                  scores and observations, collaborate in real time and generate
                  assessment reports.
                </p>
                <div className="mt-7 rounded-xl border border-teal-900/70 bg-teal-950/30 p-5">
                  <p className="text-sm font-semibold text-zinc-100">
                    Interested in seeing Breeze in action?
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    Breeze isn&apos;t publicly accessible. Get in touch to
                    discuss a demonstration or possible trial access for your
                    organisation.
                  </p>
                  <a
                    href="#contact"
                    className="mt-3 inline-flex text-sm font-semibold text-teal-300 hover:text-teal-200"
                  >
                    Ask about Breeze →
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-7">
                <p className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-5">
                  What the platform enables
                </p>

                <ul className="space-y-4 text-sm text-zinc-300">
                  <li>Observing skills in real practical assessments</li>
                  <li>Coordinating evaluators and participants in real time</li>
                  <li>Recording scores and observations</li>
                  <li>Generating structured evaluation reports</li>
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
                    alt="Breeze demonstration: practical assessment, evaluator and participant workflows"
                    caption="Breeze: observing practical skills, coordinating assessments and preparing reports."
                    language="en"
                  />
                </div>
              )}
            </article>

            {/* ARTNOWDATABASE */}
            <article className="border-t border-zinc-800 pt-10 grid md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-teal-400">
                  Data platform & automation
                </span>

                <h3 className="mt-3 text-2xl font-bold">ArtNowDatabase</h3>

                <p className="mt-5 text-zinc-300 leading-relaxed">
                  An independently developed platform that organises art
                  exhibition information across Europe and displays it on an
                  interactive map.
                </p>

                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  Behind the map, automated processes collect, extract, check
                  and organise information from hundreds of websites, using
                  purpose-built tools and local AI models to reduce manual work.
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
                  What the platform enables
                </p>

                <ul className="space-y-4 text-sm text-zinc-300">
                  <li>Collecting information from diverse sources</li>
                  <li>Automatically extracting and checking data</li>
                  <li>Organising exhibitions by location and date</li>
                  <li>Making results accessible on an interactive map</li>
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
                    alt="ArtNowDatabase interactive European exhibition map"
                    caption="ArtNowDatabase: the exhibition map produced from automatically collected and organised data."
                    language="en"
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
                href="#contact"
                className="inline-flex text-sm font-semibold text-teal-300 hover:text-teal-200"
              >
                Discuss a software project →
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
                What would you like to build or improve?
              </h2>

              <p className="mt-5 text-zinc-400 leading-relaxed">
                Whether it&apos;s one frustrating process, an existing system
                that needs improving or a new application, tell us what you have
                in mind. You don&apos;t need a technical specification to start
                a conversation.
              </p>

              <ContactForm variant="software" language="en" />
            </div>
          </div>
        </section>
      </main>
      {/* FOOTER */}
      <SiteFooter theme="dark" language="en" section="software" />{" "}
    </div>
  );
}
