import { NextResponse } from 'next/server';

export function proxy(request) {
  const authCookie = request.cookies.get('auth');
  const url = request.nextUrl.clone(); 

  if (!authCookie) {
    const loginUrl = new URL('/login', request.url);

    loginUrl.searchParams.set('redirect', request.nextUrl.pathname); 
    
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/cart'],
};