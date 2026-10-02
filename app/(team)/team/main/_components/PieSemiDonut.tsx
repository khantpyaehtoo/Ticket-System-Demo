"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieSemiDonut() {
    const data = {
        labels: ["Low", "Medium", "High", "Critical"],
        datasets: [
            {
                data: [70, 30, 40, 20],
                backgroundColor: [
                    "#0640b6",
                    "#f59e0b",
                    "#f97316",
                    "#b91c1c",
                    "#e5e7eb",
                ],
                borderWidth: 0,
                hoverBackgroundColor: [
                    "#0640b6",
                    "#f59e0b",
                    "#f97316",
                    "#b91c1c",
                ],
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        // Cuts the chart in half (180 degrees)
        circumference: 180,
        // Rotates the chart so the flat side sits at the bottom (-90 degrees starts it on the left)
        rotation: -90,
        // Thickness of the donut ring
        cutout: "60%",
        plugins: {
            legend: {
                display: true,
                position: "right" as const,
                labels: {
                    // This changes the rectangle markers to point styles
                    usePointStyle: true,
                    // This explicitly sets the shape to a circle
                    pointStyle: "circle",
                    // Optional: Adjusts the spacing/sizing of the legend items
                    boxWidth: 8,
                    boxHeight: 8,
                },
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    return (
        <div className="relative h-100 p-10 teamHeaderCard shadow-md">
            <div className="pb-4 flex flex-col gap-2 space-y-10">
                <div className="space-y-0.5">
                    <h2 className="text-base sm:text-lg font-medium text-primary tracking-tight">
                        Ticket Priority Overview
                    </h2>
                    <p className="font-light text-xs sm:text-sm text-gray-500">
                        View your assigned tickets by priority level.
                    </p>
                </div>
                <div>
                    <Doughnut data={data} options={options} />
                </div>
            </div>
        </div>
    );
}
