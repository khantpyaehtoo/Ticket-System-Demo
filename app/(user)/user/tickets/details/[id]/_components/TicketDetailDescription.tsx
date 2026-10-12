"use client";

import profileImg from "@/public/defaultProfile.jpg";
import { useUserStore } from "@/store/useUserStore";
import { TicketDetailsType } from "@/types/ticket";
import { Avatar, Button, Modal } from "antd";
import { Clock } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

interface TicketDetailsProps {
    ticket: TicketDetailsType;
}

export default function TicketDetailDescription({
    ticket,
}: TicketDetailsProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const imageSrc = useUserStore((state) => state.imageSrc);
    const avatarUrl = imageSrc || profileImg.src;

    // ${ticket?.description}
    const text = `Hello Support,\n\nI’m experiencing a technical issue with the system. Some features are not working properly, and the page sometimes becomes unresponsive. I have tried refreshing the page and logging in again, but the issue still persists.\n\nPlease check and help resolve this issue.\n\nBest regards,\nMegan Fox`;

    const CHARACTER_LIMIT = 180;
    const isLongText = text.length > CHARACTER_LIMIT;
    return (
        <>
            <p className="whitespace-pre-line text-foreground/90 text-sm">
                {isLongText ? text.slice(0, CHARACTER_LIMIT) : text}
                {isLongText && (
                    <>
                        <span>... </span>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="font-semibold hover:underline focus:outline-none inline text-blue-800"
                        >
                            See More
                        </button>
                    </>
                )}
            </p>

            <Modal
                title={null}
                open={isModalOpen}
                footer={null}
                closable={false}
                width={800}
                className="zero-padding-modal"
                centered
            >
                <div className="space-y-3">
                    <div className="bg-primary text-white w-full rounded-t-2xl">
                        <div className="flex items-start gap-3 sm:gap-4 p-6! sm:p-4 rounded-lg">
                            <Avatar
                                src={
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={avatarUrl}
                                            alt="User Avatar"
                                            fill
                                            priority
                                            sizes="40px"
                                            className="object-cover rounded-full"
                                        />
                                    </div>
                                }
                                size={40}
                                className="ring-2 ring-offset-2 ring-primary border-none!"
                            />

                            {/* User & Time Info */}
                            <div className="flex-1 min-w-0 space-y-1">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2">
                                    <div className="flex items-center space-x-6">
                                        <h3 className="font-semibold text-sm sm:text-base leading-none">
                                            {ticket?.senderName || "Megan Fox"}
                                        </h3>

                                        <p className="truncate max-w-[200px] sm:max-w-none">
                                            &lt;
                                            {ticket?.senderEmail ||
                                                "meganfox@gmail.com"}
                                            &gt;
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                        <Clock className="w-3.5 h-3.5 shrink-0" />
                                        <span>
                                            {ticket?.createdAt ||
                                                "15 Sep, 11:00 AM"}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground break-all">
                                    <span>
                                        To:{" "}
                                        {ticket?.recipientEmail ||
                                            "digitalbase@gmail.com"}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 pb-6">
                        <p className="whitespace-pre-line text-foreground/90 text-sm py-2 px-4">
                            {text}
                        </p>
                        <div className="border-t border-t-gray-300 flex justify-end w-full pt-3 mt-4">
                            <Button
                                type="primary"
                                onClick={() => setIsModalOpen(false)}
                            >
                                Back
                            </Button>
                        </div>
                    </div>
                </div>
            </Modal>

            {/* Attachments / Image Session */}
            <div className="pt-4 border-t border-primary/10">
                <p className="text-xs font-semibold text-muted-foreground mb-3">
                    Attachments ({ticket?.attachments?.length || 2})
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-lg">
                    <div className="w-full aspect-video sm:aspect-square bg-primary/10 rounded-lg border border-primary/20 flex items-center justify-center text-xs text-muted-foreground p-2 text-center">
                        Attachment 1
                    </div>
                    <div className="w-full aspect-video sm:aspect-square bg-primary/10 rounded-lg border border-primary/20 flex items-center justify-center text-xs text-muted-foreground p-2 text-center">
                        Attachment 2
                    </div>
                </div>
            </div>
        </>
    );
}
