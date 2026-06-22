"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          subject: "Inquiry via réciproque.eu",
          message,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div>
        <label className="text-xs uppercase font-mono tracking-wider text-zinc-400 block mb-1.5">
          Email Address
        </label>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === "submitting"}
          placeholder="you@company.com"
          className="bg-zinc-900/50 border-zinc-800 text-zinc-100 focus:border-teal-500 transition-colors"
        />
      </div>

      <div>
        <label className="text-xs uppercase font-mono tracking-wider text-zinc-400 block mb-1.5">
          What are we building or scraping?
        </label>
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          disabled={status === "submitting"}
          placeholder="Tell us briefly about your engineering target..."
          className="bg-zinc-900/50 border-zinc-800 text-zinc-100 focus:border-teal-500 transition-colors min-h-[120px]"
        />
      </div>

      <Button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-zinc-100 text-zinc-950 hover:bg-zinc-200 font-semibold transition-colors disabled:opacity-50"
      >
        {status === "submitting" ? "Sending..." : "Submit Project Query"}
      </Button>

      {status === "success" && (
        <p className="text-sm text-teal-400 mt-2 font-medium animate-fade-in">
          ✓ Message sent! Check your inbox for confirmation.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400 mt-2 font-medium">
          ✕ Something went wrong. Please try again or email info@reciproque.eu
          directly.
        </p>
      )}
    </form>
  );
}
