// import { withAuth } from 'next-auth/middleware';

// export default withAuth({
//   pages: {
//     signIn: '/login',
//   },
// });

// export const config = {
//   matcher: ['/dashboard/:path*'],
// };
// middleware.ts (di root project)
import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const { pathname } = req.nextUrl
    // Guard untuk halaman /verify-otp
    if (pathname.startsWith('/verify-otp')) {
      // Jika sudah login, redirect ke dashboard
      if (token) {
        return NextResponse.redirect(new URL('/dashboard', req.url))
      }
      
      // Jika belum login, cek apakah ada email di cookie/header
      // Karena Redux state tidak tersedia di middleware, kita pakai cookie
      const otpEmail = req.cookies.get('otp-email')?.value
      // console.log(req.cookies)
      
      // Jika tidak ada email di cookie, redirect ke login
      if (!otpEmail || otpEmail.trim() === '') {
        return NextResponse.redirect(new URL('/login', req.url))
      }
      
      // Jika tidak ada token tapi ada email, izinkan akses
      return NextResponse.next()
    }
    
    // Guard untuk halaman dashboard (perlu login)
    if (pathname.startsWith('/dashboard')) {
      if (!token) {
        return NextResponse.redirect(new URL('/login', req.url))
      }
    }
    
    // Guard untuk halaman login (redirect jika sudah login)
    if (pathname.startsWith('/login')) {
      if (token) {
        return NextResponse.redirect(new URL('/dashboard', req.url))
      }
    }
    
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: () => true, // Kita handle authorization di dalam middleware
    },
  }
)

export const config = {
  matcher: [
    '/verify-otp/:path*',
    '/dashboard/:path*', 
    '/login/:path*'
  ]
}