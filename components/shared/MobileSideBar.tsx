"use client";

import { X } from "lucide-react";
import { useSidebarStore } from "@/store/useSidebarStore";

import NavLink from "./NavLink";
import SignOutBtn from "./SignOutBtn";
import Link from "next/link";
import Image from "next/image";
import { SidebarProps } from "./Sidebar";

export default function MobileSideBar({ navItems, homeHref }: SidebarProps) {
    const { isOpen, closeSidebar } = useSidebarStore();

    return (
        <div>
            {/* Mobile Drawer Backdrop */}
            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm transition-opacity"
                    onClick={closeSidebar}
                />
            )}
            {/* Mobile Drawer Sidebar */}
            <aside
                className={`lg:hidden fixed top-0 left-0 bottom-0 z-50 w-64 bg-primary text-background p-6 flex flex-col justify-between border-r border-zinc-800 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="space-y-8">
                    {/* Header with Close Button */}
                    <div className="flex justify-between items-center pr-2">
                        <Link href={homeHref} onClick={closeSidebar}>
                            <Image
                                src="/logo&text.svg"
                                alt="Digital Base"
                                width={130}
                                height={30}
                                priority
                            />
                        </Link>
                        <button
                            onClick={closeSidebar}
                            className="p-1 text-background/80 hover:text-background transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Navigation Items (auto-closes drawer on click) */}
                    <nav className="space-y-1">
                        {navItems.map((item) => (
                            <div key={item.href} onClick={closeSidebar}>
                                <NavLink
                                    href={item.href}
                                    label={item.label}
                                    icon={item.icon}
                                />
                            </div>
                        ))}
                    </nav>
                </div>

                {/* Logout Button */}
                <div onClick={closeSidebar}>
                    <SignOutBtn />
                </div>
            </aside>
        </div>
    );
}
