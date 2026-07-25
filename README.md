# Guru Vetchem

Specification-led animal-nutrition sourcing website for Guru Vetchem.

## Local development

```bash
npm install
npm run dev
```

## Production

The project is configured as a standard Next.js application for Vercel.

The contact endpoint uses `GOOGLE_SHEETS_WEBHOOK_URL` when configured. If the
environment variable is absent, the current Guru Vetchem Google Apps Script
endpoint is used.
