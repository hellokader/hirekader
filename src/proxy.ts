import { NextResponse, type NextRequest } from "next/server";

const exactRedirects: Record<string, string> = {
  "/about": "/About",
  "/blog": "/Blog",
  "/contact": "/Contact",
  "/services": "/Services"
};

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const exactDestination = exactRedirects[pathname];

  if (exactDestination) {
    return permanentRedirect(request, exactDestination);
  }

  if (pathname.startsWith("/blog/")) {
    return permanentRedirect(request, `/Blog/${pathname.slice("/blog/".length)}`);
  }

  if (pathname.startsWith("/services/")) {
    return permanentRedirect(request, `/Services/${pathname.slice("/services/".length)}`);
  }

  return NextResponse.next();
}

function permanentRedirect(request: NextRequest, destination: string) {
  const url = request.nextUrl.clone();
  url.pathname = destination;
  return NextResponse.redirect(url, 308);
}
