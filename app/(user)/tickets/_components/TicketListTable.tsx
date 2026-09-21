"use client";

// import { useQuery } from "@tanstack/react-query";
import { Input, Select, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
// import { usersQueryOptions } from "../page";

export interface TicketType {
    id: string | number;
    ticketId: string;
    serviceName: string;
    customerName: string;
}

export default function TicketListClient() {
    // const { data: users, isLoading } = useQuery(usersQueryOptions);

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
            dataIndex: "serviceName",
            key: "serviceName",
            width: 120,
        },
        {
            title: "Issue Type",
            dataIndex: "customerName",
            key: "customerName",
            width: 140,
        },
        {
            title: "Assigned Team",
            dataIndex: "customerName",
            key: "customerName",
            width: 150,
        },
        {
            title: "Priority",
            dataIndex: "customerName",
            key: "customerName",
            width: 100,
        },
        {
            title: "Duration",
            dataIndex: "customerName",
            key: "customerName",
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
        <div className="w-full space-y-6">
            {/* Header Controls Container */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-6 md:mb-10">
                {/* Title & Subtitle */}
                <div className="text-primary space-y-1">
                    <h1 className="text-lg sm:text-xl font-medium">
                        All Tickets
                    </h1>
                    <p className="font-light text-xs sm:text-sm text-gray-500">
                        (Track the latest updates and progress of your support
                        requests)
                    </p>
                </div>

                {/* Search Input & Select Filter */}
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
                    <Input.Search
                        placeholder="Search Ticket ID"
                        className="w-full sm:w-64 md:w-72 lg:w-80"
                    />
                    <Select
                        defaultValue="all"
                        options={options}
                        className="w-full sm:w-40"
                    />
                </div>
            </div>

            {/* Table Container with Horizontal Scroll Support */}
            <div className="w-full overflow-x-auto">
                <Table<TicketType>
                    columns={tableColumns}
                    // dataSource={users}
                    // loading={isLoading}
                    rowKey="id"
                    scroll={{ x: 800 }}
                    pagination={{
                        responsive: true,
                        pageSize: 10,
                    }}
                />
            </div>
        </div>
    );
}
