"use client";

// import { useQuery } from "@tanstack/react-query";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
// import { usersQueryOptions } from "../page";

export interface TicketType {
    id: string | number;
    ticketId: string;
    serviceName: string;
    customerName: string;
    // Add additional properties as needed
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

    return (
        <Table<TicketType>
            columns={tableColumns}
            // dataSource={users}
            // loading={isLoading}
            rowKey="id"
        />
    );
}
