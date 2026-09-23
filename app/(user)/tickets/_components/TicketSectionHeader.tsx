"use client";

import { Button } from "antd";
import { PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";
import HoursCardGrid from "../../_components/HoursCardGrid";

export default function TicketSectionHeader() {
    const ticketCards = [
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
            <div className="w-full flex justify-end items-center">
                <Link href="/tickets/create" className="inline-block">
                    <Button type="primary" className="createTicketBtn">
                        <PlusCircle size={20} /> Create Ticket
                    </Button>
                </Link>
            </div>

            {/* Main Header Container */}
            <div className="slaCardsContainer">
                {/* Left Section: Description & Hours Grid */}
                <div className="space-y-4 md:space-y-6 flex-1 w-full">
                    <p className="text-gray-600 text-sm sm:text-base max-w-2xl">
                        Track your support hours, monitor usage, and view your
                        remaining SLA balance.
                    </p>

                    {/* Ticket Cards Responsive Container */}
                    <HoursCardGrid ticketCards={ticketCards} />
                </div>

                {/* Right Section: SLA Plan Card */}
                <div className="border-l-2 border-[#d97706] rounded-2xl p-4 sm:p-5 w-full lg:w-80 space-y-4 shrink-0">
                    <div className="flex justify-between items-center font-light text-sm sm:text-base">
                        <p>Standard SLA Plan</p>
                        <span className="text-xs bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full font-light">
                            Active
                        </span>
                    </div>
                    <div className="text-xs sm:text-lg text-black font-medium">
                        01.09.2026 - 31.10.2026
                    </div>
                    <Button block className="text-xs sm:text-sm shadow-sm!">
                        Request Plan Upgrade
                    </Button>
                </div>
            </div>
        </div>
    );
}
