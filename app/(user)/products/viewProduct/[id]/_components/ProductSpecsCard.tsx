"use client";

import DashboardCard, {
    DashboardCardProps,
} from "@/components/ui/dashboardCard";
import { Table } from "antd";
import { ColumnsType } from "antd/es/table";
import { AlarmClock, Package } from "lucide-react";

export interface TicketType {
    id: string | number;
    ticketId: string;
    serviceName: string;
    customerName: string;
}

const DashboardCards: DashboardCardProps[] = [
    {
        title: "SLA Hours",
        icon: <AlarmClock />,
        plength: 85,
        length: "85 / 100",
        type: "Hours",
        inform_1: "Expired in Dec 3",
        inform_2: "20 days remaining",
    },
    {
        title: "SLA Hours",
        icon: <AlarmClock />,
        plength: 85,
        length: "85 / 100",
        type: "Hours",
        inform_1: "Expired in Dec 3",
        inform_2: "20 days remaining",
    },
];

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

export default function ProductSpecsCard() {
    // Product Data
    const productData = [
        {
            icon: <Package size={18} />,
            title: "Product Type",
            infrom: "Mari",
        },
        {
            icon: <Package size={18} />,
            title: "Support Plan",
            infrom: "Standard SLA Plan",
        },
        {
            icon: <Package size={18} />,
            title: "Purchased Date",
            infrom: "01 Sep 2026",
        },
        {
            icon: <Package size={18} />,
            title: "Plan End Date",
            infrom: "30 Oct 2026",
        },
    ];

    return (
        <div className="w-full max-w-8xl mx-auto px-2 sm:px-6 lg:px-8 py-6 space-y-8 sm:space-y-10">
            {/* Top SLA & Product Metadata Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 text-black items-stretch">
                {/* SLA Tracking Card */}
                <div className="lg:col-span-7 xl:col-span-8 border border-gray-200 bg-white p-5 sm:p-6 lg:p-7 rounded-2xl w-full shadow-sm flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                            Your Remaining Minutes
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-500 font-light mt-1">
                            Track your remaining monthly support SLA time
                        </p>
                    </div>

                    {/* Dashboard Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8 w-full">
                        {DashboardCards.map((card, key) => (
                            <div key={key} className="w-full flex">
                                <DashboardCard
                                    title={card.title}
                                    icon={card.icon}
                                    plength={card.plength}
                                    length={card.length}
                                    type={card.type}
                                    inform_1={card.inform_1}
                                    inform_2={card.inform_2}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Information / System Metadata (Sidebar) */}
                <div className="lg:col-span-5 xl:col-span-4 border border-gray-200 bg-white p-5 sm:p-6 lg:p-7 rounded-2xl w-full shadow-sm flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6 pb-3 border-b border-gray-100">
                            System Meta Data
                        </h2>

                        <div className="divide-y divide-gray-200">
                            {productData.map((data, key) => (
                                <div
                                    key={key}
                                    className="flex items-center justify-between py-3 gap-4 text-xs sm:text-sm"
                                >
                                    <div className="flex items-center gap-3 text-gray-500 min-w-0">
                                        <span className="shrink-0 text-base">
                                            {data.icon}
                                        </span>
                                        <span className="truncate font-medium text-xs">
                                            {data.title}
                                        </span>
                                    </div>

                                    <div className="shrink-0 text-right">
                                        <p className="text-gray-900 font-medium text-xs">
                                            {data.infrom}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Tickets Section */}
            <div className="space-y-4 pt-4 border-t border-gray-100">
                <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <h3 className="text-gray-900 text-lg sm:text-2xl font-semibold">
                            Related Support Tickets
                        </h3>
                        <span className="bg-gray-700 rounded-full text-white text-xs font-medium px-3 py-1">
                            3 records
                        </span>
                    </div>
                </div>

                {/* Responsive Table Wrapper */}
                <div className="w-full overflow-x-auto rounded-xl border border-gray-200 shadow-sm bg-white">
                    <Table columns={tableColumns} />
                </div>
            </div>
        </div>
    );
}
