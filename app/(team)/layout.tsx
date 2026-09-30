import TeamHeader from "@/app/(team)/_components/TeamHeader";
import { NavItem } from "@/types/dashboard";
import { BellRing, Settings } from "lucide-react";

const TeamNavItems: NavItem[] = [
    { label: "Works", href: "/team/main" },
    { label: "Assigned Tickets", href: "/team/tickets" },
    { label: "Notification", href: "/team/notifications", icon: <BellRing /> },
    { label: "Setting", href: "/team/settings", icon: <Settings /> },
];

export default function CustomerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-background h-full">
            <TeamHeader navItems={TeamNavItems} homeHref="/team-works" />
            {children}
        </div>
    );
}
