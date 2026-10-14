import { SquareCheck } from "lucide-react";
import React from "react";
import { PlanCardType } from "../page";

interface PlanCardProps {
    planCards: PlanCardType[];
}

export default function PlanDetailsCard({ planCards }: PlanCardProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-6">
            {planCards.map((plan, planIndex) => {
                const isLast = planIndex === planCards.length - 1;

                return (
                    <div
                        key={planIndex}
                        className={`rounded-xl px-6 py-10 bg-white space-y-10 transition-all duration-300 cursor-pointer ${
                            isLast
                                ? // နောက်ဆုံးကဒ်အတွက် သီးသန့် Gradient သို့မဟုတ် Highlight Border Glow
                                  "border-2 border-secondary shadow-md hover:shadow-2xl hover:shadow-secondary/30 hover:border-primary"
                                : // ပုံမှန်ကဒ်များအတွက် Hover လုပ်ရင် Glow ဖြစ်ပြီး Border ပိုထင်ရှားမယ့် ပုံစံ
                                  "border border-secondary/60 shadow-sm hover:shadow-xl hover:shadow-primary/10 hover:border-primary"
                        }`}
                    >
                        <div className="space-y-2">
                            <h3 className="text-base font-medium">
                                {plan.title}
                            </h3>
                            <h1 className="text-2xl font-semibold">
                                {plan.price} / month
                            </h1>
                            <div className="space-x-3 text-sm font-medium text-gray-700">
                                <span>{plan.details.totalHours}</span>
                                <span>
                                    (Up to {plan.details.hoursUpto} Hours /
                                    year)
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
                );
            })}
        </div>
    );
}
