"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

type ContactVariant = "assistance" | "reseaux" | "software";

type Props = {
  variant?: ContactVariant;
};

export default function ContactForm({ variant = "software" }: Props) {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const english = variant === "software";
  const dark = english;

  const labels = english
    ? {
        name: "Your name",
        email: "Email address",
        phone: "Phone number (optional)",
        commune: "Location (optional)",
        message: "What problem are you trying to solve?",
        placeholder:
          "Tell us about your current tools, what isn't working, or what you'd like to improve...",
        submit: "Send your enquiry",
        sending: "Sending...",
        success: "Your message has been sent successfully.",
        error:
          "Something went wrong. Please try again or email info@reciproque.eu.",
        privacy:
          "Your information will only be used to respond to your enquiry.",
        warning: "Please don't include passwords or confidential information.",
      }
    : {
        name: "Votre nom",
        email: "Votre adresse e-mail",
        phone: "Téléphone (facultatif)",
        commune: "Votre commune (facultatif)",
        message: "Décrivez brièvement votre demande",
        placeholder:
          variant === "assistance"
            ? "Quel est le problème rencontré ? Quel appareil utilisez-vous ?"
            : "Décrivez votre installation actuelle, les difficultés rencontrées ou votre projet...",
        submit: "Envoyer ma demande",
        sending: "Envoi en cours...",
        success: "Votre message a bien été envoyé.",
        error:
          "Une erreur est survenue. Réessayez ou écrivez à info@reciproque.eu.",
        privacy:
          "Vos coordonnées sont utilisées uniquement pour répondre à votre demande.",
        warning:
          "Ne transmettez pas de mots de passe ou de données confidentielles.",
      };

  const inputClass = dark
    ? "w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-teal-400"
    : "w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-600";

  const labelClass = dark
    ? "block mb-2 text-sm font-medium text-zinc-300"
    : "block mb-2 text-sm font-medium text-slate-700";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Contact request failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-busy={status === "submitting"}
      className="mt-8 space-y-5"
    >
      <input type="hidden" name="service" value={variant} />

      {/* Honeypot: should remain empty */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-10000px" }}
      >
        <label htmlFor={`website-${variant}`}>Website</label>
        <input
          id={`website-${variant}`}
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* NAME */}
      <div>
        <label htmlFor={`name-${variant}`} className={labelClass}>
          {labels.name}
        </label>

        <input
          id={`name-${variant}`}
          name="name"
          type="text"
          autoComplete="name"
          required
          minLength={2}
          maxLength={100}
          disabled={status === "submitting"}
          className={inputClass}
        />
      </div>

      {/* EMAIL */}
      <div>
        <label htmlFor={`email-${variant}`} className={labelClass}>
          {labels.email}
        </label>

        <input
          id={`email-${variant}`}
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
          disabled={status === "submitting"}
          className={inputClass}
        />
      </div>

      {/* PHONE */}
      <div>
        <label htmlFor={`phone-${variant}`} className={labelClass}>
          {labels.phone}
        </label>

        <input
          id={`phone-${variant}`}
          name="phone"
          type="tel"
          autoComplete="tel"
          maxLength={40}
          disabled={status === "submitting"}
          className={inputClass}
        />
      </div>

      {/* MUNICIPALITY: LOCAL SERVICES */}
      {!english && (
        <div>
          <label htmlFor={`commune-${variant}`} className={labelClass}>
            {labels.commune}
          </label>

          <input
            id={`commune-${variant}`}
            name="commune"
            type="text"
            autoComplete="address-level2"
            maxLength={100}
            disabled={status === "submitting"}
            className={inputClass}
            placeholder="Bertrix, Libramont, Bouillon..."
          />
        </div>
      )}

      {/* MESSAGE */}
      <div>
        <label htmlFor={`message-${variant}`} className={labelClass}>
          {labels.message}
        </label>

        <textarea
          id={`message-${variant}`}
          name="message"
          rows={5}
          required
          minLength={10}
          maxLength={4000}
          disabled={status === "submitting"}
          placeholder={labels.placeholder}
          className={`${inputClass} resize-y`}
        />
      </div>

      {/* PRIVACY */}
      <div
        className={`space-y-2 text-xs leading-relaxed ${
          dark ? "text-zinc-400" : "text-slate-500"
        }`}
      >
        <p>{labels.warning}</p>
        <p>
          {labels.privacy}{" "}
          <Link
            href="/privacy"
            className={
              dark
                ? "underline hover:text-teal-300"
                : "underline hover:text-teal-700"
            }
          >
            {english ? "Privacy policy" : "Confidentialité"}
          </Link>
        </p>
      </div>

      {/* SUBMIT */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className={`w-full rounded-lg px-6 py-3 font-semibold transition-colors disabled:opacity-50 ${
          dark
            ? "bg-teal-400 text-zinc-950 hover:bg-teal-300"
            : "bg-teal-700 text-white hover:bg-teal-800"
        }`}
      >
        {status === "submitting" ? labels.sending : labels.submit}
      </button>

      {status === "success" && (
        <p role="status" className="text-sm font-medium text-teal-600">
          {labels.success}
        </p>
      )}

      {status === "error" && (
        <p role="alert" className="text-sm font-medium text-red-500">
          {labels.error}
        </p>
      )}
    </form>
  );
}
