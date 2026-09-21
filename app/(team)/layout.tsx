import DashboardShell from "@/components/shared/dashboardShell";
import TeamHeader from "@/components/team/teamHeader";
import { NavItem } from "@/types/user";
import { BellRing, LayoutGrid, Package, Settings, Ticket } from "lucide-react";

const TeamNavItems: NavItem[] = [
    { label: "Dashboard", href: "/team", icon: <LayoutGrid /> },
    { label: "Tickets", href: "/tickets", icon: <Ticket /> },
    { label: "Service", href: "/products", icon: <Package /> },
    { label: "Notification", href: "/notifications", icon: <BellRing /> },
    { label: "Setting", href: "/settings", icon: <Settings /> },
];

export default function CustomerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <DashboardShell
            navItems={TeamNavItems}
            homeHref="/user"
            header={<TeamHeader />} // Pass User Header Component
        >
            {children}
        </DashboardShell>
    );
}
