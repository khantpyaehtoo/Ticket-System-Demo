"use client";

import Link from "next/link";
import TicketDetails from "./_components/TicketDetails";
import ChatSession from "./_components/ChatSession";

export default function page() {
    return (
        <div className="space-y-6">
            <Link
                href="/tickets"
                className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 transition-colors"
            >
                Back <span className="text-gray-300">{">"}</span> Ticket Details
            </Link>

            <TicketDetails />

            <ChatSession />
        </div>
    );
}
