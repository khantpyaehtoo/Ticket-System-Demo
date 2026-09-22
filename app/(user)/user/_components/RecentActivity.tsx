"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

export default function RecentActivity() {
    const containerRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

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
            id: 1,
            title: (
                <p>
                    Ticket{" "}
                    <span className="font-jetbrains group-hover:underline group-hover:text-secondary">
                        DB-TK1
                    </span>{" "}
                    was assigned to Application Team
                </p>
            ),
            updated: <p className="font-light">5 mins ago</p>,
        },
        {
            id: 2,
            title: (
                <p>
                    Ticket <span className="font-jetbrains">DB-TK1</span> was
                    assigned to Application Team
                </p>
            ),
            updated: <p className="font-light">5 mins ago</p>,
        },
        {
            id: 3,
            title: (
                <p>
                    Ticket <span className="font-jetbrains">DB-TK1</span> was
                    assigned to Application Team
                </p>
            ),
            updated: <p className="font-light">5 mins ago</p>,
        },
        {
            id: 4,
            title: (
                <p>
                    Ticket <span className="font-jetbrains">DB-TK1</span> was
                    assigned to Application Team
                </p>
            ),
            updated: <p className="font-light">5 mins ago</p>,
        },
        {
            id: 5,
            title: (
                <p>
                    Ticket <span className="font-jetbrains">DB-TK1</span> was
                    assigned to Application Team
                </p>
            ),
            updated: <p className="font-light">5 mins ago</p>,
        },
        {
            id: 6,
            title: (
                <p>
                    Ticket <span className="font-jetbrains">DB-TK1</span> was
                    assigned to Application Team
                </p>
            ),
            updated: <p className="font-light">5 mins ago</p>,
        },
        {
            id: 7,
            title: (
                <p>
                    Ticket <span className="font-jetbrains">DB-TK1</span> was
                    assigned to Application Team
                </p>
            ),
            updated: <p className="font-light">5 mins ago</p>,
        },
        {
            id: 8,
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
        <div className="w-full bg-background border border-primary/10 rounded-xl p-4 sm:p-6 shadow-sm space-y-4 sm:space-y-6 text-black">
            {/* Header */}
            <div className="pb-4 border-b border-primary/10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <div className="space-y-0.5">
                    <h2 className="text-base sm:text-lg font-bold text-secondary tracking-tight">
                        Recent Activity
                    </h2>
                    <p className="font-light text-xs sm:text-sm text-gray-500">
                        View the latest updates and activities on your tickets.
                    </p>
                </div>
                <Link
                    href="/tickets"
                    className="flex items-center gap-1.5 text-xs sm:text-sm text-primary hover:underline shrink-0 self-start sm:self-auto font-medium"
                >
                    View All <ArrowRight size={16} />
                </Link>
            </div>

            {/* Activity List */}
            <div
                ref={containerRef}
                className="space-y-2 sm:space-y-3 text-xs sm:text-sm overflow-y-auto h-120"
            >
                {activity.map((i, key) => (
                    <div
                        key={key}
                        className="flex items-center gap-3 sm:gap-4 border-b border-dashed border-b-[#d5d5d5] py-3 sm:py-4 group w-full px-2 sm:px-3 hover:bg-gray-50/50 rounded-lg cursor-pointer transition-all"
                        onClick={() => router.push(`/tickets/details/${i.id}`)}
                    >
                        {/* Timeline Dot Indicator */}
                        <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full ring-2 ring-[#d5d5d5] ring-offset-2 flex items-center justify-center border border-background shrink-0">
                            <div className="bounce-circle w-full h-full bg-secondary rounded-full shadow-[0_0_8px_rgba(0,0,0,0.3)]" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 min-w-0">
                            <span className="truncate font-medium text-gray-800">
                                {i.title}
                            </span>
                            <span className="text-xs text-gray-400 shrink-0">
                                {i.updated}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
