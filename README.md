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

Los tokens de color en `app/globals.css` son los mismos que
`steptime/DesignSystem/Theme.swift` en el repo de iOS. Si cambian allá, cambian
acá.
