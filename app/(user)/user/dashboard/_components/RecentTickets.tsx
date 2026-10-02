"use client";

// import { useQuery } from "@tanstack/react-query";
import { Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { getStatusColor } from "@/lib/config/getStatusColors";
import { getPriorityColor } from "@/lib/config/getPriorityConfig";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { dummyTicketsList } from "../../tickets/_components/dummydata";
import { TicketDetailsType } from "@/types/ticket";
// import { usersQueryOptions } from "../page";

export default function RecentTickets() {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5;

    const tableColumns: ColumnsType<TicketDetailsType> = [
        {
            title: "No.",
            key: "no",
            width: 60,
            render: (_, __, index) => (currentPage - 1) * pageSize + index + 1,
        },
        {
            title: "Ticket Id",
            dataIndex: "ticketId",
            key: "ticketId",
            width: 120,
            render: (val, record) => val || record.id || "-",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
            width: 120,
            render: (status) => {
                const color = getStatusColor(status);
                return (
                    <span
                        className="px-2.5 py-1 rounded-full text-sm font-medium inline-block"
                        style={{
                            color: color,
                            // backgroundColor: `color-mix(in srgb, ${color} 15%, transparent)`, // Soft background pill effect
                        }}
                    >
                        {status}
                    </span>
                );
            },
        },
        {
            title: "Issue Type",
            dataIndex: "issueType",
            key: "issueType",
            width: 140,
            render: (issue) => (
                <span className="underline text-link-blue hover:text-gray-400">
                    {issue}
                </span>
            ),
        },
        {
            title: "Assigned Team",
            dataIndex: "assign",
            key: "assign",
            width: 150,
        },
        {
            title: "Priority",
            dataIndex: "priority",
            key: "priority",
            width: 100,
            render: (priority: string) => {
                const color = getPriorityColor(priority);

                return (
                    <div className="flex items-center gap-2">
                        <span
                            className="w-2 h-2 rounded-full inline-block shrink-0"
                            style={{ backgroundColor: color }}
                        />
                        <span className="text-sm capitalize font-medium text-gray-700">
                            {priority}
                        </span>
                    </div>
                );
            },
        },
        {
            title: "Duration",
            dataIndex: "duration",
            key: "duration",
            width: 120,
        },
    ];

    return (
        <div className="teamHeaderCard p-4 sm:p-6 shadow-sm space-y-4 sm:space-y-6 text-black">
            {/* Header */}
            <div className="pb-4 border-b border-primary/10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <div className="space-y-0.5">
                    <h1 className="text-base sm:text-lg font-medium text-primary tracking-tight">
                        Recent Tickets
                    </h1>
                    <p className="font-light text-xs sm:text-sm text-gray-500">
                        Track the latest updates and progress of your support
                        requests
                    </p>
                </div>
                <Link
                    href="/user/tickets"
                    className="shrink-0 self-start sm:self-auto"
                >
                    <Button
                        type="primary"
                        className="flex items-center gap-2 px-4! sm:px-6! py-3! sm:py-5! text-xs sm:text-sm"
                    >
                        View All Tickets{" "}
                        <ArrowRight size={16} className="sm:w-5 sm:h-5" />
                    </Button>
                </Link>
            </div>

            {/* Table with Horizontal Scroll Support */}
            <div className="w-full overflow-x-auto">
                <Table<TicketDetailsType>
                    columns={tableColumns}
                    dataSource={dummyTicketsList}
                    // loading={isLoading}
                    rowKey={(record) => record.ticketId || record.id}
                    scroll={{ x: 600 }}
                    pagination={{
                        current: currentPage,
                        pageSize: pageSize,
                        responsive: true,
                        onChange: (page) => setCurrentPage(page),
                    }}
                    onRow={(record) => ({
                        onClick: () => {
                            const targetId = record.ticketId || record.id;
                            router.push(`/user/tickets/details/${targetId}`);
                        },
                        className:
                            "cursor-pointer hover:bg-gray-50 transition-colors",
                    })}
                />
            </div>
        </div>
    );
}
