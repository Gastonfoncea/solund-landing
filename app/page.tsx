import Link from "next/link";
import { Phone } from "@/app/components/phone";
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
      {/* ── Hero ─────────────────────────────────────────────────
          El teléfono a la derecha, grande, y desbordando por abajo: la mitad
          inferior de la home es degradado vacío, así que recortarla no pierde
          nada y hace que la pantalla se sienta más cerca. */}
      <section className="horizon grain relative overflow-hidden">
        <div className="relative z-10 mx-auto grid min-h-[92svh] max-w-6xl items-center gap-y-14 px-6 pt-32 sm:px-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-x-16">
          <div className="pb-20 lg:pb-0">
            <p
              className="enter pill border-signal/35 bg-signal/8 text-signal"
              style={{ animationDelay: "0ms" }}
            >
              For iPhone · Coming soon
            </p>

            <h1
              className="enter font-display mt-7 max-w-[13ch] text-[clamp(2.7rem,7.6vw,5.4rem)] leading-[0.94] font-extrabold tracking-[-0.035em] text-balance"
              style={{ animationDelay: "90ms" }}
            >
              Mornings aren&rsquo;t for scrolling.
            </h1>

            <p
              className="enter mt-8 max-w-[42ch] text-lg leading-relaxed text-muted"
              style={{ animationDelay: "180ms" }}
            >
              An alarm that locks your apps until you get up and walk. You
              don&rsquo;t need more willpower at 7am. You need something in the
              way.
            </p>

            <Link
              href="#how"
              className="enter mt-10 inline-block text-sm text-muted underline decoration-faint underline-offset-[6px] transition-colors hover:text-ink hover:decoration-signal"
              style={{ animationDelay: "270ms" }}
            >
              See how it works
            </Link>
          </div>

          <div className="enter-wake -mb-24 flex justify-center sm:-mb-32 lg:-mb-40 lg:justify-end">
            <Phone
              shot="home"
              priority
              sizes="(min-width: 1024px) 400px, (min-width: 640px) 320px, 260px"
              className="w-[260px] sm:w-[320px] lg:w-[400px]"
            />
          </div>
        </div>
      </section>

      {/* ── La tesis ─────────────────────────────────────────── */}
      <section className="border-y border-faint/20">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
          <blockquote className="reveal font-display max-w-[22ch] text-[clamp(1.9rem,4.4vw,3.2rem)] leading-[1.04] font-extrabold tracking-[-0.03em] text-balance">
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

      {/* ── Cómo funciona ────────────────────────────────────────
          Una sola captura: la misión es la única pantalla que explica el
          producto entero. Las otras dos no agregaban nada que el texto no
          dijera ya. */}
      <section id="how" className="scroll-mt-24">
        <div className="mx-auto grid max-w-6xl items-center gap-x-20 gap-y-16 px-6 py-24 sm:px-10 sm:py-32 lg:grid-cols-[auto_minmax(0,1fr)]">
          <div className="reveal flex justify-center lg:justify-start">
            <Phone
              shot="mission"
              sizes="(min-width: 1024px) 320px, (min-width: 640px) 300px, 250px"
              className="w-[250px] sm:w-[300px] lg:w-[320px]"
            />
          </div>

          <div>
            <h2 className="reveal font-display text-[clamp(1.7rem,3.4vw,2.6rem)] leading-tight font-extrabold tracking-[-0.03em]">
              Three steps, once.
            </h2>

            <ol className="mt-12 space-y-11">
              {STEPS.map((step) => (
                <li key={step.n} className="reveal flex gap-5 sm:gap-7">
                  <span
                    className="numeral shrink-0 pt-0.5 text-2xl text-signal"
                    aria-hidden="true"
                  >
                    {step.n}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-extrabold tracking-[-0.02em]">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 max-w-[46ch] text-[0.975rem] leading-relaxed text-muted">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── Lo que no hace ───────────────────────────────────── */}
      <section className="border-t border-faint/20 bg-surface/30">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 sm:py-32">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
            <div className="reveal">
              <h2 className="font-display text-[clamp(1.7rem,3.4vw,2.6rem)] leading-[1.05] font-extrabold tracking-[-0.03em] text-balance">
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
                  <h3 className="font-display text-lg font-extrabold tracking-[-0.02em] sm:text-xl">
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
              <h2 className="font-display text-[clamp(1.7rem,3.4vw,2.6rem)] leading-tight font-extrabold tracking-[-0.03em]">
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
                <dd className="numeral text-2xl">
                  {PRICING.annual}
                  <span className="ml-1 text-base font-medium text-muted">
                    /yr
                  </span>
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-6 py-5">
                <dt className="text-base">Monthly</dt>
                <dd className="numeral text-2xl">
                  {PRICING.monthly}
                  <span className="ml-1 text-base font-medium text-muted">
                    /mo
                  </span>
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

      {/* ── Cierre: el unlock ────────────────────────────────────
          La única superficie naranja full-bleed del sitio, igual que en la
          app hay una sola pantalla así — la de la misión cumplida. El 30/30
          cierra lo que el 18/30 de la captura de arriba dejó abierto. */}
      <section className="unlock grain relative overflow-hidden text-onsignal">
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-32 text-center sm:px-10 sm:py-40">
          {/* Decorativo: el sentido lo lleva el h2. Leído en voz alta, un
              "treinta barra treinta" suelto no significa nada. */}
          <p
            className="reveal numeral text-[clamp(3.4rem,11vw,7rem)]"
            aria-hidden="true"
          >
            30/30
          </p>
          <h2 className="reveal font-display mx-auto mt-6 max-w-[18ch] text-[clamp(1.9rem,4.6vw,3.2rem)] leading-[1.02] font-extrabold tracking-[-0.035em] text-balance">
            Up. The day is yours.
          </h2>
          <p className="reveal mx-auto mt-6 max-w-[40ch] text-base leading-relaxed text-onsignal/80 sm:text-lg">
            Solund is landing on the App Store shortly. Write if you want a
            heads-up when it does.
          </p>
          <a
            href={`mailto:${SITE.supportEmail}?subject=Solund`}
            className="reveal mt-10 inline-flex items-center rounded-full bg-onsignal px-8 py-4 text-sm font-bold text-signal transition-transform duration-200 ease-[var(--ease-out-swift)] hover:scale-[1.03]"
          >
            {SITE.supportEmail}
          </a>
        </div>
      </section>
    </>
  );
}
