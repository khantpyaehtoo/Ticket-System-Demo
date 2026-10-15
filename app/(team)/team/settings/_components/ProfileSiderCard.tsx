"use client";

import { KeyRound, LogOut, User } from "lucide-react";
import Image from "next/image";
// import { useState } from "react";
import profileImg from "@/public/defaultProfile.jpg";
import { signOut } from "@/actions/authAction";

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
        <div className="w-full lg:w-80 rounded-2xl bg-white shadow-sm border border-gray-100 overflow-hidden text-gray-800">
            {/* Top Dark Header Banner */}
            <div className="h-28 bg-[#3d333a]" />

            {/* Avatar Container */}
            <div className="flex justify-center -mt-14 relative z-10">
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
                    Frontend Developer
                </p>
            </div>

            <div className="p-5 mt-2">
                {/* Desktop: Navigation Options */}
                <div className="hidden lg:block space-y-2.5">
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
                        onClick={() => signOut()}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm text-red-500 hover:bg-red-50 transition-colors mt-4"
                    >
                        <LogOut className="w-5 h-5" />
                        <span>Log Out</span>
                    </button>
                </div>

                {/* Mobile: Navigation Options */}
                <div className="block lg:hidden">
                    <div className="flex items-center space-x-2">
                        {/* Personal Profile Button */}
                        <button
                            onClick={() => setActiveTab("profile")}
                            className={`w-full flex justify-center items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
                                activeTab === "profile"
                                    ? "bg-[#3d333a] text-white shadow-sm"
                                    : "text-gray-700 hover:bg-gray-100"
                            }`}
                        >
                            <User className="w-5 h-5" />
                            <p>Personal Profile</p>
                        </button>

                        {/* Change Password Button */}
                        <button
                            onClick={() => setActiveTab("password")}
                            className={`w-full flex justify-center items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
                                activeTab === "password"
                                    ? "bg-[#3d333a] text-white shadow-sm"
                                    : "text-gray-700 hover:bg-gray-100"
                            }`}
                        >
                            <KeyRound className="w-5 h-5" />
                            <span className="text-center">Change Password</span>
                        </button>
                    </div>
                    {/* Log Out Button */}
                    <button
                        onClick={() => signOut()}
                        className="w-full flex justify-center items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm text-red-500 bg-red-50  transition-colors mt-4"
                    >
                        <LogOut className="w-5 h-5" />
                        <span>Log Out</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
