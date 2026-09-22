"use client";

import React from "react";

export default function TicketProperties() {
    const properties = [
        { label: "Ticket ID", value: "DB-TK1", isCopyable: true },
        {
            label: "Issue Type",
            value: "Technical Issues",
        },
        {
            label: "Assign Team",
            value: "System Team",
        },
        {
            label: "Related Service",
            value: "Nail Salon",
        },
        {
            label: "Status",
            value: "Submitted",
            type: "badge",
            badgeClass: "bg-submitted/70 border-submitted",
            textColor: "text-submitted",
        },
        {
            label: "Priority",
            value: "Medium",
            type: "badge",
            badgeClass: "bg-hold/70 border-hold",
            textColor: "text-hold",
        },

        { label: "Estimated Resolution Time", value: "2 Hours" },
        { label: "Created Date", value: "15 Sep 2026, 11:00 AM" },
        { label: "Last Updated", value: "15 Sep 2026, 11:30 AM" },
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
                                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${item.textColor}`}
                                >
                                    <div
                                        className={`w-3 h-3 rounded-full mr-2 border ${item.badgeClass}`}
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
