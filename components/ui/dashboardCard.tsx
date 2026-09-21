"use client";

import { Progress } from "antd";

import React from "react";

export default function dashboardCard({
    title,
    icon,
    plength,
    length,
    type,
    inform_1,
    inform_2,
}) {
    return (
        <div className="border border-gray-300 px-8 py-5 rounded-2xl shadow-md">
            <div className="flex justify-between items-center border-b border-b-gray-300 pb-3 text-gray-500">
                <p>{title}</p>
                {/* <Clock /> */}
                {icon}
            </div>
            <div className="mt-10 flex items-center space-x-10!">
                <Progress
                    type="circle"
                    percent={plength}
                    strokeColor={"#15803D"}
                    size={70}
                />
                <span className="text-2xl font-medium">
                    {length} <span className="text-xs font-light">{type}</span>
                </span>
            </div>
            <div className="border-t border-t-gray-300 mt-8 pt-4 text-gray-500 flex justify-between items-center text-sm space-x-10">
                <p>{inform_1}</p>
                <p>{inform_2}</p>
            </div>
        </div>
    );
}
