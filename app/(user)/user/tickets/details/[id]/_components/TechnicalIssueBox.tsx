"use client";

import profileImg from "@/public/defaultProfile.jpg";
import { useUserStore } from "@/store/useUserStore";
import { Avatar } from "antd";
import { getStatusColor } from "@/lib/config/getStatusColors";
import { TicketDetailsType } from "@/types/ticket";
import React from "react";
import Image from "next/image";
import { Clock } from "lucide-react";
import TicketDetailDescription from "./TicketDetailDescription";

interface TicketDetailsProps {
    ticket: TicketDetailsType;
}

export default function TechnicalIssueBox({ ticket }: TicketDetailsProps) {
    const imageSrc = useUserStore((state) => state.imageSrc);
    const avatarUrl = imageSrc || profileImg.src;

    // Fallback/Default values
    const currentStatus = ticket?.status || "Submitted";
    const statusColor = getStatusColor(currentStatus);

    return (
        <div className="flex-1 w-full border border-primary/10 rounded-xl p-4 sm:p-6 md:p-8 bg-background shadow-sm space-y-6 md:space-y-8">
            {/* Ticket Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 sm:pb-6 border-b border-primary/10">
                <div className="flex items-center gap-3 flex-wrap">
                    <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-secondary">
                        {ticket?.title || "Technical Issues"}
                    </h1>
                </div>

                {/* DYNAMIC STATUS BADGE */}
                <div className="flex justify-between items-center flex-1">
                    <span className="uppercase text-xs font-semibold tracking-wider bg-primary/10 text-primary px-2.5 py-1 rounded-md">
                        {ticket?.id || "DB-TK1"}
                    </span>
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
                                    {ticket?.createdAt || "15 Sep, 11:00 AM"}
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
                                {ticket?.senderEmail || "meganfox@gmail.com"}
                                &gt;
                            </span>
                        </div>
                    </div>
                </div>

                {/* Ticket Description Body */}
                <div className="space-y-4 sm:space-y-6 text-sm md:text-base leading-relaxed">
                    <TicketDetailDescription ticket={ticket} />
                </div>
            </div>
        </div>
    );
}
