import { Tag } from "antd";
import { AlarmClock } from "lucide-react";
import React from "react";

export default function NotificationCard() {
    return (
        <div className="flex justify-between items-center mx-auto">
            <div className="border border-primary w-full py-5 px-7 rounded-2xl">
                <div className="flex gap-3">
                    <AlarmClock />
                    <div className="flex">
                        <div className="w-[80%]">
                            <h1 className="text-xl font-medium">
                                Your mins are very low: 10 mins remaining
                            </h1>
                            <p className="text-gray-400">
                                You don't have enough remaining minutes to
                                submit additional tickets. Please contact us if
                                you want to purchase extra minutes now.
                            </p>
                            <a>Check your mins</a>
                        </div>
                        <div className="h-full gap-4">
                            <Tag
                                color="success"
                                className="rounded-full! px-3 py-2"
                            >
                                new
                            </Tag>
                            <span>15 mins ago</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
