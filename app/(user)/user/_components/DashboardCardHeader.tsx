import DashboardCard from "@/components/ui/dashboardCard";
import { AlarmClock, CircleCheck, MailCheck, Package } from "lucide-react";
import React from "react";

interface TicketCard {
    title: string;
    description: string;
}

export default function DashboardCardHeader() {
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

    const DashboardCards = [
        {
            title: "Submitted Tickets",
            icon: <MailCheck />,
            plength: 5,
            length: 5,
            type: "Tickets",
            infrom_1: "Today Submitted",
            infrom_2: "5 Tickets",
        },
        {
            title: "Resolved Tickets",
            icon: <CircleCheck />,
            plength: 3,
            length: 3,
            type: "Tickets",
            infrom_1: "Today Resolved",
            infrom_2: "3 Tickets",
        },
        {
            title: "SLA Hours",
            icon: <AlarmClock />,
            plength: 85,
            length: "85 / 100",
            type: "Hours",
            infrom_1: "Expired in Dec 3",
            infrom_2: "20 days remaining Tickets",
        },
        {
            title: "Active Products",
            icon: <Package />,
            plength: 100,
            length: "2 / 2",
            type: "Products",
            infrom_1: "Expired in Dec 3",
            infrom_2: "20 days remaining Tickets",
        },
    ];

    return (
        <div>
            <div className="grid grid-cols-4 space-x-6 mx-auto text-black">
                {DashboardCards.map((card, key) => (
                    <div key={key}>
                        <DashboardCard
                            title={card.title}
                            icon={card.icon}
                            plength={card.plength}
                            length={card.length}
                            type={card.type}
                            inform_1={card.infrom_1}
                            inform_2={card.infrom_2}
                        />
                    </div>
                ))}
            </div>
            <div>
                <div className="flex justify-between items-start my-10 text-primary border-b border-primary pb-10 gap-6">
                    <div className="space-y-4 flex-1">
                        <p className="text-2xl font-medium text-black">
                            SLA Plan Usage
                        </p>
                        <p className="text-gray-600">
                            Track your support hours, monitor usage, and view
                            your remaining SLA balance.
                        </p>

                        <div className="flex items-center">
                            <div className="flex w-full items-center">
                                {ticketCards.map((list, index) => (
                                    <div
                                        key={index}
                                        className={`px-8 py-5 w-80 min-w-auto space-y-2 ${
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

                            <div className="px-6 py-5 w-80 space-y-4">
                                <div className="flex justify-between items-center text-black">
                                    <p className="font-light">
                                        Standard SLA Plan
                                    </p>

                                    <span className=" px-2 py-1 font-light flex items-center gap-2">
                                        <div className="bg-emerald-300 w-2 h-2 rounded-full" />{" "}
                                        Active
                                    </span>
                                </div>
                                <div className=" text-black font-bold">
                                    01.09.2026 - 31.10.2026
                                </div>
                                {/* <Button block>Request Plan Upgrade</Button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
