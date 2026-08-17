"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { navItems } from "@/data/site-content";
import { ButtonLink } from "@/components/ui/ButtonLink";

type HeaderProps = {
  active?: "home" | "blog";
  compact?: boolean;
};

export function Header({ active = "home", compact = false }: HeaderProps) {
  const [open, setOpen] = useState(false);

  const items = navItems.map((item) =>
    active === "blog" && item.label !== "Blog"
      ? { ...item, href: item.href.replace("/#", "/#") }
      : item
  );

  return (
    <>
      <header className="topbar" id="top">
        <div className="wrap">
          <Link className="wordmark" href="/" aria-label="Hire Kader home">
            <Image src="/images/logo-714c93142dfe.png" alt="Hire Kader" width={154} height={40} priority />
          </Link>
          <nav className="navmenu" aria-label="Primary">
            {items.map((item) => (
              <Link className={active === "blog" && item.label === "Blog" ? "active" : ""} href={item.href} key={item.label}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="nav-right">
            {!compact && <ButtonLink href="/#audit">Get a free audit</ButtonLink>}
            <button
              className="hamburger"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="drawer"
              onClick={() => setOpen(true)}
              type="button"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      <div className={`overlay${open ? " open" : ""}`} hidden={!open} onClick={() => setOpen(false)} />
      <aside className={`drawer${open ? " open" : ""}`} id="drawer" role="dialog" aria-modal="true" aria-label="Menu" hidden={!open}>
        <button className="drawer-close" aria-label="Close menu" onClick={() => setOpen(false)} type="button">
          x
        </button>
        <nav className="drawer-menu">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          {items.map((item) => (
            <Link href={item.href} key={item.label} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
        <ButtonLink href="/#audit" block>
          Get a free audit
        </ButtonLink>
      </aside>
    </>
  );
}
