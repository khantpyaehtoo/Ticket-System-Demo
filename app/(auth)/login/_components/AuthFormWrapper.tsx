import { RefObject, useState } from "react";
import LoginForm from "./LoginForm";
import ForgotForm from "./ForgotForm";
import OtpForm from "./OtpForm";
import ResetPasswordForm from "./ResetPassFrom";
import SuccessForm from "./SuccessForm";
import { AuthView } from "../_hooks/useAuthAnimation";
import { message } from "antd";
import {
    useRequestOtpMutation,
    useVerifyOtpMutation,
    useResetPasswordMutation,
} from "../_hooks/useAuthQuries";

interface AuthFormWrapperProps {
    view: AuthView;
    userEmail: string;
    formWrapperRef: RefObject<HTMLDivElement | null>;
    onSwitchView: (nextView: AuthView) => void;
    onSetUserEmail: (email: string) => void;
}

export default function AuthFormWrapper({
    view,
    userEmail,
    formWrapperRef,
    onSwitchView,
    onSetUserEmail,
}: AuthFormWrapperProps) {
    const { mutate: requestOtp, isPending: isRequestingOtp } =
        useRequestOtpMutation();
    const { mutate: verifyOtp, isPending: isVerifyingOtp } =
        useVerifyOtpMutation();
    const { mutate: resetPassword, isPending: isResetting } =
        useResetPasswordMutation();

    // Local state for token
    const [resetToken, setResetToken] = useState("");

    // 2. Forgot Password Handler
    const handleForgotSubmit = (email: string) => {
        requestOtp(
            { email },
            {
                onSuccess: () => {
                    message.success("OTP code sent to your email!");
                    onSetUserEmail(email);
                    onSwitchView("otp");
                },
                onError: (err) => {
                    message.error(err?.message || "Failed to send OTP.");
                },
            },
        );
    };

    // 3. OTP Verify Handler
    const handleVerifyOtp = (otpCode: string) => {
        verifyOtp(
            { email: userEmail, otp: otpCode },
            {
                onSuccess: (data) => {
                    message.success("OTP verified successfully!");
                    if (data?.token) {
                        setResetToken(data.token);
                    }
                    onSwitchView("reset-password");
                },
                onError: (err) => {
                    message.error(err?.message || "Invalid OTP code.");
                },
            },
        );
    };

    // 4. Reset Password Handler
    const handleResetPassword = (values: { password: string }) => {
        resetPassword(
            { newPassword: values.password, token: resetToken },
            {
                onSuccess: () => {
                    message.success("Password reset successfully!");
                    onSwitchView("success");
                },
                onError: (err) => {
                    message.error(err?.message || "Failed to reset password.");
                },
            },
        );
    };

    return (
        <div
            ref={formWrapperRef}
            className="w-full max-w-md my-auto flex flex-col justify-center will-change-transform"
        >
            {view === "login" && (
                <LoginForm onForgotPassword={() => onSwitchView("forgot")} />
            )}

            {view === "forgot" && (
                <ForgotForm
                    loading={isRequestingOtp}
                    onBackToLogin={() => onSwitchView("login")}
                    onSuccessSubmit={handleForgotSubmit}
                />
            )}

            {view === "otp" && (
                <OtpForm
                    email={userEmail}
                    loading={isVerifyingOtp}
                    onBackToLogin={() => onSwitchView("forgot")}
                    onSuccessSubmit={handleVerifyOtp}
                    onResendOtp={() => handleForgotSubmit(userEmail)}
                />
            )}

            {view === "reset-password" && (
                <ResetPasswordForm
                    loading={isResetting}
                    onBackToLogin={() => onSwitchView("login")}
                    onSuccessSubmit={handleResetPassword}
                />
            )}

            {view === "success" && (
                <SuccessForm onBackToLogin={() => onSwitchView("login")} />
            )}
        </div>
    );
}
