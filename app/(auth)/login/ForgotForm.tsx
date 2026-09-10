"use client";

import { Button, Form, Input } from "antd";
import { ArrowLeft, Info } from "lucide-react";

interface ForgotFormProps {
    onBackToLogin: () => void;
}

export default function ForgotForm({ onBackToLogin }: ForgotFormProps) {
    return (
        <div className="w-full max-w-md mx-auto p-6 md:p-10 flex flex-col justify-center">
            <div className="space-y-2 mb-6 md:mb-8">
                <h1 className="text-xl md:text-2xl font-semibold text-black">
                    Reset your password
                </h1>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                    Enter your email address and we will send you a link to
                    reset your password.
                </p>
            </div>

            <Form name="forgot-password" layout="vertical" requiredMark={false}>
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

                <Form.Item>
                    <Button
                        block
                        htmlType="submit"
                        className="h-11 md:h-12 border-none! bg-primary! text-background! hover:bg-secondary! rounded-xl! font-medium text-sm transition-all cursor-pointer"
                    >
                        Send Reset Link
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

                <div className="flex items-center justify-center gap-2 text-xs text-cancelled mt-6">
                    <Info className="w-4 h-4 shrink-0" />
                    <span className="text-center">
                        Authorized Personnel Only. System activity is logged.
                    </span>
                </div>
            </Form>
        </div>
    );
}
