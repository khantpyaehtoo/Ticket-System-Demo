// import Image from "next/image";
import { Icon } from "@/components/ui/icon";

interface HeaderProps {
    userName?: string;
    subtitle?: string;
    showCreateTicket?: boolean;
    onCreateTicketClick?: () => void;
}

export default function Header({
    userName = "User",
    subtitle = "Welcome. Here's an overview of your activity.",
    showCreateTicket = true,
    onCreateTicketClick,
}: HeaderProps) {
    return (
        <header className="flex items-center justify-between pb-6 border-b border-zinc-200 shadow-sm p-8 bg-white">
            <div>
                <h1 className="text-xl font-bold text-zinc-900 font-sans">
                    Hello, {userName}
                </h1>
                <p className="text-sm text-zinc-500 font-sans">{subtitle}</p>
            </div>

            <div className="flex items-center gap-4">
                {/* User Profile Avatar */}
                <div className="w-10 h-10 rounded-full overflow-hidden relative border border-zinc-200">
                    {/* <Image src="/avatar.jpg" alt="Profile" fill className="object-cover" /> */}
                    <div className="bg-progress w-full h-full" />
                </div>

                {/* Create Ticket Primary Action Button */}
                {showCreateTicket && (
                    <button
                        onClick={onCreateTicketClick}
                        className="flex items-center gap-2 border bg-primary text-background px-4 py-2.5 rounded-xl hover:bg-background hover:text-primary hover:border hover:border-primary transition-colors text-sm font-medium cursor-pointer"
                    >
                        <span>Create Ticket</span>
                        <Icon name="plusCircle" className="w-4 h-4" />
                    </button>
                )}
            </div>
        </header>
    );
}
