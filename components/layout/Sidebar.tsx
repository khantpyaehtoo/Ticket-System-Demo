import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/icon"; // Using your SVGR icon setup
import NavLink from "./NavLink";

const navItems = [
    { label: "Dashboard", href: "/", icon: "squaresFour" },
    { label: "My Tickets", href: "/tickets", icon: "ticket" },
    { label: "My Products", href: "/products", icon: "package" },
    { label: "Notifications", href: "/notifications", icon: "bellRinging" },
    { label: "Settings", href: "/settings", icon: "gearSix" },
] as const;

export default function Sidebar() {
    return (
        <aside className="w-64 bg-primary text-background min-h-screen flex flex-col justify-between p-6 shrink-0 border-r border-zinc-800">
            <div className="space-y-8">
                {/* Logo Section */}
                <div className="flex justify-center items-center gap-2">
                    <Link href={"/"}>
                        <Image
                            src="/logo&text.svg"
                            alt="Digital Base"
                            width={140}
                            height={32}
                            priority
                        />
                    </Link>
                </div>

                {/* Navigation Items */}
                <nav className="space-y-1">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.href}
                            href={item.href}
                            label={item.label}
                            icon={item.icon}
                        />
                    ))}
                </nav>
            </div>

            {/* Logout Button */}
            <button className="flex items-center justify-center gap-2 w-full py-2.5 bg-background text-secondary font-medium rounded-xl hover:bg-secondary hover:text-background transition-colors">
                <Icon name="signOut" className="w-4 h-4" />
                <span>Log Out</span>
            </button>
        </aside>
    );
}
