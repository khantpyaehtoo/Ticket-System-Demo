"use client";

import { getPriorityColor } from "@/lib/config/getPriorityConfig";
import { getStatusColor } from "@/lib/config/getStatusColors";
import { TicketDetailsType } from "@/types/ticket";
import { Select, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TicketTable() {
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 7;

    // const { unreadTicketIds, markTicketAsRead } = useNotificationStore();

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
            width: 140,
            render: (val, record) => {
                const targetId = val || record.id || "-";

                return (
                    <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900">
                            {targetId}
                        </span>
                    </div>
                );
            },
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
                        style={{ color: color }}
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

    const options = [
        { label: "All", value: "all" },
        { label: "Submitted", value: "submitted" },
        { label: "Reviewing", value: "reviewing" },
        { label: "Assigned", value: "assigned" },
        { label: "In Progress", value: "in-progress" },
        { label: "On Hold", value: "on-hold" },
        { label: "Resolved", value: "Resolved" },
        { label: "Reopened", value: "Reopened" },
        { label: "Closed", value: "Closed" },
        { label: "Cancelled", value: "Cancelled" },
        { label: "Rejected", value: "Rejected" },
    ];

    return (
        <div className="teamHeaderCard p-4 sm:p-6 shadow-sm space-y-4 sm:space-y-6 text-black">
            {/* Header Controls Container */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-6 md:mb-10">
                {/* Title & Subtitle */}
                <div className="text-primary space-y-1">
                    <p className="  text-primary">My Assigned Tickets</p>
                </div>

                {/* Search Input & Select Filter */}
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                    <Select
                        defaultValue="All Tickets"
                        options={options}
                        className="w-full sm:w-40! rounded-lg!"
                    />
                    <Select
                        defaultValue="Priority Status"
                        options={options}
                        className="w-full sm:w-40! rounded-lg!"
                    />
                </div>
            </div>

            {/* Table Container with Horizontal Scroll Support */}
            <div className="w-full overflow-x-auto">
                <Table<TicketDetailsType>
                    columns={tableColumns}
                    scroll={{ x: 800 }}
                    // dataSource={dummyTicketsList}
                    rowKey={(record) => record.ticketId || record.id}
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
