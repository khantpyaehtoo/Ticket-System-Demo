"use client";

import { Button, Tabs, Select, Pagination } from "antd";
import { CheckCheck } from "lucide-react";
import React, { useState, useEffect } from "react";
import NotificationCard from "./NotificationCard";
import { NotificationItem } from "../notificationConfig";
import { useNotificationStore } from "@/store/useNotificationsStore";

// Dummy Notification Dataset
const INITIAL_NOTIFICATIONS: (NotificationItem & {
    category: "tickets" | "system" | "remainder";
})[] = [
    {
        id: "1",
        title: "Your mins are very low: 10 mins remaining",
        description:
            "You don't have enough remaining minutes to submit additional tickets. Please contact us if you want to purchase extra minutes now.",
        type: "warning",
        time: "15 mins ago",
        isNew: true,
        category: "remainder",
        linkText: "Check your mins",
        linkHref: "/tickets",
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
        linkHref: "/tickets/details/TK-8492",
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
        linkHref: "/tickets/details/TK-9102",
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
    {
        id: "5",
        title: "Scheduled System Maintenance Alert",
        description:
            "The dashboard will undergo routine maintenance on Sunday at 02:00 UTC. Expect up to 15 mins of downtime.",
        type: "pending",
        time: "3 days ago",
        isNew: false,
        category: "system",
    },
    {
        id: "6",
        title: "Scheduled System Maintenance Alert",
        description:
            "The dashboard will undergo routine maintenance on Sunday at 02:00 UTC. Expect up to 15 mins of downtime.",
        type: "pending",
        time: "3 days ago",
        isNew: false,
        category: "system",
    },
    {
        id: "7",
        title: "Scheduled System Maintenance Alert",
        description:
            "The dashboard will undergo routine maintenance on Sunday at 02:00 UTC. Expect up to 15 mins of downtime.",
        type: "pending",
        time: "3 days ago",
        isNew: false,
        category: "system",
    },
];

export default function AccountTabs() {
    const [activeKey, setActiveKey] = useState("1");
    const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);

    // Pagination States
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);

    const { setUnreadCount, clearUnread } = useNotificationStore();

    useEffect(() => {
        const unreadCount = notifications.filter((n) => n.isNew).length;
        setUnreadCount(unreadCount);
    }, [notifications, setUnreadCount]);

    const handleMarkAllRead = () => {
        setNotifications((prev) =>
            prev.map((item) => ({ ...item, isNew: false })),
        );
        clearUnread();
    };

    // Filter Logic
    const getFilteredList = (filterType: string) => {
        return notifications.filter((item) => {
            if (filterType === "unread") return item.isNew;
            if (filterType === "tickets") return item.category === "tickets";
            if (filterType === "system") return item.category === "system";
            return true;
        });
    };

    const tabsConfig = [
        { key: "1", label: "All", type: "all" },
        {
            key: "2",
            label: `Unread (${notifications.filter((n) => n.isNew).length})`,
            type: "unread",
        },
        { key: "3", label: "Tickets", type: "tickets" },
        { key: "4", label: "System", type: "system" },
    ];

    const currentTab =
        tabsConfig.find((tab) => tab.key === activeKey) || tabsConfig[0];

    const filteredNotifications = getFilteredList(currentTab.type);

    // Paginated Data
    const paginatedNotifications = filteredNotifications.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize,
    );

    const renderReadMoreBtn = () => (
        <Button
            type="primary"
            onClick={handleMarkAllRead}
            disabled={!notifications.some((n) => n.isNew)}
            className="disabled:bg-gray-200 text-white rounded-lg px-3 sm:px-4 py-2 h-9 sm:h-10 text-xs sm:text-sm font-medium flex items-center gap-1.5 border-none shadow-none transition-all cursor-pointer"
        >
            <CheckCheck size={16} />
            <span>Read All</span>
        </Button>
    );

    return (
        <div className="flex flex-col h-[calc(100vh-160px)] w-full bg-background overflow-hidden">
            {/* Header Section */}
            <div className="shrink-0 p-4 sm:p-6 pb-0 z-10">
                {/* MOBILE ONLY: Dropdown + Read All Button */}
                <div className="flex md:hidden items-center justify-between gap-3 mb-4 pb-2 border-b border-gray-200">
                    <Select
                        value={activeKey}
                        onChange={(val) => {
                            setActiveKey(val);
                            setCurrentPage(1);
                        }}
                        className="w-44 h-9"
                        options={tabsConfig.map((tab) => ({
                            value: tab.key,
                            label: tab.label,
                        }))}
                    />
                    {renderReadMoreBtn()}
                </div>

                {/* DESKTOP ONLY: Tabs */}
                <div className="hidden md:block">
                    <Tabs
                        items={tabsConfig.map((tab) => ({
                            key: tab.key,
                            label: tab.label,
                        }))}
                        onChange={(key) => {
                            setActiveKey(key);
                            setCurrentPage(1);
                        }}
                        activeKey={activeKey}
                        tabBarExtraContent={renderReadMoreBtn()}
                        className="w-full [&_.ant-tabs-nav-wrap]:border-b [&_.ant-tabs-nav-wrap]:border-gray-200"
                    />
                </div>
            </div>

            {/* Scrollable Main Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-3 sm:space-y-4">
                {paginatedNotifications.length === 0 ? (
                    <div className="py-16 text-center text-gray-400 text-sm">
                        No notifications found in this category.
                    </div>
                ) : (
                    paginatedNotifications.map((notification) => (
                        <NotificationCard
                            key={notification.id}
                            notification={notification}
                        />
                    ))
                )}
            </div>

            {/* Footer Section (Pagination) */}
            <div className="shrink-0 px-4 sm:px-6 py-3 sm:py-4 border-t border-gray-100 bg-background flex items-center justify-between flex-wrap gap-3">
                <span className="text-xs sm:text-sm text-gray-500 font-medium">
                    Showing {paginatedNotifications.length} of{" "}
                    {filteredNotifications.length} notifications
                </span>

                <Pagination
                    current={currentPage}
                    pageSize={pageSize}
                    total={filteredNotifications.length}
                    onChange={(page, pSize) => {
                        setCurrentPage(page);
                        setPageSize(pSize);
                    }}
                    responsive={true}
                    // showSizeChanger
                    size="small"
                    className="text-xs sm:text-sm"
                />
            </div>
        </div>
    );
}
