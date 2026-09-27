"use client";

import { useState, useRef, useEffect } from "react";
import { Input, Form, Button } from "antd";
import { Save } from "lucide-react";
import { usePasswordStrength } from "../_hooks/usePasswordStrength";
import PasswordStrengthIndicator from "./PasswordStep";
import gsap from "gsap";
import { useAppModal } from "@/hooks/useAppModal";
import ResetPasswordModals from "./ResetPasswordModal";

interface SecurityFormProps {
    onForgotPasswordClick?: () => void;
    userEmail?: string;
}

export default function SecurityForm({
    onForgotPasswordClick,
    userEmail = "user@example.com",
}: SecurityFormProps) {
    const [form] = Form.useForm();
    const { showModal, contextHolder } = useAppModal();

    // Password Strength
    const [password, setPassword] = useState("");
    const strength = usePasswordStrength(password);

    // Modal Trigger State
    const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

    const indicatorRef = useRef<HTMLDivElement>(null);
    const hasPassword = password.length > 0;

    // Main Form Password Animation
    useEffect(() => {
        if (!indicatorRef.current) return;
        if (hasPassword) {
            gsap.to(indicatorRef.current, {
                height: "auto",
                opacity: 1,
                marginTop: 16,
                marginBottom: 16,
                duration: 0.4,
                ease: "power2.out",
            });
        } else {
            gsap.to(indicatorRef.current, {
                height: 0,
                opacity: 0,
                marginTop: 0,
                marginBottom: 0,
                duration: 0.3,
                ease: "power2.in",
            });
        }
    }, [hasPassword]);

    const handleUpdatePassword = () => {
        showModal({
            variant: "notification",
            title: "Password Updated Successfully!",
            type: "success",
        });
    };

    const handleForgotClick = () => {
        setIsConfirmModalOpen(true);
        if (onForgotPasswordClick) {
            onForgotPasswordClick();
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
                className="w-full"
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
                                onClick={handleForgotClick}
                                className="text-primary hover:underline hover:text-secondary cursor-pointer text-xs font-normal"
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
                            <span className="font-light tracking-wide text-xs text-gray-500 text-end">
                                12+ characters
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
                        className="h-12! bg-[#d4d4d4]/10! border-2! border-[#E0E0E0]! rounded-lg!"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Item>

                {/* GSAP Password Strength Indicator */}
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
                        className="px-4! py-5! h-11 md:h-12 border-none! bg-primary! text-white! hover:bg-secondary! rounded-lg! font-medium text-sm transition-all group flex items-center justify-center gap-2 cursor-pointer mt-2!"
                    >
                        <Save size={18} />
                        <span>Save Changes</span>
                    </Button>
                </Form.Item>
            </Form>

            <ResetPasswordModals
                userEmail={userEmail}
                isConfirmModalOpen={isConfirmModalOpen}
                setIsConfirmModalOpen={setIsConfirmModalOpen}
                onSuccess={() => {
                    showModal({
                        variant: "notification",
                        title: "Password Reset Successfully!",
                        type: "success",
                    });
                }}
            />
        </div>
    );
}
