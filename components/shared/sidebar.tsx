import Image from "next/image";
import Link from "next/link";
import { Icon, IconName } from "@/components/ui/icon";
import NavLink from "./navLink";

export interface NavItem {
    label: string;
    href: string;
    icon: IconName;
}

interface SidebarProps {
    navItems: NavItem[];
}

export default function Sidebar({ navItems }: SidebarProps) {
    return (
        <aside className="w-64 bg-primary text-background min-h-screen flex flex-col justify-between p-6 shrink-0 border-r border-zinc-800">
            <div className="space-y-8">
                {/* Logo Section */}
                <div className="flex justify-center items-center gap-2">
                    <Link href={"/dashboard"}>
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
            <button className="flex items-center justify-center gap-2 w-full py-2.5 bg-background text-secondary font-medium rounded-xl hover:bg-secondary hover:text-background transition-colors cursor-pointer">
                <Icon name="signOut" className="w-4 h-4" />
                <span>Log Out</span>
            </button>
        </aside>
    );
}
