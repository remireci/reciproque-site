import Link from "next/link";

type Page = "home" | "assistance" | "reseaux" | "software";
type Theme = "light" | "dark";
type Language = "fr" | "en";

type Props = {
  current: Page;
  theme?: Theme;
  language?: Language;
};

const localNavigation = [
  {
    id: "assistance",
    href: "/assistance-informatique",
    fr: "Assistance",
    en: "IT Support",
  },
  {
    id: "reseaux",
    href: "/reseaux-informatique",
    fr: "Réseaux",
    en: "Networks",
  },
  {
    id: "software",
    href: "/fr/software-development",
    fr: "Logiciels",
    en: "Software",
  },
] as const;

const softwareNavigation = [
  { id: "home", href: "/", fr: "Accueil", en: "Local IT (FR)" },
  { id: "services", href: "#services", fr: "Services", en: "Services" },
  { id: "projects", href: "#projects", fr: "Réalisations", en: "Work" },
  { id: "approach", href: "#approach", fr: "Méthode", en: "Approach" },
] as const;

export default function SiteHeader({
  current,
  theme = "light",
  language = "fr",
}: Props) {
  const dark = theme === "dark";
  const softwarePage = current === "software";

  // Clicking the brand always returns to the website homepage.
  // The international software page explicitly labels that destination as French.
  const brandHref = "/";
  const contactHref = current === "home" ? "/#contact" : "#contact";

  return (
    <header
      className={
        dark
          ? "border-b border-zinc-800 bg-zinc-950"
          : "border-b border-slate-200 bg-white"
      }
    >
      <nav
        aria-label={
          language === "fr" ? "Navigation principale" : "Main navigation"
        }
        className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4"
      >
        <Link
          href={brandHref}
          className={`text-xl font-bold tracking-tight ${
            dark ? "text-zinc-100" : "text-teal-800"
          }`}
        >
          reciproque
          <span className={dark ? "text-teal-400" : "text-teal-500"}>.</span>
        </Link>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          {softwarePage
            ? softwareNavigation.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={
                    dark
                      ? "text-zinc-400 hover:text-teal-300 transition-colors"
                      : "text-slate-600 hover:text-teal-700 transition-colors"
                  }
                >
                  {item[language]}
                </Link>
              ))
            : localNavigation.map((item) => {
                const active = current === item.id;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={
                      active
                        ? dark
                          ? "font-semibold text-teal-300"
                          : "font-semibold text-teal-800"
                        : dark
                          ? "text-zinc-400 hover:text-teal-300 transition-colors"
                          : "text-slate-600 hover:text-teal-700 transition-colors"
                    }
                  >
                    {item[language]}
                  </Link>
                );
              })}

          <a
            href={contactHref}
            className={
              dark
                ? "font-medium text-teal-300 hover:text-teal-200"
                : "font-medium text-teal-800 hover:text-teal-600"
            }
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
