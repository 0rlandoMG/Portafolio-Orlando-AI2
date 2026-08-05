"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import ProjectModal from "./ProjectModal";

// Reusable component for rendering project cards.
export default function ProjectCard({ project }) {
  const isUpcoming = project.status === "upcoming";
  const [open, setOpen] = useState(false);
  const cardRef = useRef(null);

  function openHandler(e) {
    // don't open modal for langgraph placeholder or when clicking links
    if (project.id === "langgraph-agent") return;
    if (e.target.closest && e.target.closest("a")) return;
    setOpen(true);
  }

  function closeHandler() {
    setOpen(false);
    cardRef.current?.focus();
  }

  return (
    <>
      <article
        ref={cardRef}
        role={project.id === "langgraph-agent" ? undefined : "button"}
        aria-label={project.id === "langgraph-agent" ? undefined : `View details for ${project.title}`}
        tabIndex={project.id === "langgraph-agent" ? -1 : 0}
        onKeyDown={(e) => {
          if ((e.key === "Enter" || e.key === " ") && project.id !== "langgraph-agent") openHandler(e);
        }}
        onClick={openHandler}
        className={`group overflow-hidden rounded-xl border border-brand-borderLight bg-brand-surfaceLight transition ${project.id === "langgraph-agent" ? "cursor-default" : "cursor-pointer hover:-translate-y-1 hover:shadow-soft"} dark:border-brand-border dark:bg-brand-surface dark:hover:shadow-glow`}
      >
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

            {/* Hover hint: makes the click-to-expand interaction discoverable without a button */}
            {project.id !== "langgraph-agent" && (
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition duration-300 group-hover:opacity-100">
                <span className="flex items-center gap-1.5 p-3 text-xs font-medium text-white">
                  View details
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover:translate-x-0.5">
                    <path d="M2 6h8m0 0L6.5 2.5M10 6l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            )}
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
        </div>
      </article>

      <ProjectModal open={open} onClose={closeHandler} project={project} />
    </>
  );
}