import Link from "next/link";
import TicketCreateForm from "./_components/TicketCreateForm";

export default function CreateTicketPage() {
    return (
        <div className="space-y-6">
            <Link
                href="/tickets"
                className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 transition-colors"
            >
                Back <span className="text-gray-300">{">"}</span> Create Ticket
            </Link>

            <TicketCreateForm />
        </div>
    );
}
