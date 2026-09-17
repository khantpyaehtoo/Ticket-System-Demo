// utils/password.ts

export type PasswordStrengthResult = {
    hasMinLen: boolean;
    hasNumber: boolean;
    hasSymbol: boolean;
    percent: number;
    status: "Weak" | "Medium" | "Strong";
    color: string;
};

export const usePasswordStrength = (
    password: string,
): PasswordStrengthResult => {
    const hasMinLen = password.length >= 12;
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[^A-Za-z0-9]/.test(password);

    const passedCount = [hasMinLen, hasNumber, hasSymbol].filter(
        Boolean,
    ).length;
    const percent = Math.floor((passedCount / 3) * 100);

    let status: "Weak" | "Medium" | "Strong" = "Weak";
    let color = "#ff4d4f"; // Red

    if (percent === 100) {
        status = "Strong";
        color = "#52c41a"; // Green
    } else if (percent >= 66) {
        status = "Medium";
        color = "#faad14"; // Yellow
    }

    return {
        hasMinLen,
        hasNumber,
        hasSymbol,
        percent,
        status,
        color,
    };
};
