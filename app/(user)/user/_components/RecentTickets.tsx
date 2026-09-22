"use client";

// import { useQuery } from "@tanstack/react-query";
import { Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
    dummyTicketData,
    TicketType,
} from "../../tickets/_components/dummydata";
// import { usersQueryOptions } from "../page";

export default function RecentTickets() {
    const tableColumns: ColumnsType<TicketType> = [
        {
            title: "No.",
            key: "index",
            width: 60,
            render: (_, __, index) => index + 1,
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
        },
        {
            title: "Issue Type",
            dataIndex: "issueType",
            key: "issueType",
            width: 140,
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
        },
        {
            title: "Duration",
            dataIndex: "duration",
            key: "duration",
            width: 120,
        },
    ];

    return (
        <div className="w-full bg-background border border-primary/10 rounded-xl p-4 sm:p-6 shadow-sm space-y-4 sm:space-y-6 text-black">
            {/* Header */}
            <div className="pb-4 border-b border-primary/10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                <div className="space-y-0.5">
                    <h1 className="text-base sm:text-lg font-bold text-secondary tracking-tight">
                        Recent Tickets
                    </h1>
                    <p className="font-light text-xs sm:text-sm text-gray-500">
                        Track the latest updates and progress of your support
                        requests
                    </p>
                </div>
                <Link
                    href="/tickets"
                    className="shrink-0 self-start sm:self-auto"
                >
                    <Button
                        type="primary"
                        className="flex items-center gap-2 !px-4 sm:!px-6 !py-3 sm:!py-5 text-xs sm:text-sm"
                    >
                        View All Tickets{" "}
                        <ArrowRight size={16} className="sm:w-5 sm:h-5" />
                    </Button>
                </Link>
            </div>

            {/* Table with Horizontal Scroll Support */}
            <div className="w-full overflow-x-auto">
                <Table<TicketType>
                    columns={tableColumns}
                    dataSource={dummyTicketData}
                    // loading={isLoading}
                    rowKey="id"
                    scroll={{ x: 600 }}
                    pagination={{ pageSize: 5, responsive: true }}
                />
            </div>
        </div>
    );
}
