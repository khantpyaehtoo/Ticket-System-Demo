"use client";

import {
    Clock,
    ClockFading,
    ClockPlus,
    Package,
    PackageCheck,
    RotateCcwClock,
    Ticket,
} from "lucide-react";
import React, { ReactNode } from "react";

type cardSpec = {
    title: string;
    content: ReactNode;
    icon: ReactNode;
};

const cards: cardSpec[] = [
    {
        title: "Total Products",
        content: 2,
        icon: (
            <Package className="bg-secondary text-white w-11 h-11 p-2 rounded-lg" />
        ),
    },
    {
        title: "Total SLA Hours",
        content: 100,
        icon: (
            <Clock className="bg-secondary text-white w-11 h-11 p-2 rounded-lg" />
        ),
    },
    {
        title: "Active Product",
        content: <p className="text-green-500">2</p>,
        icon: (
            <PackageCheck className="bg-secondary text-white w-11 h-11 p-2 rounded-lg" />
        ),
    },
    {
        title: "Extra Usage",
        content: <p className="text-red-500">0</p>,
        icon: (
            <ClockPlus className="bg-secondary text-white w-11 h-11 p-2 rounded-lg" />
        ),
    },
];

const SingleCards: cardSpec[] = [
    {
        title: "Total SLA Hours",
        content: 100,
        icon: (
            <Clock className="bg-secondary text-white w-11 h-11 p-2 rounded-lg" />
        ),
    },
    {
        title: "Remaining Hours",
        content: 100,
        icon: (
            <ClockFading className="bg-secondary text-white w-11 h-11 p-2 rounded-lg" />
        ),
    },
    {
        title: "Total Tickets",
        content: 2,
        icon: (
            <Ticket className="bg-secondary text-white w-11 h-11 p-2 rounded-lg" />
        ),
    },
    {
        title: "Extra Usage",
        content: 0,
        icon: (
            <ClockPlus className="bg-secondary text-white w-11 h-11 p-2 rounded-lg" />
        ),
    },
];

export default function HeaderCards() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {SingleCards.map((item, key) => (
                <div
                    key={key}
                    className="shadow-sm border border-gray-200 p-5 sm:p-6 lg:p-8 rounded-2xl bg-background transition-all hover:shadow-md"
                >
                    <div className="flex items-center justify-between gap-4">
                        <div className="space-y-2">
                            <p className="text-xs sm:text-sm text-gray-500 font-medium">
                                {item.title}
                            </p>
                            <h3 className="font-semibold text-xl lg:text-2xl text-primary">
                                {item.content}
                            </h3>
                        </div>
                        <div className="rounded-xl text-primary">
                            {item.icon}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
