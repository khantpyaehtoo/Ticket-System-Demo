import Header from "./header";
import Sidebar from "./sidebar";

interface DashboardShellProps {
    userName?: string;
    subtitle?: string;
    navItems: NavItem[];
    showCreateTicket?: boolean;
    children: React.ReactNode;
}

export default function DashboardShell({
    userName,
    subtitle,
    navItems,
    showCreateTicket = true,
    children,
}: DashboardShellProps) {
    return (
        <div className="flex h-screen overflow-hidden bg-background">
            {/* Sidebar */}
            <Sidebar navItems={navItems} />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-y-auto">
                {/* Header */}
                <Header
                    userName={userName}
                    subtitle={subtitle}
                    showCreateTicket={showCreateTicket}
                />

                {/* Dynamic Page Content */}
                <main className="p-8 flex-1">{children}</main>
            </div>
        </div>
    );
}
