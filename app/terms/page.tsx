import type { Metadata } from "next";
import { LegalPage, List, Section } from "@/app/components/legal-page";
import { PRICING, SITE } from "@/app/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The agreement covering your use of Solund, including subscription terms and the limits of what an alarm app can promise.",
};

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Use"
      intro="These terms govern your use of Solund. Installing or using the app means you accept them. They are written to be read, not to be survived."
    >
      <Section title="What Solund is">
        <p>
          Solund is an iPhone alarm that blocks a set of apps you choose until
          you complete a walking mission. {SITE.legalEntity} licenses it to you
          for personal, non-commercial use on devices you own or control. You may
          not copy, resell, reverse-engineer or redistribute the app.
        </p>
        <p>
          Your use is also subject to Apple&rsquo;s{" "}
          <a
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink underline decoration-faint underline-offset-4 transition-colors hover:decoration-signal"
          >
            Licensed Application End User License Agreement
          </a>
          . Where these terms and Apple&rsquo;s agreement conflict, Apple&rsquo;s
          terms apply to the App Store relationship.
        </p>
      </Section>

      <Section title="Do not rely on Solund as your only alarm">
        <p className="text-ink">
          This is the most important clause on the page, so it is not buried.
        </p>
        <p>
          Solund depends on iOS scheduling, system permissions, battery state and
          your device being powered on and functioning. Alarms can fail to fire
          for reasons entirely outside our control — a discharged battery, a
          revoked permission, an operating system update, a device fault.
        </p>
        <p>
          If missing a wake-up would have serious consequences, use an
          independent backup alarm. Solund is a habit tool, not a safety-critical
          system, and we are not responsible for the consequences of an alarm
          that does not go off.
        </p>
      </Section>

      <Section title="Blocking, and getting out of it">
        <p>
          You choose which apps to block. Phone and Messages cannot be blocked,
          and emergency calling is never affected by Solund.
        </p>
        <List
          items={[
            "You can always complete the walking mission to unlock, from anywhere.",
            "An emergency unlock is available from within the app when a block is active. It applies a short delay, then grants a limited window before the block returns.",
            "Removing Solund from your device removes its blocks.",
          ]}
        />
        <p>
          You are responsible for the apps you choose to block and for keeping
          access to anything you may genuinely need. Choose accordingly.
        </p>
      </Section>

      <Section title="Health and physical activity">
        <p>
          Solund counts steps and asks you to walk. It is not a medical device
          and gives no medical, health or fitness advice. Do not use it in a way
          that is unsafe for you, and consult a professional if you have any
          condition affecting your ability to walk safely on waking.
        </p>
        <p>
          Step counting comes from your iPhone&rsquo;s motion sensors and is
          approximate. The app declines to credit movement it reads as
          implausible — for example, shaking the device — which means legitimate
          movement is occasionally not credited either. Walking normally always
          completes the mission.
        </p>
      </Section>

      <Section title="Subscriptions and billing">
        <p>
          Solund is sold as an auto-renewing subscription through the App Store.
          At the time of writing, the plans are {PRICING.annual} per year — with
          a {PRICING.trialDays}-day free trial for new subscribers — and{" "}
          {PRICING.monthly} per month. Prices vary by App Store region and the
          exact amount is shown to you in the app before you confirm.
        </p>
        <List
          items={[
            "Payment is charged to your Apple Account when you confirm the purchase.",
            "Subscriptions renew automatically unless auto-renew is turned off at least 24 hours before the end of the current period.",
            "Your Apple Account is charged for renewal within 24 hours before the current period ends.",
            <>
              Manage or cancel from{" "}
              <span className="text-ink">
                Settings → your name → Subscriptions
              </span>{" "}
              on your iPhone. Cancelling stops the next renewal; the current
              period runs to its end.
            </>,
            "If you cancel during a free trial before it ends, you are not charged. Any unused part of a free trial is forfeited when you purchase a subscription.",
          ]}
        />
        <p>
          Refunds are handled by Apple, not by us. Request one through Apple
          Support. We cannot issue refunds for App Store purchases, though we are
          happy to help you make the request.
        </p>
      </Section>

      <Section title="Changes to the app">
        <p>
          Solund will change over time. Features may be added, altered or
          removed. We may discontinue the app entirely; if we do so while you
          hold an active subscription, you may seek a pro-rated refund through
          Apple.
        </p>
      </Section>

      <Section title="Disclaimer and limitation of liability">
        <p>
          Solund is provided &ldquo;as is&rdquo;, without warranties of any kind,
          express or implied, including fitness for a particular purpose. We do
          not warrant that the app will be uninterrupted, error-free, or that it
          will change your habits.
        </p>
        <p>
          To the fullest extent permitted by law, {SITE.legalEntity} is not
          liable for indirect, incidental, special or consequential damages
          arising from your use of Solund, including missed alarms, missed
          commitments, or loss of data. Where liability cannot be excluded, it is
          limited to the amount you paid for the app in the twelve months before
          the claim.
        </p>
        <p>
          Nothing here limits rights you have under mandatory consumer protection
          law in your country.
        </p>
      </Section>

      <Section title="Termination">
        <p>
          You may stop using Solund at any time by deleting it. We may suspend
          access if you use the app in breach of these terms or in a way that
          harms other users or the service.
        </p>
      </Section>

      <Section title="Governing law">
        <p>
          These terms are governed by the laws of {SITE.jurisdiction}, without
          regard to conflict-of-law rules, and subject to any mandatory
          consumer-protection rights available to you where you live.
        </p>
      </Section>

      <Section title="Changes to these terms">
        <p>
          We may update these terms. The date at the top reflects the last
          revision, and continued use after a change means you accept the updated
          version. Material changes will be announced in the app.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Write to{" "}
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
