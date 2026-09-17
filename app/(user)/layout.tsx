import DashboardShell from "@/components/shared/dashboardShell";
import UserHeader from "@/components/user/userHeader";
import { NavItem } from "@/types/user";
import { BellRing, LayoutGrid, Package, Settings, Ticket } from "lucide-react";

const customerNavItems: NavItem[] = [
    { label: "Dashboard", href: "/user", icon: <LayoutGrid /> },
    { label: "My Tickets", href: "/tickets", icon: <Ticket /> },
    { label: "My Products", href: "/products", icon: <Package /> },
    { label: "Notifications", href: "/noti", icon: <BellRing /> },
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
            homeHref="/user"
            header={<UserHeader />}
        >
            {children}
        </DashboardShell>
    );
}
