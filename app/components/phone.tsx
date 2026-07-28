import Image, { type StaticImageData } from "next/image";
import homeShot from "@/app/shots/home.png";
import missionShot from "@/app/shots/mission.png";

/**
 * Capturas reales del simulador (las mismas que van al App Store; se generan
 * con `ScreenshotHost.swift` en el repo de iOS). No son mockups: si la app
 * cambia, la landing miente hasta que se regeneren.
 *
 * Solo dos, a propósito: la home prueba que la alarma existe y la misión
 * prueba la idea entera. Las otras dos pantallas del set (unlock y stats) se
 * sacaron — repetían lo que ya dice el texto y cargaban la página.
 */
export const SHOTS = {
  home: {
    src: homeShot,
    alt: "Solund home screen: the wake-up time 6:40 AM in large type, the weekdays it repeats, and the alarm toggled on.",
  },
  mission: {
    src: missionShot,
    alt: "Solund mission screen: an APPS LOCKED badge above a counter reading 18 of 30 steps, with a progress bar partly filled.",
  },
} satisfies Record<string, { src: StaticImageData; alt: string }>;

export type ShotName = keyof typeof SHOTS;

/**
 * La captura dentro de un bisel de iPhone. `sizes` importa: las capturas son
 * de 660px de ancho y se muestran bastante más chicas, así que sin el hint el
 * navegador se baja el archivo entero.
 */
export function Phone({
  shot,
  sizes,
  priority = false,
  className = "",
}: {
  shot: ShotName;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const { src, alt } = SHOTS[shot];

  return (
    <div className={`phone ${className}`}>
      <Image src={src} alt={alt} sizes={sizes} priority={priority} />
    </div>
  );
}
