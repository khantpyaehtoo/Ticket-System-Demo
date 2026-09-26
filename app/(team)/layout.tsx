// import TeamHeader from "@/app/(team)/_components/TeamHeader";
// import { NavItem } from "@/types/dashboard";
// import { BellRing, LayoutGrid, Settings, Ticket } from "lucide-react";

// const TeamNavItems: NavItem[] = [
//     { label: "My Works", href: "/team-works", icon: <LayoutGrid /> },
//     { label: "My Tickets", href: "/team-tickets", icon: <Ticket /> },
//     // { label: "Service", href: "/products", icon: <Package /> },
//     { label: "Notification", href: "/team-notifications", icon: <BellRing /> },
//     { label: "Setting", href: "/team-settings", icon: <Settings /> },
// ];

export default function CustomerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-background h-full">
            {/* <TeamHeader navItems={TeamNavItems} homeHref="/team-works" /> */}
            {children}
        </div>
    );
}
