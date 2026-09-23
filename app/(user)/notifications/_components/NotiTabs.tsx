"use client";

import { Button, Tabs } from "antd";
import { CheckCheck } from "lucide-react";
import React, { useState } from "react";
import NotificationCard from "./NotificationCard";
import { NotificationItem } from "../notificationConfig";

// Dummy Notification Dataset
const INITIAL_NOTIFICATIONS: (NotificationItem & {
    category: "tickets" | "system";
})[] = [
    {
        id: "1",
        title: "Your mins are very low: 10 mins remaining",
        description:
            "You don't have enough remaining minutes to submit additional tickets. Please contact us if you want to purchase extra minutes now.",
        type: "warning",
        time: "15 mins ago",
        isNew: true,
        category: "system",
        linkText: "Check your mins",
        linkHref: "/billing",
    },
    {
        id: "2",
        title: "Ticket #TK-8492 has been resolved",
        description:
            "Our support team has fixed the issue regarding your custom domain configuration.",
        type: "success",
        time: "2 hours ago",
        isNew: true,
        category: "tickets",
        linkText: "View ticket details",
        linkHref: "/tickets/TK-8492",
    },
    {
        id: "3",
        title: "New update on Ticket #TK-9102",
        description:
            "An agent has requested additional information regarding your database migration logs.",
        type: "info",
        time: "1 day ago",
        isNew: false,
        category: "tickets",
        linkText: "View ticket details",
        linkHref: "/tickets/TK-9102",
    },
    {
        id: "4",
        title: "Scheduled System Maintenance Alert",
        description:
            "The dashboard will undergo routine maintenance on Sunday at 02:00 UTC. Expect up to 15 mins of downtime.",
        type: "pending",
        time: "3 days ago",
        isNew: false,
        category: "system",
    },
];

type TabsItem = {
    key: string;
    label: string;
    children: React.ReactNode;
};

export default function AccountTabs() {
    const [activeKey, setActiveKey] = useState("1");
    const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);

    // Mark all currently visible notifications as read
    const handleMarkAllRead = () => {
        setNotifications((prev) =>
            prev.map((item) => ({ ...item, isNew: false })),
        );
    };

    const renderNotificationList = (
        filterType: "all" | "unread" | "tickets" | "system",
    ) => {
        const filtered = notifications.filter((item) => {
            if (filterType === "unread") return item.isNew;
            if (filterType === "tickets") return item.category === "tickets";
            if (filterType === "system") return item.category === "system";
            return true;
        });

        if (filtered.length === 0) {
            return (
                <div className="py-12 text-center text-gray-400 text-sm">
                    No notifications found in this tab.
                </div>
            );
        }

        return (
            <div className="space-y-3 sm:space-y-4 pt-4">
                {filtered.map((notification) => (
                    <NotificationCard
                        key={notification.id}
                        notification={notification}
                    />
                ))}
            </div>
        );
    };

    const items: TabsItem[] = [
        {
            key: "1",
            label: "All",
            children: renderNotificationList("all"),
        },
        {
            key: "2",
            label: `Unread (${notifications.filter((n) => n.isNew).length})`,
            children: renderNotificationList("unread"),
        },
        {
            key: "3",
            label: "Tickets",
            children: renderNotificationList("tickets"),
        },
        {
            key: "4",
            label: "System",
            children: renderNotificationList("system"),
        },
    ];

    const renderExtraContent = () => (
        <Button
            type="primary"
            onClick={handleMarkAllRead}
            disabled={!notifications.some((n) => n.isNew)}
            className="disabled:bg-gray-200 text-white rounded-lg px-4 py-2 h-9 sm:h-10 text-xs sm:text-sm font-medium flex items-center gap-1.5 border-none shadow-none transition-all cursor-pointer mb-2 sm:mb-0"
        >
            <CheckCheck size={16} />
            <span className="text-xs md:text-base">Mark as read</span>
        </Button>
    );

    return (
        <div className="w-full">
            <Tabs
                items={items}
                onChange={(key) => setActiveKey(key)}
                activeKey={activeKey}
                tabBarExtraContent={renderExtraContent()}
                className="w-full [&_.ant-tabs-nav-wrap]:border-b [&_.ant-tabs-nav-wrap]:border-gray-200"
            />
        </div>
    );
}
