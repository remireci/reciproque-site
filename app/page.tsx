import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-teal-500 selection:text-zinc-950">
      {/* HEADER / HERO */}
      <header className="max-w-4xl mx-auto px-6 pt-24 pb-16 md:pt-36 md:pb-24">
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
              Let's build something
            </Button>
          </a>
        </div>
      </header>

      {/* CORE WORK / REFERENCES */}
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-24">
        {/* Reference A: Breeze */}
        <section className="border-t border-zinc-800/60 pt-12 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-100">
                Breeze
              </h2>
              <span className="text-xs bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded font-mono">
                App Reference
              </span>
            </div>
            <p className="text-zinc-400 text-sm mt-1">
              Online assessment app owned by Tomorrow Never Knows, used by{" "}
              <strong className="text-zinc-300 font-medium">
                Volvo Benelux
              </strong>
              .
            </p>
            <p className="mt-4 text-zinc-300 text-sm leading-relaxed">
              A high-stakes, zero-fault practical assessment platform.
              Engineered to manage complex state and synchronized data streaming
              under demanding corporate infrastructure rules.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono text-teal-400 bg-zinc-900/50 p-3 rounded-lg border border-zinc-800/40">
              <span>TypeScript</span> • <span>Next.js</span> •{" "}
              <span>GraphQL (Apollo)</span> • <span>Ably</span> •{" "}
              <span>Sanity</span> • <span>GCR</span>
            </div>
          </div>
          <div className="bg-zinc-900 aspect-video rounded-xl border border-zinc-800/80 flex flex-col items-center justify-center p-4 text-center overflow-hidden">
            {/* When you record your video, replace this div with your iframe/video player */}
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
              [ 60s App Walkthrough Video ]
            </span>
            <p className="text-xs text-zinc-600 mt-2 max-w-xs">
              Drop your async video embed here to instantly prove code execution
              capabilities.
            </p>
          </div>
        </section>

        {/* Reference B: ArtNowDatabase */}
        <section className="border-t border-zinc-800/60 pt-12 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-100">
                ArtNowDatabase
              </h2>
              <span className="text-xs bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded font-mono">
                Data Pipeline Reference
              </span>
            </div>
            <p className="text-zinc-400 text-sm mt-1">
              Automated intelligence platform mapping fine art exhibitions
              across Europe.
            </p>
            <p className="mt-4 text-zinc-300 text-sm leading-relaxed">
              An autonomous data harvesting ecosystem utilizing a proprietary
              scraping engine paired with a localized LLM. Processes, refines,
              and maps unstructured web data into structured global feeds
              automatically.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-mono text-teal-400 bg-zinc-900/50 p-3 rounded-lg border border-zinc-800/40">
              <span>Python</span> •<span>AI Scraping Engine (Crawl4AI)</span> •
              <span>High-Speed Automation (Asyncio)</span> •
              <span>Local LLMs (HuggingFace)</span> •
              <span>Smart Data Mapping & Validation</span>
            </div>
          </div>
          <div className="bg-zinc-900 aspect-video rounded-xl border border-zinc-800/80 flex flex-col items-center justify-center p-4 text-center">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
              [ Live Platform Dashboard / Map ]
            </span>
            <p className="text-xs text-zinc-600 mt-2 max-w-xs">
              A visual capture or mini-frame showing the scale of the live map
              database.
            </p>
          </div>
        </section>

        {/* THE MANIFESTO / ETHOS */}
        <section className="border-t border-zinc-800/60 pt-12 max-w-2xl">
          <h3 className="text-lg font-semibold text-zinc-200">
            How we operate
          </h3>
          <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
            We do not over-refine software for hypothetical problems. Building
            for imaginary scale is a waste of your capital and our energy. We
            deploy working infrastructure rapidly, and refine dynamically based
            on real-world edge cases.
          </p>
        </section>

        {/* CONTACT FORM */}
        <section
          id="contact"
          className="border-t border-zinc-800/60 pt-12 max-w-md scroll-mt-12"
        >
          <h2 className="text-2xl font-bold tracking-tight text-zinc-100">
            Let's solve a bottleneck.
          </h2>
          <p className="text-zinc-400 text-sm mt-1">
            Have an application to build or a complex data source to pipe? Reach
            out.
          </p>
          <ContactForm />

          {/* REPLACE ACTION URL WITH YOUR FORMSPREE/FORMSPARK ID LATER */}
          {/* <form
            action="https://formspree.io/f/your_endpoint_id"
            method="POST"
            className="mt-8 space-y-5"
          >
            <div>
              <label className="text-xs uppercase font-mono tracking-wider text-zinc-400 block mb-1.5">
                Email Address
              </label>
              <Input
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                className="bg-zinc-900/50 border-zinc-800 text-zinc-100 focus:border-teal-500 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs uppercase font-mono tracking-wider text-zinc-400 block mb-1.5">
                What are we building or scraping?
              </label>
              <Textarea
                name="message"
                required
                placeholder="Tell us briefly about your engineering target..."
                className="bg-zinc-900/50 border-zinc-800 text-zinc-100 focus:border-teal-500 transition-colors min-h-[120px]"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-zinc-100 text-zinc-950 hover:bg-zinc-200 font-semibold transition-colors"
            >
              Submit Project Query
            </Button>
          </form> */}
        </section>
      </main>

      <footer className="max-w-4xl mx-auto px-6 border-t border-zinc-900 py-12 text-xs text-zinc-600 font-mono flex justify-between items-center">
        <span>© {new Date().getFullYear()} Reciproque.</span>
        <span className="text-zinc-700">Built fast. Built right.</span>
      </footer>
    </div>
  );
}
