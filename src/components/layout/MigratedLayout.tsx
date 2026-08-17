"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";
import { siteConfig } from "@/lib/site";
import "./migrated-layout.css";

type LayoutMode = "home" | "blog" | "article";

type MigratedHeaderProps = {
  mode?: LayoutMode;
};

const homeNav = [
  { label: "Portfolio", href: "/#results" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Blog", href: "/blog" }
];

const articleNav = [
  { label: "Services", href: "/#services" },
  { label: "Results", href: "/#results" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/#about" }
];

export function MigratedHeader({ mode = "home" }: MigratedHeaderProps) {
  const [open, setOpen] = useState(false);
  const nav = mode === "article" ? articleNav : homeNav;

  return (
    <>
      <header className="m-topbar" id="top">
        <div className="m-wrap">
          <Link className="m-wordmark" href="/" aria-label="Hire Kader home">
            <Image src="/images/logo-714c93142dfe.png" alt="Hire Kader" width={154} height={40} priority />
          </Link>
          <nav className="m-navmenu" aria-label="Primary">
            {nav.map((item) => (
              <Link
                className={mode === "blog" && item.label === "Blog" ? "active" : ""}
                aria-current={mode === "article" && item.label === "Blog" ? "page" : undefined}
                href={item.href}
                key={item.label}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="m-nav-right">
            <button
              className="m-hamburger"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="m-drawer"
              type="button"
              onClick={() => setOpen(true)}
            >
              <span />
              <span />
              <span />
            </button>
            <Link className="m-btn m-btn-accent" href="/#audit">
              Get a free audit
            </Link>
          </div>
        </div>
      </header>

      <div className={`m-overlay${open ? " open" : ""}`} hidden={!open} onClick={() => setOpen(false)} />
      <aside className={`m-drawer${open ? " open" : ""}`} id="m-drawer" role="dialog" aria-modal="true" aria-label="Menu" hidden={!open}>
        <button className="m-drawer-close" aria-label="Close menu" type="button" onClick={() => setOpen(false)}>
          x
        </button>
        <nav className="m-drawer-menu">
          {mode !== "home" && (
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
          )}
          {nav.map((item) => (
            <Link href={item.href} key={item.label} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="m-btn m-btn-accent m-btn-block" href="/#audit" onClick={() => setOpen(false)}>
          Get a free audit
        </Link>
      </aside>
    </>
  );
}

export function MigratedFooter({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <footer className="m-article-footer">
        <div className="m-wrap">
          <span>© 2026 Hire Kader</span>
          <Link href="/">hirekader.com</Link>
        </div>
      </footer>
    );
  }

  return (
    <footer className="m-footer" id="call">
      <div className="m-wrap">
        <div className="m-foot-top">
          <div>
            <Image className="m-foot-logo" src="/images/logo-6aad0831d946.png" alt="Hire Kader" width={147} height={38} />
            <p className="m-foot-blurb">
              I run Google Ads for home service businesses in the US, UK and Australia, built around booked jobs, not clicks.
              One person, no account managers.
            </p>
          </div>
          <div className="m-foot-social">
            <a href={siteConfig.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.86V21H9z" />
              </svg>
            </a>
            <Link href="/#call" aria-label="Email">
              <Mail />
            </Link>
            <Link href="/#call" aria-label="WhatsApp">
              <MessageCircle />
            </Link>
            <Link href="/#call" aria-label="Book a call">
              <Calendar />
            </Link>
          </div>
        </div>
        <div className="m-foot-grid">
          <FooterColumn title="Start here" links={[["Get a free audit", "/#audit"], ["Book a call", "/#call"], ["FAQ", "/#faq"]]} />
          <FooterColumn
            title="What I do"
            links={[
              ["Google Ads management", "/#services"],
              ["Local Services Ads", "/#services"],
              ["Call & form tracking", "/#services"],
              ["Landing page fixes", "/#services"]
            ]}
          />
          <FooterColumn title="Service areas" links={[["United States", "/#audit"], ["United Kingdom", "/#audit"], ["Australia", "/#audit"]]} />
          <FooterColumn title="For agencies" links={[["White-label Google Ads partner →", "/#audit"], ["Writing", "/blog"], ["About me", "/#about"]]} />
        </div>
        <div className="m-foot-bottom">© 2026 Abdul Kader, Google Ads for home service businesses. All rights reserved.</div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: Array<[string, string]> }) {
  return (
    <div className="m-foot-col">
      <h5>{title}</h5>
      {links.map(([label, href]) => (
        <Link href={href} key={`${title}-${label}`}>
          {label}
        </Link>
      ))}
    </div>
  );
}
