"use client";

import { cn } from "@/lib/utils";
import { useNotificationStore } from "@/store/useNotificationsStore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps {
    href: string;
    label: string;
    icon: ReactNode;
    hasBadge?: boolean;
}

export default function NavLink({ href, label, icon, hasBadge }: NavLinkProps) {
    const pathname = usePathname();

    const unreadCount = useNotificationStore((state) => state.unreadCount);

    const isActive =
        pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

    const showBadge = hasBadge && unreadCount > 0;

    return (
        <Link
            href={href}
            className={cn(
                "flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium group transition-colors",
                isActive
                    ? "bg-secondary text-background"
                    : "text-zinc-400 hover:text-background",
            )}
        >
            {/* Left Content: Icon + Label */}
            <div className="flex items-center gap-3">
                <span
                    className={cn(
                        "[&>svg]:w-5 [&>svg]:h-5 transition-colors",
                        isActive
                            ? "text-background"
                            : "text-zinc-400 group-hover:text-background",
                    )}
                >
                    {icon}
                </span>
                <span className="tracking-wider">{label}</span>
            </div>

            {/* Right Content: Dot Badge */}
            {showBadge && (
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
                </span>
            )}
        </Link>
    );
}
