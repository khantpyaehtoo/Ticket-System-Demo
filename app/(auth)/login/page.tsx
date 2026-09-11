"use client";

import { useState, useRef, useCallback } from "react";

import Image from "next/image";

import LoginForm from "./LoginForm";

import ForgotForm from "./ForgotForm";

import gsap from "gsap";

import { useGSAP } from "@gsap/react";

type AuthView = "login" | "forgot" | "otp" | "reset-password";

export default function LoginPage() {
    const [view, setView] = useState<AuthView>("login");

    const containerRef = useRef<HTMLDivElement>(null);

    const formWrapperRef = useRef<HTMLDivElement>(null);

    // GSAP Initial Animation (When view is "login")

    useGSAP(
        () => {
            // view က login မဟုတ်ရင် initial GSAP animation တွေကို skip လုပ်မည်

            if (view !== "login") return;
            const mm = gsap.matchMedia();

            // 1. Desktop Animation
            mm.add("(min-width: 768px)", (context) => {
                const { selector } = context;
                const introHeader = selector?.(".intro-header");
                const line = selector?.(".connecting-line");
                const steps = selector?.(".stepper-item");
                const form = selector?.(".form-container");

                if (!introHeader?.length) return; // Element Animation

                const tl = gsap.timeline({
                    defaults: { ease: "power3.out", duration: 0.7 },
                });

                tl.from(introHeader, { y: -20, opacity: 0 })

                    .from(
                        line,
                        { scaleY: 0, duration: 0.8, ease: "power2.inOut" },
                        "-=0.2",
                    )
                    .from(steps, { y: 15, opacity: 0, stagger: 0.15 }, "-=0.6")
                    .from(form, { y: 20, opacity: 0 }, "-=0.4");
            });

            // 2. Mobile Screen Curtain Slide Animation

            mm.add("(max-width: 767px)", (context) => {
                const { selector } = context;
                const introHeader = selector?.(".intro-header");
                const line = selector?.(".connecting-line");
                const steps = selector?.(".stepper-item");
                const introSection = selector?.(".intro-section");
                const form = selector?.(".form-container");

                if (!introSection?.length) return;

                const tl = gsap.timeline({
                    defaults: { ease: "power3.inOut" },
                });

                tl.from(introHeader, { opacity: 0, y: -20, duration: 0.5 })
                    .from(line, { scaleY: 0, duration: 0.6 }, "-=0.2")
                    .from(steps, { opacity: 0, y: 10, stagger: 0.1 }, "-=0.4")

                    // Intro Section Curtain Slide
                    .to(
                        introSection,
                        {
                            yPercent: -100,
                            duration: 0.9,
                            ease: "power4.inOut",
                        },
                        "+=0.6",
                    )

                    .from(
                        form,
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

        { scope: containerRef, dependencies: [] },
    );

    // Form View Switching (Login <-> Forgot) Smooth Transition Handler

    const handleSwitch = useCallback(
        (nextView: AuthView) => {
            if (!formWrapperRef.current) return;

            if (view === "login" && nextView === "forgot") {
                // Login -> Forgot Transition

                const tl = gsap.timeline({
                    defaults: { ease: "power3.inOut" },
                });

                tl.to(
                    [
                        formWrapperRef.current,
                        ".intro-content",
                        ".stepper-item",
                        ".connecting-line",
                    ],

                    {
                        opacity: 0,
                        y: -15,
                        duration: 0.45,
                        stagger: 0.02,
                        ease: "expo.inOut",
                    },

                    "-=0.45",
                )

                    .to(".intro-section", {
                        width: "100%",
                        duration: 0.45,
                        ease: "expo.inOut",
                    })

                    .add(() => {
                        setView(nextView);

                        requestAnimationFrame(() => {
                            gsap.fromTo(
                                formWrapperRef.current,

                                { opacity: 0, y: 35 },
                                {
                                    opacity: 1,
                                    y: 0,
                                    duration: 0.5,
                                    ease: "power3.out",
                                    clearProps: "all",
                                },
                            );
                        });
                    });
            } else if (view === "forgot" && nextView === "login") {
                const isDesktop = window.innerWidth >= 768;

                if (isDesktop) {
                    setView(nextView);

                    // 2. React Render finished ? Animation requestAnimationFrame

                    requestAnimationFrame(() => {
                        const tl = gsap.timeline({
                            defaults: { ease: "power2.inOut" },
                        });

                        // Layout Width 100% to 50%

                        tl.fromTo(
                            ".intro-section",
                            { width: "100%" },
                            {
                                width: "50%",
                                duration: 0.75,
                                ease: "expo.inOut",
                            },
                        )

                            // Left Intro Content

                            .fromTo(
                                [
                                    ".intro-content",
                                    ".connecting-line",
                                    ".stepper-item",
                                ],

                                { opacity: 0, x: -30 },

                                {
                                    opacity: 1,
                                    x: 0,
                                    duration: 0.5,
                                    stagger: 0.08,
                                    ease: "power2.out",
                                    clearProps: "all",
                                },

                                "-=0.55",
                            )

                            // Right Form Container R to L Smooth Slide In

                            .fromTo(
                                formWrapperRef.current,

                                { opacity: 0, x: 40 },

                                {
                                    opacity: 1,
                                    x: 0,
                                    duration: 0.45,
                                    ease: "power3.out",
                                    clearProps: "all",
                                },

                                "-=0.45",
                            );
                    });
                } else {
                    // Mobile View
                    gsap.to(formWrapperRef.current, {
                        opacity: 0,
                        y: -20,
                        duration: 0.2,

                        onComplete: () => {
                            setView(nextView);

                            gsap.fromTo(
                                formWrapperRef.current,
                                { opacity: 0, y: 20 },
                                { opacity: 1, y: 0, duration: 0.3 },
                            );
                        },
                    });
                }
            }
        },

        [view],
    );

    return (
        <div
            ref={containerRef}
            className="relative w-full h-screen overflow-hidden"
        >
            {view === "login" ? (
                <div className="relative w-full h-full bg-background">
                    {/* Base Layer: Form Container */}

                    <div className="form-container w-full h-full md:w-1/2 md:absolute md:right-0 md:top-0 flex items-center justify-center p-6 bg-background z-0">
                        <div ref={formWrapperRef} className="w-full">
                            <LoginForm
                                onForgotPassword={() => handleSwitch("forgot")}
                            />
                        </div>
                    </div>

                    {/* Top Layer: Intro Section */}

                    <div
                        style={{ width: "50%" }}
                        className="intro-section absolute lg:w-[50%] md:w-[50%] sm:[100%] inset-0 md:relative md:inset-auto h-full bg-linear-to-b from-primary to-secondary py-8 px-6 md:px-14 flex flex-col justify-between z-10"
                    >
                        <div className="intro-header">
                            <Image
                                src="/logo&text.svg"
                                alt="digitalbase-logo"
                                width={180}
                                height={40}
                                priority
                            />

                            <div className="intro-content mt-6 md:mt-14 space-y-4 md:space-y-6 py-4 md:py-8 border-b border-b-background/40">
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
                                    Manage your service requests, track SLA
                                    hours in real-time.
                                </p>
                            </div>
                        </div>

                        {/* Stepper Section */}

                        <div className="pt-4 md:pt-8 space-y-4 md:space-y-10 relative">
                            <div className="connecting-line absolute left-4 top-8 -bottom-4 w-0.5 bg-background -z-0 origin-top" />

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
            ) : (
                /* Forgot View Container */

                <div className="w-full h-full bg-linear-to-b from-primary to-secondary flex items-center justify-center p-4">
                    <div
                        ref={formWrapperRef}
                        className="w-full max-w-md flex justify-center"
                    >
                        {view === "forgot" && (
                            <ForgotForm
                                onBackToLogin={() => handleSwitch("login")}
                                onSuccessSubmit={() => handleSwitch("otp")}
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
