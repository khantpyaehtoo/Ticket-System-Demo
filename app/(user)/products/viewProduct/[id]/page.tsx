import React from "react";
import Link from "next/link";
import ProductSpecsCard from "./_components/ProductSpecsCard";

export default function page() {
    return (
        <div>
            <Link
                href="/products"
                className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800 transition-colors mb-10"
            >
                Back <span className="text-gray-300">{">"}</span> View Product
                Ticket
            </Link>
            <ProductSpecsCard />
        </div>
    );
}
