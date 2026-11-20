"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Locale = "en" | "fr";
const PATHS: Record<Locale, string> = {
  en: "/software-development",
  fr: "/fr/software-development",
};
const CHOICE_KEY = "reciproque-software-language-choice";

export default function SoftwareLanguageSwitch({ locale }: { locale: Locale }) {
  const [suggestFrench, setSuggestFrench] = useState(false);

  useEffect(() => {
    try {
      // A suggestion only: direct links always stay on the requested language.
      const selected = window.localStorage.getItem(CHOICE_KEY);
      const frenchBrowser = window.navigator.languages?.some((l) =>
        l.toLowerCase().startsWith("fr")
      ) ?? window.navigator.language.toLowerCase().startsWith("fr");
      setSuggestFrench(locale === "en" && !selected && frenchBrowser);
    } catch {
      // Browsers that block localStorage still get an ordinary language switch.
    }
  }, [locale]);

  function rememberChoice(value: Locale) {
    try { window.localStorage.setItem(CHOICE_KEY, value); } catch {}
    setSuggestFrench(false);
  }

  return (
    <div className="border-b border-zinc-800 bg-zinc-950 text-zinc-300">
      <div className="mx-auto flex max-w-6xl items-center justify-end gap-2 px-6 py-2 text-xs" aria-label="Language selection">
        <span className="mr-2 text-zinc-500">{locale === "fr" ? "Langue" : "Language"}</span>
        {(["en", "fr"] as const).map((choice) => (
          <Link
            key={choice}
            href={PATHS[choice]}
            hrefLang={choice}
            lang={choice}
            aria-current={choice === locale ? "page" : undefined}
            onClick={() => rememberChoice(choice)}
            className={`rounded px-3 py-1.5 font-semibold transition-colors ${choice === locale ? "bg-teal-400 text-zinc-950" : "border border-zinc-700 hover:border-teal-400 hover:text-teal-300"}`}
          >
            {choice.toUpperCase()}
          </Link>
        ))}
      </div>
      {suggestFrench && (
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-6 pb-3 text-sm" lang="fr">
          <span>Cette page est aussi disponible en français.</span>
          <Link href={PATHS.fr} onClick={() => rememberChoice("fr")} className="font-semibold text-teal-300 hover:underline">
            Voir la version française →
          </Link>
          <button type="button" onClick={() => rememberChoice("en")} className="text-zinc-400 underline hover:text-zinc-200">
            Rester en anglais
          </button>
        </div>
      )}
    </div>
  );
}
