"use client";

import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import PerProductCard from "./PerProductCard";
import { ProductSpec } from "@/types/products";
import LiquidGlassButton from "./LiquidGlassBtn";

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

    // const isNavigationHidden = prevBtnDisabled && nextBtnDisabled;

    // Dots Component
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
            </div>

            {/* Dot Position */}
            <div className="flex justify-center mb-6">{renderDots()}</div>

            <div className="relative">
                {/* Left Arrow Button */}
                <LiquidGlassButton
                    onClick={scrollPrev}
                    disabled={prevBtnDisabled}
                    aria-label="Previous Slide"
                    width={60}
                    height={60}
                    className={cn(
                        "absolute -left-4 top-1/2 -translate-y-1/2 z-30 transition-all",
                        prevBtnDisabled
                            ? "opacity-0 pointer-events-none"
                            : "opacity-100 hover:scale-105 cursor-pointer",
                    )}
                >
                    <ArrowLeft size={18} />
                </LiquidGlassButton>

                {/* Right Arrow Button */}
                <LiquidGlassButton
                    onClick={scrollNext}
                    disabled={nextBtnDisabled}
                    aria-label="Next Slide"
                    width={60}
                    height={60}
                    className={cn(
                        "absolute -right-4 top-1/2 -translate-y-1/2 z-30 transition-all",
                        nextBtnDisabled
                            ? "opacity-0 pointer-events-none"
                            : "opacity-100 hover:scale-105 cursor-pointer",
                    )}
                >
                    <ArrowRight size={18} />
                </LiquidGlassButton>

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
