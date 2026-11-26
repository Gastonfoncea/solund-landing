import type { Metadata } from "next";
import { LegalPage, List, Section } from "@/app/components/legal-page";
import { SITE } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "What Solund stores on your iPhone, what it can see, and what it sends to our providers.",
  /* STE-152: cada página dice su propia URL canónica (www). */
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Solund does not require an account. Alarm settings and detailed morning history are stored on your iPhone. We use RevenueCat for subscriptions and TelemetryDeck to understand feature usage and diagnose problems. This page explains what stays on your device and what is sent to those providers."
    >
      <Section title="The short version">
        <List
          items={[
            "Solund has no user accounts and does not ask for your name or email address in the app.",
            "Your alarm settings, app selection and detailed morning history are stored on your device. Selected usage events and summaries are sent to TelemetryDeck.",
            "Solund cannot see what is on your screen or inside the apps it blocks.",
            "We do not use advertising identifiers or track you across other apps or websites.",
            "Apple and RevenueCat process purchase and subscription information. TelemetryDeck receives usage and diagnostic events described below.",
          ]}
        />
      </Section>

      <Section title="Information stored on your device">
        <p>
          The following stays in local storage on your iPhone, inside the app&rsquo;s
          own container. We do not upload a copy of these records. Usage events
          can include selected values and summaries, as described in the
          analytics section:
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
          Deleting Solund from your iPhone removes its local data. You can also
          erase your history from Settings without deleting the app. These
          actions do not cancel an App Store subscription or erase records
          already sent to our providers.
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
          Subscription processing is separate from the usage analytics
          described below.
        </p>
      </Section>

      <Section title="Usage analytics">
        <p>
          We use{" "}
          <a
            href="https://telemetrydeck.com/privacy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline decoration-faint underline-offset-4 transition-colors hover:decoration-signal"
          >
            TelemetryDeck
          </a>{" "}
          to understand whether features work, where people encounter problems,
          and whether they return. Events may include:
        </p>
        <List
          items={[
            "App launches, navigation, onboarding answers and time spent on onboarding screens.",
            "Alarm and focus configuration changes, permission status, scheduling results and error codes.",
            "Blocking and unlock attempts, step counts associated with an attempt, completion times, emergency unlocks and summaries of completed mornings.",
            "Paywall interactions, purchase or restoration results, subscription status observed by the app and notification opens.",
            "App and operating system versions, device model, language and region, and a hashed device-derived identifier used to distinguish installations.",
          ]}
        />
        <p>
          We do not send alarm labels, focus-session names, Screen Time tokens,
          the names of the apps you select for blocking, or screen contents.
          An onboarding answer about a distracting app is a separate, voluntary
          answer; it is not read from your Screen Time selection.
        </p>
        <p>
          Events from the blocking extensions may wait on your device until you
          open Solund again. That local queue holds up to 200 events and retains
          them for up to 30 days. Events include when the action happened, so
          delayed delivery can be distinguished from current activity.
          An update may also send a one-time summary of completed mornings
          already recorded locally.
        </p>
      </Section>

      <Section title="Notifications">
        <p>
          Reminders are off by default and only turn on if you enable them. When
          enabled, notifications are scheduled locally on your device — nothing
          is sent from a server. When you open Solund by tapping a notification,
          we record the kind of reminder opened, not its text. We do not receive
          proof that a notification was displayed. You can turn reminders off in
          Solund&rsquo;s Settings or in iOS
          Settings at any time.
        </p>
      </Section>

      <Section title="What we do not do">
        <List
          items={[
            "We do not sell or rent your data or share it for third-party advertising.",
            "We do not use advertising identifiers or serve ads.",
            "We do not track you across other apps or websites.",
          ]}
        />
      </Section>

      <Section title="Your rights">
        <p>
          You can erase local history in Solund&rsquo;s Settings. For questions
          or requests about data processed by the app or its providers, contact
          us at {SITE.supportEmail}. Solund has no account directory, so we may
          need additional information to locate a provider record.
        </p>
        <p>
          Apple, RevenueCat and TelemetryDeck explain their data practices in
          their own privacy policies. You can contact them directly or write
          to us for help routing a request.
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
