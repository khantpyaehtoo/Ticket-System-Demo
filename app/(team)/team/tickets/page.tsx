import React from "react";
import HeaderOverviewCards from "../main/_components/HeaderOverviewCards";
import TicketTable from "../main/_components/TicketTable";

export default function page() {
    return (
        <section className="text-black max-w-[1600px] mx-auto space-y-10">
            {/* Header Section */}
            <div className="flex justify-center items-center pb-5 md:pb-8">
                <div className="text-center space-y-3 md:space-y-4 max-w-2xl">
                    <h1 className="font-medium text-2xl md:text-3xl">
                        My Tickets
                    </h1>
                    <p className="text-sm md:text-base text-gray-600">
                        View and manage tickets assigned to you, track their
                        progress, and prioritize your work.
                    </p>
                </div>
            </div>

            <HeaderOverviewCards />

            {/* Header Section */}
            <div className="flex pt-5 md:pt-8">
                <div className="text-start max-w-2xl">
                    <h1 className="font-medium text-lg">My Assigned Tickets</h1>
                    <p className="text-sm text-gray-600">
                        View and manage tickets assigned to you, track their
                        progress, and prioritize your work.
                    </p>
                </div>
            </div>

            <TicketTable />
        </section>
    );
}
