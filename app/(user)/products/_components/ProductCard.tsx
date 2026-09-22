"use client";

import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import PerProductCard from "./PerProductCard";
import { ProductSpec } from "@/types/products";

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
    {
        id: "5",
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
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        // draggable: true,
        dragFree: true,
    });

    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        // Updates button disabled status automatically based on screen width & slides
        setPrevBtnDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
    }, [emblaApi, onSelect]);

    // Check if total slides cannot fill the current viewport width at all
    const isNavigationHidden = prevBtnDisabled && nextBtnDisabled;

    return (
        <div className="relative p-5 max-w-full">
            {/* Carousel Header Controls */}
            <div className="flex justify-between items-center mb-4">
                <div className="my-10 ps-2">
                    <h1 className="font-medium text-2xl">Your Products</h1>
                    <p className="text-sm font-light">
                        Products and services available under your account.
                    </p>
                </div>
                <div
                    className={cn(
                        "flex space-x-2 transition-opacity duration-200",
                        isNavigationHidden && "opacity-0 pointer-events-none",
                    )}
                >
                    <button
                        onClick={scrollPrev}
                        disabled={prevBtnDisabled}
                        className={cn(
                            "p-2 border border-gray-300 rounded-full transition-colors",
                            prevBtnDisabled
                                ? "opacity-30 cursor-not-allowed"
                                : "hover:bg-gray-100 cursor-pointer",
                        )}
                        aria-label="Previous Slide"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <button
                        onClick={scrollNext}
                        disabled={nextBtnDisabled}
                        className={cn(
                            "p-2 border border-gray-300 rounded-full transition-colors",
                            nextBtnDisabled
                                ? "opacity-30 cursor-not-allowed"
                                : "hover:bg-gray-100 cursor-pointer",
                        )}
                        aria-label="Next Slide"
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>

            {/* Carousel Viewport Container */}
            <div className="overflow-hidden" ref={emblaRef}>
                {/* Carousel Track */}
                <div className="flex -ml-4">
                    {productDetails.map((product) => {
                        const detailsList = [
                            {
                                label: "Product Type",
                                value: product.productType,
                            },
                            {
                                label: "Support Plan",
                                value: product.supportPlan,
                            },
                            {
                                label: "Purchased Date",
                                value: product.purchasedDate,
                            },
                            {
                                label: "Plan End Date",
                                value: product.planEndDate,
                            },
                            {
                                label: "Available Hours",
                                value: `${product.availableHours} hrs`,
                            },
                        ];

                        return (
                            <PerProductCard
                                key={product.id}
                                detailsList={detailsList}
                                product={product}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
