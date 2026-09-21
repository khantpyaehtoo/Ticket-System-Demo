"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";

export default function RecentActivity() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.timeline({
                defaults: { ease: "power3.inOut", duration: 0.7 },
            }).from(".bounce-circle", {
                yoyo: true,
                repeat: -1,
                stagger: 0.09,
                filter: "blur(4px)",
            });
        },
        { scope: containerRef },
    );

    const activity = [
        {
            title: (
                <p>
                    Ticket <span className="font-jetbrains">DB-TK1</span> was
                    assigned to Application Team
                </p>
            ),
            updated: <p className="font-light">5 mins ago</p>,
        },
        {
            title: (
                <p>
                    Ticket <span className="font-jetbrains">DB-TK1</span> was
                    assigned to Application Team
                </p>
            ),
            updated: <p className="font-light">5 mins ago</p>,
        },
        {
            title: (
                <p>
                    Ticket <span className="font-jetbrains">DB-TK1</span> was
                    assigned to Application Team
                </p>
            ),
            updated: <p className="font-light">5 mins ago</p>,
        },
        {
            title: (
                <p>
                    Ticket <span className="font-jetbrains">DB-TK1</span> was
                    assigned to Application Team
                </p>
            ),
            updated: <p className="font-light">5 mins ago</p>,
        },
    ];

    return (
        <div className="w-full bg-background border border-primary/10 rounded-xl p-6 shadow-sm space-y-6 text-black">
            {/* Header */}
            <div className="pb-4 border-b border-primary/10 flex justify-between items-center">
                <div>
                    <h2 className="text-lg font-bold text-secondary tracking-tight">
                        Recent Activity
                    </h2>
                    <p className="font-light text-sm">
                        view the latest updates and activities on your tickets.
                    </p>
                </div>
                <Link href="/tickets" className="flex items-center gap-2">
                    View All <ArrowRight size={20} />
                </Link>
            </div>

            {/* Properties List */}
            <div ref={containerRef} className="space-y-4 text-sm">
                {activity.map((i, key) => (
                    <div
                        key={key}
                        className="flex items-center gap-6 border-b border-dashed border-b-[#d5d5d5] py-5"
                    >
                        <div className="w-4 h-4 rounded-full ring-2 ring-[#d5d5d5] ring-offset-2 flex items-center justify-center border border-background">
                            {/* Animated Inner Circle */}
                            <div className="bounce-circle w-full h-full bg-secondary rounded-full shadow-[0_0_8px_rgba(0,0,0,0.3)]" />
                        </div>

                        <div>
                            {i.title}
                            {i.updated}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
