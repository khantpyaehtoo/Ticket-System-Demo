import DashboardShell from "@/components/shared/dashboardShell";
import { NavItem } from "@/components/shared/sidebar";

const customerNavItems: NavItem[] = [
    { label: "Dashboard", href: "/dashboard", icon: "squaresFour" },
    { label: "My Tickets", href: "/tickets", icon: "ticket" },
    { label: "My Products", href: "/products", icon: "package" },
    { label: "Notifications", href: "/notifications", icon: "bellRinging" },
    { label: "Settings", href: "/settings", icon: "gearSix" },
];

export default function CustomerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <DashboardShell
            userName="Ohmar Kyaw"
            subtitle="Welcome. Here's an overview of your service activity."
            navItems={customerNavItems}
        >
            {children}
        </DashboardShell>
    );
}
