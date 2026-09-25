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
        dragFree: true,
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
    const scrollTo = useCallback(
        (index: number) => emblaApi?.scrollTo(index),
        [emblaApi],
    );

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setPrevBtnDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        setScrollSnaps(emblaApi.scrollSnapList());
        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);
    }, [emblaApi, onSelect]);

    const isNavigationHidden = prevBtnDisabled && nextBtnDisabled;

    // Dots Component (Mobile နှင့် Desktop နှစ်နေရာလုံးတွင် အသုံးပြုရန်)
    const renderDots = () => (
        <div className="flex justify-center items-center gap-2">
            {scrollSnaps.map((_, index) => (
                <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={cn(
                        "h-2.5 rounded-full transition-all duration-300 cursor-pointer",
                        index === selectedIndex
                            ? "w-7 bg-black"
                            : "w-2.5 bg-gray-300 hover:bg-gray-400",
                    )}
                />
            ))}
        </div>
    );

    return (
        <div className="relative max-w-full">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-4">
                <div className="my-10 ps-2">
                    <h1 className="font-medium text-2xl">Your Products</h1>
                    <p className="text-sm font-light">
                        Products and services available under your account.
                    </p>
                </div>

                {/* DESKTOP ONLY: Arrows */}
                <div
                    className={cn(
                        "hidden md:flex space-x-2 transition-opacity duration-200",
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

            {/* Dot Position */}

            <div className="flex justify-center mb-6">{renderDots()}</div>

            {/* Carousel Viewport Container */}
            <div className="relative">
                {/* MOBILE ONLY: Arrows Left Right */}
                {!isNavigationHidden && (
                    <>
                        <button
                            onClick={scrollPrev}
                            disabled={prevBtnDisabled}
                            aria-label="Previous Slide"
                            className={cn(
                                "md:hidden absolute -left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/90 border border-gray-200 shadow-md transition-all",
                                prevBtnDisabled
                                    ? "opacity-0 pointer-events-none"
                                    : "hover:bg-gray-100 cursor-pointer opacity-100",
                            )}
                        >
                            <ArrowLeft size={18} />
                        </button>

                        <button
                            onClick={scrollNext}
                            disabled={nextBtnDisabled}
                            aria-label="Next Slide"
                            className={cn(
                                "md:hidden absolute -right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/90 border border-gray-200 shadow-md transition-all",
                                nextBtnDisabled
                                    ? "opacity-0 pointer-events-none"
                                    : "hover:bg-gray-100 cursor-pointer opacity-100",
                            )}
                        >
                            <ArrowRight size={18} />
                        </button>
                    </>
                )}

                {/* Carousel Track */}
                <div className="overflow-hidden pb-10" ref={emblaRef}>
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
        </div>
    );
}
