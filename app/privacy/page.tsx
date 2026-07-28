import type { Metadata } from "next";
import { LegalPage, List, Section } from "@/app/components/legal-page";
import { SITE } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What Solund stores, what it can see, and what never leaves your iPhone.",
};

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Solund runs entirely on your iPhone. There is no account to create, no server storing your mornings, and no analytics watching you use the app. This page explains that in detail."
    >
      <Section title="The short version">
        <List
          items={[
            "Solund has no user accounts and collects no personal information.",
            "Your alarms, step counts, streak and history are stored on your device only.",
            "Solund cannot see what is on your screen or inside the apps it blocks.",
            "There is no analytics SDK, no advertising identifier, and no tracking across apps or websites.",
            "The only data that leaves your device is what Apple and our subscription provider need to process a purchase.",
          ]}
        />
      </Section>

      <Section title="Information stored on your device">
        <p>
          The following stays in local storage on your iPhone, inside the app&rsquo;s
          own container. It is not transmitted to us and we have no way of
          reading it:
        </p>
        <List
          items={[
            <>
              <strong className="text-ink">Alarms and settings.</strong> The
              times you set, your mission difficulty, and whether reminders are
              enabled.
            </>,
            <>
              <strong className="text-ink">Motion and step counts.</strong>{" "}
              Solund reads step data from Apple&rsquo;s CoreMotion framework to
              know when you have walked far enough. It requests only the period
              between your alarm firing and the mission being completed.
            </>,
            <>
              <strong className="text-ink">Your app selection.</strong> Which
              apps and categories you chose to block, stored as opaque tokens
              issued by Apple (see below).
            </>,
            <>
              <strong className="text-ink">Your history.</strong> For each
              completed morning: the time you unlocked, the steps credited, and
              how long it took. Kept for the last 90 days, then discarded
              automatically.
            </>,
          ]}
        />
        <p>
          Deleting Solund from your iPhone deletes all of it. You can also erase
          your history at any time from Settings, without deleting the app.
        </p>
      </Section>

      <Section title="Screen Time and the apps you block">
        <p>
          Solund uses Apple&rsquo;s Family Controls and Managed Settings
          frameworks to block apps. This is the part people are right to ask
          about, so to be precise:
        </p>
        <List
          items={[
            "When you pick apps to block, Apple gives Solund opaque tokens — not names, not bundle identifiers, not usage data. The app has no way to convert a token back into an app identity.",
            "Solund cannot read notifications, messages, screen contents, browsing history, or how long you spend in any app.",
            "The selection never leaves your device and is not readable by us.",
            "Phone and Messages cannot be blocked. Emergency calls are never affected.",
          ]}
        />
      </Section>

      <Section title="Subscriptions">
        <p>
          Purchases are processed by Apple through the App Store. We never see
          your payment details — Apple does not share them with developers.
        </p>
        <p>
          To manage subscription status across your devices, Solund uses{" "}
          <a
            href="https://www.revenuecat.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline decoration-faint underline-offset-4 transition-colors hover:decoration-signal"
          >
            RevenueCat
          </a>
          , a subscription infrastructure provider. When you open the paywall or
          make a purchase, RevenueCat receives a randomly generated anonymous
          identifier, your purchase and receipt information, and basic device and
          operating system details. It does not receive your name, email address,
          or anything about how you use the app.
        </p>
        <p>
          This is the only network connection Solund makes. The app has no
          backend of its own.
        </p>
      </Section>

      <Section title="Notifications">
        <p>
          Reminders are off by default and only turn on if you enable them. When
          enabled, notifications are scheduled locally on your device — nothing
          is sent from a server, and we do not know whether you received or
          opened one. You can turn them off in Solund&rsquo;s Settings or in iOS
          Settings at any time.
        </p>
      </Section>

      <Section title="What we do not do">
        <List
          items={[
            "We do not sell, rent or share personal information. There is none to sell.",
            "We do not use third-party analytics, crash reporting or attribution SDKs.",
            "We do not use advertising identifiers or serve ads.",
            "We do not track you across other apps or websites.",
          ]}
        />
      </Section>

      <Section title="Your rights">
        <p>
          Because Solund does not collect personal information or maintain
          accounts, there is no profile for us to export, correct or delete.
          Everything the app holds about you is on your device and under your
          control.
        </p>
        <p>
          For data held by Apple or RevenueCat in connection with your purchase,
          contact them directly — or write to us and we will help you route the
          request.
        </p>
      </Section>

      <Section title="Children">
        <p>
          Solund is not directed to children under 13, and we do not knowingly
          collect information from them.
        </p>
      </Section>

      <Section title="Changes to this policy">
        <p>
          If the app&rsquo;s data practices change, this page changes with them
          and the date at the top is updated. Material changes will also be
          announced in the app.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Questions, concerns, or something on this page that does not match what
          you are seeing? Write to{" "}
          <a
            href={`mailto:${SITE.supportEmail}`}
            className="text-ink underline decoration-faint underline-offset-4 transition-colors hover:decoration-signal"
          >
            {SITE.supportEmail}
          </a>
          .
        </p>
      </Section>
    </LegalPage>
  );
}
