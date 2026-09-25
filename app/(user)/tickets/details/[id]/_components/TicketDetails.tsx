"use client";

import React from "react";
import profileImg from "@/public/defaultProfile.jpg";
import { useUserStore } from "@/store/useUserStore";
import { Avatar } from "antd";
import Image from "next/image";
import TicketProperties from "./TicketProperties";
import { Clock } from "lucide-react";
import { getStatusColor, TicketStatus } from "@/lib/config/getStatusColors";

interface TicketDetailsProps {
    ticket?: {
        id: string;
        title: string;
        status: TicketStatus;
        senderName: string;
        senderEmail: string;
        recipientEmail: string;
        createdAt: string;
        description: string;
        attachments?: string[];
    };
}

export default function TicketDetails({ ticket }: TicketDetailsProps) {
    const imageSrc = useUserStore((state) => state.imageSrc);
    const avatarUrl = imageSrc || profileImg.src;

    // Fallback/Default values
    const currentStatus = ticket?.status || "Submitted";
    const statusColor = getStatusColor(currentStatus);

    return (
        <div className="w-full">
            {/* Main Wrapper: Responsive Layout */}
            <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8 w-full text-primary">
                {/* Main Content Area */}
                <div className="flex-1 w-full border border-primary/10 rounded-xl p-4 sm:p-6 md:p-8 bg-background shadow-sm space-y-6 md:space-y-8">
                    {/* Ticket Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 sm:pb-6 border-b border-primary/10">
                        <div className="flex items-center gap-3 flex-wrap">
                            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-secondary">
                                {ticket?.title || "Technical Issues"}
                            </h1>
                            <span className="uppercase text-xs font-semibold tracking-wider bg-primary/10 text-primary px-2.5 py-1 rounded-md">
                                {ticket?.id || "DB-TK1"}
                            </span>
                        </div>

                        {/* DYNAMIC STATUS BADGE */}
                        <div className="self-start sm:self-auto">
                            <span
                                style={{
                                    backgroundColor: `color-mix(in srgb, ${statusColor} 15%, transparent)`,
                                    color: statusColor,
                                    borderColor: `color-mix(in srgb, ${statusColor} 30%, transparent)`,
                                }}
                                className="text-xs sm:text-sm font-medium px-3 py-1 rounded-full border-none transition-all inline-block"
                            >
                                {currentStatus}
                            </span>
                        </div>
                    </div>

                    {/* Sender Info & Description Details */}
                    <div className="space-y-4 sm:space-y-6">
                        <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                            Description
                        </h2>

                        <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg">
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
                                className="ring-2 ring-offset-2 ring-primary border-none!"
                            />

                            {/* User & Time Info */}
                            <div className="flex-1 min-w-0 space-y-1">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
                                    <h3 className="font-semibold text-sm sm:text-base leading-none">
                                        {ticket?.senderName || "Megan Fox"}
                                    </h3>
                                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                        <Clock className="w-3.5 h-3.5 shrink-0" />
                                        <span>
                                            {ticket?.createdAt ||
                                                "15 Sep, 11:00 AM"}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground break-all">
                                    <span>
                                        To:{" "}
                                        {ticket?.recipientEmail ||
                                            "digitalbase@gmail.com"}
                                    </span>
                                    <span className="hidden sm:inline">•</span>
                                    <span className="truncate max-w-[200px] sm:max-w-none">
                                        &lt;
                                        {ticket?.senderEmail ||
                                            "meganfox@gmail.com"}
                                        &gt;
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Ticket Description Body */}
                        <div className="space-y-4 sm:space-y-6 text-sm md:text-base leading-relaxed">
                            <p className="whitespace-pre-line text-foreground/90">
                                {ticket?.description ||
                                    `Hello Support,\n\nI’m experiencing a technical issue with the system. Some features are not working properly, and the page sometimes becomes unresponsive. I have tried refreshing the page and logging in again, but the issue still persists.\n\nPlease check and help resolve this issue.\n\nBest regards,\nMegan Fox`}
                            </p>

                            {/* Attachments / Image Session */}
                            <div className="pt-4 border-t border-primary/10">
                                <p className="text-xs font-semibold text-muted-foreground mb-3">
                                    Attachments (
                                    {ticket?.attachments?.length || 2})
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-lg">
                                    <div className="w-full aspect-video sm:aspect-square bg-primary/10 rounded-lg border border-primary/20 flex items-center justify-center text-xs text-muted-foreground p-2 text-center">
                                        Attachment 1
                                    </div>
                                    <div className="w-full aspect-video sm:aspect-square bg-primary/10 rounded-lg border border-primary/20 flex items-center justify-center text-xs text-muted-foreground p-2 text-center">
                                        Attachment 2
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ticket Properties Sidebar */}
                <div className="w-full lg:w-90 shrink-0">
                    <TicketProperties />
                </div>
            </div>
        </div>
    );
}
