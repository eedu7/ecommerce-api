import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';

export function middleware(req: NextRequest) {
    const {pathname} = req.nextUrl;


    if (pathname.startsWith('/admin')) {
        const authToken = req.cookies.get('token');

        if (!authToken) {
            return NextResponse.redirect(new URL('/sign-in', req.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*'],
};
