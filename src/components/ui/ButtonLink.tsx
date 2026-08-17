import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "accent" | "outline" | "invert";
  block?: boolean;
};

export function ButtonLink({ href, children, variant = "accent", block = false }: ButtonLinkProps) {
  return (
    <Link className={`btn btn-${variant}${block ? " btn-block" : ""}`} href={href}>
      {children}
    </Link>
  );
}
