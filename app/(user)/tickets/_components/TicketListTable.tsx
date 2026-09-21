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
            render: (_, __, index) => index + 1,
        },
        {
            title: "Ticket Id",
            dataIndex: "ticketId",
            key: "ticketId",
            render: (val, record) => val || record.id || "-",
        },
        {
            title: "Status",
            dataIndex: "serviceName",
            key: "serviceName",
        },
        {
            title: "Issue Type",
            dataIndex: "customerName",
            key: "customerName",
        },
        {
            title: "Assigned Team",
            dataIndex: "customerName",
            key: "customerName",
        },
        {
            title: "Priority",
            dataIndex: "customerName",
            key: "customerName",
        },
        {
            title: "Duration",
            dataIndex: "customerName",
            key: "customerName",
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
        <>
            <div className="flex justify-between items-end mb-10">
                <div className="text-primary">
                    <h1 className="text-xl font-medium">All Tickets</h1>
                    <p className="font-light text-sm">
                        (Track the lastest updates and progress of your support
                        requests)
                    </p>
                </div>
                <div className="flex items-center gap-5">
                    <Input.Search
                        placeholder="Search Ticket ID"
                        className="w-100!"
                    />
                    <Select options={options} className="w-40" />
                </div>
            </div>
            <Table<TicketType>
                columns={tableColumns}
                // dataSource={users}
                // loading={isLoading}
                rowKey="id"
            />
        </>
    );
}
