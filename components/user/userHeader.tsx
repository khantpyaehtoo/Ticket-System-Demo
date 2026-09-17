"use client";

import { Avatar } from "antd";
import { Search } from "lucide-react";
import Image from "next/image";
import { useRealTime } from "@/lib/hooks/useRealTime";
import { useUserStore } from "@/store/useUserStore";
import profileImg from "@/public/defaultProfile.jpg";
import Link from "next/link";

export default function UserHeader() {
    const imageSrc = useUserStore((state) => state.imageSrc);
    const { formattedDate, formattedTime } = useRealTime();

    const avatarUrl = imageSrc || profileImg.src;

    return (
        <header className="flex items-center justify-between p-6 bg-background shadow-md">
            {/* Left side: Search bar */}
            <div className="relative w-72">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-black" />
                <input
                    type="text"
                    placeholder="Search systems or users..."
                    className="w-full bg-cancelled/20 text-sm pl-9 pr-4 py-2 rounded-lg text-black border border-cancelled focus:outline-none focus:ring-1 focus:ring-primary"
                />
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
