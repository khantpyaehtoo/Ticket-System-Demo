"use client";

import { useState } from "react";
import {
    ArrowLeft,
    Check,
    ChevronDown,
    Calendar as CalendarIcon,
} from "lucide-react";
import Link from "next/link";
import { DatePicker } from "antd";
import { PlanCardType } from "../page";

interface MobileMultiStepUpgradeProps {
    planCards: PlanCardType[];
    selectedPlan: PlanCardType;
    setSelectedPlan: (plan: PlanCardType) => void;
    selectedReason: string;
    setSelectedReason: (reason: string) => void;
}

export default function MobileMultiStepUpgrade({
    planCards,
    selectedPlan,
    setSelectedPlan,
    selectedReason,
    setSelectedReason,
}: MobileMultiStepUpgradeProps) {
    const [currentStep, setCurrentStep] = useState(1);

    return (
        <div className="block lg:hidden min-h-screen bg-background text-gray-800 p-6">
            {/* Header & Back */}
            <div className="flex items-center justify-between mb-6">
                <Link
                    href="/user/plans"
                    className="inline-flex items-center gap-2 text-sm text-gray-800"
                >
                    <ArrowLeft className="w-8 h-8 bg-white px-2 py-1 rounded-xl text-black shadow-sm" />
                    <span>Upgrade your plan</span>
                </Link>
                <span className="text-xs font-semibold text-gray-500">
                    Step {currentStep} of 3
                </span>
            </div>

            {/* Step 1: Choose Plan & Product */}
            {currentStep === 1 && (
                <div className="space-y-6">
                    <div>
                        <h1 className="text-lg font-bold text-secondary">
                            Choose a Service Plan
                        </h1>
                        <p className="text-xs text-gray-500 mt-1">
                            Select the best plan for your team needs.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {planCards.map((plan, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedPlan(plan)}
                                className={`relative p-4 rounded-xl border cursor-pointer transition-all bg-white flex flex-col justify-between ${
                                    selectedPlan.title === plan.title
                                        ? "border-secondary ring-1 ring-secondary shadow-sm"
                                        : "border-gray-200"
                                }`}
                            >
                                {selectedPlan.title === plan.title && (
                                    <div className="absolute top-3 right-3 bg-secondary text-white rounded-full p-0.5">
                                        <Check className="w-3.5 h-3.5" />
                                    </div>
                                )}
                                <div className="space-y-1">
                                    <h3 className="text-xs font-semibold text-gray-500">
                                        {plan.title}
                                    </h3>
                                    <h4 className="text-base font-bold text-gray-900">
                                        {plan.price} MMK{" "}
                                        <span className="text-[10px] font-normal text-gray-400">
                                            (Monthly Fees)
                                        </span>
                                    </h4>
                                    <p className="text-xs text-gray-500 pt-2 leading-relaxed">
                                        {plan.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-2 pt-2">
                        <label className="text-sm font-semibold text-gray-700">
                            Product/Service
                        </label>
                        <div className="relative">
                            <select className="w-full p-3 bg-white border border-gray-200 rounded-xl text-sm appearance-none focus:outline-none focus:border-primary text-gray-800">
                                <option value="">Choose a Product</option>
                                <option value="workspace">
                                    Workspace Enterprise
                                </option>
                                <option value="cloud">
                                    Cloud Server Support
                                </option>
                            </select>
                            <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                    </div>

                    <button
                        onClick={() => setCurrentStep(2)}
                        className="w-full bg-[#22272b] text-white font-medium py-3.5 rounded-xl text-sm shadow-sm mt-4"
                    >
                        Next Step
                    </button>
                </div>
            )}

            {/* Step 2: Company Info & Reason */}
            {currentStep === 2 && (
                <div className="space-y-6">
                    <div>
                        <h1 className="text-lg font-bold text-secondary">
                            Company & Reason
                        </h1>
                        <p className="text-xs text-gray-500 mt-1">
                            Provide your contact and upgrade details.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">
                            Company Name
                        </label>
                        <input
                            type="text"
                            defaultValue="Mari's Nail Salon"
                            className="w-full p-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary text-gray-800"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">
                            Gmail
                        </label>
                        <input
                            type="email"
                            defaultValue="example123@gmail.com"
                            className="w-full p-3 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-primary text-gray-800"
                        />
                    </div>

                    <div className="space-y-3">
                        <label className="text-sm font-semibold text-gray-700">
                            Reason For Upgrade
                        </label>
                        <div className="space-y-2.5 bg-white p-4 border border-gray-200 rounded-xl">
                            <span className="text-xs text-gray-800 block border-b border-b-gray-300 pb-2">
                                Select a reason
                            </span>
                            {[
                                "Need more support hours",
                                "Need faster response times",
                                "Need 24/7 support",
                                "Business growth/ increased usage",
                                "Other",
                            ].map((reason, idx) => (
                                <label
                                    key={idx}
                                    className="flex items-center gap-3 text-sm text-gray-700 cursor-pointer"
                                >
                                    <input
                                        type="radio"
                                        name="upgrade_reason"
                                        checked={selectedReason === reason}
                                        onChange={() =>
                                            setSelectedReason(reason)
                                        }
                                        className="accent-primary"
                                    />
                                    <span>{reason}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-3 mt-4">
                        <button
                            onClick={() => setCurrentStep(1)}
                            className="w-1/2 bg-gray-200 text-gray-800 font-medium py-3.5 rounded-xl text-sm"
                        >
                            Back
                        </button>
                        <button
                            onClick={() => setCurrentStep(3)}
                            className="w-1/2 bg-[#22272b] text-white font-medium py-3.5 rounded-xl text-sm"
                        >
                            Next Step
                        </button>
                    </div>
                </div>
            )}

            {/* Step 3: Date & Summary */}
            {currentStep === 3 && (
                <div className="space-y-6">
                    <div>
                        <h1 className="text-lg font-bold text-secondary">
                            Review & Submit
                        </h1>
                        <p className="text-xs text-gray-500 mt-1">
                            Confirm your start date and plan details.
                        </p>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">
                            Request Start Date
                        </label>
                        <DatePicker
                            size="large"
                            placeholder="Select preferred date"
                            className="w-full py-3 bg-white border border-gray-200 rounded-xl text-sm"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">
                            Plan Change Summary
                        </label>
                        <div className="border border-gray-200 rounded-xl overflow-hidden bg-white text-sm">
                            <div className="flex justify-between p-3 border-b border-gray-100">
                                <span className="text-gray-500">
                                    Current Plan
                                </span>
                                <span className="font-medium text-gray-900">
                                    Basic Plan
                                </span>
                            </div>
                            <div className="flex justify-between p-3 border-b border-gray-100">
                                <span className="text-gray-500">
                                    Request Plan
                                </span>
                                <span className="font-medium text-gray-900">
                                    {selectedPlan.title}
                                </span>
                            </div>
                            <div className="flex justify-between p-3 bg-gray-50/50">
                                <span className="text-gray-500">
                                    Monthly fee
                                </span>
                                <span className="font-bold text-gray-900">
                                    {selectedPlan.price} MMK
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3 mt-4">
                        <button
                            onClick={() => setCurrentStep(2)}
                            className="w-1/2 bg-gray-200 text-gray-800 font-medium py-3.5 rounded-xl text-sm"
                        >
                            Back
                        </button>
                        <button
                            onClick={() => alert("Submitted!")}
                            className="w-1/2 bg-[#22272b] text-white font-medium py-3.5 rounded-xl text-sm"
                        >
                            Submit Request
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
