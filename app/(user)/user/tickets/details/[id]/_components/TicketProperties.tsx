"use client";

import React from "react";
import { getStatusColor, TicketStatus } from "@/lib/config/getStatusColors";
import { getPriorityColor, Priority } from "@/lib/config/getPriorityConfig";

interface TicketPropertiesProps {
    data?: {
        ticketId?: string;
        issueType?: string;
        assignTeam?: string;
        relatedService?: string;
        status?: TicketStatus;
        priority?: Priority;
        estimatedResolutionTime?: string;
        createdDate?: string;
        lastUpdated?: string;
    };
}

export default function TicketProperties({ data }: TicketPropertiesProps) {
    const currentStatus = data?.status || "Submitted";
    const currentPriority = data?.priority || "Medium";

    const statusColor = getStatusColor(currentStatus);
    const priorityColor = getPriorityColor(currentPriority);

    const properties = [
        { label: "Ticket ID", value: data?.ticketId || "DB-TK1" },
        { label: "Issue Type", value: data?.issueType || "Technical Issues" },
        { label: "Assign Team", value: data?.assignTeam || "System Team" },
        {
            label: "Related Service",
            value: data?.relatedService || "Nail Salon",
        },
        {
            label: "Status",
            value: currentStatus,
            type: "badge",
            color: statusColor,
        },
        {
            label: "Priority",
            value: currentPriority,
            type: "badge",
            color: priorityColor,
        },
        {
            label: "Estimated Resolution Time",
            value: data?.estimatedResolutionTime || "2 Hours",
        },
        {
            label: "Created Date",
            value: data?.createdDate || "15 Sep 2026, 11:00 AM",
        },
        {
            label: "Last Updated",
            value: data?.lastUpdated || "15 Sep 2026, 11:30 AM",
        },
    ];

    return (
        <div className="w-full bg-background border border-primary/10 rounded-xl p-4 sm:p-6 shadow-sm space-y-4 sm:space-y-6">
            {/* Header */}
            <div className="pb-3 sm:pb-4 border-b border-primary/10">
                <h2 className="text-base sm:text-lg font-bold text-secondary tracking-tight">
                    Ticket Properties
                </h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                    Metadata & Assignment Details
                </p>
            </div>

            {/* Properties List */}
            <div className="space-y-3 sm:space-y-4 text-sm">
                {properties.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between gap-3 py-1.5 border-b border-primary/5 last:border-none"
                    >
                        {/* Label */}
                        <span className="text-muted-foreground text-xs font-medium shrink-0">
                            {item.label}
                        </span>

                        {/* Value rendering based on type */}
                        <div className="font-medium text-right min-w-0">
                            {item.type === "badge" ? (
                                <span
                                    style={{
                                        color: item.color,
                                    }}
                                    className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border-none transition-all"
                                >
                                    <div
                                        style={{ backgroundColor: item.color }}
                                        className="w-2 h-2 rounded-full mr-2 shrink-0"
                                    />
                                    {item.value}
                                </span>
                            ) : (
                                <span className="text-xs font-semibold text-foreground/90 truncate block">
                                    {item.value}
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
