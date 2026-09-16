"use client";

import { useRef, useCallback } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export type AuthView =
    | "login"
    | "forgot"
    | "otp"
    | "reset-password"
    | "success";

export function useAuthAnimation(
    view: AuthView,
    setView: (v: AuthView) => void,
) {
    const containerRef = useRef<HTMLDivElement>(null);
    const formWrapperRef = useRef<HTMLDivElement>(null);
    const hasAnimatedMobile = useRef(false);

    // Initial Entrance Animation
    useGSAP(
        () => {
            const mm = gsap.matchMedia();

            // Desktop Screen
            mm.add("(min-width: 768px)", (context) => {
                const { selector } = context;
                if (!selector?.(".intro-header")?.length) return;

                gsap.timeline({
                    defaults: { ease: "power3.out", duration: 0.7 },
                })
                    .from(selector(".intro-header"), { y: -20, opacity: 0 })
                    .from(
                        selector(".form-container"),
                        { y: 20, opacity: 0 },
                        "-=0.4",
                    )
                    .from(
                        selector(".connecting-line"),
                        { scaleY: 0, duration: 0.8 },
                        "-=0.2",
                    )
                    .from(
                        selector(".stepper-item"),
                        { y: 15, opacity: 0, stagger: 0.15 },
                        "-=0.4",
                    );
            });

            // Mobile Screen
            mm.add("(max-width: 767px)", () => {
                if (hasAnimatedMobile.current) {
                    gsap.set(".intro-section", { yPercent: -100 });
                    return;
                }
                gsap.timeline({
                    defaults: { ease: "power3.inOut" },
                    onComplete: () => {
                        hasAnimatedMobile.current = true;
                    },
                })
                    .from(".intro-header", {
                        opacity: 0,
                        y: -20,
                        duration: 0.5,
                    })
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
                    .to(
                        ".intro-section",
                        { yPercent: -100, duration: 0.9, ease: "power4.inOut" },
                        "+=0.6",
                    )
                    .from(
                        ".form-container",
                        { scale: 0.95, opacity: 0, duration: 0.5 },
                        "-=0.3",
                    );
            });

            return () => mm.revert();
        },
        { scope: containerRef, dependencies: [] },
    );

    // Form Transition Handler
    const handleSwitch = useCallback(
        (nextView: AuthView) => {
            if (!formWrapperRef.current) return;
            const isDesktop = window.innerWidth >= 768;

            // Mobile View Transition Logic
            if (!isDesktop) {
                gsap.to(formWrapperRef.current, {
                    opacity: 0,
                    y: 15,
                    duration: 0.2,
                    onComplete: () => {
                        setView(nextView);
                        requestAnimationFrame(() => {
                            gsap.set(".intro-section", { yPercent: -100 });
                            gsap.fromTo(
                                formWrapperRef.current,
                                { opacity: 0, y: 35 },
                                {
                                    opacity: 1,
                                    y: 0,
                                    duration: 0.45,
                                    clearProps: "transform",
                                },
                            );
                        });
                    },
                });
                return;
            }

            // DESKTOP TRANSITION LOGIC
            // Scenario 1: Change 50% ~ 100% when not login
            if (view === "login" && nextView !== "login") {
                gsap.timeline({ defaults: { ease: "power3.inOut" } })
                    .to(
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
                                    clearProps: "transform",
                                },
                            );
                        });
                    });
            }
            // Scenario 2: Change 100% ~ 50% when return to login
            else if (view !== "login" && nextView === "login") {
                setView(nextView);
                requestAnimationFrame(() => {
                    const tl = gsap.timeline({
                        defaults: { ease: "power2.inOut" },
                    });

                    tl.fromTo(
                        ".intro-section",
                        { width: "100%" },
                        {
                            width: "50%",
                            duration: 0.75,
                            ease: "expo.inOut",
                        },
                    )
                        // .fromTo(
                        //     [
                        //         ".intro-content",
                        //         ".connecting-line",
                        //         ".stepper-item",
                        //     ],
                        //     { opacity: 0, y: -35 },
                        //     {
                        //         opacity: 1,
                        //         y: 0,
                        //         duration: 0.5,
                        //         stagger: 0.2,
                        //         ease: "power2.out",
                        //     },
                        //     "-=0.55",
                        // )
                        .from(".intro-header", { y: -20, opacity: 0 })
                        .from(".form-container", { y: 20, opacity: 0 }, "-=0.4")
                        .from(
                            ".connecting-line",
                            { scaleY: 0, duration: 0.8 },
                            "-=0.2",
                        )
                        .from(
                            ".stepper-item",
                            { y: 15, opacity: 0, stagger: 0.15 },
                            "-=0.4",
                        )
                        .fromTo(
                            formWrapperRef.current,
                            { opacity: 0, y: 40 },
                            {
                                opacity: 1,
                                y: 0,
                                duration: 0.45,
                                ease: "power3.out",
                                clearProps: "transform",
                            },
                            "-=0.45",
                        );
                });
            }
            // Scenario 3: Standard Form Switch (ex. Forgot -> OTP, OTP -> Reset)
            else {
                gsap.to(formWrapperRef.current, {
                    opacity: 0,
                    y: -15,
                    duration: 0.25,
                    ease: "power2.in",
                    onComplete: () => {
                        setView(nextView);
                        requestAnimationFrame(() => {
                            gsap.fromTo(
                                formWrapperRef.current,
                                { opacity: 0, y: 25 },
                                {
                                    opacity: 1,
                                    y: 0,
                                    duration: 0.4,
                                    ease: "power3.out",
                                    clearProps: "transform",
                                },
                            );
                        });
                    },
                });
            }
        },
        [view, setView],
    );

    return { containerRef, formWrapperRef, handleSwitch };
}
