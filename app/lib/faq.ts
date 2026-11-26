import { PRICING } from "@/app/lib/site";

/**
 * STE-152: la FAQ de la home. Una sola fuente para la sección visible y para
 * el `FAQPage` del JSON-LD: Google pide que las respuestas marcadas sean las
 * mismas que ve la persona, así que no se escriben dos veces.
 *
 * Cada respuesta que describe la app está verificada contra `solund-app`:
 * - pasos 15/30/50: `MissionDifficulty` en `steptime/Services/AlarmStore.swift`;
 * - la alarma con Stop y Snooze normales: `AlarmPresentationBuilder.swift`;
 * - emergency unlock (20 s con la pantalla abierta → 15 min) y "Unblock
 *   everything now": `EmergencyUnlockView.swift`, `ScreenTimeService.swift`,
 *   `SettingsView.swift`;
 * - desbloqueo solo a las 4 h: failsafe de `intervalDidEnd` en
 *   `StepTimeMonitor/DeviceActivityMonitorExtension.swift` y `AlarmStore.swift`;
 * - apps y categorías del picker de Screen Time: `familyActivityPicker` en
 *   `SettingsView.swift` y `OnboardingPlan.swift`.
 * Si la app cambia, esto cambia. Todo texto público lo aprueba Gastón.
 */
export const FAQ: ReadonlyArray<{ q: string; a: string }> = [
  {
    q: "What is Solund?",
    a: "Solund is an app blocker for your mornings. You set an alarm and choose the apps that eat your first hour, like Instagram or TikTok. When the alarm rings, those apps lock, and they stay locked until you get out of bed and walk.",
  },
  {
    q: "Does the alarm turn off normally?",
    a: "Yes. The alarm has regular Stop and Snooze buttons, and you turn it off like any other alarm. What stays locked are the apps you chose, not the alarm.",
  },
  {
    q: "How do I unlock my apps?",
    a: "Walk. You choose 15, 30 or 50 steps, and your iPhone counts them. Reach your number and every blocked app unlocks at once.",
  },
  {
    q: "Can I skip it?",
    a: "You can, but walking is meant to be the easier way out. For real emergencies, Settings has an emergency unlock: keep the screen open for 20 seconds and you get 15 minutes, then the block comes back. There’s also a button that releases every block if one ever gets stuck. And if you never walk, the apps unlock on their own four hours after the alarm.",
  },
  {
    q: "Which apps can I block?",
    a: "Any app or app category you pick in Apple’s Screen Time picker: Instagram, TikTok, YouTube, games, whatever steals your morning. You choose them when you set up Solund and can change them later in Settings.",
  },
  {
    q: "Does it ring on Silent or in Focus mode?",
    a: "Yes. Solund uses Apple’s alarm system, so it rings through Silent mode and through Focus.",
  },
  {
    q: "How much does it cost?",
    a: `${PRICING.trialDays} days free, then ${PRICING.annual} a year. There’s also a monthly plan at ${PRICING.monthly} with no trial. Cancel from the App Store before the trial ends and you won’t be charged. Prices are in USD; what you pay depends on your App Store region.`,
  },
  {
    q: "Does it work on Android?",
    a: "No. Solund is iPhone only, because it’s built on Apple’s Screen Time and alarm features.",
  },
];
