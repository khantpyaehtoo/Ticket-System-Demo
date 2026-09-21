"use client";

import { Progress } from "antd";

import React, { ReactNode } from "react";

export interface DashboardCardProps {
    title: string;
    icon: ReactNode;
    plength: number;
    length: number | string;
    type: string;
    inform_1: string;
    inform_2: string;
}

export default function dashboardCard({
    title,
    icon,
    plength,
    length,
    type,
    inform_1,
    inform_2,
}: DashboardCardProps) {
    return (
        <div className="border border-gray-300 px-4 sm:px-6 md:px-8 py-4 sm:py-5 rounded-2xl shadow-md w-full h-full flex flex-col justify-between bg-white">
            {/* Header Section */}
            <div className="flex justify-between items-center border-b border-b-gray-300 pb-3 text-gray-500">
                <p className="text-xs sm:text-sm md:text-base font-medium truncate">
                    {title}
                </p>
                <p className="text-base sm:text-lg shrink-0">{icon}</p>
            </div>

            {/* Middle Section (Progress & Value) */}
            <div className="my-4 sm:my-6 md:my-8 flex items-center gap-4 sm:gap-6">
                <div className="shrink-0">
                    <Progress
                        type="circle"
                        percent={plength}
                        strokeColor={"#15803D"}
                        size={60}
                    />
                </div>
                <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium break-all">
                    {length}{" "}
                    <span className="text-xs font-light text-gray-500">
                        {type}
                    </span>
                </span>
            </div>

            {/* Footer Section */}
            <div className="border-t border-t-gray-300 pt-3 sm:pt-4 text-gray-500 flex justify-between items-center text-xs gap-2">
                <p className="truncate">{inform_1}</p>
                <p className="truncate text-right">{inform_2}</p>
            </div>
        </div>
    );
}
