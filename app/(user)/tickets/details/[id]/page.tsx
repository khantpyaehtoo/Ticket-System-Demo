import Link from "next/link";
import TicketDetails from "./_components/TicketDetails";
import ChatSession from "./_components/ChatSession";

export default function Page() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 space-y-6">
            {/* Breadcrumb Link */}
            <nav className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500">
                <Link
                    href="/tickets"
                    className="hover:text-gray-800 transition-colors font-medium"
                >
                    Back
                </Link>
                <span className="text-gray-300 font-light">&gt;</span>
                <span className="text-gray-800 font-medium">
                    Ticket Details
                </span>
            </nav>

            {/* Ticket Details & Properties */}
            <TicketDetails />

            {/* Support Activity / Chat Thread */}
            <ChatSession />
        </div>
    );
}
