import { NextRequest, NextResponse } from "next/server";

// export { auth as middleware } from "@/auth";

export default function middleware(request: NextRequest) {
  const token = request.cookies.get("authjs.session-token");

  const currentURL = request.nextUrl.pathname;

  if (!token) return NextResponse.rewrite(new URL("/auth/signin", request.url));
  else if (token && currentURL.startsWith("/auth"))
    return NextResponse.rewrite(new URL("/", request.url));
  return NextResponse.next();
}

export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
};
