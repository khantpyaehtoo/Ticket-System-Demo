import React from "react";
import DashboardCardHeader from "./_components/DashboardCardHeader";
import RecentActivity from "./_components/RecentActivity";
import RecentTickets from "./_components/RecentTickets";

export default function page() {
    return (
        <div>
            <DashboardCardHeader />
            <div className="flex justify-between space-x-8">
                <RecentTickets />
                <RecentActivity />
            </div>
        </div>
    );
}
