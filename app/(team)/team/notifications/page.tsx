import { Button } from "antd";
import React from "react";

export default function page() {
    const notificationConfig = [
        { key: "1", label: "All Message", type: "all-message" },
        {
            key: "2",
            label: `Unread Message`,
            type: "unread",
        },
        { key: "3", label: "Tickets Updates", type: "tickets" },
        { key: "4", label: "Customer's replies", type: "customer-replies" },
    ];

    return (
        <div className="text-black">
            <div className="flex justify-between items-end">
                <div className="space-y-3">
                    <h1 className="font-medium text-2xl">
                        Notifications & Activity
                    </h1>
                    <p className="text-gray-500">
                        Stay updated on your ticket assignments, SLA warnings,
                        and customer replies in real time.
                    </p>
                </div>
                <Button type="primary" size="large">
                    Mark all as read
                </Button>
            </div>

            <div className="flex">
                <div className="bg-white border border-gray-400 p-10 space-y-3 rounded-2xl shadow-md">
                    {notificationConfig.map((n, key) => (
                        <p key={key}>{n.label}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}
