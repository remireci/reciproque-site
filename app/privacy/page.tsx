import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans p-8 md:p-24 selection:bg-teal-500 selection:text-zinc-950">
      <div className="max-w-2xl mx-auto space-y-8">
        <header>
          <Link
            href="/"
            className="text-sm font-mono text-teal-400 hover:underline"
          >
            ← back to home
          </Link>
          <h1 className="text-3xl font-extrabold text-zinc-100 mt-4 tracking-tight">
            Privacy & Data Policy
          </h1>
          <p className="text-xs text-zinc-500 font-mono mt-1">
            Last updated: June 2026
          </p>
        </header>

        <section className="space-y-4 text-sm leading-relaxed">
          <p>
            At <strong>Reciproque</strong> (reciproque.eu), we value data
            efficiency and transparency. We do not engage in invasive tracking
            protocols.
          </p>

          <h2 className="text-lg font-bold text-zinc-100 pt-4">
            1. Data Collection via Forms
          </h2>
          <p>
            When you contact us via the form on our landing page, we collect
            your email address and the brief query message you submit. This
            information is processed exclusively via secure serverless
            infrastructure to respond directly to your business inquiry. We
            never sell, rent, or lease this data to third parties.
          </p>

          <h2 className="text-lg font-bold text-zinc-100 pt-4">
            2. Cookies & Tracking
          </h2>
          <p>
            <strong>This website sets zero tracking cookies.</strong> We do not
            use intrusive advertising scripts or user-profiling trackers. If
            digital telemetry is introduced later, we utilize completely
            anonymous, privacy-respecting analytical stacks (such as Umami
            Analytics) that aggregate traffic data without harvesting your
            Personally Identifiable Information (PII) or tracking you across
            different websites.
          </p>

          <h2 className="text-lg font-bold text-zinc-100 pt-4">
            3. Data Engineering Compliance
          </h2>
          <p>
            When building and deploying automated data collection pipelines for
            clients, Reciproque enforces strict compliance protocols. We process
            only publicly accessible web infrastructure, honor rate limits, and
            maintain structural compliance boundaries under standard European
            directives.
          </p>

          <h2 className="text-lg font-bold text-zinc-100 pt-4">
            4. Your Rights
          </h2>
          <p>
            You have the absolute right to request the complete deletion of any
            email correspondence sent to us. Contact us directly at{" "}
            <span className="text-zinc-100 underline">info@reciproque.eu</span>{" "}
            to clear your communication data logs.
          </p>
        </section>

        <footer className="pt-12 text-xs text-zinc-600 font-mono border-t border-zinc-900">
          Reciproque • info@reciproque.eu • Belgium
        </footer>
      </div>
    </div>
  );
}
