"use server";

import { cookies } from "next/headers";
import { loginSchema } from "@/lib/validations/auth";
import { redirect } from "next/navigation";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function signOut() {
    const cookieStore = await cookies();
    cookieStore.delete("accessToken");
    cookieStore.delete("role");
    redirect("/login");
}

// 2. Login Action
export async function loginAction(formData: {
    email: string;
    password: string;
    rememberMe?: boolean;
}) {
    const validation = loginSchema.safeParse({
        email: formData.email,
        password: formData.password,
        remember: formData.rememberMe,
    });

    if (!validation.success) {
        throw new Error("Invalid form data submitted.");
    }

    const { email, password, remember } = validation.data;
    const THIRTY_DAYS = 30 * 24 * 60 * 60;
    const cookieMaxAge = remember ? THIRTY_DAYS : undefined;

    const res = await fetch(`${BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
        throw new Error("Invalid credentials");
    }

    const data = await res.json();
    let targetPath = "/user/dashboard";

    if (data.accessToken) {
        const cookieStore = await cookies();

        cookieStore.set("accessToken", data.accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: cookieMaxAge,
        });

        cookieStore.set("role", data.role, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: cookieMaxAge,
        });

        if (data.role === "ADMIN") {
            targetPath = "/admin/dashboard";
        } else if (data.role === "TEAM") {
            targetPath = "/team/main";
        } else {
            targetPath = "/user/dashboard";
        }
    }

    return {
        success: true,
        targetPath,
        role: data.role,
        accessToken: data.accessToken,
    };
}

export async function changePasswordAction(updatePasswords: unknown) {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) {
        throw new Error("Unauthorized");
    }

    const res = await fetch(`${BASE_URL}/api/admin/change-password`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatePasswords),
    });

    if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.message || "Password change failed");
    }

    return res.json();
}
