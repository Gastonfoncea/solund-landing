# solund-landing

Sitio de [Solund](https://solund.app) — la landing y, sobre todo, las páginas
legales que App Store Review exige para publicar la app iOS.

## Por qué existe

El paywall de la app linkea a `/privacy` y `/terms` (ver `AppLinks.swift` en el
repo de iOS). Apple rechaza el binario si esas URLs no resuelven, así que este
sitio es un bloqueante de lanzamiento, no un extra de marketing.

## Stack

Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS 4 · TypeScript.
Las tres rutas son estáticas — no hay backend ni base de datos.

| Ruta | Qué es |
| --- | --- |
| `/` | Landing |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Use |

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # prerenderiza las 3 rutas
```

## Antes de publicar

Los textos legales salen de `app/lib/site.ts`. Hay dos campos que **hay que
confirmar**, porque los documentos los citan:

- `legalEntity` — quién responde legalmente por la app
- `jurisdiction` — ley aplicable de los términos

Los textos son un borrador informado, escrito contra lo que la app realmente
hace: sin cuentas, sin analytics, sin backend propio, y RevenueCat como único
destino de red. No son asesoramiento legal — conviene que los lea alguien del
rubro antes del submit.

## Design system

Sale entero de la app iOS, no al revés:

- **Color** — los tokens de `app/globals.css` son los mismos que
  `steptime/DesignSystem/Theme.swift`. El `horizon` es `DawnBackground`; el
  `unlock` es `Theme.unlockGradient`, y como en la app aparece **una sola vez**,
  en el cierre: es el clímax, no un fondo más.
- **Tipografía** — una sola familia, porque la app es toda SF Pro y la jerarquía
  la hacen el peso y el ancho. Archivo es variable en `wght` y `wdth`, así que
  `.numeral` (wdth 125 / wght 900) reproduce los numerales héroe de
  `MissionView` y `.font-display` (wdth 112) el resto.
- **Movimiento** — la curva es `--ease-out-swift`, la `.easeOut` de SwiftUI que
  usa toda la app. Una entrada escalonada al cargar y reveals al scrollear; nada
  más.

## Screenshots

`app/shots/*.png` son las capturas reales del simulador — las mismas que van al
App Store, generadas con `ScreenshotHost.swift` (`SCREENSHOT_SCREEN=mission`,
etc.) y reducidas al 50% (660×1434). No son mockups: si la UI de la app cambia,
la landing miente hasta que se regeneren desde `assets/appstore/raw/`.

Son **dos**, no las cuatro del set: la home prueba que la alarma existe y la
misión prueba la idea entera. `unlock` y `stats` se sacaron porque repetían lo
que el texto ya dice — el unlock, además, es la sección naranja del cierre.
