const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const authService = {
    loginAccount: async (credentials: {
        email: string;
        password: string;
        remember?: boolean;
    }) => {
        const res = await fetch(`${BASE_URL}/api/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
        });
        if (!res.ok) throw new Error("Login failed");
        return res.json();
    },

    requestOtp: async (data: unknown) => {
        const res = await fetch(`${BASE_URL}/api/auth/forgot-password`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("Failed to request OTP");
        return res.json();
    },

    verifyOtp: async (data: unknown) => {
        const res = await fetch(`${BASE_URL}/api/auth/reset-password`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("OTP verification failed");
        return res.json();
    },

    resetPassword: async ({
        newPassword,
        token,
    }: {
        newPassword: string;
        token: string;
    }) => {
        const res = await fetch(`${BASE_URL}/api/auth/reset-password`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ newPassword }),
        });
        if (!res.ok) throw new Error("Password reset failed");
        return res.json();
    },

    changePassword: async ({
        updatePasswords,
        token,
    }: {
        updatePasswords: unknown;
        token: string;
    }) => {
        const res = await fetch(
            `${BASE_URL}api/admin/change-password
`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(updatePasswords),
            },
        );
        if (!res.ok) throw new Error("Password change failed");
        return res.json();
    },
};
