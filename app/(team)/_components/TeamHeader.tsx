"use client";

import { NavItem } from "@/types/dashboard";
import { Avatar } from "antd";
import Image from "next/image";
import Link from "next/link";
import profileImg from "@/public/defaultProfile.jpg";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface navProps {
    navItems: NavItem[];
    homeHref: string;
}

export default function TeamHeader({ navItems, homeHref }: navProps) {
    const avatarUrl = profileImg.src;
    const pathname = usePathname();

    const iconGroup = navItems.filter((item) => item.icon);
    const workGroup = navItems.filter((item) => !item.icon);

    const renderNavLink = (item: NavItem, key: number) => {
        const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(`${item.href}/`));

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
                {item.icon ? (
                    <div className="flex items-center">
                        <span>{item.icon}</span>
                    </div>
                ) : (
                    <div className="flex items-center gap-3">
                        <span>{item.label}</span>
                    </div>
                )}
            </Link>
        );
    };

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

            {/* Center: Only the Text Navigation Items */}
            <nav className="flex items-center justify-center flex-1 pl-40">
                <div className="flex items-center gap-6">
                    {workGroup.map((item, key) => renderNavLink(item, key))}
                </div>
            </nav>

            {/* Right side: Icons Group + Admin Info + Avatar */}
            <div className="flex items-center gap-4 md:gap-6 ">
                <div className="flex items-center gap-4 mr-2">
                    {iconGroup.map((item, key) => renderNavLink(item, key))}
                </div>

                <div className="hidden md:flex items-center gap-4 whitespace-nowrap border-l border-zinc-200 pl-6">
                    <div className="font-jetbrains text-xs text-right leading-tight space-y-1">
                        <p className="font-medium text-primary">
                            Micheal Jackson
                        </p>
                        <p className="text-primary">Frontend Developer</p>
                    </div>
                </div>

                <div>
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
