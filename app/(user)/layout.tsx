import DashboardShell from "@/components/shared/DashboardShell";
import { NavItem } from "@/types/dashboard";
import { BellRing, LayoutGrid, Package, Settings, Ticket } from "lucide-react";
import UserHeader from "./_components/UserHeader";

const customerNavItems: NavItem[] = [
    { label: "Dashboard", href: "/dashboard", icon: <LayoutGrid /> },
    { label: "My Tickets", href: "/tickets", icon: <Ticket /> },
    { label: "My Products", href: "/products", icon: <Package /> },
    {
        label: "Notifications",
        href: "/notifications",
        icon: <BellRing />,
        hasBadge: true,
    },
    { label: "Settings", href: "/settings", icon: <Settings /> },
];

export default function CustomerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <DashboardShell
            navItems={customerNavItems}
            homeHref="/dashboard"
            header={<UserHeader />}
        >
            {children}
        </DashboardShell>
    );
}
