import { NextResponse } from "next/server";
import { z } from "zod";

// The quiz sends a flat object of short strings. Anything else is rejected before it reaches the sheet.
const MAX_BODY_BYTES = 8 * 1024;
const lead = z
  .object({
    language: z.enum(["sw", "en"]).nullable().optional(),
    company: z.string().trim().min(1).max(200),
    phone: z.string().trim().min(9).max(30).regex(/^[0-9+().\-\s]+$/),
  })
  .catchall(z.string().max(500))
  .refine((value) => Object.keys(value).length <= 30);

export async function POST(request: Request) {
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) {
      return NextResponse.json({ ok: false, error: "Request too large" }, { status: 413 });
    }
    const parsed = lead.safeParse(JSON.parse(raw));
    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: "Invalid lead" }, { status: 400 });
    }

    const scriptUrl = process.env.GOOGLE_SHEETS_SCRIPT_URL;
    if (!scriptUrl) {
      return NextResponse.json({ ok: true, stored: false });
    }

    const res = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...parsed.data, submittedAt: new Date().toISOString() }),
    });

    if (!res.ok) {
      console.error(`[lead] Sheets forward failed with status ${res.status}`);
      return NextResponse.json({ ok: true, stored: false });
    }

    return NextResponse.json({ ok: true, stored: true });
  } catch (error) {
    // Never fail the client; the WhatsApp redirect is the primary path.
    console.error("[lead] Failed to store lead:", error);
    return NextResponse.json({ ok: true, stored: false });
  }
}
