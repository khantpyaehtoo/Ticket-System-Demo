"use client";

import { useState } from "react";
import Image from "next/image";
import { useAuthAnimation, AuthView } from "./_hooks/useAuthAnimation";
import AuthIntroSection from "./_components/AuthIntroSection";
import AuthFormWrapper from "./_components/AuthFormWrapper";

export default function LoginPage() {
    const [view, setView] = useState<AuthView>("login");
    const [userEmail, setUserEmail] = useState<string>("user@example.com");

    const { containerRef, formWrapperRef, handleSwitch } = useAuthAnimation(
        view,
        setView,
    );

    return (
        <div
            ref={containerRef}
            className="relative w-full h-screen overflow-hidden"
        >
            {view === "login" ? (
                <div className="relative w-full h-full bg-background">
                    {/* Base Layer: Login Form Container */}
                    <div className="form-container w-full h-full md:w-1/2 md:absolute md:right-0 md:top-0 flex items-center justify-center p-6 bg-background z-0">
                        <AuthFormWrapper
                            view={view}
                            userEmail={userEmail}
                            formWrapperRef={formWrapperRef}
                            onSwitchView={handleSwitch}
                            onSetUserEmail={setUserEmail}
                        />
                    </div>
                    {/* Top Layer: Intro Stepper Section */}
                    <AuthIntroSection />
                </div>
            ) : (
                /* Forgot / OTP / Reset Views Container */
                <div className="relative w-full h-full bg-gradient-to-b from-primary to-secondary flex items-center justify-center p-4">
                    <div className="absolute top-0 left-4 py-8 px-10">
                        <Image
                            src="/logo&text.svg"
                            alt="logo"
                            width={180}
                            height={40}
                            priority
                            className="w-auto h-auto"
                        />
                    </div>
                    <AuthFormWrapper
                        view={view}
                        userEmail={userEmail}
                        formWrapperRef={formWrapperRef}
                        onSwitchView={handleSwitch}
                        onSetUserEmail={setUserEmail}
                    />
                </div>
            )}
        </div>
    );
}
