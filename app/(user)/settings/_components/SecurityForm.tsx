"use client";

import { Button, Form, Input } from "antd";
import { Save } from "lucide-react";
import { useState } from "react";
import { getPasswordStrength } from "../_hooks/getPasswordStrength";

export default function SecurityForm() {
    const [password, setPassword] = useState("");
    const strength = getPasswordStrength(password);

    return (
        <div className="space-y-4">
            <div className="space-y-2 border-b-2 border-[#E0E0E0] pb-5">
                <h1 className="text-2xl text-black">Change Password</h1>
                <p className="text-primary">
                    Ensure your account uses a secure password with at least 12
                    characters.
                </p>
            </div>

            <Form layout="vertical" className="space-y-12!">
                <Form.Item
                    name="password"
                    label="Current Password"
                    rules={[
                        { required: true, message: "Password " },
                        { min: 12, message: "minimal 12 chars" },
                        {
                            pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])/,
                            message: "must be includes special chars",
                        },
                    ]}
                >
                    <Input.Password
                        placeholder="Enter your password"
                        className="h-12 rounded-lg! bg-[#d4d4d4]/10! border-2! border-[#E0E0E0]! "
                    />
                </Form.Item>

                <Form.Item
                    name="new-password"
                    className="[&_.ant-form-item-label]:w-full [&_label]:w-full"
                    label={
                        <div className="flex justify-between items-center w-full">
                            <span>New Password</span>
                            <span
                                className={`font-light tracking-wide text-xs ${strength.color}`}
                            >
                                {strength.label ||
                                    "Strong - 12+ characters, symbols & numbers included"}
                            </span>
                        </div>
                    }
                    rules={[
                        { required: true, message: "Password " },
                        { min: 12, message: "minimal 12 chars" },
                        {
                            pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])/,
                            message: "must be includes special chars",
                        },
                    ]}
                >
                    <Input.Password
                        placeholder="Enter your new password"
                        className="h-12 rounded-lg! bg-[#d4d4d4]/10! border-2! border-[#E0E0E0]!"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    name="confirm-password"
                    label="Confirm New Password"
                    rules={[
                        { required: true, message: "Password " },
                        { min: 12, message: "minimal 12 chars" },
                        // {
                        //     pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])/,
                        //     message: "must be includes special chars",
                        // },
                    ]}
                >
                    <Input.Password
                        placeholder="Confirm your new password"
                        className="h-12 rounded-lg! bg-[#d4d4d4]/10! border-2! border-[#E0E0E0]!"
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        htmlType="submit"
                        className="px-3! py-5! h-11 md:h-12 border-none! bg-primary! text-background! hover:bg-secondary! rounded-lg! font-medium text-sm transition-all group flex items-center justify-center gap-1 cursor-pointer"
                    >
                        <Save size="20px" /> <span>Save Changes</span>
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
