"use client";
import React from "react";

// import { useQuery } from "@tanstack/react-query";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
// import { usersQueryOptions } from "../page";

export interface TicketType {
    id: string | number;
    ticketId: string;
    serviceName: string;
    customerName: string;
}

export default function RecentTickets() {
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

    return (
        <div className="w-full bg-background border border-primary/10 rounded-xl p-6 shadow-sm space-y-6 text-black">
            <div className="pb-4 border-b border-primary/10">
                <h1 className="text-lg font-bold text-secondary tracking-tight">
                    All Tickets
                </h1>
                <p className="font-light text-sm">
                    Track the lastest updates and progress of your support
                    requests
                </p>
            </div>
            <Table<TicketType>
                columns={tableColumns}
                // dataSource={users}
                // loading={isLoading}
                rowKey="id"
            />
        </div>
    );
}
