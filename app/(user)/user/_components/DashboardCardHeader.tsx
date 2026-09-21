import DashboardCard, {
    DashboardCardProps,
} from "@/components/ui/dashboardCard";
import { Button } from "antd";
import {
    AlarmClock,
    CircleCheck,
    MailCheck,
    Package,
    PlusCircle,
} from "lucide-react";
import Link from "next/link";

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
        title: "SLA Hours",
        icon: <AlarmClock />,
        plength: 85,
        length: "85 / 100",
        type: "Hours",
        inform_1: "Expired in Dec 3",
        inform_2: "20 days remaining Tickets",
    },
    {
        title: "Active Products",
        icon: <Package />,
        plength: 0,
        length: "2 / 2",
        type: "Products",
        inform_1: "Expired in Dec 3",
        inform_2: "20 days remaining Tickets",
    },
];

export default function DashboardCardHeader() {
    return (
        <div>
            <div className="sticky top-10 bg-background">
                <Link href="/tickets/create">
                    <Button
                        type="primary"
                        className="flex items-center gap-2 px-10! py-6!"
                    >
                        <PlusCircle size={20} /> Create Ticket
                    </Button>
                </Link>
                <div className="grid grid-cols-4 space-x-6 mx-auto text-black  my-10">
                    {DashboardCards.map((card, key) => (
                        <div key={key}>
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
