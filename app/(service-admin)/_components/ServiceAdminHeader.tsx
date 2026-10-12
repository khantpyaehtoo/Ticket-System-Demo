import React from "react";
import { Search, Bell, Shield } from "lucide-react";

export default function ServiceAdminHeader() {
    return (
        <header className="flex items-center justify-between p-6 bg-gray-800 text-primary border-b border-zinc-800">
            {/* Left side: Search bar */}
            <div className="relative w-72">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-zinc-400" />
                <input
                    type="text"
                    placeholder="Search systems or users..."
                    className="w-full bg-zinc-200 text-sm pl-9 pr-4 py-2 rounded-lg text-primary border border-zinc-200 focus:outline-none"
                />
            </div>

            {/* Right side: Admin Badge & Quick Status */}
            <div className="flex items-center gap-5">
                <div className="flex items-center gap-2 bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-xs border border-green-500/20">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Admin Access</span>
                </div>
                <Bell className="w-5 h-5 text-zinc-400 cursor-pointer hover:text-white" />
            </div>
        </header>
    );
}
