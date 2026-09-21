import { Tag } from "antd";
import { AlarmClock } from "lucide-react";
import React from "react";

export default function NotificationCard() {
    return (
        <div className="w-full">
            <div className="border border-primary/20 bg-white hover:border-primary/40 transition-colors p-4 sm:p-5 rounded-2xl shadow-sm">
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                    {/* Icon Section */}
                    <div className="p-2 sm:p-2.5 bg-amber-500/10 text-amber-600 rounded-xl shrink-0">
                        <AlarmClock className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    {/* Content & Metadata Section */}
                    <div className="flex-1 min-w-0 space-y-2">
                        <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-2">
                            {/* Title */}
                            <h2 className="text-base sm:text-lg font-semibold text-gray-900 leading-snug wrap-break-word">
                                Your mins are very low: 10 mins remaining
                            </h2>

                            {/* Tag & Time */}
                            <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto">
                                <Tag
                                    color="success"
                                    className="rounded-full! px-2.5! py-0.5! text-xs font-medium border-none m-0!"
                                >
                                    new
                                </Tag>
                                <span className="text-xs text-gray-400 font-normal">
                                    15 mins ago
                                </span>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                            You don't have enough remaining minutes to submit
                            additional tickets. Please contact us if you want to
                            purchase extra minutes now.
                        </p>

                        {/* Action Link */}
                        <div className="pt-1">
                            <a
                                href="#"
                                className="inline-block text-xs sm:text-sm font-semibold text-primary hover:underline transition-all"
                            >
                                Check your mins &rarr;
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
