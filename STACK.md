# Stack del proyecto

## Framework y lenguaje

| Tecnología | Versión | Uso |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.3 | Framework principal (App Router) |
| React | 19 | UI |
| TypeScript | 5 | Lenguaje |

## Estilos

| Tecnología | Versión | Uso |
|---|---|---|
| [Tailwind CSS](https://tailwindcss.com) | 4 | Utilidades CSS |
| Geist Sans / Geist Mono | — | Tipografías (Google Fonts vía `next/font`) |

## Infraestructura

| Servicio | Plan | Uso |
|---|---|---|
| [Vercel](https://vercel.com) | Hobby (gratis) | Hosting y despliegue automático |
| [Upstash Redis](https://upstash.com) | Free tier (10k cmd/día) | Contador del Easter Egg |

## Variables de entorno

```
UPSTASH_REDIS_REST_URL     → URL del endpoint REST de Upstash
UPSTASH_REDIS_REST_TOKEN   → Token de autenticación de Upstash
```

En local: archivo `.env.local` (ignorado por git).  
En producción: Vercel → Project Settings → Environment Variables.

## Easter Eggs

- **`console.log`** — ASCII art + mensaje al abrir DevTools.
- **Konami Code** (`↑ ↑ ↓ ↓ ← → ← → B A`) — Modal terminal con contador de visitantes en tiempo real (via Upstash Redis).

## Comandos

```bash
npm run dev     # Desarrollo local en http://localhost:3000
npm run build   # Build de producción
npm run lint    # ESLint
```
