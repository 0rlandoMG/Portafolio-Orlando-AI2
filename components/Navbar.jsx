"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

// Main navbar with internal navigation and dark/light mode toggle.
export default function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid rendering inconsistencies caused by next-themes hydration.
  const activeTheme = theme === "system" ? resolvedTheme : theme;
  const nextTheme = activeTheme === "dark" ? "light" : "dark";

  return (
    <header className="sticky top-0 z-50 bg-brand-bgLight/90 backdrop-blur-xl dark:bg-brand-bg/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-2 py-4 sm:px-0">
        <a
          href="#top"
          className="flex items-center gap-2 text-sm font-semibold tracking-tight text-brand-textLight dark:text-brand-text"
        >
          <span className="relative h-7 w-7 overflow-hidden rounded-full border border-brand-borderLight dark:border-brand-border">
            <Image src="/images/avatar-placeholder.jpg" alt="" fill className="object-cover" />
          </span>
          Orlando Marrero
        </a>

        <nav
          aria-label="Main navigation"
          className="flex flex-wrap items-center gap-1 text-sm text-brand-mutedLight dark:text-brand-muted"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 transition hover:bg-brand-borderLight hover:text-brand-textLight dark:hover:bg-brand-surface dark:hover:text-brand-text"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setTheme(nextTheme)}
          aria-label="Toggle dark mode"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-borderLight bg-brand-surfaceLight font-mono text-xs text-brand-mutedLight transition hover:border-brand-mint hover:text-brand-mint dark:border-brand-border dark:bg-brand-surface dark:text-brand-muted dark:hover:text-brand-mint"
        >
          {mounted ? (activeTheme === "dark" ? "light" : "dark") : "dark"}
        </button>
      </div>
    </header>
  );
}
