import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const lead = await request.json();
    const scriptUrl = process.env.GOOGLE_SHEETS_SCRIPT_URL;

    if (!scriptUrl) {
      return NextResponse.json({ ok: true, stored: false });
    }

    const res = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...lead, submittedAt: new Date().toISOString() }),
    });

    if (!res.ok) {
      console.error(`[lead] Sheets forward failed with status ${res.status}`);
      return NextResponse.json({ ok: true, stored: false });
    }

    return NextResponse.json({ ok: true, stored: true });
  } catch (error) {
    // Never fail the client — the WhatsApp redirect is the primary path.
    console.error("[lead] Failed to store lead:", error);
    return NextResponse.json({ ok: true, stored: false });
  }
}
