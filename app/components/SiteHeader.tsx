import Link from "next/link";

type Page = "home" | "assistance" | "reseaux" | "software";
type Theme = "light" | "dark";
type Language = "fr" | "en";

type Props = {
  current: Page;
  theme?: Theme;
  language?: Language;
};

const navigation = [
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
    href: "/software-development",
    fr: "Logiciels",
    en: "Software",
  },
] as const;

export default function SiteHeader({
  current,
  theme = "light",
  language = "fr",
}: Props) {
  const dark = theme === "dark";

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
          href="/"
          className={`text-xl font-bold tracking-tight ${
            dark ? "text-zinc-100" : "text-teal-800"
          }`}
        >
          reciproque
          <span className={dark ? "text-teal-400" : "text-teal-500"}>.</span>
        </Link>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          {navigation.map((item) => {
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
            href={current === "home" ? "/#contact" : "#contact"}
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
