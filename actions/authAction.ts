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
    const res = await fetch("", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
    });
    const data = await res.json();

    // actions/authAction.ts
    if (data.token) {
        const cookieStore = await cookies();

        cookieStore.set("token", data.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
        });

        cookieStore.set("user_role", data.role, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            path: "/",
        });
    }
}
