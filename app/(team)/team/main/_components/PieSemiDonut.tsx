"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

export default function PieSemiDonut() {
    const priorityItems = [
        { label: "Low", value: 3, color: "#1d4ed8" },
        { label: "Medium", value: 3, color: "#f59e0b" },
        { label: "High", value: 2, color: "#ea580c" },
        { label: "Critical", value: 2, color: "#b91c1c" },
    ];

    const data = {
        labels: priorityItems.map((item) => item.label),
        datasets: [
            {
                data: priorityItems.map((item) => item.value),
                backgroundColor: priorityItems.map((item) => item.color),
                borderWidth: 0,
                hoverBackgroundColor: priorityItems.map((item) => item.color),
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        circumference: 180,
        rotation: -90,
        cutout: "55%",
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
        <div className="relative h-full p-6 teamHeaderCard shadow-md rounded-2xl bg-white max-w-lg">
            <div className="space-y-1 mb-6">
                <h2 className="text-lg font-semibold text-gray-800 tracking-tight">
                    Ticket Priority Overview
                </h2>
                <p className="font-light text-xs sm:text-sm text-gray-500">
                    View your assigned tickets by priority level.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 items-center">
                {/* Semi Donut Chart */}
                <div className="h-40 w-full flex justify-center items-center">
                    <Doughnut data={data} options={options} />
                </div>

                {/* Custom React Legend */}
                <div className="flex flex-col gap-3 w-full pr-2">
                    {priorityItems.map((item) => (
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
