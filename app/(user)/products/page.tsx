import React from "react";
import HeaderCards from "./_components/HeaderCards";
import ProductCard from "./_components/ProductCard";

export default function page() {
    return (
        <div className="text-black">
            <HeaderCards />
            <div className="my-10 ps-2">
                <h1 className="font-medium text-2xl">Your Products</h1>
                <p className="text-sm font-light">
                    Products and services available under your account.
                </p>
            </div>

            <ProductCard />
        </div>
    );
}
