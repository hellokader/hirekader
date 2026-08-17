const baseUrl = process.argv[2] || "http://localhost:3000";

const routes = [
  "/",
  "/Blog",
  "/Blog/why-your-leads-are-lying-to-you",
  "/Blog/searches-i-block-on-every-trade-account",
  "/Blog/what-a-missed-call-actually-costs-you",
  "/Blog/service-area-targeting-that-doesnt-waste-half-your-budget",
  "/Services",
  "/Services/google-ads",
  "/Services/local-services-ads",
  "/Services/call-form-tracking",
  "/Services/landing-page-fixes",
  "/Services/local-seo",
  "/Services/google-business-profile",
  "/About",
  "/Contact",
  "/sitemap.xml",
  "/robots.txt"
];

const redirects = [
  "/blog",
  "/blog/why-your-leads-are-lying-to-you",
  "/services",
  "/about",
  "/contact",
  "/index.html",
  "/blog.html",
  "/services.html",
  "/about.html",
  "/contact.html",
  "/Blog%20Index.html",
  "/Blog%20Article%20Template.html"
];

async function check(path, expected) {
  const url = new URL(path, baseUrl);
  const response = await fetch(url, { redirect: "manual" });
  const location = response.headers.get("location") || "";
  return { path, expected, status: response.status, location };
}

const results = [];

for (const route of routes) {
  results.push(await check(route, "200"));
}

for (const route of redirects) {
  results.push(await check(route, "301/308"));
}

let failed = false;

for (const result of results) {
  const ok =
    (result.expected === "200" && result.status === 200) ||
    (result.expected === "301/308" && [301, 308].includes(result.status));

  if (!ok) failed = true;

  const suffix = result.location ? ` -> ${result.location}` : "";
  console.log(`${ok ? "PASS" : "FAIL"} ${result.path.padEnd(58)} ${String(result.status).padEnd(3)}${suffix}`);
}

if (failed) {
  process.exitCode = 1;
}
