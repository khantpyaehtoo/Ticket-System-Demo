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
