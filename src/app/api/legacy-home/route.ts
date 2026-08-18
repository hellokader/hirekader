import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";
import { hasSanityEnv } from "@/sanity/env";
import { client } from "@/sanity/lib/client";
import { HOME_AUDIT_QUERY } from "@/sanity/lib/queries";

export const runtime = "nodejs";
export const revalidate = 60;

type AuditSettings = {
  email: string;
  whatsapp: string;
  turnaround: string;
  timezone: string;
};

type HomeAuditResponse = {
  homePage?: {
    audit?: Partial<AuditSettings>;
  } | null;
  siteSettings?: Partial<AuditSettings> | null;
};

const fallbackAudit: AuditSettings = {
  email: "hello@hirekader.com",
  whatsapp: "+8801941171135",
  turnaround: "Within 48h",
  timezone: "GMT+6 · US/UK/AU hours"
};

export async function GET() {
  const htmlPath = path.join(process.cwd(), "public", "legacy-direct", "Kader - Redesign (hirekader).html");
  const html = await readFile(htmlPath, "utf8");
  const audit = await getAuditSettings();

  return new NextResponse(replaceAuditFacts(html, audit), {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300"
    }
  });
}

async function getAuditSettings(): Promise<AuditSettings> {
  if (!hasSanityEnv) {
    return fallbackAudit;
  }

  try {
    const data = await client.fetch<HomeAuditResponse>(
      HOME_AUDIT_QUERY,
      {},
      {
        next: {
          revalidate,
          tags: ["homePage", "siteSettings"]
        }
      }
    );
    const homeAudit = data.homePage?.audit;
    const settings = data.siteSettings;

    return {
      email: homeAudit?.email || settings?.email || fallbackAudit.email,
      whatsapp: homeAudit?.whatsapp || settings?.whatsapp || fallbackAudit.whatsapp,
      turnaround: homeAudit?.turnaround || settings?.turnaround || fallbackAudit.turnaround,
      timezone: homeAudit?.timezone || settings?.timezone || fallbackAudit.timezone
    };
  } catch {
    return fallbackAudit;
  }
}

function replaceAuditFacts(html: string, audit: AuditSettings) {
  return html.replace(/<dl class="audit-facts">[\s\S]*?<\/dl>/, renderAuditFacts(audit));
}

function renderAuditFacts(audit: AuditSettings) {
  const email = escapeHtml(audit.email);
  const whatsapp = escapeHtml(audit.whatsapp);
  const whatsappHref = `https://wa.me/${audit.whatsapp.replace(/\D/g, "")}`;

  return `<dl class="audit-facts">
<div><dt>Direct email</dt><dd><a href="mailto:${email}" aria-label="Email Hire Kader">${email}</a></dd></div>
<div><dt>Turnaround</dt><dd>${escapeHtml(audit.turnaround)}</dd></div>
<div><dt>WhatsApp</dt><dd><a href="${whatsappHref}" target="_blank" rel="noopener noreferrer" aria-label="Contact Hire Kader on WhatsApp">${whatsapp}</a></dd></div>
<div><dt>Timezone</dt><dd>${escapeHtml(audit.timezone)}</dd></div>
</dl>`;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
