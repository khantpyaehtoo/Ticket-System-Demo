import { CircleCheck, Hourglass, RotateCcwClock, Ticket } from "lucide-react";
import React from "react";

export default function page() {
    return (
        <section className="text-black p-10">
            {/* Header Section */}
            <div className="flex justify-center items-center pb-10">
                <div className="text-center space-y-6">
                    <h1 className="font-medium text-2xl">Your Work Overview</h1>
                    <p>
                        Track your assigned tickets, current progress, and tasks
                        that need your attention.
                    </p>
                </div>
            </div>

            {/* Header Card Section */}
            <section className="grid grid-cols-4 space-x-10">
                {/* Card Wrapper */}
                <div className="border border-gray-300 shadow-sm rounded-2xl py-4 px-5 space-y-3">
                    {/* Card Header */}
                    <div className="flex justify-between items-center">
                        <p>Assigned Tickets</p>
                        <div className="bg-black text-white p-3 rounded-lg">
                            <Ticket />
                        </div>
                    </div>

                    {/* Card Content */}
                    <div className="border-b border-b-gray-200 py-2 flex items-center space-x-7">
                        <p className="text-3xl font-medium">10</p>

                        <div className="border border-gray-300 py-2 px-3 flex items-center space-x-3 rounded-xl">
                            <div className="w-3 h-3 bg-red-500 rounded-full" />
                            <p className="text-red-500">Critical Tickets - 3</p>
                        </div>
                    </div>

                    <div>
                        <p>Total Assigned Tickets - 10</p>
                    </div>
                </div>

                {/* Card Wrapper */}
                <div className="border border-gray-300 shadow-sm rounded-2xl py-4 px-5 space-y-3">
                    {/* Card Header */}
                    <div className="flex justify-between items-center">
                        <p>Assigned Tickets</p>
                        <div className="bg-black text-white p-3 rounded-lg">
                            <Hourglass />
                        </div>
                    </div>

                    {/* Card Content */}
                    <div className="border-b border-b-gray-200 py-2 flex items-center space-x-7">
                        <p className="text-3xl font-medium">10</p>

                        <div className="border border-gray-300 py-2 px-3 flex items-center space-x-3 rounded-xl">
                            <div className="w-3 h-3 bg-red-500 rounded-full" />
                            <p className="text-red-500">Critical Tickets - 3</p>
                        </div>
                    </div>

                    <div>
                        <p>Total Assigned Tickets - 10</p>
                    </div>
                </div>

                {/* Card Wrapper */}
                <div className="border border-gray-300 shadow-sm rounded-2xl py-4 px-5 space-y-3">
                    {/* Card Header */}
                    <div className="flex justify-between items-center">
                        <p>Assigned Tickets</p>
                        <div className="bg-black text-white p-3 rounded-lg">
                            <CircleCheck />
                        </div>
                    </div>

                    {/* Card Content */}
                    <div className="border-b border-b-gray-200 py-2 flex items-center space-x-7">
                        <p className="text-3xl font-medium">10</p>

                        <div className="border border-gray-300 py-2 px-3 flex items-center space-x-3 rounded-xl">
                            <div className="w-3 h-3 bg-red-500 rounded-full" />
                            <p className="text-red-500">Critical Tickets - 3</p>
                        </div>
                    </div>

                    <div>
                        <p>Total Assigned Tickets - 10</p>
                    </div>
                </div>

                {/* Card Wrapper */}
                <div className="border border-gray-300 shadow-sm rounded-2xl py-4 px-5 space-y-3">
                    {/* Card Header */}
                    <div className="flex justify-between items-center">
                        <p>Assigned Tickets</p>
                        <div className="bg-black text-white p-3 rounded-lg">
                            <RotateCcwClock />
                        </div>
                    </div>

                    {/* Card Content */}
                    <div className="border-b border-b-gray-200 py-2 flex items-center space-x-7">
                        <p className="text-3xl font-medium">10</p>

                        <div className="border border-gray-300 py-2 px-3 flex items-center space-x-3 rounded-xl">
                            <div className="w-3 h-3 bg-red-500 rounded-full" />
                            <p className="text-red-500">Critical Tickets - 3</p>
                        </div>
                    </div>

                    <div>
                        <p>Total Assigned Tickets - 10</p>
                    </div>
                </div>
            </section>
        </section>
    );
}
