"use client";

import CreateTicketBtn from "@/app/(user)/_components/CreateTicketBtn";
import SLAPlanSection from "@/app/(user)/_components/SLAPlanSection";
import DashboardCard from "@/components/ui/DashboardCard";
import { formatMinutesToHM } from "@/lib/formatMinutesToHM";
import { AlarmClock, CircleCheck, MailCheck, Package } from "lucide-react";

export default function DashboardCardHeader() {
    const slaTime = formatMinutesToHM(2000);

    const DashboardCards = [
        {
            title: "SLA Hours",
            icon: <AlarmClock />,
            length: (
                <div className="flex items-baseline gap-1.5 flex-wrap">
                    <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                        {slaTime.hours}{" "}
                        <span className="text-xs sm:text-lg font-normal text-gray-500">
                            Hrs
                        </span>
                    </span>
                    {slaTime.mins && (
                        <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                            {slaTime.mins}{" "}
                            <span className="text-xs sm:text-lg font-normal text-gray-500">
                                Mins
                            </span>
                        </span>
                    )}
                </div>
            ),
            inform_1: "Expired in Dec 3",
            inform_2: "20 days remaining",
        },
        {
            title: "Submitted Tickets",
            icon: <MailCheck />,
            length: (
                <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                        5
                    </span>
                    <span className="text-xs sm:text-lg font-normal text-gray-500">
                        Tickets
                    </span>
                </div>
            ),
            inform_1: "Today Submitted",
            inform_2: "5 Tickets",
        },
        {
            title: "Resolved Tickets",
            icon: <CircleCheck />,
            length: (
                <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                        3
                    </span>
                    <span className="text-xs sm:text-lg font-normal text-gray-500">
                        Tickets
                    </span>
                </div>
            ),
            inform_1: "Today Resolved",
            inform_2: "3 Tickets",
        },
        {
            title: "Active Products",
            icon: <Package />,
            length: (
                <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                        2
                    </span>
                    <span className="text-xs sm:text-lg font-normal text-gray-500">
                        Products
                    </span>
                </div>
            ),
            inform_1: "Expired in Dec 3",
            inform_2: "20 days remaining",
        },
    ];

    return (
        <div>
            <div className="flex flex-col">
                <CreateTicketBtn />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 text-black my-20 items-stretch">
                    {DashboardCards.map((card, key) => (
                        <div key={key} className="w-full h-full">
                            <DashboardCard
                                title={card.title}
                                icon={card.icon}
                                length={card.length}
                                inform_1={card.inform_1}
                                inform_2={card.inform_2}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <SLAPlanSection />
        </div>
    );
}
