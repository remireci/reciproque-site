import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ContactForm from "./components/ContactForm";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-teal-500 selection:text-zinc-950">
      {/* 1. HERO SECTION */}
      <header className="max-w-4xl mx-auto px-6 pt-24 pb-16 md:pt-36 md:pb-20">
        <span className="text-teal-400 font-mono text-sm tracking-wider uppercase font-semibold">
          reciproque.eu
        </span>
        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-100 max-w-3xl">
          We build real-time web applications & custom automated data pipelines.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
          Production-grade software built for speed, scale, and high
          reliability. No fluff, no over-engineering—just code that drives your
          business logic.
        </p>
        <div className="mt-10">
          <a href="#contact">
            <Button
              size="lg"
              className="bg-teal-400 text-zinc-950 hover:bg-teal-300 font-semibold shadow-lg shadow-teal-500/10"
            >
              Let's solve your bottleneck
            </Button>
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-28">
        {/* 2. TYPICAL PROBLEMS WE SOLVE */}
        <section className="border-t border-zinc-800/60 pt-16">
          <h2 className="text-xs uppercase font-mono tracking-wider text-teal-400 font-semibold mb-6">
            Typical problems we solve
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Monitoring competitors automatically",
              "Collecting leads from multiple sources",
              "Aggregating job listings",
              "Tracking property opportunities",
              "Automating repetitive data collection",
              "Building internal operational tools",
            ].map((problem, idx) => (
              <div
                key={idx}
                className="bg-zinc-900/30 border border-zinc-800/50 rounded-xl p-5 hover:border-zinc-700/60 transition-colors"
              >
                <div className="h-2 w-2 rounded-full bg-teal-500 mb-3" />
                <p className="text-zinc-200 text-sm font-medium leading-snug">
                  {problem}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. PROOF / REFERENCES */}
        <section className="space-y-24">
          {/* Reference A: Breeze */}
          <div className="border-t border-zinc-800/60 pt-16 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-2xl font-bold tracking-tight text-zinc-100">
                  Breeze
                </h3>
                <span className="text-[10px] bg-zinc-900 text-zinc-400 border border-zinc-800 px-2 py-0.5 rounded font-mono uppercase tracking-wider">
                  Application
                </span>
              </div>
              <p className="text-zinc-200 font-medium text-base">
                Practical assessment platform owned by{" "}
                <a
                  href="https://www.tomorrowneverknows.be/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:underline transition-all"
                >
                  Tomorrow Never Knows
                </a>
                , used by{" "}
                <strong className="text-zinc-300 font-medium">
                  Volvo Benelux
                </strong>
                .
              </p>
              <p className="mt-2 text-zinc-400 text-sm leading-relaxed">
                Supports real-time examiner collaboration, live assessment
                scoring and report generation.
              </p>
              <div className="mt-6 text-[11px] font-mono text-zinc-500 leading-relaxed">
                <span className="text-zinc-400 font-medium block mb-1">
                  Tech Stack:
                </span>
                TS • Next.js • GraphQL (Apollo) • Ably • Sanity • GCR
              </div>
            </div>
            <div className="bg-zinc-900 aspect-video rounded-xl border border-zinc-800/80 flex flex-col items-center justify-center p-4 text-center overflow-hidden">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                [ 60s App Walkthrough Video ]
              </span>
            </div>
          </div>
          {/* Reference B: ArtNowDatabase */}
          <div className="border-t border-zinc-800/60 pt-16 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <h3 className="text-2xl font-bold tracking-tight text-zinc-100">
                  ArtNowDatabase
                </h3>
                <span className="text-[10px] bg-zinc-900 text-zinc-400 border border-zinc-800 px-2 py-0.5 rounded font-mono uppercase tracking-wider">
                  Data Pipeline
                </span>
              </div>
              <p className="text-zinc-200 font-medium text-base">
                Automated data collection platform covering art exhibitions
                across Europe.{" "}
                <a
                  href="https://artnowdatabase.eu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:underline transition-all font-normal text-sm block sm:inline mt-1 sm:mt-0"
                >
                  Visit platform ↗
                </a>
              </p>
              <p className="mt-2 text-zinc-400 text-sm leading-relaxed">
                Collects and validates information from hundreds of websites
                using custom scraping infrastructure and local AI models.
              </p>
              <div className="mt-6 text-[11px] font-mono text-zinc-500 leading-relaxed">
                <span className="text-zinc-400 font-medium block mb-1">
                  Infrastructure Stack:
                </span>
                Python • AI Scraping Engine (Crawl4AI) • High-Speed Automation
                (Asyncio) • Local LLMs (HuggingFace) • Validation
              </div>
            </div>
            <div className="bg-zinc-900 aspect-video rounded-xl border border-zinc-800/80 flex flex-col items-center justify-center p-4 text-center">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                [ Live Dashboard Capture ]
              </span>
            </div>
          </div>{" "}
        </section>

        {/* 4. ABOUT ME / PROFILE */}
        <section className="border-t border-zinc-800/60 pt-16 grid md:grid-cols-4 gap-8 items-start">
          <div className="md:col-span-1 flex justify-center md:justify-start">
            {/* Server-safe image frame */}
            <div className="w-28 h-28 md:w-44 md:h-44 rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-xl grayscale contrast-125 flex items-center justify-center">
              <img
                src="/avatar2.jpg"
                alt="Remi - Reciproque"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-3 space-y-3 text-center md:text-left">
            <h3 className="text-lg font-bold text-zinc-100">Reciproque</h3>
            <p className="text-zinc-300 text-base leading-relaxed max-w-xl">
              Custom software and data automation built by Dirk Mertens.
            </p>
            <p className="text-zinc-500 text-sm max-w-xl">
              We do not over-refine software for hypothetical problems. Building
              for imaginary scale is a waste of capital. We deploy functional,
              high-integrity system architectures rapidly and refine dynamically
              based on live edge cases.
            </p>
          </div>
        </section>

        {/* 5. CONTACT FORM */}
        <section
          id="contact"
          className="border-t border-zinc-800/60 pt-16 max-w-md mx-auto md:mx-0 scroll-mt-12 w-full"
        >
          <h2 className="text-2xl font-bold tracking-tight text-zinc-100">
            Let's solve a bottleneck.
          </h2>
          <p className="text-zinc-400 text-sm mt-1">
            Have an application to build or a complex data source to pipe? Reach
            out.
          </p>
          <ContactForm />
        </section>
      </main>

      <footer className="max-w-4xl mx-auto px-6 border-t border-zinc-900 py-12 text-xs text-zinc-600 font-mono flex justify-between items-center">
        <span>© {new Date().getFullYear()} Reciproque.</span>
        <span>
          <Link href="./privacy"> Privacy</Link>
        </span>
        <span className="text-zinc-700">Built fast. Built right.</span>
      </footer>
    </div>
  );
}
