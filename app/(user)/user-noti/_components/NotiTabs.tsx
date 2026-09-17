"use client";

import { Button, Tabs } from "antd";
import { CheckCheck } from "lucide-react";
import React, { useState } from "react";
import NotificationCard from "./NotificationCard";

type tabsItems = {
    key: string;
    label: string;
    children: React.ReactNode;
};

export default function AccountTabs() {
    const [activeKey, setActiveKey] = useState("1");

    const onChange = (key: string) => {
        setActiveKey(key);
    };

    const items: tabsItems[] = [
        {
            key: "1",
            label: "All",
            children: <NotificationCard />,
        },
        {
            key: "2",
            label: "Unread",
            children: <NotificationCard />,
        },
        {
            key: "3",
            label: "Tickets",
            children: <NotificationCard />,
        },
        {
            key: "4",
            label: "System",
            children: <NotificationCard />,
        },
    ];

    return (
        <div className="flex justify-between items-start">
            <Tabs
                items={items}
                onChange={onChange}
                activeKey={activeKey}
                className="w-1/2!"
            />
            <Button
                htmlType="submit"
                className="px-3! py-5! h-11 md:h-12 bg-primary! text-background! hover:bg-background! hover:text-primary! hover:border! hover:border-primary! rounded-lg! font-medium text-sm transition-all group flex items-center justify-center gap-1 cursor-pointer"
            >
                <CheckCheck size={18} />
                <span>Make all as read</span>
            </Button>
        </div>
    );
}
