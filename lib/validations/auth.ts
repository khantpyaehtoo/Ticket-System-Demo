import { z } from "zod";

// 1. Login Schema
export const loginSchema = z.object({
    email: z
        .email("Invalid email address format!")
        .min(1, "Please enter your email!"),
    password: z
        .string()
        .min(1, "Please enter your password!")
        .min(12, "Password must be at least 12 characters!"),
    remember: z.boolean().optional(),
});

// 2. Forgot Password Schema
export const forgotPasswordSchema = z.object({
    email: z
        .string()
        .min(1, "Please enter your email!")
        .email("Invalid email address format!"),
});

// 3. OTP Verification Schema
export const otpSchema = z.object({
    otp: z
        .string()
        .min(1, "Please enter the OTP code!")
        .length(6, "OTP must be exactly 6 digits!"),
});

// 4. New Password / Reset Password Schema
export const newPasswordSchema = z
    .object({
        password: z
            .string()
            .min(1, "Please enter new password!")
            .min(6, "Password must be at least 6 characters!"),
        confirmPassword: z.string().min(1, "Please confirm your password!"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match!",
        path: ["confirmPassword"],
    });
