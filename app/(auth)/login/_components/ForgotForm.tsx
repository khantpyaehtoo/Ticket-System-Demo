"use client";

import { useState } from "react";
import { Button, Form, Input, message } from "antd";
import { ArrowLeft, LockKeyholeIcon } from "lucide-react";

export interface ForgotInput {
    email: string;
}

export interface ForgotFormProps {
    onBackToLogin: () => void;
    onSuccessSubmit: (email: string) => void;
}

export default function ForgotForm({
    onBackToLogin,
    onSuccessSubmit,
}: ForgotFormProps) {
    const [loading, setLoading] = useState(false);

    const handleFinish = async (values: ForgotInput) => {
        setLoading(true);

        try {
            // TODO: Server Action
            // await sendOtpAction(values.email);

            message.success(
                "OTP verification code has been sent to your email!",
            );

            onSuccessSubmit(values.email);
        } catch (error: unknown) {
            const err = error as Error;
            message.error(
                err?.message || "Failed to send OTP. Please try again.",
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-6 md:p-8 bg-background border border-zinc-200/50 rounded-2xl shadow-2xl backdrop-blur-md">
            <div className="flex justify-center items-center mb-6">
                <p className="h-15 w-15 p-1 rounded-full bg-primary flex items-center justify-center text-white">
                    <LockKeyholeIcon className="w-8 h-8" />
                </p>
            </div>

            <div className="space-y-2 mb-6 text-center">
                <h1 className="text-xl md:text-2xl font-semibold text-black">
                    Reset your password
                </h1>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                    Enter your email address and we&apos;ll send you a secure
                    verification code to reset your password.
                </p>
            </div>

            <Form
                name="forgot"
                layout="vertical"
                requiredMark={false}
                onFinish={handleFinish}
            >
                <Form.Item
                    name="email"
                    label={
                        <span className="text-sm font-medium text-gray-700">
                            Email Address
                        </span>
                    }
                    rules={[
                        {
                            required: true,
                            message: "Please enter your email address!",
                        },
                        {
                            type: "email",
                            message: "Please enter a valid email address!",
                        },
                    ]}
                >
                    <Input
                        type="email"
                        placeholder="Enter your registered email"
                        className="h-11 md:h-12 rounded-xl! border-zinc-300! bg-zinc-50! hover:bg-zinc-100! focus:bg-white! transition-all"
                    />
                </Form.Item>

                <Form.Item className="mt-6 mb-2">
                    <Button
                        block
                        htmlType="submit"
                        loading={loading}
                        className="loginFormBtn!"
                    >
                        Send OTP Code
                    </Button>
                </Form.Item>

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
