"use client";

import { useState, useRef, useEffect } from "react";
import { Input, Form, Button } from "antd";
import { Save } from "lucide-react";
import { useRouter } from "next/navigation";
import { usePasswordStrength } from "../_hooks/usePasswordStrength";
import PasswordStrengthIndicator from "./PasswordStep";
import { useNotificationModal } from "@/components/ui/notiModal";
import gsap from "gsap";

interface SecurityFormProps {
    onForgotPasswordClick?: () => void;
}

export default function SecurityForm({
    onForgotPasswordClick,
}: SecurityFormProps) {
    const [form] = Form.useForm();
    const router = useRouter();
    const { showModal, contextHolder } = useNotificationModal();

    const [password, setPassword] = useState("");
    const strength = usePasswordStrength(password);

    // GSAP Animated Container Ref
    const indicatorRef = useRef<HTMLDivElement>(null);
    const hasPassword = password.length > 0;

    // Handle GSAP Smooth Show / Hide Animation
    useEffect(() => {
        if (!indicatorRef.current) return;

        if (hasPassword) {
            // Smooth Expansion & Fade In
            gsap.to(indicatorRef.current, {
                height: "auto",
                opacity: 1,
                marginTop: 16,
                marginBottom: 16,
                duration: 0.4,
                ease: "power2.out",
            });
        } else {
            // Smooth Collapse & Fade Out
            gsap.to(indicatorRef.current, {
                height: 0,
                opacity: 0,
                marginTop: 0,
                marginBottom: 0,
                duration: 0.3,
                ease: "power2.in",
            });
        }
    }, [hasPassword]); // Trigger cleanly on boolean state toggle

    // Handle Update Password
    const handleUpdatePassword = () => {
        showModal({
            title: "Password Updated Successfully!",
            description: "This notification will close in",
        });
    };

    const userEmail = "user@example.com";

    const handleForgotPassword = () => {
        localStorage.setItem("reset_email", userEmail);

        if (onForgotPasswordClick) {
            onForgotPasswordClick();
        } else {
            router.push(
                `/login?view=otp&email=${encodeURIComponent(userEmail)}`,
            );
        }
    };

    return (
        <div className="space-y-4">
            {contextHolder}
            <div className="space-y-2 border-b-2 border-[#E0E0E0] pb-5 my-10">
                <h1 className="text-2xl text-black font-semibold">
                    Change Password
                </h1>
                <p className="text-primary text-sm">
                    Ensure your account uses a secure password with at least 12
                    characters.
                </p>
            </div>

            <Form
                form={form}
                layout="vertical"
                className="w-full space-y-10!"
                onFinish={handleUpdatePassword}
            >
                {/* Current Password */}
                <Form.Item
                    name="currentPassword"
                    className="[&_.ant-form-item-label]:w-full [&_label]:w-full"
                    label={
                        <div className="flex justify-between items-center w-full">
                            <span>Current Password</span>
                            <button
                                type="button"
                                onClick={handleForgotPassword}
                                className="text-primary hover:underline cursor-pointer text-xs font-normal"
                            >
                                Forgot Password?
                            </button>
                        </div>
                    }
                    rules={[
                        {
                            required: true,
                            message: "Please enter current password",
                        },
                    ]}
                >
                    <Input.Password
                        placeholder="Enter your password"
                        className="h-12 bg-[#d4d4d4]/10! border-2! border-[#E0E0E0]! rounded-lg!"
                    />
                </Form.Item>

                {/* New Password Input */}
                <Form.Item
                    name="newPassword"
                    className="[&_.ant-form-item-label]:w-full [&_label]:w-full"
                    label={
                        <div className="flex justify-between items-center w-full">
                            <span>New Password</span>
                            <span className="font-light tracking-wide text-xs text-gray-500">
                                12+ characters, symbols & numbers included
                            </span>
                        </div>
                    }
                    rules={[
                        {
                            required: true,
                            message: "Please enter new password",
                        },
                    ]}
                >
                    <Input.Password
                        placeholder="Enter your new password"
                        className="h-12 bg-[#d4d4d4]/10! border-2! border-[#E0E0E0]! rounded-lg!"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Item>

                {/* GSAP Wrapped Progress Bar + Dynamic Rules */}
                <div
                    ref={indicatorRef}
                    className="h-0 opacity-0 overflow-hidden"
                >
                    <PasswordStrengthIndicator
                        hasMinLen={strength.hasMinLen}
                        hasNumber={strength.hasNumber}
                        hasSymbol={strength.hasSymbol}
                        percent={strength.percent}
                        status={strength.status}
                        color={strength.color}
                    />
                </div>

                {/* Confirm New Password */}
                <Form.Item
                    name="confirmPassword"
                    label="Confirm New Password"
                    dependencies={["newPassword"]}
                    rules={[
                        {
                            required: true,
                            message: "Please confirm your password",
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (
                                    !value ||
                                    getFieldValue("newPassword") === value
                                ) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(
                                    new Error("Passwords do not match!"),
                                );
                            },
                        }),
                    ]}
                >
                    <Input.Password
                        placeholder="Confirm your new password"
                        className="h-12 bg-[#d4d4d4]/10! border-2! border-[#E0E0E0]! rounded-lg!"
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        htmlType="submit"
                        className="px-4! py-5! h-11 md:h-12 border-none! bg-primary! text-white! hover:bg-secondary! rounded-lg! font-medium text-sm transition-all group flex items-center justify-center gap-2 cursor-pointer"
                    >
                        <Save size={18} />
                        <span>Save Changes</span>
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
