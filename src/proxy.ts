import { ACCESS_TOKEN_KEY } from '@/shared/constants';
import { ROUTES } from '@/shared/constants/routes';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const authToken = request.cookies.get(ACCESS_TOKEN_KEY)?.value;

  const isAuthPage = pathname.startsWith(ROUTES.AUTH.BASE);
  const isProtectedPage = pathname.startsWith(ROUTES.DASHBOARD);
  const isSignOutPage = pathname === ROUTES.AUTH.SIGN_OUT;

  if (authToken && isAuthPage && !isSignOutPage) {
    return NextResponse.redirect(new URL(ROUTES.DASHBOARD, request.url));
  }

  if (!authToken && isProtectedPage) {
    return NextResponse.redirect(new URL(ROUTES.AUTH.SIGN_IN, request.url));
  }

  if (pathname === ROUTES.HOME) {
    if (authToken) {
      return NextResponse.redirect(new URL(ROUTES.DASHBOARD, request.url));
    } else {
      return NextResponse.redirect(new URL(ROUTES.AUTH.SIGN_IN, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/dashboard/:path*', '/auth/:path*'],
};
