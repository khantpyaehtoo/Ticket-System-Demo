import DashboardShell from "@/components/shared/dashboardShell";
import { NavItem } from "@/types/user";

const customerNavItems: NavItem[] = [
    { label: "Dashboard", href: "/admin", icon: "squaresFour" },
    { label: "Tickets", href: "/admin-tickets", icon: "ticket" },
    { label: "Client", href: "/notifications", icon: "bellRinging" },
    { label: "Team", href: "/notifications", icon: "bellRinging" },
    { label: "Products", href: "/products", icon: "package" },
    { label: "Settings", href: "/settings", icon: "gearSix" },
];

export default function CustomerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <DashboardShell
            userName="Admin"
            subtitle="Welcome. Here's an overview of your service activity."
            navItems={customerNavItems}
            homeHref="/admin"
        >
            {children}
        </DashboardShell>
    );
}
