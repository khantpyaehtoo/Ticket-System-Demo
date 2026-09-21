import React from "react";
import DashboardCardHeader from "./_components/DashboardCardHeader";
import RecentActivity from "./_components/RecentActivity";
import RecentTickets from "./_components/RecentTickets";

export default function page() {
    return (
        <div>
            <DashboardCardHeader />
            <div className="flex flex-col lg:flex-row w-full items-start gap-6 lg:gap-8 my-6 md:my-10">
                <div className="w-full lg:w-1/2">
                    <RecentTickets />
                </div>
                <div className="w-full lg:w-1/2">
                    <RecentActivity />
                </div>
            </div>
        </div>
    );
}
