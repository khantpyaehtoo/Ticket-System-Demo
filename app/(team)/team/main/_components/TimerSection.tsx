import React from "react";
import CurrentTicketTimer from "./CurrentTicketTimer";
import UpComingTicketTImer from "./UpComingTicketTImer";
import { getPriorityColor } from "@/lib/config/getPriorityConfig";
import RecentActivity from "@/app/(user)/user/dashboard/_components/RecentActivity";

export default function TimerSection() {
    const currentStatus = "Critical";
    const statusColor = getPriorityColor(currentStatus);

    return (
        <div className="flex space-x-10 max-w-full">
            <div className="space-y-10 w-1/2">
                {/* Card 1 */}
                <CurrentTicketTimer
                    statusColor={statusColor}
                    currentStatus={currentStatus}
                />

                {/* Card 2 */}
                <UpComingTicketTImer
                    statusColor={statusColor}
                    currentStatus={currentStatus}
                />
            </div>

            <div className="flex-1">
                <RecentActivity ActivityListWrapperClass="h-150" />
            </div>
        </div>
    );
}
