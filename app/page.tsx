import Link from "next/link";
import { PRICING, SITE } from "@/app/lib/site";

const STEPS = [
  {
    n: "01",
    title: "Set the alarm.",
    body: "Pick a time and choose which apps to lock. Instagram, TikTok, whatever steals the first hour. Phone and Messages are never blocked.",
  },
  {
    n: "02",
    title: "It rings. They lock.",
    body: "Solund rings through Silent and Focus, then closes the apps you chose. Not a reminder. A wall.",
  },
  {
    n: "03",
    title: "Walk to open the day.",
    body: "Thirty steps — about as far as the kitchen. The wall comes down and stays down. That's the whole trade.",
  },
];

const NEVER = [
  {
    title: "It never sees your screen.",
    body: "Screen Time hands the app opaque tokens, not content. Solund knows an app is blocked. It has no idea what's inside it.",
  },
  {
    title: "Nothing leaves your phone.",
    body: "Steps, alarms and streaks live in local storage on your device. There is no Solund server, no account, no sign-up.",
  },
  {
    title: "No trackers, no ads.",
    body: "No analytics SDK, no advertising ID, no data sold. The only network call the app makes is to process your subscription.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="horizon grain relative overflow-hidden">
        <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-6xl flex-col justify-center px-6 pt-32 pb-24 sm:px-10">
          <p
            className="enter text-xs tracking-[0.22em] text-signal uppercase"
            style={{ animationDelay: "0ms" }}
          >
            For iPhone · Coming soon
          </p>

          <h1
            className="enter font-display mt-7 max-w-[15ch] text-[clamp(2.9rem,8.5vw,6.5rem)] leading-[0.98] font-semibold tracking-[-0.03em] text-balance"
            style={{ animationDelay: "90ms" }}
          >
            Mornings aren&rsquo;t for scrolling.
          </h1>

          <p
            className="enter mt-8 max-w-[46ch] text-lg leading-relaxed text-muted sm:text-xl"
            style={{ animationDelay: "180ms" }}
          >
            An alarm that locks your apps until you get up and walk. You
            don&rsquo;t need more willpower at 7am. You need something in the
            way.
          </p>

          <div
            className="enter mt-11 flex flex-wrap items-center gap-x-6 gap-y-4"
            style={{ animationDelay: "270ms" }}
          >
            <span className="inline-flex items-center rounded-full border border-signal/45 px-5 py-2.5 text-sm font-medium text-signal">
              Coming to the App Store
            </span>
            <Link
              href="#how"
              className="text-sm text-muted underline decoration-faint underline-offset-[6px] transition-colors hover:text-ink hover:decoration-signal"
            >
              See how it works
            </Link>
          </div>
        </div>
      </section>

      {/* ── La tesis ─────────────────────────────────────────── */}
      <section className="border-y border-faint/20">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
          <blockquote className="reveal font-display max-w-[24ch] text-[clamp(1.9rem,4.6vw,3.4rem)] leading-[1.08] font-medium tracking-[-0.02em] text-balance">
            At 7am, willpower doesn&rsquo;t exist.{" "}
            <span className="text-signal">Friction does.</span>
          </blockquote>
          <p className="reveal mt-9 max-w-[52ch] text-base leading-relaxed text-muted sm:text-lg">
            Every other alarm asks you to decide. Snooze or get up. At the worst
            possible moment, half asleep, with the whole internet one thumb
            away. Solund removes the decision and leaves one door open — the one
            that requires standing up.
          </p>
        </div>
      </section>

      {/* ── Cómo funciona ────────────────────────────────────── */}
      <section id="how" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
          <h2 className="reveal font-display text-[clamp(1.7rem,3.4vw,2.6rem)] leading-tight font-semibold tracking-[-0.02em]">
            Three steps, once.
          </h2>

          <ol className="mt-16 grid gap-x-12 gap-y-14 md:grid-cols-3">
            {STEPS.map((step) => (
              <li key={step.n} className="reveal">
                <div
                  className="font-display text-5xl leading-none font-semibold text-signal tabular-nums sm:text-6xl"
                  aria-hidden="true"
                >
                  {step.n}
                </div>
                <h3 className="font-display mt-6 text-xl font-semibold tracking-[-0.01em] sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3.5 text-[0.975rem] leading-relaxed text-muted">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Lo que no hace ───────────────────────────────────── */}
      <section className="border-t border-faint/20 bg-surface/35">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
            <div className="reveal">
              <h2 className="font-display text-[clamp(1.7rem,3.4vw,2.6rem)] leading-tight font-semibold tracking-[-0.02em] text-balance">
                An app that blocks apps should be the last one you trust.
              </h2>
              <p className="mt-6 max-w-[42ch] text-base leading-relaxed text-muted">
                So here is exactly what Solund can and cannot see. The long
                version is in the{" "}
                <Link
                  href="/privacy"
                  className="text-ink underline decoration-faint underline-offset-4 transition-colors hover:decoration-signal"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            <ul className="space-y-10">
              {NEVER.map((item) => (
                <li
                  key={item.title}
                  className="reveal border-l border-signal/35 pl-6"
                >
                  <h3 className="font-display text-lg font-semibold tracking-[-0.01em] sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[0.975rem] leading-relaxed text-muted">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Precio ───────────────────────────────────────────── */}
      <section id="price" className="scroll-mt-24 border-t border-faint/20">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
          <div className="grid items-end gap-12 md:grid-cols-2 md:gap-20">
            <div className="reveal">
              <h2 className="font-display text-[clamp(1.7rem,3.4vw,2.6rem)] leading-tight font-semibold tracking-[-0.02em]">
                {PRICING.trialDays} days free.
              </h2>
              <p className="mt-6 max-w-[40ch] text-base leading-relaxed text-muted">
                Long enough to find out whether your mornings actually change.
                Cancel from the App Store before it ends and you pay nothing.
              </p>
            </div>

            <dl className="reveal divide-y divide-faint/20 border-y border-faint/20">
              <div className="flex items-baseline justify-between gap-6 py-5">
                <dt className="text-base">
                  Annual
                  <span className="ml-3 rounded-full bg-signal px-2.5 py-1 align-middle text-[0.65rem] font-bold tracking-[0.1em] text-onsignal uppercase">
                    Best value
                  </span>
                </dt>
                <dd className="font-display text-xl font-semibold tabular-nums">
                  {PRICING.annual}
                  <span className="text-base font-normal text-muted">/yr</span>
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-6 py-5">
                <dt className="text-base">Monthly</dt>
                <dd className="font-display text-xl font-semibold tabular-nums">
                  {PRICING.monthly}
                  <span className="text-base font-normal text-muted">/mo</span>
                </dd>
              </div>
            </dl>
          </div>

          <p className="reveal mt-10 max-w-[62ch] text-sm leading-relaxed text-muted">
            Prices shown in USD. What you actually pay is set by your App Store
            region and appears in the app before you confirm. Subscriptions renew
            automatically until cancelled — the details are in the{" "}
            <Link
              href="/terms"
              className="underline decoration-faint underline-offset-4 transition-colors hover:text-ink hover:decoration-signal"
            >
              Terms of Use
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── Cierre ───────────────────────────────────────────── */}
      <section className="horizon grain relative overflow-hidden border-t border-faint/20">
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-28 text-center sm:px-10 sm:py-36">
          <h2 className="reveal font-display mx-auto max-w-[18ch] text-[clamp(2.1rem,5.4vw,4rem)] leading-[0.98] font-semibold tracking-[-0.03em] text-balance">
            Up. The day is yours.
          </h2>
          <p className="reveal mx-auto mt-7 max-w-[40ch] text-base leading-relaxed text-muted sm:text-lg">
            Solund is landing on the App Store shortly. Write if you want a
            heads-up when it does.
          </p>
          <a
            href={`mailto:${SITE.supportEmail}?subject=Solund`}
            className="reveal mt-10 inline-flex items-center rounded-full bg-signal px-7 py-3.5 text-sm font-semibold text-onsignal transition-transform hover:scale-[1.03]"
          >
            {SITE.supportEmail}
          </a>
        </div>
      </section>
    </>
  );
}
