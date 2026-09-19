"use client";

import React from "react";
import profileImg from "@/public/defaultProfile.jpg";
import { useUserStore } from "@/store/useUserStore";
import { Avatar } from "antd";
import Image from "next/image";
import TicketProperties from "./TicketProperties";
import { Clock } from "lucide-react";

export default function TicketDetails() {
    const imageSrc = useUserStore((state) => state.imageSrc);
    const avatarUrl = imageSrc || profileImg.src;

    return (
        <div className="w-full max-w-7xl mx-auto p-4 md:p-6">
            {/* Main Wrapper: Responsive Layout */}
            <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-10 w-full text-primary">
                {/* Main Content Area */}
                <div className="flex-1 w-full border border-primary/20 rounded-xl p-6 md:p-8 bg-background shadow-sm space-y-8">
                    {/* Ticket Header */}
                    <div className="flex flex-wrap justify-between items-center gap-4 pb-6 border-b border-primary/10">
                        <div className="flex items-center gap-4">
                            <h1 className="text-xl md:text-2xl font-bold text-secondary">
                                Technical Issues
                            </h1>
                            <span className="uppercase text-xs font-semibold tracking-wider bg-primary/10 text-primary px-2.5 py-1 rounded-md">
                                DB-TK1
                            </span>
                        </div>
                        <span className="text-sm font-medium px-3 py-1 bg-green-500/10 text-green-600 rounded-full">
                            Submitted
                        </span>
                    </div>

                    {/* Sender Info & Details */}
                    <div className="space-y-6">
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                            Description
                        </h2>

                        <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/5">
                            {/* Avatar Wrapper */}
                            <div className="relative shrink-0">
                                <Avatar
                                    src={
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={avatarUrl}
                                                alt="User Avatar"
                                                fill
                                                priority
                                                sizes="40px"
                                                className="object-cover rounded-full"
                                            />
                                        </div>
                                    }
                                    size={40}
                                    className="ring-2 ring-offset-2 ring-primary border-none"
                                />
                            </div>

                            {/* User & Time Info */}
                            <div className="flex-1 min-w-0 space-y-1">
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                    <h3 className="font-semibold text-base leading-none">
                                        Megan Fox
                                    </h3>
                                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                        <Clock className="w-3.5 h-3.5" />
                                        <span>15 Sep, 11:00 AM</span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                                    <span>To: digitalbase@gmail.com</span>
                                    <span>•</span>
                                    <span className="truncate">
                                        &lt;meganfox@gmail.com&gt;
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Ticket Description Body */}
                        <div className="space-y-6 text-sm md:text-base leading-relaxed">
                            <p className="whitespace-pre-line text-foreground/90">
                                Hello Support,{"\n\n"}
                                I’m experiencing a technical issue with the
                                system. Some features are not working properly,
                                and the page sometimes becomes unresponsive. I
                                have tried refreshing the page and logging in
                                again, but the issue still persists.{"\n\n"}
                                Please check and help resolve this issue.
                                {"\n\n"}
                                Best regards,{"\n"}
                                Megan Fox
                            </p>

                            {/* Attachments / Image Session */}
                            <div className="pt-4 border-t border-primary/10">
                                <p className="text-xs font-semibold text-muted-foreground mb-3">
                                    Attachments (2)
                                </p>
                                <div className="flex flex-wrap items-center gap-4">
                                    <div className="w-full sm:w-48 aspect-square bg-primary/10 rounded-lg border border-primary/20 flex items-center justify-center text-xs text-muted-foreground">
                                        Attachment 1
                                    </div>
                                    <div className="w-full sm:w-48 aspect-square bg-primary/10 rounded-lg border border-primary/20 flex items-center justify-center text-xs text-muted-foreground">
                                        Attachment 2
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ticket Properties Sidebar */}
                <div className="w-full lg:w-80 shrink-0">
                    <TicketProperties />
                </div>
            </div>
        </div>
    );
}
