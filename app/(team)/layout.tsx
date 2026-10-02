import TeamHeader from "@/app/(team)/_components/TeamHeader";
import { NavItem } from "@/types/dashboard";
// import { BellRing, Settings } from "lucide-react";

const TeamNavItems: NavItem[] = [
    { label: "Works", href: "/team/main" },
    { label: "Assigned Tickets", href: "/team/tickets" },
    { label: "Notifications", href: "/team/notifications" },
    { label: "Settings", href: "/team/settings" },
];

export default function CustomerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-background min-h-full">
            <TeamHeader navItems={TeamNavItems} homeHref="/team/main" />
            <div className="p-6 md:p-10">{children}</div>
        </div>
    );
}
