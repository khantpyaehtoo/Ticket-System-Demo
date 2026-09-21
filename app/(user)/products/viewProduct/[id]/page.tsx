import React from "react";
import Link from "next/link";
import ProductSpecsCard from "./_components/ProductSpecsCard";

export default function page() {
    return (
        <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 py-4 sm:py-8 space-y-4 sm:space-y-6">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                <Link
                    href="/products"
                    className="hover:text-gray-800 transition-colors font-medium"
                >
                    Back{" "}
                </Link>
                <span className="text-gray-300 font-light">&gt;</span>
                <span className="text-gray-800 font-medium">
                    {" "}
                    View Product Ticket
                </span>
            </nav>

            {/* Product Specifications & Dashboard Cards */}
            <ProductSpecsCard />
        </div>
    );
}
