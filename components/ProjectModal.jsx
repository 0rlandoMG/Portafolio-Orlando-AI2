"use client";

import { Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";

export default function ProjectModal({ open, onClose, project }) {
  if (!project) return null;

  const imgSrc = project.imageLarge || project.image || null;

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
                {/* Image: full width, object-contain so the whole screenshot is always visible
                    regardless of its native aspect ratio (no cropping). Letterboxed on a
                    neutral surface so non-16:9 images don't look cut off. */}
                {imgSrc && (
                  <div className="relative h-64 w-full flex-shrink-0 bg-black/[0.03] dark:bg-white/[0.04] sm:h-80">
                    <Image src={imgSrc} alt={`${project.title} screenshot`} fill className="object-contain" />
                    <button
                      onClick={onClose}
                      aria-label="Close"
                      className="absolute right-3 top-3 rounded-full bg-brand-surfaceLight/90 p-2 text-brand-textLight shadow-soft backdrop-blur hover:opacity-80 dark:bg-brand-surface/90 dark:text-brand-text"
                    >
                      ✕
                    </button>
                  </div>
                )}

                {/* Content: independently scrollable so long descriptions never break the layout */}
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Dialog.Title as="h3" className="text-xl font-semibold text-brand-textLight dark:text-brand-text">
                        {project.title}
                      </Dialog.Title>
                      {project.category && (
                        <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-brand-mint">
                          {project.category}
                        </p>
                      )}
                    </div>
                    {!imgSrc && (
                      <button onClick={onClose} aria-label="Close" className="rounded-md p-2 text-brand-mutedLight hover:bg-black/5 dark:hover:bg-white/5">
                        ✕
                      </button>
                    )}
                  </div>

                  {/* whitespace-pre-line preserves the \n\n paragraph breaks already in the data
                      instead of collapsing them into one run-on block of text */}
                  <div className="mt-4 whitespace-pre-line text-sm leading-6 text-brand-mutedLight dark:text-brand-muted">
                    {project.longDescription}
                  </div>

                  {project.stats && (
                    <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs text-brand-mutedLight dark:text-brand-muted">
                      <span>wilcoxon: {project.stats.wilcoxon}</span>
                      <span>bertscore_f1: {project.stats.bertscore}</span>
                    </div>
                  )}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.techs.map((t) => (
                      <span key={t} className="rounded border border-brand-borderLight bg-black/[0.03] px-2 py-1 font-mono text-xs text-brand-mutedLight dark:border-brand-border dark:bg-white/[0.03] dark:text-brand-muted">
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.links && project.links.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.links.map((l) => (
                        <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="rounded px-3 py-1 text-sm font-medium text-brand-textLight dark:text-brand-text ring-1 ring-brand-borderLight hover:opacity-90">
                          {l.label}
                        </a>
                      ))}
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