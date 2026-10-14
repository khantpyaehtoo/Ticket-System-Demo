"use client";

import React, { useState } from "react";
import {
    ArrowLeft,
    Check,
    Calendar as CalendarIcon,
    ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { DatePicker } from "antd";

export interface PlanDetails {
    totalHours: string;
    hoursUpto: string;
    retainerDiscount: string;
    responseTime: string;
    officeHour: string;
    hostingMonitoring: string;
    ratePerHours: string;
}

export interface PlanCardType {
    title: string;
    price: string;
    description: string;
    details: PlanDetails;
    includeService: string[];
}

export default function UpgradePlanPage() {
    const planCards: PlanCardType[] = [
        {
            title: "Basic Plan",
            price: "300,000",
            description:
                "Essential support coverage for small teams and basic service needs.",
            details: {
                totalHours: "10 Hours / Month",
                hoursUpto: "Up to 120 Hours / Years",
                retainerDiscount: "Standard Rate",
                responseTime: "Within 24 Hours",
                officeHour: "Office Hours Only (Mon-Fri, 9AM - 5PM)",
                hostingMonitoring: "Monthly (Hosting & Monitoring)",
                ratePerHours: "15,000 MMK / Hr",
            },
            includeService: [
                "Web / Application hosting uptime monitoring (Monthly)",
                "Regular updates, performance checks, and backend optimizations (Quarterly)",
                "SSL renewals, malware scans, and vulnerability patching (Semi-Annual)",
                "Post-paid hosting management",
            ],
        },
        {
            title: "Advance Plan",
            price: "500,000",
            description:
                "Extended support coverage with more SLA hours for growing teams and increasing service needs.",
            details: {
                totalHours: "25 Hours / Month",
                hoursUpto: "Up to 300 Hours / Years",
                retainerDiscount: "15% Discount on Retainer",
                responseTime: "Within 8-12 Hours",
                officeHour: "Office Hours Only (Mon-Fri, 9AM - 5PM)",
                hostingMonitoring: "Monthly (Hosting & Monitoring)",
                ratePerHours: "15,000 MMK / Hr",
            },
            includeService: [
                "Priority queue for technical support requests via email and chat",
                "Monthly system maintenance and performance optimizatioins",
                "Quaterly security scans, SSL renewals, and patching",
                "Post-paid hosting management",
            ],
        },
        {
            title: "Enterprise Plan",
            price: "850,000",
            description:
                "Comprehensive support coverage for scaling businesses and high-availability operations.",
            details: {
                totalHours: "50 Hours / Month",
                hoursUpto: "Up to 600 Hours / Years",
                retainerDiscount: "25% Discount on Retainer",
                responseTime: "Within 1-2 Hours (24/7 for P1)",
                officeHour:
                    "24/7 Coverage (Round-the-clock for P1 critical issues)",
                hostingMonitoring: "Continuous 24/7 (Hosting & Monitoring)",
                ratePerHours: "12,000 MMK / Hr",
            },
            includeService: [
                "Highest priority support with direct email, chat and ticketing system tracking account",
                "Bi-weekly system updates, database optimizations, and speed tuning",
                "Monthly vulnerability patching, malware scanning, and security audits",
                "Post-paid hosting management",
            ],
        },
    ];

    const [selectedPlan, setSelectedPlan] = useState<PlanCardType>(
        planCards[0],
    );
    const [selectedReason, setSelectedReason] = useState("");

    return (
        <div className="min-h-screen bg-white flex flex-col lg:flex-row text-gray-800">
            <div className="w-full lg:w-[38%] bg-[#1f1b2e] text-white p-8 lg:p-12 flex flex-col justify-between">
                <div className="space-y-8">
                    {/* Back Button */}
                    <Link
                        href="/user/dashboard"
                        className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Upgrade your plan</span>
                    </Link>

                    {/* Current Selected Plan Info */}
                    <div className="space-y-4">
                        <div>
                            <span className="text-xs uppercase tracking-wider text-gray-400 font-medium">
                                {selectedPlan.title}
                            </span>
                            <h1 className="text-3xl font-bold mt-1 text-white">
                                {selectedPlan.price} MMK{" "}
                                <span className="text-sm font-normal text-gray-400">
                                    (Monthly Fees)
                                </span>
                            </h1>
                            <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                                {selectedPlan.description}
                            </p>
                        </div>

                        {/* Details Check List */}
                        <div className="space-y-3 pt-4 border-t border-white/10 text-sm">
                            <div className="flex items-center gap-3 text-gray-200">
                                <Check className="w-4 h-4 text-white shrink-0" />
                                <span>
                                    {selectedPlan.details.totalHours} (
                                    {selectedPlan.details.hoursUpto})
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-200">
                                <Check className="w-4 h-4 text-white shrink-0" />
                                <span>
                                    {selectedPlan.details.retainerDiscount}
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-200">
                                <Check className="w-4 h-4 text-white shrink-0" />
                                <span>{selectedPlan.details.responseTime}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-200">
                                <Check className="w-4 h-4 text-white shrink-0" />
                                <span>{selectedPlan.details.officeHour}</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-200">
                                <Check className="w-4 h-4 text-white shrink-0" />
                                <span>{selectedPlan.details.ratePerHours}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-xs text-gray-500 pt-10">
                    DigitalBase Support Operations Center
                </div>
            </div>

            {/* Right Side: Form Section */}
            <div className="w-full lg:w-[62%] p-8 lg:p-12 overflow-y-auto bg-[#fcf9f7] text-gray-900">
                <div className="max-w-2xl mx-auto space-y-8">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            Request a Plan Upgrade
                        </h1>
                        <p className="text-sm text-gray-500 mt-1">
                            Submit a request to upgrade your current support
                            plan. Our service team will review your request and
                            contact you with the next steps.
                        </p>
                    </div>

                    {/* Choose a Service Plan */}
                    <div className="space-y-3">
                        <label className="text-sm font-semibold text-gray-700">
                            Choose a Service Plan
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {planCards.map((plan, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedPlan(plan)}
                                    className={`relative p-4 rounded-xl border cursor-pointer transition-all bg-white flex flex-col justify-between ${
                                        selectedPlan.title === plan.title
                                            ? "border-primary ring-1 ring-primary shadow-sm"
                                            : "border-gray-200 hover:border-gray-300"
                                    }`}
                                >
                                    {selectedPlan.title === plan.title && (
                                        <div className="absolute top-3 right-3 bg-primary text-white rounded-full p-0.5">
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
                    </div>

                    {/* Product/Service Dropdown */}
                    <div className="space-y-2">
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

                    {/* Company Name */}
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

                    {/* Gmail */}
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

                    {/* Reason For Upgrade */}
                    <div className="space-y-3">
                        <label className="text-sm font-semibold text-gray-700">
                            Reason For Upgrade
                        </label>
                        <div className="space-y-2.5 bg-white p-4 border border-gray-200 rounded-xl">
                            <span className="text-xs text-gray-400 block mb-2">
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

                    {/* Request Start Date */}
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700">
                            Request Start Date
                        </label>
                        <DatePicker
                            size="large"
                            placeholder="Select preferred date"
                            className="w-full py-3 bg-white border border-gray-200 rounded-xl text-sm hover:border-primary focus:border-primary shadow-sm"
                            onChange={(date, dateString) => {
                                console.log("Selected Date:", dateString);
                            }}
                        />
                    </div>

                    {/* Plan Change Summary Table */}
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
                        <p className="text-[11px] text-gray-400 pt-1">
                            Our service team will confirm the final pricing and
                            plan details
                        </p>
                    </div>

                    {/* Submit Button */}
                    <button className="w-full bg-[#22272b] hover:bg-black text-white font-medium py-3.5 rounded-xl transition-colors cursor-pointer text-sm shadow-sm">
                        Submit Request
                    </button>
                </div>
            </div>
        </div>
    );
}
