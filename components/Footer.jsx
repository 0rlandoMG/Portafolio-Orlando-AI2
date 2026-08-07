"use client";

import { useLang } from "../context/LanguageProvider";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="mt-16 border-t border-brand-borderLight py-8 text-sm text-brand-mutedLight dark:border-brand-border dark:text-brand-muted">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} Orlando Marrero</p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://github.com/0rlandoMG"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-brand-mint"
          >
            {t("footer.github")}
          </a>
          <a
            href="https://www.linkedin.com/in/orlando-marrero-g/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-brand-mint"
          >
            {t("footer.linkedin")}
          </a>
        </div>
      </div>
    </footer>
  );
}
