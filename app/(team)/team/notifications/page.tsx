"use client";

import NotificationCard from "@/app/(user)/user/notifications/_components/NotificationCard";
import { Button } from "antd";
import React, { useState } from "react";
import LeftSideNotiSection from "./_components/LeftSideNotiSection";
import { INITIAL_NOTIFICATIONS } from "@/app/(user)/user/notifications/_components/NotiTabs";

export default function Page() {
    const [filterTab, setFilterTab] = useState("All");
    const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);

    const handleMarkAllRead = () => {
        setNotifications((prev) =>
            prev.map((item) => ({ ...item, isNew: false })),
        );
        clearUnread();
    };

    return (
        <div className="max-w-7xl mx-auto p-6 space-y-6 text-black">
            {/* Notification Title */}
            <div className="flex justify-between items-end">
                <div className="space-y-4">
                    <h1 className="font-medium text-2xl tracking-wide">
                        Notifications & Activity
                    </h1>
                    <p className="text-gray-500 text-sm">
                        Stay updated on your ticket assignments, SLA warnings,
                        and customer replies in real time.
                    </p>
                </div>
                <Button type="primary" onClick={handleMarkAllRead} size="large">
                    Mark all as read
                </Button>
            </div>

            {/* Layout Grid */}
            <div className="flex flex-col lg:flex-row items-start gap-8 w-full mt-10">
                {/* Left Side: Active Notification Section */}
                <LeftSideNotiSection
                    filterTab={filterTab}
                    setFilterTab={setFilterTab}
                />

                {/* Right Side: Notification Feed */}
                <div className="flex-1 w-full space-y-4">
                    {notifications.map((noti, index) => (
                        <NotificationCard key={index} notification={noti} />
                    ))}
                </div>
            </div>
        </div>
    );
}
