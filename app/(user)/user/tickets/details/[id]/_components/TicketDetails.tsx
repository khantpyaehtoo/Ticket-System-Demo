// import React, { useEffect } from "react";

import TicketProperties from "./TicketProperties";
import { TicketDetailsType } from "@/types/ticket";
// import { useNotificationStore } from "@/store/useNotificationsStore";
import TechnicalIssueBox from "./TechnicalIssueBox";

interface TicketDetailsProps {
    ticket: TicketDetailsType;
}

export default function TicketDetails({ ticket }: TicketDetailsProps) {
    // const markTicketAsRead = useNotificationStore(
    //     (state) => state.markTicketAsRead,
    // );

    // useEffect(() => {
    //     const targetId = ticket.ticketId || ticket.id;
    //     if (targetId) {
    //         markTicketAsRead(targetId);
    //     }
    // }, [ticket, markTicketAsRead]);

    return (
        <div className="w-full">
            {/* Main Wrapper */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full text-primary items-stretch">
                {/* Left Side: Technical Issue Box */}
                <TechnicalIssueBox ticket={ticket} />

                {/* Right Side: Ticket Properties */}
                <div className="min-h-full w-full lg:w-90 shrink-0">
                    <TicketProperties />
                </div>
            </div>
        </div>
    );
}
