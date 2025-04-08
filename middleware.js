import { hasCookie } from "cookies-next";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function middleware(request) {
  let isAuthenticated = false;

  // check if user is invited user

  if (hasCookie("guest", { cookies })) {
    isAuthenticated = true;
  }

  // check if user is connected

  // check is user is authenticated
  if (!isAuthenticated) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
