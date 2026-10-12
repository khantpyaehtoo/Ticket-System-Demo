import React from "react";
import TicketTable from "./_components/TicketTable";
import TimerSection from "./_components/TimerSection";
import HeaderOverviewCards from "./_components/HeaderOverviewCards";
import PieSemiDonut from "./_components/PieSemiDonut";
import PieDonutChart from "./_components/PieDonutChart";

export default function Page() {
    return (
        <section className="text-black max-w-[1600px] mx-auto space-y-10">
            {/* Header Section */}
            <div className="flex justify-center items-center pb-5 md:pb-8">
                <div className="text-center space-y-3 md:space-y-4 max-w-2xl">
                    <h1 className="font-medium text-2xl md:text-3xl">
                        Your Work Overview
                    </h1>
                    <p className="text-sm md:text-base text-gray-600">
                        Track your assigned tickets, current progress, and tasks
                        that need your attention.
                    </p>
                </div>
            </div>

            {/* Header Overview Cards */}
            <HeaderOverviewCards />

            {/* Start Time Card */}
            <TimerSection />

            {/* Table */}
            <div className="flex flex-col-reverse lg:flex-row space-x-7 items-stretch h-full">
                <TicketTable />
                <div className="w-full lg:w-1/2 space-y-6 flex flex-row lg:flex-col space-x-7 mb-10 items-stretch">
                    <PieSemiDonut />
                    <PieDonutChart />
                </div>
            </div>
        </section>
    );
}
