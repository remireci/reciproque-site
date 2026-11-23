import Link from "next/link";

type Props = {
  theme?: "light" | "dark";
  language?: "fr" | "en";
  section?: "local" | "software";
};

export default function SiteFooter({
  theme = "light",
  language = "fr",
  section = "local",
}: Props) {
  const dark = theme === "dark";
  const softwarePage = section === "software";

  const linkClass = dark ? "hover:text-teal-300" : "hover:text-teal-700";

  return (
    <footer
      className={
        dark
          ? "border-t border-zinc-800 bg-zinc-950"
          : "border-t border-slate-200 bg-white"
      }
    >
      <div
        className={`max-w-6xl mx-auto px-6 py-8 flex flex-wrap items-center justify-between gap-4 text-sm ${
          dark ? "text-zinc-500" : "text-slate-500"
        }`}
      >
        <span>© {new Date().getFullYear()} Reciproque</span>

        <div className="flex flex-wrap gap-6">
          <Link href="/" className={linkClass}>
            {language === "fr"
              ? "Accueil"
              : softwarePage
                ? "Local IT (FR)"
                : "Home"}
          </Link>

          {softwarePage && (
            <Link href="#projects" className={linkClass}>
              {language === "fr" ? "Réalisations" : "Selected work"}
            </Link>
          )}

          <a href="mailto:info@reciproque.eu" className={linkClass}>
            Contact
          </a>

          <Link href="/privacy" className={linkClass}>
            {language === "fr" ? "Confidentialité" : "Privacy"}
          </Link>

          <Link href="/mentions-legales" className={linkClass}>
            {language === "fr" ? "Mentions légales" : "Legal information"}
          </Link>
        </div>
      </div>
    </footer>
  );
}
