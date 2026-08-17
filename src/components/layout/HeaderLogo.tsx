"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";
import { routes } from "@/lib/routes";

type HeaderLogoProps = {
  className: string;
  children: ReactNode;
};

export function HeaderLogo({ className, children }: HeaderLogoProps) {
  const pathname = usePathname();

  function handleLogoClick(event: MouseEvent<HTMLAnchorElement>) {
    if (pathname !== routes.home) {
      return;
    }

    event.preventDefault();
    scrollHomepageToTop();
  }

  return (
    <Link className={className} href={routes.home} aria-label="Hire Kader Home" onClick={handleLogoClick}>
      {children}
    </Link>
  );
}

function scrollHomepageToTop() {
  if (window.scrollY > 0) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const frame = document.querySelector<HTMLIFrameElement>(".legacy-frame");
  frame?.contentWindow?.scrollTo({ top: 0, behavior: "smooth" });
}
