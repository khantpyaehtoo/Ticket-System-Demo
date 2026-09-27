import React from "react";
import HeaderCards from "./_components/HeaderCards";
import ProductCard from "./_components/ProductCard";

export default function page() {
    return (
        <div className="text-black">
            <HeaderCards />

            <ProductCard />
        </div>
    );
}
