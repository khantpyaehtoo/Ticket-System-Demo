import { SquareCheck } from "lucide-react";
import React from "react";
import { PlanCardType } from "../page";
import { cn } from "@/lib/utils";

interface PlanCardProps {
    planCards: PlanCardType[];
}

export default function PlanCard({ planCards }: PlanCardProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {planCards.map((card, index) => (
                <div
                    key={index}
                    className={cn(
                        index === planCards.length - 1
                            ? "bg-linear-to-b from-primary to-secondary text-white rounded-xl shadow-sm flex flex-col justify-between overflow-hidden"
                            : "border border-gray-200 rounded-xl shadow-sm bg-white flex flex-col justify-between overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-secondary",
                    )}
                >
                    {/* Header & CTA */}
                    <div
                        className={cn(
                            "p-6 space-y-4",
                            index === planCards.length - 1
                                ? "text-gray-300"
                                : "border-gray-100 bg-gray-50/50",
                        )}
                    >
                        <h2 className="font-semibold text-xl">{card.title}</h2>

                        <div>
                            <div className="flex items-baseline space-x-1">
                                <span className="text-3xl font-bold">
                                    {card.price}
                                </span>
                                <span className="text-xs font-medium">MMK</span>
                            </div>
                            <p className="text-xs mt-0.5">Monthly Plan</p>
                        </div>

                        <p className="text-sm line-clamp-3 min-h-[60px]">
                            {card.description}
                        </p>

                        <button className="relative overflow-hidden w-full py-3 px-6 rounded-xl border border-primary font-medium transition-all duration-300 group cursor-pointer">
                            <span className="absolute inset-0 bg-secondary w-0 transition-all duration-500 ease-out group-hover:w-full z-0"></span>

                            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                                Request {card.title}
                            </span>
                        </button>
                    </div>

                    {/* Plan Details List */}
                    <div className="p-10">
                        <div className="p-6 space-y-4 flex-1 text-xs bg-linear-to-b from-primary to-secondary text-gray-300 rounded-2xl">
                            <h3 className="font-semibold uppercase tracking-wider text-[11px] ">
                                Plan Specifications
                            </h3>
                            <dl className="space-y-3">
                                {Object.entries(card.details).map(
                                    ([key, value]) => (
                                        <div
                                            key={key}
                                            className="flex items-center space-x-3 pb-2.5 last:border-0 last:pb-0"
                                        >
                                            {/* <dt className="text-gray-500 font-medium">
                                                {detailLabels[key] || key}
                                            </dt> */}
                                            <dt className=" font-medium">
                                                <SquareCheck />
                                            </dt>
                                            <dd className=" font-semibold leading-normal">
                                                {value}
                                            </dd>
                                        </div>
                                    ),
                                )}
                            </dl>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
