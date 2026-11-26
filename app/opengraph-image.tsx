import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { PRICING } from "@/app/lib/site";

/* STE-152: la imagen para compartir (Open Graph; Twitter la toma de acá, ver
   `twitter-image.tsx`). Mismo lenguaje que el hero: grafito, el horizonte que
   se enciende solo abajo y Archivo ancha y pesada. Satori no maneja fuentes
   variables, así que en `assets/fonts/` van dos instancias estáticas de
   Archivo a `wdth` 112 (el mismo ancho que `font-display`). */

export const alt =
  "Solund: the app blocker that gets you out of bed. Walk to unlock your apps.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [extraBold, medium] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/Archivo-ExtraBold-wdth112.ttf")),
    readFile(join(process.cwd(), "assets/fonts/Archivo-Medium-wdth112.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          color: "#FFF7F0",
          fontFamily: "Archivo",
          backgroundColor: "#15100F",
          backgroundImage:
            "radial-gradient(120% 70% at 50% 125%, rgba(255,140,70,0.45) 0%, rgba(194,74,24,0.22) 34%, rgba(52,34,30,0.5) 62%, rgba(21,16,15,0) 80%)",
        }}
      >
        {/* Wordmark: el sol + "Solund", como en el header. */}
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 9999,
              border: "3px solid rgba(255, 110, 44, 0.32)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: 9999,
                background: "linear-gradient(to bottom, #FF8A3C, #C24A18)",
              }}
            />
          </div>
          <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: "-0.025em" }}>
            Solund
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 86,
              fontWeight: 800,
              lineHeight: 0.98,
              letterSpacing: "-0.035em",
              maxWidth: 940,
            }}
          >
            The app blocker that gets you out of bed.
          </div>
          <div
            style={{
              marginTop: 30,
              fontSize: 34,
              fontWeight: 500,
              color: "#A8988A",
              display: "flex",
            }}
          >
            Your apps stay locked until you walk.
            <span style={{ color: "#FF6E2C", marginLeft: 12 }}>
              {PRICING.trialDays} days free.
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 24,
            fontWeight: 500,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#FFF7F0",
            opacity: 0.7,
          }}
        >
          For iPhone · solund.app
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Archivo", data: extraBold, style: "normal", weight: 800 },
        { name: "Archivo", data: medium, style: "normal", weight: 500 },
      ],
    },
  );
}
