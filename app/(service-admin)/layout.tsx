import AdminHeader from "@/components/admin/adminHeader";
import DashboardShell from "@/components/shared/DashboardShell";
import { NavItem } from "@/types/dashboard";
import { LayoutGrid, Settings, Ticket, User } from "lucide-react";

const AdminNavItems: NavItem[] = [
    { label: "Dashboard", href: "/dashboard", icon: <LayoutGrid /> },
    { label: "SLA-Request", href: "/sla-request", icon: <Ticket /> },
    { label: "Client", href: "/s-notifications", icon: <User /> },
    { label: "Settings", href: "/settings", icon: <Settings /> },
];

export default function CustomerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <DashboardShell
            navItems={AdminNavItems}
            homeHref="/dashboard"
            header={<AdminHeader />}
        >
            {children}
        </DashboardShell>
    );
}
