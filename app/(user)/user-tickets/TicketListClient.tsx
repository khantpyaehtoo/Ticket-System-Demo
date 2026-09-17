"use client";

import { useQuery } from "@tanstack/react-query";
import { Table } from "antd";
import { usersQueryOptions } from "./page";

export default function TicketListClient() {
    const { data: users, isLoading } = useQuery(usersQueryOptions);

    return <Table dataSource={users} loading={isLoading} rowKey="id" />;
}
