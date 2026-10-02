import React from "react";
import { Button } from "antd";
import { Play } from "lucide-react";
import { getPriorityColor } from "@/lib/config/getPriorityConfig";
import { TicketStatus } from "@/lib/config/getStatusColors";

interface timerCardProps {
    title: string;
    ticketStatus: TicketStatus;
    ticketId: string;
    ticketIssueType: string;
    productName: string;
    timerStatus: string;
    timer: string;
    issueSummary: string;
    note: string;
}

export default function TimerCard({
    title,
    ticketStatus,
    ticketId,
    ticketIssueType,
    productName,
    timerStatus,
    timer,
    issueSummary,
    note,
}: timerCardProps) {
    const statusColor = getPriorityColor(ticketStatus);

    return (
        <>
            {/* Starter Card Header Section */}
            <div className="flex justify-between items-center border-b border-b-gray-200 pb-3">
                <div className="flex items-center space-x-7">
                    <small className="uppercase">
                        {title || "- - - - - -"}
                    </small>
                    <span
                        style={{
                            backgroundColor: `color-mix(in srgb, ${statusColor} 30%, transparent)`,
                            color: statusColor,
                            borderColor: `color-mix(in srgb, ${statusColor} 60%, transparent)`,
                        }}
                        className="text-xs sm:text-sm font-medium px-3 py-1 rounded-full border-none transition-all inline-block"
                    >
                        {ticketStatus}
                    </span>
                </div>

                <p className="text-sm font-medium">
                    Ticket ID :{" "}
                    <span className="font-jetbrains">
                        {ticketId || "- - - - - -"}
                    </span>
                </p>
            </div>

            {/* Contact Section */}
            <div className="space-y-4">
                {/* Product Name + Timer */}
                <div className="flex items-center justify-between">
                    <div className="space-y-2 font-medium">
                        <p>Issue Type : {ticketIssueType || "- - - - - -"}</p>
                        <p>Product Name : {productName || "- - - - - -"}</p>
                    </div>
                    <div className="font-medium text-center">
                        <div className="flex space-x-2 items-center">
                            <div className="flex items-center space-x-2 font-jetbrains">
                                <span>{timerStatus || ""}</span>
                                <div className="w-2 h-2 bg-black rounded-full" />
                                <p>{timer || "- - - - - -"}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Issue Summary */}
                <div className="bg-[#f8f4fa] px-6 py-3 rounded-2xl">
                    <div className="space-y-2">
                        <p>Issue Summary : {issueSummary || "- - - - - -"}</p>
                        <p>Note : {note || "- - - - - -"}</p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between items-center space-x-3 w-1/2">
                    <Button
                        block
                        htmlType="submit"
                        className="detailBtn! group flex items-center justify-center gap-2"
                    >
                        <Play size={15} /> Start Job
                    </Button>
                    <Button
                        block
                        type="text"
                        htmlType="submit"
                        className="group flex items-center justify-center gap-2 underline"
                    >
                        View Ticket Details
                    </Button>
                </div>
            </div>
        </>
    );
}
