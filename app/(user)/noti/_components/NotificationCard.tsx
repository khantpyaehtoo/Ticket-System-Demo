import { Tag } from "antd";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { getNotificationStyle, NotificationItem } from "../notificationConfig";

interface NotificationCardProps {
    notification: NotificationItem;
}

export default function NotificationCard({
    notification,
}: NotificationCardProps) {
    const style = getNotificationStyle(notification.type);
    const IconComponent = style.Icon;

    return (
        <div className="w-full">
            <div className="border border-primary/20 bg-white hover:border-primary/40 transition-colors p-4 sm:p-5 rounded-2xl shadow-sm">
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                    <div className="flex items-start space-x-3 sm:space-x-5">
                        {/* Dot indicator shown ONLY if the notification is new */}
                        {notification.isNew ? (
                            <div
                                className={`w-3 h-3 rounded-full mt-2 inline-block bg-indigo-500`}
                            />
                        ) : (
                            <div
                                className={`w-3 h-3 rounded-full mt-2 inline-block border border-gray-500`}
                            />
                        )}

                        <div
                            className={`p-2 sm:p-2.5 rounded-xl shrink-0 ${style.iconBg}`}
                        >
                            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                    </div>

                    <div className="flex-1 min-w-0 space-y-2">
                        <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-2">
                            <h2 className="text-base sm:text-lg font-semibold text-gray-900 leading-snug wrap-break-word">
                                {notification.title}
                            </h2>

                            <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto">
                                {/* Tag shown ONLY if the notification is new */}
                                {notification.isNew && (
                                    <Tag
                                        color="blue"
                                        className="rounded-full! px-2.5! py-0.5! text-xs font-medium border-none m-0!"
                                    >
                                        New
                                    </Tag>
                                )}
                                <span className="text-xs text-gray-800 font-medium">
                                    {notification.time}
                                </span>
                            </div>
                        </div>

                        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                            {notification.description}
                        </p>

                        {notification.linkText && (
                            <div className="pt-1">
                                <Link
                                    href={notification.linkHref || "#"}
                                    className="inline-block text-xs sm:text-sm font-semibold text-link hover:underline cursor-pointer group transition-all"
                                >
                                    <span>
                                        {notification.linkText}{" "}
                                        <ArrowRight
                                            size={18}
                                            className="inline transition-transform duration-200 group-hover:translate-x-1"
                                        />
                                    </span>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
