"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import LoginForm from "./LoginForm";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ForgotForm from "./ForgotForm";

export default function LoginPage() {
    const [view, setView] = useState<"login" | "forgot">("login");
    const containerRef = useRef<HTMLDivElement>(null);
    const formWrapperRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const mm = gsap.matchMedia();

            // Desktop Screen
            mm.add("(min-width: 768px)", () => {
                const tl = gsap.timeline({
                    defaults: { ease: "power3.out", duration: 0.7 },
                });

                tl.from(".intro-header", { y: -20, opacity: 0 })
                    .from(".form-container", { y: 20, opacity: 0 }, "-=0.4")
                    .from(
                        ".connecting-line",
                        { scaleY: 0, duration: 0.8, ease: "power2.inOut" },
                        "-=0.2",
                    )
                    .from(
                        ".stepper-item",
                        { y: 15, opacity: 0, stagger: 0.15 },
                        "-=0.6",
                    );
            });

            // Mobile Screen (Intro Section)
            mm.add("(max-width: 767px)", () => {
                const tl = gsap.timeline({
                    defaults: { ease: "power3.inOut" },
                });

                tl.from(".intro-header", { opacity: 0, y: -20, duration: 0.5 })
                    .from(
                        ".connecting-line",
                        { scaleY: 0, duration: 0.6 },
                        "-=0.2",
                    )
                    .from(
                        ".stepper-item",
                        { opacity: 0, y: 10, stagger: 0.1 },
                        "-=0.4",
                    )

                    // Slide Up
                    .to(
                        ".intro-section",
                        {
                            yPercent: -100,
                            duration: 0.9,
                            ease: "power4.inOut",
                        },
                        "+=0.6",
                    )

                    //  Login Form Entrance
                    .from(
                        ".form-container",
                        {
                            scale: 0.95,
                            opacity: 0,
                            duration: 0.5,
                            ease: "power2.out",
                        },
                        "-=0.3",
                    );
            });

            return () => mm.revert();
        },
        { scope: containerRef },
    );

    // Form Toggle GSAP Animation Switcher
    const handleSwitch = (nextView: "login" | "forgot") => {
        gsap.to(formWrapperRef.current, {
            opacity: 0,
            y: -10,
            duration: 0.2,
            onComplete: () => {
                setView(nextView);
                gsap.to(formWrapperRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                });
            },
        });
    };

    return (
        <div
            ref={containerRef}
            className="relative w-full h-screen overflow-hidden"
        >
            {/* Right/Bottom: Login Form (Mobile) */}
            <div className="form-container w-full h-full md:w-1/2 md:absolute md:right-0 md:top-0 flex items-center justify-center bg-background z-0">
                <div ref={formWrapperRef} className="w-full">
                    {view === "login" ? (
                        <LoginForm
                            onForgotPassword={() => handleSwitch("forgot")}
                        />
                    ) : (
                        <ForgotForm
                            onBackToLogin={() => handleSwitch("login")}
                        />
                    )}
                </div>
            </div>

            {/* Left/Top: Intro Section (Mobile Slide Up) */}
            <div className="intro-section absolute inset-0 md:relative md:inset-auto w-full md:w-1/2 h-full bg-linear-to-b from-primary to-secondary py-8 px-6 md:px-14 flex flex-col  z-10">
                <div className="intro-header">
                    <Image
                        src="/logo&text.svg"
                        alt="digitalbase-logo"
                        width={180}
                        height={40}
                        priority
                    />

                    <div className="mt-6 md:mt-14 space-y-4 md:space-y-6 py-4 md:py-8 border-b border-b-background/40">
                        <div className="bg-background flex justify-center items-center space-x-3 py-1 rounded-full w-fit px-4">
                            <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                            <span className="text-primary text-xs md:text-sm font-medium">
                                Trusted service operations
                            </span>
                        </div>
                        <p className="text-2xl md:text-5xl font-medium bg-linear-to-r from-background to-secondary bg-clip-text text-transparent pb-2">
                            Technical Service Workspace & SLA Management
                        </p>
                        <p className="text-xs md:text-md font-light text-background/90">
                            Manage your service requests, track SLA hours in
                            real-time, and collaborate with our technical team.
                        </p>
                    </div>
                </div>

                {/* Stepper Section */}
                <div className="pt-4 md:pt-8 space-y-4 md:space-y-10 relative">
                    <div className="connecting-line absolute lg:left-4 left-3 top-8 -bottom-4 w-0.5 bg-background -z-0 origin-top" />

                    {[
                        "Service Incident Logged",
                        "Vendor Analysis",
                        "SLA Milestone Check",
                        "Verified Patch Resolved",
                    ].map((step, index) => (
                        <div
                            key={index}
                            className="stepper-item flex items-center space-x-4 relative z-10"
                        >
                            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-background text-primary flex items-center justify-center font-medium text-xs md:text-sm border border-background shrink-0">
                                {index + 1}
                            </div>
                            <span className="text-background text-xs md:text-sm tracking-wider">
                                {step}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
