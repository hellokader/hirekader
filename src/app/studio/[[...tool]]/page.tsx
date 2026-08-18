import { NextStudio } from "next-sanity/studio";
import { hasSanityEnv } from "@/sanity/env";
import config from "../../../../sanity.config";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  if (!hasSanityEnv) {
    return (
      <main
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          padding: "32px",
          fontFamily: "Arial, sans-serif",
          background: "#0b0b0b",
          color: "#fff"
        }}
      >
        <section style={{ maxWidth: "640px" }}>
          <p style={{ margin: "0 0 12px", color: "#8ab4ff", textTransform: "uppercase", letterSpacing: "0.12em", fontSize: "12px" }}>
            Sanity Studio
          </p>
          <h1 style={{ margin: "0 0 16px", fontSize: "32px", lineHeight: 1.1 }}>CMS environment variables are not configured.</h1>
          <p style={{ margin: 0, color: "#d6d6d6", lineHeight: 1.6 }}>
            Add <code>NEXT_PUBLIC_SANITY_PROJECT_ID</code>, <code>NEXT_PUBLIC_SANITY_DATASET</code>, and{" "}
            <code>NEXT_PUBLIC_SANITY_API_VERSION</code> in <code>.env.local</code> and Vercel, then restart the app.
          </p>
        </section>
      </main>
    );
  }

  return <NextStudio config={config} />;
}
