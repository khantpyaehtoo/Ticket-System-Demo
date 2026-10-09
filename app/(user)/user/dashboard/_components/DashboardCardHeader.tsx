"use client";

import CreateTicketBtn from "@/app/(user)/_components/CreateTicketBtn";
import SLAPlanSection from "@/app/(user)/_components/SLAPlanSection";
import DashboardCard, {
    DashboardCardProps,
} from "@/components/ui/DashboardCard";
import { AlarmClock, CircleCheck, MailCheck, Package } from "lucide-react";

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
        length: 5,
        type: "Tickets",
        inform_1: "Today Submitted",
        inform_2: "5 Tickets",
    },
    {
        title: "Resolved Tickets",
        icon: <CircleCheck />,
        length: 3,
        type: "Tickets",
        inform_1: "Today Resolved",
        inform_2: "3 Tickets",
    },
    {
        title: "Active Products",
        icon: <Package />,
        length: "2",
        type: "Products",
        inform_1: "Expired in Dec 3",
        inform_2: "20 days remaining",
    },
];

export default function DashboardCardHeader() {
    return (
        <div>
            <div>
                <CreateTicketBtn />

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 text-black my-6 md:my-20 items-stretch">
                    {DashboardCards.map((card, key) => (
                        <div key={key} className="w-full h-full">
                            <DashboardCard
                                title={card.title}
                                icon={card.icon}
                                length={card.length}
                                type={card.type}
                                inform_1={card.inform_1}
                                inform_2={card.inform_2}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* SLA Card Section */}
            <SLAPlanSection />
        </div>
    );
}
