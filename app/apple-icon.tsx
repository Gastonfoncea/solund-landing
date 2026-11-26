import { ImageResponse } from "next/og";

/* STE-152: el ícono en PNG. Hace de apple-touch-icon y de `logo` del
   `Organization` en el JSON-LD (Google no toma SVG ahí). Es el mismo dibujo
   que `app/icon.svg`: el sol sobre grafito. */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#15100F",
        }}
      >
        <div
          style={{
            width: 146,
            height: 146,
            borderRadius: 9999,
            border: "9px solid rgba(255, 247, 240, 0.28)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 9999,
              background: "linear-gradient(to bottom, #FF8A3C, #C24A18)",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
