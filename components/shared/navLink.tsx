"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface NavLinkProps {
    href: string;
    label: string;
    icon: ReactNode;
}

export default function NavLink({ href, label, icon }: NavLinkProps) {
    const pathname = usePathname();

    const isActive =
        pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

    return (
        <Link
            href={href}
            className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium group transition-colors",
                isActive
                    ? "bg-secondary text-background"
                    : "text-zinc-400 hover:text-background",
            )}
        >
            {/* 3. Render the JSX element directly and style wrapper or pass class through parent */}
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
            <span>{label}</span>
        </Link>
    );
}
