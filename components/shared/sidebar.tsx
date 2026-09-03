import Image from "next/image";
import Link from "next/link";
import NavLink from "./navLink";
import { NavItem } from "@/types/user";
import SignOutBtn from "./signOutBtn";

interface SidebarProps {
    navItems: NavItem[];
    homeHref?: string;
}

export default function Sidebar({ navItems, homeHref }: SidebarProps) {
    return (
        <aside className="w-64 bg-primary text-background min-h-screen flex flex-col justify-between p-6 shrink-0 border-r border-zinc-800">
            <div className="space-y-8">
                {/* Logo Section */}
                <div className="flex justify-center items-center gap-2">
                    <Link href={homeHref}>
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
            <SignOutBtn />
        </aside>
    );
}
