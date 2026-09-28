"use client";

import { useSidebarStore } from "@/store/useSidebarStore";
import { useNotificationStore } from "@/store/useNotificationsStore";
import { Menu } from "lucide-react";
import { dummyTicketsList } from "@/app/(user)/user/tickets/_components/dummydata";

export default function MobileHamburgerBtn() {
    const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);
    const unreadCount = useNotificationStore((state) => state.unreadCount);
    const unreadTicketIds = useNotificationStore(
        (state) => state.unreadTicketIds,
    );
    const hasDummyUnread = dummyTicketsList.some(
        (ticket) =>
            ticket.hasUnreadNoti && !unreadTicketIds.includes(ticket.ticketId),
    );

    const showBadge = unreadTicketIds && (unreadCount > 0 || hasDummyUnread);

    return (
        <button
            onClick={toggleSidebar}
            className="lg:hidden relative p-2 rounded-lg text-primary hover:bg-zinc-100 transition-colors focus:outline-none"
            aria-label="Open Sidebar"
        >
            <Menu size={24} />

            {/* Notification Badge Indicator */}
            {showBadge && (
                <span className="absolute top-1.5 right-1.5 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
                </span>
            )}
        </button>
    );
}
