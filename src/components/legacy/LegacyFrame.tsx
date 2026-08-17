"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

type LegacyFrameProps = {
  title: string;
  src: string;
};

export function LegacyFrame({ title, src }: LegacyFrameProps) {
  const pathname = usePathname();
  const router = useRouter();
  const frameRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (event.origin !== window.location.origin || event.data?.type !== "hirekader:navigate") {
        return;
      }

      const href = event.data.href;

      if (typeof href !== "string" || !href.startsWith("/")) {
        return;
      }

      const target = new URL(href, window.location.origin);

      if (
        pathname === target.pathname &&
        !target.search &&
        !target.hash &&
        !window.location.search &&
        !window.location.hash
      ) {
        if (pathname === "/") {
          scrollToTop(frameRef.current);
        }

        return;
      }

      router.push(`${target.pathname}${target.search}${target.hash}`);
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [pathname, router]);

  return (
    <main className="legacy-shell">
      <iframe ref={frameRef} className="legacy-frame" src={src} title={title} />
    </main>
  );
}

function scrollToTop(frame: HTMLIFrameElement | null) {
  if (window.scrollY > 0) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  frame?.contentWindow?.scrollTo({ top: 0, behavior: "smooth" });
}
