"use client";

import { useState, useEffect } from "react";
import { Button, Form, Input } from "antd";
import { ArrowLeft, MailOpen, RotateCw } from "lucide-react";
import { useSearchParams } from "next/navigation";

interface OtpFormProps {
    email?: string | { email: string };
    onBackToLogin?: () => void;
    onSuccessSubmit?: (otp: string) => void;
    onResendOtp?: () => void;
}

export default function OtpForm({
    email: propEmail = "user@example.com",
    onBackToLogin,
    onSuccessSubmit,
    onResendOtp,
}: OtpFormProps) {
    const [form] = Form.useForm();
    const [timer, setTimer] = useState<number>(60);
    const [canResend, setCanResend] = useState<boolean>(false);

    const searchParams = useSearchParams();

    const queryEmail = searchParams.get("email");

    const rawEmail = queryEmail || propEmail;

    const displayEmail =
        typeof rawEmail === "object" ? rawEmail.email : rawEmail;

    // Resend Countdown Timer Logic
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else {
            setCanResend(true);
        }
        return () => clearInterval(interval);
    }, [timer]);

    const handleResend = () => {
        if (!canResend) return;
        setTimer(60);
        setCanResend(false);
        if (onResendOtp) onResendOtp();
    };

    const handleSubmit = (values: { otp: string }) => {
        if (onSuccessSubmit) {
            onSuccessSubmit(values.otp);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto p-6 md:p-8 bg-background border border-zinc-200/50 rounded-2xl shadow-2xl backdrop-blur-md">
            {/* Header Section */}
            <div className="flex justify-center items-center mb-6">
                <p className="h-15 w-15 p-1 rounded-full bg-primary flex items-center justify-center text-white">
                    <MailOpen className="w-7 h-7" />
                </p>
            </div>
            <div className="space-y-2 mb-6 text-center md:text-left">
                <h1 className="text-xl md:text-2xl font-semibold text-black">
                    Enter OTP Code
                </h1>
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                    We&apos;ve sent a 6-digit verification code to{" "}
                    <span className="font-semibold text-black">
                        {displayEmail}
                    </span>
                    .
                </p>
            </div>

            <Form
                form={form}
                name="otp"
                layout="vertical"
                requiredMark={false}
                onFinish={handleSubmit}
            >
                {/* AntD OTP Input Component */}
                <Form.Item
                    name="otp"
                    rules={[
                        {
                            required: true,
                            message: "Please enter the OTP code!",
                        },
                        { len: 6, message: "OTP must be 6 digits!" },
                    ]}
                    className="flex justify-center mb-4"
                >
                    <Input.OTP
                        length={6}
                        formatter={(str) => str.toUpperCase()}
                        className="*:h-11! *:w-10! md:*:h-12! md:*:w-12! *:rounded-xl! *:border-zinc-300! *:bg-zinc-50! *:hover:bg-zinc-100! *:focus:bg-white! *:transition-all *:text-center *:text-base! *:font-bold!"
                    />
                </Form.Item>

                {/* Resend Timer Logic */}
                <div className="flex items-center justify-between text-xs my-4 px-1">
                    <span className="text-gray-500">
                        Didn&apos;t receive the code?
                    </span>
                    {canResend ? (
                        <button
                            type="button"
                            onClick={handleResend}
                            className="inline-flex items-center gap-1 font-semibold text-primary hover:underline cursor-pointer"
                        >
                            <RotateCw className="w-3 h-3" />
                            <span>Resend Code</span>
                        </button>
                    ) : (
                        <span className="text-gray-400 font-medium">
                            Resend in {timer}s
                        </span>
                    )}
                </div>

                {/* Submit Button */}
                <Form.Item className="mt-6 mb-2">
                    <Button block htmlType="submit" className="loginFormBtn!">
                        Verify & Continue
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
                        <span>Back to reset</span>
                    </button>
                </div>
            </Form>
        </div>
    );
}
