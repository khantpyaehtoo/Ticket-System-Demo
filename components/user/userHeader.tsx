"use client";

import { Avatar } from "antd";
import { Search, Menu } from "lucide-react";
import Image from "next/image";
import { useRealTime } from "@/lib/hooks/useRealTime";
import { useUserStore } from "@/store/useUserStore";
import profileImg from "@/public/defaultProfile.jpg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileHamburgerBtn from "../ui/MobileHamburgerBtn";
import { ReactNode } from "react";

type HeaderLeftConfig = {
    type: "search" | "title";
    title?: string | ReactNode;
    description?: string;
    searchPlaceholder?: string;
};

const headerLeftMap: Record<string, HeaderLeftConfig> = {
    "/user": {
        type: "title",
        title: "Welcome Back!",
        description: "Here's and overview of your tickets and service requests",
    },
    "/tickets": {
        type: "title",
        title: "My Tickets",
        description: "View and manage all your support requests",
    },
    "/tickets/create": {
        type: "title",
        title: "My Tickets",
        description:
            "Describe your issue and provide any details that may help our support team understand and resolve it.",
    },
    "/tickets/details/1": {
        type: "title",
        title: (
            <div className="font-jetbrains flex space-x-4">
                <span>Cr </span>
                <span className="underline">Technical Issues</span>
            </div>
        ),
        description:
            "View your ticket status, details and conversation with our support team.",
    },
    "/products": {
        type: "title",
        title: "My Products",
        description: "Your active tools and subscription services",
    },
    "/products/viewProduct/1": {
        type: "title",
        title: (
            <div className="flex space-x-4">
                <span>Product Name </span>
            </div>
        ),
        description: "Service Booking and Management System",
    },
    "/noti": {
        type: "title",
        title: "Notifications",
        description: "Recent alerts and updates",
    },
    "/settings": {
        type: "title",
        title: "Account Settings",
        description: "Manage your preferences and profile details",
    },
};

export default function UserHeader() {
    const pathname = usePathname();
    const imageSrc = useUserStore((state) => state.imageSrc);
    const { formattedDate, formattedTime } = useRealTime();

    const avatarUrl = imageSrc || profileImg.src;

    const currentLeftConfig = headerLeftMap[pathname] || {
        type: "title",
        title: "Dashboard",
        description: "Welcome to your panel",
    };

    return (
        <header className="sticky top-0 z-30 flex items-center justify-between p-4 md:p-6 bg-background shadow-md">
            {/* Dynamic Left Side + Mobile Hamburger Button */}
            <div className="flex items-center gap-3">
                {/* Hamburger Menu Button (Mobile/Tablet Only) */}
                <MobileHamburgerBtn />

                {/* Left Title Config (Hidden on mobile if desired, or keep visible) */}
                <div className="hidden sm:block">
                    {currentLeftConfig.type === "search" ? (
                        <div className="relative w-72">
                            <Search className="absolute left-3 top-2.5 w-4 h-4 text-black" />
                            <input
                                type="text"
                                placeholder={
                                    currentLeftConfig.searchPlaceholder
                                }
                                className="w-full bg-cancelled/20 text-sm pl-9 pr-4 py-2 rounded-lg text-black border border-cancelled focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                        </div>
                    ) : (
                        <div className="space-y-0.5">
                            <h1 className="text-xl font-bold text-primary tracking-tight">
                                {currentLeftConfig.title}
                            </h1>
                            {currentLeftConfig.description && (
                                <p className="text-xs text-primary">
                                    {currentLeftConfig.description}
                                </p>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Right side: Credit Status, Date/Time & Profile */}
            <div className="flex items-center gap-4 md:gap-6">
                <div className="flex items-center gap-2 bg-resolved/10 text-resolved px-3 py-1 rounded-full text-xs">
                    <div className="w-2.5 h-2.5 rounded-full bg-resolved animate-pulse" />
                    <span className="hidden sm:inline">
                        Available: 85/100 mins Credit
                    </span>
                    <span className="sm:hidden">85/100 mins Credit</span>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <div className="font-jetbrains text-xs text-right leading-tight space-y-1">
                        <p className="font-medium text-primary">
                            {formattedDate}
                        </p>
                        <p className="text-primary">{formattedTime}</p>
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
                            className="ring-2 ring-offset-2 ring-primary cursor-pointer relative overflow-hidden !border-none"
                        />
                    </Link>
                </div>
            </div>
        </header>
    );
}
