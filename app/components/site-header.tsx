import Link from "next/link";
import { Wordmark } from "@/app/components/wordmark";
import { SITE } from "@/app/lib/site";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
        <Link
          href="/"
          className="text-base text-ink transition-opacity hover:opacity-80"
        >
          <Wordmark />
        </Link>

        <nav className="flex items-center gap-6 text-sm text-muted">
          <Link
            href="/#how"
            className="hidden transition-colors hover:text-ink sm:inline"
          >
            How it works
          </Link>
          <Link href="/#price" className="transition-colors hover:text-ink">
            Price
          </Link>
          <a
            href={SITE.appStoreUrl}
            className="font-bold text-signal transition-colors hover:text-ink"
          >
            Get the app
          </a>
        </nav>
      </div>
    </header>
  );
}
