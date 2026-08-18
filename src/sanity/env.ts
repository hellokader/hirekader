export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-08-18";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

export const hasSanityEnv = Boolean(projectId && dataset && apiVersion);

export function requireSanityEnv() {
  const missing = [
    ["NEXT_PUBLIC_SANITY_PROJECT_ID", projectId],
    ["NEXT_PUBLIC_SANITY_DATASET", dataset],
    ["NEXT_PUBLIC_SANITY_API_VERSION", apiVersion]
  ].filter(([, value]) => !value);

  if (missing.length > 0) {
    throw new Error(`Missing Sanity environment variable(s): ${missing.map(([name]) => name).join(", ")}`);
  }
}
