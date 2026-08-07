"use client";

import { useState } from "react";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import { useLang } from "../context/LanguageProvider";

export default function HomePage() {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);
  const email = "0rlandomarrerog@gmail.com";

  async function handleCopyEmail(e) {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — fall back to mailto.
      window.location.href = `mailto:${email}`;
      return;
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      <Hero />
      <section id="projects" className="mt-20 scroll-mt-24">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-mint">
              {t("navbar.projects")}
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-brand-textLight dark:text-brand-text">
              {t("projects.sectionTitle")}
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-brand-mutedLight dark:text-brand-muted">
            {t("projects.sectionDescription")}
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      <section id="about" className="mt-20 scroll-mt-24">
        <div className="rounded-xl border border-brand-borderLight bg-brand-surfaceLight p-8 shadow-soft dark:border-brand-border dark:bg-brand-surface dark:shadow-none">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-mint">
            {t("navbar.about")}
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-brand-textLight dark:text-brand-text">
            {t("about.title")}
          </h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="space-y-4 text-sm leading-7 text-brand-mutedLight dark:text-brand-muted">
              <p>{t("about.paragraph1")}</p>
              <p>{t("about.paragraph2")}</p>
            </div>
            <div className="rounded-lg border border-brand-borderLight bg-black/[0.02] p-5 dark:border-brand-border dark:bg-white/[0.02]">
              <p className="text-sm font-semibold text-brand-textLight dark:text-brand-text">
                {t("about.keyAreasTitle")}
              </p>
              <ul className="mt-3 space-y-2.5 text-sm text-brand-mutedLight dark:text-brand-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-mint" />
                  {t("about.keyArea1")}
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-mint" />
                  {t("about.keyArea2")}
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-mint" />
                  {t("about.keyArea3")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="mt-20 scroll-mt-24">
        <div className="rounded-xl border border-brand-borderLight bg-brand-surfaceLight p-8 dark:border-brand-border dark:bg-brand-surface">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-mint">
                {t("navbar.contact")}
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-brand-textLight dark:text-brand-text">
                {t("contact.title")}
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/0rlandoMG"
                className="inline-flex items-center justify-center rounded-md bg-brand-textLight px-5 py-3 text-sm font-semibold text-brand-bgLight transition hover:opacity-85 dark:bg-brand-text dark:text-brand-bg"
                target="_blank"
                rel="noreferrer"
              >
                {t("contact.github")}
              </a>
              <a
                href="https://www.linkedin.com/in/orlando-marrero-gonz%C3%A1les-415334428/"
                className="inline-flex items-center justify-center rounded-md border border-brand-borderLight px-5 py-3 text-sm font-semibold text-brand-textLight transition hover:border-brand-mint hover:text-brand-mint dark:border-brand-border dark:text-brand-text dark:hover:border-brand-mint dark:hover:text-brand-mint"
                target="_blank"
                rel="noreferrer"
              >
                {t("contact.linkedin")}
              </a>
              <a
                href="mailto:0rlandomarrerog@gmail.com"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center rounded-md border border-brand-borderLight px-5 py-3 text-sm font-semibold text-brand-textLight transition hover:border-brand-mint hover:text-brand-mint dark:border-brand-border dark:text-brand-text dark:hover:border-brand-mint dark:hover:text-brand-mint"
              >
                {copied ? t("contact.emailCopied") : t("contact.email")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
