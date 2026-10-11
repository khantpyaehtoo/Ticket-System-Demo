import { SquareCheck } from "lucide-react";
import React from "react";
import { PlanCardType } from "../page";

interface PlanCardProps {
    planCards: PlanCardType[];
}

export default function PlanDetailsCard({ planCards }: PlanCardProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-6">
            {planCards.map((plan, planIndex) => (
                <div
                    key={planIndex}
                    className="border-2 border-secondary rounded-xl px-6 py-10 bg-white shadow-sm hover:shadow-md transition-shadow space-y-10"
                >
                    <div className="space-y-2">
                        <h3 className="text-base font-medium">{plan.title}</h3>
                        <h1 className="text-2xl font-semibold">
                            {plan.price} / month
                        </h1>
                        <div className="space-x-3 text-sm font-medium text-gray-700">
                            <span>{plan.details.totalHours}</span>
                            <span>
                                (Up to {plan.details.hoursUpto} Hours / year)
                            </span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <p className="text-md font-semibold">
                            Services Included:{" "}
                        </p>
                        <ul className="space-y-3">
                            {plan.includeService?.map(
                                (service, serviceIndex) => (
                                    <li
                                        key={serviceIndex}
                                        className="flex items-start gap-3"
                                    >
                                        <dt className="text-gray-500 font-medium">
                                            <SquareCheck />
                                        </dt>
                                        <dd className="text-gray-700 font-semibold leading-normal text-sm">
                                            {service}
                                        </dd>
                                    </li>
                                ),
                            )}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}
