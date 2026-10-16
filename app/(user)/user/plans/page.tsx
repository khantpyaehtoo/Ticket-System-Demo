import React from "react";
import PlanCard from "./_components/PlanCard";
import PlanDetailsCard from "./_components/PlanDetailsCard";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Human-readable labels for the details keys
// const detailLabels: Record<string, string> = {
//     totalHours: "Total SLA Hours",
//     hostingPayment: "Hosting Payment",
//     retainerDiscount: "Retainer Discount",
//     responseTime: "Response Time",
//     officeHour: "Support Hours",
//     ratePerHours: "Hourly Rate",
//     maintenance: "Maintenance Frequency",
//     hostingMonitoring: "Hosting Monitoring",
// };

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

export default function PlanUpgradePage() {
    const planCards: PlanCardType[] = [
        {
            title: "Basic Plan",
            price: "300,000",
            description:
                "Essential support coverage for small teams and basic service needs.",
            details: {
                totalHours: "10 Hours / Month",
                hoursUpto: "120 Hours / Years",
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
                hoursUpto: "300 Hours / Years",
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
                hoursUpto: "600 Hours / Years",
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

    return (
        <section className="text-gray-900 max-w-7xl mx-auto px-4 py-8 space-y-10">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-800">
                <Link
                    href="/user/dashboard"
                    className="hover:text-gray-500 transition-colors font-medium"
                >
                    Back to Dashboard
                </Link>
                <span className="text-gray-800 font-bold">
                    <ChevronRight />
                </span>
                <span className="text-blue-800 font-medium">
                    Request Plan Upgrade
                </span>
            </nav>

            {/* Header Section */}
            <div className="space-y-10">
                <div className="flex justify-center items-center pb-2">
                    <div className="text-center space-y-3 max-w-2xl">
                        <h1 className="font-semibold text-2xl md:text-3xl text-gray-800">
                            Request a Plan Upgrade
                        </h1>
                        <p className="text-sm md:text-base text-gray-600 tracking-wide leading-relaxed">
                            Need more support hours for your products and
                            services? Choose a plan that better fits your
                            current needs and submit a request for our team to
                            review.
                        </p>
                    </div>
                </div>

                {/* Plan Cards Grid */}
                <PlanCard planCards={planCards} />
            </div>

            {/* Plan Details & Scope */}
            <div>
                {/* Header Section */}
                <div className="flex justify-center items-center pb-2">
                    <div className="text-center space-y-3 max-w-2xl">
                        <h1 className="font-semibold text-2xl md:text-3xl text-gray-800">
                            Plan Details & Scope
                        </h1>
                        <p className="text-sm md:text-base text-gray-600 tracking-wide leading-relaxed">
                            Compare the support coverage, SLA hours, response
                            times, and service benefits included in each plan.
                        </p>
                    </div>
                </div>

                {/* Detail Card */}
                <PlanDetailsCard planCards={planCards} />
            </div>
        </section>
    );
}
