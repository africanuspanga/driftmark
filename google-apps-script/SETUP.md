# Google Sheets Lead Backup — Setup

The `/start` quiz already sends every completed lead to `/api/lead`. That route
forwards leads to a Google Sheet **only if** `GOOGLE_SHEETS_SCRIPT_URL` is set.
Until then, the quiz works fine — leads just go to WhatsApp only.

## Steps (about 5 minutes)

1. **Create the Sheet**
   - Go to https://sheets.google.com and create a new spreadsheet, e.g. "Driftmark Leads".
   - In row 1 add these headers:
     `Submitted At | Language | Company | Phone | Need | For | Sector | Current Website | Budget | Start`

2. **Add the script**
   - In the Sheet: **Extensions → Apps Script**.
   - Delete any code there and paste the contents of `lead-collector.gs`.
   - Save (Ctrl/Cmd+S).

3. **Deploy as a web app**
   - Click **Deploy → New deployment**.
   - Gear icon → select **Web app**.
   - "Execute as": **Me** · "Who has access": **Anyone**.
   - Click **Deploy**, approve the permissions, and **copy the Web app URL**
     (looks like `https://script.google.com/macros/s/XXXXX/exec`).

4. **Connect the website**
   - Local: add to `/Users/admin/driftmark/.env.local`:
     ```
     GOOGLE_SHEETS_SCRIPT_URL=https://script.google.com/macros/s/XXXXX/exec
     ```
   - Production: add the same variable in Vercel → Project → Settings →
     Environment Variables (Production + Preview), then redeploy.

5. **Test**
   - Complete the quiz at `/start` and tap "Send to WhatsApp".
   - A new row should appear in the Sheet within a few seconds.

## Notes

- If you edit the script later, use **Deploy → Manage deployments → Edit →
  New version** — otherwise the URL keeps serving the old code.
- The website never blocks on the Sheet: if the script is down, users still
  reach WhatsApp normally.
