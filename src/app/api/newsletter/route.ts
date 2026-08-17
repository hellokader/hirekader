import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body?.email || typeof body.email !== "string") {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  if (process.env.NEWSLETTER_WEBHOOK_URL) {
    await fetch(process.env.NEWSLETTER_WEBHOOK_URL, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" }
    });
  }

  return NextResponse.json({ ok: true });
}
