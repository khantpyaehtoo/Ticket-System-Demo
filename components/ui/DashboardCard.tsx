"use client";

import { cn } from "@/lib/utils";
import { Progress } from "antd";

import React, { ReactNode } from "react";

export interface DashboardCardProps {
    title: string;
    icon: ReactNode;
    plength?: number;
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
        <div
            className={cn(
                !plength ? "bg-primary" : "border-gray-300",
                "border px-4 sm:px-6 md:px-8 py-4 sm:py-5 rounded-2xl shadow-md w-full h-full flex flex-col justify-between",
            )}
        >
            {/* Header Section */}
            <div
                className={cn(
                    !plength
                        ? "text-gray-200 border-b-gray-500"
                        : "border-b-gray-300 text-gray-500",
                    "flex justify-between items-center pb-3 border-b",
                )}
            >
                <p className="text-xs sm:text-sm ">{title}</p>

                {!plength ? (
                    <div className="flex items-center space-x-2">
                        <p className="text-xs shrink-0">
                            (100 <small>Hours</small>)
                        </p>
                        <p className="text-xs! shrink-0">{icon}</p>
                    </div>
                ) : (
                    <p className="text-base sm:text-lg shrink-0">{icon}</p>
                )}
            </div>

            {/* Middle Section (Progress & Value) */}
            <div className="my-4 sm:my-6 md:my-8 flex items-center gap-4 sm:gap-6">
                {plength && (
                    <>
                        <div className="shrink-0">
                            <Progress
                                type="circle"
                                percent={type === "Products" ? 0 : plength}
                                strokeColor={"#15803D"}
                                size={60}
                                format={() =>
                                    type === "Products" ? length : `${plength}`
                                }
                            />
                        </div>

                        <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium break-all">
                            {length}{" "}
                            <span className="text-xs font-light text-gray-500">
                                {type}
                            </span>
                        </span>
                    </>
                )}

                {!plength && (
                    <>
                        <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium break-all text-white space-y-3">
                            <p>
                                {" "}
                                5 <small>Hrs</small> 30 <small>Mins</small>
                            </p>
                            <p className="text-xs font-medium text-reviewing tracking-wider">
                                Remaining Hours - 94 Hrs 30 Mins
                            </p>
                        </span>
                    </>
                )}
            </div>

            {/* Footer Section */}
            <div
                className={cn(
                    !plength
                        ? "border-t-gray-500 text-gray-300"
                        : "border-t-gray-300 text-gray-500",
                    "border-t  pt-3 sm:pt-4  flex justify-between items-center text-xs gap-2",
                )}
            >
                <p className="">{inform_1}</p>
                <p className="text-right">{inform_2}</p>
            </div>
        </div>
    );
}
