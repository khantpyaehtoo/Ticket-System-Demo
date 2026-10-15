import DashboardShell from "@/components/shared/DashboardShell";
import { NavItem } from "@/types/dashboard";
import {
    LayoutGrid,
    Package,
    Settings,
    Ticket,
    User,
    User2,
} from "lucide-react";
import AdminHeader from "./_components/adminHeader";

const AdminNavItems: NavItem[] = [
    { label: "Dashboard", href: "/admin", icon: <LayoutGrid /> },
    { label: "Tickets", href: "/admin-tickets", icon: <Ticket /> },
    { label: "Client", href: "/notifications", icon: <User /> },
    { label: "Team", href: "/notifications", icon: <User2 /> },
    { label: "Products", href: "/products", icon: <Package /> },
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
            homeHref="/admin/dashboard"
            header={<AdminHeader />}
        >
            {children}
        </DashboardShell>
    );
}
