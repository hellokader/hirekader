"use client";

import { useRef } from "react";

type LegacyContentFrameProps = {
  src: string;
  title: string;
  hideFooter?: boolean;
};

export function LegacyContentFrame({ src, title, hideFooter = true }: LegacyContentFrameProps) {
  const ref = useRef<HTMLIFrameElement>(null);

  function onLoad() {
    const iframe = ref.current;
    const doc = iframe?.contentDocument;

    if (!doc) {
      return;
    }

    const style = doc.createElement("style");
    style.textContent = `
      header.topbar,
      .overlay,
      .drawer {
        display: none !important;
      }
      ${hideFooter ? "footer { display: none !important; }" : ""}
      html {
        scroll-padding-top: 0 !important;
      }
      body {
        overflow-x: hidden;
      }
    `;
    doc.head.appendChild(style);
    iframe.style.height = `${doc.documentElement.scrollHeight}px`;

    const resize = new ResizeObserver(() => {
      iframe.style.height = `${doc.documentElement.scrollHeight}px`;
    });
    resize.observe(doc.documentElement);
  }

  return <iframe ref={ref} className="legacy-content-frame" src={src} title={title} onLoad={onLoad} />;
}
