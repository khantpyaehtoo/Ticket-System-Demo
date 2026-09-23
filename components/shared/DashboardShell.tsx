import { NavItem } from "@/types/dashboard";
import Sidebar from "./Sidebar";

interface DashboardShellProps {
    navItems: NavItem[];
    homeHref: string;
    children: React.ReactNode;
    header: React.ReactNode; // Flexible Header Slot
}

export default function DashboardShell({
    navItems,
    homeHref,
    children,
    header,
}: DashboardShellProps) {
    return (
        <div className="flex h-screen overflow-hidden bg-background">
            {/* Sidebar */}
            <Sidebar homeHref={homeHref} navItems={navItems} />

            {/* Right Side: Header + Main Body */}
            <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
                {/* Header Section */}
                <header className="shrink-0">{header}</header>

                {/* Main Page Body */}
                <main className="p-6 md:p-8 flex-1">{children}</main>
            </div>
        </div>
    );
}
