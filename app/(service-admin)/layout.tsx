import DashboardShell from "@/components/shared/DashboardShell";
import { NavItem } from "@/types/dashboard";
import { LayoutGrid, Settings, Ticket, User } from "lucide-react";
import ServiceAdminHeader from "./_components/ServiceAdminHeader";

const ServiceAdminNavItem: NavItem[] = [
    {
        label: "Dashboard",
        href: "/serviceAdmin/home",
        icon: <LayoutGrid />,
    },
    {
        label: "SLA-Request",
        href: "/serviceAdmin/sla-request",
        icon: <Ticket />,
    },
    { label: "Client", href: "/serviceAdmin/s-notifications", icon: <User /> },
    { label: "Settings", href: "/serviceAdmin/settings", icon: <Settings /> },
];

export default function CustomerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <DashboardShell
            navItems={ServiceAdminNavItem}
            homeHref="/serviceAdmin/home"
            header={<ServiceAdminHeader />}
        >
            {children}
        </DashboardShell>
    );
}
