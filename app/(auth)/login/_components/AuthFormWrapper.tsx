"use client";

import { RefObject } from "react";
import LoginForm from "./LoginForm";
import ForgotForm from "./ForgotForm";
import OtpForm from "./OtpForm";
import ResetPasswordForm from "./ResetPassFrom";
import { AuthView } from "../_hooks/useAuthAnimation";
import SuccessForm from "./SuccessForm";

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
                    onBackToLogin={() => onSwitchView("login")}
                    onSuccessSubmit={(email) => {
                        onSetUserEmail(email);
                        onSwitchView("otp");
                    }}
                />
            )}

            {view === "otp" && (
                <OtpForm
                    // email={userEmail}
                    email={userEmail.email}
                    onBackToLogin={() => onSwitchView("forgot")}
                    onSuccessSubmit={() => onSwitchView("reset-password")}
                    onResendOtp={() => {
                        console.log("Resending OTP code to:", userEmail);
                    }}
                />
            )}

            {view === "reset-password" && (
                <ResetPasswordForm
                    onBackToLogin={() => onSwitchView("login")}
                    onSuccessSubmit={() => {
                        onSwitchView("success");
                    }}
                />
            )}

            {view === "success" && (
                <SuccessForm onBackToLogin={() => onSwitchView("login")} />
            )}
        </div>
    );
}
