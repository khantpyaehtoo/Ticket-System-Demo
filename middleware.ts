import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    console.log("Middleware Running on Path:", request.nextUrl.pathname);

    const token = request.cookies.get("token")?.value;
    const userRole = request.cookies.get("role")?.value; // 'USER' | 'TEAM' | 'ADMIN'

    // Protected Routes
    const isUserRoute = pathname.startsWith("/user");
    const isTeamRoute = pathname.startsWith("/team");
    const isAdminRoute = pathname.startsWith("/admin");

    // if ((isUserRoute || isTeamRoute || isAdminRoute) && !token) {
    //     return NextResponse.redirect(new URL("/login", request.url));
    // }

    // if (isUserRoute && userRole !== "USER") {
    //     return NextResponse.redirect(new URL("/unauthorized", request.url));
    // }

    // if (isTeamRoute && userRole !== "TEAM") {
    //     return NextResponse.redirect(new URL("/unauthorized", request.url));
    // }

    // if (isAdminRoute && userRole !== "ADMIN") {
    //     return NextResponse.redirect(new URL("/unauthorized", request.url));
    // }

    // return NextResponse.next();
}

// Matcher Config
// export const config = {
//     matcher: ["/user/:path*", "/team/:path*", "/admin/:path*"],
// };
