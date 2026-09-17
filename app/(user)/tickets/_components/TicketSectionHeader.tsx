"use client";

import { Button } from "antd";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

// Optional: Type your card items for strict TypeScript checking
interface TicketCard {
    title: string;
    description: string;
}

export default function TicketSectionHeader() {
    const ticketCards: TicketCard[] = [
        {
            title: "Purchased Hours",
            description: "50",
        },
        {
            title: "Used Hours",
            description: "10",
        },
        {
            title: "Available Hours",
            description: "40",
        },
        {
            title: "Extra Usage",
            description: "0",
        },
    ];

    return (
        <div>
            <Link href="/tickets/create">
                <Button type="primary" className="flex items-center gap-2">
                    <PlusCircle size={20} /> Create Ticket
                </Button>
            </Link>

            <div className="flex justify-between items-start my-10 text-primary border-b border-primary pb-10 gap-6">
                <div className="space-y-4 flex-1">
                    <p className="text-gray-600">
                        Track your support hours, monitor usage, and view your
                        remaining SLA balance.
                    </p>

                    <div className="flex w-full items-center">
                        {ticketCards.map((list, index) => (
                            <div
                                key={index}
                                className={`px-8 py-5 w-50 min-w-auto space-y-2 ${
                                    index !== ticketCards.length - 1
                                        ? "border-r border-primary"
                                        : ""
                                }`}
                            >
                                <p className="text-gray-600 text-sm">
                                    {list.title}
                                </p>
                                <p>
                                    <span className="font-medium text-2xl">
                                        {list.description}
                                    </span>{" "}
                                    Hours
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="border-l-4 border-amber-500 rounded-r-2xl bg-amber-50/50 px-6 py-5 w-80 space-y-4 shadow-sm">
                    <div className="flex justify-between items-center font-semibold">
                        <p>Standard SLA Plan</p>
                        <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-medium">
                            Active
                        </span>
                    </div>
                    <div className="text-sm text-gray-500">
                        01.09.2026 ~ 31.10.2026
                    </div>
                    <Button block>Request Plan Upgrade</Button>
                </div>
            </div>
        </div>
    );
}
