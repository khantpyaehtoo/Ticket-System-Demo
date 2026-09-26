"use client";

import { NavItem } from "@/types/dashboard";
import { Avatar } from "antd";
import Image from "next/image";
import Link from "next/link";
import profileImg from "@/public/defaultProfile.jpg";
import { usePathname } from "next/navigation";
import { useNotificationStore } from "@/store/useNotificationsStore";
import { cn } from "@/lib/utils";

interface navProps {
    navItems: NavItem[];
    homeHref: string;
}

export default function TeamHeader({ navItems, homeHref }: navProps) {
    const avatarUrl = profileImg.src;
    const pathname = usePathname();

    const unreadCount = useNotificationStore((state) => state.unreadCount);

    return (
        <header className="flex items-center justify-between p-6 bg-background text-white shadow-md">
            {/* Left side: Logo Side */}
            <Link href={homeHref}>
                <Image
                    src="/logo&text.svg"
                    alt="Digital Base"
                    width={140}
                    height={32}
                    className="brightness-0"
                    priority
                />
            </Link>

            {/* Center */}
            <nav className="space-y-1 flex">
                {navItems.map((item, key) => {
                    const isActive =
                        pathname === item.href ||
                        (item.href !== "/" &&
                            pathname.startsWith(`${item.href}/`));

                    return (
                        <Link
                            key={key}
                            href={item.href}
                            className={cn(
                                "flex items-center justify-between px-3 py-2.5 text-sm font-medium group transition-colors",
                                isActive
                                    ? "border-b border-b-primary text-primary"
                                    : "text-zinc-400 hover:text-secondary",
                            )}
                        >
                            {/* Left Content: Icon + Label */}
                            <div className="flex items-center gap-3">
                                {/* <span
                                    className={cn(
                                        "[&>svg]:w-5 [&>svg]:h-5 transition-colors",
                                        isActive
                                            ? "text-secondary"
                                            : "text-zinc-400 group-hover:text-background",
                                    )}
                                >
                                    {item.icon}
                                </span> */}
                                <span className="tracking-wider">
                                    {item.label}
                                </span>
                            </div>

                            {/* Right Content: Dot Badge */}
                            {/* {item.showBadge && (
                                <span className="relative flex h-2.5 w-2.5 shrink-0">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
                                </span>
                            )} */}
                        </Link>
                    );
                })}
            </nav>

            {/* Right side: Admin Badge & Quick Status */}
            <div className="flex items-center gap-4 md:gap-6">
                <div className="hidden md:flex items-center gap-4">
                    <div className="font-jetbrains text-xs text-right leading-tight space-y-1">
                        <p className="font-medium text-primary">
                            Micheal Jackson
                        </p>
                        <p className="text-primary">Frontend Developer</p>
                    </div>
                </div>

                <div className="pl-3 md:pl-4 border-l border-zinc-200">
                    <Link href="/settings">
                        <Avatar
                            src={
                                <Image
                                    src={avatarUrl}
                                    alt="Profile"
                                    fill
                                    className="object-cover"
                                />
                            }
                            size={40}
                            className="ring-2 ring-offset-2 ring-primary cursor-pointer relative overflow-hidden border-none!"
                        />
                    </Link>
                </div>
            </div>
        </header>
    );
}
