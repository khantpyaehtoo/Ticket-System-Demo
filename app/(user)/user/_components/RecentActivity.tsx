"use client";

import { Avatar } from "antd";
import React from "react";

export default function RecentActivity() {
    return (
        <div className="w-full bg-background border border-primary/10 rounded-xl p-6 shadow-sm space-y-6 text-black">
            {/* Header */}
            <div className="pb-4 border-b border-primary/10">
                <h2 className="text-lg font-bold text-secondary tracking-tight">
                    Recent Activity
                </h2>
                <p className="font-light text-sm">
                    view the latest updates and activities on your tickets.
                </p>
            </div>

            {/* Properties List */}
            <div className="space-y-4 text-sm"></div>
        </div>
    );
}
