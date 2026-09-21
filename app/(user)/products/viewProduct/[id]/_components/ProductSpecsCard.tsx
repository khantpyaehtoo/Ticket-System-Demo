"use client";

import DashboardCard from "@/components/ui/dashboardCard";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { AlarmClock, Package } from "lucide-react";

export interface TicketType {
    id: string | number;
    ticketId: string;
    serviceName: string;
    customerName: string;
}

export default function ProductSpecsCard() {
    // Product Data
    const productData = [
        {
            icon: <Package />,
            title: "Product Type",
            infrom: "Service Management System",
        },
        {
            icon: <Package />,
            title: "Support Plan",
            infrom: "Standard SLA Plan",
        },
        {
            icon: <Package />,
            title: "Purchased Date",
            infrom: "01 Sep 2026",
        },
        {
            icon: <Package />,
            title: "Plan End Date",
            infrom: "30 Oct 2026",
        },
    ];

    // Table Columns
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
            title: "Time Used",
            dataIndex: "customerName",
            key: "customerName",
        },
    ];

    const DashboardCards = [
        {
            title: "SLA Hours",
            icon: <AlarmClock />,
            plength: 85,
            length: "85 / 100",
            type: "Hours",
            infrom_1: "Expired in Dec 3",
            infrom_2: "20 days remaining Tickets",
        },
        {
            title: "SLA Hours",
            icon: <AlarmClock />,
            plength: 85,
            length: "85 / 100",
            type: "Hours",
            infrom_1: "Expired in Dec 3",
            infrom_2: "20 days remaining Tickets",
        },
    ];

    return (
        <div className="space-y-10">
            <div className="flex items-start space-x-8 px-8 text-black">
                {/* SLA Tracking Card */}
                <div className="border border-gray-300 p-5 rounded-xl w-full min-w-4xl">
                    {/* Card Title Section */}
                    <div>
                        <p className="text-2xl font-medium">
                            Your Remaining Minutes
                        </p>
                        <span className="text-gray-400 font-light">
                            Track your remaining monthly support SLA time
                        </span>

                        <div className="flex items-center justify-around gap-10  mt-10">
                            {DashboardCards.map((card, key) => (
                                <div key={key}>
                                    <DashboardCard
                                        title={card.title}
                                        icon={card.icon}
                                        plength={card.plength}
                                        length={card.length}
                                        type={card.type}
                                        inform_1={card.infrom_1}
                                        inform_2={card.infrom_2}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Product Information */}
                <div className="border border-gray-300 p-5 rounded-xl w-full">
                    <p className="text-2xl font-medium mb-5 pb-10">
                        System Meta Data
                    </p>
                    <div>
                        {productData.map((data, key) => (
                            <div
                                key={key}
                                className="flex justify-between items-center"
                            >
                                <div className="flex space-x-10 space-y-2 item-center text-gray-500">
                                    <p>{data.icon}</p>
                                    <p>{data.title}</p>
                                </div>

                                <div>
                                    <p className="text-black font-base">
                                        {data.infrom}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* History Table */}
            <div className="flex items-center space-x-5">
                <p className="text-black text-2xl">Related Support Tickets</p>
                <div className="bg-gray-500 rounded-xl text-white px-5 py-2">
                    3 records
                </div>
            </div>

            <Table columns={tableColumns} />
        </div>
    );
}
