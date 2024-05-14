import { NextRequest, NextResponse } from 'next/server'


export async function middleware(request: NextRequest, response: NextResponse) {
    const { url, cookies } = request

    const refreshToken = cookies.get("refresh_token")?.value

    const isAuthPage = (url.endsWith("/login") || url.endsWith("/registration"))

    if (isAuthPage && refreshToken) {
        return NextResponse.redirect(new URL("/", url))
    }

    if (isAuthPage) {
        return NextResponse.next()
    }

    if (!refreshToken) {
        return NextResponse.redirect(new URL('/auth/login', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/account/:path*', '/belbin/:path*', '/resume/:path*', '/auth/login', '/auth/registration']
}
