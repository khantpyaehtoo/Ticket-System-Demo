import DashboardShell from "@/components/shared/dashboardShell";
import { NavItem } from "@/types/user";

const customerNavItems: NavItem[] = [
    { label: "Dashboard", href: "/user", icon: "squaresFour" },
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
            userName="User"
            subtitle="Welcome. Here's an overview of your service activity."
            navItems={customerNavItems}
            homeHref="/user"
        >
            {children}
        </DashboardShell>
    );
}
