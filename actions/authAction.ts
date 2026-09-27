"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signOut() {
    const cookieStore = await cookies();
    cookieStore.delete("token");
    cookieStore.delete("user_role");
    redirect("/login");
}

export async function loginAction(formData: FormData) {
    let targetPath = "";
    const rememberMe = formData.get("rememberMe") === "on";

    // (30 days * 24 hours * 60 mins * 60 secs)
    const THIRTY_DAYS = 30 * 24 * 60 * 60;

    // 1 day
    const cookieMaxAge = rememberMe ? THIRTY_DAYS : undefined;

    const res = await fetch("", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
    });

    const data = await res.json();

    if (data.token) {
        const cookieStore = await cookies();

        cookieStore.set("token", data.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
            maxAge: cookieMaxAge,
        });

        cookieStore.set("user_role", data.role, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
            maxAge: cookieMaxAge,
        });

        if (data.role === "ADMIN") {
            targetPath = "/admin/dashboard";
        } else if (data.role === "TEAM") {
            targetPath = "/team/dashboard";
        } else {
            targetPath = "/user/dashboard";
        }
    }

    if (targetPath) {
        redirect(targetPath);
    }
}
