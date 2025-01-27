// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 1. Get cookies/headers/path
  const user = request.cookies.get('user')?.value;
  const path = request.nextUrl.pathname;

  const publicPaths = ['/signin', '/signup'];

  if (!user && !publicPaths.includes(path)) {
    return NextResponse.redirect(new URL('/signin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api).*)'],
};
