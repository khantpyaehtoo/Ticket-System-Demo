"use client";

import { Button, Form, Input } from "antd";
import { ArrowLeft, Key, Lock } from "lucide-react";

interface ResetPasswordFormProps {
    onBackToLogin?: () => void;
    onSuccessSubmit?: (values: { password: string }) => void;
}

export default function ResetPasswordForm({
    onBackToLogin,
    onSuccessSubmit,
}: ResetPasswordFormProps) {
    const [form] = Form.useForm();

    const handleSubmit = (values: { password: string }) => {
        if (onSuccessSubmit) {
            onSuccessSubmit(values);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-6 md:p-8 bg-background border border-zinc-200/50 rounded-2xl shadow-2xl backdrop-blur-md">
            {/* Header Section */}
            <div className="flex justify-center items-center mb-6">
                <p className="h-15 w-15 p-1 rounded-full bg-primary flex items-center justify-center">
                    <Key />
                </p>
            </div>
            <div className="space-y-2 mb-6 text-center md:text-left">
                <h1 className="text-xl md:text-2xl font-semibold text-black">
                    Set New Password
                </h1>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                    Your new password must be different from previously used
                    passwords.
                </p>
            </div>

            <Form
                form={form}
                name="reset_password"
                layout="vertical"
                requiredMark={false}
                onFinish={handleSubmit}
            >
                {/* New Password Input */}
                <Form.Item
                    name="password"
                    label={
                        <span className="text-sm font-medium text-gray-700">
                            New Password
                        </span>
                    }
                    rules={[
                        {
                            required: true,
                            message: "Please enter your new password!",
                        },
                        {
                            min: 8,
                            message: "Password must be at least 8 characters!",
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password
                        prefix={<Lock className="w-4 h-4 text-gray-400 mr-2" />}
                        placeholder="Enter new password"
                        className="h-11 md:h-12 rounded-xl! border-zinc-300! bg-zinc-50! hover:bg-zinc-100! focus:bg-white! transition-all text-sm"
                    />
                </Form.Item>

                {/* Confirm Password Input */}
                <Form.Item
                    name="confirmPassword"
                    label={
                        <span className="text-sm font-medium text-gray-700">
                            Confirm Password
                        </span>
                    }
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: "Please confirm your password!",
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (
                                    !value ||
                                    getFieldValue("password") === value
                                ) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(
                                    new Error(
                                        "The passwords that you entered do not match!",
                                    ),
                                );
                            },
                        }),
                    ]}
                >
                    <Input.Password
                        prefix={<Lock className="w-4 h-4 text-gray-400 mr-2" />}
                        placeholder="Confirm new password"
                        className="h-11 md:h-12 rounded-xl! border-zinc-300! bg-zinc-50! hover:bg-zinc-100! focus:bg-white! transition-all text-sm"
                    />
                </Form.Item>

                {/* Submit Button */}
                <Form.Item className="mt-6 mb-2">
                    <Button block htmlType="submit" className="loginFormBtn!">
                        Reset Password
                    </Button>
                </Form.Item>

                {/* Back to Login */}
                <div className="text-center mt-4">
                    <button
                        type="button"
                        onClick={onBackToLogin}
                        className="inline-flex items-center gap-2 text-xs font-semibold text-gray-600 hover:text-primary transition-colors cursor-pointer"
                    >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>Back to Login</span>
                    </button>
                </div>
            </Form>
        </div>
    );
}
