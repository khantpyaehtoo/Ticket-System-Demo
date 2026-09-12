"use client";

import { Button, Form, Input } from "antd";
import { ArrowLeft, Info } from "lucide-react";

export interface ForgotFormProps {
    onBackToLogin: () => void;
    onSuccessSubmit: () => void; // OTP
}

export default function ForgotForm({
    onBackToLogin,
    onSuccessSubmit,
}: ForgotFormProps) {
    return (
        <div className="w-full max-w-md mx-auto p-6 md:p-8 bg-background border border-zinc-200/50 rounded-2xl shadow-2xl backdrop-blur-md">
            <div className="space-y-2 mb-6">
                <h1 className="text-xl md:text-2xl font-semibold text-black">
                    Reset Password
                </h1>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                    Enter your email address and we&apos;ll send you an OTP code
                    to reset your password.
                </p>
            </div>

            <Form
                name="forgot"
                layout="vertical"
                requiredMark={false}
                onFinish={onSuccessSubmit}
            >
                <Form.Item
                    name="email"
                    label={
                        <span className="text-sm font-medium text-gray-700">
                            Email Address
                        </span>
                    }
                    rules={[
                        { required: true, message: "Please enter your email!" },
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
                        className="h-11 md:h-12 border-none! bg-primary! text-background! hover:bg-secondary! rounded-xl! font-medium text-sm transition-all cursor-pointer"
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

                <div className="flex items-center justify-center gap-2 text-xs text-gray-400 mt-6 pt-4 border-t border-zinc-100">
                    <Info className="w-4 h-4 shrink-0" />
                    <span className="text-center">
                        Authorized Personnel Only.
                    </span>
                </div>
            </Form>
        </div>
    );
}
