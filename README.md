# Startup Semester + Disciples (ready-to-deploy)

This folder is a **complete website** you can deploy now. It has two pages:

- `/` — Startup Semester (student landing, simple placeholder you can replace later)
- `/disciples` — Disciples employer landing (your full page)

## 1) Put it online (easiest: Vercel)

1. Download the zip from ChatGPT and unzip it.
2. Go to https://vercel.com, login with Google/GitHub, click **+ New Project → Import**.
3. When asked, **create a new Git repository** from the unzipped folder and connect it.
4. Click **Deploy**. You’ll get a live URL like `https://startup-semester.vercel.app/`.

Optional: add your domain in **Vercel → Project → Settings → Domains**.

## 2) Edit text / links

- Disciples page: `app/disciples/page.tsx` (replace `href="#"` for **Post a role** and **Book a 15‑min intro**)
- Startup Semester placeholder: `app/page.tsx` (swap this with your full student landing when ready)

## 3) Run locally (if you want)
```bash
npm install
npm run dev
```

## 4) Where to paste your full student landing later
Replace the content of `app/page.tsx` with your final student landing React code.

## Notes
- Tailwind CSS is already configured.
- No databases or secrets required.
