import CreateTicketBtn from "@/app/(user)/_components/CreateTicketBtn";
import SLAPlanSection from "@/app/(user)/_components/SLAPlanSection";

import React from "react";

export default function TicketSectionHeader() {
    return (
        <div>
            {/* Create Ticket Button */}
            <CreateTicketBtn />

            {/* Main Header Container */}
            <SLAPlanSection />
        </div>
    );
}
