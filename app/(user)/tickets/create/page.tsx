import Link from "next/link";
import TicketCreateForm from "./_components/TicketCreateForm";
import { ChevronRight } from "lucide-react";

export default function CreateTicketPage() {
    return (
        <div className="w-full max-w-8xl mx-auto px-0 sm:px-6 py-4 sm:py-8 space-y-4 sm:space-y-6">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-800">
                <Link
                    href="/tickets"
                    className="hover:text-gray-500 transition-colors font-medium"
                >
                    Back
                </Link>
                <span className="text-gray-800 font-bold">
                    <ChevronRight />
                </span>
                <span className="text-blue-800 font-medium">Create Ticket</span>
            </nav>

            {/* Ticket Form */}
            <TicketCreateForm />
        </div>
    );
}
