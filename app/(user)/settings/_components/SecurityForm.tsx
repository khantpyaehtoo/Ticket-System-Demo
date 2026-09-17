"use client";

import { useState } from "react";
import { Input, Form, Button } from "antd";
import { Save } from "lucide-react";
import { usePasswordStrength } from "../_hooks/usePasswordStrength";
import PasswordStrengthIndicator from "./PasswordStep";

export default function SecurityForm() {
    const [password, setPassword] = useState("");
    const strength = usePasswordStrength(password);

    return (
        <div className="space-y-4">
            <div className="space-y-2 border-b-2 border-[#E0E0E0] pb-5 my-10">
                <h1 className="text-2xl text-black">Change Password</h1>
                <p className="text-primary">
                    Ensure your account uses a secure password with at least 12
                    characters.
                </p>
            </div>

            <Form layout="vertical" className="w-full space-y-10!">
                {/* Current Password */}
                <Form.Item
                    name="currentPassword"
                    className="[&_.ant-form-item-label]:w-full [&_label]:w-full"
                    label={
                        <div className="flex justify-between items-center w-full">
                            <span>Current Password</span>
                            <a className="hover:underline!">Forgot Password?</a>
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
                            <span className="font-light tracking-wide text-xs">
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

                {/* Progress Bar + Dynamic Rules  */}
                {password.length > 0 && (
                    <PasswordStrengthIndicator
                        hasMinLen={strength.hasMinLen}
                        hasNumber={strength.hasNumber}
                        hasSymbol={strength.hasSymbol}
                        percent={strength.percent}
                        status={strength.status}
                        color={strength.color}
                    />
                )}

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
                        className="px-3! py-5! h-11 md:h-12 border-none! bg-primary! text-background! hover:bg-secondary! rounded-lg! font-medium text-sm transition-all group flex items-center justify-center gap-1 cursor-pointer"
                    >
                        <Save size={18} />
                        <span>Save Changes</span>
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
