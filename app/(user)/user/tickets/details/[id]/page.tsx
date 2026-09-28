import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import TicketDetails from "./_components/TicketDetails";
import ChatSession from "./_components/ChatSession";
import { dummyTicketsList } from "../../_components/dummydata";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
    const { id } = await params;

    const ticketData = dummyTicketsList.find(
        (t) => t.id === id || t.ticketId === id,
    );

    if (!ticketData) {
        notFound();
    }

    const isClosed =
        ticketData.status === "Closed" || ticketData.status === "Cancelled";

    return (
        <div className="w-full max-w-7xl mx-auto px-0 sm:px-6 py-4 sm:py-6 space-y-6">
            {/* Breadcrumb Link */}
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-800">
                <Link
                    href="/user/tickets"
                    className="hover:text-gray-500 transition-colors font-medium"
                >
                    Back
                </Link>
                <span className="text-gray-800 font-bold">
                    <ChevronRight className="w-4 h-4" />
                </span>
                <span className="text-blue-800 font-medium">
                    Ticket Details ({ticketData.ticketId})
                </span>
            </nav>

            {/* Ticket Details & Properties */}
            <TicketDetails ticket={ticketData} />

            {/* Support Activity / Chat Thread */}
            <ChatSession
                ticketId={ticketData.id}
                isClosed={isClosed}
                messages={ticketData.messages}
            />
        </div>
    );
}
