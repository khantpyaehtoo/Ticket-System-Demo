"use client";

import React from "react";
import { Avatar } from "antd";
import {
    User,
    ShieldAlert,
    Tag,
    Calendar,
    UserCheck,
    Layers,
} from "lucide-react";

export default function TicketProperties() {
    const properties = [
        { label: "Ticket ID", value: "DB-TK1", isCopyable: true },
        {
            label: "Status",
            value: "Open",
            type: "badge",
            badgeClass: "bg-blue-500/10 text-blue-600 border-blue-200",
        },
        {
            label: "Priority",
            value: "High",
            type: "badge",
            badgeClass: "bg-red-500/10 text-red-600 border-red-200",
        },
        {
            label: "Assignee",
            value: "Alex Rivera",
            type: "user",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
        },
        {
            label: "Reporter",
            value: "Megan Fox",
            type: "user",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Megan",
        },
        { label: "Category", value: "Database / Server" },
        { label: "Created Date", value: "15 Sep 2026, 11:00 AM" },
        { label: "Last Updated", value: "2 hours ago" },
        { label: "Department", value: "Digital Base" },
        {
            label: "SLA Status",
            value: "Within SLA",
            type: "badge",
            badgeClass: "bg-green-500/10 text-green-600 border-green-200",
        },
    ];

    return (
        <div className="w-full bg-background border border-primary/10 rounded-xl p-6 shadow-sm space-y-6">
            {/* Header */}
            <div className="pb-4 border-b border-primary/10">
                <h2 className="text-lg font-bold text-secondary tracking-tight">
                    Ticket Properties
                </h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                    Metadata & Assignment Details
                </p>
            </div>

            {/* Properties List */}
            <div className="space-y-4 text-sm">
                {properties.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-between gap-4 py-1.5 border-b border-primary/5 last:border-none"
                    >
                        {/* Label */}
                        <span className="text-muted-foreground text-xs font-medium shrink-0">
                            {item.label}
                        </span>

                        {/* Value rendering based on type */}
                        <div className="font-medium text-right min-w-0">
                            {item.type === "badge" ? (
                                <span
                                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${item.badgeClass}`}
                                >
                                    {item.value}
                                </span>
                            ) : item.type === "user" ? (
                                <div className="flex items-center gap-2 justify-end">
                                    <Avatar
                                        src={item.avatar}
                                        size={22}
                                        className="shrink-0"
                                    />
                                    <span className="truncate text-xs">
                                        {item.value}
                                    </span>
                                </div>
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
