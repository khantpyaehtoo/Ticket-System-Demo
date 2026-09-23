import AdminHeader from "@/components/admin/adminHeader";
import DashboardShell from "@/components/shared/DashboardShell";
import { NavItem } from "@/types/user";
import {
    LayoutGrid,
    Package,
    Settings,
    Ticket,
    User,
    User2,
} from "lucide-react";

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
            homeHref="/user"
            header={<AdminHeader />}
        >
            {children}
        </DashboardShell>
    );
}
