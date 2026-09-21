"use client";

import { useSidebarStore } from "@/store/useSidebarStore";
import { Menu } from "lucide-react";

export default function MobileHamburgerBtn() {
    const toggleSidebar = useSidebarStore((state) => state.toggleSidebar);

    return (
        <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-lg text-primary hover:bg-zinc-100 transition-colors focus:outline-none"
            aria-label="Open Sidebar"
        >
            <Menu size={24} />
        </button>
    );
}
