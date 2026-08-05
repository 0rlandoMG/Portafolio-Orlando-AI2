import Image from "next/image";

// Hero section: introduction on the left, a signature AI chat panel on the right.
export default function Hero() {
  return (
    <section id="top" className="mt-10 scroll-mt-24">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <div className="relative h-20 w-20 overflow-hidden rounded-full border border-brand-borderLight dark:border-brand-border">
            <Image
              src="/images/avatar-placeholder.jpg"
              alt="Orlando Marrero"
              fill
              className="object-cover"
            />
          </div>

          <p className="inline-flex items-center gap-2 rounded-full border border-brand-borderLight px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-brand-mutedLight dark:border-brand-border dark:text-brand-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
            Available for AI Engineering roles
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-brand-textLight dark:text-brand-text sm:text-5xl">
            Orlando Marrero
          </h1>
          <p className="text-base font-medium text-brand-mutedLight dark:text-brand-muted">
            Software Engineer &middot; AI Engineer
          </p>
          <p className="max-w-xl text-base leading-7 text-brand-mutedLight dark:text-brand-muted">
            Junior software engineer with 2 years of experience building desktop and web
            applications, with hands-on experience integrating small, on-device language models
            into a production speech-transcription system as part of an undergraduate thesis.
            Comfortable across the full stack, from desktop UI to backend services in Java /
            Spring Boot, with a growing focus on local LLM inference, NLP pipelines, and prompt
            engineering. Currently deepening agentic AI skills with LangGraph.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="/cv.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-textLight px-5 py-3 text-sm font-semibold text-brand-bgLight transition hover:opacity-85 focus:outline-none focus:ring-2 focus:ring-brand-mint focus:ring-offset-2 focus:ring-offset-brand-bgLight dark:bg-brand-text dark:text-brand-bg dark:focus:ring-offset-brand-bg"
            >
              Download CV
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-brand-borderLight px-5 py-3 text-sm font-semibold text-brand-textLight transition hover:border-brand-mint hover:text-brand-mint dark:border-brand-border dark:text-brand-text"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* Signature element: a minimal AI chat interface standing in for a headshot / hero image */}
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
            {/* user message */}
            <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-brand-textLight px-4 py-2.5 text-brand-bgLight dark:bg-brand-text dark:text-brand-bg">
              What can you tell me about Orlando?
            </div>

            {/* assistant response */}
            <div className="max-w-[90%] space-y-2 rounded-2xl rounded-tl-sm border border-brand-borderLight bg-black/[0.02] px-4 py-3 text-brand-textLight dark:border-brand-border dark:bg-white/[0.02] dark:text-brand-text">
              <p>He builds AI systems end to end:</p>
              <ul className="space-y-1 pl-4 text-brand-mutedLight dark:text-brand-muted">
                <li>&bull; on-device LLM inference &amp; NLP pipelines</li>
                <li>&bull; Java / Spring Boot backend, PostgreSQL</li>
                <li>&bull; agentic workflows with LangGraph</li>
              </ul>
            </div>

            {/* typing indicator */}
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
