@AGENTS.md

# Solund — landing (solund.app)

Sitio de **Solund** (app iOS, App Store id6794460644): la landing en `/` y, sobre todo, **las páginas legales que usa la App Store**: `/privacy` y `/terms`. El paywall y la ficha de la app linkean a esas URLs (ver `AppLinks.swift` en `solund-app`); si dejan de resolver, Apple puede rechazar el binario. No las rompas ni las muevas.

- **Dominio:** `solund.app` (también `www.solund.app`).
- **Deploy:** proyecto `solund-landing` en Vercel con integración de GitHub: **cada push a `main` sale a producción**. No hay que correr `vercel` a mano. Probá con `npm run build` antes de pushear.
- **Textos legales:** salen de `app/lib/site.ts` y de las páginas en `app/(site)/privacy` y `app/(site)/terms`. Si la app cambia los datos que manda (p. ej. TelemetryDeck), la política se actualiza acá y Gastón edita App Privacy en App Store Connect.
- **Cómo se trabaja:** historial con commits directos a `main` (conventional, en castellano). Cambios grandes, en rama propia. Antes de tocar, `git status`: el checkout principal puede estar en una rama en curso de Gastón con cambios sin commitear.
- Mapa del workspace (app, distribution, landing) → `../CLAUDE.md`.
