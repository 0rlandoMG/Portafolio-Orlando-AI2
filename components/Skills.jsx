"use client";

import { SiPython, SiPytorch, SiPostgresql, SiSqlite, SiSpring, SiVuedotjs, SiJavascript, SiGit, SiHuggingface, SiLangchain, SiNestjs, SiFastapi, SiDocker, SiLinux, SiGithub } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbApi, TbCpu, TbWaveSine, TbBrain, TbDeviceDesktop, TbWindow, TbLanguage, TbUsers, TbCode } from "react-icons/tb";
import skills, { expertise } from "../data/skills";
import { useLang } from "../context/LanguageProvider";

const ICONS = {
  python: SiPython,
  pytorch: SiPytorch,
  java: FaJava,
  postgresql: SiPostgresql,
  sqlite: SiSqlite,
  spring: SiSpring,
  vue: SiVuedotjs,
  javascript: SiJavascript,
  git: SiGit,
  github: SiGithub,
  huggingface: SiHuggingface,
  langchain: SiLangchain,
  nestjs: SiNestjs,
  fastapi: SiFastapi,
  docker: SiDocker,
  linux: SiLinux,
  api: TbApi,
  model: TbCpu,
  waveform: TbWaveSine,
  brain: TbBrain,
  desktop: TbDeviceDesktop,
  window: TbWindow,
  language: TbLanguage,
  team: TbUsers,
  code: TbCode,
};

export default function Skills() {
  const { t } = useLang();

  return (
    <div className="mt-10 rounded-lg border border-brand-borderLight bg-black/[0.02] p-6 dark:border-brand-border dark:bg-white/[0.02]">
      <p className="text-sm font-semibold text-brand-textLight dark:text-brand-text">
        {t("about.skillsTitle")}
      </p>

      <div className="mt-5 grid gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category}>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brand-mint">
              {group.category}
            </p>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => {
                const Icon = ICONS[item.icon] || TbCode;
                return (
                  <li
                    key={item.name}
                    className="flex items-center gap-1.5 rounded-md border border-brand-borderLight bg-brand-surfaceLight px-2.5 py-1.5 text-xs text-brand-textLight transition hover:border-brand-mint hover:text-brand-mint dark:border-brand-border dark:bg-brand-surface dark:text-brand-text"
                  >
                    <Icon size={14} aria-hidden="true" />
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t border-brand-borderLight pt-5 dark:border-brand-border">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-brand-mint">
          {t("about.expertiseTitle")}
        </p>
        <ul className="flex flex-wrap gap-2">
          {expertise.map((label) => (
            <li
              key={label}
              className="rounded-full border border-brand-borderLight px-3 py-1 text-xs text-brand-mutedLight dark:border-brand-border dark:text-brand-muted"
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
