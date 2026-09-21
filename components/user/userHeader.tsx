"use client";

import { Avatar } from "antd";
import { Search } from "lucide-react";
import Image from "next/image";
import { useRealTime } from "@/lib/hooks/useRealTime";
import { useUserStore } from "@/store/useUserStore";
import profileImg from "@/public/defaultProfile.jpg";
import Link from "next/link";
import { usePathname } from "next/navigation";

type HeaderLeftConfig = {
    type: "search" | "title";
    title?: string;
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
    "/products": {
        type: "title",
        title: "My Products",
        description: "Your active tools and subscription services",
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
        <header className="flex items-center justify-between p-6 bg-background shadow-md">
            {/* Dynamic Left Side */}
            <div className="flex items-center">
                {currentLeftConfig.type === "search" ? (
                    /* Search Bar Option */
                    <div className="relative w-72">
                        <Search className="absolute left-3 top-2.5 w-4 h-4 text-black" />
                        <input
                            type="text"
                            placeholder={currentLeftConfig.searchPlaceholder}
                            className="w-full bg-cancelled/20 text-sm pl-9 pr-4 py-2 rounded-lg text-black border border-cancelled focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                    </div>
                ) : (
                    /* Page Title & Description Option */
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

            {/* Right side: Credit Status, Date/Time & Profile */}
            <div className="flex items-center gap-6">
                {/* Status Badge */}
                <div className="flex items-center gap-2 bg-resolved/10 text-resolved px-3 py-1 rounded-full text-xs">
                    <div className="w-2.5 h-2.5 rounded-full bg-resolved animate-pulse" />
                    <span>Available: 85/100 mins Credit</span>
                </div>

                {/* Date & Profile Container */}
                <div className="flex items-center gap-4">
                    <div className="font-jetbrains text-xs text-right leading-tight space-y-3">
                        <p className="font-medium text-primary">
                            {formattedDate}
                        </p>
                        <p className="text-primary">{formattedTime}</p>
                    </div>

                    <div className="pl-4 border-l border-zinc-200">
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
            </div>
        </header>
    );
}
