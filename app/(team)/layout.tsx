import DashboardShell from "@/components/shared/dashboardShell";
import { NavItem } from "@/types/user";

const customerNavItems: NavItem[] = [
    { label: "Dashboard", href: "/team", icon: "squaresFour" },
    { label: "Tickets", href: "/tickets", icon: "ticket" },
    { label: "Service", href: "/products", icon: "package" },
    { label: "Notification", href: "/notifications", icon: "bellRinging" },
    { label: "Setting", href: "/settings", icon: "gearSix" },
];

export default function CustomerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <DashboardShell
            userName="Team"
            subtitle="Welcome. Here's an overview of your service activity."
            navItems={customerNavItems}
        >
            {children}
        </DashboardShell>
    );
}
