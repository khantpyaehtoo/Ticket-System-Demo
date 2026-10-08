"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

export default function PieDonutChart() {
    const ticketStatus = [
        { label: "Assigned", value: 3, color: "#7c3aed" },
        { label: "Inprogress", value: 3, color: "#0284c7" },
        { label: "Resolved", value: 2, color: "#16a34a" },
        { label: "On Hold", value: 2, color: "#ea580c" },
        { label: "Reopened", value: 2, color: "#9333ea" },
    ];

    const data = {
        labels: ticketStatus.map((item) => item.label),
        datasets: [
            {
                data: ticketStatus.map((item) => item.value),
                backgroundColor: ticketStatus.map((item) => item.color),
                borderWidth: 0,
                hoverBackgroundColor: ticketStatus.map((item) => item.color),
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        // circumference: 180,
        // rotation: -90,
        cutout: "56%",
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    return (
        <div className="relative p-6 teamHeaderCard shadow-md rounded-2xl bg-white max-w-lg">
            <div className="space-y-1 mb-6">
                <h2 className="text-lg font-semibold text-gray-800 tracking-tight">
                    Work Status Overview
                </h2>
                <p className="font-light text-xs sm:text-sm text-gray-500">
                    Track the current status of your assigned tickets.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
                {/* Semi Donut Chart */}
                <div className="h-40 w-full flex justify-center items-center">
                    <Doughnut data={data} options={options} />
                </div>

                {/* Custom React Legend */}
                <div className="flex flex-col gap-3 w-full pr-2">
                    {ticketStatus.map((item) => (
                        <div
                            key={item.label}
                            className="flex items-center justify-between text-sm border-b border-dashed border-gray-200 pb-2"
                        >
                            <div className="flex items-center gap-2">
                                <span
                                    className="w-2.5 h-2.5 rounded-full inline-block shrink-0"
                                    style={{ backgroundColor: item.color }}
                                />
                                <span
                                    className="font-medium"
                                    style={{ color: item.color }}
                                >
                                    {item.label}
                                </span>
                            </div>

                            <span className="font-semibold text-gray-700">
                                {item.value}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
