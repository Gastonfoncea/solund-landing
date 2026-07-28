import Link from "next/link";
import { SITE } from "@/app/lib/site";
import { Wordmark } from "@/app/components/wordmark";

export function SiteFooter() {
  return (
    <footer className="border-t border-faint/25">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:px-10 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          <Wordmark className="text-base text-ink" />
          <p className="max-w-xs text-sm leading-relaxed text-muted">
            An alarm that ends where your morning begins.
          </p>
        </div>

        <nav className="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-muted">
          <Link href="/privacy" className="transition-colors hover:text-ink">
            Privacy Policy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-ink">
            Terms of Use
          </Link>
          <a
            href={`mailto:${SITE.supportEmail}`}
            className="transition-colors hover:text-ink"
          >
            Support
          </a>
          <span className="text-muted">
            © {new Date().getFullYear()} {SITE.legalEntity}
          </span>
        </nav>
      </div>
    </footer>
  );
}
