"use client";

import DashboardCard, {
    DashboardCardProps,
} from "@/components/ui/DashboardCard";
import { Button } from "antd";
import {
    AlarmClock,
    CircleCheck,
    MailCheck,
    Package,
    PlusCircle,
} from "lucide-react";
import Link from "next/link";
import HoursCardGrid from "../../_components/HoursCardGrid";

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

const DashboardCards: DashboardCardProps[] = [
    {
        title: "SLA Hours",
        icon: <AlarmClock />,
        length: "",
        type: "Hours",
        inform_1: "Expired in Dec 3",
        inform_2: "20 days remaining",
    },
    {
        title: "Submitted Tickets",
        icon: <MailCheck />,
        plength: 5,
        length: 5,
        type: "Tickets",
        inform_1: "Today Submitted",
        inform_2: "5 Tickets",
    },
    {
        title: "Resolved Tickets",
        icon: <CircleCheck />,
        plength: 3,
        length: 3,
        type: "Tickets",
        inform_1: "Today Resolved",
        inform_2: "3 Tickets",
    },
    {
        title: "Active Products",
        icon: <Package />,
        plength: 2,
        length: "2",
        type: "Products",
        inform_1: "Expired in Dec 3",
        inform_2: "20 days remaining",
    },
];

export default function DashboardCardHeader() {
    return (
        <div>
            <div className="block lg:sticky lg:top-10 bg-background z-10">
                <div className="w-full flex justify-end items-center">
                    <Link href="/tickets/create" className="inline-block">
                        <Button type="primary" className="createTicketBtn">
                            <PlusCircle size={20} /> Create Ticket
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 text-black my-6 md:my-10 items-stretch">
                    {DashboardCards.map((card, key) => (
                        <div key={key} className="w-full h-full">
                            <DashboardCard
                                title={card.title}
                                icon={card.icon}
                                plength={card.plength}
                                length={card.length}
                                type={card.type}
                                inform_1={card.inform_1}
                                inform_2={card.inform_2}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="slaCardsContainer">
                <div className="space-y-4 flex-1 w-full">
                    {/* Title & Description */}
                    <p className="text-xl sm:text-2xl font-medium text-black">
                        SLA Plan Usage
                    </p>
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
                                    <div className="bg-emerald-400 w-2 h-2 rounded-full animate-pulse" />{" "}
                                    Active
                                </span>
                            </div>
                            <div className="text-black font-bold text-sm sm:text-sm md:text-base">
                                01.09.2026 - 31.10.2026
                            </div>
                            {/* <Button block className="text-xs sm:text-sm">Request Plan Upgrade</Button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
