"use client";

import { useState, FormEvent } from "react";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value, // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(json.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Network error — please try again.");
    }
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 md:px-10 py-24 md:py-32 border-t border-[var(--color-border)] scroll-mt-16"
    >
      <div className="grid md:grid-cols-[1fr_1.3fr] gap-14">
        <div>
          <p className="font-mono text-xs text-[var(--color-text-muted)] tracking-widest mb-3">
            05 / CONTACT
          </p>
          <h2 className="font-display font-semibold text-2xl md:text-3xl mb-6">
            Let&apos;s build something that scales.
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-sm">
            Open to full stack and backend-heavy roles. If you&apos;re hiring,
            or just want to talk system design, drop a message.
          </p>

          <div className="flex flex-col gap-3 font-mono text-sm">
            <a
              href="mailto:jerinjohnson31788@gmail.com"
              className="flex items-center gap-2.5 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors w-fit"
            >
              <Mail size={15} /> jerinjohnson31788@gmail.com
            </a>
            <a
              href="https://github.com/Jerin-johnson/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors w-fit"
            >
              <GithubIcon size={15} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jerin-johnson-76307334b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors w-fit"
            >
              <LinkedinIcon size={15} /> LinkedIn
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-8"
        >
          {/* Honeypot field — hidden from real users */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div className="grid sm:grid-cols-2 gap-5 mb-5">
            <div>
              <label
                htmlFor="name"
                className="block font-mono text-xs text-[var(--color-text-muted)] mb-2"
              >
                NAME
              </label>
              <input
                id="name"
                name="name"
                required
                maxLength={200}
                placeholder="Your name"
                className="w-full rounded-md bg-[var(--color-bg)] border border-[var(--color-border)] px-3.5 py-2.5 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] outline-none transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block font-mono text-xs text-[var(--color-text-muted)] mb-2"
              >
                EMAIL
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-md bg-[var(--color-bg)] border border-[var(--color-border)] px-3.5 py-2.5 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] outline-none transition-colors"
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block font-mono text-xs text-[var(--color-text-muted)] mb-2"
            >
              MESSAGE
            </label>
            <textarea
              id="message"
              name="message"
              required
              maxLength={5000}
              rows={5}
              placeholder="What are you building?"
              className="w-full rounded-md bg-[var(--color-bg)] border border-[var(--color-border)] px-3.5 py-2.5 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent)] outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full sm:w-auto rounded-md bg-[var(--color-accent)] text-[var(--color-bg)] px-6 py-3 text-sm font-mono font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>

          {status === "sent" && (
            <p className="mt-4 font-mono text-xs text-[var(--color-success)]">
              Message sent — I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 font-mono text-xs text-red-400">{errorMsg}</p>
          )}
        </form>
      </div>
    </section>
  );
}
