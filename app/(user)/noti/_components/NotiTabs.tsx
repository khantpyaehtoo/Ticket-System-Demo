"use client";

import { Button, Tabs } from "antd";
import { CheckCheck } from "lucide-react";
import React, { useState } from "react";
import NotificationCard from "./NotificationCard";

type TabsItem = {
    key: string;
    label: string;
    children: React.ReactNode;
};

export default function AccountTabs() {
    const [activeKey, setActiveKey] = useState("1");

    const onChange = (key: string) => {
        setActiveKey(key);
    };

    const items: TabsItem[] = [
        {
            key: "1",
            label: "All",
            children: (
                <div className="space-y-3 sm:space-y-4 pt-4">
                    <NotificationCard />
                    <NotificationCard />
                </div>
            ),
        },
        {
            key: "2",
            label: "Unread",
            children: (
                <div className="pt-4">
                    <NotificationCard />
                </div>
            ),
        },
        {
            key: "3",
            label: "Tickets",
            children: (
                <div className="pt-4">
                    <NotificationCard />
                </div>
            ),
        },
        {
            key: "4",
            label: "System",
            children: (
                <div className="pt-4">
                    <NotificationCard />
                </div>
            ),
        },
    ];

    const renderExtraContent = () => (
        <Button
            type="primary"
            onClick={() => console.log("Marked all as read")}
            className="bg-black hover:!bg-gray-800 text-white rounded-lg px-4 py-2 h-9 sm:h-10 text-xs sm:text-sm font-medium flex items-center gap-1.5 border-none shadow-none transition-all cursor-pointer mb-2 sm:mb-0"
        >
            <CheckCheck size={16} />
            <span className="text-xs md:text-base">Mark all read</span>
        </Button>
    );

    return (
        <div className="w-full">
            <Tabs
                items={items}
                onChange={onChange}
                activeKey={activeKey}
                tabBarExtraContent={renderExtraContent()}
                className="w-full [&_.ant-tabs-nav-wrap]:border-b [&_.ant-tabs-nav-wrap]:border-gray-200"
            />
        </div>
    );
}
