import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section id="projects" className="mt-20 scroll-mt-24">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-mint">
              Projects
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-brand-textLight dark:text-brand-text">
              Real work and continuous learning
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-brand-mutedLight dark:text-brand-muted">
            Three key experiences that reflect my focus on local solutions, strong backend
            systems, and a move toward AI agents.
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
            About
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-brand-textLight dark:text-brand-text">
            Minimal technical impact with real outcomes
          </h2>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div className="space-y-4 text-sm leading-7 text-brand-mutedLight dark:text-brand-muted">
              <p>
                My experience combines desktop application development with on-device language
                model integration, along with API and accessible UI design.
              </p>
              <p>
                I am currently deepening my agentic AI skills with LangGraph to move toward AI
                engineering roles focused on hybrid and local solutions.
              </p>
            </div>
            <div className="rounded-lg border border-brand-borderLight bg-black/[0.02] p-5 dark:border-brand-border dark:bg-white/[0.02]">
              <p className="text-sm font-semibold text-brand-textLight dark:text-brand-text">
                Key areas
              </p>
              <ul className="mt-3 space-y-2.5 text-sm text-brand-mutedLight dark:text-brand-muted">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-mint" />
                  Local LLM integration &amp; NLP pipelines
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-mint" />
                  Full-stack: frontend, backend, databases
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-mint" />
                  Accessibility, performance, SEO-minded design
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
                Contact
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-brand-textLight dark:text-brand-text">
                Let&rsquo;s build something with AI
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/0rlandoMG"
                className="inline-flex items-center justify-center rounded-md bg-brand-textLight px-5 py-3 text-sm font-semibold text-brand-bgLight transition hover:opacity-85 dark:bg-brand-text dark:text-brand-bg"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub
              </a>
              <a
                href="https://linkedin.com/in/tu-perfil"
                className="inline-flex items-center justify-center rounded-md border border-brand-borderLight px-5 py-3 text-sm font-semibold text-brand-textLight transition hover:border-brand-mint hover:text-brand-mint dark:border-brand-border dark:text-brand-text"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
