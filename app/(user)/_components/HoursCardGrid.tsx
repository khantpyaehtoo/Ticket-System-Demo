import React from "react";

export interface TicketCard {
    title: string;
    description: string;
}

interface HoursCardGridProps {
    ticketCards: TicketCard[];
}

export default function HoursCardGrid({ ticketCards }: HoursCardGridProps) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 w-full items-center bg-gray-50 p-4  rounded-xl items-stretch">
            {ticketCards.map((list, index) => (
                <div
                    key={index}
                    className={`px-4 sm:px-4 md:px-6 py-2 sm:py-4 md:py-8 w-full space-y-4  border border-gray-200 rounded-xl shadow-md
                    `}
                >
                    <p className="text-gray-600 text-xs sm:text-sm font-medium">
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
    );
}
