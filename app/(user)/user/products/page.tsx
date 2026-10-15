"use client";

import React from "react";
import HeaderCards from "./_components/HeaderCards";
import ProductCard from "./_components/ProductCard";
import { Segmented } from "antd";

export default function page() {
    return (
        <div className="text-black">
            <div className="mb-10 custom-segmented">
                <Segmented<string>
                    options={["All Product", "Nail Salon", "Academy"]}
                    onChange={(value) => {
                        console.log(value); // string
                    }}
                />
            </div>
            <HeaderCards />

            <ProductCard />
        </div>
    );
}
