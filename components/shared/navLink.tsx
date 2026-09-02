"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon, IconName } from "../ui/icon";

interface NavLinkProps {
    href: string;
    label: string;
    icon: IconName;
}

export default function NavLink({ href, label, icon }: NavLinkProps) {
    const pathname = usePathname();

    // Exactly match (e.g. /dashboard) or Nested match (e.g. /tickets/123)
    const isActive =
        pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

    return (
        <Link
            href={href}
            className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium group transition-colors",
                isActive
                    ? "bg-secondary text-background" // Active State
                    : "text-zinc-400 hover:text-background", // Idle/Hover State
            )}
        >
            <Icon
                name={icon}
                className={cn(
                    "w-5 h-5 transition-colors",
                    isActive
                        ? "text-background"
                        : "text-zinc-400 group-hover:text-background",
                )}
            />
            <span>{label}</span>
        </Link>
    );
}
