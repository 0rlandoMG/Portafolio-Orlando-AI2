"use client";

import { Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { useLang } from "../context/LanguageProvider";

export default function ProjectModal({ open, onClose, project }) {
  const { t } = useLang();
  if (!project) return null;

  const imgSrc = project.imageLarge || project.image || null;
  const localizedTitle = t(`projects.ids.${project.id}.title`);
  const localizedCategory = t(`projects.ids.${project.id}.category`, project.category || "");
  const localizedDescription = t(`projects.ids.${project.id}.longDescription`, project.longDescription || "");
  const localizedStats = project.stats
    ? {
        summary: t(`projects.ids.${project.id}.stats.summary`, project.stats.summary),
        wilcoxon: t(`projects.ids.${project.id}.stats.wilcoxon`, project.stats.wilcoxon),
        bertscore: t(`projects.ids.${project.id}.stats.bertscore`, project.stats.bertscore),
      }
    : null;

  return (
    <Transition show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose} aria-modal>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="flex max-h-[85vh] w-full max-w-3xl transform flex-col overflow-hidden rounded-2xl bg-brand-surfaceLight text-left align-middle shadow-xl transition-all dark:bg-brand-surface">
                {imgSrc && (
                  <div className="relative h-64 w-full flex-shrink-0 bg-black/[0.03] dark:bg-white/[0.04] sm:h-80">
                    <Image src={imgSrc} alt={`${localizedTitle} screenshot`} fill className="object-contain" />
                    <button
                      onClick={onClose}
                      aria-label={t("projects.modal.close")}
                      className="absolute right-3 top-3 rounded-full bg-brand-surfaceLight/90 p-2 text-brand-textLight shadow-soft backdrop-blur hover:opacity-80 dark:bg-brand-surface/90 dark:text-brand-text"
                    >
                      ✕
                    </button>
                  </div>
                )}
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Dialog.Title as="h3" className="text-xl font-semibold text-brand-textLight dark:text-brand-text">
                        {localizedTitle}
                      </Dialog.Title>
                      {localizedCategory && (
                        <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-brand-mint">
                          {localizedCategory}
                        </p>
                      )}
                    </div>
                    {!imgSrc && (
                      <button onClick={onClose} aria-label={t("projects.modal.close")} className="rounded-md p-2 text-brand-mutedLight hover:bg-black/5 dark:hover:bg-white/5">
                        ✕
                      </button>
                    )}
                  </div>
                  <div className="mt-4 whitespace-pre-line text-sm leading-6 text-brand-mutedLight dark:text-brand-muted">
                    {localizedDescription}
                  </div>
                  {localizedStats && (
                    <div className="mt-5">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-mint">
                        {t("projects.modal.resultsLabel")}
                      </p>
                      <p className="text-sm leading-6 text-brand-mutedLight dark:text-brand-muted">
                        {localizedStats.summary}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs text-brand-mutedLight/70 dark:text-brand-muted/70">
                        <span>wilcoxon: {localizedStats.wilcoxon}</span>
                        <span>bertscore_f1: {localizedStats.bertscore}</span>
                      </div>
                    </div>
                  )}
                  <div className="mt-5">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-mint">
                      {t("projects.modal.techsLabel")}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techs.map((tech) => (
                        <span key={tech} className="rounded border border-brand-borderLight bg-black/[0.03] px-2 py-1 font-mono text-xs text-brand-mutedLight dark:border-brand-border dark:bg-white/[0.03] dark:text-brand-muted">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {project.links && project.links.length > 0 && (
                    <div className="mt-6">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-brand-mint">
                        {t("projects.modal.linksLabel")}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {project.links.map((l) => (
                          <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="rounded px-3 py-1 text-sm font-medium text-brand-textLight dark:text-brand-text ring-1 ring-brand-borderLight hover:opacity-90">
                            {l.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}