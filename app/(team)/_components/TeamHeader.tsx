"use client";

import { NavItem } from "@/types/dashboard";
import { Avatar } from "antd";
import Image from "next/image";
import Link from "next/link";
import profileImg from "@/public/defaultProfile.jpg";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface navProps {
    navItems: NavItem[];
    homeHref: string;
}

export default function TeamHeader({ navItems, homeHref }: navProps) {
    const avatarUrl = profileImg.src;
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const iconGroup = navItems.filter((item) => item.icon);
    const workGroup = navItems.filter((item) => !item.icon);

    const handleToggleMenu = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsMobileMenuOpen((prev) => !prev);
    };

    const renderNavLink = (item: NavItem, key: number, isMobile = false) => {
        const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(`${item.href}/`));

        if (isMobile) {
            return (
                <Link
                    key={key}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                        "flex items-center justify-between text-base font-medium transition-all py-3 px-4 rounded-2xl cursor-pointer select-none active:scale-[0.98]",
                        isActive
                            ? "font-semibold bg-secondary shadow-inner text-white"
                            : "text-zinc-400 hover:text-primary border border-transparent",
                    )}
                >
                    <span>{item.label || item.icon}</span>
                </Link>
            );
        }

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
                        <span className="text-sm -mt-1">{item.icon}</span>
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
        <header className="sticky top-0 z-50 flex flex-col p-4 md:p-6 bg-background text-white shadow-md">
            <div className="flex items-center justify-between w-full">
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

                {/* Center: Desktop Text Navigation Items */}
                <nav className="hidden md:flex items-center justify-center flex-1 pl-12 lg:pl-40">
                    <div className="flex items-center gap-6">
                        {workGroup.map((item, key) => renderNavLink(item, key))}
                    </div>
                </nav>

                {/* Right side: Icons Group + Admin Info + Avatar + Hamburger */}
                <div className="flex items-center gap-3 md:gap-6">
                    {/* Desktop Icons Group */}
                    <div className="hidden md:flex items-center gap-4 mr-2">
                        {iconGroup.map((item, key) => renderNavLink(item, key))}
                    </div>

                    {/* Desktop Admin Badge */}
                    <div className="hidden md:flex items-center gap-4 whitespace-nowrap pl-6">
                        <div className=" text-right leading-tight space-y-1">
                            <p className="text-md font-medium text-primary">
                                Micheal Jackson
                            </p>
                            <p className="text-xs text-primary">
                                Frontend Developer
                            </p>
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

                    {/* Mobile Hamburger Button */}
                    <button
                        type="button"
                        onClick={handleToggleMenu}
                        aria-label="Toggle Navigation Menu"
                        className="md:hidden relative w-10 h-10 rounded-full bg-primary border border-zinc-700 flex flex-col justify-center items-center gap-[5px] text-white focus:outline-none active:scale-95 transition-all cursor-pointer z-202 touch-manipulation"
                    >
                        <span
                            className={cn(
                                "w-5 h-[2px] bg-current rounded-full transition-all duration-300 ease-in-out transform origin-center",
                                isMobileMenuOpen &&
                                    "translate-y-[7px] rotate-45 text-white",
                            )}
                        />
                        <span
                            className={cn(
                                "w-5 h-[2px] bg-current rounded-full transition-all duration-200 ease-in-out",
                                isMobileMenuOpen
                                    ? "opacity-0 scale-0"
                                    : "opacity-100",
                            )}
                        />
                        <span
                            className={cn(
                                "w-5 h-[2px] bg-current rounded-full transition-all duration-300 ease-in-out transform origin-center",
                                isMobileMenuOpen &&
                                    "-translate-y-[7px] -rotate-45 text-white",
                            )}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Floating Slide-Down Menu */}
            <div
                className={cn(
                    "md:hidden absolute top-full left-0 right-0 bg-background shadow-2xl overflow-hidden transition-all duration-300 ease-in-out z-50",
                    isMobileMenuOpen
                        ? "max-h-[450px] opacity-100 p-4 border-t border-primary"
                        : "max-h-0 opacity-0 px-4 py-0 border-t border-transparent pointer-events-none",
                )}
            >
                {/* Mobile Profile Details Summary */}
                <div className="flex items-center gap-3 px-4 py-3 mb-3 bg-primary rounded-xl border border-zinc-800">
                    <div className="font-jetbrains text-xs leading-tight space-y-0.5">
                        <p className="font-medium text-white text-sm">
                            Micheal Jackson
                        </p>
                        <p className="text-zinc-300">Frontend Developer</p>
                    </div>
                </div>

                <nav className="flex flex-col space-y-1.5">
                    {navItems.map((item, key) =>
                        renderNavLink(item, key, true),
                    )}
                </nav>
            </div>
        </header>
    );
}
