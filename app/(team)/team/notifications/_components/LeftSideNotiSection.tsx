import React from "react";

interface notiSectionProps {
    filterTab: string;
    setFilterTab: (tab: string) => void; // Fixed TypeScript type for state setter
}

const notificationConfig = [
    { label: "All Messages", type: "All", count: 20 },
    { label: "Unread Messages", type: "Unread", count: 2 },
    { label: "Ticket Updates", type: "Tickets", count: 10 },
    { label: "Customer's replies", type: "Replies", count: 1 },
];

export default function LeftSideNotiSection({
    filterTab,
    setFilterTab,
}: notiSectionProps) {
    return (
        <div className="w-full lg:w-80 rounded-2xl bg-white shadow-sm border border-gray-100 p-4 space-y-2 text-gray-800 shrink-0">
            {notificationConfig.map((item) => {
                const isActive = filterTab === item.type;
                return (
                    <button
                        key={item.type}
                        onClick={() => setFilterTab(item.type)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
                            isActive
                                ? "bg-[#3d333a] text-white shadow-sm"
                                : "text-gray-700 hover:bg-gray-100"
                        }`}
                    >
                        <span>{item.label}</span>
                        <span
                            className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                                isActive
                                    ? "bg-white/20 text-white"
                                    : "bg-gray-100 text-gray-600"
                            }`}
                        >
                            {item.count}
                        </span>
                    </button>
                );
            })}
        </div>
    );
}
