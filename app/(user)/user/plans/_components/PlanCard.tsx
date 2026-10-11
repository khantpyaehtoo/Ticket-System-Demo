import { Button } from "antd";
import { SquareCheck } from "lucide-react";
import React from "react";

export default function PlanCard({ planCards }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {planCards.map((card, index) => (
                <div
                    key={index}
                    className="border border-gray-200 rounded-xl shadow-sm bg-white flex flex-col justify-between overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                    {/* Header & CTA */}
                    <div className="p-6 border-b border-gray-100 bg-gray-50/50 space-y-4">
                        <h2 className="font-semibold text-xl text-gray-800">
                            {card.title}
                        </h2>

                        <div>
                            <div className="flex items-baseline space-x-1">
                                <span className="text-3xl font-bold text-gray-900">
                                    {card.price}
                                </span>
                                <span className="text-xs text-gray-500 font-medium">
                                    MMK
                                </span>
                            </div>
                            <p className="text-xs text-gray-500 mt-0.5">
                                Monthly Plan
                            </p>
                        </div>

                        <p className="text-sm text-gray-600 line-clamp-3 min-h-[60px]">
                            {card.description}
                        </p>

                        <Button
                            type="primary"
                            block
                            size="large"
                            className="bg-blue-600 hover:bg-blue-700 font-medium"
                        >
                            Request {card.title}
                        </Button>
                    </div>

                    {/* Plan Details List */}
                    <div className="p-6 space-y-4 flex-1 text-xs">
                        <h3 className="font-semibold text-gray-800 uppercase tracking-wider text-[11px] text-gray-400">
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
                                        <dt className="text-gray-500 font-medium">
                                            <SquareCheck />
                                        </dt>
                                        <dd className="text-gray-800 font-semibold leading-normal">
                                            {value}
                                        </dd>
                                    </div>
                                ),
                            )}
                        </dl>
                    </div>
                </div>
            ))}
        </div>
    );
}
