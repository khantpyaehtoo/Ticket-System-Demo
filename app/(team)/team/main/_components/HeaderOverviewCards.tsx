import React from "react";
import { CircleCheck, Hourglass, RotateCcw, Ticket } from "lucide-react";

interface WorkCard {
    title: string;
    count: number;
    criticalCount?: number;
    totalText: string;
    icon: React.ReactNode;
}

export default function HeaderOverviewCards() {
    const overviewCards: WorkCard[] = [
        {
            title: "Assigned Tickets",
            count: 10,
            criticalCount: 3,
            totalText: "Total Assigned Tickets - 10",
            icon: <Ticket className="w-5 h-5" />,
        },
        {
            title: "In Progress",
            count: 10,
            criticalCount: 3,
            totalText: "Total Assigned Tickets - 10",
            icon: <Hourglass className="w-5 h-5" />,
        },
        {
            title: "Resolved",
            count: 2,
            // criticalCount: 3,
            totalText: "Total Resolved Tickets - 10",
            icon: <CircleCheck className="w-5 h-5" />,
        },
        {
            title: "Reopened",
            count: 4,
            criticalCount: 4,
            totalText: "Total Reopened Tickets - 10",
            icon: <RotateCcw className="w-5 h-5" />,
        },
    ];
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {overviewCards.map((card, index) => (
                <div
                    key={index}
                    className="border border-gray-300 shadow-sm rounded-2xl py-5 px-6 space-y-4 bg-white transition-all hover:shadow-md"
                >
                    {/* Card Header */}
                    <div className="flex justify-between items-center">
                        <p className="text-sm md:text-base text-gray-700 font-medium">
                            {card.title}
                        </p>
                        <div className="bg-black text-white p-2.5 rounded-sm">
                            {card.icon}
                        </div>
                    </div>

                    {/* Card Content */}
                    <div className="border-b border-b-gray-200 py-3 flex items-center space-x-10">
                        <p className="text-3xl md:text-4xl font-semibold">
                            {card.count}
                        </p>

                        {card.criticalCount && (
                            <div className="border border-gray-200 py-1.5 px-3 flex items-center space-x-2 rounded-xl bg-gray-50">
                                <div className="w-2.5 h-2.5 bg-red-500 rounded-full shrink-0" />
                                <p className="text-xs md:text-sm text-red-600 font-medium whitespace-nowrap">
                                    Critical - {card.criticalCount}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Card Footer */}
                    <div>
                        <p className="text-xs md:text-sm text-gray-500">
                            {card.totalText}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
}
