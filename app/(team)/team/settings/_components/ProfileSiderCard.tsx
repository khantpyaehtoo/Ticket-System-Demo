"use client";

import { KeyRound, LogOut, User } from "lucide-react";
import Image from "next/image";
// import { useState } from "react";
import profileImg from "@/public/defaultProfile.jpg";

interface ProfileSidebarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export default function ProfileSidebarCard({
    activeTab,
    setActiveTab,
}: ProfileSidebarProps) {
    // const [activeTab, setActiveTab] = useState("profile");

    return (
        <div className="w-80 rounded-2xl bg-white shadow-sm border border-gray-100 overflow-hidden text-gray-800">
            {/* Top Dark Header Banner */}
            <div className="h-28 bg-[#3d333a]" />

            {/* Avatar Container */}
            <div className="flex justify-center -mt-14 relative z-10">
                {/* 
                  Added `relative` here so Next.js Image `fill` targets this 96x96 container correctly.
                  Used `border-4 border-white` for the clean white ring.
                */}
                <div className="relative w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-md bg-gray-200 shrink-0">
                    <Image
                        src={profileImg}
                        alt="Michael Jackson"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            {/* User Info */}
            <div className="text-center mt-3 px-4">
                <h3 className="font-bold text-gray-900 text-lg">
                    Michael Jackson
                </h3>
                <p className="text-sm text-gray-500 font-medium">
                    Front End Developer
                </p>
            </div>

            {/* Navigation Options */}
            <div className="p-5 space-y-2.5 mt-2">
                {/* Personal Profile Button */}
                <button
                    onClick={() => setActiveTab("profile")}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
                        activeTab === "profile"
                            ? "bg-[#3d333a] text-white shadow-sm"
                            : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                    <User className="w-5 h-5" />
                    <span>Personal Profile</span>
                </button>

                {/* Change Password Button */}
                <button
                    onClick={() => setActiveTab("password")}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
                        activeTab === "password"
                            ? "bg-[#3d333a] text-white shadow-sm"
                            : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                    <KeyRound className="w-5 h-5" />
                    <span>Change Password</span>
                </button>

                {/* Log Out Button */}
                <button
                    onClick={() => console.log("Logout")}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm text-red-500 hover:bg-red-50 transition-colors mt-4"
                >
                    <LogOut className="w-5 h-5" />
                    <span>Log Out</span>
                </button>
            </div>
        </div>
    );
}
