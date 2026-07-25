import { NextResponse } from "next/server";

const CURRENT_APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwVi5IxxtIUdB1OWj9NE6fsjTiD7BG1afIN72r6sc-DBAABdyyWy7aTqfuPadw-2Rjg/exec";

const requiredFields = [
  "name",
  "company",
  "contact",
  "product",
  "volume",
  "destination",
] as const;

export async function POST(request: Request) {
  const payload = (await request.json()) as Record<string, unknown>;

  if (String(payload.website ?? "").trim()) {
    return NextResponse.json({ ok: true });
  }

  const missing = requiredFields.filter(
    (field) => !String(payload[field] ?? "").trim(),
  );
  if (missing.length) {
    return NextResponse.json(
      { ok: false, error: "Required enquiry fields are missing." },
      { status: 400 },
    );
  }

  const webhook =
    process.env.GOOGLE_SHEETS_WEBHOOK_URL || CURRENT_APPS_SCRIPT_URL;

  const response = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      submittedAt: new Date().toISOString(),
      source: "guruvetchem.in",
      ...payload,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { ok: false, error: "Enquiry destination rejected the request." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
