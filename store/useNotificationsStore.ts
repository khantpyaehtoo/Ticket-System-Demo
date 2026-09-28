// store/useNotificationsStore.ts
import { create } from "zustand";

interface NotificationStore {
    unreadCount: number;
    unreadTicketIds: string[];
    setUnreadNotifications: (
        notifications: { ticketId?: string; isNew: boolean }[],
    ) => void;
    markTicketAsRead: (ticketId: string) => void;
    clearUnread: () => void;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
    unreadCount: 2,
    unreadTicketIds: ["DB-TK1", "DB-TK2"],

    setUnreadNotifications: (notifications) => {
        const unreadItems = notifications.filter((n) => n.isNew);
        const ticketIds = unreadItems
            .map((n) => n.ticketId)
            .filter((id): id is string => Boolean(id));

        set({
            unreadCount: unreadItems.length,
            unreadTicketIds: Array.from(new Set(ticketIds)),
        });
    },

    markTicketAsRead: (ticketId) =>
        set((state) => ({
            unreadTicketIds: state.unreadTicketIds.filter(
                (id) => id !== ticketId,
            ),
            unreadCount: Math.max(0, state.unreadCount - 1),
        })),

    clearUnread: () => set({ unreadCount: 0, unreadTicketIds: [] }),
}));
