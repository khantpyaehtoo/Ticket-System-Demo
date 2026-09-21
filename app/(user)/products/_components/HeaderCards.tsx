"use client";

import { Clock, Package } from "lucide-react";
import React, { ReactNode } from "react";

type cardSpec = {
    title: string;
    content: number;
    icon: ReactNode;
};

const cards: cardSpec[] = [
    {
        title: "Total Products",
        content: 2,
        icon: (
            <Package className="bg-secondary text-white w-10 h-10 p-2 rounded-xl" />
        ),
    },
    {
        title: "SLA Hour",
        content: 100,
        icon: (
            <Clock className="bg-secondary text-white w-10 h-10 p-2 rounded-xl" />
        ),
    },
    {
        title: "Active Product",
        content: 2,
        icon: (
            <Package className="bg-secondary text-white w-10 h-10 p-2 rounded-xl" />
        ),
    },
    {
        title: "Extra Usage",
        content: 0,
        icon: (
            <Clock className="bg-secondary text-white w-10 h-10 p-2 rounded-xl" />
        ),
    },
];

export default function HeaderCards() {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
            {cards.map((item, key) => (
                <div
                    key={key}
                    className="shadow-md border border-gray-200 p-10 rounded-xl"
                >
                    <div className="flex items-center justify-between">
                        <div className="space-y-3">
                            <p className="text-sm">{item.title}</p>
                            <h1 className="font-medium text-2xl">
                                {item.content}
                            </h1>
                        </div>
                        <div>
                            <span>{item.icon}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
