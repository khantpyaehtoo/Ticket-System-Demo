"use client";

import { Button } from "antd";
import React from "react";
import HoursCardGrid from "./HoursCardGrid";

interface TicketCard {
    title: string;
    description: string;
}

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

export default function SLAPlanSection() {
    return (
        <div className="slaCardsContainer">
            <div className="space-y-4 flex-1 w-full">
                {/* Title & Description */}
                <div className="flex items-center space-x-3">
                    <p className="text-xl sm:text-2xl font-medium text-black">
                        SLA Plan Usage
                    </p>
                    <span className="bg-green-400/20 rounded-2xl px-2 py-1  font-light flex items-center gap-2 text-xs sm:text-sm">
                        <div className="bg-green-400 w-2 h-2 rounded-full animate-pulse" />{" "}
                        Active
                    </span>
                </div>
                <p className="text-gray-600 text-sm sm:text-base">
                    Track your support hours, monitor usage, and view your
                    remaining SLA balance.
                </p>

                {/* Stats & SLA Card Container */}
                <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6 pt-2">
                    {/* Hours Cards Grid */}
                    <HoursCardGrid ticketCards={ticketCards} />

                    {/* Standard SLA Plan Card */}
                    <div className="px-4 sm:px-6 py-4 sm:py-5 w-full xl:w-80 space-y-3 bg-gray-50/80 xl:bg-transparent rounded-xl border border-gray-100 xl:border-none shrink-0">
                        <div className="flex justify-between items-center text-black text-sm sm:text-base">
                            <p className="font-light">Standard SLA Plan</p>

                            <span className="px-2 py-1 font-light flex items-center gap-2 text-xs sm:text-sm">
                                <div className="bg-green-400 w-2 h-2 rounded-full animate-pulse" />{" "}
                                Active
                            </span>
                        </div>
                        <div className="text-black font-bold text-sm sm:text-sm md:text-base">
                            01.09.2026 - 31.10.2026
                        </div>
                        <Button
                            block
                            className="mt-3! py-4! text-xs sm:text-sm"
                        >
                            Request Plan Upgrade
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
