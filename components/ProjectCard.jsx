import Image from "next/image";

// Reusable component for rendering project cards.
export default function ProjectCard({ project }) {
  const isUpcoming = project.status === "upcoming";

  return (
    <article className="group overflow-hidden rounded-xl border border-brand-borderLight bg-brand-surfaceLight transition hover:-translate-y-1 hover:shadow-soft dark:border-brand-border dark:bg-brand-surface dark:hover:shadow-glow">
      {/* Cover image: shown only when `project.image` is provided */}
      {project.image && (
        <div className="relative aspect-video w-full overflow-hidden border-b border-brand-borderLight dark:border-brand-border">
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <span
            className={`absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium backdrop-blur ${
              isUpcoming
                ? "bg-brand-amber/15 text-brand-amber"
                : "bg-brand-green/15 text-brand-green"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isUpcoming ? "animate-blink bg-brand-amber" : "bg-brand-green"
              }`}
            />
            {isUpcoming ? "In progress" : "Shipped"}
          </span>
        </div>
      )}

      <div className="p-6">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold tracking-tight text-brand-textLight dark:text-brand-text">
            {project.title}
          </h3>
          {!project.image && (
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium backdrop-blur ${
                isUpcoming
                  ? "bg-brand-amber/15 text-brand-amber"
                  : "bg-brand-green/15 text-brand-green"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  isUpcoming ? "animate-blink bg-brand-amber" : "bg-brand-green"
                }`}
              />
              {isUpcoming ? "In progress" : "Shipped"}
            </span>
          )}
        </div>
        <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-brand-mint">
          {project.category}
        </p>

        <p className="mt-4 text-sm leading-6 text-brand-mutedLight dark:text-brand-muted">
          {project.description}
        </p>

        {project.stats ? (
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs text-brand-mutedLight dark:text-brand-muted">
            <span>wilcoxon: {project.stats.wilcoxon}</span>
            <span>bertscore_f1: {project.stats.bertscore}</span>
          </div>
        ) : null}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="rounded border border-brand-borderLight bg-black/[0.03] px-2 py-1 font-mono text-xs text-brand-mutedLight dark:border-brand-border dark:bg-white/[0.03] dark:text-brand-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
