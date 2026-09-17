export const getPasswordStrength = (password: string) => {
    if (!password) return { label: "", color: "" };

    const hasMinLen = password.length >= 12;
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasNumber = /\d/.test(password);

    if (hasMinLen && hasSymbol && hasNumber) {
        return {
            label: "Strong - 12+ characters, symbols & numbers included",
            color: "text-green-500",
        };
    } else if (password.length >= 8) {
        return {
            label: "Medium - Add symbols & numbers for a stronger password",
            color: "text-yellow-500",
        };
    } else {
        return { label: "Weak - Too short", color: "text-red-500" };
    }
};
