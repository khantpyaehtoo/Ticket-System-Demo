"use client";

import { useState, useRef, useEffect } from "react";
import { Input, Form, Button, Modal, message } from "antd";
import { Mail, KeyRound, AlertCircle, Lock } from "lucide-react";
import { usePasswordStrength } from "../_hooks/usePasswordStrength";
import PasswordStrengthIndicator from "./PasswordStep";
import gsap from "gsap";

interface ResetPasswordModalsProps {
    userEmail: string;
    isConfirmModalOpen: boolean;
    setIsConfirmModalOpen: (open: boolean) => void;
    onSuccess: () => void;
}

export default function ResetPasswordModals({
    userEmail,
    isConfirmModalOpen,
    setIsConfirmModalOpen,
    onSuccess,
}: ResetPasswordModalsProps) {
    const [resetPasswordForm] = Form.useForm();

    const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);
    const [isResetModalOpen, setIsResetModalOpen] = useState(false);

    const [modalPassword, setModalPassword] = useState("");
    const modalPasswordStrength = usePasswordStrength(modalPassword);

    const [otpValue, setOtpValue] = useState("");
    const [isSendingOtp, setIsSendingOtp] = useState(false);
    const [isSubmittingOtp, setIsSubmittingOtp] = useState(false);
    const [isResettingPassword, setIsResettingPassword] = useState(false);

    const modalIndicatorRef = useRef<HTMLDivElement>(null);
    const hasModalPassword = modalPassword.length > 0;

    // Modal Password Strength GSAP Animation
    useEffect(() => {
        if (!modalIndicatorRef.current) return;
        if (hasModalPassword) {
            gsap.to(modalIndicatorRef.current, {
                height: "auto",
                opacity: 1,
                marginTop: 12,
                marginBottom: 12,
                duration: 0.4,
                ease: "power2.out",
            });
        } else {
            gsap.to(modalIndicatorRef.current, {
                height: 0,
                opacity: 0,
                marginTop: 0,
                marginBottom: 0,
                duration: 0.3,
                ease: "power2.in",
            });
        }
    }, [hasModalPassword]);

    // Send OTP Code
    const handleConfirmSendOtp = async () => {
        setIsSendingOtp(true);
        try {
            message.success(`OTP code sent to ${userEmail}`);
            setIsConfirmModalOpen(false);
            setIsOtpModalOpen(true);
        } catch (error) {
            message.error("Failed to send OTP code. Please try again.");
        } finally {
            setIsSendingOtp(false);
        }
    };

    // Verify OTP
    const handleVerifyOtp = async () => {
        if (otpValue.length < 6) {
            message.warning("Please enter 6-digit OTP code!");
            return;
        }

        setIsSubmittingOtp(true);
        try {
            message.success("OTP Verified Successfully!");
            setIsOtpModalOpen(false);
            setOtpValue("");
            setIsResetModalOpen(true);
        } catch (error) {
            message.error("Invalid OTP code. Please try again.");
        } finally {
            setIsSubmittingOtp(false);
        }
    };

    // Reset Password Submit
    const handleResetPasswordSubmit = async () => {
        setIsResettingPassword(true);
        try {
            setIsResetModalOpen(false);
            resetPasswordForm.resetFields();
            setModalPassword("");
            onSuccess();
        } catch (error) {
            message.error("Failed to reset password. Please try again.");
        } finally {
            setIsResettingPassword(false);
        }
    };

    return (
        <>
            {/* STEP 1: Confirmation Modal */}
            <Modal
                title={null}
                footer={null}
                open={isConfirmModalOpen}
                onCancel={() => setIsConfirmModalOpen(false)}
                centered
                width={400}
                className="rounded-2xl overflow-hidden"
            >
                <div className="text-center py-4 px-2 space-y-4">
                    <div className="w-14 h-14 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto text-amber-500">
                        <AlertCircle size={30} />
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-gray-800">
                            Reset Password Request
                        </h2>
                        <p className="text-sm text-gray-600">
                            Are you sure you want to send an OTP verification
                            code to your email?
                        </p>
                        <div className="bg-gray-100 p-2.5 rounded-lg text-xs font-semibold text-gray-700 flex items-center justify-center gap-1.5 mt-2">
                            <Mail size={14} className="text-primary" />
                            {userEmail}
                        </div>
                    </div>

                    <div className="flex gap-3 pt-2">
                        <Button
                            onClick={() => setIsConfirmModalOpen(false)}
                            className="flex-1 h-11 rounded-lg border-gray-300 font-medium cursor-pointer"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="primary"
                            loading={isSendingOtp}
                            onClick={handleConfirmSendOtp}
                            className="flex-1 h-11 bg-primary! hover:bg-secondary! text-white rounded-lg font-medium cursor-pointer"
                        >
                            Send Code
                        </Button>
                    </div>
                </div>
            </Modal>

            {/* STEP 2: OTP Verification Modal */}
            <Modal
                title={null}
                footer={null}
                open={isOtpModalOpen}
                onCancel={() => setIsOtpModalOpen(false)}
                centered
                width={420}
                className="rounded-2xl overflow-hidden"
            >
                <div className="text-center py-4 px-2 space-y-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                        <KeyRound size={28} />
                    </div>

                    <div className="space-y-1">
                        <h2 className="text-xl font-bold text-gray-800">
                            Enter OTP Code
                        </h2>
                        <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                            <Mail size={14} />
                            Code sent to{" "}
                            <span className="font-semibold text-gray-700">
                                {userEmail}
                            </span>
                        </p>
                    </div>

                    <div className="py-3 flex justify-center">
                        <Input.OTP
                            length={6}
                            value={otpValue}
                            onChange={(val) => setOtpValue(val)}
                            formatter={(str) => str.toUpperCase()}
                            size="large"
                            className="[&_input]:h-12! [&_input]:w-11!"
                        />
                    </div>

                    <div className="space-y-3 pt-2">
                        <Button
                            type="primary"
                            loading={isSubmittingOtp}
                            onClick={handleVerifyOtp}
                            className="w-full h-11 bg-primary! hover:bg-secondary! text-white rounded-lg font-medium cursor-pointer"
                        >
                            Verify & Continue
                        </Button>

                        <div className="flex items-center justify-between text-xs text-gray-500 pt-1">
                            <span>Didn't receive code?</span>
                            <button
                                type="button"
                                onClick={handleConfirmSendOtp}
                                className="text-primary hover:underline font-medium cursor-pointer"
                            >
                                Resend OTP
                            </button>
                        </div>
                    </div>
                </div>
            </Modal>

            {/* STEP 3: Reset New Password Modal */}
            <Modal
                title={null}
                footer={null}
                open={isResetModalOpen}
                onCancel={() => setIsResetModalOpen(false)}
                centered
                width={460}
                className="rounded-2xl overflow-hidden"
            >
                <div className="py-4 px-2 space-y-4">
                    <div className="text-center space-y-2">
                        <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto text-primary">
                            <Lock size={28} />
                        </div>
                        <h2 className="text-xl font-bold text-gray-800">
                            Set New Password
                        </h2>
                        <p className="text-xs text-gray-500">
                            Please enter your new password to complete the reset
                            process.
                        </p>
                    </div>

                    <Form
                        form={resetPasswordForm}
                        layout="vertical"
                        onFinish={handleResetPasswordSubmit}
                        className="pt-2"
                    >
                        <Form.Item
                            name="newPassword"
                            label="New Password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter new password",
                                },
                            ]}
                        >
                            <Input.Password
                                placeholder="Enter new password"
                                className="h-12 bg-[#d4d4d4]/10! border-2! border-[#E0E0E0]! rounded-lg!"
                                onChange={(e) =>
                                    setModalPassword(e.target.value)
                                }
                            />
                        </Form.Item>

                        <div
                            ref={modalIndicatorRef}
                            className="h-0 opacity-0 overflow-hidden"
                        >
                            <PasswordStrengthIndicator
                                hasMinLen={modalPasswordStrength.hasMinLen}
                                hasNumber={modalPasswordStrength.hasNumber}
                                hasSymbol={modalPasswordStrength.hasSymbol}
                                percent={modalPasswordStrength.percent}
                                status={modalPasswordStrength.status}
                                color={modalPasswordStrength.color}
                            />
                        </div>

                        <Form.Item
                            name="confirmPassword"
                            label="Confirm New Password"
                            dependencies={["newPassword"]}
                            rules={[
                                {
                                    required: true,
                                    message: "Please confirm your new password",
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (
                                            !value ||
                                            getFieldValue("newPassword") ===
                                                value
                                        ) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(
                                            new Error(
                                                "Passwords do not match!",
                                            ),
                                        );
                                    },
                                }),
                            ]}
                        >
                            <Input.Password
                                placeholder="Confirm new password"
                                className="h-12 bg-[#d4d4d4]/10! border-2! border-[#E0E0E0]! rounded-lg!"
                            />
                        </Form.Item>

                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={isResettingPassword}
                            className="w-full h-11 bg-primary! hover:bg-secondary! text-white rounded-lg font-medium cursor-pointer mt-2"
                        >
                            Update Password
                        </Button>
                    </Form>
                </div>
            </Modal>
        </>
    );
}
