import { create } from "zustand";

interface NotificationStore {
    unreadCount: number;
    setUnreadCount: (count: number) => void;
    decrementUnread: () => void;
    clearUnread: () => void;
}

export const useNotificationStore = create<NotificationStore>((set) => ({
    unreadCount: 2,
    setUnreadCount: (count) => set({ unreadCount: count }),
    decrementUnread: () =>
        set((state) => ({ unreadCount: Math.max(0, state.unreadCount - 1) })),
    clearUnread: () => set({ unreadCount: 0 }),
}));
