import Image from "next/image";
import { useLang } from "../context/LanguageProvider";

export default function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="mt-10 scroll-mt-24">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <div className="relative h-20 w-20 overflow-hidden rounded-full border border-brand-borderLight dark:border-brand-border">
            <Image
              src="/images/avatar.jpg"
              alt="Orlando Marrero"
              fill
              className="object-cover"
            />
          </div>
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-borderLight px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-brand-mutedLight dark:border-brand-border dark:text-brand-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
            {t("hero.badge")}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-brand-textLight dark:text-brand-text sm:text-5xl">
            {t("hero.title")}
          </h1>
          <p className="text-base font-medium text-brand-mutedLight dark:text-brand-muted">
            {t("hero.subtitle")}
          </p>
          <p className="max-w-xl text-base leading-7 text-brand-mutedLight dark:text-brand-muted">
            {t("hero.description")}
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="/Orlando_Marrero_Gonzalez_AI_Engineer_cv.pdf"
              download="Orlando_Marrero_Gonzalez_AI_Engineer_cv.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-textLight px-5 py-3 text-sm font-semibold text-brand-bgLight transition hover:opacity-85 focus:outline-none focus:ring-2 focus:ring-brand-mint focus:ring-offset-2 focus:ring-offset-brand-bgLight dark:bg-brand-text dark:text-brand-bg dark:focus:ring-offset-brand-bg"
            >
              {t("hero.ctaDownload")}
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-brand-borderLight px-5 py-3 text-sm font-semibold text-brand-textLight transition hover:border-brand-mint hover:text-brand-mint dark:border-brand-border dark:text-brand-text dark:hover:border-brand-mint dark:hover:text-brand-mint"
            >
              {t("hero.ctaProjects")}
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-xl border border-brand-borderLight bg-brand-surfaceLight shadow-soft dark:border-brand-border dark:bg-brand-surface dark:shadow-glow">
          <div className="flex items-center gap-2 border-b border-brand-borderLight px-4 py-3 dark:border-brand-border">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-textLight text-[10px] font-bold text-brand-bgLight dark:bg-brand-text dark:text-brand-bg">
              AI
            </span>
            <span className="text-xs font-medium text-brand-mutedLight dark:text-brand-muted">
              orlando-assistant
            </span>
          </div>
          <div className="space-y-4 px-5 py-6 text-sm leading-6">
            <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-brand-textLight px-4 py-2.5 text-brand-bgLight dark:bg-brand-text dark:text-brand-bg">
              {t("hero.assistantPrompt")}
            </div>
            <div className="max-w-[90%] space-y-2 rounded-2xl rounded-tl-sm border border-brand-borderLight bg-black/[0.02] px-4 py-3 text-brand-textLight dark:border-brand-border dark:bg-white/[0.02] dark:text-brand-text">
              <p>{t("hero.assistantIntro")}</p>
              <ul className="space-y-1 pl-4 text-brand-mutedLight dark:text-brand-muted">
                <li>&bull; {t("hero.assistantList1")}</li>
                <li>&bull; {t("hero.assistantList2")}</li>
                <li>&bull; {t("hero.assistantList3")}</li>
              </ul>
            </div>
            <div className="flex w-fit items-center gap-1.5 rounded-2xl rounded-tl-sm border border-brand-borderLight px-4 py-3 dark:border-brand-border">
              <span className="h-1.5 w-1.5 animate-blink rounded-full bg-brand-mutedLight dark:bg-brand-muted" style={{ animationDelay: "0ms" }} />
              <span className="h-1.5 w-1.5 animate-blink rounded-full bg-brand-mutedLight dark:bg-brand-muted" style={{ animationDelay: "150ms" }} />
              <span className="h-1.5 w-1.5 animate-blink rounded-full bg-brand-mutedLight dark:bg-brand-muted" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
