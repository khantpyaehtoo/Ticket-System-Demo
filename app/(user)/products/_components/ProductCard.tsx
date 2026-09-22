"use client";

import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type Status = "active" | "inactive" | "pending";

// 1. Updated Type Definition
interface ProductSpec {
    id: string;
    title: string;
    desc: string;
    status: Status;
    image: string | StaticImageData;
    productType: string;
    supportPlan: string;
    purchasedDate: string;
    planEndDate: string;
    availableHours: number;
}

// 2. Updated Data Array
const productDetails: ProductSpec[] = [
    {
        id: "1",
        title: "Salon App",
        desc: "Management system for local salons",
        status: "active",
        image: "https://via.placeholder.com/400x300",
        productType: "Salon Management System",
        supportPlan: "Enterprise Gold",
        purchasedDate: "2024-01-15",
        planEndDate: "2025-01-15",
        availableHours: 120,
    },
    {
        id: "2",
        title: "Salon App",
        desc: "Management system for local salons",
        status: "active",
        image: "https://via.placeholder.com/400x300",
        productType: "Salon Management System",
        supportPlan: "Enterprise Gold",
        purchasedDate: "2024-01-15",
        planEndDate: "2025-01-15",
        availableHours: 120,
    },
    {
        id: "3",
        title: "Salon App",
        desc: "Management system for local salons",
        status: "active",
        image: "https://via.placeholder.com/400x300",
        productType: "Salon Management System",
        supportPlan: "Enterprise Gold",
        purchasedDate: "2024-01-15",
        planEndDate: "2025-01-15",
        availableHours: 120,
    },
    {
        id: "4",
        title: "Salon App",
        desc: "Management system for local salons",
        status: "active",
        image: "https://via.placeholder.com/400x300",
        productType: "Salon Management System",
        supportPlan: "Enterprise Gold",
        purchasedDate: "2024-01-15",
        planEndDate: "2025-01-15",
        availableHours: 120,
    },
];

export default function ProductCard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
            {productDetails.map((product) => {
                // Array of details to render dynamically without repeated markup
                const detailsList = [
                    { label: "Product Type", value: product.productType },
                    { label: "Support Plan", value: product.supportPlan },
                    { label: "Purchased Date", value: product.purchasedDate },
                    { label: "Plan End Date", value: product.planEndDate },
                    {
                        label: "Available Hours",
                        value: `${product.availableHours} hrs`,
                    },
                ];

                return (
                    <div
                        key={product.id}
                        className="border border-gray-200 shadow-md p-5 rounded-xl flex flex-col justify-between"
                    >
                        <div>
                            {/* Header Details */}
                            <div className="flex items-start justify-between">
                                <div className="space-y-1">
                                    <p className="font-semibold text-xl">
                                        {product.title}
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        {product.desc}
                                    </p>
                                </div>
                                <div className="border border-gray-300 rounded-2xl px-3 py-1 flex items-center space-x-2">
                                    <div
                                        className={`w-2 h-2 rounded-full ${
                                            product.status === "active"
                                                ? "bg-green-500"
                                                : "bg-gray-400"
                                        }`}
                                    />
                                    <span className="text-sm capitalize">
                                        {product.status}
                                    </span>
                                </div>
                            </div>

                            {/* Image Container */}
                            <div className="relative w-full h-52 my-5 rounded-xl overflow-hidden bg-gray-100">
                                {typeof product.image === "string" ? (
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover"
                                        fill
                                    />
                                ) : (
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        className="object-cover"
                                    />
                                )}
                            </div>

                            {/* Specifications List */}
                            <div className="space-y-3 my-4">
                                {detailsList.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex justify-between items-center border-b border-gray-100 pb-2 text-sm"
                                    >
                                        <span className="text-gray-500 font-medium">
                                            {item.label}
                                        </span>
                                        <span className="font-semibold text-gray-800">
                                            {item.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Action Button */}
                        <div className="mt-6">
                            <Link href="/products/viewProduct/1">
                                <button className="w-full border border-dashed border-gray-800 py-3 font-medium shadow-sm flex items-center justify-center space-x-2 rounded-lg hover:bg-gray-50 transition-colors">
                                    <span>View Product Ticket</span>
                                    <ArrowRight size={18} />
                                </button>
                            </Link>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
