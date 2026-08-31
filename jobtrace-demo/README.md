# JobTrace — portfolio demo

`index.html` is a **self-contained** build of the JobTrace dashboard running on
synthetic data. No backend, no build step — open the file or serve the folder.

## What JobTrace is

A multi-user job-application tracker:

1. A user connects their Gmail (read-only, Google OAuth).
2. An hourly worker (GitHub Actions) pulls application-lifecycle email and
   classifies each message with an LLM: *application received / rejection /
   interview invite / assessment request / offer / other*, and extracts the
   hiring company + role.
3. Events are paired by company into a ledger, with derived status
   (`waiting → in progress → assessment → interviewing → offer`, or `rejected`,
   or `ghosted`) and win-rate metrics.
4. Each user gets a private dashboard and a Discord scorecard.

## Architecture

- **Web / OAuth / editing** — Netlify static site + serverless functions
- **Worker** — GitHub Actions cron, reuses the classification code
- **Storage** — no database; one JSON file per user in a private repo
  (Google refresh tokens AES-256-GCM encrypted at rest)

## This demo

The dashboard is client-rendered from an embedded fake dataset (`window.DEMO`,
3 people). The sidebar switches between them; the status breakdown and metric
cards filter the activity feed; JD links are editable in place. Nothing
persists — a reload restores the sample data.
