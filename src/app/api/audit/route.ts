import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body?.name || !body?.email || !body?.business || !body?.serviceArea) {
    return NextResponse.json({ error: "Missing required audit fields." }, { status: 400 });
  }

  if (process.env.AUDIT_FORM_WEBHOOK_URL) {
    await fetch(process.env.AUDIT_FORM_WEBHOOK_URL, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" }
    });
  }

  return NextResponse.json({ ok: true });
}
