"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

export interface DashboardCardProps {
    title: string;
    icon: ReactNode;
    length: number | string;
    type: string;
    inform_1: string;
    inform_2: string;
}

export default function DashboardCard({
    title,
    icon,
    length,
    type,
    inform_1,
    inform_2,
}: DashboardCardProps) {
    return (
        <div className="relative w-full max-w-sm h-[200px] flex flex-col justify-between p-6 group">
            <svg
                className="absolute inset-0 w-full h-full pointer-events-none drop-shadow-sm "
                viewBox="0 0 320 200"
                preserveAspectRatio="none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="
                        M 16 0 
                        H 226 
                        C 234 0, 242 8, 242 16  
                        V 36 
                        C 242 48, 252 58, 264 58 
                        H 298 
                        C 320 62, 320 80, 320 100 
                        V 184 
                        C 320 192, 312 200, 304 200 
                        H 16 
                        C 8 200, 0 192, 0 184 
                        V 16 
                        C 0 8, 8 0, 16 0 
                        Z
                    "
                    fill="#ffffff"
                    stroke="#d9d9d9"
                    strokeWidth="1.5"
                />
            </svg>

            <div className="absolute -top-3 right-1.5 z-10 p-2">
                <div className="bg-black text-white p-2 rounded-full shadow-md flex items-center justify-center">
                    {icon}
                </div>
            </div>

            {/* 3. Card Content */}
            <div className="relative z-10 flex flex-col justify-between h-full">
                {/* Header Section */}
                <div className="pr-24">
                    <p className="text-xs sm:text-sm font-medium text-gray-500">
                        {title}
                    </p>
                </div>

                {/* Middle Section (Value & Type) */}
                <div className="my-2 flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                        {length}
                    </span>
                    <span className="text-xs sm:text-sm font-normal text-gray-500">
                        {type}
                    </span>
                </div>

                {/* Footer Section */}
                <div className="border-t border-gray-100 pt-3 flex justify-between items-center text-xs text-gray-500">
                    <span className="font-medium text-gray-600">
                        {inform_1}
                    </span>
                    <span className="text-right text-gray-400">{inform_2}</span>
                </div>
            </div>
        </div>
    );
}
