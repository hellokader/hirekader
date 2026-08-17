"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

type SmartLinkProps = ComponentProps<typeof Link>;

export function SmartLink({ href, onNavigate, ...props }: SmartLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      onNavigate={(event) => {
        const target = getTarget(href);

        if (
          target &&
          pathname === target.pathname &&
          !target.search &&
          !target.hash &&
          typeof window !== "undefined" &&
          !window.location.search &&
          !window.location.hash
        ) {
          event.preventDefault();
          return;
        }

        onNavigate?.(event);
      }}
      {...props}
    />
  );
}

function getTarget(href: SmartLinkProps["href"]) {
  if (typeof href === "string") {
    if (!href.startsWith("/")) {
      return null;
    }

    try {
      return new URL(href, "https://www.hirekader.com");
    } catch {
      return null;
    }
  }

  const pathname = href.pathname;

  if (!pathname) {
    return null;
  }

  return {
    pathname,
    search: href.query ? "?" : "",
    hash: href.hash ?? ""
  };
}
