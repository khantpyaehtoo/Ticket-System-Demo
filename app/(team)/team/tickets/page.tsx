import React from "react";
import HeaderOverviewCards from "../main/_components/HeaderOverviewCards";
import TicketTable from "../main/_components/TicketTable";

export default function page() {
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
            title: "Product",
            dataIndex: "product",
            key: "product",
            width: 150,
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
            title: "Action",
            width: 120,
            render: () => (
                <Link href="view">
                    <span className="underline text-primary">View</span>
                </Link>
            ),
        },
    ];
    return (
        <section className="text-black max-w-[1600px] mx-auto space-y-10">
            {/* Header Section */}
            <div className="flex justify-center items-center pb-5 md:pb-8">
                <div className="text-center space-y-3 md:space-y-4 max-w-2xl">
                    <h1 className="font-medium text-2xl md:text-3xl">
                        My Tickets
                    </h1>
                    <p className="text-sm md:text-base text-gray-600">
                        View and manage tickets assigned to you, track their
                        progress, and prioritize your work.
                    </p>
                </div>
            </div>

            <HeaderOverviewCards />

            <TicketTable />
        </section>
    );
}
