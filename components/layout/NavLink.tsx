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
    const path = usePathname();
    const isActive = path === href || (href !== `/` && path.startsWith(href));

    return (
        <Link
            href={href}
            className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium group transition-colors",
                isActive
                    ? "bg-secondary text-background" // Active state
                    : "text-zinc-400 hover:text-background", // Default state
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
