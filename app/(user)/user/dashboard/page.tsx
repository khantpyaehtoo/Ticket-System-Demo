import React from "react";
import DashboardCardHeader from "./_components/DashboardCardHeader";
import RecentActivity from "./_components/RecentActivity";
import RecentTickets from "./_components/RecentTickets";
import { formatMinutesToHM } from "@/lib/formatMinutesToHM";

export default function page() {
    // throw new Error("401 - Unauthorized Access");
    console.log(formatMinutesToHM(3203));
    return (
        <div className="mx-auto">
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
