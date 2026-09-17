"use client";

import { Tabs } from "antd";
import React, { useState } from "react";
import ProfileForm from "./ProfileForm";
import SecurityForm from "./SecurityForm";

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
            label: "Personal Profile",
            children: <ProfileForm />,
        },
        {
            key: "2",
            label: "Security",
            children: <SecurityForm />,
        },
    ];

    return <Tabs items={items} onChange={onChange} activeKey={activeKey} />;
}
