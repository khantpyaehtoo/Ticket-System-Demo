"use client";

import { Button } from "antd";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

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
        <div className="w-full space-y-6 ">
            {/* Create Ticket Button */}
            <Link href="/tickets/create" className="inline-block">
                <Button
                    type="primary"
                    className="flex items-center gap-2 !px-6 sm:!px-10 !py-4 sm:!py-6 text-sm sm:text-base"
                >
                    <PlusCircle size={20} /> Create Ticket
                </Button>
            </Link>

            {/* Main Header Container */}
            <div className="flex flex-col lg:flex-row justify-between items-start my-6 md:my-10 text-primary border-b border-primary pb-8 md:pb-10 gap-6 lg:gap-8">
                {/* Left Section: Description & Hours Grid */}
                <div className="space-y-4 md:space-y-6 flex-1 w-full">
                    <p className="text-gray-600 text-sm sm:text-base max-w-2xl">
                        Track your support hours, monitor usage, and view your
                        remaining SLA balance.
                    </p>

                    {/* Ticket Cards Responsive Container */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 w-full items-center bg-gray-50 md:bg-transparent p-4 md:p-0 rounded-xl">
                        {ticketCards.map((list, index) => (
                            <div
                                key={index}
                                className={`px-2 sm:px-4 md:px-6 py-2 md:py-4 w-full space-y-1 sm:space-y-2 ${
                                    index !== ticketCards.length - 1
                                        ? "md:border-r md:border-primary/40"
                                        : ""
                                }`}
                            >
                                <p className="text-gray-600 text-xs sm:text-sm font-medium truncate">
                                    {list.title}
                                </p>
                                <p className="text-sm sm:text-base">
                                    <span className="font-semibold text-xl sm:text-2xl text-black">
                                        {list.description}
                                    </span>{" "}
                                    Hours
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Section: SLA Plan Card */}
                <div className="border-l-4 border-amber-500 rounded-r-2xl bg-amber-50/50 p-4 sm:p-5 w-full lg:w-80 space-y-4 shadow-sm shrink-0">
                    <div className="flex justify-between items-center font-semibold text-sm sm:text-base">
                        <p>Standard SLA Plan</p>
                        <span className="text-xs bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full font-medium">
                            Active
                        </span>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500">
                        01.09.2026 ~ 31.10.2026
                    </div>
                    <Button block className="text-xs sm:text-sm">
                        Request Plan Upgrade
                    </Button>
                </div>
            </div>
        </div>
    );
}
