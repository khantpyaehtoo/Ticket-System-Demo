const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

async function apiFetch<T>(
    endpoint: string,
    options: RequestInit = {},
): Promise<T> {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
    });

    if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(
            errorData.message || `Request failed with status ${res.status}`,
        );
    }

    return res.json();
}

export const authService = {
    requestOtp: async (data: { email: string }) => {
        return apiFetch("/api/auth/forgot-password", {
            method: "POST",
            body: JSON.stringify(data),
        });
    },

    verifyOtp: async (data: { email: string; otp: string }) => {
        return apiFetch("/api/auth/verify-otp", {
            method: "POST",
            body: JSON.stringify(data),
        });
    },

    resetPassword: async ({
        newPassword,
        token,
    }: {
        newPassword: string;
        token: string;
    }) => {
        return apiFetch("/api/auth/reset-password", {
            method: "POST",
            body: JSON.stringify({ token, newPassword }),
        });
    },
};
