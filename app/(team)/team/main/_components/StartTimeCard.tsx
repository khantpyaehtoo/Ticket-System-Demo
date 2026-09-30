import { getPriorityColor } from "@/lib/config/getPriorityConfig";
import { Button } from "antd";
import React from "react";

export default function StartTimeCard() {
    const currentStatus = "Critical";
    const statusColor = getPriorityColor(currentStatus);
    return (
        <div className="flex space-x-7">
            {/* Card 1 */}
            <div className="w-full bg-background border border-primary/10 rounded-xl p-4 sm:p-6 shadow-sm space-y-4 sm:space-y-6 text-black">
                {/* Starter Card Header Section */}
                <div className="flex justify-between items-center border-b border-b-gray-400 pb-6">
                    <small className="uppercase">
                        Continue where you left off
                    </small>
                    <div className="flex items-center space-x-7">
                        <p className="text-sm font-medium">
                            Ticket ID - (
                            <span className="font-jetbrains">DB - TK1</span>)
                        </p>
                        <span
                            style={{
                                backgroundColor: `color-mix(in srgb, ${statusColor} 30%, transparent)`,
                                color: statusColor,
                                borderColor: `color-mix(in srgb, ${statusColor} 60%, transparent)`,
                            }}
                            className="text-xs sm:text-sm font-medium px-3 py-1 rounded-full border-none transition-all inline-block"
                        >
                            {currentStatus}
                        </span>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="space-y-7">
                    {/* Product Name + Timer */}
                    <div className="flex items-center justify-between">
                        <div className="space-y-4 font-medium">
                            <p>Issue Type : Technical Issues</p>
                            <p>Product Name : Mari's Nail Salon</p>
                        </div>
                        <div className="font-jetbrains font-medium border border-gray-600 rounded-xl px-6 py-4 text-center">
                            <p>01:42:18</p>
                        </div>
                    </div>

                    {/* Issue Summary */}
                    <div className="bg-[#f8f4fa] px-6 py-3 rounded-2xl">
                        <div className="space-y-2">
                            <p>Issue Type : Technical Issues</p>
                            <p>Product Name : Mari's Nail Salon</p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between items-center space-x-3">
                        <Button
                            block
                            htmlType="submit"
                            className="loginFormBtn! group flex items-center justify-center gap-2"
                        >
                            Pause Timer
                        </Button>
                        <Button
                            block
                            htmlType="submit"
                            className="detailBtn! group flex items-center justify-center gap-2"
                        >
                            View Ticket Details
                        </Button>
                    </div>
                </div>
            </div>

            {/* Card 2 */}
            <div className="w-full bg-background border border-primary/10 rounded-xl p-4 sm:p-6 shadow-sm space-y-4 sm:space-y-6 text-black">
                {/* Starter Card Header Section */}
                <div className="flex justify-between items-center border-b border-b-gray-400 pb-6">
                    <small className="uppercase">
                        Continue where you left off
                    </small>
                    <div className="flex items-center space-x-7">
                        <p className="text-sm font-medium">
                            Ticket ID - (
                            <span className="font-jetbrains">DB - TK1</span>)
                        </p>
                        <span
                            style={{
                                backgroundColor: `color-mix(in srgb, ${statusColor} 30%, transparent)`,
                                color: statusColor,
                                borderColor: `color-mix(in srgb, ${statusColor} 60%, transparent)`,
                            }}
                            className="text-xs sm:text-sm font-medium px-3 py-1 rounded-full border-none transition-all inline-block"
                        >
                            {currentStatus}
                        </span>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="space-y-7">
                    {/* Product Name + Timer */}
                    <div className="flex items-center justify-between">
                        <div className="space-y-4 font-medium">
                            <p>Issue Type : Technical Issues</p>
                            <p>Product Name : Mari's Nail Salon</p>
                        </div>
                        <div className="font-jetbrains font-medium border border-gray-600 rounded-xl px-6 py-4 text-center">
                            <p>01:42:18</p>
                        </div>
                    </div>

                    {/* Issue Summary */}
                    <div className="bg-[#f8f4fa] px-6 py-3 rounded-2xl">
                        <div className="space-y-2">
                            <p>Issue Type : Technical Issues</p>
                            <p>Product Name : Mari's Nail Salon</p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between items-center space-x-3">
                        <Button
                            block
                            htmlType="submit"
                            className="loginFormBtn! group flex items-center justify-center gap-2"
                        >
                            Pause Timer
                        </Button>
                        <Button
                            block
                            htmlType="submit"
                            className="detailBtn! group flex items-center justify-center gap-2"
                        >
                            View Ticket Details
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
