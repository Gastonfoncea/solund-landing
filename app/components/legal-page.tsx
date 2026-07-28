import type { ReactNode } from "react";
import { SITE } from "@/app/lib/site";

/**
 * Molde de los documentos legales. Medida de línea corta y jerarquía marcada:
 * son textos que nadie quiere leer, así que al menos que se puedan escanear.
 */
export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <article className="mx-auto max-w-3xl px-6 pt-36 pb-24 sm:px-10 sm:pt-44">
      <header className="border-b border-faint/25 pb-10">
        <h1 className="font-display text-[clamp(2.2rem,5.5vw,3.4rem)] leading-[1.02] font-semibold tracking-[-0.025em]">
          {title}
        </h1>
        <p className="mt-6 max-w-[54ch] text-base leading-relaxed text-muted">
          {intro}
        </p>
        <p className="mt-6 text-sm text-muted">
          Last updated {SITE.legalUpdated} · {SITE.name} is made by{" "}
          {SITE.legalEntity}
        </p>
      </header>

      <div className="mt-14 space-y-12">{children}</div>

      <footer className="mt-16 border-t border-faint/25 pt-8 text-sm leading-relaxed text-muted">
        Questions about this document? Write to{" "}
        <a
          href={`mailto:${SITE.supportEmail}`}
          className="text-ink underline decoration-faint underline-offset-4 transition-colors hover:decoration-signal"
        >
          {SITE.supportEmail}
        </a>
        .
      </footer>
    </article>
  );
}

export function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-xl font-semibold tracking-[-0.01em] sm:text-2xl">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-[0.975rem] leading-[1.75] text-muted">
        {children}
      </div>
    </section>
  );
}

export function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="border-l border-signal/30 pl-5">
          {item}
        </li>
      ))}
    </ul>
  );
}
