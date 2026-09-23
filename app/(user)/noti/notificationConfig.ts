import {
    AlarmClock,
    CheckCircle2,
    AlertCircle,
    Clock,
    Info,
} from "lucide-react";
import React from "react";

export type NotificationType =
    | "warning"
    | "success"
    | "error"
    | "info"
    | "pending";

export interface NotificationItem {
    id: string;
    title: string;
    description: string;
    type: NotificationType;
    time: string;
    isNew: boolean;
    linkText?: string;
    linkHref?: string;
}

export const getNotificationStyle = (type: NotificationType) => {
    switch (type) {
        case "warning":
            return {
                Icon: AlarmClock,
                iconBg: "bg-amber-500/10 text-amber-600",
            };
        case "success":
            return {
                Icon: CheckCircle2,
                iconBg: "bg-emerald-500/10 text-emerald-600",
            };
        case "error":
            return {
                Icon: AlertCircle,
                iconBg: "bg-red-500/10 text-red-600",
            };
        case "info":
            return {
                Icon: Info,
                iconBg: "bg-sky-500/10 text-sky-600",
            };
        case "pending":
        default:
            return {
                Icon: Clock,
                iconBg: "bg-purple-500/10 text-purple-600",
            };
    }
};
